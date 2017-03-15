import React from 'react'
import Tweet from './Tweet'

const TweetList = ({ tweets }) => (
  <div className="tweet-list">
    { tweets.map(tweet => <Tweet key={tweet.id} {...tweet} />) }
  </div>
)

TweetList.propTypes = {
  tweets: React.PropTypes.arrayOf(React.PropTypes.object),
}

TweetList.defaultProps = {
  tweets: [
    {
      id: 0,
      name: 'Supasate Choochaisri',
      username: 'kaizerwing',
      tweetText: 'Lorem Ipsum ...',
    },
    {
      id: 1,
      name: 'Arnupharp Viratanapanu',
      username: 'topscores',
      tweetText: 'Lorem Ipsum ...',
    },
  ],
}

export default TweetList
