import logo from './logo.svg';
import './App.css';
import FirstComponent from './Components/FirstComponent';
import FooterComponent from './Components/FooterComponent';
import WelcomeComponent from './Components/WelcomeComponent';
import AllTheBooksComponent from './Components/AllTheBooksComponent';
import { useEffect, useState } from 'react';
import { ThemeContext } from './Modules/context';



function App() {

 const [data, setData] = useState("")

 const [theme, setTheme] = useState("dark")
 


  return (
    
    <>

   <ThemeContext.Provider value={[theme, setTheme]}>
   <FirstComponent data={data} setData={setData}/>
   <WelcomeComponent/>
   <AllTheBooksComponent data={data}/>
   <FooterComponent/>
   </ThemeContext.Provider>

   
   
   
   </>

      
    
  );
}

export default App;
