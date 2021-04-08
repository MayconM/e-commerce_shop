import React from 'react';
import './CSS/Footer.css';

const footer = props => //props.[name] to access
{
    return
    (
        <div className="Footer">
            <button className="backToTop" onClick="backToTop" value="Back to top" />
            <table className="footerTable">
                <tr>
                    <ti>
                        <ul>
                            <li><strong>Get to Know Us</strong></li>
                            <li>Careers</li>
                            <li>Amazonia and Our Planet</li>
                            <li>Investor Relations</li>
                            <li>Press Releases</li>
                        </ul>
                    </ti>
                
                    <ti>
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
                    </ti>
                    <ti>
                        <ul>
                            <li><strong>Amazon Payment Products</strong></li>
                            <li>Amazon.ca Rewards Mastercard</li>
                            <li>Shop with Points</li>
                            <li>Reload Your Balance</li>
                            <li>Amazon Currency Converter</li>
                            <li>Gift Cards</li>
                            <li>Amazon Cash</li>
                        </ul>
                    </ti>
                </tr>
            </table>
        </div>
        );
}