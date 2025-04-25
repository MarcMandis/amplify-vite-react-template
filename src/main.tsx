import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import LoginPanel from "./LoginPanel.tsx";
import "./index.css";
import { Amplify } from "aws-amplify";
import outputs from "../amplify_outputs.json";

import { useState } from "react";

Amplify.configure(outputs);

function MainApp (){
  
  type pannelStatus = "inLogin" | "inApp" ;
  const [currentPanel, setCurrentPanel] = useState<pannelStatus>("inLogin");
  const goToApp = () =>  {
    
    setCurrentPanel("inApp");
  }
  
  return (
  <React.StrictMode>
    {(currentPanel == 'inLogin') && <LoginPanel updatePanelToApp={goToApp} />}
    {(currentPanel == 'inApp') && <App />}
    
  </React.StrictMode>
  )
}




ReactDOM.createRoot(document.getElementById("root")!).render(<MainApp/>);
