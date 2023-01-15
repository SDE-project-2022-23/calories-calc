import { Router } from "express";
import caloriesRouter from "./calories.route";

/**
 * Routeur global de l'application. Utilise les routeurs des ressources.
 */
const globalRouter = Router();

globalRouter.use("/ingredients", caloriesRouter);

globalRouter.route("/test").get((req, res) => {
  res.status(200).json({ message: "Vous êtes connecté" });
});

export default globalRouter;
