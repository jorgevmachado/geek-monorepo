import Update, { OnSubmit } from '@geek/ui/layout/Auth/Update';
import { useUser } from '@geek/ui/hooks';


export default function Profile() {
    const { currentUser } = useUser();

    const onSubmit = (onSubmit: OnSubmit)=> {
        console.log('# => onSubmit => ', onSubmit);
    };

    return (
        <Update
            user={currentUser}
            title="Meus dados"
            onSubmit={onSubmit}
            description="Essas informações sãu utilizadas em sua conta geek"
        />
    );
}