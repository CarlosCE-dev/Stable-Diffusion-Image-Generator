import { faker } from "@faker-js/faker";
import { AdjectivesSize, BodyAccessoriesTypes, BodyPosesTypes, BodyViewTypes, EyeTypes, FaceAccessoryTypes, FaceExpressionTypes, HairTypes, HeadTypesAccessories, PlaceTypes, TimeTypes } from "App/Seeds";
import { getRandomBoolean, getRandomElementFromArray } from "./RandomHelper";
import "../Extensors/StringExtensors";

/**
 * Generates random hair
 * @param hasSameColor Indicates if the eyes and hair are the same color
 * @param colorName The color for hair and eyes
 * @returns random string
 */
export const randomHairGenerator = (hasSameColor:boolean, colorName:string) => {
    return `${getRandomElementFromArray(HairTypes)} ${getColorProp(hasSameColor, colorName)} hair`.importance();
}
/**
 * Generates random eyes
 * @param hasSameColor Indicates if the eyes and hair are the same color
 * @param colorName The color for hair and eyes
 * @returns random string
 */
export const randomEyesGenerator = (hasSameColor:boolean, colorName:string) => {
    return `${getRandomElementFromArray(EyeTypes)} ${getColorProp(hasSameColor, colorName)} eyes`.importance();
}
/**
 * Generates random hat
 * @returns random string
 */
export const randomHatGenerator = () => {
    return `${getRandomElementFromArray(HeadTypesAccessories)}`.importance();
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
 * Generates random expression
 * @returns A random string
 */
export const randomFaceExpressionGenerator = () => {
    return `${getRandomElementFromArray(FaceExpressionTypes)} face`.importance();
}
/**
 * Generates body view
 * @returns A random string
 */
export const randomBodyViewGenerator = () => {
    return `${getRandomElementFromArray(BodyViewTypes)}`.importance();
}
/**
 * Generates random body pose
 * @returns A random string
 */
export const randomBodyPoseGenerator = () => {
    return `${getRandomElementFromArray(BodyPosesTypes)} pose`.importance();
}
/**
 * Generates random place
 * @returns A random string
 */
export const randomPlaceGenerator = () => {
    return `${getRandomElementFromArray(PlaceTypes)}`.importance();
}
/**
 * Generates random time
 * @returns A random string
 */
export const randomTimeGenerator = () => {
    return `${getRandomElementFromArray(TimeTypes)}`.importance();
}
/**
 * Generate random accessory
 * @returns A random string
 */
export const randomBodyAccessoryGenerator = () => {
    return `${getRandomElementFromArray(BodyAccessoriesTypes)}`.importance();
}
/**
 * Generate random face accessory
 * @returns A random string
 */
export const randomFaceAccessoryGenerator = () => {
    return `${getRandomElementFromArray(FaceAccessoryTypes)}`.importance();
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
