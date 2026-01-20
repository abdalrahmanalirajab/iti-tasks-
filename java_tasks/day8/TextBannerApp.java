import javax.swing.*;
import java.awt.*;

public class TextBannerApp extends JFrame implements Runnable {
    Thread th;
    JLabel bannerLabel = new JLabel();
    String text = "   java  ";
    int x = 0; // start from left
    int frameWidth;

    public TextBannerApp() {
        setTitle("Text Banner Application");
        setBounds(50, 50, 400, 300);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);

        bannerLabel.setFont(new Font("Arial", Font.BOLD, 20));
        bannerLabel.setHorizontalAlignment(JLabel.LEFT); // align left so we can move it
        add(bannerLabel, BorderLayout.CENTER);

        setVisible(true);

        frameWidth = getWidth();
        th = new Thread(this);
        th.start();
    }

    public static void main(String[] args) {
        new TextBannerApp();
    }

    @Override
    public void run() {
        while (true) {
            x += 5; // move right

            // calculate text width
            int textWidth = bannerLabel.getFontMetrics(bannerLabel.getFont()).stringWidth(text);

            // if text fully leaves right side, reset to left
            if (x > frameWidth) {
                x = -textWidth;
            }

            final int pos = x;
            SwingUtilities.invokeLater(() -> {
                // pad spaces to simulate movement
                String spaces = " ".repeat(Math.max(0, pos / 10));
                bannerLabel.setText(spaces + text);
            });

            try {
                Thread.sleep(50); // speed of movement
            } catch (InterruptedException e) {
                break;
            }
        }
    }
}


