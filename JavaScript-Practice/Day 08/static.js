//a method belongs to the class itself, not an individual object.

class MathUtils {
    static add(a, b) {
        return a + b;
    }
}

MathUtils.add(10, 20);

const math = new MathUtils();

math.add(10, 20); // Error