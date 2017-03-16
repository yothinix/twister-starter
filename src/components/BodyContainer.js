import React from 'react'
import config from '../config'
import Profile from './Profile'
import MainPanel from './MainPanel'

class BodyContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Yothin M',
      username: 'yothinix',
      tweets: [],
      numTweets: 789,
      numFollowers: 123,
      numFollowings: 456,
      isFollowing: false,
    }
    this.addToTweetList = this.addToTweetList.bind(this)
  }

  componentDidMount() {
    const uri = `http://${config.api.host}:${config.api.port}/api/tweets`
    const filter = `{ "where": { "username": "${this.state.username}" }}`
    fetch(`${uri}?filter=${filter}`, {
      mode: 'cors',
    })
    .then(response => response.json())
    .then((tweets) => {
      this.setState({
        tweets: tweets,
      })
    })
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
    return (
      <div className="container body">
        <div className="left-panel">
          <Profile
            name={this.state.name}
            username={this.state.username}
            numTweets={this.state.numTweets}
            numFollowers={this.state.numFollowers}
            numFollowings={this.state.numFollowings}
            isFollowing={this.state.isFollowing}
            isOwnProfile={this.state.isOwnProfile}
          />
        </div>
        <MainPanel
          name={this.state.name}
          username={this.state.username}
          tweets={this.state.tweets}
          addToTweetList={this.addToTweetList}
          enableTweet
        />
      </div>
    )
  }
}

BodyContainer.propTypes = {
  ownerUsername: React.PropTypes.string.isRequired,
  enableTweet: React.PropTypes.bool.isRequired,
}

export default BodyContainer
