// proxy-server/server.js
const express = require('express');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 5000;

const API_URL = 'https://poe.ninja/api/data/currencyoverview?league=Necropolis&type=Currency'; // Replace with your actual API endpoint
const DATA_FILE_PATH = path.join(__dirname, 'data.json');

// Function to fetch data from API and save to local file
const fetchData = async () => {
  try {
    const response = await axios.get(API_URL);
    const data = response.data;
    fs.writeFileSync(DATA_FILE_PATH, JSON.stringify(data, null, 2));
    console.log('Data fetched and saved to local file.');
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// Endpoint to trigger data fetch
app.get('/update-data', async (req, res) => {
  await fetchData();
  res.send('Data updated successfully.');
});

// Endpoint to serve data from local file
app.get('/data', (req, res) => {
  if (fs.existsSync(DATA_FILE_PATH)) {
    const data = fs.readFileSync(DATA_FILE_PATH, 'utf-8');
    res.json(JSON.parse(data));
  } else {
    res.status(404).send('Data not found.');
  }
});

// Schedule data fetch at the start of the day (e.g., 00:00)
const scheduleDataFetch = () => {
  const now = new Date();
  const nextFetch = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  const delay = nextFetch - now;
  setTimeout(() => {
    fetchData();
    scheduleDataFetch();
  }, delay);
};

scheduleDataFetch(); // Start the scheduling

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});

// Initial fetch
fetchData();
