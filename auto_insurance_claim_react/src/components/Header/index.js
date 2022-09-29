import React from "react";

function Header(props){

  return (
    <div className='container' style={{textAlign : 'center'}}>
      <div className='jumbotron'>
        <h1 className='text-bg-secondary p-3'>
          Deleon Car Insurance
        </h1>
        <p style={{fontStyle : 'italic'}}>Your car insurance home </p>
      </div>
    </div>
  );
}
export default Header