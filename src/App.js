import React from "react";
// import "./App.css" - importing css

function App() {
  const [message, setMessage] = React.useState( "Javascript is cool.");

  function handleClick() {
    setMessage("My New Message");
  }
  return (
  <div>
  <h1>{message}</h1>
  <button onClick={handleClick}>Update the message</button>
  <button onClick={()=>setMessage("My New Message")}>Update the message to</button>

  </div>
  )
}

export default App;