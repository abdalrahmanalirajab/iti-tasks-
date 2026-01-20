import javax.swing.*;
import java.awt.*;

public class BannerApp extends JFrame {
    private String text = "   Java World   ";
    private int x = 400; // start off-screen to the right
    private final int speed = 5;

    public BannerApp() {
        setTitle("Banner Application :)");
        setSize(400, 100);
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setVisible(true);

        JPanel panel = new JPanel() {
            protected void paintComponent(Graphics g) {
                super.paintComponent(g);
                g.setFont(new Font("Arial", Font.BOLD, 24));
                g.drawString(text, x, 50);
            }
        };

        add(panel);

        Timer timer = new Timer(50, e -> {
            x -= speed;
            if (x + getFontMetrics(new Font("Arial", Font.BOLD, 24)).stringWidth(text) < 0) {
                x = getWidth(); // reset to right edge
            }
            panel.repaint();
        });

        timer.start();
    }

    public static void main(String[] args) {
        new BannerApp();
    }
}

