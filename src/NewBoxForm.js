import React, { useState } from "react";

/** Form to create a new box.
 * 
 * Props
 * - addBox function from BoxList
 * 
 * States
 * -formData with height, width, background color
 * 
 * App -> Boxlist -> NewBoxForm
 */

function NewBoxForm({ addBox }) {
  const [formData, setFormData] = useState({
    height: "",
    width: "",
    backgroundColor: "",
  });

  /** Handles any changes on form and updates display of form input */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value,
    }));
  }

  /** Handles submit to create a new box and clears form */
  function handleSubmit(evt) {
    evt.preventDefault();
    addBox(formData);
    setFormData({ height: "", width: "", backgroundColor: "" });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="height">Height</label>
          <input onChange={handleChange}
            name="height">{formData.height}</input>
        </div>
        <div>
          <label htmlFor="width">Width</label>
          <input onChange={handleChange}
            name="width">{formData.width}</input>
        </div>
        <div>
          <label htmlFor="backgroundColor">Background Color</label>
          <input onChange={handleChange}
            name="backgroundColor">{formData.backgroundColor}</input>
        </div>
        <button type="submit"> Create a new box! </button>
      </form>
    </div>
  );
}

export default NewBoxForm;