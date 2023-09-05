import TestimonialSlider from "../shared/TestimonialSlider";

const Testimonial = () => {
  return (
    <div className="section techwix-testimonial-section-02 techwix-testimonial-section-03 section-padding-02">
      <div className="container">
        {/* Testimonial Wrap Start   */}
        <div className="testimonial-wrap-02">
          <div className="section-title text-center">
            <h3 className="sub-title">Testimonial</h3>
            <h2 className="title">What Our Clients Think</h2>
          </div>
          <div className="testimonial-content-wrap-02">
            <div className="swiper-container testimonial-02-active">
              <TestimonialSlider />
            </div>
          </div>
        </div>
        {/* Testimonial Wrap End   */}
      </div>
    </div>
  );
};

export default Testimonial;
