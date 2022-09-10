const {translateText} = require('./translation.js')
const express = require("express");
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: false }));


app.get('/', function (req, res) {
  res.status(200).send('make a post request to /api/translate with a request body containing text and target, where text is a string or array of strings to be translated, and target is the language code for the destination language.')
})

app.post('/api/translate', async (req, res) => {
  try {
    const { text, target }= req.body;
    if (!text) 
    return res.status(400).send('translation text is required!')
    if (!target) 
    return res.status(400).send('target language is required!')
    let translated =  await translateText(text, target)
    res.status(200).send(translated)
  } catch (error) {
    res.status(400).send(error)
  }
})

app.listen(3000, () => console.log('Server running on port 3000...'));