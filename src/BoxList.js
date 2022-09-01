import React, {useState} from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";

/** Display all created boxes and form.
 * 
 * Props
 * - none
 * 
 * States:
 * - boxes: [{id, height, width, backgroundColor}]
 * 
 * App -> BoxList
 * 
 */

function BoxList(){
  const [boxes, setBoxes] = useState([]);
  
  /** add a new box from form data submission */
  function addBox(newBox){
    setBoxes(boxes => [...boxes, newBox ]);
  }
  
  /** remove a box with a specific input id */
  function remove(id){ 
    setBoxes(boxes => boxes.filter(box => box.id !==id));
  }
  
  return (
    <div>
      <NewBoxForm addBox={addBox}/>
      {boxes.map(({height, width, backgroundColor, id}) => (
        <Box 
          height={height} 
          width={width} 
          backgroundColor={backgroundColor}
          remove={remove}
          id = {id}
          key= {id}
        />
      ))}
    </div>
  )
}

export default BoxList;