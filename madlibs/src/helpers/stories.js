const generateStory = (words) => {
  // append the words to our story, and return it.
    return `The wild ${words["noun1"]} jumped over the ${words["noun2"]} and realized a big ${words["noun3"]} was ${words["verb"]} in the distance`;
}



// let testStory = generateStory({noun1: "jarett sisk", noun2: "pizza", noun3: "chicken", verb: "eating"});

export default generateStory;
