import cookie from "cookie";

export const handle = (req, res) => {
  const { username, password } = req.body;
  if (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  ) {
    res
      .cookie("access_token", process.env.TOKEN, {
        maxAge: 60 * 60,
        httpOnly: true,
      })
      .status(200)
      .json({ admin :"admin" });
  } else {
    res.status(400).json("wrong user");
  }
};
