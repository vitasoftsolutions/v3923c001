import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const TestimonialSlider = () => {
  const pagination = {
    clickable: true,
  };
  return (
    <Swiper pagination={pagination} modules={[Pagination]}>
      <SwiperSlide>
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
              <img src="/images/testi-3.jpg" alt="" />
            </div>
            <div className="testimonial-content">
              <img src="/images/testi-icon.png" alt="" />
              <p>
                Accelerate innovation with world-class tech teams Beyond more
                stoic this along goodness hey this this wow manatee{" "}
              </p>
              <span className="name">Mike Holder </span>
              <span className="designation"> / CEO, Harlond inc</span>
            </div>
          </div>
          {/* Single Testimonial End */}
        </div>
      </SwiperSlide>
      <SwiperSlide>
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
              <img src="/images/testi-3.jpg" alt="" />
            </div>
            <div className="testimonial-content">
              <img src="/images/testi-icon.png" alt="" />
              <p>
                Accelerate innovation with world-class tech teams Beyond more
                stoic this along goodness hey this this wow manatee{" "}
              </p>
              <span className="name">Mike Holder </span>
              <span className="designation"> / CEO, Harlond inc</span>
            </div>
          </div>
          {/* Single Testimonial End */}
        </div>
      </SwiperSlide>
      <SwiperSlide>
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
              <img src="/images/testi-3.jpg" alt="" />
            </div>
            <div className="testimonial-content">
              <img src="/images/testi-icon.png" alt="" />
              <p>
                Accelerate innovation with world-class tech teams Beyond more
                stoic this along goodness hey this this wow manatee{" "}
              </p>
              <span className="name">Mike Holder </span>
              <span className="designation"> / CEO, Harlond inc</span>
            </div>
          </div>
          {/* Single Testimonial End */}
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default TestimonialSlider;
