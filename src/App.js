import React from "react";

function App() {
  const [message, setMessage] = React.useState( "Javascript is cool.");

  function handleClick() {
    setMessage("My New Message");
  }
  return (
  <div>
  <h1>{message}</h1>
  <button onClick={handleClick}>Update the message</button>
  </div>
  )
}

export default App;