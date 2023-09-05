import TestimonialSlider from "../shared/TestimonialSlider";

const Testimonial = () => {
  return (
    <div
      className="section bg-cover techwix-testimonial-section-02 techwix-testimonial-section-03 techwix-testimonial-section-05 section-padding"
      style={{ backgroundImage: "url('/images/bg/testi-bg4.jpg')" }}
    >
      <div className="container">
        {/* Testimonial Wrap Start  */}
        <div className="testimonial-wrap-02">
          <div className="section-title text-center">
            <h3 className="sub-title">Testimonial</h3>
            <h2 className="title">20k+ satisfied clients worldwide</h2>
          </div>
          <div className="testimonial-content-wrap-02">
            <div className="swiper-container testimonial-02-active">
              <TestimonialSlider />
            </div>
          </div>
        </div>
        {/* Testimonial Wrap End  */}
      </div>
    </div>
  );
};

export default Testimonial;
