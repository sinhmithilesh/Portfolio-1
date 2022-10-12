import React, { useState, useContext } from 'react'
import './appmultistepForm.css'
import First from './componentMultistepFrom/first/First'
import { Stepper, Step, StepLabel, Snackbar } from '@mui/material'
import Second from './componentMultistepFrom/second/Second'
import Third from './componentMultistepFrom/third/Third.jsx'
import { context } from './componentMultistepFrom/context'
import edenlogo from "./componentMultistepFrom/edenLogo.png"
import Fourth from './componentMultistepFrom/fourth/Fourth'

export default function AppMultistepform() {
  const { currentStep, setCurrentStep, isSubmitted } = useContext(context)
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  })
  const { vertical, horizontal, open } = state

  const showSteps = (step) => {
    switch (step) {
      case 1:
        return <First />
      case 2:
        return <Second />
      case 3:
        return <Third />
      case 4:
        return <Fourth />
      default:
        return <First />
    }
  }
  console.log('issubmitted', isSubmitted)

  if (isSubmitted) {
    return (
      <div className="appContaier">
        <div className="success-msg">
          <h2>Submitted successfully</h2>
        </div>
      </div>
    )
  }

  return (
    <div className="appContaier">
      <div className="header">
       <div className='head'>
        <span className='head-logo'>
          <img className='headLogo-img' src={edenlogo} alt=''/>
        </span>
        <h3 className='head-title'>Eden</h3>
       </div>
        <div className="create-stepper">
          <Stepper  activeStep={currentStep - 1}>
            <Step>
              <StepLabel
                onClick={() => {
                  setCurrentStep(1)
                }}
                style={{ cursor: 'pointer' }}
              ></StepLabel>
            </Step>
            <Step>
              <StepLabel
                onClick={() => {
                  setCurrentStep(2)
                }}
                style={{ cursor: 'pointer' }}
              ></StepLabel>
            </Step>
            <Step>
              <StepLabel
                onClick={() => {
                  setCurrentStep(3)
                }}
                style={{ cursor: 'pointer' }}
              ></StepLabel>
            </Step>
            <Step>
              <StepLabel
                onClick={() => {
                  setCurrentStep(4)
                }}
                style={{ cursor: 'pointer' }}
              ></StepLabel>
            </Step>
          </Stepper>
        </div>
        {showSteps(currentStep)}
      </div>
    </div>
  )
}
