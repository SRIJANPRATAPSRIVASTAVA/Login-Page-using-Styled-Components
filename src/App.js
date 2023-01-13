import React from "react";
import Login from "./Components/Login";
import logo from "./Utilities/image1.png";
import { Article,Figure,Img } from "./Styles/Styles";


const App = () => {
  return (
    <Article>
      <Figure>
        <Img src={logo} alt="Logo" />
      </Figure>
      <Login />
    </Article>
  );
};

export default App;
