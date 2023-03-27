import { StableDiffusionRequest } from "App/Models/StableDiffusionRequest";

/**
 * Basic stable diffusion response
 */
export interface IBasicApiResponse {
    /**
     * The stable diffusion object
     */
    data?: StableDiffusionRequest;
    /**
     * Indicates if the image generating was completed
     */
    success: boolean;
}