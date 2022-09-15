import Sidebar from '../Sidebar/Index';
import { Outlet } from 'react-router-dom';
import './index.scss';
import Home from '../Home';

const Layout = () => {
    return (
    <div className='App'>
    < Sidebar /> 
    <div className='page'>
        <span className='tags top__tags'>&lt;body&gt;</span>

        <Outlet/>

        <span className='tags bottom__tags'><Home />
        </span>
        <br></br>
        <span className='bottom__tags__html'></span>
    </div>
    </div>


)
};

export default Layout;