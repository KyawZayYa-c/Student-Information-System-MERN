import "dotenv/config";
import express from "express";

////////////////////////////Routes////////////////
import healthRoutes from "./src/routes/heath.routes.js";
    
const app = express();
const PORT = process.env.PORT || 3100;
app.use(express.json());

// app.use(cors());

app.use("/api/health" , healthRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});