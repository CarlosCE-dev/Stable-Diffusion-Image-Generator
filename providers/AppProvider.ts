import Env from '@ioc:Adonis/Core/Env';

/**
 * App provider
 */
export default class AppProvider {
    /**
     * On ready method
     */
    public async ready() {
        if (Env.get("DISCORD_SERVICE_ENABLED")) {
            const discordService = (await import('App/Services/DiscordService')).default;
            discordService.start();
        }
    }
}
