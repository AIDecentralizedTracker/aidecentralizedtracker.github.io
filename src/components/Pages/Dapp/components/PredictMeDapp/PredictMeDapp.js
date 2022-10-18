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
  text : "The Dapp is a price prediction machine learning model. When you buy a calculation, iExec workers will run the ML model and you will get a prediction. The prediction is encrypted only for you and for the AI Tracker Oracle, nobody else can see the prediction. When the required time is up, the Oracle triggers and checks if the Dapp has correctly predicted the market. The AI Tracker tracks the number of predictions and the number of correct/incorrect predictions."
}
export default PredictMeDapp