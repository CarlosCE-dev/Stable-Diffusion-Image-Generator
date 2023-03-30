import { sizeTypesList } from "App/Helpers/SizeHelper";
import { IPropModel } from "App/Interfaces/IPropModel"
import { StableBasicProps } from "./StableBasicProps";

/**
 * Stable diffusion data that can be configured
 */
export class StableDiffusionRequest extends StableBasicProps {
    /**
     * Basic constructor for class
     * @param data The prop required for the model
     */
    constructor(data: IPropModel) {
        super();
        this.seed = data.seed;
        this.sizeGenerator(data.size);
        this.negativeTags(data.negative);
        this.prompt = data.tags;
    }
    /**
     * Tags, traits of the character
     */
    prompt: string;
    /**
     * Negative tags
     */
    negative_prompt: string;
    /**
     * Seed of a image previously generated
     */
    seed: number;
    /**
     * The width of the image
     */
    width: number;
    /**
     * The height of the image
     */
    height: number;
    /**
     * New seed provided by stable diffusion
     */
    newSeed: number;
    /**
     * The name of the file
     */
    fileName: string;
    /**
     * Set the data return by stable diffusion
     * @param fileName The name of the file
     * @param seed The new seed of the image generated
     */
    setDataFromResponse = (fileName:string, seed:number) => {
        this.newSeed = seed;
        this.fileName = fileName;
    }
    /**
     * Adds the negative tags to the prompt
     * @param value The negative tags provided by the user
     */
    private negativeTags = (value: string) => {
        const negative = '(worst quality, low quality:1.4), monochrome, zombie';
        this.negative_prompt = value === "" ?  negative : `${negative}, ${value}`;
    }
    /**
     * Set the height and width for image
     * @param value The size type
     */
    private sizeGenerator = (value: number) => {
        const size = sizeTypesList[value];
        this.width = size?.width ?? 500;
        this.height = size?.height ?? 500;
    }
}