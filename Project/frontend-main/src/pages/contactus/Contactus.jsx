import React from "react";
import "./Contactus.css";

function Contactus() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="contactus-page mt-1">
      <section className="contact-hero py-5">
        <div className="container">
          <div className="row align-items-center gx-5">
            <div className="col-lg-6 text-white mb-4 mb-lg-0">
              <span className="eyebrow text-uppercase text-white-50 mb-3 d-inline-block">
                Contact Us
              </span>
              <h1 className="display-5 fw-semibold mb-4">
                Need support? We’re just one message away.
              </h1>
              <p className="lead text-white-75 mb-4">
                Whether you have a question about an order, product details, or
                account access, our team is ready to help with fast, friendly
                support.
              </p>

              <div className="d-flex flex-column gap-3 contact-summary text-primary">
                <div className="d-flex gap-3 align-items-start bg-white bg-opacity-15 rounded-4 p-4 shadow-sm">
                  <div className="icon-circle bg-white text-primary shadow-sm">
                    <i className="bi bi-telephone-fill"></i>
                  </div>
                  <div>
                    <h5 className="mb-1">Phone Support</h5>
                    <p className="mb-0 ">Mon–Fri • 9am–6pm</p>
                    <p className="mb-0  fw-semibold">+1 800 123 4567</p>
                  </div>
                </div>
                <div className="d-flex gap-3 align-items-start bg-white bg-opacity-15 rounded-4 p-4 shadow-sm">
                  <div className="icon-circle bg-white text-primary shadow-sm">
                    <i className="bi bi-envelope-fill"></i>
                  </div>
                  <div>
                    <h5 className="mb-1 ">Email</h5>
                    <p className="mb-0 ">Response within 1 business day</p>
                    <p className="mb-0  fw-semibold">support@example.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card contact-card border-0 shadow-lg overflow-hidden">
                <div className="card-body p-4 p-md-5">
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <div>
                      <h2 className="h3 mb-1">Send a message</h2>
                      <p className="text-muted mb-0">
                        We’ll get back to you shortly.
                      </p>
                    </div>
                    <span className="badge rounded-pill bg-primary bg-opacity-10 text-primary py-2 px-3">
                      Support
                    </span>
                  </div>

                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="row g-3">
                      <div className="col-12 col-md-6 form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="contactName"
                          placeholder="Name"
                        />
                        <label htmlFor="contactName">Name</label>
                      </div>
                      <div className="col-12 col-md-6 form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="contactEmail"
                          placeholder="Email"
                        />
                        <label htmlFor="contactEmail">Email</label>
                      </div>
                      <div className="col-12 form-floating">
                        <input
                          type="tel"
                          className="form-control"
                          id="contactPhone"
                          placeholder="Phone"
                        />
                        <label htmlFor="contactPhone">Phone</label>
                      </div>
                      <div className="col-12 form-floating">
                        <select
                          className="form-select"
                          id="contactTopic"
                          aria-label="Contact topic"
                        >
                          <option value="">Choose topic</option>
                          <option value="order">Order inquiry</option>
                          <option value="product">Product question</option>
                          <option value="account">Account help</option>
                          <option value="other">Other</option>
                        </select>
                        <label htmlFor="contactTopic">Topic</label>
                      </div>
                      <div className="col-12 form-floating">
                        <textarea
                          className="form-control"
                          placeholder="Leave your message here"
                          id="contactMessage"
                          style={{ height: "140px" }}
                        ></textarea>
                        <label htmlFor="contactMessage">Message</label>
                      </div>
                    </div>
                    <div className="mt-4 text-end">
                      <button
                        type="submit"
                        className="btn btn-primary btn-lg px-5"
                      >
                        Submit Request
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-details py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card info-card border-0 shadow-sm h-100">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="icon-circle bg-primary text-white">
                      <i className="bi bi-geo-alt-fill"></i>
                    </div>
                    <span className="badge bg-primary bg-opacity-10 text-primary">
                      Office
                    </span>
                  </div>
                  <h5 className="card-title">Our Location</h5>
                  <p className="card-text text-muted mb-0">
                    125 Market Street, Suite 400
                    <br />
                    San Francisco, CA 94103
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card info-card border-0 shadow-sm h-100">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="icon-circle bg-primary text-white">
                      <i className="bi bi-clock-fill"></i>
                    </div>
                    <span className="badge bg-primary bg-opacity-10 text-primary">
                      Hours
                    </span>
                  </div>
                  <h5 className="card-title">Working Hours</h5>
                  <p className="card-text text-muted mb-0">
                    Mon–Fri • 9:00 AM – 7:00 PM
                    <br />
                    Sat • 10:00 AM – 4:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card info-card border-0 shadow-sm h-100">
                <div className="card-body">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <div className="icon-circle bg-primary text-white">
                      <i className="bi bi-chat-dots-fill"></i>
                    </div>
                    <span className="badge bg-primary bg-opacity-10 text-primary">
                      Help
                    </span>
                  </div>
                  <h5 className="card-title">Quick Support</h5>
                  <p className="card-text text-muted mb-0">
                    For order updates, shipping details, and returns, reach out
                    anytime and we’ll reply within one business day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contactus;
