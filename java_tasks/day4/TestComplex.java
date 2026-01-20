public class TestComplex {
    public static void main(String[] args) {
        Complex<Integer> c1 = new Complex<>(3, 2);
        Complex<Double> c2 = new Complex<>(4.5, 1.5);

        Complex<Double> sum = ComplexOperations.add(c1, c2);
        Complex<Double> diff = ComplexOperations.subtract(c1, c2);

        System.out.println("Sum: " + sum);
        System.out.println("Difference: " + diff);
    }
}
