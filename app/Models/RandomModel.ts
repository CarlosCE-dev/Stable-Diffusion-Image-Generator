import { faker } from "@faker-js/faker";
import { shuffleArray } from "App/Helpers/ArrayHelper";
import { randomBodyAccessoryGenerator, randomBodyPoseGenerator, randomBodyViewGenerator, randomEyesGenerator, randomFaceAccessoryGenerator, randomFaceExpressionGenerator, randomHairGenerator, randomHatGenerator, randomNegativeTagsGenerator, randomPlaceGenerator, randomTimeGenerator } from "App/Helpers/RandomGenerator";
import { generateRandomPeopleToShow, getRandomBoolean } from "App/Helpers/RandomHelper";

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
     * Face expression tag
     */
    faceExpression: string;
    /**
     * Body view tag
     */
    bodyView: string;
    /**
     * Body pose tag
     */
    bodyPose: string;
    /**
     * People limit for image
     */
    peopleLimit: string;
    /**
     * Place tag
     */
    place: string;
    /**
     * Time tag
     */
    time: string;
    /**
     * Accessory tag
     */
    bodyAccessory: string;
    /**
     * Face accessory tag
     */
    faceAccessory: string;
    /**
     * Basic class constructor
     */
    constructor() {
        const hasSameColor = getRandomBoolean(0.7);
        const sameColorName = faker.color.human();

        this.hair = randomHairGenerator(hasSameColor, sameColorName);
        this.eyes = randomEyesGenerator(hasSameColor, sameColorName);
        this.hat = getRandomBoolean(0.3) ? randomHatGenerator() : "";
        this.negativeTags = randomNegativeTagsGenerator();
        this.faceExpression = randomFaceExpressionGenerator();
        this.bodyPose = randomBodyPoseGenerator();
        this.bodyView = "";
        this.place = randomPlaceGenerator();
        this.time = randomTimeGenerator();
        this.bodyAccessory = getRandomBoolean(0.3) ? randomBodyAccessoryGenerator() : "";
        this.faceAccessory = getRandomBoolean(0.3) ? randomFaceAccessoryGenerator() : "";
        const amountOfPeople = generateRandomPeopleToShow();
        this.peopleLimit = amountOfPeople === 1 ? "1 girl only".importance() : `${amountOfPeople}girls`.importance();
    }
    /**
     * Get values of random traits generated
     * @returns A string of random props
     */
    getValues() {
        const props = ([
            this.hat, 
            this.hair, 
            this.eyes, 
            this.faceExpression, 
            this.bodyPose, 
            this.bodyView, 
            this.peopleLimit,
            this.place,
            this.time,
            this.bodyAccessory,
            this.faceAccessory
        ]).filter(v => v.trim() !== "");
        shuffleArray(props);
        return {
            tags: props.join(', '),
            negative: this.negativeTags
        }
    }
}

