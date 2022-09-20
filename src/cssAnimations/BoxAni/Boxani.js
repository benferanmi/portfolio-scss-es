import React from "react";
import './Boxani.scss'
import set1 from '../../assets/image/set.jpg'
import set2 from '../../assets/image/set (1).png'
import set3 from '../../assets/image/set (2).jpg'
import set4 from '../../assets/image/set (3).png'
import set5 from '../../assets/image/set (4).png'
import set6 from '../../assets/image/set (5).png'



const Boxani = () => {
    return (
        <div className="outer">
            <div className="inside">
                <div className="set1">
                   <img src={set1} alt="set one" /> 
                </div>
                <div className="set2">
                     <img src={set2} alt="set two" />
                </div>
                <div className="set3">
                     <img src={set3} alt="set three" />
                </div>
                <div className="set4">
                    <img src={set4} alt="set four" />
                </div>
                <div className="set5">
                    <img src={set5} alt="set five" />
                </div>
                <div className="set6">
                    <img src={set6} alt="set six" />
                </div>
                
                
            </div>
        </div>
    )
}

export default Boxani;