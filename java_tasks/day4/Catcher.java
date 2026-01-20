public class Catcher {
    public static void main(String[] args) {
        if (args.length < 3) {
            System.out.println("Please enter 3 numbers: id , age , degree");
            return;
        }

        ThrowingMethods thrower = new ThrowingMethods();

        try {
            int id = thrower.getId(args[0]);
            System.out.println("Your ID is valid: " + id);
        } catch (MyCustomException e) {
            System.out.println("Caught: " + e.getMessage());
        } finally {
            System.out.println("Finished ID check\n");
        }

        try {
            int age = thrower.getAge(args[1]);
            System.out.println("Your age is valid: " + age);
        } catch (MyCustomException e) {
            System.out.println("Caught: " + e.getMessage());
        } finally {
            System.out.println("Finished Age check\n");
        }

        try {
            int degree = thrower.getDegree(args[2]);
            System.out.println("Your degree is valid: " + degree);
        } catch (MyCustomException e) {
            System.out.println("Caught: " + e.getMessage());
        } finally {
            System.out.println("Finished Degree check\n");
        }
    }
}


