import React from 'react';
import ActionBanner from '../ActionBanner/ActionBanner.js';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeExplore from '../HomeExplore/HomeExplore';
import HomeExtra from '../HomeExtra/HomeExtra';
import Review from '../Review/Review';

const Home = () => {
    return (
        <>
            <HomeBanner/>
            <ActionBanner/>
            <HomeExplore/>
            <Review/>
            <HomeExtra/>
        </>
    );
};

export default Home;