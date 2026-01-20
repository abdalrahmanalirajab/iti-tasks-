import java.util.*;

public class WordDictionary {
    // Map with alphabets as keys and collections (ArrayList) as values
    private Map<Character, ArrayList<String>> wordMap;
    
    public WordDictionary() {
        wordMap = new HashMap<>();
    }
    
    // Method to add words to the dictionary
    public void addWord(String word) {
        char firstLetter = Character.toLowerCase(word.charAt(0));
        
        if (!wordMap.containsKey(firstLetter)) {
            wordMap.put(firstLetter, new ArrayList<>());
        }
        
        wordMap.get(firstLetter).add(word);
        // Sort the words for this letter
        Collections.sort(wordMap.get(firstLetter));
    }
    
    // Method to print all letters and corresponding words
    public void printAll() {
        List<Character> sortedKeys = new ArrayList<>(wordMap.keySet());
        Collections.sort(sortedKeys);
        
        for (Character letter : sortedKeys) {
            System.out.println(letter + ": " + wordMap.get(letter));
        }
    }
    
    // Method to print words of a given letter
    public void printLetter(char letter) {
        letter = Character.toLowerCase(letter);
        
        if (wordMap.containsKey(letter)) {
            System.out.println(letter + ": " + wordMap.get(letter));
        } else {
            System.out.println("No words for letter '" + letter + "'");
        }
    }
    
    // Example usage
    public static void main(String[] args) {
        WordDictionary dict = new WordDictionary();
        
        dict.addWord("apple");
        dict.addWord("ant");
        dict.addWord("banana");
        dict.addWord("ball");
        dict.addWord("cat");
        
        System.out.println("All words:");
        dict.printAll();
        
        System.out.println("\nWords starting with 'a':");
        dict.printLetter('a');
    }
}