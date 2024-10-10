import './GProfile.scss';
import GText from '../../../components/GText';

interface GProfileProps {
    user: {
        name: string;
        email: string;
    };
    children: React.ReactNode;

}
export default function GProfile({ user, children }: GProfileProps) {
    return (
        <div className="g-profile">
            {children}
            <div className="g-profile__info">
                <GText className="g-profile__info--name">{user.name}</GText>
                <GText className="g-profile__info--email"><span>{user.email}</span></GText>
            </div>
        </div>
    );
}