import java.util.ArrayList;

class Playlist {
  
  public static void main(String[] args) {
    ArrayList<String> desertIslandPlaylist = new ArrayList<String>();

    desertIslandPlaylist.add("Cuarto del alba - Hypno5e");
    desertIslandPlaylist.add("Conceiving You - Riverside");
    desertIslandPlaylist.add("Closer - Nine Inch Nails");
    desertIslandPlaylist.add("Malamente - Rosalia");
    desertIslandPlaylist.add("Healing Now - Pain of Salvation");
    desertIslandPlaylist.add("Comfortably Numb - Pink Floyd");

    desertIslandPlaylist.remove(1);
    System.out.println(desertIslandPlaylist.size());

    // Swap songs
    int indexA = desertIslandPlaylist.indexOf("Healing Now - Pain of Salvation");
    int indexB = desertIslandPlaylist.indexOf("Comfortably Numb - Pink Floyd");
    String songA = desertIslandPlaylist.get(indexA);
    String songB = desertIslandPlaylist.get(indexB);

    desertIslandPlaylist.set(indexA, songB);
    desertIslandPlaylist.set(indexB, songA);

    System.out.println(desertIslandPlaylist);
  }
}