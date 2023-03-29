import { faker } from "@faker-js/faker";
import { shuffleArray } from "App/Helpers/ArrayHelper";
import { randomBasicPropGenerator, randomBodyPoseGenerator, randomEyesGenerator, randomFaceExpressionGenerator, randomHairGenerator,randomNegativeTagsGenerator } from "App/Helpers/RandomGenerator";
import { generateRandomPeopleToShow, getRandomBoolean } from "App/Helpers/RandomHelper";
import { PropTypeSeed } from "./Enums/PropTypeSeed";


/**
 * Random model generator
 */
export class RandomModel {
    /**
     * Hair string tag
     */
    hair: string;
    /**
     * Eye string tag
     */
    eyes: string;
    /**
     * Head string tag
     */
    headAccessory: string;
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
     * Eye design tag
     */
    eyesDesign: string;
    /**
     * Body proportion tag
     */
    bodyProportions: string;
    /**
     * Body costume tag
     */
    bodyCostume: string;
    /**
     * Leg accessory tag
     */
    legAccessory: string;
    /**
     * Feet accessory tag
     */
    feetAccessory: string;
    /**
     * Basic class constructor
     */
    constructor() {
        const hasSameColor = getRandomBoolean(0.7);
        const sameColorName = faker.color.human();

        // Head generation
        this.hair = randomHairGenerator(hasSameColor, sameColorName);
        this.eyes = randomEyesGenerator(hasSameColor, sameColorName);
        this.headAccessory = getRandomBoolean(0.3) ? randomBasicPropGenerator(PropTypeSeed.HeadAccessory) : "";
        this.faceExpression = randomFaceExpressionGenerator();
        this.eyesDesign = getRandomBoolean(0.5) ? randomBasicPropGenerator(PropTypeSeed.EyeDesign) : "";

        // Body
        this.bodyPose = randomBodyPoseGenerator();
        this.bodyView = "";
        this.bodyProportions = getRandomBoolean(0.7) ? randomBasicPropGenerator(PropTypeSeed.BodyProportion) : "";

        // Other generation
        this.place = randomBasicPropGenerator(PropTypeSeed.Place);
        this.time = randomBasicPropGenerator(PropTypeSeed.Time);
        this.negativeTags = randomNegativeTagsGenerator();

        // Props
        this.bodyAccessory = getRandomBoolean(0.3) ? randomBasicPropGenerator(PropTypeSeed.BodyAccessory) : "";
        this.bodyCostume = getRandomBoolean(0.3) ? randomBasicPropGenerator(PropTypeSeed.BodyCostume) : "";
        this.faceAccessory = getRandomBoolean(0.3) ? randomBasicPropGenerator(PropTypeSeed.FaceAccessory) : "";
        this.legAccessory = getRandomBoolean(0.5) ? randomBasicPropGenerator(PropTypeSeed.LegAccessory) : "";
        this.feetAccessory = getRandomBoolean(0.5) ? randomBasicPropGenerator(PropTypeSeed.FeetAccessory) : "";
        
        // People amount
        const amountOfPeople = generateRandomPeopleToShow();
        this.peopleLimit = amountOfPeople === 1 ? "1 girl only".importance() : `${amountOfPeople}girls`.importance();
    }
    /**
     * Get values of random traits generated
     * @returns A string of random props
     */
    getValues() {
        const props = ([
            this.headAccessory, 
            this.hair, 
            this.eyes, 
            this.faceExpression, 
            this.bodyPose, 
            this.bodyView, 
            this.peopleLimit,
            this.place,
            this.time,
            this.bodyAccessory,
            this.faceAccessory,
            this.eyesDesign,
            this.bodyCostume,
            this.bodyProportions,
            this.legAccessory,
            this.feetAccessory
        ]).filter(v => v.trim() !== "");
        shuffleArray(props);
        return {
            tags: props.join(', '),
            negative: this.negativeTags
        }
    }
}

