import java.util.StringTokenizer;

public class TokenizerExample {
    public static void main(String[] args) {
        String sentence = "ITI develops people and ITI house of developers and ITI for people";
        String delimiter = "ITI";

        StringTokenizer tokenizer = new StringTokenizer(sentence, delimiter);
        int tokenCount = tokenizer.countTokens();

        System.out.println("Tokens using '" + delimiter + "' as delimiter:");
        while (tokenizer.hasMoreTokens()) {
            System.out.println(tokenizer.nextToken().trim());
        }

        System.out.println("Number of tokens: " + tokenCount);
    }
}
