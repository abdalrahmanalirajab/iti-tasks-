import java.util.Random;

public class MinMaxTiming {
    public static void main(String[] args) {
        int[] numbers = new int[1000];
        int size = numbers.length;

       
        for (int i = 0; i < size; i++) {
            numbers[i] = i + 1;
        }

      
        long startTime = System.nanoTime();

        int min = numbers[0];
        int max = numbers[0];
        for (int i = 1; i < size; i++) {
            if (numbers[i] < min) min = numbers[i];
            if (numbers[i] > max) max = numbers[i];
        }

        long endTime = System.nanoTime();
        long duration = endTime - startTime;
		
        System.out.println("Min: " + min);
        System.out.println("Max: " + max);
        System.out.println("Search time (nanoseconds): " + duration);













        // Task 2: Binary search
        int l = 0, r = size - 1, ans = -1, target = 1;

        long startBinary = System.nanoTime();

        while (l <= r) {
            int mid = (r + l) / 2;
            if (numbers[mid] == target) {
                ans = mid;
                break;
            } else if (numbers[mid] > target) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }

        long endBinary = System.nanoTime();
        long durationBinary = endBinary - startBinary;

        if (ans != -1)
            System.out.println("The target exists at index: " + ans);
        else
            System.out.println("The target does not exist");

        System.out.println("Binary search time (nanoseconds): " + durationBinary);
    }
}
