import React, { Component } from 'react'
import './Overview.css'
import './Introduction.css'
import './TheBasics.css'
import './UserReview.css'
import './AutomatedScoring.css'
export default class Overview extends Component {
  render() {
    return (
      <div className='overview-container'>
            <div className='landing-page-grid'>
                <div className='layout-lp-left'>
                    <h1 className='lp-text'>Performance Scoring Dapp for Machine Learning AI models.</h1>
                    <h2 className='lp-text-poweredbyixec'>Powered by <img className="iexec-logo-01" src="./iexec_logo_01.png"></img></h2>
                </div> 
                <div className='layout-lp-right'>
                    <img className='lp-logo' src='./eth-logo.svg' alt='ethereum logo'/>
                </div>
            </div>
            <div className='introduction-grid'>
                <div className='int-left-layout'>
                    <div className='int-text-box'>
                      <h2 className='int-title'>{TextIntroduction.text_introduction_title}</h2>
                      <h3 className='int-text'>{TextIntroduction.text_introduction}</h3>
                    </div>
                </div>
                <div className='int-right-layout'>
                    <img className='int-infographic' src='./introduction-infographic.svg' alt='introduction infographic'/>
                </div>
            </div>
            <div className='thebasics-grid'>
                <div className='tb-left-layout'>
                    <img className='tb-infographic' src='./basics-infographic.svg' alt='basics infographic'/>
                </div>
                <div className='tb-right-layout'>
                    <div className='tb-text-box'>
                      <div className='tb-title'>{TextTheBasics.title}</div>
                      <div className='tb-text'>{TextTheBasics.text}</div>
                    </div>
                </div>
            </div>
            <div className='user-rating-grid'>
                <div className='ur-left-layout'>
                    <div className='ur-text-box'>
                      <div className='ur-title'>{TextUserReview.title}</div>
                      <div className='ur-showitworks-title ur-subtitle'>{TextUserReview.howitworks_title}</div>
                      <div className='ur-howitworks-text ur-text'>{TextUserReview.howitworks_text}</div>
                      <div className='ur-problems-title ur-subtitle'>{TextUserReview.problems_title}</div>
                      <div className='ur-problems-text ur-text'>{TextUserReview.problems_text}</div>
                      <div className='ur-usecases-title ur-subtitle'>{TextUserReview.usecases_title}</div>
                      <div className='ur-usecases-text ur-text'>{TextUserReview.usecases_text}</div>
                    </div>
                </div>
                <div  className='ur-right-layout'>
                    <img className='ur-infographic' src='./user-review-infographic.svg' alt='user review infographic'/>
                </div>
            </div>
            <div className='automated-scoring-grid'>
                <div className='au-left-layout'>
                    <img src='./automated-infographic.svg' alt='automated scoring infographic'/>
                </div>
                <div className='au-right-layout'>
                  <div className='au-text-box'>
                      <div className='au-title'>{TextAutomatedScoring.title}</div>
                      <div className='au-howitworks-title au-subtitle'>{TextAutomatedScoring.howitworks_title}</div>
                      <div className='au-howitworks-text au-text'>{TextAutomatedScoring.howitworks_text}</div>
                      <div className='au-problems-title au-subtitle'>{TextAutomatedScoring.problems_title}</div>
                      <div className='au-problems-text au-text'>{TextAutomatedScoring.problems_text}</div>
                      <div className='au-usecases-title au-subtitle'>{TextAutomatedScoring.usecases_title}</div>
                      <div className='au-usecases-text au-text'>{TextAutomatedScoring.usecases_text}</div>
                  </div>
                </div>
            </div>
      </div>
    )
  }
}

const TextTheBasics = {
  "title" : "The basics",
  "text" : "We will have a dedicated smart contract for each Dapp. The smart contract will be used to track the performance of the application over time. How we score the Dapp depends on the machine leanrning model. If we can score the machine learning result using code, we will have a fully automated scoring system for the Dapp. If the result of the machine learning model cannot be score by code, we will need to use inputs for this. Here we look at the two use cases."
}

const TextIntroduction = {
  "text_introduction_title" : "Introduction",
  "text_introduction" : "IExec allows you to deploy Dapps running AI models without losing ownership of the model by keeping it secret even during its execution. To evaluate the performance of the AI, we need to check the quality of the result. If we expose the result, we will lose privacy and degrade the monetization model. Here are some solutions that overcome these problems."
}

const TextUserReview = {
  "title" : "User rating system",
  "howitworks_title" : "How it works",
  "howitworks_text" : "A simple solution, each time the Dapp is used, the user can rate the Dapp's result. The user then sends the score to the Ethereum smart contract used to track the performace of the Dapp. This simple solution comes with some problems.",
  "problems_title" : "Problems",
  "problems_text" : "The user's evaluation is infeasible, may be filled with spam, or even malicues parties that can sabotage the score of competing Dapps.",
  "usecases_title" : "Use cases",
  "usecases_text" : "Art generation, text generation, and anything subjective that is generally difficult to evaluate by code."
}

const TextAutomatedScoring = {
  "title" : "Automated rating system",
  "howitworks_title" : "How it works",
  "howitworks_text" : "Instead of relying on user feedback, a second application is used as an oracle to receive the result and score it. The Dapp will then push the score to the Ethereum smart contract.",
  "problems_title" : "Problems",
  "problems_text" : "Cannot be used in many use cases that focus on subjective results, such as generating images, text, etc.",
  "usecases_title" : "Use cases",
  "usecases_text" : "Weather forecasting, market prediction."


}