import React, { Component } from 'react'
import './Footer.css'
export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <div className='footer-layer-1'>
        <div className='demo-text'></div>
        <div className='opensource-text'>This project is for the IExec bounty program. The code is open-source.</div>
        </div>
        <div className='footer-layer-2'>
         <a href='https://github.com/orgs/DecentralizedAITracker/repositories' target="_blank"> <div className='github-item'><img className='github-logo' src='github-logo-01.svg' alt='github logo'/><div className='github-text'>Github</div></div></a>
          {/*<div className='iexec-item'><img className='iexec-logo' src='iexec-logo-02.svg' alt='iexec logo'/><div className='iexec-text'>Iexec</div></div>*/}
        </div>
      </div>
    )
  }
}
