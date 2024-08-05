// countAllFromTown.js
export function countAllFromTown(regNumbers, townCode) {
    return regNumbers.split(',')
        .map(reg => reg.trim())
        .filter(reg => reg.startsWith(townCode))
        .length;
}
