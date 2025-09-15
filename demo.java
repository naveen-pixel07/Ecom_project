class car{
    car(){
        System.out.println("in super");

    }
    int cylinders;
    public void start(){
        System.out.println("starting");
    }
}

class supcar extends car{
    private double sp;
    
    public void speed(double s){
        this.sp=s;
        System.out.println("Speed = "+sp);
    }
}

public class demo {
    public static void main(String[] args) {
        // System.out.println("Hello world");
        // int n=23;
        // double p=3.1432;
        // char c='N';
        // System.out.println(n + " " + p + " " + c);
        // show(n);

        supcar tata = new supcar();
        tata.speed(100.5);
    }
    public static void show(int x) {
        System.out.println("showing "+ x);
    }

}
