import React from 'react'

const Tweet = ({ name, username, tweetText }) => (
  <div className="tweet">
    <div>
      <div className="name">{ name }</div>
      <div className="screen-name">@{ username }</div>
    </div>
    <div className="tweet">{ tweetText }</div>
  </div>
)

Tweet.propTypes = {
  name: React.PropTypes.string.isRequired,
  username: React.PropTypes.string.isRequired,
  tweetText: React.PropTypes.string.isRequired,
}

export default Tweet
