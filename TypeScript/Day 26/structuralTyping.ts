interface Point {
    x: number;
    y: number;
};

const location = {
    x: 10,
    y: 20
};

function printPoint(point: Point): void {
    console.log(point.x, point.y);
}

printPoint(location);

