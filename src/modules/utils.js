
/**
 * Return analysis result of a string input
 * @param {string} transcript 
 * @returns {string} locationName
 */
 const speechAnalyzer = (transcript, Buildings) => {
  let splitTranscript = transcript.split(" ");
  let matches = {};
  let buildingKeys = Object.keys(Buildings);

  for(let i=0; i<buildingKeys.length; i++) {
      let currentLocation = buildingKeys[i]
      let splitOfCurrentLocation = buildingKeys[i].split(" ")
      for(let j=0; j<splitTranscript.length; j++) {
          let wordInTrans = splitTranscript[j];
          if(splitOfCurrentLocation.includes(wordInTrans)) {
              if(matches[currentLocation]){
                  matches[currentLocation] = matches[currentLocation] + 1;
              } else {
                  matches[currentLocation] = 1;
              }
          }
      }
  }

  // Find closest matching location for query: loc with highest val
  let keysOfMatches = Object.keys(matches);
  let valuesOfMatches = Object.values(matches);
  return keysOfMatches[valuesOfMatches.indexOf(Math.max(...valuesOfMatches))];
}


export {speechAnalyzer};