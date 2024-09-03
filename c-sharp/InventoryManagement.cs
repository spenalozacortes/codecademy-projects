using System;
using System.Collections.Generic;

public class InventoryManagement
{
  public static void Main(string[] args){
    List<string> inventoryList = new List<string>();
    inventoryList.Add("Printer");
    inventoryList.Add("Laptop");
    inventoryList.Add("Desk Chair");
    inventoryList.Add("Monitor");
    inventoryList.Add("Keyboard");

    Console.WriteLine(inventoryList.Count);
    bool hasDeskChair = inventoryList.Contains("Desk Chair");
    Console.WriteLine(hasDeskChair);
    bool removed = inventoryList.Remove("Printer");
    Console.WriteLine(removed);

    foreach (string item in inventoryList)
    {
      Console.WriteLine(item);
    }

    List<string> newItems = new List<string> {"Mouse", "Desk Lamp"};
    inventoryList.AddRange(newItems);
    inventoryList.RemoveRange(inventoryList.Count - 2, 2);
    List<string> topInventory = inventoryList.GetRange(0, 3);
    foreach (string item in topInventory)
    {
      Console.WriteLine(item);
    }
  }
}
