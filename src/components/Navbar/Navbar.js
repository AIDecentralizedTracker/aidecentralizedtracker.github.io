import React, { Component } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import {MenuItems} from './MenuItems'
import { AppButton } from './components/AppButton/AppButton'
import './Navbar.css'
export default class Navbar extends Component {


    state = {clicked : false,
            scroll : false}

   
    onScroll = () => {
        if(window.scrollY >= 80){
            this.setState({scroll : true})
        }else{
            this.setState({scroll : false})
        }
        
        
    }
    


    render(){
        window.addEventListener('scroll',this.onScroll)
        return(
            <nav className={this.state.scroll ? 'Navbar active' : 'Navbar'}>
                <div className='navbar-logo-container'><img className='navbar-logo-img' src="logo.png" alt='logo'/><div className='navbar-logo-text'>AI Performance Tracker </div> </div>
                
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                        {
                           MenuItems.map((item,index)=>{
                               return <li key={index}> <Link to={item.url} onClick={() => {this.setState({clicked : false})}}> <a  className={item.cName}> {item.title} </a> </Link></li>
                            })
                        }
                </ul>
                
                <Link to='/Dapp'><AppButton className='navbar-appbutton'>Launch PoC</AppButton></Link> 
            </nav>
        )
    }
}
