import React from 'react';

import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

import { Menu,  User } from '../../interface';
import GAvatar from '../../../components/GAvatar';
import { GIcon } from '../../../components';
import GText from '../../../components/GText';

import './Profile.scss';

interface AvatarProps {
    user: { name: string; email: string; picture?: string;};
    initialsLength?: number;
    
}

function Avatar({ user, initialsLength = 2 }: AvatarProps) {
    const picture = user?.picture ? user?.picture : '';
    return (
        <GAvatar 
            size="large"
            name={user?.name}
            initialsLength={initialsLength}
            src={picture}
        />
    );
}

interface GProfileProps {
    user: User;
    children: React.ReactNode;
    profileMenu: Menu['items'][number];

}
export default function Profile({ user, children, profileMenu }: GProfileProps) {
    return (
        <div className="profile">
            {children}
            <div className="profile__info">
                <Avatar user={user}/>
                <div>
                    <GText className="profile__info--name">{user.name}</GText>
                    <GText className="profile__info--email"><span>{user.email}</span></GText>
                    <button className="profile__info--button" onClick={profileMenu.onRedirect}>
                        {profileMenu.label}
                        <GIcon icon={<MdOutlineKeyboardArrowRight />} className="profile__info--button-icon"/>
                    </button>
                </div>
            </div>
        </div>
    );
}