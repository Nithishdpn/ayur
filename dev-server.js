import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Mock API endpoints for local development
app.get('/api/health', (req, res) => {
  res.json({
    message: 'API is healthy and running',
    timestamp: new Date().toISOString(),
    environment: 'development',
    version: '1.0.0',
    status: 'ok'
  });
});

app.get('/api/services', (req, res) => {
  const services = [
    { 
      id: 1, 
      name: 'Ayurvedic Consultation', 
      price: 500, 
      description: 'Complete health assessment with personalized treatment plan including pulse diagnosis and dosha analysis',
      duration: 60,
      category: 'Consultation'
    },
    { 
      id: 2, 
      name: 'Panchakarma Treatment', 
      price: 2000, 
      description: 'Traditional five-step detoxification and rejuvenation therapy for complete body purification',
      duration: 120,
      category: 'Treatment'
    },
    { 
      id: 3, 
      name: 'Herbal Medicine Consultation', 
      price: 1000, 
      description: 'Customized herbal formulations based on individual constitution and health conditions',
      duration: 30,
      category: 'Medicine'
    },
    { 
      id: 4, 
      name: 'Abhyanga Massage', 
      price: 800, 
      description: 'Full-body therapeutic oil massage to improve circulation and promote relaxation',
      duration: 90,
      category: 'Therapy'
    },
    { 
      id: 5, 
      name: 'Shirodhara', 
      price: 1200, 
      description: 'Continuous warm oil pouring therapy for deep mental relaxation and stress relief',
      duration: 60,
      category: 'Therapy'
    }
  ];

  const { category } = req.query;
  let filteredServices = services;

  if (category && typeof category === 'string') {
    filteredServices = services.filter(service => 
      service.category.toLowerCase() === category.toLowerCase()
    );
  }

  res.json({ 
    services: filteredServices,
    total: filteredServices.length,
    categories: [...new Set(services.map(s => s.category))]
  });
});

app.post('/api/appointments', (req, res) => {
  const { name, date, service, phone, email } = req.body;
  
  if (!name || !date || !service) {
    return res.status(400).json({
      error: 'Missing required fields: name, date, and service are required'
    });
  }

  const newAppointment = {
    id: Date.now(),
    name,
    date,
    service,
    phone,
    email,
    status: 'pending',
    createdAt: new Date().toISOString()
  };

  res.status(201).json({
    message: 'Appointment booked successfully',
    appointment: newAppointment
  });
});

app.get('/api/appointments', (req, res) => {
  res.json({
    appointments: [
      {
        id: 1,
        name: 'John Doe',
        date: '2025-07-20',
        service: 'Ayurvedic Consultation',
        status: 'confirmed',
        createdAt: '2025-07-15T10:00:00Z'
      }
    ]
  });
});

app.post('/api/contact', (req, res) => {
  const { name, email, message, phone } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({
      error: 'Missing required fields: name, email, and message are required'
    });
  }

  res.json({
    message: 'Thank you for your message. We will get back to you soon!',
    submittedAt: new Date().toISOString()
  });
});

// Catch all for API routes
app.use('/api/*', (req, res) => {
  res.status(404).json({
    error: 'API endpoint not found',
    path: req.path,
    availableEndpoints: [
      'GET /api/health',
      'GET /api/services',
      'POST /api/appointments',
      'GET /api/appointments',
      'POST /api/contact'
    ]
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Development API server running on http://localhost:${PORT}`);
  console.log(`📍 API endpoints available at http://localhost:${PORT}/api/*`);
});
