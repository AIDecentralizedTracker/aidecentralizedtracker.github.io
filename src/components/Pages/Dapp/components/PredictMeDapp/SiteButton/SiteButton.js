import React, { Component } from 'react'
import './SiteButton.css'


 const SiteButton = ({
    children,
    onClick
    }) => {
    return(
        <button className={'sitebutton-btn '} onClick={onClick}>
            {children}
        </button>
    )
}

export  {SiteButton}