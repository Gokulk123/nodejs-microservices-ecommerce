exports.createProfile = async (req, res) => {
  const { username, email } = req.body;
  const pool = req.app.locals.pool;
  await pool.query("INSERT INTO profiles(username, email) VALUES($1, $2)", [
    username,
    email,
  ]);
  res.send("Profile created");
};

exports.getProfile = async (req, res) => {
  const pool = req.app.locals.pool;
  const result = await pool.query("SELECT * FROM profiles WHERE username=$1", [
    req.params.username,
  ]);
  res.json(result.rows[0]);
};
