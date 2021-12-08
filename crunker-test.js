const NodeCrunker = require("node-crunker");
const audio = new NodeCrunker();

// merge example
audio
  .fetchAudio(
    "http://www.mp3classicalmusic.net/48Music/Bachjs48/Goldberg00.mp3",
    "http://www.mp3classicalmusic.net/48Music/Bachjs48/Goldberg03.mp3"
  )
  .then((buffers) => audio.mergeAudio(buffers))
  .then((merged) => audio.export(merged, "merged.mp3"))
  .then(() => console.log("merging done"))
  .catch((error) => {
    console.log(error);
  });

// local merge example
audio
  .fetchLocalAudio("background.mp3", "voice.mp3")
  .then((buffers) => audio.mergeAudio(buffers))
  .then((merged) => audio.export(merged, "merged.mp3"))
  .then(() => console.log("merging done"))
  .catch((error) => {
    console.log(error);
  });

// concatenation example
audio
  .fetchAudio(
    "http://www.mp3classicalmusic.net/48Music/Bachjs48/Goldberg00.mp3",
    "http://www.mp3classicalmusic.net/48Music/Bachjs48/Goldberg03.mp3"
  )
  .then((buffers) => audio.concatAudio(buffers))
  .then((merged) => audio.export(merged, "concat.mp3"))
  .then(() => console.log("concatenation done"))
  .catch((error) => {
    console.log(error);
  });
