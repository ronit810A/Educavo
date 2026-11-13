import { rsfeature01,rsfeature02,rsfeature03 } from "../image";


function RsFeatureSection() {
    return (
        <section className="rs-feature-section">
            <div className="container">
                <div className="rs-feature">

                    <div className="row">

                        <div className="col-md-4">
                            <div className="rs-feature-box">
                                <div className="rs-feature-icon">
                                    <img src={rsfeature01} alt="" />
                                </div>
                                <div className="rs-feature-text">
                                    <h4>5,320 online courses</h4>
                                    <p>Enjoy a variety of fresh topics  </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="rs-feature-box">
                                <div className="rs-feature-icon">
                                    <img src={rsfeature02} alt="" />
                                </div>
                                <div className="rs-feature-text">
                                    <h4>Expert instruction</h4>
                                    <p>Find the right instructor  </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="rs-feature-box">
                                <div className="rs-feature-icon">
                                    <img src={rsfeature03} alt="" />
                                </div>
                                <div className="rs-feature-text">
                                    <h4>Lifetime access</h4>
                                    <p>Learn on your schedule  </p>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default RsFeatureSection;