import React from "react";

/** Creates a box with a background color, width, and height
 * 
 * Props 
 * -background color
 * -width
 * -height
 * -remove(function to remove a box)
 * -id (unique)
 * 
 * States
 * -none
 * 
 * App -> BoxList -> Box
 * 
 */

function Box({backgroundColor="grey", width="50", height="50", remove, id}){
  const myStyles = {
    backgroundColor: backgroundColor,
    width: width+'px',
    height: height+'px'
  }
  
  /** Delete a box on button click */
  function handleDelete(){
    remove(id);
  }
  
  return (
    <div>
      <div style={myStyles}></div>
      <button onClick={handleDelete}> X </button>
    </div>
  )
}

export default Box;