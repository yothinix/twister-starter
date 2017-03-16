import React from 'react'
import config from '../config'
import { fetchTweets, fetchProfile, fetchFollowStatus } from '../helpers'
import Profile from './Profile'
import MainPanel from './MainPanel'

class BodyContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Yothin M',
      username: 'kaizerwing',
      tweets: [],
      numTweets: 789,
      numFollowers: 123,
      numFollowings: 456,
      isFollowing: false,
    }
    this.addToTweetList = this.addToTweetList.bind(this)
  }

  componentDidMount() {
    let fetchedData = {}
    fetchTweets(this.state.username)
      .then(tweets => { fetchedData.tweets = tweets })
      .then(() => fetchProfile(this.state.username))
      .then(profile => {
        fetchedData.name = profile.name
        fetchedData.numTweets = profile.numTweets
        fetchedData.numFollowers = profile.numFollowers
        fetchedData.numFollowings = profile.numFollowings
      })
      .then(() => fetchFollowStatus(this.state.username, this.props.ownerUsername))
      .then(status => {
        fetchedData.isFollowing = status
        this.setState(fetchedData)
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
