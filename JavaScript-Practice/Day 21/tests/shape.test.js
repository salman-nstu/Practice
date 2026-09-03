import { Shape } from "../src/shapes.js";

describe("Shape", () => {
    it("creates a shape with the correct color", () => {
        const shape = new Shape("red");

        expect(shape.color).toBe("red");
    });

    it("returns shape information", () => {
        const shape = new Shape("blue");

        expect(shape.getInfo())
            .toBe("Shape with color blue");
    });
});