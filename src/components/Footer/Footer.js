import React from "react";
import './Footer.css'

const Footer = () => {
  return (
     <div className="main-footer">
            <div className="container text-content">
                <div className="row">
                    {/*colum 1*/}
                   <div className="col-md-3 col-sm-6">
                        <h4>SEMRUSH</h4>
                    <ul className="list-unstyled">
                        <li>Designer</li>
                        <li>Interactions</li>
                        <li>CMS</li>
                        <li>Ecommerce</li>
                        <li>Accessibility</li>
                        <li>Templates</li>
                        <li>learning</li>
                    </ul>
                    </div>
                      {/*colum 2*/}
                   <div className="col-md-3 col-sm-6">
                         <h4>COMPANY</h4>
                    <ul className="list-unstyled">
                        <li>Careers</li>
                        <li>Accessibility Statement</li>
                        <li>Merch Store</li>
                        <li>Terms of Service</li>
                        <li>Privacy Policy</li>
                        <li>Cookie Preferences</li>
                        <li>Become an Affiliate</li>
                    </ul>
                    </div>
                      {/*colum 3*/}
                   <div className="col-md-3 col-sm-6">
                         <h4>HELP</h4>
                    <ul className="list-unstyled">
                        <li>About Colorlib</li>
                        <li>Advertise </li>
                        <li>WordPress Themes</li>
                        <li>Website Templates</li>
                        <li>Bootstrap Templates</li>
                        <li>Support Forum</li>
                        <li>Contact us</li>
                    </ul>

                    </div>
                      {/*colum 4*/}
                   <div className="col-md-3 col-sm-6">
                         <h4>FOLLOW</h4>
                    <ul className="list-unstyled font-awsome ">
                        <li><i class="fas fa-home"></i> Dhaka dhanmondi</li>
                        <li><i class="fas fa-home"></i> Comiila Kandirpar </li>
                        <li><i class="fas fa-phone"></i> +8801703059461</li>
                        <li><i class="fas fa-question-circle"></i> +4574754</li>
                        <li><a href="https://www.facebook.com/mdshipon.chowdhury.940"><i class="fab fa-facebook"></i></a> Facebook</li>
                        <li><a href="https://www.linkedin.com/in/md-shipon-214207214/"><i class="fab fa-linkedin-in"></i></a> Linkdin</li>
                    </ul>
                    </div>
                </div>
                {/*Footer Bottom */}
                <div className="footer-bottom">

                    <p className="copyright">&copy;{ new Date().getFullYear()} Webflow, Inc. All rights reserved shamsul islam shipon.</p>

                </div>
            </div>
        </div>
  );
};

export default Footer;