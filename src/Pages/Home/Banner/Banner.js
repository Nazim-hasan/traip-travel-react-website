import React from 'react';
import coverPhoto from '../../../Photos/Banner-image.png';
import './Banner.css';
const Banner = () => {
    return (

        <div>
            <img
                    className="d-block w-100 img-fluid"
                    src={coverPhoto}
                    alt=""
                />
                <div className="custom-position">
                <h4 className="text-success">from $890.00</h4>
                <p>to 7 Days tour</p>
                    <h1 className="text-dark fw-bolder">Welcome <span className="text-success">Traip</span></h1>
                    <p>Feel sea breeze, salt in your hair and twittering birds</p>
                </div>
        </div>

        // <div className="banner-area">
        //     <img className="img-fluid" src={coverPhoto} alt="" />
        //     <div className="custom-position">
        //                     <h4 className="text-success">from $890.00</h4>
        //                     <p>to 7 Days tour</p>
        //                     <h1 className="">Welcome <span className="text-success">Traip</span></h1>
        //                     <p>Feel sea breeze, salt in your hair and twittering birds</p>
        //                     <button className="btn btn-success text-white">Read More</button>
        //             {/* <NavLink to="/plans"><button className="btn btn-primary">See All Tour</button></NavLink> */}
        //     </div>
        // </div>
    );
};

export default Banner;