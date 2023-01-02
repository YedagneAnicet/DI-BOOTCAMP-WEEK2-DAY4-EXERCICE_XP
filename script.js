/*Exercise 1 : Information
Instructions
Part I : function with no parameters

Create a function called infoAboutMe() that takes no parameter.
The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
Call the function.


Part II : function with three parameters

Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
Call the function twice with the following arguments:
infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow") */

// Part I

function infoAboutMe() {
  console.log(
    "I am Yedagne Mel Ange Anicet, i was born in 2000 and i like it a game and manga movies"
  );
}

infoAboutMe();

// Part II

function infoAboutPerson(personName, personAge, personFavoriteColor) {
  console.log(personName + " " + personAge + " " + personFavoriteColor);
}

infoAboutPerson("Yedagne", 28, "green");
infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");

console.log("\n");

/*Exercise 2 : Tips
Instructions
John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.

Create a function named calculateTip() that takes no parameter.

Inside the function, use prompt to ask John for the amount of the bill.

Here are the rules
If the bill is less than $50, tip 20%.
If the bill is between $50 and $200, tip 15%.
If the bill is more than $200, tip 10%.

Console.log the tip amount and the final bill (bill + tip).

Call the calculateTip() function.
 */

function calculateTip() {
  let facture = 0;
  do {
    facture = prompt("Please enter the amount of bill");
  } while (isNaN(facture));
  let bill = 0;
  if (facture < 50) {
    bill = bill + (facture * 20) / 100;
  } else if (facture >= 50 && facture <= 200) {
    bill = bill + (facture * 15) / 100;
  } else {
    bill = bill + (facture * 10) / 100;
  }
  let somme = parseInt(bill) + parseInt(facture);
  console.log(`the tip amount is ${bill} and the final bill is ${somme}`);
}

calculateTip();

console.log("\n");

/* Exercise 3 : Find The Numbers Divisible By 23
Instructions
Create a function call isDivisible() that takes no parameter.

In the function, loop through numbers 0 to 500.

Console.log all the numbers divisible by 23.

At the end, console.log the sum of all numbers that are divisible by 23.
Bonus: Add a parameter divisor to the function.
*/

function isDivisible(divise) {
  let number;
  do {
    number = prompt("Please enter number");
  } while (isNaN(number));
  let sum = 0;
  let divisor = [];
  for (let i = 0; i < 501; i++) {
    if (i % parseInt(number) == 0) {
      sum = sum + i;
      divisor.push(i);
    }
  }
  console.log(`all numbers that are divisible by ${number} is ${divisor}`);
  console.log(
    `the sum of all numbers that are divisible by ${number} is ${sum}`
  );
}
isDivisible();

console.log("\n");
/* 
Exercise 4 : Shopping List
Instructions
Add the stock and prices objects to your js file.

Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.

Create a function called myBill() that takes no parameters.

The function should return the total price of your shoppingList. In order to do this you must follow these rules:
The item must be in stock. (Hint : check out if .. in)
If the item is in stock find out the price in the prices object.

Call the myBill() function.

Bonus: If the item is in stock, decrease the item’s stock by 1 */

const stock = {
  banana: 6,
  apple: 0,
  pear: 12,
  orange: 32,
  blueberry: 1,
};

const prices = {
  banana: 4,
  apple: 2,
  pear: 1,
  orange: 1.5,
  blueberry: 10,
};

let shoppingList = ["banana", "orange", "apple"];

function myBill() {
  let totalPanier = 0;
  for (let item of shoppingList) {
    let itemInStock = stock[item];
    if (itemInStock > 0) {
      let priceItem = prices[item];
      stock[item] = stock[item] - 1;
      totalPanier = totalPanier + priceItem;
    }
  }
  console.log(`total price of your shopping List is ${totalPanier}`);
}
myBill();

console.log("\n");

/*Exercise 5 : What’s In My Wallet ?
Instructions
Note: Read the illustration (point 4), while reading the instructions

Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
an item price
and an array representing the amount of change in your pocket.

In the function, determine whether or not you can afford the item.
If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false

Change will always be represented in the following order: quarters, dimes, nickels, pennies.

4. To illustrate:

After you created the function, invoke it like this:
The value 4.25 represents the item’s price
The array [25, 20, 5, 0] represents 25 quarters, 20 dimes, 5 nickels and 0 pennies.
The function should return true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50 which is bigger than 4.25 (the total amount due)*/

function changeEnough(itemPrice, amountOfChange) {
  let sumAmount = 0;
  let tabChangeAmount = [0.25, 0.1, 0.05, 0.01];
  for (var i = 0; i < amountOfChange.length; i++) {
    for (var j = 0; j < tabChangeAmount.length; j++) {
      if (i == j) {
        sumAmount += i * j;
      }
    }
  }
  if (itemPrice <= sumAmount) {
    return true;
  } else {
    return false;
  }
}

console.log(changeEnough(4.25, [25, 20, 5, 0]));
console.log(changeEnough(14.11, [2, 100, 0, 0]));
console.log(changeEnough(0.75, [0, 0, 20, 5]));

console.log("\n");

/*  Exercise 6 : Vacations Costs
Instructions
Let’s create functions that calculate your vacation’s costs:

Define a function called hotelCost().
It should ask the user for the number of nights they would like to stay in the hotel.
If the user doesn’t answer or if the answer is not a number, ask again.
The hotel costs $140 per night. The function should return the total price of the hotel.

Define a function called planeRideCost().
It should ask the user for their destination.
If the user doesn’t answer or if the answer is not a string, ask again.
The function should return a different price depending on the location.
“London”: 183$
“Paris” : 220$
All other destination : 300$

Define a function called rentalCarCost().
It should ask the user for the number of days they would like to rent the car.
If the user doesn’t answer or if the answer is not a number, ask again.
Calculate the cost to rent the car. The car costs $40 everyday.
If the user rents a car for more than 10 days, they get a 5% discount.
The function should return the total price of the car rental.

Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().

Call the function totalVacationCost()

Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.
 */

function hotelCost(numberOfNights) {
  const costsPerNight = 140;
  return numberOfNights * costsPerNight;
}

function planeRideCost(userDestination) {
  let listDestination = {
    London: 183,
    Paris: 220,
  };
  switch (userDestination) {
    case "London":
      return listDestination[userDestination];
      break;
    case "Paris":
      return listDestination[userDestination];
      break;
    default:
      return 300;
  }
}

function rentalCarCost(dayRentCar) {
  let costsCarPerDay = 40;
  let costsRentCar;
  if (dayRentCar > 10) {
    costsRentCar = dayRentCar * costsCarPerDay * 0.05;
  } else {
    costsRentCar = dayRentCar * costsCarPerDay;
  }
  return costsRentCar;
}

function totalVacationCost() {
  let numberOfNights;
  let userDestination;
  let dayRentCar;
  do {
    numberOfNights = prompt(
      "Please enter the number of nights they would like to stay in the hotel."
    );
  } while (isNaN(numberOfNights) && numberOfNights == "");
  do {
    userDestination = prompt("Please enter for their destination.");
  } while (!isNaN(userDestination) && userDestination == "");
  do {
    dayRentCar = prompt(
      "Please enter the number of days they would like to rent the car."
    );
  } while (isNaN(dayRentCar) && dayRentCar == "");

  console.log(`the hotel cost: $${hotelCost(numberOfNights)}`);
  console.log(`the plane tickets cost: $${planeRideCost(userDestination)}`);
  console.log(`The car cost: ${rentalCarCost(dayRentCar)}`);
}

totalVacationCost();
