// api/weather.js
const axios = require('axios');

export default async function handler(req, res) {
  const { city } = req.query;
  const apiKey = process.env.OPENWEATHER_API_KEY;

  try {
    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params: {
        q: city,
        appid: apiKey,
        lang: 'pt_br',
        units: 'metric'
      }
    });

    res.status(200).json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar clima' });
  }
}
