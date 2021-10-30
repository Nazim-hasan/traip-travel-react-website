import React from 'react';
import tourIcon from '../../../Photos/826070.png';
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
                <p>to 7 Days tour  
                    <img className="img-icon" src="https://cdn-icons-png.flaticon.com/512/201/201623.png" alt="" />
                </p>
                    <h1 className="text-dark fw-bolder">Welcome <span className="text-success">Traip</span>
                    <img className="img-icon" src={tourIcon} alt="" /></h1>
                    <p>Feel sea breeze, salt in your hair and twittering birds
                        <img className="img-icon" src="https://cdn-icons-png.flaticon.com/512/3069/3069186.png" alt="" />
                    </p>
                </div>
        </div>
    );
};

export default Banner;