import React from 'react'

const ProfileFollow = props => (
  <div className="action last-section">
    <input type="button" className="btn btn-default btn-lg" value="Follow" />
  </div>
)

ProfileFollow.propTypes = {
  isFollowing: React.PropTypes.bool,
  handleToggleFollow: React.PropTypes.func,
}

export default ProfileFollow
