const express = require('express');
const fs = require('fs');
const app = express();
const port = 5000;
const cors = require('cors');
app.use(cors());
app.use(express.json());
let matlabData = null;

// Initial read of the JSON file
function readJSONFile() {
  try {
    const data = fs.readFileSync('../../Client/src/matlabData.json', 'utf8');
    matlabData = JSON.parse(data);
  } catch (err) {
    console.error('Error reading JSON file:', err);
  }
}

// Watch for changes to the JSON file
const a = require('../../Client/src/matlabData.json')
fs.watch('../../Client/src/matlabData.json', (event, filename) => {
  if (event === 'change') {
    console.log('File changed:', filename);
    readJSONFile();
  }
});

// Serve the JSON data via an API endpoint
app.get('/api1', (req, res) => {
  if (matlabData !== null) {
    res.json(matlabData);
  } else {
    res.status(500).json({ error: 'Unable to fetch data.' });
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Read the JSON file on startup
readJSONFile();
