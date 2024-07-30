import React, { useState } from 'react'

import PropTypes from 'prop-types'

const Features25 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <>
      <div className="thq-section-padding">
        <div className="features25-container1 thq-section-max-width">
          <div className="features25-tabs-menu">
            <div
              onClick={() => setActiveTab(0)}
              className="features25-tab-horizontal"
            >
              <div className="features25-divider-container">
                {activeTab === 0 && (
                  <div className="features25-container2"></div>
                )}
              </div>
              <div className="features25-content">
                <h2>
                  {props.feature1Title ?? (
                    <fragment>
                      <span className="features25-text3 thq-heading-2">
                        Efficiency Boost
                      </span>
                    </fragment>
                  )}
                </h2>
                <span>
                  {props.feature1Description ?? (
                    <fragment>
                      <span className="features25-text2 thq-body-small">
                        Automate your processes to increase efficiency and
                        productivity.
                      </span>
                    </fragment>
                  )}
                </span>
              </div>
            </div>
            <div
              onClick={() => setActiveTab(1)}
              className="features25-tab-horizontal1"
            >
              <div className="features25-divider-container1">
                {activeTab === 1 && (
                  <div className="features25-container3"></div>
                )}
              </div>
              <div className="features25-content1">
                <h2>
                  {props.feature2Title ?? (
                    <fragment>
                      <span className="features25-text5 thq-heading-2">
                        Quality Assurance
                      </span>
                    </fragment>
                  )}
                </h2>
                <span>
                  {props.feature2Description ?? (
                    <fragment>
                      <span className="features25-text thq-body-small">
                        Ensure high quality standards with our innovative
                        automation solutions.
                      </span>
                    </fragment>
                  )}
                </span>
              </div>
            </div>
            <div
              onClick={() => setActiveTab(2)}
              className="features25-tab-horizontal2"
            >
              <div className="features25-divider-container2">
                {activeTab === 2 && (
                  <div className="features25-container4"></div>
                )}
              </div>
              <div className="features25-content2">
                <h2>
                  {props.feature3Title ?? (
                    <fragment>
                      <span className="features25-text4 thq-heading-2">
                        Agile Solutions
                      </span>
                    </fragment>
                  )}
                </h2>
                <span>
                  {props.feature3Description ?? (
                    <fragment>
                      <span className="features25-text1 thq-body-small">
                        Stay ahead of the competition with our agile and
                        customer-focused approach.
                      </span>
                    </fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="features25-image-container">
            {activeTab === 0 && (
              <img
                alt={props.feature1ImgAlt}
                src={props.feature1ImgSrc}
                className="features25-image thq-img-ratio-16-9"
              />
            )}
            {activeTab === 1 && (
              <img
                alt={props.feature2ImgAlt}
                src={props.feature2ImgSrc}
                className="features25-image1 thq-img-ratio-16-9"
              />
            )}
            {activeTab === 2 && (
              <img
                alt={props.feature3ImgAlt}
                src={props.feature3ImgSrc}
                className="features25-image2 thq-img-ratio-16-9"
              />
            )}
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features25-container1 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-fiveunits);
            position: relative;
            grid-template-columns: 1fr 1fr;
          }
          .features25-tabs-menu {
            gap: var(--dl-space-space-twounits);
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .features25-tab-horizontal {
            gap: var(--dl-space-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features25-divider-container {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .features25-container2 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .features25-content {
            gap: 16px;
            flex: 1;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .features25-tab-horizontal1 {
            gap: var(--dl-space-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features25-divider-container1 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .features25-container3 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .features25-content1 {
            gap: 16px;
            flex: 1;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .features25-tab-horizontal2 {
            gap: var(--dl-space-space-twounits);
            cursor: pointer;
            display: flex;
            overflow: hidden;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
          }
          .features25-divider-container2 {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .features25-container4 {
            width: 2px;
            align-self: stretch;
            background-color: var(--dl-color-theme-neutral-dark);
          }
          .features25-content2 {
            gap: 16px;
            flex: 1;
            display: flex;
            overflow: hidden;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
          }
          .features25-image-container {
            height: 100%;
            display: flex;
            position: relative;
          }
          .features25-image {
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .features25-image1 {
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .features25-image2 {
            animation-name: fadeIn;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .features25-text {
            display: inline-block;
          }
          .features25-text1 {
            display: inline-block;
          }
          .features25-text2 {
            display: inline-block;
          }
          .features25-text3 {
            display: inline-block;
          }
          .features25-text4 {
            display: inline-block;
          }
          .features25-text5 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .features25-container1 {
              grid-gap: var(--dl-space-space-twounits);
              grid-template-columns: 1fr;
            }
            .features25-tabs-menu {
              order: 2;
            }
          }
        `}
      </style>
    </>
  )
}

Features25.defaultProps = {
  feature3ImgAlt: 'Agile Solutions Image Alt Text',
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1606978297876-ca1d2a75e631?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjM0NjM1NHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2ImgAlt: 'Quality Assurance Image Alt Text',
  feature2Description: undefined,
  feature3Description: undefined,
  feature1ImgAlt: 'Efficiency Boost Image Alt Text',
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1704317990420-64ccbcd0547f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjM0NjM1M3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Description: undefined,
  feature1Title: undefined,
  feature3Title: undefined,
  feature2Title: undefined,
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1717444309226-c0809d4b5bde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjM0NjM1NHw&ixlib=rb-4.0.3&q=80&w=1080',
}

Features25.propTypes = {
  feature3ImgAlt: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature2Description: PropTypes.element,
  feature3Description: PropTypes.element,
  feature1ImgAlt: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature1Description: PropTypes.element,
  feature1Title: PropTypes.element,
  feature3Title: PropTypes.element,
  feature2Title: PropTypes.element,
  feature3ImgSrc: PropTypes.string,
}

export default Features25
