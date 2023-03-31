import { SizeTypes } from "App/Models/Enums/SizeTypes";

/**
 * Get a height and width base on a {@link SizeTypes}
 */
export const sizeTypesList = {
    [SizeTypes.Square]: {
        width: 512,
        height: 512,
    },
    [SizeTypes.Portrait]: {
        width: 512,
        height: 1024,
    },
    [SizeTypes.Landscape]: {
        width: 1024,
        height: 512,
    }
}