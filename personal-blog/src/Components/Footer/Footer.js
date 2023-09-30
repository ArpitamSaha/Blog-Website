import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <div>
            <footer class="bg-dark text-light text-center text-lg-start">

                <div class="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}> © 2023 DeathNote Blogs <br/>
                    Made with ❤️ by : <a class="text-light" href="https://mdbootstrap.com/">Arpitam Saha</a>
                </div>

            </footer>
        </div>
    );
};

export default Footer;