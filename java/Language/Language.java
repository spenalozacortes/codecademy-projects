public class Language {
    protected String name;
    protected int numSpeakers;
    protected String regionsSpoken;
    protected String wordOrder;
  
    public Language(String name, int numSpeakers, String regionsSpoken, String wordOrder) {
      this.name = name;
      this.numSpeakers = numSpeakers;
      this.regionsSpoken = regionsSpoken;
      this.wordOrder = wordOrder;
    }
  
    public void getInfo() {
      System.out.println(this.name + " is spoken by " + this.numSpeakers + " people mainly in "+ this.regionsSpoken + ".");
      System.out.println("The language follows the word order: " + this.wordOrder + ".");
    }
  
    public static void main(String[] args) {
      Language spanish = new Language("Spanish", 555000000, "Spain, Latin America, and Equatorial Guinea", "subject-verb-object");
      Mayan tzeltal = new Mayan("Tzeltal", 445856);
      SinoTibetan mandarinChinese = new SinoTibetan("Mandarin Chinese", 1118000000);
      SinoTibetan burmese = new SinoTibetan("Burmese", 43000000);
  
      spanish.getInfo();
      tzeltal.getInfo();
      mandarinChinese.getInfo();
      burmese.getInfo();
    }
}