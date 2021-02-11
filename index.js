const express = require('express')
const app = express()
const port = process.env.PORT || 3000
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

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
app.post('/update', (req, res) => {
  console.log('body is ',req.body);
  res.send(req.body);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
