interface Point {
    x: number;
    y: number;
};

const locationnn = {
    x: 10,
    y: 20,
    z: 10
};

function printPoint(point: Point): void {
    console.log(point.x, point.y);
}

printPoint({
    x: 10,
    y: 20,
    z: 10
});

