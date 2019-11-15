import MainPage from './pages/Accueil';
import NotFoundPage from './pages/404';

export default [
    {
        path: "/",
        exact: true,
        component: MainPage,
        toPage: 'accueil'
    },
    {
        path: "/accueil",
        exact: true,
        component: MainPage,
        toPage: 'accueil'
    }
];