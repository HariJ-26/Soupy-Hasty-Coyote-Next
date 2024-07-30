import React from 'react'
import Head from 'next/head'

import Navbar6 from '../components/navbar6'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Soupy Hasty Coyote</title>
          <meta property="og:title" content="Soupy Hasty Coyote" />
        </Head>
        <Navbar6
          link1={
            <fragment>
              <span className="home-text thq-link thq-body-small">Home</span>
            </fragment>
          }
          link2={
            <fragment>
              <span className="home-text01 thq-link thq-body-small">
                Services
              </span>
            </fragment>
          }
          link3={
            <fragment>
              <span className="home-text02 thq-link thq-body-small">
                About Us
              </span>
            </fragment>
          }
          link4={
            <fragment>
              <span className="home-text03 thq-link thq-body-small">
                Testimonials
              </span>
            </fragment>
          }
          link5={
            <fragment>
              <span className="home-text04 thq-link thq-body-small">
                Contact Us
              </span>
            </fragment>
          }
          page1={
            <fragment>
              <span className="home-text05 thq-body-large">Page One</span>
            </fragment>
          }
          page2={
            <fragment>
              <span className="home-text06 thq-body-large">Page Two</span>
            </fragment>
          }
          page3={
            <fragment>
              <span className="home-text07 thq-body-large">Page Three</span>
            </fragment>
          }
          page4={
            <fragment>
              <span className="home-text08 thq-body-large">Page Four</span>
            </fragment>
          }
          page1Description={
            <fragment>
              <span className="home-text09 thq-body-small">
                Lorem ipsum dolor sit amet consectetur elit
              </span>
            </fragment>
          }
          page2Description={
            <fragment>
              <span className="home-text10 thq-body-small">
                Lorem ipsum dolor sit amet consectetur elit
              </span>
            </fragment>
          }
          page3Description={
            <fragment>
              <span className="home-text11 thq-body-small">
                Lorem ipsum dolor sit amet consectetur elit
              </span>
            </fragment>
          }
          page4Description={
            <fragment>
              <span className="home-text12 thq-body-small">
                Lorem ipsum dolor sit amet consectetur elit
              </span>
            </fragment>
          }
        ></Navbar6>
        <Hero17
          action1={
            <fragment>
              <span className="home-text13 thq-body-small">Get Started</span>
            </fragment>
          }
          action2={
            <fragment>
              <span className="home-text14 thq-body-small">Learn More</span>
            </fragment>
          }
          content1={
            <fragment>
              <span className="home-text15 thq-body-large">
                We specialize in automating your processes to make your business
                more efficient and productive. Our focus on quality, innovation,
                and agility ensures that your needs are met with precision and
                speed.
              </span>
            </fragment>
          }
          heading1={
            <fragment>
              <span className="home-text16 thq-heading-1">
                Empowering Your Business with Automation
              </span>
            </fragment>
          }
        ></Hero17>
        <Features24
          feature1Title={
            <fragment>
              <span className="home-text17 thq-heading-2">
                Process Automation
              </span>
            </fragment>
          }
          feature2Title={
            <fragment>
              <span className="home-text18 thq-heading-2">Quality Focus</span>
            </fragment>
          }
          feature3Title={
            <fragment>
              <span className="home-text19 thq-heading-2">
                Efficiency Boost
              </span>
            </fragment>
          }
          feature1Description={
            <fragment>
              <span className="home-text20 thq-body-small">
                Automate customer&apos;s processes for efficiency
              </span>
            </fragment>
          }
          feature2Description={
            <fragment>
              <span className="home-text21 thq-body-small">
                Quality Assurance
              </span>
            </fragment>
          }
          feature3Description={
            <fragment>
              <span className="home-text22 thq-body-small">
                Enhanced Productivity
              </span>
            </fragment>
          }
        ></Features24>
        <CTA26
          action1={
            <fragment>
              <span className="home-text23">Get started now</span>
            </fragment>
          }
          content1={
            <fragment>
              <span className="home-text24 thq-body-large">
                Let us help you streamline your operations and boost
                productivity.
              </span>
            </fragment>
          }
          heading1={
            <fragment>
              <span className="home-text25 thq-heading-2">
                Ready to automate your processes?
              </span>
            </fragment>
          }
        ></CTA26>
        <Features25
          feature1Title={
            <fragment>
              <span className="home-text26 thq-heading-2">
                Efficiency Boost
              </span>
            </fragment>
          }
          feature2Title={
            <fragment>
              <span className="home-text27 thq-heading-2">
                Quality Assurance
              </span>
            </fragment>
          }
          feature3Title={
            <fragment>
              <span className="home-text28 thq-heading-2">Agile Solutions</span>
            </fragment>
          }
          feature1Description={
            <fragment>
              <span className="home-text29 thq-body-small">
                Automate your processes to increase efficiency and productivity.
              </span>
            </fragment>
          }
          feature2Description={
            <fragment>
              <span className="home-text30 thq-body-small">
                Ensure high quality standards with our innovative automation
                solutions.
              </span>
            </fragment>
          }
          feature3Description={
            <fragment>
              <span className="home-text31 thq-body-small">
                Stay ahead of the competition with our agile and
                customer-focused approach.
              </span>
            </fragment>
          }
        ></Features25>
        <Steps2
          step1Title={
            <fragment>
              <span className="home-text32 thq-heading-2">
                Understand Customer Needs
              </span>
            </fragment>
          }
          step2Title={
            <fragment>
              <span className="home-text33 thq-heading-2">
                Design Customized Solutions
              </span>
            </fragment>
          }
          step3Title={
            <fragment>
              <span className="home-text34 thq-heading-2">
                Implement Efficient Systems
              </span>
            </fragment>
          }
          step4Title={
            <fragment>
              <span className="home-text35 thq-heading-2">
                Provide Ongoing Support
              </span>
            </fragment>
          }
          step1Description={
            <fragment>
              <span className="home-text36 thq-body-small">
                We start by thoroughly understanding the unique requirements and
                challenges of each customer to tailor our solutions accordingly.
              </span>
            </fragment>
          }
          step2Description={
            <fragment>
              <span className="home-text37 thq-body-small">
                Our team of experts designs customized software solutions that
                automate processes and enhance efficiency for our customers.
              </span>
            </fragment>
          }
          step3Description={
            <fragment>
              <span className="home-text38 thq-body-small">
                We implement the designed solutions seamlessly, ensuring a
                smooth transition and minimal disruption to the customer&apos;s
                operations.
              </span>
            </fragment>
          }
          step4Description={
            <fragment>
              <span className="home-text39 thq-body-small">
                Our commitment doesn&apos;t end with implementation. We provide
                continuous support and updates to ensure our customers&apos;
                systems are always optimized.
              </span>
            </fragment>
          }
        ></Steps2>
        <Testimonial17
          review1={
            <fragment>
              <span className="home-text40 thq-body-small">
                Working with this software company has been a game-changer for
                our business. Their innovative solutions have significantly
                improved our efficiency and productivity.
              </span>
            </fragment>
          }
          review2={
            <fragment>
              <span className="home-text41 thq-body-small">
                I highly recommend this company for their commitment to quality
                and customer satisfaction. They truly understand our needs and
                deliver beyond expectations.
              </span>
            </fragment>
          }
          review3={
            <fragment>
              <span className="home-text42 thq-body-small">
                The agility and responsiveness of this team is remarkable. They
                adapt quickly to changes and always prioritize our requirements,
                making them a valuable partner.
              </span>
            </fragment>
          }
          review4={
            <fragment>
              <span className="home-text43 thq-body-small">
                Integrity is at the core of their business. We trust them to
                deliver top-notch solutions while keeping our best interests in
                mind. A truly people-centric company.
              </span>
            </fragment>
          }
          content1={
            <fragment>
              <span className="home-text44 thq-body-small">
                Read what our clients have to say about their experience working
                with us.
              </span>
            </fragment>
          }
          heading1={
            <fragment>
              <span className="home-text45 thq-heading-2">Testimonials</span>
            </fragment>
          }
          author1Name={
            <fragment>
              <span className="home-text46 thq-body-large">John Doe</span>
            </fragment>
          }
          author2Name={
            <fragment>
              <span className="home-text47 thq-body-large">Jane Smith</span>
            </fragment>
          }
          author3Name={
            <fragment>
              <span className="home-text48 thq-body-large">
                Michael Johnson
              </span>
            </fragment>
          }
          author4Name={
            <fragment>
              <span className="home-text49 thq-body-large">Sarah Lee</span>
            </fragment>
          }
          author1Position={
            <fragment>
              <span className="home-text50 thq-body-small">
                CEO, Company ABC
              </span>
            </fragment>
          }
          author2Position={
            <fragment>
              <span className="home-text51 thq-body-small">
                CTO, Company XYZ
              </span>
            </fragment>
          }
          author3Position={
            <fragment>
              <span className="home-text52 thq-body-small">
                COO, Company 123
              </span>
            </fragment>
          }
          author4Position={
            <fragment>
              <span className="home-text53 thq-body-small">
                CFO, Company DEF
              </span>
            </fragment>
          }
        ></Testimonial17>
        <Contact10
          content1={
            <fragment>
              <span className="home-text54 thq-body-large">
                We would love to hear from you. Reach out to us for any
                inquiries or feedback.
              </span>
            </fragment>
          }
          heading1={
            <fragment>
              <span className="home-text55 thq-heading-2">Get in Touch</span>
            </fragment>
          }
          location1={
            <fragment>
              <span className="home-text56 thq-heading-3">Headquarters</span>
            </fragment>
          }
          location2={
            <fragment>
              <span className="home-text57 thq-heading-3">Branch Office</span>
            </fragment>
          }
          location1Description={
            <fragment>
              <span className="home-text58 thq-body-large">
                123 Main Street, City, Country
              </span>
            </fragment>
          }
          location2Description={
            <fragment>
              <span className="home-text59 thq-body-large">
                456 Business Avenue, Town, Country
              </span>
            </fragment>
          }
        ></Contact10>
        <Footer4
          link1={
            <fragment>
              <span className="home-text60 thq-body-small">Home</span>
            </fragment>
          }
          link2={
            <fragment>
              <span className="home-text61 thq-body-small">Services</span>
            </fragment>
          }
          link3={
            <fragment>
              <span className="home-text62 thq-body-small">About Us</span>
            </fragment>
          }
          link4={
            <fragment>
              <span className="home-text63 thq-body-small">Contact Us</span>
            </fragment>
          }
          link5={
            <fragment>
              <span className="home-text64 thq-body-small">Blog</span>
            </fragment>
          }
          termsLink={
            <fragment>
              <span className="home-text65 thq-body-small">Terms of Use</span>
            </fragment>
          }
          cookiesLink={
            <fragment>
              <span className="home-text66 thq-body-small">Cookies Policy</span>
            </fragment>
          }
          privacyLink={
            <fragment>
              <span className="home-text67 thq-body-small">Privacy Policy</span>
            </fragment>
          }
        ></Footer4>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .home-text {
            display: inline-block;
          }
          .home-text01 {
            display: inline-block;
          }
          .home-text02 {
            display: inline-block;
          }
          .home-text03 {
            display: inline-block;
          }
          .home-text04 {
            display: inline-block;
          }
          .home-text05 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .home-text06 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .home-text07 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .home-text08 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .home-text09 {
            display: inline-block;
          }
          .home-text10 {
            display: inline-block;
          }
          .home-text11 {
            display: inline-block;
          }
          .home-text12 {
            display: inline-block;
          }
          .home-text13 {
            display: inline-block;
          }
          .home-text14 {
            display: inline-block;
          }
          .home-text15 {
            display: inline-block;
            text-align: center;
          }
          .home-text16 {
            display: inline-block;
            text-align: center;
          }
          .home-text17 {
            display: inline-block;
          }
          .home-text18 {
            display: inline-block;
          }
          .home-text19 {
            display: inline-block;
          }
          .home-text20 {
            display: inline-block;
          }
          .home-text21 {
            display: inline-block;
          }
          .home-text22 {
            display: inline-block;
          }
          .home-text23 {
            display: inline-block;
          }
          .home-text24 {
            display: inline-block;
          }
          .home-text25 {
            display: inline-block;
          }
          .home-text26 {
            display: inline-block;
          }
          .home-text27 {
            display: inline-block;
          }
          .home-text28 {
            display: inline-block;
          }
          .home-text29 {
            display: inline-block;
          }
          .home-text30 {
            display: inline-block;
          }
          .home-text31 {
            display: inline-block;
          }
          .home-text32 {
            display: inline-block;
          }
          .home-text33 {
            display: inline-block;
          }
          .home-text34 {
            display: inline-block;
          }
          .home-text35 {
            display: inline-block;
          }
          .home-text36 {
            display: inline-block;
            text-align: center;
          }
          .home-text37 {
            display: inline-block;
            text-align: center;
          }
          .home-text38 {
            display: inline-block;
            text-align: center;
          }
          .home-text39 {
            display: inline-block;
            text-align: center;
          }
          .home-text40 {
            display: inline-block;
            text-align: left;
          }
          .home-text41 {
            display: inline-block;
            text-align: left;
          }
          .home-text42 {
            display: inline-block;
            text-align: left;
          }
          .home-text43 {
            display: inline-block;
            text-align: left;
          }
          .home-text44 {
            display: inline-block;
            text-align: center;
          }
          .home-text45 {
            display: inline-block;
          }
          .home-text46 {
            display: inline-block;
          }
          .home-text47 {
            display: inline-block;
          }
          .home-text48 {
            display: inline-block;
          }
          .home-text49 {
            display: inline-block;
          }
          .home-text50 {
            display: inline-block;
          }
          .home-text51 {
            display: inline-block;
          }
          .home-text52 {
            display: inline-block;
          }
          .home-text53 {
            display: inline-block;
          }
          .home-text54 {
            display: inline-block;
          }
          .home-text55 {
            display: inline-block;
          }
          .home-text56 {
            display: inline-block;
            text-align: center;
          }
          .home-text57 {
            display: inline-block;
            text-align: center;
          }
          .home-text58 {
            display: inline-block;
          }
          .home-text59 {
            display: inline-block;
          }
          .home-text60 {
            display: inline-block;
          }
          .home-text61 {
            display: inline-block;
          }
          .home-text62 {
            display: inline-block;
          }
          .home-text63 {
            display: inline-block;
          }
          .home-text64 {
            display: inline-block;
          }
          .home-text65 {
            display: inline-block;
          }
          .home-text66 {
            display: inline-block;
          }
          .home-text67 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

export default Home
