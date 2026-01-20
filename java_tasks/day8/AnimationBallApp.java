import javax.swing.*;
import java.awt.*;

public class AnimationBallApp extends JFrame implements Runnable {
    Thread th;
    int x = 50, y = 50;  // Ball position
    int dx = 3, dy = 2;  // Ball velocity (speed and direction)
    int ballSize = 30;   // Ball diameter
    Image ballImage;     // Ball image
    
    public AnimationBallApp() {
        setTitle("Moving Ball Application");
        setBounds(50, 50, 600, 400);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        
        
        ImageIcon icon = new ImageIcon("ball.png"); 
        ballImage = icon.getImage();
        
        setVisible(true);
        th = new Thread(this);
        th.start();
    }
    
    public static void main(String[] args) {
        new AnimationBallApp();
    }
    
    @Override
    public void paint(Graphics g) {
        super.paint(g);
        // Draw ball image
            g.drawImage(ballImage, x, y, ballSize, ballSize, this);
       
    }
    
    @Override
    public void run() {
        while (true) {
            // Update ball position
            x += dx;
            y += dy;
            
            if (x <= 0 || x >= getWidth() - ballSize) {
                dx = -dx;  // Reverse horizontal direction
            }
            if (y <= 0 || y >= getHeight() - ballSize) {
                dy = -dy;  // Reverse vertical direction
            }
            
           
            repaint();
            
            try {
                Thread.sleep(20);
            } catch (InterruptedException e) {
                break;
            }
        }
    }
}