public class WordCounter2 {
    public static void main(String[] args) {
        String sentence = "ITI develops people and ITI house of developers and ITI for people";
        String word = "ITI";
        int count = 0;

        String[] words = sentence.split(" ");
        for (int i =0 ; i<words.length; i++) {
            if (words[i].equals(word)) { 
			count++; 
			}
        }

        System.out.println("Occurrences of '" + word + "': " + count);
    }
}
