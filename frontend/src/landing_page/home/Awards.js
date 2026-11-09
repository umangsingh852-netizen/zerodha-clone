import React from "react";

function Awards() {
    return (
        <div className='container mt-5'>
            <div className="row">
                <div className='col-6 p-5'>
                     <img src='media/images/largestBroker.svg'style={{width:"78%"}} alt='Awards' className='img-fluid' />
                </div>
                <div className='col-6 p-5 mt-5'>
                    <h1>Largest stock broker in India</h1>
                    <p mb-5>2+ million Zerodha client contribute to over 15% of all retail trading volumes in India daily by trading and investing:</p>
                     <div className="row">
                        <div className="col-6">
                            <ul>
                                <li>
                                    <p>Future and Options</p>
                                </li>
                                <li>
                                    <p>Commodity derivatives</p>
                                </li>
                                <li>
                                    <p>Currency derivatives</p>
                                </li>
                            </ul>
                     </div>
                    <div className="col-6">
                        <ul>
                            <li>
                                    <p>Stocks and IPOs</p>
                                </li>
                                <li>
                                    <p>Direct mutual funds</p>
                                </li>
                                <li>
                                    <p>Bonds and Govt. Securities</p>
                                </li>
                        </ul>

                    </div>
                    <img src='media/images/pressLogos.png' style={{width:"90%"}}></img>
                </div>
            </div>
            </div>
        </div>
    ); 
}

export default Awards;  