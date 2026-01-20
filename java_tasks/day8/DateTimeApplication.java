import javax.swing.*;
import java.awt.*;
import java.text.SimpleDateFormat;
import java.util.Date;

public class DateTimeApplication {

    public static void main(String[] args) {
        JFrame frame = new JFrame("Time & Date Application");
        JLabel label = new JLabel();
        label.setFont(new Font("Arial", Font.BOLD, 20));
        label.setHorizontalAlignment(SwingConstants.CENTER);

        frame.add(label);
        frame.setSize(400, 150);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);

        // Timer to update time every second
        Timer timer = new Timer(1000, e -> {
            String currentTime = new SimpleDateFormat("EEE MMM dd HH:mm:ss z yyyy").format(new Date());
            label.setText(currentTime);
        });
        timer.start();
    }
}


