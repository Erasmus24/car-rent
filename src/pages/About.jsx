import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";

import driveImg from "../assets/all-images/drive.jpg";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  We Are Committed To Provide Safe Car Ride Solutions
                </h2>

                <p className="section__description">
                At Car-Rent, safety is our top priority. We are dedicated to 
                providing secure and reliable ride solutions for every customer,
                 whether you’re using our airport transfer services, embarking on 
                 a city tour, or exploring with an unlimited miles rental. 
                 Our vehicles undergo rigorous maintenance checks to ensure optimal
                  performance, and each car is equipped with modern safety features 
                  to offer peace of mind on the road. From advanced braking systems 
                  to real-time GPS tracking, we implement the latest technologies to
                   ensure your journey is as safe as it is enjoyable.
                </p>

                <p className="section__description">
                Our commitment to safety goes beyond our vehicles. We partner 
                with professional, highly trained drivers who are well-versed 
                in safe driving practices and customer service. Each driver 
                undergoes thorough background checks and continuous training 
                to maintain our high standards. For customers who prefer self-driving 
                options, we provide detailed guidance on vehicle operation and local 
                road safety rules, helping ensure every journey is smooth and secure.
                 At Car-Rent, we go above and beyond to make sure you can explore with
                  confidence and peace of mind, no matter where the road takes you.
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Need Any Help?</h6>
                    <h4>+2734596789</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <BecomeDriverSection />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Experts</h6>
              <h2 className="section__title">Our Members</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
