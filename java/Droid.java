public class Droid {
    int batteryLevel;
    String name;
  
    public Droid(String droidName) {
      name = droidName;
      batteryLevel = 100;
    }
  
    public String toString() {
      return "Hello, I'm the droid: " + name;
    }
  
    public void performTask(String task) {
      System.out.println(name + " is performing task: " + task);
      batteryLevel -= 10;
    }
  
    public void energyReport() {
      System.out.println("Current battery level of " + name + ": " + batteryLevel);
    }
  
    public void energyTransfer(Droid otherDroid, int energyToTransfer) {
      System.out.println("Transfering " + energyToTransfer + " units of energy from " + name + " to " + otherDroid.name);
      otherDroid.batteryLevel += energyToTransfer;
      batteryLevel -= energyToTransfer;
    }
  
    public static void main(String[] args) {
      Droid codey = new Droid("Codey");
      Droid arturito = new Droid("Arturito");
  
      System.out.println(codey);
      codey.energyReport();
  
      codey.performTask("dancing");
      codey.performTask("levitating");
      codey.energyReport();
  
      System.out.println(arturito);
      arturito.energyReport();
  
      arturito.energyTransfer(codey, 10);
      codey.energyReport();
      arturito.energyReport();
    }
  }