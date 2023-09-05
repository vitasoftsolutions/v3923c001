import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';

const Counter = () => {
  return (
    <div className="section techwix-counter-section-03 techwix-counter-section-04">
      <div className="container">
        <div
          className="counter-wrap"
          style={{backgroundImage:"url('/images/bg/counter-bg2.jpg')"}}
        >
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              {/* Single Counter Start */}
              <div className="single-counter-02 text-center">
                <span>
                    <CountUp end={100} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp> +
                </span>
                <p>Completed Projects</p>
              </div>
              {/* Single Counter End */}
            </div>
            <div className="col-lg-3 col-sm-6">
              {/* Single Counter Start */}
              <div className="single-counter-02 text-center">
                <span>
                    <CountUp end={100} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp> +
                </span>
                <p>Robotic Automation</p>
              </div>
              {/* Single Counter End */}
            </div>
            <div className="col-lg-3 col-sm-6">
              {/* Single Counter Start */}
              <div className="single-counter-02 text-center">
                <span>
                    <CountUp end={100} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp> +
                </span>
                <p>Web Site Analyse</p>
              </div>
              {/* Single Counter End */}
            </div>
            <div className="col-lg-3 col-sm-6">
              {/* Single Counter Start */}
              <div className="single-counter-02 text-center">
                <span>
                    <CountUp end={100} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp> +
                </span>
                <p>Clients Supoort Done</p>
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
