import { v4 as uuid } from 'uuid';

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
 * App -> BoxList -> NewBoxForm, Box
 * 
 */

function Box({backgroundColor, width, height, remove, id}){
  const myStyles = {
    backgroundColor: backgroundColor,
    width: width+'px',
    height: height+'px'
  }
  
  function handleDelete(evt){
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