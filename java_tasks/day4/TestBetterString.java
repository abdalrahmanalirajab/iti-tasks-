
interface StringChecker {
    boolean isBetter(String s1, String s2);

}


class StringUtils {

    public static String betterString( String s1,String s2,StringChecker checker) {
        if (checker.isBetter(s1, s2)) {
            return s1;
        } else {
            return s2;
        }
    }
}

public class TestBetterString {
    public static void main(String[] args) {

        String string1 = "Hello";
        String string2 = "Welcome";

      
        String longer = StringUtils.betterString(
                        string1,
                        string2,
                        (s1, s2) -> s1.length() > s2.length()
                );

        System.out.println(longer);

      
        String first =
                StringUtils.betterString(
                        string1,
                        string2,
                        (s1, s2) -> true
                );

        System.out.println(first); 
    }
}

