public class ThrowingMethods {

    public int getId(String arg) throws MyCustomException {
        int id = Integer.parseInt(arg);
        if (id <= 0) {
            throw new MyCustomException("Id must be greater than 0");
        }
        return id;
    }

    public int getAge(String arg) throws MyCustomException {
        int age = Integer.parseInt(arg);
        if (age < 18) {
            throw new MyCustomException("Age must be at least 18");
        }
        return age; 
    }

    public int getDegree(String arg) throws MyCustomException {
        int degree = Integer.parseInt(arg);
        if (degree < 50) {
            throw new MyCustomException("You did not pass");
        }
        return degree;
    }
}





	
