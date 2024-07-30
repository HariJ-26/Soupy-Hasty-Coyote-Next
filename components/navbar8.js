import React, { useState } from 'react'

import PropTypes from 'prop-types'

const Navbar8 = (props) => {
  const [link5AccordionOpen, setLink5AccordionOpen] = useState(false)
  const [link5DropdownVisible, setLink5DropdownVisible] = useState(false)
  return (
    <>
      <header className="navbar8-container">
        <header data-thq="thq-navbar" className="navbar8-navbar-interactive">
          <img
            alt={props.logoAlt}
            src={props.logoSrc}
            className="navbar8-image1"
          />
          <div data-thq="thq-navbar-nav" className="navbar8-desktop-menu">
            <nav className="navbar8-links">
              <a href={props.link1Url}>
                {props.link1 ?? (
                  <fragment>
                    <span className="navbar8-text13 thq-link thq-body-small">
                      Home
                    </span>
                  </fragment>
                )}
              </a>
              <a href={props.link2Url}>
                {props.link2 ?? (
                  <fragment>
                    <span className="navbar8-text08 thq-link thq-body-small">
                      Services
                    </span>
                  </fragment>
                )}
              </a>
              <a
                href={props.link3Url}
                target="_blank"
                rel="noreferrer noopener"
              >
                {props.link3 ?? (
                  <fragment>
                    <span className="navbar8-text16 thq-link thq-body-small">
                      About Us
                    </span>
                  </fragment>
                )}
              </a>
              <div
                onClick={() => setLink5DropdownVisible(!link5DropdownVisible)}
                className="navbar8-link4-dropdown-trigger"
              >
                <span>
                  {props.link4 ?? (
                    <fragment>
                      <span className="navbar8-text17 thq-link thq-body-small">
                        Contact Us
                      </span>
                    </fragment>
                  )}
                </span>
                <div className="navbar8-icon-container">
                  {link5DropdownVisible && (
                    <div className="navbar8-container1">
                      <svg viewBox="0 0 1024 1024" className="navbar8-icon">
                        <path d="M298 426h428l-214 214z"></path>
                      </svg>
                    </div>
                  )}
                  {!link5DropdownVisible && (
                    <div className="navbar8-container2">
                      <svg viewBox="0 0 1024 1024" className="navbar8-icon02">
                        <path d="M426 726v-428l214 214z"></path>
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            </nav>
            <div className="navbar8-buttons">
              <button className="navbar8-action1 thq-button-filled thq-button-animated">
                <span className="thq-body-small">
                  {props.action1 ?? (
                    <fragment>
                      <span className="navbar8-text11">Get Started</span>
                    </fragment>
                  )}
                </span>
              </button>
              <button className="navbar8-action2 thq-button-outline thq-button-animated">
                <span className="thq-body-small">
                  {props.action2 ?? (
                    <fragment>
                      <span className="navbar8-text07">Contact Us</span>
                    </fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="navbar8-burger-menu">
            <svg viewBox="0 0 1024 1024" className="navbar8-icon04">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="navbar8-mobile-menu">
            <div className="navbar8-nav">
              <div className="navbar8-top">
                <img
                  alt={props.logoAlt}
                  src={props.logoSrc}
                  className="navbar8-logo"
                />
                <div data-thq="thq-close-menu" className="navbar8-close-menu">
                  <svg viewBox="0 0 1024 1024" className="navbar8-icon06">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="navbar8-links1">
                <a href={props.link1Url}>
                  {props.link1 ?? (
                    <fragment>
                      <span className="navbar8-text13 thq-link thq-body-small">
                        Home
                      </span>
                    </fragment>
                  )}
                </a>
                <a href={props.link2Url}>
                  {props.link2 ?? (
                    <fragment>
                      <span className="navbar8-text08 thq-link thq-body-small">
                        Services
                      </span>
                    </fragment>
                  )}
                </a>
                <a href={props.link3Url}>
                  {props.link3 ?? (
                    <fragment>
                      <span className="navbar8-text16 thq-link thq-body-small">
                        About Us
                      </span>
                    </fragment>
                  )}
                </a>
                <div className="navbar8-link4-accordion">
                  <div
                    onClick={() => setLink5AccordionOpen(!link5AccordionOpen)}
                    className="navbar8-trigger"
                  >
                    <span>
                      {props.link4 ?? (
                        <fragment>
                          <span className="navbar8-text17 thq-link thq-body-small">
                            Contact Us
                          </span>
                        </fragment>
                      )}
                    </span>
                    <div className="navbar8-icon-container1">
                      {link5AccordionOpen && (
                        <div className="navbar8-container3">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="navbar8-icon08"
                          >
                            <path d="M298 426h428l-214 214z"></path>
                          </svg>
                        </div>
                      )}
                      {!link5AccordionOpen && (
                        <div className="navbar8-container4">
                          <svg
                            viewBox="0 0 1024 1024"
                            className="navbar8-icon10"
                          >
                            <path d="M426 726v-428l214 214z"></path>
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                  {link5AccordionOpen && (
                    <div className="navbar8-container5">
                      <a href={props.linkUrlPage1}>
                        <div className="navbar8-menu-item">
                          <img
                            alt={props.page1ImageAlt}
                            src={props.page1ImageSrc}
                            className="navbar8-page1-image"
                          />
                          <div className="navbar8-content">
                            <span>
                              {props.page1 ?? (
                                <fragment>
                                  <span className="navbar8-text04 thq-body-large">
                                    Home
                                  </span>
                                </fragment>
                              )}
                            </span>
                            <span>
                              {props.page1Description ?? (
                                <fragment>
                                  <span className="navbar8-text15 thq-body-small">
                                    Learn more about our company and services.
                                  </span>
                                </fragment>
                              )}
                            </span>
                          </div>
                        </div>
                      </a>
                      <a href={props.linkUrlPage2}>
                        <div className="navbar8-menu-item1">
                          <img
                            alt={props.page2ImageAlt}
                            src={props.page2ImageSrc}
                            className="navbar8-page2-image"
                          />
                          <div className="navbar8-content1">
                            <span>
                              {props.page2 ?? (
                                <fragment>
                                  <span className="navbar8-text14 thq-body-large">
                                    Services
                                  </span>
                                </fragment>
                              )}
                            </span>
                            <span>
                              {props.page2Description ?? (
                                <fragment>
                                  <span className="navbar8-text05 thq-body-small">
                                    Explore the range of services we offer.
                                  </span>
                                </fragment>
                              )}
                            </span>
                          </div>
                        </div>
                      </a>
                      <a href={props.linkUrlPage3}>
                        <div className="navbar8-menu-item2">
                          <img
                            alt={props.page3ImageAlt}
                            src={props.page3ImageSrc}
                            className="navbar8-page3-image"
                          />
                          <div className="navbar8-content2">
                            <span>
                              {props.page3 ?? (
                                <fragment>
                                  <span className="navbar8-text10 thq-body-large">
                                    About Us
                                  </span>
                                </fragment>
                              )}
                            </span>
                            <span>
                              {props.page3Description ?? (
                                <fragment>
                                  <span className="navbar8-text06 thq-body-small">
                                    Discover more about our company and values.
                                  </span>
                                </fragment>
                              )}
                            </span>
                          </div>
                        </div>
                      </a>
                      <a href={props.linkUrlPage4}>
                        <div className="navbar8-menu-item3">
                          <img
                            alt={props.page4ImageAlt}
                            src={props.page4ImageSrc}
                            className="navbar8-page4-image"
                          />
                          <div className="navbar8-content3">
                            <span>
                              {props.page4 ?? (
                                <fragment>
                                  <span className="navbar8-text09 thq-body-large">
                                    Contact Us
                                  </span>
                                </fragment>
                              )}
                            </span>
                            <span>
                              {props.page4Description ?? (
                                <fragment>
                                  <span className="navbar8-text12 thq-body-small">
                                    Get in touch with us for any inquiries.
                                  </span>
                                </fragment>
                              )}
                            </span>
                          </div>
                        </div>
                      </a>
                    </div>
                  )}
                </div>
              </nav>
              <div className="navbar8-buttons1">
                <button className="thq-button-filled">
                  <span>
                    {props.action1 ?? (
                      <fragment>
                        <span className="navbar8-text11">Get Started</span>
                      </fragment>
                    )}
                  </span>
                </button>
                <button className="thq-button-outline">
                  <span>
                    {props.action2 ?? (
                      <fragment>
                        <span className="navbar8-text07">Contact Us</span>
                      </fragment>
                    )}
                  </span>
                </button>
              </div>
            </div>
            <div className="navbar8-icon-group">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="thq-icon-x-small"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="thq-icon-x-small"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="thq-icon-small"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
          {link5DropdownVisible && (
            <div className="navbar8-container6 thq-box-shadow">
              <div className="navbar8-link5-menu-list">
                <a href={props.linkUrlPage1}>
                  <div className="navbar8-menu-item4">
                    <img
                      alt={props.page1ImageAlt}
                      src={props.page1ImageSrc}
                      className="navbar8-page1-image1 thq-img-ratio-1-1"
                    />
                    <div className="navbar8-content4">
                      <span>
                        {props.page1 ?? (
                          <fragment>
                            <span className="navbar8-text04 thq-body-large">
                              Home
                            </span>
                          </fragment>
                        )}
                      </span>
                      <span>
                        {props.page1Description ?? (
                          <fragment>
                            <span className="navbar8-text15 thq-body-small">
                              Learn more about our company and services.
                            </span>
                          </fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </a>
                <a href={props.linkUrlPage2}>
                  <div className="navbar8-menu-item5">
                    <img
                      alt={props.page2ImageAlt}
                      src={props.page2ImageSrc}
                      className="navbar8-page2-image1 thq-img-ratio-1-1"
                    />
                    <div className="navbar8-content5">
                      <span>
                        {props.page2 ?? (
                          <fragment>
                            <span className="navbar8-text14 thq-body-large">
                              Services
                            </span>
                          </fragment>
                        )}
                      </span>
                      <span>
                        {props.page2Description ?? (
                          <fragment>
                            <span className="navbar8-text05 thq-body-small">
                              Explore the range of services we offer.
                            </span>
                          </fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </a>
                <a href={props.linkUrlPage3}>
                  <div className="navbar8-menu-item6">
                    <img
                      alt={props.page3ImageAlt}
                      src={props.page3ImageSrc}
                      className="navbar8-page3-image1 thq-img-ratio-1-1"
                    />
                    <div className="navbar8-content6">
                      <span>
                        {props.page3 ?? (
                          <fragment>
                            <span className="navbar8-text10 thq-body-large">
                              About Us
                            </span>
                          </fragment>
                        )}
                      </span>
                      <span>
                        {props.page3Description ?? (
                          <fragment>
                            <span className="navbar8-text06 thq-body-small">
                              Discover more about our company and values.
                            </span>
                          </fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </a>
                <a href={props.linkUrlPage4}>
                  <div className="navbar8-menu-item7">
                    <img
                      alt={props.page4ImageAlt}
                      src={props.page4ImageSrc}
                      className="navbar8-page4-image1 thq-img-ratio-1-1"
                    />
                    <div className="navbar8-content7">
                      <span>
                        {props.page4 ?? (
                          <fragment>
                            <span className="navbar8-text09 thq-body-large">
                              Contact Us
                            </span>
                          </fragment>
                        )}
                      </span>
                      <span>
                        {props.page4Description ?? (
                          <fragment>
                            <span className="navbar8-text12 thq-body-small">
                              Get in touch with us for any inquiries.
                            </span>
                          </fragment>
                        )}
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          )}
        </header>
        {link5DropdownVisible && (
          <div
            onClick={() => setLink5DropdownVisible(false)}
            className="navbar8-container7"
          ></div>
        )}
      </header>
      <style jsx>
        {`
          .navbar8-container {
            top: 0;
            width: 100%;
            display: flex;
            z-index: 1000;
            position: sticky;
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .navbar8-navbar-interactive {
            width: 100%;
            display: flex;
            z-index: 100;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: space-between;
          }
          .navbar8-image1 {
            height: 3rem;
          }
          .navbar8-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .navbar8-links {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            display: flex;
            align-items: center;
            margin-left: var(--dl-space-space-twounits);
            flex-direction: row;
            justify-content: flex-start;
          }
          .navbar8-link4-dropdown-trigger {
            gap: 4px;
            cursor: pointer;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .navbar8-icon-container {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .navbar8-container1 {
            display: flex;
            align-items: center;
            animation-name: rotateInDownLeft;
            flex-direction: row;
            animation-delay: 0s;
            justify-content: flex-end;
            animation-duration: 500ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .navbar8-icon {
            width: 24px;
            height: 24px;
          }
          .navbar8-container2 {
            display: flex;
            align-items: center;
            animation-name: rotateInDownRight;
            flex-direction: row;
            animation-delay: 0s;
            justify-content: flex-end;
            animation-duration: 500ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .navbar8-icon02 {
            width: 24px;
            height: 24px;
          }
          .navbar8-buttons {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navbar8-action1 {
            display: flex;
            flex-direction: row;
          }
          .navbar8-action2 {
            display: flex;
            flex-direction: row;
          }
          .navbar8-burger-menu {
            display: none;
          }
          .navbar8-icon04 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .navbar8-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: var(--dl-space-space-twounits);
            z-index: 100;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .navbar8-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar8-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .navbar8-logo {
            height: 3rem;
          }
          .navbar8-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .navbar8-icon06 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .navbar8-links1 {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-self: flex-start;
            flex-direction: column;
          }
          .navbar8-link4-accordion {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar8-trigger {
            width: 100%;
            cursor: pointer;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .navbar8-icon-container1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .navbar8-container3 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .navbar8-icon08 {
            width: 24px;
            height: 24px;
          }
          .navbar8-container4 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-end;
          }
          .navbar8-icon10 {
            width: 24px;
            height: 24px;
          }
          .navbar8-container5 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-halfunit);
            grid-template-columns: 1fr;
          }
          .navbar8-menu-item {
            gap: var(--dl-space-space-unit);
            width: 100%;
            cursor: pointer;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
          }
          .navbar8-page1-image {
            width: 50px;
            height: 50px;
          }
          .navbar8-content {
            width: 340px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .navbar8-menu-item1 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            cursor: pointer;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
          }
          .navbar8-page2-image {
            width: 50px;
            height: 50px;
          }
          .navbar8-content1 {
            width: 340px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .navbar8-menu-item2 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            cursor: pointer;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
          }
          .navbar8-page3-image {
            width: 50px;
            height: 50px;
          }
          .navbar8-content2 {
            width: 340px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .navbar8-menu-item3 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            cursor: pointer;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-self: stretch;
            align-items: center;
            flex-shrink: 0;
          }
          .navbar8-page4-image {
            width: 50px;
            height: 50px;
          }
          .navbar8-content3 {
            width: 340px;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .navbar8-buttons1 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
            flex-direction: row;
          }
          .navbar8-icon-group {
            gap: var(--dl-space-space-twounits);
            display: flex;
          }
          .navbar8-container6 {
            top: 100%;
            left: 0px;
            width: 100%;
            display: flex;
            position: absolute;
            align-items: center;
            animation-name: fadeInDownBig;
            animation-delay: 0s;
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .navbar8-link5-menu-list {
            width: 100%;
            display: grid;
            padding: var(--dl-space-space-oneandhalfunits);
            grid-gap: var(--dl-space-space-halfunit);
            max-width: var(--dl-size-size-maxwidth);
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .navbar8-menu-item4 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            cursor: pointer;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-self: stretch;
            align-items: center;
            text-decoration: none;
          }
          .navbar8-page1-image1 {
            width: 30px;
            height: 30px;
          }
          .navbar8-content4 {
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar8-menu-item5 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            cursor: pointer;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-self: stretch;
            align-items: center;
            text-decoration: none;
          }
          .navbar8-page2-image1 {
            width: 30px;
            height: 30px;
          }
          .navbar8-content5 {
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar8-menu-item6 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            cursor: pointer;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-self: stretch;
            align-items: center;
            text-decoration: none;
          }
          .navbar8-page3-image1 {
            width: 30px;
            height: 30px;
          }
          .navbar8-content6 {
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar8-menu-item7 {
            gap: var(--dl-space-space-unit);
            width: 100%;
            cursor: pointer;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            align-self: stretch;
            align-items: center;
            text-decoration: none;
          }
          .navbar8-page4-image1 {
            width: 30px;
            height: 30px;
          }
          .navbar8-content7 {
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar8-container7 {
            top: 0px;
            width: 100%;
            height: 100%;
            display: flex;
            position: fixed;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar8-text04 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .navbar8-text05 {
            display: inline-block;
          }
          .navbar8-text06 {
            display: inline-block;
          }
          .navbar8-text07 {
            display: inline-block;
          }
          .navbar8-text08 {
            display: inline-block;
          }
          .navbar8-text09 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .navbar8-text10 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .navbar8-text11 {
            display: inline-block;
          }
          .navbar8-text12 {
            display: inline-block;
          }
          .navbar8-text13 {
            display: inline-block;
            text-decoration: none;
          }
          .navbar8-text14 {
            display: inline-block;
            font-style: normal;
            font-weight: 600;
          }
          .navbar8-text15 {
            display: inline-block;
          }
          .navbar8-text16 {
            display: inline-block;
            text-decoration: none;
          }
          .navbar8-text17 {
            display: inline-block;
          }
          @media (max-width: 767px) {
            .navbar8-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .navbar8-desktop-menu {
              display: none;
            }
            .navbar8-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .navbar8-mobile-menu {
              padding-top: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-oneandhalfunits);
            }
            .navbar8-container5 {
              grid-gap: 0;
            }
            .navbar8-link5-menu-list {
              display: none;
            }
          }
          @media (max-width: 479px) {
            .navbar8-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .navbar8-mobile-menu {
              padding: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

Navbar8.defaultProps = {
  page4ImageAlt: 'Image representing Contact Us page',
  page1: undefined,
  page2ImageSrc:
    'https://images.unsplash.com/photo-1717444308866-dcfc964bab23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjM0NjM1NHw&ixlib=rb-4.0.3&q=80&w=1080',
  page2Description: undefined,
  page3Description: undefined,
  page3ImageAlt: 'Image representing About Us page',
  linkUrlPage4: 'Contact Us',
  linkUrlPage1: 'Home',
  link3Url: '#aboutus',
  logoAlt: 'Company Logo',
  logoSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  link1Url: '#home',
  action2: undefined,
  page1ImageSrc:
    'https://images.unsplash.com/photo-1469573054742-64da3f2527fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjM0NjM1M3w&ixlib=rb-4.0.3&q=80&w=1080',
  page2ImageAlt: 'Image representing Services page',
  link2: undefined,
  page4: undefined,
  link2Url: '#services',
  linkUrlPage3: 'About Us',
  page3: undefined,
  page4ImageSrc:
    'https://images.unsplash.com/photo-1703750960068-a729aec4251c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjM0NjM1M3w&ixlib=rb-4.0.3&q=80&w=1080',
  action1: undefined,
  linkUrlPage2: 'Services',
  page4Description: undefined,
  link1: undefined,
  page2: undefined,
  page3ImageSrc:
    'https://images.unsplash.com/photo-1618239620038-a27bdf672032?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjM0NjM1NHw&ixlib=rb-4.0.3&q=80&w=1080',
  page1Description: undefined,
  link3: undefined,
  page1ImageAlt: 'Image representing Home page',
  link4: undefined,
}

Navbar8.propTypes = {
  page4ImageAlt: PropTypes.string,
  page1: PropTypes.element,
  page2ImageSrc: PropTypes.string,
  page2Description: PropTypes.element,
  page3Description: PropTypes.element,
  page3ImageAlt: PropTypes.string,
  linkUrlPage4: PropTypes.string,
  linkUrlPage1: PropTypes.string,
  link3Url: PropTypes.string,
  logoAlt: PropTypes.string,
  logoSrc: PropTypes.string,
  link1Url: PropTypes.string,
  action2: PropTypes.element,
  page1ImageSrc: PropTypes.string,
  page2ImageAlt: PropTypes.string,
  link2: PropTypes.element,
  page4: PropTypes.element,
  link2Url: PropTypes.string,
  linkUrlPage3: PropTypes.string,
  page3: PropTypes.element,
  page4ImageSrc: PropTypes.string,
  action1: PropTypes.element,
  linkUrlPage2: PropTypes.string,
  page4Description: PropTypes.element,
  link1: PropTypes.element,
  page2: PropTypes.element,
  page3ImageSrc: PropTypes.string,
  page1Description: PropTypes.element,
  link3: PropTypes.element,
  page1ImageAlt: PropTypes.string,
  link4: PropTypes.element,
}

export default Navbar8