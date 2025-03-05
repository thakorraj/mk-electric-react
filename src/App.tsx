import React,{ useState } from 'react'
import {MainComponent} from '../src/components/main'

function App() {
  const [count, setCount] = useState(0)
//   React.useEffect= () => {


//     const LoadExternalScript = () => {
//         const externalScript = document.createElement("script");
//         externalScript.id = "external";
//         externalScript.async = true;
//         externalScript.type = "text/javascript";
//         externalScript.setAttribute("crossorigin", "anonymous");
//         document.body.appendChild(externalScript);
//         externalScript.src = './script.js';
//   };
//   LoadExternalScript();
// }
  
  return (
    <>
   <MainComponent/>
    </>
  )
}

export default App
