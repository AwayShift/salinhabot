API.sendChat("Online");

var expr = default;

switch (expr) {
  case "Oranges":
    API.sendChat("Oranges are $0.59 a pound.");
    break;
  case "Apples":
    API.sendChat("Apples are $0.32 a pound.");
    break;
  case "Bananas":
    API.sendChat("Bananas are $0.48 a pound.");
    break;
  case "Cherries":
    API.sendChat("Cherries are $3.00 a pound.");
    break;
  case "Mangoes":
  case "Papayas":
    API.sendChat("Mangoes and papayas are $2.79 a pound.");
    break;
  default:
    API.sendChat("Sorry, we are out of " + expr + ".");
}
