import React from 'react'

import PropTypes from 'prop-types'

const Footer4 = (props) => {
  return (
    <>
      <footer className="footer4-footer7 thq-section-padding">
        <div className="footer4-max-width thq-section-max-width">
          <div className="footer4-content">
            <div className="footer4-logo"></div>
            <div className="footer4-links">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                {props.link1 ?? (
                  <fragment>
                    <span className="footer4-text07 thq-body-small">Home</span>
                  </fragment>
                )}
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                {props.link2 ?? (
                  <fragment>
                    <span className="footer4-text10 thq-body-small">
                      Services
                    </span>
                  </fragment>
                )}
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                {props.link3 ?? (
                  <fragment>
                    <span className="footer4-text05 thq-body-small">
                      About Us
                    </span>
                  </fragment>
                )}
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                {props.link4 ?? (
                  <fragment>
                    <span className="footer4-text09 thq-body-small">
                      Contact Us
                    </span>
                  </fragment>
                )}
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                {props.link5 ?? (
                  <fragment>
                    <span className="footer4-text08 thq-body-small">Blog</span>
                  </fragment>
                )}
              </a>
            </div>
          </div>
          <div className="footer4-credits">
            <div className="thq-divider-horizontal"></div>
            <div className="footer4-row">
              <div className="footer4-container">
                <span className="thq-body-small">© 2024 TeleportHQ</span>
              </div>
              <div className="footer4-footer-links">
                <span>
                  {props.privacyLink ?? (
                    <fragment>
                      <span className="footer4-text04 thq-body-small">
                        Privacy Policy
                      </span>
                    </fragment>
                  )}
                </span>
                <span>
                  {props.termsLink ?? (
                    <fragment>
                      <span className="footer4-text06 thq-body-small">
                        Terms of Use
                      </span>
                    </fragment>
                  )}
                </span>
                <span>
                  {props.cookiesLink ?? (
                    <fragment>
                      <span className="footer4-text11 thq-body-small">
                        Cookies Policy
                      </span>
                    </fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <style jsx>
        {`
          .footer4-footer7 {
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .footer4-max-width {
            gap: var(--dl-space-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .footer4-content {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .footer4-logo {
            gap: 24px;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer4-links {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: flex-start;
          }
          .footer4-credits {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .footer4-row {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .footer4-container {
            display: flex;
            align-items: flex-start;
          }
          .footer4-footer-links {
            gap: 24px;
            display: flex;
            align-items: flex-start;
          }
          .footer4-text04 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            display: inline-block;
          }
          .footer4-text05 {
            display: inline-block;
          }
          .footer4-text06 {
            display: inline-block;
          }
          .footer4-text07 {
            display: inline-block;
          }
          .footer4-text08 {
            display: inline-block;
          }
          .footer4-text09 {
            display: inline-block;
          }
          .footer4-text10 {
            display: inline-block;
          }
          .footer4-text11 {
            display: inline-block;
          }
          @media (max-width: 767px) {
            .footer4-row {
              gap: var(--dl-space-space-oneandhalfunits);
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .footer4-max-width {
              gap: var(--dl-space-space-oneandhalfunits);
            }
            .footer4-links {
              flex-direction: column;
            }
            .footer4-footer-links {
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  )
}

Footer4.defaultProps = {
  privacyLink: undefined,
  link3: undefined,
  termsLink: undefined,
  link1: undefined,
  link5: undefined,
  link4: undefined,
  link2: undefined,
  cookiesLink: undefined,
}

Footer4.propTypes = {
  privacyLink: PropTypes.element,
  link3: PropTypes.element,
  termsLink: PropTypes.element,
  link1: PropTypes.element,
  link5: PropTypes.element,
  link4: PropTypes.element,
  link2: PropTypes.element,
  cookiesLink: PropTypes.element,
}

export default Footer4
