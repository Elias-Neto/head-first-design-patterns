import { DarkRoast } from "./beverage/dark-roast";
import { Espresso } from "./beverage/espresso";
import { HouseBlend } from "./beverage/house-blend";
import { Mocha } from "./condiments/mocha";
import { Soy } from "./condiments/soy";
import { Whip } from "./condiments/whip";

// ORDER 1
const beverage = new Espresso()
console.log(`${beverage.getDescription()} $${beverage.cost()}`)

// ORDER 2
let beverage2 = new DarkRoast()
beverage2 = new Mocha(beverage2)
beverage2 = new Mocha(beverage2)
beverage2 = new Whip(beverage2)
console.log(`${beverage2.getDescription()} $${beverage2.cost()}`)

// ORDER 3
let beverage3 = new HouseBlend()
beverage3 = new Soy(beverage3)
beverage3 = new Mocha(beverage3)
beverage3 = new Whip(beverage3)
console.log(`${beverage3.getDescription()} $${beverage3.cost()}`)