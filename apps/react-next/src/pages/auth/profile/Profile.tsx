
import { useUser } from '@geek/ui/hooks';

import Persist, { OnPersistSubmit } from '@geek/ui/layout/Auth/Persist';


export default function Profile() {
    const { currentUser } = useUser();

    const onSubmit = (onSubmit: OnPersistSubmit)=> {
        console.log('# => onSubmit => ', onSubmit);
    };

    return (
        <Persist
            type="update"
            user={currentUser}
            title="Meus dados"
            onSubmit={onSubmit}
            buttonLabel="Salvar Alterações"
            description="Essas informações sãu utilizadas em sua conta geek"
        />
    );
}