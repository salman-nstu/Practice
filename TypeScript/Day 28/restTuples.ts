function calculateAverage(
    name: string,
    ...scores: number[]
): [string, number] {
    const average =
        scores.reduce((sum, score) => sum + score, 0) / scores.length;

    return [name, average];
}
console.log(calculateAverage("Hello", 2, 4, 6));