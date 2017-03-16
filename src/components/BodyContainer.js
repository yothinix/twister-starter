import React from 'react'

import { fetchTweets, fetchProfile, fetchFollowStatus, follow, unfollow } from '../helpers'
import Profile from './Profile'
import MainPanel from './MainPanel'

class BodyContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: 'yothinix',
      tweets: [],
      numFollowers: 0,
      numFollowings: 0,
      isFollowing: false,
    }
    this.addToTweetList = this.addToTweetList.bind(this)
    this.toggleFollow = this.toggleFollow.bind(this)
  }

  componentDidMount() {
    let fetchedData = {}
    fetchTweets(this.props.ownerUsername)
      .then(tweets => { fetchedData.tweets = tweets })
      .then(() => fetchProfile(this.props.ownerUsername))
      .then(profile => {
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

  toggleFollow(username, ownerUsername) {
    if (this.state.isFollowing) {
      unfollow(username, ownerUsername)
        .then(status => this.setState({
          isFollowing: status,
          numFollowers: this.state.numFollowers - 1,

        }))
    } else {
      follow(username, ownerUsername)
        .then(status => this.setState({
          isFollowing: status,
          numFollowers: this.state.numFollowers + 1,
        }))
    }
  }

  render() {
    const ownerUsername = this.props.ownerUsername || this.state.username
    const nameMap = {
      kaizerwing: 'Supasate Choochaisri',
      topscores: 'Arnuparp Viratanapanu',
      jjirawute: 'Jirawute Cheungsirakulwit',
    }
    const ownerName = nameMap[[ownerUsername]]
    const isOwnProfile = this.state.username === ownerUsername

    return (
      <div className="container body">
        <div className="left-panel">
          <Profile
            name={ownerName}
            username={ownerUsername}
            isOwnProfile={isOwnProfile}
            numTweets={this.state.tweets.length}
            numFollowers={this.state.numFollowers}
            numFollowings={this.state.numFollowings}
            isFollowing={this.state.isFollowing}
            toggleFollow={this.toggleFollow}

          />
        </div>
        <MainPanel
          name={ownerName}
          username={ownerUsername}
          tweets={this.state.tweets}
          addToTweetList={this.addToTweetList}
          enableTweet={isOwnProfile}
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
