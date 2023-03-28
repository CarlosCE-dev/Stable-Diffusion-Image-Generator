import { generateRandomParenthesesArray } from "App/Helpers/RandomHelper";

/**
 * Declare global custom string methods
 */
declare global { 
    interface String { 
        importance(): string;
    } 
}
/**
 * Add parentheses based on a random importance
 */
String.prototype.importance = function (): string {
    const parentheses = generateRandomParenthesesArray();
    return `${new Array(parentheses).fill("(").join("")}${this}${new Array(parentheses).fill(")").join("")}`
}