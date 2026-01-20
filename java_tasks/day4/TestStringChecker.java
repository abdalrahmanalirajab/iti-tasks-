 
interface CharPredicate {
    boolean test(char c);
}

class StringChecker {
    public static boolean isAlphabet(String input, CharPredicate predicate) {
        for (char c : input.toCharArray()) {
            if (!predicate.test(c)) {
                return false;
            }
        }
        return true;
    }
}

public class TestStringChecker {
    public static void main(String[] args) {
        String test1 = "Abdulrahman";
        String test2 = "Ali123";
       

       
        System.out.println(test1  + StringChecker.isAlphabet(test1, Character::isLetter)); // true
        System.out.println(test2 + StringChecker.isAlphabet(test2, Character::isLetter)); // false
       
    }
}

