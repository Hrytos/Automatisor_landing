'use strict';

const express    = require('express');
const path       = require('path');
const helmet     = require('helmet');
const compression = require('compression');

const app  = express();
const PORT = process.env.PORT || 3000;

/* ─── SECURITY & COMPRESSION ───────────────────────────────────── */
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc:  ["'self'"],
      scriptSrc:   ["'self'", "'unsafe-inline'"],
      styleSrc:    ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
      fontSrc:     ["'self'", 'https://fonts.gstatic.com'],
      imgSrc:      ["'self'", 'data:'],
      mediaSrc:    ["'self'"],
      connectSrc:  ["'self'"],
    },
  },
}));
app.use(compression());

/* ─── TEMPLATE ENGINE ───────────────────────────────────────────── */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/* ─── STATIC FILES ──────────────────────────────────────────────── */
app.use(express.static(path.join(__dirname, 'public'), {
  maxAge: '7d',
  etag:   true,
}));

/* ─── ROUTES ────────────────────────────────────────────────────── */
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Hrytos — Decision Intelligence for Industrial Automation',
    description: 'Hrytos is the intelligence layer for autonomous material handling — diagnostic tools for operators, pipeline intelligence for solution providers.',
  });
});

/* ─── 404 ───────────────────────────────────────────────────────── */
app.use((req, res) => {
  res.status(404).render('index', {
    title: 'Hrytos — Page not found',
    description: '',
  });
});

/* ─── START ─────────────────────────────────────────────────────── */
app.listen(PORT, () => {
  console.log(`Hrytos running → http://localhost:${PORT}`);
});
