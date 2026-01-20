import javax.swing.*;
import java.awt.*;
import java.util.Random;

public class BallAnimation extends JPanel {
    private int x = 100, y = 100;
    private final int radius = 30;
    private final Random rand = new Random();

    public BallAnimation() {
        Timer timer = new Timer(50, e -> {
            // Move randomly in x and y direction
            x += rand.nextInt(11) - 5; // -5 to +5
            y += rand.nextInt(11) - 5;

            // Keep ball inside the panel
            if (x < 0) x = 0;
            if (y < 0) y = 0;
            if (x > getWidth() - radius) x = getWidth() - radius;
            if (y > getHeight() - radius) y = getHeight() - radius;

            repaint();
        });
        timer.start();
    }

    protected void paintComponent(Graphics g) {
        super.paintComponent(g);
        g.setColor(Color.RED);
        g.fillOval(x, y, radius, radius);
    }

    public static void main(String[] args) {
        JFrame frame = new JFrame("Moving Ball Application");
        BallAnimation ballPanel = new BallAnimation();

        frame.add(ballPanel);
        frame.setSize(400, 300);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
    }
}
