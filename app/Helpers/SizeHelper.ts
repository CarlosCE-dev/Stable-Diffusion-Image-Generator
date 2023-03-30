import { SizeTypes } from "App/Models/Enums/SizeTypes";

/**
 * Get a height and width base on a {@link SizeTypes}
 */
export const sizeTypesList = {
    [SizeTypes.Square]: {
        width: 500,
        height: 500,
    },
    [SizeTypes.Portrait]: {
        width: 500,
        height: 1000,
    },
    [SizeTypes.Landscape]: {
        width: 1000,
        height: 500,
    }
}