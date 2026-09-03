class ShapeFactory {
    static create(type, options) {

        switch (type) {
            case "circle":
                return new Circle(
                    options.color,
                    options.radius
                );

            case "rectangle":
                return new Rectangle(
                    options.color,
                    options.width,
                    options.height
                );

            default:
                throw new Error(`Unknown shape: ${type}`);
        }
    }
}

const shape = ShapeFactory.create("circle", {
    color: "red",
    radius: 10
});
