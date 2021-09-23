import React, {useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {connect, useDispatch, useSelector} from 'react-redux';
import PageBox from '../components/pageBox';


const Dashboard = ()=>{
  const pages= useSelector((state)=>state.pages);
  const tokenURL= useSelector((state)=>state.token);
    function useQuery() {
        return new URLSearchParams(useLocation().search);
      }
    let query= useQuery()
    const codeParameter=query.get("code")

    const dispatch = useDispatch();
    let URL = `https://graph.facebook.com/v11.0/oauth/access_token?client_id=${process.env.REACT_APP_FACEBOOK_ID}&redirect_uri=${process.env.REACT_APP_APP_HOME}&client_secret=${process.env.REACT_APP_FACEBOOK_SECRET_KEY}&code=${codeParameter}`
    const fetchtoken = async()=>{
    const response = await fetch(URL)
        const clientToken= await response.json()
        dispatch({
            type:'SAVE_CLIENT_TOKEN',
            payload:clientToken
        })
        console.log("client token response", clientToken)
      await fetchpages();
    };

 const fetchpages = async()=>{
    let URL = `https://graph.facebook.com/me/accounts?&access_token=${tokenURL}`
    const response = await fetch(URL)
        const pages= await response.json()
        dispatch({
            type:'SAVE_PAGES',
            payload:pages
        })
      console.log("there are the pages of the user", pages)
    };

useEffect(()=>{
fetchtoken();
}, []);

useEffect(()=>{
  fetchpages()
  }, [tokenURL]);






return(
    <>
       <h1>THERE IS THE FACEBOOK PAGES</h1>

        {
      pages?
       pages.map(page=>
        <Link to={`posts/${page.id}`}>
        <PageBox {...page} />
        </Link>
        ):
        null
        }

    </>

)
}

export default Dashboard