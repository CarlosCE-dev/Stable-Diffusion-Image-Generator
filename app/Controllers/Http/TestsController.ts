import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { getRandomPropsForDiscord } from 'App/Helpers/DiscordHelper';

/**
 * Basic test controller
 */
export default class TestsController {
    public async index({ response }: HttpContextContract) {
        const data = getRandomPropsForDiscord();
        return response.ok(data);
    }
}
