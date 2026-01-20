import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.SwingConstants;
import java.awt.BorderLayout;

class MarqueeThread extends JFrame implements Runnable{
    Thread th; 
	JLabel marqueeLabel=new JLabel("java");
    public MarqueeThread(){
        marqueeLabel.setVerticalAlignment(SwingConstants.CENTER);
        this.add(marqueeLabel, BorderLayout.CENTER);
        this.setTitle("Marquee App");
        th = new Thread(this);
        th.start();
    }
    public static void main(String[] args){
        MarqueeThread marqueeWindow = new MarqueeThread();
        marqueeWindow.setVisible(true);
        marqueeWindow.setBounds(50,50,400,300);
    }
    public void run(){
        while(true){
            int width = this.getWidth(), newPosition = marqueeLabel.getX() + 10;
            marqueeLabel.setLocation((newPosition<width?newPosition:-100), marqueeLabel.getY());
            try{Thread.sleep(100);}
            catch(InterruptedException e){
                e.printStackTrace();
            }
        }
    }
}