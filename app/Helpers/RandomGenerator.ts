import { faker } from "@faker-js/faker";
import { AdjectivesSize } from "App/Seeds/Adjectives";
import { EyeTypes } from "App/Seeds/Eyes";
import { HairTypes } from "App/Seeds/Hair";
import { HeadTypesAccessories } from "App/Seeds/Head";

/**
 * Generates random hair
 * @returns random string
 */
export const randomHairGenerator = () => {
    return `(${getRandomElementFromArray(HairTypes)} ${faker.color.human()} ${getRandomElementFromArray(AdjectivesSize)} hair)`;
}
/**
 * Generates random eyes
 * @returns random string
 */
export const randomEyesGenerator = () => {
    return `(${getRandomElementFromArray(EyeTypes)} ${faker.color.human()} ${getRandomElementFromArray(AdjectivesSize)} eyes)`;
}
/**
 * Generates random hat
 * @returns random string
 */
export const randomHatGenerator =() => {
    return `((${faker.color.human()} ${getRandomElementFromArray(HeadTypesAccessories)}))`;
}
/**
 * Generates a random number between two numbers
 * @param min Minimum value
 * @param max Maximum value
 * @returns A random number
 */
export const randomIntFromInterval = (min:number, max:number) =>  { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}
/**
 * Get random element fromm array
 * @param values The collection of elements
 * @returns A random element
 */
export const getRandomElementFromArray = (values:any[]) => {
    var randomIndex = Math.floor(Math.random() * values.length); 
    return values[randomIndex];
}
