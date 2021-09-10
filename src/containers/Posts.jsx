import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import PostBox from '../components/postBox';
import threePoints from '../static/three-points-logo.png';
import brandProfile from '../static/logo-brand.png';

import '../styles/containers/posts.css'


const Posts = (props)=>{
    const pages = useSelector((state)=>state.pages);
    const posts=  useSelector((state)=>state.facebook_posts);
    const igPosts = useSelector((state)=>state.ig_posts);
    const tokenURL= useSelector((state)=>state.token);
    const idpage = props.match.params.idpage
    const page= pages.filter(page =>page.id===idpage)
    const pageToken = page[0].access_token
    const dispatch = useDispatch();
    
    const fetchposts = async()=>{
           let URL = `https://graph.facebook.com/v10.0/${idpage}/feed?access_token=${tokenURL}`
           console.log("the URL of posts", URL)
    const response = await fetch(URL)
        const posts= await response.json()
        dispatch({
            type:'SAVE_POSTS',
            payload:posts
        })
    
    };
    const fetchIGposts = async()=>{
        let URL = `https://graph.facebook.com/v11.0/${idpage}?fields=instagram_business_account&access_token=${pageToken}`
        const response = await fetch(URL)
        const igId= await response.json()
        let URL2 = `https://graph.facebook.com/v11.0/${igId.instagram_business_account.id}/media?fields=instagram_business_account&access_token=${pageToken}`
        const response2 = await fetch(URL2)
        const { data } = await response2.json()
        data.forEach(async post=>{
            let URL = `https://graph.facebook.com/v11.0/${post.id}?fields=id,media_url,media_type,permalink,caption&access_token=${pageToken}`
            const response = await fetch(URL)
            let postData = await response.json()
        dispatch({
            type:'SAVE_IG_POSTS',
            payload: postData,
        })
        console.log("the data post of IG", postData)
        })
        

        };

useEffect(()=>{
fetchposts();
fetchIGposts();

// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

return(
    <div className="posts-container">
    
    <div className="facebook-posts">
        <div className="brand-data">
            <img src={brandProfile} alt="" />
            <h3>Nombre marca</h3>
            <div className="submenu-brand">
                <img src={threePoints} alt="" />
            </div>
        </div>
    {
      posts?
       posts.map(page=>
        <PostBox {...page} />
        ):
        null
        }
    </div>
    <div className="facebook-posts">
    <div className="brand-data">
    <img src={brandProfile} alt="" />
            <h3>Nombre marca</h3>
            <div className="submenu-brand">
                <img src={threePoints} alt="" />
            </div>
        </div>
    {
      igPosts?
       igPosts.map(post=>
        <a href={post.permalink} target="_blank">
            <PostBox {...post} />
        </a>
        ):
        null
        }
    </div>
    </div>
)
}

export default Posts