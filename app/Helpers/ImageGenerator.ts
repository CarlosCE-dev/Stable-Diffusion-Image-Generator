import axios, { HttpStatusCode } from 'axios';
import Logger from '@ioc:Adonis/Core/Logger';
import { IStableDiffusionInfoResponse, IStableDiffusionResponse } from 'App/Interfaces/IStableDiffusionResponse';
import Drive from '@ioc:Adonis/Core/Drive'
import { IPropModel } from 'App/Interfaces/IPropModel';
import { StableDiffusionRequest } from 'App/Models/StableDiffusionRequest';
import { IBasicApiResponse } from 'App/Interfaces/IBasicApiResponse';
import Env from '@ioc:Adonis/Core/Env';

/**
 * Generate a HTTP petition to stable diffusion
 * @param data 
 * @returns 
 */
export const getImageRequester = async (data:IPropModel): Promise<IBasicApiResponse> => {
    
    const payload = new StableDiffusionRequest(data);
    try {
        const response = await axios.post<IStableDiffusionResponse>(`${Env.get('STABLE_DIFFUSION_URL')}/sdapi/v1/txt2img`, payload, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.status !== HttpStatusCode.Ok) {
            throw Error(response.statusText);
        }

        const { images, info } = response.data;
        const [ firstImage ] = images;

        const infoTags = JSON.parse(info) as IStableDiffusionInfoResponse;

        const fileName = `${new Date().valueOf()}-${infoTags.seed}.png`;
        await Drive.put(fileName, Buffer.from(firstImage, 'base64'));
        payload.setDataFromResponse(fileName, infoTags.seed);

        return { success: true, data: payload };

    } catch (error) {
        Logger.error({ error }, "An error occurred when trying to generate the AI image");
        return { success: false };
    }
}
