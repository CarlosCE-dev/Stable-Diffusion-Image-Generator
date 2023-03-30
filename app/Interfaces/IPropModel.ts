import { StableDiffusionRequest } from 'App/Models/StableDiffusionRequest';

/**
 * Basic props required for {@link StableDiffusionRequest} class
 */
export interface IPropModel {
    /**
     * The tags for the image
     */
    tags: string;
    /**
     * Size type provided by the user
     */
    size: number;
    /**
     * Negative tags provided by the user
     */
    negative: string;
    /**
     * Seed use for the image generation
     */
    seed: number;
}