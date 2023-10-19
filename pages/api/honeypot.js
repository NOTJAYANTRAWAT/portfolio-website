import axios from 'axios';

export default async function handler(req, res) {
  try {
    // Log the honeypot data when the home page is accessed (useEffect on client-side)
    if (req.method === 'GET' && req.url === '/') {
      const honeypotUrl = 'http://127.0.0.1:8000';
      const { data } = await axios.get(honeypotUrl);
      console.log('Honeypot data:', data);
    }

    // Your existing honeypot logic for logging other API requests
    // ...

    res.status(200).end(); // Respond with 200 OK
  } catch (error) {
    console.error('Error logging honeypot data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
