import React from "react";
import logo1 from "../../assets/logo1.png";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container grid1">
                    <div className="box">
                        <img src={logo1} alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, voluptatem exercitationem laudantium quisquam officia iste sit atque quidem eaque facere in nemo. Dolorum officiis adipisci quis eos atque ad praesentium.</p>
                        <div className="socialIcon">
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-youtube"></i>
                            <i className="fab fa-pinterest"></i>
                        </div>
                    </div>
                    <div className="box">
                        <h2>QUICK LINKS</h2>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Portofolio</li>
                            <li>News</li>
                            <li>Contact</li>
                            <li>FAQ's</li>
                        </ul>
                    </div>
                    <div className="box">
                        <h2>Recent Post</h2>
                        <div className="text">
                            <p>3 WooComerce Plugins to Boost Sales</p>
                            <span>28 Feb 2023</span>
                        </div>
                    </div>
                    <div className="box">
                        <h2>Get in Touch</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, illum? Reiciendis eius alias, perferendis amet consectetur aut natus ullam autem nulla, laboriosam porro sunt doloremque veritatis, ab excepturi tenetur possimus.</p>
                    <div className="icon">
                        <i><LocationOnIcon className="footerIcon"/></i>
                        <label htmlFor="">Location: 27 Division St, New York, NY 10002, USA</label>
                    </div>
                    <div className="icon">
                        <i className="fa fa-phone"></i>
                        <label htmlFor="">Phone: +14578 5262 4789</label>
                    </div>
                    <div className="icon">
                        <i><EmailIcon className="footerIcon"/></i>
                        <label htmlFor="/">Email: support@gmail.com</label>
                    </div>
                    </div>
                </div>
                <div className="legal container">
                    <p>Copyright @2023. All rights reserved.</p>
                    <label htmlFor="">
                        Design & Developed by <span>GorkCoder</span>
                    </label>
                </div>
            </footer>
        </>
    )
}

export default Footer