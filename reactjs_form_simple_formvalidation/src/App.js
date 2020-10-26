import React from 'react';
import logo from './logo.svg';
import './App.css';
import FooterComponent from './components/FooterComponent';
import SignUpForm from './components/SignUpForm';


function App() {
  return (
    <div>
      <div className="container">
        <SignUpForm />
      </div>
      <FooterComponent />
    </div>
  );
}
export default App;
