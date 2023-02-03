import React, {useState} from 'react';
import './App.css'



function App() {

    /*let a = 1*/
    let[a,setA]=useState(1)


    const onclickHandler = ()=> {
       setA(++a) ;
        console.log(a)
    }

    const onclickHandler2 = ()=> {
        setA(0) ;
        console.log(a)
    }

    return (
        <div className="App">
          <h1>{a}</h1>
            <button onClick={onclickHandler}>number</button>
            <button onClick={onclickHandler2}>0</button>
        </div>
    );
}

export default App;
