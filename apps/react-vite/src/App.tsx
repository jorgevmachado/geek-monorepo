import { Outlet } from 'react-router-dom';

import { Default } from '@geek/ui';


import { config } from './config';

import './App.css';

export default function App() {
    return (
        <Default {...config} user={{
            id: 'xpto',
            cpf: '00256337160',
            name: 'Jorge Luiz Vieira da Silva Machado',
            email: 'jorge.vmachado@gmail.com',
            role: 'ADMIN',
            status: 'ACTIVE',
            createdAt: new Date('2024-01-01'),
            updatedAt:  new Date('2024-01-01'),
        }}>
            <Outlet/>
        </Default>
        
    );
}
