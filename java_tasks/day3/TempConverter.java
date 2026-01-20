import java.util.function.Function;

public class TempConverter {
    public static void main(String[] args) {
        if (args.length == 0) {
            System.out.println("Please provide a temperature in Celsius.");
            return;
        }

        double celsius = Double.parseDouble(args[0]);

        Function<Double, Double> cToF = c -> c * 9 / 5 + 32;

        System.out.println("Celsius: " + celsius);
        System.out.println("Fahrenheit: " + cToF.apply(celsius));
    }
}
