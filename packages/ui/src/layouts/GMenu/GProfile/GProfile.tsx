import './GProfile.scss';
import GText from '../../../components/GText';

import GAvatar from '../../../components/GAvatar';

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
    user: {
        name: string;
        email: string;
        picture?: string;
    };
    children: React.ReactNode;

}
export default function GProfile({ user, children }: GProfileProps) {
    return (
        <div className="g-profile">
            {children}
            <div className="g-profile__info">
                <Avatar user={user}/>
                <div>
                    <GText className="g-profile__info--name">{user.name}</GText>
                    <GText className="g-profile__info--email"><span>{user.email}</span></GText>
                </div>
            </div>
        </div>
    );
}