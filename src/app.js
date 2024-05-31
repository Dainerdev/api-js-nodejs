import express from "express";
import morgan from "morgan";
import cors from "cors";

// Routes
import experiencesRoutes from "./routes/experiences.route";

const app = express();

// Settings
app.set("port", 3312);

// Middelwares (funciones entre una peticion y una respuesta)
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/experiences", experiencesRoutes);

export default app;