import './Footer.css'

function Footer() {
    return (
        <>
            <div id="footer">
                {/* Section for App Description */}
                <div className="divs" id="about">
                    <p><b>Tech Store App</b></p>
                    <p>
                        This is a responsive web application designed to list and review various tech products such as laptops, phones, and accessories. The application allows users to explore products by categories and includes features like product listings, ratings, and comparisons. It is developed purely for educational purposes using modern web technologies including HTML, CSS, JavaScript, and React + Vite.
                    </p>
                </div>

                {/* Section for Source Information */}
                <div className="divs" id="source">
                    <p><b>Source of Information</b></p>
                    <p>
                        The information displayed on this website is gathered from reliable sources, including official brand websites and well-known e-commerce platforms like Flipkart and Amazon, to ensure accuracy and trustworthiness.
                    </p>
                </div>

                {/* Section for Categories */}
                <div className="divs">
                    <h4>Categories</h4>
                    <h5>All</h5>
                    <h5>Laptops</h5>
                    <h5>Phones</h5>
                    <h5>Accessories</h5>
                </div>

                {/* Section for About Links */}
                <div className="divs">
                    <h4>About</h4>
                    <h5><a href="#">Contact Us</a></h5>
                    <h5><a href="#">About Us</a></h5>
                </div>
                
            </div>
        </>
    );
}

export default Footer;
