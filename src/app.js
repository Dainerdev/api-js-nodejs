import express from "express";
import morgan from "morgan";

// Routes
import experiencesRoutes from "./routes/experiences.route";

const app = express();

// Settings
app.set("port", 3312);

// Middelwares (funciones entre una peticion y una respuesta)
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/experiences", experiencesRoutes);

export default app;