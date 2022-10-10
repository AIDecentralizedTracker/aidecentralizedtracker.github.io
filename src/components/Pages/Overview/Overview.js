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
                    <h1 className='lp-text'>Decentalized Ais now with decentralized performance tracking.</h1>
                    <h2 className='lp-text-poweredbyixec'>Powered by Iexec</h2>
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
                    <img src='./basics-infographic.svg' alt='basics infographic'/>
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
  "text" : "We will have a dedicated smartcontract for each dapp. The smartcontract will be used to store the score. How we get the score will be based on the use case of each dapp. If we can score the dapp using an algorithm we will have a fully automated scoring system. But if we can’t than a user input will need to be used. Here we go thru both scoring systems."
}

const TextIntroduction = {
  "text_introduction_title" : "Introduction",
  "text_introduction" : "Iexec enables deploying dapps running AI models without losing ownership of the model by keeping it secret even when executing. To keep a score of the AI performance we need to check how good the result is. If we expose the result we would lose privacy and degrade the monetization model. Here are some solutions that overcome these issues."
}

const TextUserReview = {
  "title" : "User rating system",
  "howitworks_title" : "How it works",
  "howitworks_text" : "A simple soulution, every time the dapp is used the user can rate the dapp result. The user then pushes the score to the ethereum smartcontract used to track the dapp performance. This simple solution comes with a few of problems.",
  "problems_title" : "Problems",
  "problems_text" : "User rating is unrealable, can be filled with spam, or even malicues party can sabotage the score of competing dapps",
  "usecases_title" : "Use cases",
  "usecases_text" : "Art, writing anything subjective usualy is hard to rate it by a code"
}

const TextAutomatedScoring = {
  "title" : "Automated rating system",
  "howitworks_title" : "How it works",
  "howitworks_text" : "Instead of relying in user feedback, a second dapp is used as a oracle to recieve the result and come up with a score. The dapp will then push the score to the ethereum smartcontract.",
  "problems_title" : "Problems",
  "problems_text" : "Can’t be used in many use cases focused on subjective stuf like art, writing . But even for writing it can be check for grammar and etc.",
  "usecases_title" : "Use cases",
  "usecases_text" : "Check for grammar, check weather data, market data, anuthing that is used for prediction."


}