
import { useAlert, useUser } from '@geek/ui/hooks';

import Persist, { OnPersistSubmit } from '@geek/ui/layout/Auth/Persist';

import { authService } from '@/shared/core';

export default function Profile() {
    const { currentUser } = useUser();
    const { addAlert } = useAlert();

    const onSubmit = (data: OnPersistSubmit)=> {
        authService
            .update(currentUser.id, {
                cpf: data.cpf,
                role: data.role,
                name: data.name,
                email: data.email,
                gender: data.gender,
                whatsUp: data.whatsUp,
                dateOfBirth: data.dateOfBirth
            })
            .then(() => {
                addAlert({ type: 'success', message: 'Dados atualizados com sucesso!' });
            })
            .catch((error) => {
                const message = error?.response?.message || 'Algo deu errado, tente novamente mais tarde!';
                addAlert({ type: 'error', message });
            });
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