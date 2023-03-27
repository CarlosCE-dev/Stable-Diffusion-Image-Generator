import { IPropModel } from "App/Interfaces/IPropModel";

/**
 * Generate the follow up message for discord bot
 * @param data The basic prop model data
 * @param username The user name
 * @param newSeed The new seed provided by stable diffusion
 * @returns A message
 */
export const generateFollowUpMessage = (data:IPropModel, username:string, newSeed:number) => {
    return `Image created by ${username} with the following tags: ${data.tags}.${generateNegativeMessage(data.negative)} [Seed: ${newSeed}]`;
}
/**
 * Generate negative message if required
 * @param value The negative prompts
 * @returns Returns the negative tags
 */
const generateNegativeMessage = (value:string) => {
    if (value === "") return "";
    return ` Negative tags: ${value}`;
}