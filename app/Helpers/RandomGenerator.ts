import { faker } from "@faker-js/faker";
import { AdjectivesSize, EyeTypes, HairTypes, HeadTypesAccessories } from "App/Seeds";
import { getRandomBoolean, getRandomElementFromArray } from "./RandomHelper";
import "../Extensors/StringExtensors";

/**
 * Generates random hair
 * @param hasSameColor Indicates if the eyes and hair are the same color
 * @param colorName The color for hair and eyes
 * @returns random string
 */
export const randomHairGenerator = (hasSameColor:boolean, colorName:string) => {
    return `${getRandomElementFromArray(HairTypes)} ${getColorProp(hasSameColor, colorName)} ${getRandomElementFromArray(AdjectivesSize)} hair`.importance();
}
/**
 * Generates random eyes
 * @param hasSameColor Indicates if the eyes and hair are the same color
 * @param colorName The color for hair and eyes
 * @returns random string
 */
export const randomEyesGenerator = (hasSameColor:boolean, colorName:string) => {
    return `${getRandomElementFromArray(EyeTypes)} ${getColorProp(hasSameColor, colorName)} ${getRandomElementFromArray(AdjectivesSize)} eyes`.importance();
}
/**
 * Generates random hat
 * @returns random string
 */
export const randomHatGenerator = () => {
    return `${faker.color.human()} ${getRandomElementFromArray(HeadTypesAccessories)}`.importance();
}
/**
 * Adds negative tags to  random model
 * @returns A negative tag
 */
export const randomNegativeTagsGenerator = () => {
    const hasNSFW = getRandomBoolean(0.1);
    return hasNSFW ? "nsfw" : "";
}
/**
 * Generate a random or predefined color for hair and eyes
 * @param hasSameColor Indicates if the eyes and hair are the same color
 * @param colorName The color for hair and eyes
 * @returns 
 */
const getColorProp = (hasSameColor:boolean, colorName:string) => {
    if (hasSameColor) return colorName;
    return faker.color.human();
}
