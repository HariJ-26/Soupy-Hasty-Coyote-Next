import React from 'react'

import PropTypes from 'prop-types'

const Contact10 = (props) => {
  return (
    <>
      <div className="contact10-container thq-section-padding">
        <div className="contact10-max-width thq-section-max-width">
          <div className="contact10-content thq-flex-row">
            <div className="contact10-content1">
              <h2>
                {props.heading1 ?? (
                  <fragment>
                    <span className="contact10-text08 thq-heading-2">
                      Get in Touch
                    </span>
                  </fragment>
                )}
              </h2>
              <p>
                {props.content1 ?? (
                  <fragment>
                    <span className="contact10-text10 thq-body-large">
                      We would love to hear from you. Reach out to us for any
                      inquiries or feedback.
                    </span>
                  </fragment>
                )}
              </p>
            </div>
          </div>
          <div className="contact10-content2 thq-flex-row">
            <div className="contact10-container1">
              <img
                alt={props.location1ImageAlt}
                src={props.location1ImageSrc}
                className="contact10-image thq-img-ratio-16-9"
              />
              <h3>
                {props.location1 ?? (
                  <fragment>
                    <span className="contact10-text09 thq-heading-3">
                      Headquarters
                    </span>
                  </fragment>
                )}
              </h3>
              <p>
                {props.location1Description ?? (
                  <fragment>
                    <span className="contact10-text07 thq-body-large">
                      123 Main Street, City, Country
                    </span>
                  </fragment>
                )}
              </p>
              <div className="contact10-container2">
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="thq-body-small thq-button-flat"
                >
                  Get directions
                </a>
              </div>
            </div>
            <div className="contact10-container3">
              <img
                alt={props.location2ImageAlt}
                src={props.location2ImageSrc}
                className="contact10-image1 thq-img-ratio-16-9"
              />
              <h3>
                {props.location2 ?? (
                  <fragment>
                    <span className="contact10-text11 thq-heading-3">
                      Branch Office
                    </span>
                  </fragment>
                )}
              </h3>
              <p>
                {props.location2Description ?? (
                  <fragment>
                    <span className="contact10-text06 thq-body-large">
                      456 Business Avenue, Town, Country
                    </span>
                  </fragment>
                )}
              </p>
              <div className="contact10-container4">
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="thq-body-small thq-button-flat"
                >
                  Get directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .contact10-container {
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact10-max-width {
            align-self: center;
          }
          .contact10-content {
            width: 100%;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: flex-start;
          }
          .contact10-content1 {
            gap: var(--dl-space-space-unit);
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .contact10-content2 {
            width: 100%;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .contact10-container1 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .contact10-image {
            object-fit: cover;
          }
          .contact10-container2 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .contact10-container3 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 1;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .contact10-image1 {
            object-fit: cover;
          }
          .contact10-container4 {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .contact10-text06 {
            display: inline-block;
          }
          .contact10-text07 {
            display: inline-block;
          }
          .contact10-text08 {
            display: inline-block;
          }
          .contact10-text09 {
            display: inline-block;
            text-align: center;
          }
          .contact10-text10 {
            display: inline-block;
          }
          .contact10-text11 {
            display: inline-block;
            text-align: center;
          }
          @media (max-width: 991px) {
            .contact10-content {
              align-items: flex-start;
              justify-content: flex-start;
            }
            .contact10-content2 {
              position: relative;
              align-items: center;
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .contact10-content {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .contact10-image {
              width: 100%;
            }
            .contact10-image1 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Contact10.defaultProps = {
  location2Description: undefined,
  location1Description: undefined,
  location1ImageSrc:
    'https://images.unsplash.com/photo-1588694926280-3ae414d06ccb?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHxjbHVqfGVufDB8fHx8MTcxNjI4NjI4N3ww&ixlib=rb-4.0.3&w=1400',
  location2ImageSrc:
    'https://images.unsplash.com/photo-1571979195097-59d223315d89?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDMxfHxidWNoYXJlc3R8ZW58MHx8fHwxNzE2Mjg2MzE3fDA&ixlib=rb-4.0.3&w=1400',
  location1ImageAlt: 'Headquarters Image',
  heading1: undefined,
  location1: undefined,
  content1: undefined,
  location2: undefined,
  location2ImageAlt: 'Branch Office Image',
}

Contact10.propTypes = {
  location2Description: PropTypes.element,
  location1Description: PropTypes.element,
  location1ImageSrc: PropTypes.string,
  location2ImageSrc: PropTypes.string,
  location1ImageAlt: PropTypes.string,
  heading1: PropTypes.element,
  location1: PropTypes.element,
  content1: PropTypes.element,
  location2: PropTypes.element,
  location2ImageAlt: PropTypes.string,
}

export default Contact10
