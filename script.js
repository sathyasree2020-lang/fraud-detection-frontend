function checkFraud() {
  const amount = document.getElementById("amount").value;
  const method = document.getElementById("method").value;
  const bin = document.getElementById("bin").value;
  const country = document.getElementById("country").value;
  const result = document.getElementById("result");

  if (!amount || !bin) {
    result.style.color = "red";
    result.innerText = "⚠️ Please fill all required fields.";
    return;
  }

  // Simple fake check (You can later connect backend)
  if (amount > 50000 || country !== "India") {
    result.style.color = "red";
    result.innerText = "🚨 Transaction flagged as FRAUD!";
  } else {
    result.style.color = "green";
    result.innerText = "✅ Transaction looks safe.";
  }
}
