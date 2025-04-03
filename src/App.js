import logo from './logo.svg';
import './App.css';
import FirstComponent from './Components/FirstComponent';
import FooterComponent from './Components/FooterComponent';
import WelcomeComponent from './Components/WelcomeComponent';
import AllTheBooksComponent from './Components/AllTheBooksComponent';
import { useEffect, useState } from 'react';
import { ThemeContext } from './Modules/context';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFoundComponent from './Components/NotFoundComponent';
import BookDetailsComponent from './Components/BookDetailsComponent';



function App() {

 const [data, setData] = useState("")

 const [theme, setTheme] = useState("dark")
 


  return (
    
    <>
   <BrowserRouter>

       <ThemeContext.Provider value={[theme, setTheme]}>
       <FirstComponent data={data} setData={setData}/>
       
       <Routes>
          <Route path='/' element={
            <>
            <WelcomeComponent/>
            <AllTheBooksComponent data={data}/>
            </>
            }/>
            <Route path='/book/:asin' element={<BookDetailsComponent/>}/>
            <Route path='*' element={<NotFoundComponent/>}/>
            
       </Routes>
       
       <FooterComponent/>
   </ThemeContext.Provider>

   </BrowserRouter>

   
   
   
   </>

      
    
  );
}

export default App;
