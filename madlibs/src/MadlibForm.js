import React, { useState } from "react";
import "./MadlibForm.css";

const MadlibForm = ({addStory}) => {
  const INITIAL_STATE = {
    noun1: "",
    noun2: "",
    noun3: "",
    verb: ""
  }
  
  // state for form
  const [formData, setFormData] = useState(INITIAL_STATE);

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // function for generating the story and hiding form / showing story
    addStory(formData);
    setFormData(INITIAL_STATE); // reset the form
  }

  // handle form change
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((data) => {
      return {
        ...data,
        [name]: value
      }
    })
  }

  // render form
  return (
    <form onSubmit={handleSubmit} className="MadlibForm">
      <input
        className="MadlibForm-input-noun1"
        type="text"
        id="noun1"
        name="noun1"
        value={formData.noun1}
        onChange={handleChange}
        placeholder="noun"
      />
      <input
        className="MadlibForm-input-noun2"
        type="text"
        id="noun2"
        name="noun2"
        value={formData.noun2}
        onChange={handleChange}
        placeholder="noun 2"
      />
      <input
        className="MadlibForm-input-noun3"
        type="text"
        id="noun3"
        name="noun3"
        value={formData.noun3}
        onChange={handleChange}
        placeholder="noun 3"
      />
      <input
        className="MadlibForm-input-verb"
        type="text"
        id="verb"
        name="verb"
        value={formData.verb}
        onChange={handleChange}
        placeholder="verb ending in ing"
      />
      <button className="MadlibForm-button">Submit</button>
    </form>
  )

}

export default MadlibForm;