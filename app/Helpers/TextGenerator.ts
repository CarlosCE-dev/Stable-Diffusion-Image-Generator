import { IPropModel } from "App/Interfaces/IPropModel";

/**
 * Generate the follow up message for discord bot
 * @param data The basic prop model data
 * @param username The user name
 * @param newSeed The new seed provided by stable stableDiffusionObject
 * @param isNormalCommand Indicates if the message was random generated
 * @returns A message for discord interaction
 */
export const generateFollowUpMessage = (data:IPropModel, username:string, newSeed:number, isNormalCommand:boolean) => {
    return `${getStartUpMessage(isNormalCommand)} ${username} with the following tags: ${data.tags}.${generateNegativeMessage(data.negative)} [Seed: ${newSeed}]`;
}
/**
 * Get start up message
 * @param state Flag that indicates if is random command
 * @returns A basic start up message
 */
const getStartUpMessage = (state:boolean) => {
    return state ? "Image created by" : "Random image requested by";
}
/**
 * Generate negative message if required
 * @param value The negative prompts
 * @returns Returns the negative tags
 */
const generateNegativeMessage = (value:string) => {
    return value === "" ? "" : ` Negative tags: ${value}`;
}