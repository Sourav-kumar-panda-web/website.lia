const form = document.getElementById("details-form");
const otpForm = document.getElementById("otp-form");
let userPhone = "";

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const phone = document.getElementById("phone").value;
  userPhone = phone;

  const userData = { name, address };

  try {
    await fetch("http://localhost:5000/store-data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone, data: userData })
    });

    const otpRes = await fetch("http://localhost:5000/send-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone })
    });

    const result = await otpRes.json();
    if (result.success) {
      alert("OTP sent to " + phone);
      form.style.display = "none";
      otpForm.style.display = "block";
    } else {
      alert("Failed to send OTP: " + result.message);
    }
  } catch (err) {
    alert("Error: " + err.message);
  }
});

async function verifyOtp() {
  const otp = document.getElementById("otp").value;

  const res = await fetch("http://localhost:5000/verify-otp", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ phone : userPhone, otp })
  });

  const result = await res.json();
  if (result.success) {
    alert("OTP Verified!");
  } else {
    alert("Wrong OTP.");
  }
}

async function showStoredData() {
  const password = document.getElementById("adminPass").value;

  const res = await fetch("http://localhost:5000/admin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ password })
  });

  const data = await res.json();
  document.getElementById("dataDisplay").textContent = JSON.stringify(data, null, 2);
}
async function sendOtp() {
  const contact = document.getElementById('contact').value;

  if (!contact) {
    alert("+917077544483");
    return;
  }

  const response = await fetch('http://localhost:5000/send-otp', {
    method: 'POST',
    headers: { 

      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ contact })   // ✅ sending contact
  });

  const data = await response.json();
  alert(data.message || "OTP sent.");
}






  