import React from 'react';
import './App.css'
import {Button} from "./components/Button";


function App() {
    const Button1Func = (subscriber:string,age:number,adress:string) => {
        console.log(subscriber,age,adress)
    }

    const Button2Func = (subscriber:string) => {
        console.log(subscriber)
    }

    const Button3Func = () => {
        console.log('Im stupid Button')
    }

    return (
        <div className="App">
            <Button name={'MyYouTubeChanel-1'} callBack={()=>Button1Func('Im Vasia',21,'Live in Minsk')}/>
            <Button name={'MyYouTubeChanel-2'} callBack={()=>Button2Func('Im Ivan')}/>
            <Button name={'MyYouTubeChanel-3'} callBack={Button3Func}/>
        </div>
    );
}

export default App;
