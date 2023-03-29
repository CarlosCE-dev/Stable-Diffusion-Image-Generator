import { faker } from "@faker-js/faker";
import { PropTypeSeed } from "App/Models/Enums/PropTypeSeed";
import { BodyAccessoriesTypes, BodyCostumeTypes, BodyPosesTypes, BodyProportionsTypes, EyesDesignsTypes, EyeTypes, FaceAccessoryTypes, FaceExpressionTypes, FeetAccessoriesTypes, HairTypes, HeadAccessoriesTypes, LegsAccessoriesTypes, PlaceTypes, TimeTypes } from "App/Seeds";
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
 * Generates random body pose
 * @returns A random string
 */
export const randomBodyPoseGenerator = () => {
    return `${getRandomElementFromArray(BodyPosesTypes)} pose`.importance();
}
/**
 * Generate random face accessory
 * @returns A random string
 */
export const randomBasicPropGenerator = (type:PropTypeSeed) => {
    return `${getRandomElementFromArray(getArrayBasedOnType[type])}`.importance();
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
/**
 * Collection of seeds based on {@link PropTypeSeed}
 */
const getArrayBasedOnType = {
    [PropTypeSeed.Place]: PlaceTypes,
    [PropTypeSeed.Time]: TimeTypes,
    [PropTypeSeed.BodyCostume]: BodyCostumeTypes,
    [PropTypeSeed.BodyProportion]: BodyProportionsTypes,
    [PropTypeSeed.BodyAccessory]: BodyAccessoriesTypes,
    [PropTypeSeed.EyeDesign]: EyesDesignsTypes,
    [PropTypeSeed.FaceAccessory]: FaceAccessoryTypes,
    [PropTypeSeed.HeadAccessory]: HeadAccessoriesTypes,
    [PropTypeSeed.LegAccessory]: LegsAccessoriesTypes,
    [PropTypeSeed.FeetAccessory]: FeetAccessoriesTypes,
}