// OOPS in Java - Simple Example

// 1. Encapsulation: using private variables + getters/setters
class Person {
    private String name;  // private variable
    private int age;

    // Constructor
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    // Getters and Setters (Encapsulation)
    public String getName() { return name; }
    public int getAge() { return age; }
}

// 2. Inheritance: Student "is-a" Person
class Student extends Person {
    private String course;

    public Student(String name, int age, String course) {
        super(name, age); // calling parent constructor
        this.course = course;
    }

    public String getCourse() { return course; }

    // 3. Polymorphism: method overriding
    @Override
    public String toString() {
        return getName() + " (Age: " + getAge() + ") studies " + course;
    }
}

// 4. Abstraction: Interface (only method declaration, no body)
interface Exam {
    void takeExam();
}

// Student implementing Exam interface (provides actual body)
class CollegeStudent extends Student implements Exam {
    public CollegeStudent(String name, int age, String course) {
        super(name, age, course);
    }

    // Implementing abstract method
    public void takeExam() {
        System.out.println(getName() + " is taking the final exam!");
    }
}

// Main class
public class oops {
    public static void main(String[] args) {
        // Creating objects
        Student s1 = new Student("Alice", 20, "Computer Science");
        CollegeStudent s2 = new CollegeStudent("Bob", 21, "Mechanical Engineering");

        // Encapsulation (using getters)
        System.out.println("Student Name: " + s1.getName());

        // Polymorphism (toString method overriding)
        System.out.println(s1);
        System.out.println(s2);

        // Abstraction (interface method)
        s2.takeExam();
    }
}
