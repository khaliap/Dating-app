const bcrypt = require("bcrypt");
const { query } = require("../db");
const { generateToken } = require("../utils");
const authCheck = require("../middleware/checkAuth");

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

    const user = (await query(sql, [name, email, hashedPassword])).rows[0];

    const token = await generateToken(user.user_id);

    return res.status(201).json({
      user,
      token
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

    const token = await generateToken(user.user_id);
    // console.log(user)
    return res.status(200).json({
      data: {
        user,
        token
      },
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

router.post("/likes", authCheck, async (req, res) => {
  const { likeId } = req.body;
  const user_id = req.userId
  try {
    await query("insert into likes (id, liked_id) values ($1, $2)", [
      user_id,
      likeId,
    ]);

    res.sendStatus(200);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});
router.get("/users", authCheck, async (req, res) => {
  try {
    // const { user_id } = req.headers
    
    // console.log(user_id)
    const user_id = req.userId
    // console.log(user_id)
    const response = (await query("select * from users where user_id != $1", [user_id])).rows;
    const randomUser = getRandomItem(response);

    return res.status(200).json({randomUser});
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

router.put("/registration", authCheck, async (req, res) => {
  console.log(req.body)
  const { state, city, age, bio} = req.body;
  
  const user_id = req.userId
  console.log(user_id);
  // debugger

  try {
    const sql =
      "update users set state = $1, city = $2, age = $3, bio = $4 where user_id = $5 returning *";

    const user = await query(sql, [state, city, age, bio, user_id]);

    return res.sendStatus(201)
  } catch (err) {
    console.log(err.message);
    res.status(500).json({
      message: err.message,
    });
  }
});

router.get("/liked", authCheck, async (req, res) => {
  try {
    const userId = req.userId
    const response = (await query("select users.name, users.user_id, users.profile_pic, users.age, users.state from likes inner join users on users.user_id = likes.liked_id where id = $1", [userId])).rows;
    return res.status(200).json({response});
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

router.get("/profile", authCheck, async (req, res) => {
  try {
    const userId = req.userId
    const response = (await query("select * from users where user_id = $1", [userId])).rows[0];
    console.log(response)
    return res.status(200).json({response});
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
})

module.exports = router;
