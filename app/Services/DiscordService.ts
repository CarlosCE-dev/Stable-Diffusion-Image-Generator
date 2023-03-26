import { Client, Events, GatewayIntentBits, REST, Routes } from 'discord.js';
import { DiscordCommandTypes } from '../Models/Enums/DiscordCommandTypes';
import { SlashCommandBuilder } from '@discordjs/builders';
import Env from '@ioc:Adonis/Core/Env';
import Logger from '@ioc:Adonis/Core/Logger';

/**
 * Custom service to retain all the discord bot functionality
 */
class DiscordService {

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
            console.log(interaction);
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
        const commands = [
            new SlashCommandBuilder().setName(DiscordCommandTypes.generateImage).setDescription('Generate a AI image based on tags'),
        ].map(command => command.toJSON());

        return commands;
    }
}
/**
 * This makes our service a singleton
 */
export default new DiscordService();