fetch("http://localhost:3000/api/expenses", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      description: "Test transaction from Node",
      amount: 20.99
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log("✅ Response:", data))
    .catch((err) => console.error("❌ Error:", err));
  /*
    fetch("http://localhost:3000/api/expenses", {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      })
        .then((res) => res.json())
        .then((data) => console.log("✅ Response:", data))
        .catch((err) => console.error("❌ Error:", err));
      
    */