import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import userRouter from "./routes/userRoute.js";
import taskRouter from "./routes/taskRoute.js";

dotenv.config();
const app = express();

const port = process.env.PORT || 4000;

//middleware
app.use(cors({
  origin: "*",
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB

connectDB()

// Routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/tasks", taskRouter);


app.get('/', (req, res) => {
    res.send("Server is running successfully, API is ready to use");
});

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});