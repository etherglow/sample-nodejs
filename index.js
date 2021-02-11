const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
var LoremIpsum = require('lorem-ipsum').LoremIpsum;

var lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

app.get('/', (req, res) => res.send(lorem.generateParagraphs(7)))
app.post('/', (req, res) => {
  res.json({requestBody: req.body})  // <==== req.body will be a parsed JSON object
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
