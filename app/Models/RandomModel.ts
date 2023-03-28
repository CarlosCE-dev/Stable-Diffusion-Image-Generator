import { randomEyesGenerator, randomHairGenerator, randomHatGenerator } from "App/Helpers/RandomGenerator";

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
     * Basic class constructor
     */
    constructor() {
        this.hair = randomHairGenerator();
        this.eyes = randomEyesGenerator();
        this.hat = randomHatGenerator();
    }
    /**
     * Get values of random traits generated
     * @returns A string of random props
     */
    getValues() {
        return `${this.hat} ${this.hair} ${this.eyes}`;
    }
}

