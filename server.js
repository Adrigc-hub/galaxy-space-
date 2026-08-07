// server.js - Backend para You Shou Yan Streamer
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Base de datos de fuentes / API de capítulos
const TOTAL_CHAPTERS = 1000;

// Endpoint para obtener un capítulo optimizado en tiempo real
app.get('/api/chapter/:num', (req, res) => {
  const chapterNum = parseInt(req.params.num);

  if (isNaN(chapterNum) || chapterNum < 1 || chapterNum > TOTAL_CHAPTERS) {
    return res.status(404).json({ error: 'Capítulo no encontrado' });
  }

  // Generación de lista de imágenes en streaming optimizado
  // Aquí el servidor prepara la lista de paneles del capítulo
  const pages = [
    `https://m.media-amazon.com/images/M/MV5BMDM0NDNmYzgtNjg2Yi00ZDIxLTk1MzQtZDM4NzdiNzE5YTRiXkEyXkFqcGc@._V1_.jpg`,
    `https://static.tvtropes.org/pmwiki/pub/images/fabulous_beasts.png`
  ];

  res.json({
    chapter: chapterNum,
    title: `You Shou Yan (有兽焉) - Capítulo ${chapterNum}`,
    totalPages: pages.length,
    pages: pages
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor de You Shou Yan corriendo en http://localhost:${PORT}`);
});
