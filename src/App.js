import './App.css';
import {Footer} from './compo/Footer';
import Header from './compo/Header';
import {Wish} from './compo/Wish';
import {useEffect, useState} from 'react';

function App() {
  let initWish;
  if(localStorage.getItem(`w`)===null){
    initWish=[];
  }
  else{
    initWish=JSON.parse(localStorage.getItem(`w`));
  }
  const [wishe,setWishe]=useState(initWish);
  useEffect(()=>{
    localStorage.setItem(`w`,JSON.stringify(wishe));
  },[wishe]);
  const onDl=(a)=>{
    setWishe(wishe.filter((e)=>{
      return e!==a;
    }));
    localStorage.setItem(`w`,JSON.stringify(wishe));
  }
  const addWish=(con)=>{
    let sno;
    if(wishe.length===0){
      sno=0;
    }
    else{
     sno= wishe[wishe.length-1].sno+1;
    }
    const myWish={sno:sno,con:con};
    setWishe([...wishe,myWish]);
  }
  return (
    <>
    <Header title="Wish List"/>
    <Wish addWish={addWish} wishes={wishe} onDel={onDl}/>
    <Footer/>
    </>
  );
}

export default App;
