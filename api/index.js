const handler = (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Main API info endpoint
  return res.status(200).json({ 
    message: 'Aarogyam Ayurveda API',
    version: '1.0.0',
    timestamp: new Date().toISOString(),
    endpoints: [
      'GET /api/health - Health check',
      'GET /api/services - Available services',
      'POST /api/appointments - Book appointment',
      'GET /api/appointments - Get appointments',
      'POST /api/contact - Contact form'
    ]
  });
};

module.exports = handler;
