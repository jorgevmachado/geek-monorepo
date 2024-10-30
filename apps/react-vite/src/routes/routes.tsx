import { Navigate, createBrowserRouter } from 'react-router-dom';

import App from '../App';

import About from '../pages/about';
import Help from '../pages/help';
import Login from '../pages/login';
import Pokemon from '../pages/pokemon';
import Profile from '../pages/profile';


export const router = createBrowserRouter([
    {
        path: '',
        element: (
            <>
                <App />
            </>
        ),
        children: [
            {
                path: '',
                element: <Navigate to="/" replace={true} />,
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/help',
                element: <Help/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/profile',
                element: <Profile/>
            },
            {
                path: '/pokemon',
                element: <Pokemon/>
            },
        ]
    }
], { basename: '/' });