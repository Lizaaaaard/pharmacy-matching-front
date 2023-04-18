import React from 'react';
import searchPage1 from '../styles/images/searchPage1.png';
import searchPage2 from '../styles/images/searchPage2.png';
import searchPage3 from '../styles/images/searchPage3.png';
import Arrow1 from '../styles/images/Arrow1.png';
import Arrow2 from '../styles/images/Arrow2.png';

const Description = () => {
    return (
        <div className="description">
            <div className="descriptionElement">
                <img src={searchPage1} alt="image1"/>
                <div className="descriptionTitle">
                    1. Find the right products
                </div>
                <div className="descriptionText">
                    Enter the name of the drug (or part of it)
                    in the search bar. Click "Search".
                </div>
            </div>
            <div className="descriptionElement">
                <img src={Arrow1} alt="arrow"/>
            </div>
            <div className="descriptionElement">
                <img src={searchPage2} alt="image2"/>
                <div className="descriptionTitle">
                    2. Add item to cart
                </div>
                <div className="descriptionText">
                    Select the product you need and
                    place it in the shopping cart.
                </div>
            </div>
            <div className="descriptionElement">
                <img src={Arrow2} alt="arrow" id="arrow"/>
            </div>
            <div className="descriptionElement">
                <img src={searchPage3} alt="image3"/>
                <div className="descriptionTitle">
                    3. Place an order
                </div>
                <div className="descriptionText">
                    Adjust the number of items in your shopping cart and
                    checkout. To select other products, repeat the first two steps.
                </div>
            </div>
        </div>
    );
};

export default Description;