import React, { Component } from 'react'
import './Docs.css'
export default class Docs extends Component {
  render() {
    return (
      <div className='docs-container'>
           <div className='docs-layout'>
          <div className='docs-title'>How to monitor the performance of your IExec machine learning application?</div>
          <div className='docs-box'>
              <div className='docs-number'>1</div>
              <div className='docs-text'><div>Create ML Dapp.</div></div>
          </div>
          <div className='docs-box'>
             <div className='docs-number'>2</div>
             <div className='docs-text'><div>Create Decentralized Oracle Dapp that will evaluate your results.</div> </div>
          </div>
          <div className='docs-box'>
             <div className='docs-number'>3</div>
             <div className='docs-text'><div>Implement aitracker-sdk (<a className='docs-link' href='https://github.com/DecentralizedAITracker/aitracker-sdk' target="_blank"> link </a>) in your Machine Learning Dapp and Decentalized Oracle Dapp so they can communicate privately. </div> </div>
          </div>
          <div className='docs-box'>
             <div className='docs-number'>4</div>
             <div className='docs-text'><div>Implement aitracker-sdk in the front-end to make sure the result remains confidential.</div> </div>
          </div>
        </div>
      </div>
    )
  }
}
