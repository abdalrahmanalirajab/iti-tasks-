class RepeatString {
    public static void main(String[] args) {
        if (args.length >= 2) {
            int count = Integer.parseInt(args[0]);
            String word = args[1];
            for (int i = 0; i < count; i++) {
                System.out.println(word);
            }
        } else {
            System.out.println("Please provide a number and a string.");
        }
    }
}
