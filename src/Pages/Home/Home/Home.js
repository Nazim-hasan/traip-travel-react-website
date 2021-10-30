import React from 'react';
import MoreFeatues from '../../AboutUs/MoreFeatues/MoreFeatues';
import Banner from '../Banner/Banner';
import BookThroughApp from '../BookThroughApp/BookThroughApp';
import HomeServices from '../HomeServices/HomeServices';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeServices></HomeServices>
            <MoreFeatues></MoreFeatues>
            <BookThroughApp></BookThroughApp>
        </div>
    );
};

export default Home;