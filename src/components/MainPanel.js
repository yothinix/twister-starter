import React from 'react'

import NewTweet from './NewTweet'
import TweetList from './TweetList'

class MainPanel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Banana Apple',
      username: 'banana',
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
    this.addToTweetList = this.addToTweetList.bind(this)
  }

  addToTweetList(tweet) {
    const tweetWithId = tweet
    tweetWithId.id = this.state.tweets.length

    this.setState({
      tweets: [
        ...this.state.tweets,
        tweetWithId,
      ],
    })
  }

  render() {
    const { name, username, tweets } = this.state
    return (
      <div className="main-panel">
        <NewTweet
          name={name}
          username={username}
          addToTweetList={this.addToTweetList}
        />
        <TweetList tweets={tweets} />
      </div>
    )
  }
}

MainPanel.propTypes = {
  name: React.PropTypes.string,
  username: React.PropTypes.string,
  tweets: React.PropTypes.arrayOf(React.PropTypes.object),
}

export default MainPanel
