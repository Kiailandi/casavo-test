// I like pure functions, so no Math.random inside the function - I'll accept it from the outside
export const shouldItFail = (seedNumber) => {
    return seedNumber % 2 === 0;
}