import { faker } from "@faker-js/faker";
import { shuffleArray } from "App/Helpers/ArrayHelper";
import { randomEyesGenerator, randomHairGenerator, randomHatGenerator, randomNegativeTagsGenerator } from "App/Helpers/RandomGenerator";
import { getRandomBoolean } from "App/Helpers/RandomHelper";

/**
 * Random model generator
 */
export class RandomModel {
    /**
     * Hair string prop
     */
    hair: string;
    /**
     * Eye string prop
     */
    eyes: string;
    /**
     * Hat string prop
     */
    hat: string;
    /**
     * Negative tags
     */
    negativeTags: string;
    /**
     * Basic class constructor
     */
    constructor() {
        const hasSameColor = getRandomBoolean(0.7);
        const sameColorName = faker.color.human();

        this.hair = randomHairGenerator(hasSameColor, sameColorName);
        this.eyes = randomEyesGenerator(hasSameColor, sameColorName);
        this.hat = randomHatGenerator();
        this.negativeTags = randomNegativeTagsGenerator();
    }
    /**
     * Get values of random traits generated
     * @returns A string of random props
     */
    getValues() {
        const props = ([this.hat, this.hair, this.eyes]);
        shuffleArray(props);
        return {
            tags: props.join(', '),
            negative: this.negativeTags
        }
    }
}

