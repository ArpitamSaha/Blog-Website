import React from 'react';

import Post1 from '../../Images/iphone15.jpeg';
import Post2 from '../../Images/TheAlchemist.jpg';
import Post3 from '../../Images/G20Summit.jpg';
import Post4 from '../../Images/RegrettingYou.jpg';
import Post5 from '../../Images/VandeBharat.jpg';
import Post6 from '../../Images/ItEndsWithUs.jpeg';
import "./Cards.css";


const Cards = () => {
    return (
        <div className='container'>

            <div className='cards row'>

                <div className='col-md-4 my-5' >
                    <div className="card " >
                        <img src={Post1} alt='Iphone Blog' />
                        <div className="card-body">
                            <h5 className="card-title">Latest offering from Apple</h5>
                            <p className="card-text desc">Apple’s iPhone 15 event has come to an end. As expected, the iPhone 15 wasn’t the only major reveal that Apple made during the showcase.From an updated smartwatch lineup to a shift toward USB-C charging, here’s a roundup of all the big announcements Apple made at its Wonderlust event.</p>
                            <a href="/blog1" className="btn btn-info">Read Blog</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 my-5' >
                    <div className="card " >
                        <img src={Post2} alt='Alchemist Summary' />
                        <div className="card-body">
                            <h5 className="card-title">The Alchemist </h5>
                            <p className="card-text desc">An Andalusian shepherd boy named Santiago travels from his homeland in Spain to the Egyptian desert in search of a treasure buried in the Pyramids. He is both a simple sheep herder and an ambitious explorer. He follows his dreams, literally, a well as “signs” from his environment. Our main character is thoughtful beyond his years but also a child subject to being impressionable</p>
                            <a href="/blog2" className="btn btn-info">Read Blog</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 my-5' >
                    <div className="card " >
                        <img src={Post3} alt='G20 Summit' />
                        <div className="card-body">
                            <h5 className="card-title">G20 Summit</h5>
                            <p className="card-text desc">The 18th G20 Summit of 2023 recently concluded in New Delhi, India, marking the first-ever G20 summit hosted by the country. The summit’s theme, “Vasudhaiva Kutumbakam” or “One Earth, One Family, One Future” is rooted in ancient Sanskrit texts and the goal of sustainable development.</p>
                            <a href="/blog3" className="btn btn-info">Read Blog</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 my-5' >
                    <div className="card " >
                        <img src={Post4} alt='Iphone Blog' />
                        <div className="card-body">
                            <h5 className="card-title">Latest offering from Apple</h5>
                            <p className="card-text desc">Morgan Grant and her sixteen-year-old daughter, Clara, would like nothing more than to be nothing alike. Morgan is determined to prevent her daughter from making the same mistakes she did. By getting pregnant and married way too young, Morgan put her own dreams on hold.</p>
                            <a href="/blog4" className="btn btn-info">Read Blog</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 my-5' >
                    <div className="card " >
                        <img src={Post5} alt='Iphone Blog' />
                        <div className="card-body">
                            <h5 className="card-title">Latest offering from Apple</h5>
                            <p className="card-text desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos dolorem, voluptatum dolores ullam consequuntur reprehenderit, doloribus illum nostrum non cupiditate perferendis, mollitia dignissimos itaque eaque ut sed consequatur. Expedita atque velit, earum vero maxime libero explicabo sequi ipsum commodi, nobis necessitatibus a iste quo voluptate minima ea doloribus unde saepe!</p>
                            <a href="/blog5" className="btn btn-info">Read Blog</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 my-5' >
                    <div className="card " >
                        <img src={Post6} alt='Iphone Blog' />
                        <div className="card-body">
                            <h5 className="card-title">It Ends With US</h5>
                            <p className="card-text desc">It Ends with Us is a book that follows a girl named Lily who has just moved and is ready to start her life after college. Lily then meets a guy named Ryle and she falls for him. As she is developing feelings for Ryle, Atlas, her first love, reappears and challenges the relationship between Lily and Ryle.</p>
                            <a href="/blog6" className="btn btn-info">Read Blog</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 my-5' >
                    <div className="card " >
                        <img src={Post3} alt='Iphone Blog' />
                        <div className="card-body">
                            <h5 className="card-title">Latest offering from Apple</h5>
                            <p className="card-text desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos dolorem, voluptatum dolores ullam consequuntur reprehenderit, doloribus illum nostrum non cupiditate perferendis, mollitia dignissimos itaque eaque ut sed consequatur. Expedita atque velit, earum vero maxime libero explicabo sequi ipsum commodi, nobis necessitatibus a iste quo voluptate minima ea doloribus unde saepe!</p>
                            <a href="/blog6" className="btn btn-info">Read Blog</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 my-5' >
                    <div className="card " >
                        <img src={Post3} alt='Iphone Blog' />
                        <div className="card-body">
                            <h5 className="card-title">Latest offering from Apple</h5>
                            <p className="card-text desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos dolorem, voluptatum dolores ullam consequuntur reprehenderit, doloribus illum nostrum non cupiditate perferendis, mollitia dignissimos itaque eaque ut sed consequatur. Expedita atque velit, earum vero maxime libero explicabo sequi ipsum commodi, nobis necessitatibus a iste quo voluptate minima ea doloribus unde saepe!</p>
                            <a href="/blog6" className="btn btn-info">Read Blog</a>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 my-5' >
                    <div className="card " >
                        <img src={Post3} alt='Iphone Blog' />
                        <div className="card-body">
                            <h5 className="card-title">Latest offering from Apple</h5>
                            <p className="card-text desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos dolorem, voluptatum dolores ullam consequuntur reprehenderit, doloribus illum nostrum non cupiditate perferendis, mollitia dignissimos itaque eaque ut sed consequatur. Expedita atque velit, earum vero maxime libero explicabo sequi ipsum commodi, nobis necessitatibus a iste quo voluptate minima ea doloribus unde saepe!</p>
                            <a href="/blog6" className="btn btn-info">Read Blog</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;