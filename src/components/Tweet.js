import React from 'react'

const Tweet = ({ name, username, tweet }) => (
  <div className="tweet">
    <div>
      <div className="name">{ name }</div>
      <div className="screen-name">@{ username }</div>
    </div>
    <div className="tweet">{ tweet }</div>
  </div>
)

Tweet.propTypes = {
  name: React.PropTypes.string.isRequired,
  username: React.PropTypes.string.isRequired,
  tweet: React.PropTypes.string.isRequired,
}

export default Tweet
