const bcrypt = require("bcrypt");
const { query } = require("../db");
const { generateToken } = require("../utils");
const { getAllUsers } = require("../controller/userController");
const authCheck = require("../middleware/checkAuth");
const { user } = require("pg/lib/defaults");

const router = require("express").Router();

const saltRounds = 10;

function getRandomItem(arr) {
  // get random index value
  const randomIndex = Math.floor(Math.random() * arr.length);

  // get random item
  const item = arr[randomIndex];

  return item;
}

router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const sql =
      "insert into users (name, email, password) values ($1, $2, $3) returning *";

    const user = await query(sql, [name, email, hashedPassword]);

    const token = generateToken(user.id);

    return res.status(201).json({
      token,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({
      message: err.message,
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await (
      await query("select * from users where email = $1", [email])
    ).rows[0];

    if (!user) {
      return res.status(401).json({
        message: "You sure you have the right email?",
      });
    }

    const passwordCorrect = await bcrypt.compare(password, user.password);

    if (!passwordCorrect) {
      return res.status(401).json({
        message: "You sure you have the right password?",
      });
    }

    const token = await generateToken();

    return res.status(200).json({
      data: {
        token,
      },
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

router.post("/likes", authCheck, async (req, res) => {
  const userId = req.userId;
  const { likeId } = req.body;

  try {
    await query("insert into likes (user_id, liked_id) values ($1, $2)", [
      userId,
      likeId,
    ]);

    res.sendStatus(200);
  } catch {}
});
router.get("/users", authCheck, async (req, res) => {
  try {
    const userId = req.userId; 
    console.log(userId)
    const response = (await query("select * from users")).rows;
    // console.log(response);
    const randomUser = getRandomItem(response);
    return res.status(200).send(randomUser);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

router.put("/registration", authCheck, async (req, res) => {
  const { state, city, age, bio } = req.body;
  const userId = req.userId;
  console.log(userId)

  try {
    const sql =
      "update users set state = $1, city = $2, age = $3, bio = $4 where user_id = $5 returning *";

    const user = await query(sql, [state, city, age, bio, userId]);

    return res.status(201).send(user)
  } catch (err) {
    console.log(err.message);
    res.status(500).json({
      message: err.message,
    });
  }
});

router.delete("/users/:id");

module.exports = router;
