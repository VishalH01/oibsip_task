import React from 'react'

import PropTypes from 'prop-types'

import './cta.css'

const CTA = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="thq-section-max-width">
        <div className="cta-accent2-bg">
          <div className="cta-accent1-bg">
            <div className="cta-container2">
              <div className="cta-content">
                <span className="thq-heading-2">{props.heading1}</span>
                <p className="thq-body-large">{props.content1}</p>
              </div>
              <div className="cta-actions">
                <button type="button" className="thq-button-filled cta-button">
                  {props.action1}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

CTA.defaultProps = {
  heading1: 'Rent a Car Today',
  content1: 'Explore our wide range of vehicles and book your rental car now.',
  action1: 'Browse Cars',
}

CTA.propTypes = {
  heading1: PropTypes.string,
  content1: PropTypes.string,
  action1: PropTypes.string,
}

export default CTA
