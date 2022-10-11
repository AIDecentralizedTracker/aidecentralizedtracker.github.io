import React, { Component } from 'react'
import './Dapp.css'
import PredictMeDapp from './components/PredictMeDapp/PredictMeDapp'
import {Tokens} from './Tokens'
export default class Dapp extends Component {
  render() {
    return (
        <div>
            <div className='dapp-container'>
                <div className='title-grid'>
                    <div className='title-layout'>
                        <h1 className='t-text'>{TitleText.title}</h1>
                    </div>
                </div>
                <PredictMeDapp className="dapp-predictme" token={Tokens[0]}/>
            </div>
        </div>
    )
  }
}

const TitleText = {
    title : "Dencetralized dapps using AI Tracker "
}

