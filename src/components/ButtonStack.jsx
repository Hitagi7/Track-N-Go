import { useState } from 'react';
import SignUpOverlay from './landingpage/SignupOverlay.jsx';
import LoginOverlay from './landingpage/LoginOverlay.jsx';
import './ButtonStack.css';

function ButtonStack() {
  const [loginVisible, setLoginVisible] = useState(false);
  const [signupVisible, setSignupVisible] = useState(false);

  const toggleLogin = () => {
    setLoginVisible(!loginVisible);
  };

  const toggleSignup = () => {
    setSignupVisible(!signupVisible);
  };

  const toggleLoginSignup = () => {
    setLoginVisible(!loginVisible);
    setSignupVisible(!signupVisible);
  };

  return (
    <div className='ButtonStack'>
      <div className="Login" onClick={toggleLogin}>Log In</div>
      <div className="Signup" onClick={toggleSignup}>Sign Up</div>

      <SignUpOverlay visible={signupVisible} toggleVisible={toggleSignup} toggleLoginSignup={toggleLoginSignup} />
      <LoginOverlay visible={loginVisible} toggleVisible={toggleLogin} toggleLoginSignup={toggleLoginSignup} />
    </div>
  );
}

export default ButtonStack;
