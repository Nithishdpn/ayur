const handler = (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

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
    },
    { 
      id: 6, 
      name: 'Nasya Treatment', 
      price: 600, 
      description: 'Nasal administration of medicated oils for respiratory and neurological benefits',
      duration: 45,
      category: 'Treatment'
    },
    { 
      id: 7, 
      name: 'Udvartana', 
      price: 900, 
      description: 'Herbal powder massage for weight management and skin health',
      duration: 75,
      category: 'Therapy'
    },
    { 
      id: 8, 
      name: 'Yoga Therapy Session', 
      price: 400, 
      description: 'Personalized yoga practice designed according to your body type and health needs',
      duration: 60,
      category: 'Wellness'
    }
  ];

  // Optional filtering by category
  const { category } = req.query;
  let filteredServices = services;

  if (category && typeof category === 'string') {
    filteredServices = services.filter(service => 
      service.category.toLowerCase() === category.toLowerCase()
    );
  }

  return res.status(200).json({ 
    services: filteredServices,
    total: filteredServices.length,
    categories: [...new Set(services.map(s => s.category))]
  });
};

module.exports = handler;
