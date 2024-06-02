import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 0);
    }, [pathname]);

    return null;
}

export default ScrollTop;

<style>
body {
    background-color: #121212; /* Dark grey background */
    color: #e0e0e0; /* Light grey text */
    font-family: 'Arial', sans-serif;
}

a {
    color: #e0e0e0; /* Light grey links */
    text-decoration: none;
}

a:hover {
    color: #ffffff; /* White links on hover */
}

.container {
    padding: 0 15px;
    margin: 0 auto;
    max-width: 1200px;
}

</style>
<script>
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import ScrollTop from "../scrollTop/ScrollTop";

/* eslint-disable react/prop-types */
const Layout = ({ children }) => {
    return (
        <div className="bg-gray-900 text-gray-100">
            <Navbar />
            <ScrollTop />
            <div className="main-content min-h-screen">
                {children}
            </div>
            <Footer />
        </div>
    );
}

export default Layout;

</script>