// /pages/api/fetchCoinRates.js

export default async function handler(req, res) {
    const API_CHABI = '9c45c95bc4dbf5507442177061d8abeb';  // Replace this with your actual API key
    const apiUrl = `http://api.coinlayer.com/live?access_key=${API_CHABI}`;
  
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch data from Coinlayer');
      }
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
  