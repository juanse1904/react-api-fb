import React from 'react';

import '../styles/components/postbox.css'


const pageBox = ({name,id,category})=>(
    <div className="box-container">
        <h1>{name}</h1>
        <p>{id}</p>
        <p>{category}</p>

    </div>
)

export default pageBox;