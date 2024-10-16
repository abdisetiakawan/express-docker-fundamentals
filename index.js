const {
  MONGO_USER,
  MONGO_PASSWORD,
  MONGO_IP,
  MONGO_PORT,
  SESSION_SECRET,
  REDIS_URL,
  REDIS_PORT,
} = require("./config/config");
const express = require("express");
const cors = require("cors");
const app = express();
const RedisStore = require("connect-redis").default;
const session = require("express-session");
const { createClient } = require("redis");
const mongoose = require("mongoose");

// initialize Client
let redisClient = createClient({
  url: `redis://${REDIS_URL}:${REDIS_PORT}`, // Gunakan URL redis
});

redisClient
  .connect()
  .then(console.log(`Connected to Redis`))
  .catch(console.error);

let redisStore = new RedisStore({
  client: redisClient,
});

// initialize session storage
app.use(
  session({
    store: redisStore,
    secret: SESSION_SECRET,
    cookie: {
      secure: false,
      maxAge: 30000,
      httpOnly: true,
      saveUninitialized: false,
      resave: false,
    },
  })
);

const postRouter = require("./routes/post.route");
const userRouter = require("./routes/user.route");
const port = process.env.PORT || 3000;

const url = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/`;
const connectTry = () => {
  mongoose
    .connect(url)
    .then(() => {
      console.log("Connected to MongoDB successfully");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
      setTimeout(() => {
        connectTry();
      }, 5000);
    });
};

connectTry();
app.enable("trust proxy");
app.use(cors({}));
app.use(express.json());
app.get("/api", (req, res) => {
  res.send("Hello World! Hello World! Hello World! ");
  console.log("Hallo ini merupakan request");
});

app.use("/api/posts", postRouter);
app.use("/api/auth", userRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
