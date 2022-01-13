import React from 'react';
import { connect } from 'react-redux';
import TopHeader from '../components/Layouts/TopHeader';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ProductsNoSidebar from '../components/Shop/ProductsNoSidebar';
import FacilitySlider from '../components/Common/FacilitySlider';
import InstagramFeed from '../components/Common/InstagramFeed';
import Footer from '../components/Layouts/Footer';

const ProductsWithoutSidebar = ({ products }) => {
    return (
        <React.Fragment>
            <TopHeader />
            <Navbar />
            <PageBanner 
                pageTitle="Women's" 
                homePageUrl="/" 
                homePageText="Home" 
                activePageText="Products" 
            /> 
            <section className="products-area pt-100 pb-70">
                <ProductsNoSidebar products={products} />
            </section>
            <FacilitySlider />
            <InstagramFeed />
            <Footer />
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(ProductsWithoutSidebar);