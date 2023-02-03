import React from 'react';
import './App.css'



function App() {
    // const myFirstSubscriber = (event:MouseEvent<HTMLButtonElement>) => {
    //     console.log('Hello Im Vasia!')
    // }
    //
    // const mySecondSubscriber = (event:MouseEvent<HTMLButtonElement> => {
    //     console.log('Hello Im Ivan!')
    // }

  /*  const onClickHandler= (name:string)=>{
       console.log(name)
    }*/
    const foo1 = () => {
// ничего не передавать,но в консоли должно показаться 100200
        console.log(100200)
    }

    const foo2 = (num:number) => {
//передать цифру 100200
console.log(num)
    }

    return (
        <div className="App">
      {/* <button onClick={(event)=>{.log('Hello')}}>MyYouTubeChanel-1</button>*/}
      {/* <button onClick={myFirstSubscriber}>MyYouTubeChanel-1</button>*/}
      {/* <button onClick={(event) => onClickHandler('Vasia')}>MyYouTubeChanel-1</button>
       <button onClick={(event)=>onClickHandler('Ivan')}>MyYouTubeChanel-2</button>
       <button onClick={()=>onClickHandler('some info')}>MyYouTubeChanel-3</button>*/}

            <button onClick={foo1}>1</button>
            <button onClick={()=>foo2(100200)}>2</button>
  </div>

    );

}

export default App;
