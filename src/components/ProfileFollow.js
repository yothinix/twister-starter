import React from 'react'

const ProfileFollow = props => (
  <div className="action last-section">
    { props.isFollowing ? (
      <input
        type="button"
        className="btn btn-default btn-lg"
        value="Follow"
        onClick={props.handleToggleFollow}
      />
    ) : (
      <input
        type="button"
        className="btn btn-default btn-lg"
        value="Follow"
        onClick={props.handleToggleFollow}
      />
    )}
  </div>
)

ProfileFollow.propTypes = {
  isFollowing: React.PropTypes.bool,
  handleToggleFollow: React.PropTypes.func,
}

export default ProfileFollow
