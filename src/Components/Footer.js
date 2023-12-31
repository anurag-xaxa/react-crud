import React from "react";
import '../assets/Style/Footer.css';


const Footer = () => {

    return (
     <div id="footer-container" style={{backgroundColor: "antiquewhite"}} >
    <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
    
            </div>

            <hr className="clearfix w-100 d-md-none pb-0" />

            <div className="link-container">
                <h5 className="text-uppercase">Links</h5>
                    {/* <ul className="list-unstyled">
                    <li><a href="#!">Link 1</a></li>
                    <li><a href="#!">Link 2</a></li>
                    <li><a href="#!">Link 3</a></li>
                    <li><a href="#!">Link 4</a></li>
           </ul> */}
                </div>

            </div>
        </div>

        <div className="footer-copyright text-center py-3">
            <h5 className="Footer-heading"> Footer Content</h5>
            <p>© 2020 Copyright:
            <a href="https://mdbootstrap.com/"> MDBootstrap.com</a> </p>
        </div>

                </footer>
            </div>
        
    )
}

export default Footer;