import React from "react";
import { Photo, Title, Wrapper } from "./Profile.js";
import "./styles.css";
import { Welcome} from "./Welcome.js";

function App() {
  return (
    <div>
    <Wrapper>
      <Photo id="img" src="image1.jpg" />

      <Title
        style={{
          color: "red"
        }}
      >
        sabrine ben saada
      </Title>

      <Title 
      style={{
      color:"blue"
      }}
      >
        etudiante
      </Title>
      <Welcome>
         <alert name="sabrine" alertMyInput="`My name is sabrine saada `" ></alert>
      </Welcome>
     
      </Wrapper> 
    </div>
 );
};
export default App;
