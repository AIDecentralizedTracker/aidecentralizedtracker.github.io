import React, { Component, useState, useMemo } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { SiteButton } from './SiteButton/SiteButton';
import './PredictMeDapp.css'
function PredictMeDapp(props) {

  const openLinkInNewTab = ( url ) => {
    const newTab = window.open(url, '_blank', 'noopener,noreferrer');
    if ( newTab ) newTab.opener = null;
  }

  return (
    <div className='stats-grid'>
        <div className='s-left-layout'>
            <div className='s-left-box'>
              <div className='screenshot-title'>PredictMe Dapps <SiteButton className='screenshot-btn' onClick={ () => openLinkInNewTab('https://predictme.github.io/')}>Go to site</SiteButton></div>
              <div className='screenshot-background'></div>
              <img className='screenshot' src='./predictme-screenshot.png'></img>
            </div>
        </div>
        <div className='s-right-layout'>
            <div className='s-right-box'>
              <h2 className='predictme-title'>Description</h2>
              <p className='predictme-description'>{AboutText.text}</p>
            </div>
        </div>
    </div>
  )
}

const AboutText = {
  title : "About",
  text : "The dapp is a price predicion machine learning model. When you buy a computation, the iexec workers will execute the ml model and you will get a prediction.The prediction is encrypted only for you and for the AI Tracker oracle, no one else can see the prediction. When the required time has passed the oracle will fire up and check if the dapp has correctly predicted the market. The AI Tracker tracks the number of predictions and number of correct/incorrect predictions."
}
export default PredictMeDapp