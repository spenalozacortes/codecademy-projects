using System;

namespace MoneyMaker
{
  class MainClass
  {
    public static void Main(string[] args)
    {
      Console.WriteLine("Welcome to Money Maker!");

      Console.WriteLine("Enter an amount to convert to coins: ");
      string totalAsString = Console.ReadLine();  
      double total = Convert.ToDouble(totalAsString);

      int gold = 10;
      int silver = 5;

      double goldCoins = Math.Floor(total / gold);
      double remaining = total % gold;

      double silverCoins = Math.Floor(remaining / silver);
      remaining = remaining % silver;

      Console.WriteLine($"{total} cents is equal to...");
      Console.WriteLine($"Gold coins: {goldCoins}");
      Console.WriteLine($"Silver coins: {silverCoins}");
      Console.WriteLine($"Bronze coins: {remaining}");
    }
  }
}