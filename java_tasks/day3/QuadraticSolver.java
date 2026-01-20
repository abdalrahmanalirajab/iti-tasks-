import java.util.function.Function;

public class QuadraticSolver {
    public static void main(String[] args) {
        if (args.length < 3) {
            System.out.println("Please provide a, b, and c as arguments.");
            return;
        }

        double a = Double.parseDouble(args[0]);
        double b = Double.parseDouble(args[1]);
        double c = Double.parseDouble(args[2]);

        Function<double[], String> solveQuadratic = coeffs -> {
            double a1 = coeffs[0], b1 = coeffs[1], c1 = coeffs[2];
            double dis = b1 * b1 - 4 * a1 * c1;

            if (dis < 0) {
                return "No real roots.";
            }

            double root1 = (-b1 + Math.sqrt(dis)) / (2 * a1);
            double root2 = (-b1 - Math.sqrt(dis)) / (2 * a1);

            return "Roots: " + root1 + " and " + root2;
        };

        System.out.println(solveQuadratic.apply(new double[]{a, b, c}));
    }
}
