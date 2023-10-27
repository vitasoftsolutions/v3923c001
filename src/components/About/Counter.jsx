import { useState, useEffect } from "react";
import axios from "axios";
import { base_url } from "../shared/Url";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Counter = () => {
  const [counterData, setCounterData] = useState([]);
  useEffect(() => {
    axios.get(`${base_url}/work-counter`).then((res) => {
      setCounterData(res.data[0].item);
    });
  }, []);

  console.log(counterData, "counterData");

  return (
    <div className="section techwix-counter-section-03 techwix-counter-section-04">
      <div className="container">
        <div
          className="counter-wrap"
          style={{ backgroundImage: "url('/images/bg/counter-bg2.jpg')" }}
        >
          <div className="row">
            {counterData.map((dt) => {
              return (
                <div key={dt.id} className="col-lg-3 col-sm-6">
                  {/* Single Counter Start */}
                  <div className="single-counter-02 text-center">
                    <span>
                      <CountUp end={dt.number} redraw={true}>
                        {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start} delayedCall>
                            <span ref={countUpRef} />
                          </VisibilitySensor>
                        )}
                      </CountUp>
                      +
                    </span>
                    <p>{dt?.title}</p>
                  </div>
                  {/* Single Counter End */}
                </div>
              );
            })}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
