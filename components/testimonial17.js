import React from 'react'

import PropTypes from 'prop-types'

const Testimonial17 = (props) => {
  return (
    <>
      <div className="thq-section-padding">
        <div className="testimonial17-max-width thq-section-max-width">
          <div className="testimonial17-container">
            <h2>
              {props.heading1 ?? (
                <fragment>
                  <span className="testimonial17-text16 thq-heading-2">
                    Testimonials
                  </span>
                </fragment>
              )}
            </h2>
            <span>
              {props.content1 ?? (
                <fragment>
                  <span className="testimonial17-text18 thq-body-small">
                    Read what our clients have to say about their experience
                    working with us.
                  </span>
                </fragment>
              )}
            </span>
          </div>
          <div className="thq-grid-2">
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial17-card"
                >
                  <div className="testimonial17-container02">
                    <img
                      alt={props.author1Alt}
                      src={props.author1Src}
                      className="testimonial17-image"
                    />
                    <div className="testimonial17-container03">
                      <strong>
                        {props.author1Name ?? (
                          <fragment>
                            <span className="testimonial17-text24 thq-body-large">
                              John Doe
                            </span>
                          </fragment>
                        )}
                      </strong>
                      <span>
                        {props.author1Position ?? (
                          <fragment>
                            <span className="testimonial17-text19 thq-body-small">
                              CEO, Company ABC
                            </span>
                          </fragment>
                        )}
                      </span>
                    </div>
                  </div>
                  <span>
                    {props.review1 ?? (
                      <fragment>
                        <span className="testimonial17-text25 thq-body-small">
                          Working with this software company has been a
                          game-changer for our business. Their innovative
                          solutions have significantly improved our efficiency
                          and productivity.
                        </span>
                      </fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial17-card1"
                >
                  <div className="testimonial17-container04">
                    <img
                      alt={props.author2Alt}
                      src={props.author2Src}
                      className="testimonial17-image1"
                    />
                    <div className="testimonial17-container05">
                      <strong>
                        {props.author2Name ?? (
                          <fragment>
                            <span className="testimonial17-text22 thq-body-large">
                              Jane Smith
                            </span>
                          </fragment>
                        )}
                      </strong>
                      <span>
                        {props.author2Position ?? (
                          <fragment>
                            <span className="testimonial17-text23 thq-body-small">
                              CTO, Company XYZ
                            </span>
                          </fragment>
                        )}
                      </span>
                    </div>
                  </div>
                  <span>
                    {props.review2 ?? (
                      <fragment>
                        <span className="testimonial17-text21 thq-body-small">
                          I highly recommend this company for their commitment
                          to quality and customer satisfaction. They truly
                          understand our needs and deliver beyond expectations.
                        </span>
                      </fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial17-card2"
                >
                  <div className="testimonial17-container06">
                    <img
                      alt={props.author3Alt}
                      src={props.author3Src}
                      className="testimonial17-image2"
                    />
                    <div className="testimonial17-container07">
                      <strong>
                        {props.author3Name ?? (
                          <fragment>
                            <span className="testimonial17-text20 thq-body-large">
                              Michael Johnson
                            </span>
                          </fragment>
                        )}
                      </strong>
                      <span>
                        {props.author3Position ?? (
                          <fragment>
                            <span className="testimonial17-text15 thq-body-small">
                              COO, Company 123
                            </span>
                          </fragment>
                        )}
                      </span>
                    </div>
                  </div>
                  <span>
                    {props.review3 ?? (
                      <fragment>
                        <span className="testimonial17-text26 thq-body-small">
                          The agility and responsiveness of this team is
                          remarkable. They adapt quickly to changes and always
                          prioritize our requirements, making them a valuable
                          partner.
                        </span>
                      </fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="thq-animated-card-bg-2">
              <div className="thq-animated-card-bg-1">
                <div
                  data-animated="true"
                  className="thq-card testimonial17-card3"
                >
                  <div className="testimonial17-container08">
                    <img
                      alt={props.author4Alt}
                      src={props.author4Src}
                      className="testimonial17-image3"
                    />
                    <div className="testimonial17-container09">
                      <strong>
                        {props.author4Name ?? (
                          <fragment>
                            <span className="testimonial17-text27 thq-body-large">
                              Sarah Lee
                            </span>
                          </fragment>
                        )}
                      </strong>
                      <span>
                        {props.author4Position ?? (
                          <fragment>
                            <span className="testimonial17-text17 thq-body-small">
                              CFO, Company DEF
                            </span>
                          </fragment>
                        )}
                      </span>
                    </div>
                  </div>
                  <span>
                    {props.review4 ?? (
                      <fragment>
                        <span className="testimonial17-text14 thq-body-small">
                          Integrity is at the core of their business. We trust
                          them to deliver top-notch solutions while keeping our
                          best interests in mind. A truly people-centric
                          company.
                        </span>
                      </fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .testimonial17-max-width {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .testimonial17-container {
            gap: var(--dl-space-space-unit);
            display: flex;
            max-width: 600px;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .testimonial17-container02 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial17-image {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .testimonial17-container03 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial17-container04 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial17-image1 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .testimonial17-container05 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial17-container06 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial17-image2 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .testimonial17-container07 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial17-container08 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: flex-start;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .testimonial17-image3 {
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }
          .testimonial17-container09 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .testimonial17-text14 {
            display: inline-block;
            text-align: left;
          }
          .testimonial17-text15 {
            display: inline-block;
          }
          .testimonial17-text16 {
            display: inline-block;
          }
          .testimonial17-text17 {
            display: inline-block;
          }
          .testimonial17-text18 {
            display: inline-block;
            text-align: center;
          }
          .testimonial17-text19 {
            display: inline-block;
          }
          .testimonial17-text20 {
            display: inline-block;
          }
          .testimonial17-text21 {
            display: inline-block;
            text-align: left;
          }
          .testimonial17-text22 {
            display: inline-block;
          }
          .testimonial17-text23 {
            display: inline-block;
          }
          .testimonial17-text24 {
            display: inline-block;
          }
          .testimonial17-text25 {
            display: inline-block;
            text-align: left;
          }
          .testimonial17-text26 {
            display: inline-block;
            text-align: left;
          }
          .testimonial17-text27 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .testimonial17-container {
              margin-bottom: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .testimonial17-container {
              margin-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .testimonial17-card {
              width: 100%;
            }
            .testimonial17-card1 {
              width: 100%;
            }
            .testimonial17-card2 {
              width: 100%;
            }
            .testimonial17-card3 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Testimonial17.defaultProps = {
  author3Alt: 'Image of Michael Johnson',
  review4: undefined,
  author3Position: undefined,
  author1Alt: 'Image of John Doe',
  author3Src:
    'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxhdmF0YXJ8ZW58MHx8fHwxNzE2MzgzNTUyfDA&ixlib=rb-4.0.3&w=200',
  heading1: undefined,
  author4Position: undefined,
  content1: undefined,
  author1Position: undefined,
  author3Name: undefined,
  review2: undefined,
  author4Src:
    'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDMxfHxhdmF0YXJ8ZW58MHx8fHwxNzE2MzgzNTY2fDA&ixlib=rb-4.0.3&w=200',
  author2Name: undefined,
  author2Position: undefined,
  author2Src:
    'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxhdmF0YXJ8ZW58MHx8fHwxNzE2MzgzNTUyfDA&ixlib=rb-4.0.3&w=200',
  author1Name: undefined,
  author4Alt: 'Image of Sarah Lee',
  review1: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGF2YXRhcnxlbnwwfHx8fDE3MTYzODM1NTJ8MA&ixlib=rb-4.0.3&w=200',
  review3: undefined,
  author4Name: undefined,
  author2Alt: 'Image of Jane Smith',
}

Testimonial17.propTypes = {
  author3Alt: PropTypes.string,
  review4: PropTypes.element,
  author3Position: PropTypes.element,
  author1Alt: PropTypes.string,
  author3Src: PropTypes.string,
  heading1: PropTypes.element,
  author4Position: PropTypes.element,
  content1: PropTypes.element,
  author1Position: PropTypes.element,
  author3Name: PropTypes.element,
  review2: PropTypes.element,
  author4Src: PropTypes.string,
  author2Name: PropTypes.element,
  author2Position: PropTypes.element,
  author2Src: PropTypes.string,
  author1Name: PropTypes.element,
  author4Alt: PropTypes.string,
  review1: PropTypes.element,
  author1Src: PropTypes.string,
  review3: PropTypes.element,
  author4Name: PropTypes.element,
  author2Alt: PropTypes.string,
}

export default Testimonial17
