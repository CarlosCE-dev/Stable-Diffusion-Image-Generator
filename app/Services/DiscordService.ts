import { AttachmentBuilder, Client, Events, GatewayIntentBits, REST, Routes } from 'discord.js';
import Env from '@ioc:Adonis/Core/Env';
import Logger from '@ioc:Adonis/Core/Logger';
import { getImageRequester } from 'App/Helpers/ImageGenerator';
import { generateFollowUpMessage } from 'App/Helpers/TextGenerator';
import { generateCommands, getOptionsFromDiscordProps, getRandomPropsForDiscord } from 'App/Helpers/DiscordHelper';

/**
 * Custom service to retain all the discord bot functionality
 */
class DiscordService {
    /**
     * Start the discord bot
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
            await interaction.reply({ content: "Generating image", ephemeral: true});
            
            const isNormalCommand = interaction.commandName === "image";
            const data = isNormalCommand
                ? getOptionsFromDiscordProps(interaction) 
                : getRandomPropsForDiscord();
            const { success, data:stableDiffusionObject } = await getImageRequester(data);
            if (success && stableDiffusionObject) {
                const image = new AttachmentBuilder(`${Env.get("DRIVE_FILE_LOCATION")}\\${stableDiffusionObject.fileName}`);
                await interaction.followUp({ content: generateFollowUpMessage(data, interaction.user.username, stableDiffusionObject.newSeed, isNormalCommand), files: [image]});
            } else {
                await interaction.followUp({ content: "An error occurred while trying to generate the image"});
            }
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
    
        try {
            await rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: generateCommands() });
            Logger.info("The discord command were added to the bot");
        } catch (error) {
            Logger.error({ error }, "An error occurred when trying to add the commands to the discord bot");
        }
    }
    
}
/**
 * This makes our service a singleton
 */
export default new DiscordService();