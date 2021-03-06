const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");
require("dotenv").config();

const authRoutes = require("./routes/auth");
const followRoutes = require("./routes/follow");
const postRoutes = require("./routes/post");
const userRoutes = require("./routes/user");
const commentRoutes = require("./routes/comment");

const app = express();

const port = process.env.PORT ? process.env.PORT : 8000;

mongoose
	.connect(process.env.DATABASE_HOST, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})
	.then(() => {
		console.log("SUCCESSFULLY CONNECTED TO THE DATABASE");
	});

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.listen(port, () => {
	console.log("Listening on port", port);
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/follow", followRoutes);
app.use("/api/post", postRoutes);
app.use("/api/user", userRoutes);
app.use("/api/comment", commentRoutes);
