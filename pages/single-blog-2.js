import React, { Component } from 'react';
import TopHeader from '../components/Layouts/TopHeader';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import BlogDetailsTwo from '../components/BlogDetails/BlogDetailsTwo';
import FacilitySlider from '../components/Common/FacilitySlider';
import InstagramFeed from '../components/Common/InstagramFeed';
import Footer from '../components/Layouts/Footer';

class SingleBlog2 extends Component {
    render() {
        return (
            <React.Fragment>
                <TopHeader />
                <Navbar />
                <PageBanner 
                    pageTitle="Blog Details" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Blog Details" 
                /> 
                <BlogDetailsTwo />
                <FacilitySlider />
                <InstagramFeed />
                <Footer />
            </React.Fragment>
        );
    }
}

export default SingleBlog2;