import React from 'react';

const ServicesHome = () => {
    const styles={
        
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        paddingBottom: '110px',
        backgroundImage:'url(https://github.com/iftesamulohy/vitasofttemplate/blob/master/assets/images/bg/service-bg3.jpg)'
    }
    return (
        <div className="section techwix-service-section-03"
        style={{backgroundImage:'url(https://github.com/iftesamulohy/vitasofttemplate/blob/master/assets/images/bg/service-bg3.jpg?raw=true)'}}>
            <div className="container">

                <div className="service-wrap-03">
                    <div className="row">
                        <div className="col-xl-3 col-md-6">

                            <div className="service-item-03">
                                <div className="service-img">
                                    <img src="assets/images/ser-icon9.png" alt="" />
                                </div>
                                <div className="service-content">
                                    <h3 className="title"><a href="service.html">Web Development</a></h3>
                                    <p>Accelerate innovation with world-class tech teams We’ll match you to an entire
                                        remote team of incredible freelance talent.</p>
                                    <div className="read-more">
                                        <a href="service.html"><i className="fas fa-plus"></i> Read More</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-xl-3 col-md-6">

                            <div className="service-item-03">
                                <div className="service-img">
                                    <img src="assets/images/ser-icon10.png" alt="" />
                                </div>
                                <div className="service-content">
                                    <h3 className="title"><a href="service.html">ERP Software</a></h3>
                                    <p>Accelerate innovation with world-class tech teams We’ll match you to an entire
                                        remote team of incredible freelance talent.</p>
                                    <div className="read-more">
                                        <a href="service.html"><i className="fas fa-plus"></i> Read More</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-xl-3 col-md-6">

                            <div className="service-item-03">
                                <div className="service-img">
                                    <img src="assets/images/ser-icon11.png" alt="" />
                                </div>
                                <div className="service-content">
                                    <h3 className="title"><a href="service.html">Custom Software</a></h3>
                                    <p>Accelerate innovation with world-class tech teams We’ll match you to an entire
                                        remote team of incredible freelance talent.</p>
                                    <div className="read-more">
                                        <a href="service.html"><i className="fas fa-plus"></i> Read More</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-xl-3 col-md-6">

                            <div className="service-item-03">
                                <div className="service-img">
                                    <img src="assets/images/ser-icon12.png" alt="" />
                                </div>
                                <div className="service-content">
                                    <h3 className="title"><a href="service.html">App Development</a></h3>
                                    <p>Accelerate innovation with world-class tech teams We’ll match you to an entire
                                        remote team of incredible freelance talent.</p>
                                    <div className="read-more">
                                        <a href="service.html"><i className="fas fa-plus"></i> Read More</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ServicesHome;