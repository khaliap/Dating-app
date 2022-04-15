const bcrypt = require("bcrypt");
const { query } = require("../db");
const { generateToken } = require("../utils");
const {getAllUsers} = require('../controller/userController')



const router = require("express").Router();

const saltRounds = 10;


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
    console.log(err.message)
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

router.get('/users', getAllUsers)
router.get('/users/:id')
router.patch('/users/:id')
router.delete('/users/:id')


module.exports = router;