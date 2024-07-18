import {useState} from 'react';

export default function Add(props){
    let[con,setCon]=useState("");
    const submit=(e)=>{
        e.preventDefault();
        if(!con){
            alert('Please enter something');
        }
        else{
        props.addWish(con);
        setCon(``);
        }
    }
    const kuchdaal={border:"2px solid yellow",backgroundColor:"purple",marginTop:"50px",height:"200px",width:"600px"
,textAlign:"center",marginLeft:"auto",marginRight:"auto",borderRadius:"15px"};
    return(
        <form onSubmit={submit} style={kuchdaal}>
            <h3 style={{marginLeft:"-150px",marginTop:"30px",marginBottom:"-20px",color:"yellow"}}>Type your wish here</h3><br/><br/>
            <input size="30" style={{marginRight:"20px",borderRadius:"5px"}} value={con} onChange={(e)=>{
                setCon(e.target.value)
            }} name="kuch" type="text"/><hr/>
            <button type="submit" style={{marginLeft:"350px",border:"1px solid white",backgroundColor:"blue",
            color:"white",borderRadius:"5px",fontSize:"16px"}}>Add</button>
        </form>
    );
}