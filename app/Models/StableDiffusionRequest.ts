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
        if (value === "") {
            this.negative_prompt = negative;
            return;
        }

        this.negative_prompt = `${negative}, ${value}`;
    }
    /**
     * Set the height and width for image
     * @param value The size type
     */
    private sizeGenerator = (value: number) => {
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

        const size = sizeTypes[value];
        if (!size) {
            this.width = 500;
            this.height = 500;
        } else {
            this.width = size.width;
            this.height = size.height;
        }
    }
}