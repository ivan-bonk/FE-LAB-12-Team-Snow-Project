export const PUT_PETS = "PUT_PETS";
export const FIND_PETS = "FIND_PETS";

export const putPetsById = (pets: object[]) => {
    return {
        type: "PUT_PETS",
        payload: {pets}
    }
}

export const findPetsById = (ids: string[]) => {
    return {
        type: "FIND_PETS",
        payload: ids
    }
}