import { CaloriesService } from "@services/calories.service";
import axios from "axios";
import { Request, response, Response, Router } from "express";

const caloriesRouter = Router();

const getCaloriesSum = async (req: Request, res: Response) => {
  var ingredientsInfo: any = [];
  var urls = [];
  for (let i = 0; i < req.body.length; i++) {
    urls.push(
      `${process.env.RECIPES_API}/food/ingredients/${req.body[i].id}/information?apiKey=${process.env.RECIPES_API_KEY}&amount=${req.body[i].quantity}&unit=${req.body[i].unit}`
    );
  }

  const requests = urls.map((url) => axios.get(url));

  axios
    .all(requests)
    .then((responses) => {
      responses.forEach((response) => {
        ingredientsInfo.push(response.data);
      });
      res.status(200).json({
        sum: CaloriesService.caloriesSum(ingredientsInfo),
      });
    })
    .catch((error) => {
      res.status(404).json({
        error: error.message,
      });
    });
};

caloriesRouter.post("/", getCaloriesSum);

export default caloriesRouter;
