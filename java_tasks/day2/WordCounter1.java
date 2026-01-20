public class WordCounter1 {
    public static void main(String[] args) {
        String sentence = "ITI develops people and ITI house of developers and ITI for people";
        String word = "ITI";
        int count = 0;
        int index = 0;

        while ((index = sentence.indexOf(word, index)) != -1) {
            count++;
            index += word.length(); 
        }

        System.out.println("Occurrences of '" + word + "': " + count);
    }
}
