import java.util.regex.Pattern;
import java.util.regex.Matcher;

public class IPSpliter{
    public static void main(String[] args) {
        
        if (args.length == 0) {
            System.out.println("Please provide an IP address as an argument.");
            return;
        }

        String ip = args[0]; 

        String regex = "^(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])"
                     + "(\\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}$";

        Pattern pattern = Pattern.compile(regex);
        Matcher matcher = pattern.matcher(ip);

        if (matcher.matches()) {
			system.out.println("this is valid ip ");
            String[] parts = ip.split("\\.");
            System.out.println("IP Address Parts:");
            for (int i =0 ; i<parts.length ; i++) {
                System.out.println(parts[i]);
            }
        } else {
            System.out.println(ip + " is NOT a valid IPv4 address.");
        }
    }
}


