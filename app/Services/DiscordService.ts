import { AttachmentBuilder, Client, Events, GatewayIntentBits, REST, Routes } from 'discord.js';
import { DiscordCommandTypes } from '../Models/Enums/DiscordCommandTypes';
import { SlashCommandBuilder } from '@discordjs/builders';
import Env from '@ioc:Adonis/Core/Env';
import Logger from '@ioc:Adonis/Core/Logger';
import { getImageRequester } from 'App/Helpers/ImageGenerator';

/**
 * Custom service to retain all the discord bot functionality
 */
class DiscordService {
    private busy = false;
    /**
     * Start the minecraft bot
     */
    async start() {

        const token = Env.get('DISCORD_BOT_TOKEN');

        // Create a new client instance
        const client = new Client({ intents: [GatewayIntentBits.Guilds] });

        // When the client is ready, run this code (only once)
        client.once(Events.ClientReady, () => {
            Logger.info("The discord bot is ready");
        });

        client.on(Events.InteractionCreate, async (interaction) => {
            if (!interaction.isChatInputCommand()) return;
            const tags = interaction.options.get('tags')?.value ?? "";
            const size = interaction.options.get('size')?.value ?? 0;
            
            this.busy = true;
            await interaction.reply({ content: "Generating image", ephemeral: true});
            await getImageRequester(tags.toString(), Number(size));
            const image = new AttachmentBuilder('C:\\Users\\Carlos\\Documents\\Desarrollo\\AdonisJs\\discord-ai-gen\\tmp\\uploads\\newImage.jpg');
            await interaction.followUp({ content: `Image created with the following tags: ${tags}`, files: [image]});
            this.busy = false;
        });

        // Login to Discord with your client's token
        try {
            await client.login(token);
        } catch (error) {
            Logger.error({ error }, "An error occurred when trying to add the discord bot");
        }

        this.addCommands();
    }
    /**
     * Create new HTTP petition to register the commands available
     */
    private async addCommands() {
        const token = Env.get('DISCORD_BOT_TOKEN'),
            clientId = Env.get('DISCORD_CLIENT_ID'),
            guildId = Env.get('DISCORD_GUILD_ID');

        const rest = new REST({ version: '10' }).setToken(token);
        const commands = this.generateCommands();
    
        try {
            await rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands });
            Logger.info("The discord command were added to the bot");
        } catch (error) {
            Logger.error({ error }, "An error occurred when trying to add the commands to the discord bot");
        }
    }
    /**
     * Generate list of commands
     * @returns Returns a list of commands available for the discord bot
     */
    private generateCommands() { 
        return [
            {
                name: 'generate',
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
                                value: 0
                            },
                            { 
                                name: "Portrait: 1000 x 500 pixels",
                                value: 1
                            },
                            { 
                                name: "Landscape: 500 x 1000 pixels",
                                value: 2
                            },
                        ]
                    }
                ]
            }
        ]
    }
}
/**
 * This makes our service a singleton
 */
export default new DiscordService();