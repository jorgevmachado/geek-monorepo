import React from 'react';

import type { IUser } from '@geek/business';

import Avatar from '../../components/Avatar';
import Icon from '../../components/Icon';
import Text from '../../components/Text';

import { Menu } from '../interface';

import './Profile.scss';

interface AvatarProps {
    user: IUser;
    initialsLength?: number;
    
}

function AvatarProfile({ user, initialsLength = 2 }: AvatarProps) {
    const picture = user?.picture ? user?.picture : '';
    return (
        <Avatar
            size="large"
            name={user?.name}
            initialsLength={initialsLength}
            src={picture}
        />
    );
}

interface GProfileProps {
    user: IUser;
    children: React.ReactNode;
    className?: string;
    profileMenu: Menu['items'][number];
}
export default function Profile({ user, children, className, profileMenu }: GProfileProps) {
    return (
        <div className={`profile ${className ? className : ''}`}>
            {children}
            <div className="profile__info">
                <AvatarProfile user={user}/>
                <div>
                    <Text className="profile__info--name">{user.name}</Text>
                    <Text className="profile__info--email"><span>{user.email}</span></Text>
                    <button className="profile__info--button" onClick={profileMenu.onRedirect}>
                        {profileMenu.label}
                        <Icon icon="arrow-right" className="profile__info--button-icon"/>
                    </button>
                </div>
            </div>
        </div>
    );
}