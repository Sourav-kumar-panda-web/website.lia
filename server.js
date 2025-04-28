const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const axios = require('axios');

dotenv.config();
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let storedData = {};
let generatedOtp = '';

app.post('/submit-details', (req, res) => {
  storedData = req.body;
  console.log('Data stored:', storedData);
  res.json({ success: true });
});

app.post('/send-otp', async (req, res) => {
  const { contact } = req.body;
  generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();

  try {
    const result = await axios.post(
      'https://www.fast2sms.com/dev/bulkV2',
      {
        route: 'otp',
        variables_values: generatedOtp,
        numbers: contact,
      },
      {
        headers: {
          authorization: process.env.FAST2SMS_API,
        },
      }
    );

    res.json({ success: true, message: 'OTP sent' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, error: 'Failed to send OTP' });
  }
});

app.post('/verify-otp', (req, res) => {
  const { otp } = req.body;
  if (otp === generatedOtp) {
    res.json({ success: true, message: 'OTP verified' });
  } else {
    res.json({ success: false, message: 'Incorrect OTP' });
  }
});

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});