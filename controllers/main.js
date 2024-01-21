const login = async (req, res) => {
  res.send("Fake Login/Register/SignUp");
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).send({
    msg: `Hello, John Doe`,
    secret: `Here is your lucky number your lucky number is ${luckyNumber}`,
  });
};

module.exports = { login, dashboard };
