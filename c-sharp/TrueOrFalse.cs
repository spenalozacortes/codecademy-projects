using System;

namespace TrueOrFalse
{
  class Program
  {
		static void Main(string[] args)
    {
      // Do not edit these lines
      Console.WriteLine("Welcome to 'True or False?'\nPress Enter to begin:");
      string entry = Console.ReadLine();
      Tools.SetUpInputStream(entry);

      // Type your code below
      string[] questions = {"Sharks are mammals", "Infants have more bones than adults", "Cheesecake comes from Italy", "The Chinese New Year is celebrated on the same day every year", "The letter J is the only letter in the alphabet not included in the periodic table"};

      bool[] answers = {false, true, false, false, true};

      bool[] responses = new bool[questions.Length];

      if (questions.Length != answers.Length)
      {
        Console.WriteLine("Warning! Lengths of questions and answers are different!");
      }

      int askingIndex = 0;
      foreach (string question in questions) 
      {
        string input;
        bool isBool;
        bool inputBool;

        Console.WriteLine(question);
        Console.WriteLine("True or false?");
        input = Console.ReadLine();
        isBool = Boolean.TryParse(input, out inputBool);

        while (!isBool)
        {
          Console.WriteLine("Please respond with 'true' or 'false'.");
          input = Console.ReadLine();
          isBool = Boolean.TryParse(input, out inputBool);
        }

        responses[askingIndex] = inputBool;
        askingIndex++;
      }

      int scoringIndex = 0;
      int score = 0;
      foreach (bool answer in answers) 
      {
        bool response = responses[scoringIndex];
        Console.WriteLine($"{scoringIndex+1}. Input: {response} | Answer: {answer}");
        if (response == answer) 
        {
          score++;
        }
        scoringIndex++;
      }

      Console.WriteLine($"You got {score} out of {questions.Length} correct!");
    }
  }
}
