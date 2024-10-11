import './Profile.scss';
import GText from '../../../../components/GText';

import GAvatar from '../../../../components/GAvatar';
import {NavSidebar, User} from "../../../interface";
import {GIcon} from "../../../../components";
import {MdOutlineKeyboardArrowRight} from "react-icons/md";

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
    profileMenu: NavSidebar;

}
export default function Profile({ user, children, profileMenu }: GProfileProps) {
    return (
        <div className="g-profile">
            {children}
            <div className="g-profile__info">
                <Avatar user={user}/>
                <div>
                    <GText className="g-profile__info--name">{user.name}</GText>
                    <GText className="g-profile__info--email"><span>{user.email}</span></GText>
                    <button className="g-profile__info--button" onClick={profileMenu.onRedirect}>
                        {profileMenu.label}
                        <GIcon icon={<MdOutlineKeyboardArrowRight />}/>
                    </button>
                </div>
            </div>
        </div>
    );
}