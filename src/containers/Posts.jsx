import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom'
import PostBox from '../components/postBox';


const Posts = (props)=>{
    const posts= useSelector((state)=>state.posts);
    const tokenURL= useSelector((state)=>state.token);
    const idpage = props.match.params.idpage
    const dispatch = useDispatch();
       let URL = `https://graph.facebook.com/v10.0/${idpage}/feed?access_token=${tokenURL}`
    const fetchposts = async()=>{
    const response = await fetch(URL)
        const posts= await response.json()
        dispatch({
            type:'SAVE_POSTS',
            payload:posts
        })
    };

useEffect(()=>{
fetchposts();
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

return(
    <div>
        {
        posts.map(post=><PostBox {...post} />)
        }
    <Link to={`/write/${idpage}`}>
    <h1>Write a post</h1>
    </Link>
    </div>

)
}

export default Posts