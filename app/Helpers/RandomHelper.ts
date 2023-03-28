import { shuffleArray } from "./ArrayHelper";

/**
 * Generates a random number between two numbers
 * @param min Minimum value
 * @param max Maximum value
 * @returns A random number
 */
export const randomIntFromInterval = (min:number, max:number) =>  { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}
/**
 * Get random element fromm array
 * @param values The collection of elements
 * @returns A random element
 */
export const getRandomElementFromArray = (values:any[]) => {
    var randomIndex = Math.floor(Math.random() * values.length); 
    return values[randomIndex];
}
/**
 * Get random boolean value
 * @param probabilityOfTrue The probability of the boolean value to be TRUE
 * @returns A boolean value
 */
export const getRandomBoolean = (probabilityOfTrue:number = 0.5) => {
    return Math.random() < probabilityOfTrue;
}
/**
 * Random select how many parentheses will a group of tags have
 * @returns A number of parentheses to show
 */
export const generateRandomParenthesesArray = () => {
    const items = [
        { id: 1, chance: 70 },
        { id: 2, chance: 15 },
        { id: 3, chance: 10 },
        { id: 4, chance: 5 },
    ];
    const expanded = items.flatMap(i => Array(i.chance).fill(i));

    // Shuffle array
    shuffleArray(expanded);

    // Select a random item
    const winner = expanded[Math.floor(Math.random() * expanded.length)];
    return items.find(r => r.id === winner.id)?.id ?? 1;
}