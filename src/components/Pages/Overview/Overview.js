import React, { Component } from 'react'
import './Overview.css'
export default class Overview extends Component {
  render() {
    return (
      <div className='overview-container'>
            <div className='grid-landing-page'>
                <div className='layout-lp-left'>
                    <h1 className='lp-text'>Decentalized and ownable  Ais now with performance tracking.</h1>
                </div>
                <div className='layout-lp-right'>
                    <img className='lp-logo' src='./eth-logo.svg' alt='ethereum logo'></img>
                </div>
            </div>
            <div className='grid-introduction'>
                <div className='layout-int-left'>
                    <div className='int-text-container'>
                      <h2 className='int-text-title'>{TextIntroduction.text_introduction_title}</h2>
                      <h3 className='int-text-description'>{TextIntroduction.text_introduction}</h3>
                    </div>
                </div>
                <div className='layout-int-right'>
                    <img src='./introduction-infographic.svg' alt='introduction infographic'></img>
                </div>
            </div>
            <div className='grid-user-review'>

            </div>
      </div>
    )
  }
}


const TextIntroduction = {
  text_introduction_title : "Introduction",
  text_introduction : "Iexec enables deploying dapps running AI models without losing ownership of the model by keeping it secret even when executing. To keep a score of the AI performance we need to check how good the result is. If we expose the result we would lose privacy the the monetization model. Here we see some of the solutions to overcomes these issues."
}
