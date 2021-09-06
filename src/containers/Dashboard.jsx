import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {connect, useDispatch, useSelector} from 'react-redux';
import PageBox from '../components/pageBox';


const Dashboard = ({token,userid})=>{
    const pages= useSelector((state)=>state.pages);
    const dispatch = useDispatch();
    const tokenURL =token;
    const userURL= userid;
    let URL = `https://graph.facebook.com/${userURL}/accounts?access_token=${tokenURL}`
    const fetchpages = async()=>{
    const response = await fetch(URL)
        const pages= await response.json()
        dispatch({
            type:'SAVE_PAGES',
            payload:pages
        })
        console.log('these are the pages', pages)
    };

useEffect(()=>{
fetchpages();
// eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

return(
    <div>
        {
        pages.map(page=>
        <Link to={`/posts/${page.id}`}>
        <PageBox {...page} />
        </Link>
        )
        }
    </div>

)
}
const mapStateToProps = state =>{
    return {
      token: state.token,
      userid:state.userid
    };
  };

export default connect(mapStateToProps, null)(Dashboard)