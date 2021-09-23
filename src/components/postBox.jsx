import React from 'react';
import stamLogo from '../static/stam-logo.png'
import editLogo from '../static/edit-logo.svg'
import estadisticLogo from '../static/estadistic-logo.svg'
import eyeLogo from '../static/eye-logo.svg'
import recordLogo from '../static/record-logo.svg'

import '../styles/components/postbox.css'


const postBox = ({message,id,media_url,media_type,caption})=>(
    <div className="box-container">
        <h1>{message?message:media_type}</h1>
        {
        media_type==="VIDEO"?
        <video autoplay controls>
  <source src={media_url} />
</video>:
        <img src={media_url?media_url:stamLogo} alt="" />
        }
        <p>{caption}</p>
        <div className="container-menu">
            <img src={editLogo} alt="" />
            <img src={estadisticLogo} alt="" />
            <img src={eyeLogo} alt="" />
            <img src={recordLogo} alt="" />
        </div>
    </div>
)

export default postBox;

