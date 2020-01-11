import React from 'react';
import DefaultProfileImg from '../images/default-profile-image.jpg';

const UserAside = ({ profileImgUrl, username }) => (
    <aside className="col-sm-2">
        <div className="panel panel-default">
            <div className="panel-body">
                <img
                    src={profileImgUrl || DefaultProfileImg}
                    className="img-thumbnail"
                    alt={username}
                    width="200"
                    height="200"
                />
                <p className="text-primary">{username}</p>
            </div>
        </div>
    </aside>
)

export default UserAside;