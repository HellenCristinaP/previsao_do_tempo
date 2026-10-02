require('dotenv').config({ path: './.env' });
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/api/weather', async (req, res) => {
  const city = req.query.city;
  const apiKey = process.env.OPENWEATHER_API_KEY;

  if (typeof city !== 'string' || !city.trim()) {
    return res.status(400).json({ error: 'Informe o nome da cidade' });
  }

  if (!apiKey) {
    console.error('A variável OPENWEATHER_API_KEY não está configurada');
    return res.status(500).json({ error: 'O serviço de clima não está configurado' });
  }

  try {
    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params: {
        q: city.trim(),
        appid: apiKey,
        units: 'metric',
        lang: 'pt_br'
      }
    });
    res.json(response.data);
  } catch (error) {
    if (!axios.isAxiosError(error)) {
      throw error;
    }

    if (error.response?.status === 404) {
      return res.status(404).json({ error: 'Cidade não encontrada' });
    }

    if (error.response?.status === 401 || error.response?.status === 403) {
      console.error('A chave da API OpenWeather é inválida ou não está autorizada');
      return res.status(502).json({ error: 'Não foi possível autenticar no serviço de clima' });
    }

    console.error('Erro ao consultar o serviço OpenWeather:', error.message);
    return res.status(502).json({ error: 'Não foi possível buscar o clima agora' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
