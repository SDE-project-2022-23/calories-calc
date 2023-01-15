export class CaloriesService {
  public static caloriesSum(ingredients: any[]): number {
    var res = 0;
    for (let i = 0; i < ingredients.length; i++) {
      res += ingredients[i].nutrition.nutrients.find(
        (x: any) => x.name === "Calories"
      ).amount;
    }
    return res;
  }
}
