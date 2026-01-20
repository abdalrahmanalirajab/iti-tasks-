public class ComplexOperations {
    public static Complex<Double> add(Complex<? extends Number> c1, Complex<? extends Number> c2) {
        double real = c1.getReal().doubleValue() + c2.getReal().doubleValue();
        double imag = c1.getImaginary().doubleValue() + c2.getImaginary().doubleValue();
        return new Complex<>(real, imag);
    }

    public static Complex<Double> subtract(Complex<? extends Number> c1, Complex<? extends Number> c2) {
        double real = c1.getReal().doubleValue() - c2.getReal().doubleValue();
        double imag = c1.getImaginary().doubleValue() - c2.getImaginary().doubleValue();
        return new Complex<>(real, imag);
    }
}
