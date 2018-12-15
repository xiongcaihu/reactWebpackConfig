import Home from './home/home.jsx';
import Home2 from './home2/home2.jsx';
import Home1 from './home1/home1.jsx';

export default [{
    component: Home,
    childs:[{
        path:'/home1',
        component:Home1
    },{
        path:'/home2',
        component:Home2
    }]
}];