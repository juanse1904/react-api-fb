import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {saveToken} from '../actions';
import PostBox from '../components/postBox'
import FacebookLogin from 'react-facebook-login';





const Home =({hello, saveToken})=>{
  const responseFacebook = (response) =>{
    saveToken({
      response
    })
  }
  
  return(
  <>
  <h1>{hello}</h1>
    <FacebookLogin
    appId="172832021243732"
    autoLoad={false}
    fields="name,email,picture"
    scope="pages_show_list,pages_read_engagement,pages_manage_posts, pages_manage_metadata"
    callback={responseFacebook} />
  <PostBox/>
    <Link to={'/dashboard'}>
      <h3>see pages</h3>
    </Link>
  </>
  );
  }
const mapStateToProps = state =>{
  return {
    hello: state.hello
  };
};

const mapDispatchToProps ={
saveToken
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
