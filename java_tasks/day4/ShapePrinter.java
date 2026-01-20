public class ShapePrinter {
    public static <T extends Shape> void printShapes(T[] shapes) {
        for (T shape : shapes) {
            shape.draw();
        }
    }
}
