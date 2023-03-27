/**
 * Stable diffusion response 
 */
export interface IStableDiffusionResponse {
    /**
     * Collection of images in byte64
     */
    images: string[];
    /**
     * The info tags of the image generated
     */
    info: string;
}
/**
 * Extra information return by stable diffusion api
 */
export interface IStableDiffusionInfoResponse {
    /**
     * The seed that was used on the image generation
     */
    seed: number;
}
