import javax.swing.*;
import java.awt.*;
import java.util.Date;

public class DateTimeApp extends JFrame implements Runnable {

    Thread th;
    JLabel timeLabel = new JLabel();

    public DateTimeApp() {
        setTitle("Date & Time");
        setBounds(50, 50, 600, 400);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        timeLabel.setHorizontalAlignment(JLabel.CENTER);
        add(timeLabel, BorderLayout.CENTER);

        setVisible(true);

        th = new Thread(this);
        th.start();
    }

    public static void main(String[] args) {
        new DateTimeApp();
    }

    @Override
    public void run() {
        while (true) {
            SwingUtilities.invokeLater(() -> {
                timeLabel.setText(new Date().toString());
            });

            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                break;
            }
        }
    }
}

