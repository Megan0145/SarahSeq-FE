import React from 'react';
import { connect } from 'react-redux';

function Home(props){
    return(
       <div>
           <h1>Home</h1>
       </div>
    );
}
export default connect(state=>state, {})(Home)