import { IPropModel } from "App/Interfaces/IPropModel";
import { SizeTypes } from "App/Models/Enums/SizeTypes";
import { RandomModel } from "App/Models/RandomModel";
import { ChatInputCommandInteraction } from "discord.js";
import { randomIntFromInterval } from "./RandomHelper";

/**
 * Get random props for image generation
 * @returns Returns the prop from the interaction
 */
export const getRandomPropsForDiscord = (): IPropModel => {
    return { ...new RandomModel().getValues(), size: randomIntFromInterval(SizeTypes.Square, SizeTypes.Landscape), seed: -1 };
}
/**
 * Get the props from the discord interaction
 * @param interaction The discord interaction
 * @returns Returns the props from the interaction
 */
export const getOptionsFromDiscordProps = (interaction: ChatInputCommandInteraction): IPropModel => {
    const tags = interaction.options.get('tags')?.value ?? "";
    const size = interaction.options.get('size')?.value ?? SizeTypes.Landscape;
    const negative = interaction.options.get('negative')?.value ?? "";
    const seed = interaction.options.get('seed')?.value ?? -1;

    return { tags: tags.toString(), size: Number(size), negative: negative.toString(), seed: Number(seed) };
}
/**
 * Generate list of commands
 * @returns Returns a list of commands available for the discord bot
 */
export const generateCommands = () => {
    return [
        {
            name: 'image',
            description: "Generate images based on tags",
            options: [
                {
                    name: 'tags',
                    description: "Description of what you want to see",
                    type: 3,
                    required: true,
                },
                {
                    name: 'size',
                    description: "Size of your image",
                    type: 4,
                    required: true,
                    choices: [
                        {
                            name: "Square: 500 X 500 pixels",
                            value: SizeTypes.Square
                        },
                        {
                            name: "Portrait: 1000 x 500 pixels",
                            value: SizeTypes.Portrait
                        },
                        {
                            name: "Landscape: 500 x 1000 pixels",
                            value: SizeTypes.Landscape
                        },
                    ]
                },
                {
                    name: 'negative',
                    description: "Negative tags",
                    type: 3,
                    required: false,
                },
                {
                    name: 'seed',
                    description: "Seed of a previous image created",
                    type: 4,
                    required: false,
                }
            ]
        },
        {
            name: 'random',
            description: "Generate image based on random character traits"
        }
    ]
}