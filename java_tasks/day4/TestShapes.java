public class TestShapes {
    public static void main(String[] args) {
        Rectangle[] rectangles = { new Rectangle(), new Rectangle() };
        Circle[] circles = { new Circle(), new Circle() };

        System.out.println("Printing Rectangles:");
        ShapePrinter.printShapes(rectangles);

        System.out.println("\nPrinting Circles:");
        ShapePrinter.printShapes(circles);
    }
}
