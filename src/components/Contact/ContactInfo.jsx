function ContactInfo({ siteData, siteAddress, socialData }) {
  return (
    <div>
      {/* <!-- Contact Info Start --> */}
      <div className="section contact-info-section section-padding-02">
        <div className="container">
          {/* <!-- Contact Info Wrap Start --> */}
          <div className="contact-info-wrap">
            <div className="row">
              <div className="col-lg-4 col-sm-6">
                {/* <!--Single Contact Info Start --> */}
                <div className="single-contact-info text-center">
                  <div className="info-icon">
                    <img src="/images/info-1.png" alt="" />
                  </div>
                  <div className="info-content">
                    <h5 className="title">Give us a call</h5>
                    <p>{siteData?.company_number}</p>
                    <p>
                      {siteAddress.length > 0 ? siteAddress[0]?.phone_no : ""}
                    </p>
                  </div>
                </div>
                {/* <!--Single Contact Info End --> */}
              </div>
              <div className="col-lg-4 col-sm-6">
                {/* <!--Single Contact Info Start --> */}
                <div className="single-contact-info text-center">
                  <div className="info-icon">
                    <img src="/images/info-2.png" alt="" />
                  </div>
                  <div className="info-content">
                    <h5 className="title">Drop us a line</h5>
                    <p>{siteAddress.length > 0 ? siteAddress[0]?.email : ""}</p>
                  </div>
                </div>
                {/* <!--Single Contact Info End --> */}
              </div>
              <div className="col-lg-4 col-sm-6">
                {/* <!--Single Contact Info Start --> */}
                <div className="single-contact-info text-center">
                  <div className="info-icon">
                    <img src="/images/info-3.png" alt="" />
                  </div>
                  <div className="info-content">
                    <h5 className="title">Visit our office</h5>
                    <p>
                      {siteAddress.length > 0 ? siteAddress[0]?.address : ""}
                    </p>
                  </div>
                </div>
                {/* <!--Single Contact Info End --> */}
              </div>
            </div>
          </div>
          {/* <!-- Contact Info Wrap End --> */}
        </div>
      </div>
      {/* <!-- Contact Info End --> */}
    </div>
  );
}

export default ContactInfo;
