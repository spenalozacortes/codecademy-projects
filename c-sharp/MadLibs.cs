using System;

namespace MadLibs
{
  class Program
  {
    static void Main(string[] args)
    {
      Console.WriteLine("Mad Libs is starting!");
      string title = "MAD LIBS";
      Console.WriteLine(title);

      Console.WriteLine("Enter a name: ");
      string name = Console.ReadLine();

      Console.WriteLine("Enter 1st adjective: ");
      string adj1 = Console.ReadLine();
      Console.WriteLine("Enter 2nd adjective: ");
      string adj2 = Console.ReadLine();
      Console.WriteLine("Enter 3rd adjective: ");
      string adj3 = Console.ReadLine();

      Console.WriteLine("Enter a verb: ");
      string verb = Console.ReadLine();

      Console.WriteLine("Enter 1st noun: ");
      string noun1 = Console.ReadLine();
      Console.WriteLine("Enter 2nd noun: ");
      string noun2 = Console.ReadLine();

      Console.WriteLine("Enter an animal: ");
      string animal = Console.ReadLine();
      Console.WriteLine("Enter a food: ");
      string food = Console.ReadLine();
      Console.WriteLine("Enter a fruit: ");
      string fruit = Console.ReadLine();
      Console.WriteLine("Enter a superhero: ");
      string superhero = Console.ReadLine();
      Console.WriteLine("Enter a country: ");
      string country = Console.ReadLine();
      Console.WriteLine("Enter a dessert: ");
      string dessert = Console.ReadLine();
      Console.WriteLine("Enter a year: ");
      string year = Console.ReadLine();

      string story = $"This morning {name} woke up feeling {adj1}. 'It is going to be a {adj2} day!' Outside, a bunch of {animal}s were protesting to keep {food} in stores. They began to {verb} to the rhythm of the {noun1}, which made all the {fruit}s very {adj3}. Concerned, {name} texted {superhero}, who flew {name} to {country} and dropped {name} in a puddle of frozen {dessert}. {name} woke up in the year {year}, in a world where {noun2}s ruled the world.";

      Console.WriteLine(story);
    }
  }
}