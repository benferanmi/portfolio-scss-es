import './Allcss.scss';
import Boxani from './BoxAni/Boxani';
import Sidebar from '../component/Sidebar/Index';


const AllAnimationJs = () => {
    return (
        <div className='layout'>
            <Sidebar />
            <div className='rowspace'>
                
            </div>
            <div className='row__1 row'>
                <Boxani />
            </div>

            <div className='row__2 row'>
                <h2>row 2</h2>
            </div>

            <div className='row__3 row'>
                <h1>row 3</h1>
            </div>
        </div>
    )
};

export default AllAnimationJs;