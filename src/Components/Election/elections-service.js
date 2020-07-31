const xss = require('xss')

const ElectionsService = {
  getAllElections(db) {
    return db
      .from('poll_data_election AS election')
      .select(
        'election.id',
        'election.election_name',
        'election.date_created',
        'election.date_end',
        db.raw(
          `count(DISTINCT vote) AS number_of_votes`
        ),
        db.raw(
          `json_strip_nulls(
            json_build_object(
              'election_id', electio.id,
              'candidate_id', candidate.candidate_id,
              'user_id', user.user_id,
              'date_created', user.date_created,
            )
          ) AS "voter"`
        ),
      )
      .leftJoin(
        'poll_data_vote AS vote',
        'election.id',
        'vote.election_id',
      )
      .leftJoin(
        'poll_data_user AS user',
        'election.election_id',
        'user.user_id',
      )
      .leftJoin(
        'poll_data_candidate AS candidate',
        'candidate.candidate_id',
        'candidate.candidate_name',
        
      )
      .groupBy('election.id', 'candidate.id')
  },

  getById(db, id) {
    return ElectionsService.getAllArticles(db)
      .where('election.id', id)
      .first()
  },

  getVotesForElection(db, election_id) {
    return db
      .from('poll_data_vote AS vote')
      .select(
        'vote.id',
        'vote.date_created',
        db.raw(
          `json_strip_nulls(
            row_to_json(
              (SELECT tmp FROM (
                SELECT
                  user.id,
                  user.date_created,
                  user.date_modified
              ) tmp)
            )
          ) AS "user"`
        )
      )
      .where('vote.election_id', election_id)
      .leftJoin(
        'poll_data_user AS user',
        'vote.user_id',
        'user.id',
      )
      .groupBy('vote.id', 'user.id')
  },

  serializeArticle(election) {
    const { voter } = election
    return {
      id: election.id,
      style: election.style,
      title: xss(election.title),
      content: xss(election.content),
      date_created: new Date(election.date_created),
      number_of_comments: Number(election.number_of_comments) || 0,
      voter: {
        id: voter.id,
        date_created: new Date(voter.date_created),
        date_modified: new Date(voter.date_modified) || null
      },
    }
  },

  serializeArticleComment(vote) {
    const { user } = vote
    return {
      id: vote.id,
      article_id: vote.article_id,
      text: xss(vote.text),
      date_created: new Date(vote.date_created),
      user: {
        id: user.id,
        date_created: new Date(user.date_created),
        date_modified: new Date(user.date_modified) || null
      },
    }
  },
}

module.exports = ElectionsService
