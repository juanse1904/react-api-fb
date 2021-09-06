import React from 'react';

import '../styles/components/postbox.css'


const postBox = ({message,id})=>(
    <div className="box-container">
        <h1>{message}</h1>
        <p>{id}</p>

    </div>
)

export default postBox;