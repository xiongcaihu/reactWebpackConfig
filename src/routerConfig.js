import Home from './home/home.jsx';
import Home2 from './home2/home2.jsx';
import Home1 from './home1/home1.jsx';
import MyRoot from './myRoot.jsx';
import Login from './login.jsx';

export default [{
    path: '/',
    component: MyRoot,
    childs: [{
        path: '/home',
        component: Home,
        childs: [{
            path: '/home/home1',
            component: Home1
        }, {
            path: '/home/home2',
            component: Home2
        }]
    }, {
        path: '/login',
        component: Login
    }]
}];