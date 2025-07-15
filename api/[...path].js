const handler = (req, res) => {
  // Enable CORS
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

  // Get the path from the query parameters
  const { path } = req.query;
  const apiPath = Array.isArray(path) ? path.join('/') : path || '';

  console.log(`API Request: ${req.method} /api/${apiPath}`);

  // Handle different API endpoints
  try {
    switch (apiPath) {
      case 'health':
        return res.status(200).json({ 
          message: 'API is healthy',
          timestamp: new Date().toISOString(),
          method: req.method,
          environment: process.env.NODE_ENV || 'production'
        });

      case 'services':
        if (req.method === 'GET') {
          const services = [
            { 
              id: 1, 
              name: 'Ayurvedic Consultation', 
              price: 500, 
              description: 'Complete health assessment with personalized treatment plan',
              duration: 60 
            },
            { 
              id: 2, 
              name: 'Panchakarma Treatment', 
              price: 2000, 
              description: 'Traditional detoxification and rejuvenation therapy',
              duration: 120 
            },
            { 
              id: 3, 
              name: 'Herbal Medicine', 
              price: 1000, 
              description: 'Customized herbal formulations for specific health conditions',
              duration: 30 
            }
          ];
          return res.status(200).json({ services });
        }
        break;

      case 'appointments':
        if (req.method === 'POST') {
          const appointmentData = req.body;
          
          // Basic validation
          if (!appointmentData.name || !appointmentData.date || !appointmentData.service) {
            return res.status(400).json({
              error: 'Missing required fields: name, date, and service are required'
            });
          }

          // Simulate appointment creation
          const newAppointment = {
            id: Date.now(),
            ...appointmentData,
            status: 'pending',
            createdAt: new Date().toISOString()
          };

          return res.status(201).json({
            message: 'Appointment booked successfully',
            appointment: newAppointment
          });
        }
        
        if (req.method === 'GET') {
          return res.status(200).json({
            appointments: []
          });
        }
        break;

      case 'contact':
        if (req.method === 'POST') {
          const { name, email, message, phone } = req.body;
          
          if (!name || !email || !message) {
            return res.status(400).json({
              error: 'Missing required fields: name, email, and message are required'
            });
          }

          return res.status(200).json({
            message: 'Thank you for your message. We will get back to you soon!',
            submittedAt: new Date().toISOString()
          });
        }
        break;

      default:
        return res.status(404).json({ 
          error: 'API endpoint not found',
          path: `/api/${apiPath}`,
          availableEndpoints: [
            'GET /api/health',
            'GET /api/services',
            'POST /api/appointments',
            'GET /api/appointments',
            'POST /api/contact'
          ]
        });
    }
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({
      error: 'Internal server error',
      message: 'Something went wrong processing your request'
    });
  }

  res.status(405).json({ 
    error: 'Method not allowed',
    method: req.method,
    path: `/api/${apiPath}`
  });
};

module.exports = handler;
