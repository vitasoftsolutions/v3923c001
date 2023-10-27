import { useState, useEffect } from "react";
import axios from "axios";
import { base_url } from "../shared/Url";
import CountUp from "react-countup";
import VisibilitySensor from 'react-visibility-sensor';


const Counter = () => {

  const [counterData, setCounterData] = useState([]);
  useEffect(() => {
    axios.get(`${base_url}/work-counter`).then((res) => {
      setCounterData(res.data[0].item);
    });
  }, []);

  return (
    <div className="section techwix-counter-section-02">
      <div className="container">
        <div className="counter-wrap">
          <div className="row">
            <div className="col-xl-3 col-md-6">
              {/* Single Counter Start */}
              <div className="single-counter">
                <div className="counter-img">
                  <img src={base_url + counterData[0]?.image} alt="" />
                </div>
                <div className="counter-content">
                  <span className="counter">
                    <CountUp end={counterData[1]?.number} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                  </span>
                  <p>{counterData[0]?.title}</p>
                </div>
              </div>
              {/* Single Counter End */}
            </div>
            <div className="col-xl-3 col-md-6">
              {/* Single Counter Start */}
              <div className="single-counter">
                <div className="counter-img">
                  <img src={base_url + counterData[1]?.image} alt="" />
                </div>
                <div className="counter-content">
                  <span className="counter">
                    <CountUp end={counterData[1]?.number} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                  </span>
                  <p>{counterData[1]?.title}</p>
                </div>
              </div>
              {/* Single Counter End */}
            </div>
            <div className="col-xl-3 col-md-6">
              {/* Single Counter Start */}
              <div className="single-counter">
                <div className="counter-img">
                  <img src={base_url + counterData[2]?.image} alt="" />
                </div>
                <div className="counter-content">
                  <span className="counter">
                    <CountUp end={counterData[2]?.number} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                  </span>
                  <p>{counterData[2]?.title}</p>
                </div>
              </div>
              {/* Single Counter End */}
            </div>
            <div className="col-xl-3 col-md-6">
              {/* Single Counter Start */}
              <div className="single-counter single-counter-4">
                <div className="counter-img">
                  <img src={base_url + counterData[3]?.image} alt="" />
                </div>
                <div className="counter-content">
                  <span className="counter">
                    <CountUp end={counterData[3]?.number} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span ref={countUpRef} />
                        </VisibilitySensor>
                      )}
                    </CountUp>
                  </span>
                  <p>{counterData[3]?.title}</p>
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
