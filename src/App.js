import React from "react";
import photo from "./image/moto2.jpg";
import "./style.css"
import "./App.css";
import ReactPlayer from "react-player";

function App() {
  return (
    <div className="App">
      <div style={{ border: "solid 10 black", maxWidth: "100vw" }}>
        <h1 className="title red">Mehdi Barwaki</h1>
        <img src="/image/moto.jpg" alt="photo mehdi moto" />
        
        <img src={photo} alt="photo moto 2" />
      </div>
      <ReactPlayer
        controls
        width="320"
        height="240"
        url="https://youtu.be/qzrqo7W4XYY"
      />

      
    </div>
  );
}

export default App;
