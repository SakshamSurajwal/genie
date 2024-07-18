import React from 'react'

export const Ws = ({wshes,onDelete}) => {
  const boxsy={border:"2px solid orangered",borderRadius:"10px",backgroundColor:"yellow",marginTop:"20px",marginLeft:"470px",marginRight:"470px",
  paddingLeft:"50px",paddingTop:"20px",paddingBottom:"20px"};
  return (
    <>
    <div style={boxsy}>
       <p>{wshes.con}</p>
       <button style={{border:"1px solide white",backgroundColor:"orangered",color:"white",fontSize:"16px"}}
        onClick={()=>{onDelete(wshes)}}>Delete</button>
    </div>
    <hr/>
    </>
  );
}

