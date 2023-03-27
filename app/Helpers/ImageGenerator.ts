import axios, { HttpStatusCode } from 'axios';
import Logger from '@ioc:Adonis/Core/Logger';
import { IStableDiffusionResponse } from 'App/Interfaces/IStableDiffusionResponse';
import Drive from '@ioc:Adonis/Core/Drive'


const sizeTypes = {
    [0]: {
        width: 500,
        height: 500,
    },
    [1]: {
        width: 500,
        height: 1000,
    },
    [2]: {
        width: 1000,
        height: 500,
    }
}

export const getImageRequester = async (tags:string, sizeType:number, negative:string) => {
    const { width, height } = sizeTypes[sizeType];
    const payload = {
        enable_hr: false,
        denoising_strength: 0,
        firstphase_width: 0,
        firstphase_height: 0,
        hr_scale: 2,
        hr_upscaler: "string",
        hr_second_pass_steps: 0,
        hr_resize_x: 0,
        hr_resize_y: 0,
        prompt: tags,
        styles: [],
        seed: -1,
        subseed: -1,
        subseed_strength: 0,
        seed_resize_from_h: -1,
        seed_resize_from_w: -1,
        sampler_name: "",
        batch_size: 1,
        n_iter: 1,
        steps: 30,
        cfg_scale: 7,
        width,
        height,
        restore_faces: false,
        tiling: false,
        do_not_save_samples: false,
        do_not_save_grid: false,
        negative_prompt: `(worst quality, low quality:1.4), monochrome, zombie, ${negative}`,
        eta: 0,
        s_churn: 0,
        s_tmax: 0,
        s_tmin: 0,
        s_noise: 1,
        override_settings: {},
        override_settings_restore_afterwards: true,
        script_args: [],
        sampler_index: "DPM++ 2M Karras",
        script_name: "",
        send_images: true,
        save_images: false,
        alwayson_scripts: {}
    }

    try {
        const response = await axios.post<IStableDiffusionResponse>('http://127.0.0.1:7860/sdapi/v1/txt2img', payload, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.status !== HttpStatusCode.Ok) {
            throw Error(response.statusText);
        }
        const { images } = response.data;
        const [ firstImage ] = images;

        await Drive.put('newImage.jpg', Buffer.from(firstImage, 'base64'));
        return "true";

    } catch (error) {
        Logger.error({ error }, "An error occurred when trying to generate the AI image");
        return "";
    }
}
