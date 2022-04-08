import React, { useState } from "react";
import MadlibForm from "./MadlibForm";
import MadlibStory from "./MadlibStory";
import generateStory from "./helpers/stories";
import "./Madlib.css";

const Madlib = () => {
  const [story, setStory] = useState("");

  const restart = () => {
    setStory("");
  }

  // add the story
  const addStory = (formData) => {
    let story = generateStory(formData);
    setStory(story);
  }

  // Render the story
  const renderStory = (data) => {
    return (
      <>
        <MadlibStory story={story}/>
        {/* Button to restart */}
        <button onClick={restart}>Restart</button>
      </>
    )
  }

  return (
    <div className="Madlib">
      <h1>React Madlibs!</h1>
      {/* if story, render it, else render form */}
      {story ? renderStory() :<MadlibForm addStory={addStory}/>}
    </div>
  )

}

export default Madlib;