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
      scriptSrc:   ["'self'", "'unsafe-inline'", 'https://static.hsappstatic.net'],
      styleSrc:    ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
      fontSrc:     ["'self'", 'https://fonts.gstatic.com'],
      imgSrc:      ["'self'", 'data:', 'https://*.hubspot.com', 'https://*.hubspotusercontent.com'],
      mediaSrc:    ["'self'"],
      connectSrc:  ["'self'", 'https://*.hubspot.com', 'https://*.hubapi.com'],
      frameSrc:    ["'self'", 'https://meetings-na2.hubspot.com'],
    },
  },
}));
app.use(compression());

/* ─── TEMPLATE ENGINE ───────────────────────────────────────────── */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/* ─── STATIC FILES ──────────────────────────────────────────────── */
app.use(express.static(path.join(__dirname, 'public'), {
  maxAge: process.env.NODE_ENV === 'production' ? '7d' : 0,
  etag:   true,
}));

/* ─── ROUTES ────────────────────────────────────────────────────── */
app.get('/', (req, res) => {
  res.render('index', {
    title: 'Automatisor — Decision Intelligence for Intralogistics Automation',
    description: 'Automatisor detect operational signals, assess inefficiencies & identify highest-impact automation opportunities. — diagnostic tools for operators, pipeline intelligence for solution providers.',
  });
});

app.get('/schedule', (req, res) => {
  res.render('schedule', {
    title: 'Schedule your Assessment — Automatisor',
    description: 'Book a free facility assessment with Automatisor\'s Industrial Engineering team. Get your right-fit automation path, business case, and vetted vendor shortlist.',
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
