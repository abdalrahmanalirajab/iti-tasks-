import java.math.BigDecimal;

public class ComplexTest {
    public static void main(String[] args) {
        Complex<BigDecimal,BigDecimal> num1 = new Complex(new BigDecimal("10"), new BigDecimal("3"));
        Complex<BigDecimal,BigDecimal> num2 = new Complex(new BigDecimal("7"), new BigDecimal("1"));
			
        System.out.print("sum: ");
        num1.add(num2).display();

        System.out.print("subtract: ");
        num1.subtract(num2).display();
		
    }
}

class Complex<T extends BigDecimal , R extends BigDecimal> {
    private BigDecimal real;
    private BigDecimal imagine;
   
	public Complex(T _real,R _imagine)
	{
		real =_real;
		imagine = _imagine;
	}

    public Complex add(Complex operand) {
        return new Complex(this.real.add(operand.real), this.imagine.add(operand.imagine));
    }

    public Complex subtract(Complex operand) {
        return new Complex(this.real.subtract(operand.real), this.imagine.subtract(operand.imagine));
    }

    public void display() {
        int signum = imagine.signum(); 

        if (signum < 0) {
            System.out.println(real + " - " + imagine.negate() + "i");
        } else if (signum > 0) {
            
            System.out.println(real + " + " + imagine + "i");
        } else {
            
            System.out.println(real);
        }
    }
	
	
}

