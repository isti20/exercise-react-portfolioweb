import React from "react";
import people from '../../../assets/people.png';

const Home = () => {
    return (
        <>
            <section className="home">
                <div className="container flex">
                    <div className="left">
                        <div className="img">
                            <img src={people} alt="" />
                        </div>
                    </div>
                    <div className="right topMargin">
                        <h1>I am a web designer</h1>
                        <div className="socialIcon">
                            <i className="fab fa-facebook-f facebook"></i>
                            <i className="fab fa-instagram instagram"></i>
                            <i className="fab fa-twitter twitter"></i>
                            <i className="fab fa-youtube youtube"></i>
                            <i className="fab fa-pinterest pinterest"></i>
                            <i className="fab fa-dribbble dribbble"></i>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ducimus debitis quasi quidem, quaerat corrupti ab asperiores deserunt. Numquam exercitationem voluptatibus suscipit qui. Reiciendis dicta repellendus repudiandae illum officia debitis.</p>
                        <button className="primary-btn">Contact Us</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home