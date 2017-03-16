import React from 'react'

const ProfileDetail = props => (
  <div className="detail">
    <div className="col">
      <div className="text">Tweets</div>
      <div className="number">{props.numTweets}</div>
    </div>
    <div className="col">
      <div className="text">Followers</div>
      <div className="number">{props.numFollowers}</div>
    </div>
    <div className="col">
      <div className="text">Following</div>
      <div className="number">{props.numFollowings}</div>
    </div>
  </div>
)

ProfileDetail.propTypes = {
  numTweets: React.PropTypes.number,
  numFollowers: React.PropTypes.number,
  numFollowings: React.PropTypes.number,
}

export default ProfileDetail
