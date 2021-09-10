import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {saveToken} from '../actions';
import PostBox from '../components/postBox';





const Home =({hello, saveToken})=>{
const URL=`https://www.facebook.com/v10.0/dialog/oauth?
response_type=code
&auth_type=rerequest
&client_id=172832021243732
&redirect_uri=https%3A%2F%2Flocalhost%3A3000/dashboard
&scope=email%2Cpages_show_list%2Cpages_manage_engagement%2Cpages_manage_posts%2Cpages_manage_metadata%2Cbusiness_management%2Cpublic_profile%2Cpages_read_user_content%2Cpages_read_engagement%2Cpages_messaging%2Cread_insights%2Cinstagram_basic%2Cinstagram_manage_insights%2Cinstagram_manage_comments%2Cpages_manage_ads%2Cads_management%2Cads_read%2Cgroups_access_member_info%2Cpublish_to_groups%2Cinstagram_content_publish
&state=1838ce11-24d1-4965-9a1f-e33bd491f016
&response_type=code`
  


  return(
  <>
  <h1>{hello}</h1>
 <a href={URL}>
   <p>login with facebook!!</p>
 </a>
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
