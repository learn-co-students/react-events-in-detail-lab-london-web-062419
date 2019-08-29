// Code CoordinatesButton Component Here
import React, { Component } from 'react'
import { DH_UNABLE_TO_CHECK_GENERATOR } from 'constants';

 class CoordinatesButton extends Component {
    
    
   handleClick = (e) => {
       this.props.onReceiveCoordinates([e.clientX, e.clientY])
   }
    // how does this work
    // Step 1 :
    // the onReceiveCoordinates function is passed on inside props from index.js
    // we need to render it and add an action to the click. 
    // Step 2 
    // you assign your onClick to a new function you are going to build then you build 
    // that new function. 
    // Step 3 
    // use props passed on from the other component in you clickHandeler 
    
    render() {
        return (
          <div>
            <button onClick={this.handleClick}>coordinates</button>
            {/* //this passing the function from index.js to the button, then passing back the event to the function located in index.js} */}
          </div>
        );
    }
}
export default CoordinatesButton