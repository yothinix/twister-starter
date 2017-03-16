import React from 'react'
import MainPanel from './MainPanel'
import Profile from './Profile'

const App = () => (
  <div className="container body">
    <div className="left-panel">
      <Profile
        name={'Yothin M'}
        username={'yothinix'}
        numTweets={123}
        numFollowers={456}
        numFollowings={789}
        isFollowing={true}
        isOwnProfile={false}
      />
    </div>
    <MainPanel enableTweet />
  </div>
)

export default App
