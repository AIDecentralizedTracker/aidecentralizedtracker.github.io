import React, { Component } from 'react'
import './Docs.css'
export default class Docs extends Component {
  render() {
    return (
      <div className='docs-container'>
           <div className='docs-layout-01'>
          <h1>How to track your Iexec machine learning dapp performance</h1>
          <div className='docs-box-01'>
              <div className='docs-01-number'>1</div>
              <div className='docs-01-text'><div>Create ML dapp</div></div>
          </div>
          <div className='docs-box-01'>
             <div className='docs-01-number'>2</div>
             <div className='docs-01-text'><div>Create Oracle dapp that will evaluate your results (<a href='https://github.com/DecentralizedAITracker/aitracker-sdk' target="_blank"> link </a>)</div> </div>
          </div>
          <div className='docs-box-01'>
             <div className='docs-01-number'>3</div>
             <div className='docs-01-text'><div>Implement aitracker-sdk in your ml dapp and oracle dapp for them to communicate privately </div> </div>
          </div>
          <div className='docs-box-01'>
             <div className='docs-01-number'>4</div>
             <div className='docs-01-text'><div>Implement aitracker-sdk in the frontend to make sure the resul stays private</div> </div>
          </div>
        </div>
      </div>
    )
  }
}
