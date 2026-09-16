function getLength<T extends { length: number }>(value: T): number {
    return value.length;
}

getLength("Hello");
getLength([1, 2, 3]);
getLength({ length: 10 });
getLength(123)

