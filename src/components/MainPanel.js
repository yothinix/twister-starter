import React from 'react'

import NewTweet from './NewTweet'
import TweetList from './TweetList'

class MainPanel extends React.Component {

  render() {
    const { name, username, tweets, addToTweetList } = this.props
    return (
      <div className="main-panel">
        {this.props.enableTweet
         ? <NewTweet
            name={name}
            username={username}
            addToTweetList={addToTweetList}
        /> : null}
        <TweetList tweets={tweets} />
      </div>
    )
  }
}

MainPanel.propTypes = {
  name: React.PropTypes.string.isRequired,
  username: React.PropTypes.string.isRequired,
  tweets: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  enableTweet: React.PropTypes.bool.isRequired,
  addToTweetList: React.PropTypes.func.isRequired,
}

export default MainPanel
