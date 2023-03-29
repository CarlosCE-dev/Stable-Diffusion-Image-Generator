/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/
import Route from '@ioc:Adonis/Core/Route';
import TestsController from 'App/Controllers/Http/TestsController';
import { getRandomPropsForDiscord } from 'App/Helpers/DiscordHelper';
import { getImageRequester } from 'App/Helpers/ImageGenerator';

/**
 * Basic test route
 */
Route.get('/test', async (ctx) => {
	return new TestsController().index(ctx);
})
/**
 * Basic edge view for testing
 */
Route.get('/', async ({ view }) => {
	const data = getRandomPropsForDiscord();
	const { success, data:item } = await getImageRequester(data);
	if (success && item) {
		return view.render('home', item);
	} else {
		return view.render('error');
	}
});