import languageMapping from "./speech.mappings";

const speakNativeDirections = (lang, destination) => {
  new Audio(languageMapping[lang][destination]).play();
}

const hasNativeSupport = (lang, dest) => {
  return Object.keys(languageMapping[lang]).includes(dest);
}

export default speakNativeDirections;
export { hasNativeSupport };