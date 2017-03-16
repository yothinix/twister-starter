import React from 'react'

import ProfileHeader from './ProfileHeader'
import ProfileDetail from './ProfileDefail'
import ProfileFollow from './ProfileFollow'

const Profile = props => (
  <div className="profile">
    <ProfileHeader
      name={props.name}
      username={props.username}
    />
    <ProfileDetail
      numTweets={props.numTweets}
      numFollowers={props.numFollowers}
      numFollowings={props.numFollowings}
    />
    {props.isOwnProfile
      ? null
      : <ProfileFollow
        isFollowing={props.isFollowing}
        handleToggleFollow={props.ToggleFollow}
      />}
  </div>
)

Profile.propTypes = {
  name: React.PropTypes.string,
  username: React.PropTypes.username,
  numTweets: React.PropTypes.number,
  numFollowers: React.PropTypes.number,
  numFollowings: React.PropTypes.number,
  isFollowing: React.PropTypes.bool,
  ToggleFollow: React.PropTypes.func,
  isOwnProfile: React.PropTypes.bool
}

export default Profile