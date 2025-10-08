app.post("/api/signup", (req, res) => {
  const { name, email, password } = req.body;

  // Replace with real DB logic
  if (email && password && name) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});