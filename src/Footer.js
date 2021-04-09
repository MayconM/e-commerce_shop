import React from 'react';
import './CSS/Footer.css';
import Logo from "./images/footer/logo.JPG";
import Arrow from "./images/footer/arrow.png";
import Globe from "./images/footer/globe.jpg";
import Flag from "./images/footer/canada_small.jpg";

const footer = props => //props.[name] to access
{
    return(
        <div className="Footer">
            <button className="BackToTop" onClick="backToTop">Back to top</button>
            <table align="center">
                <tr>
                    <td>
                        <ul>
                            <li><strong>Get to Know Us</strong></li>
                            <li>Careers</li>
                            <li>Amazonia and Our Planet</li>
                            <li>Investor Relations</li>
                            <li>Press Releases</li>
                        </ul>
                    </td>
                
                    <td>
                        <ul>
                            <li><strong>Make Money with Us</strong></li>
                            <li>Sell on Amazon</li>
                            <li>Sell Under Amazonia Accelerator</li>
                            <li>Amazonia Associates</li>
                            <li>Sell on Amazon Handmade</li>
                            <li>Advertise Your Products</li>
                            <li>Independently Publish with Us</li>
                            <li>Host an Amazonia Hub</li>
                        </ul>
                    </td>
                    <td>
                        <ul>
                            <li><strong>Amazonia Payment Products</strong></li>
                            <li>Amazonia.ca Rewards Mastercard</li>
                            <li>Shop with Points</li>
                            <li>Reload Your Balance</li>
                            <li>Amazonia Currency Converter</li>
                            <li>Gift Cards</li>
                            <li>Amazonia Cash</li>
                        </ul>
                    </td>
                    <td>
                        <ul>
                            <li><strong>Let Us Help You</strong></li>
                            <li>COVID-19 and Amazon</li>
                            <li>Shipping Rates & Policies</li>
                            <li>Amazon Prime</li>
                            <li>Returns Are Easy</li>
                            <li>Manage your Content and Devices</li>
                            <li>Customer Service</li>
                        </ul>
                    </td>
                </tr>
            </table>
            <hr />
            <img src={Logo} alt="logo"/>
            <button className="Lang_button">
                <img src={Globe} alt="globe"/>
                <span>English</span>
                <img src={Arrow} alt="arrow"/>
            </button>
            <button className="Lang_button">
                <img src={Flag} alt="flag"/>
                <span>Canada</span>
            </button>
        </div>
    );
}

export default footer;