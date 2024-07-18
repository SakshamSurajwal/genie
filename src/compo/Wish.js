import React from 'react'
import {Ws} from './Ws';
import Add from './Add';

export const Wish = (props) => {
  return (
    <div>
      <Add addWish={props.addWish}/>
      {props.wishes.length===0?<>
      <p style={{color:"white"}}>No wishes entered!</p></>:
      props.wishes.map((elem)=>{
        return <Ws wshes={elem} key={elem.sno} onDelete={props.onDel}/>
      })}
    </div>
  );
}