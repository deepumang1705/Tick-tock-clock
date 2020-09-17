import React from 'react' 
 
function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn) {
        return <UserGreeting/>;
    }
    return <GuestGreeting/>;
}

function UserGreeting(props) {
    return <h1>Hello Umang</h1>
}
function GuestGreeting() {
    return <h1>please sign in</h1>
}

  

export default Greeting