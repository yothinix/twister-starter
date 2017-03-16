import React from 'react'

import config from '../config'
import NewTweet from './NewTweet'
import TweetList from './TweetList'

class MainPanel extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Yothinix @ ProntoTools',
      username: 'yothinix',
      tweets: [],
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
    const { name, username, tweets } = this.state
    return (
      <div className="main-panel">
        {this.props.enableTweet
         ? <NewTweet
            name={name}
            username={username}
            addToTweetList={this.addToTweetList}
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
}

export default MainPanel
