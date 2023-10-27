import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import { useState, useEffect } from "react";
import { base_url } from "../shared/Url";
import { Pagination } from "swiper/modules";

const TestimonialSlider = () => {
  const [testimonialData, setTestimonialData] = useState([]);
  useEffect(() => {
    axios.get(`${base_url}/testimonials`).then((res) => {
      setTestimonialData(res.data);
    });
  }, []);

  const pagination = {
    clickable: true,
  };
  return (
    <Swiper pagination={pagination} modules={[Pagination]}>
      {testimonialData?.map((dt) => {
        return (
          <SwiperSlide key={dt.id}>
            <div
              className="swiper-slide"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/* Single Testimonial Start   */}
              <div className="single-testimonial-02">
                <div className="testimonial-thumb">
                  <img src={base_url + dt?.image} alt={dt?.name} />
                </div>
                <div className="testimonial-content">
                  <img src="/images/testi-icon.png" alt="" />
                  <h4
                    style={{
                      marginTop: "10px",
                      borderBottom: "2px solid",
                      color: "gray",
                    }}
                  >
                    {dt?.title}
                  </h4>
                  <p>{dt?.description}</p>
                  <span className="name">{dt?.name}</span>
                  <span className="designation"> / {dt?.proffession}</span>
                </div>
              </div>
              {/* Single Testimonial End */}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
