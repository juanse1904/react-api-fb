import React from 'react';
import { useSelector} from 'react-redux';


const Write = (props)=>{
    const page= useSelector((state)=>state.pages.find((item)=>item.id===props.match.params.idpage));
    console.log('this is the page', page)
    const tokenURL= page.access_token
    console.log("im the access token of the page", tokenURL)
    const idpage = props.match.params.idpage
     
    let messageint = ""
    const savemessage = (e) =>{
        messageint=e.target.value
        console.log('this is the message to send', messageint)
    }
    
    const postmessage = async()=>{
           let URL = `https://graph.facebook.com/v10.0/${idpage}/feed?access_token=${tokenURL}&message=${messageint}`
        console.log('this is the message to send outside', URL)
    const response = await fetch(
        URL, 
        {method:'POST'
    })
        const post= await response.json()
        console.log('these is the resp', post)
       
    };



return(
    <div>
    <input type="text" name="message" onChange={savemessage} placeholder="write a message by the post" id=""/>
        <input type="button" onClick={postmessage} value="saaay hi"/>
    </div>

)
}

export default Write