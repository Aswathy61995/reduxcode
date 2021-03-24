
import React from 'react';
import { useSelector ,useDispatch} from 'react-redux';
import {increment,decrement,customisedMultiplication,login} from './actions1_demo'


function AppDemo() {
  
    const counter=useSelector(state=>state.counter)
    const isLogged=useSelector(state=>state.isLogged)
    const check=useSelector(state=>state.check)
    const dispatch=useDispatch();
  console.log(isLogged);

  return (
        <div className="App">
        <h1>Counter:-  {counter}</h1>
        <button onClick={()=>dispatch(increment())}>+</button>
        
        <button onClick={()=>dispatch(decrement())}>-</button>
        <button onClick={()=>dispatch(customisedMultiplication(5))}>customised</button><br/>
        {isLogged? <h3>logged state is true that is why i am visible to you</h3>:'Please login Here'}
        <button onClick={()=>dispatch(login())}>Login</button><br/>

        <button onClick={()=>dispatch(check())}>check</button>
        </div>
        
      );
}

export default AppDemo;
