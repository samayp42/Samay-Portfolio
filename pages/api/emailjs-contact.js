// This is an alternative contact API route using EmailJS

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  // Validate input
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Since we're using EmailJS directly from the client side,
  // this API route can simply return success
  // This helps bypass any server-side email sending issues
  
  res.status(200).json({ message: 'Form submission successful' });
}