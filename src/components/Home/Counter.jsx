import image1 from "/images/counter-1.png";
import image2 from "/images/counter-2.png";
import image3 from "/images/counter-3.png";
import image4 from "/images/counter-1.png";
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';


const Counter = () => {
  return (
    <div className="section techwix-counter-section-02">
      <div className="container">
        <div className="counter-wrap">
          <div className="row">
            <div className="col-xl-3 col-md-6">
              {/* Single Counter Start */}
              <div className="single-counter">
                <div className="counter-img">
                  <img src={image1} alt="" />
                </div>
                <div className="counter-content">
                  <span className="counter">
                    <CountUp end={100} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                  </span>
                  <p>Happy clients</p>
                </div>
              </div>
              {/* Single Counter End */}
            </div>
            <div className="col-xl-3 col-md-6">
              {/* Single Counter Start */}
              <div className="single-counter">
                <div className="counter-img">
                  <img src={image2} alt="" />
                </div>
                <div className="counter-content">
                  <span className="counter">
                    <CountUp end={100} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                  </span>
                  <p>Finished projects</p>
                </div>
              </div>
              {/* Single Counter End */}
            </div>
            <div className="col-xl-3 col-md-6">
              {/* Single Counter Start */}
              <div className="single-counter">
                <div className="counter-img">
                  <img src={image3} alt="" />
                </div>
                <div className="counter-content">
                  <span className="counter">
                    <CountUp end={100} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                  </span>
                  <p>Skilled Experts</p>
                </div>
              </div>
              {/* Single Counter End */}
            </div>
            <div className="col-xl-3 col-md-6">
              {/* Single Counter Start */}
              <div className="single-counter single-counter-4">
                <div className="counter-img">
                  <img src={image4} alt="" />
                </div>
                <div className="counter-content">
                  <span className="counter">
                    <CountUp end={100} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                  </span>
                  <p>Media Posts</p>
                </div>
              </div>
              {/* Single Counter End */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
