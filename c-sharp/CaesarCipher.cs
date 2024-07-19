using System;

namespace CaesarCipher
{
  class Program
  {
    static void Main(string[] args)
    {
      char[] alphabet = new char[] {'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'};

      Console.WriteLine("Write a secret message: ");
      string message = Console.ReadLine(); 
      char[] secretMessage = message.ToCharArray();
      char[] encryptedMessage = new char[secretMessage.Length];

      for (int i = 0; i < secretMessage.Length; i++) 
      {
        char letter = secretMessage[i];
        int letterPosition = Array.IndexOf(alphabet, letter);
        int newLetterPosition = (letterPosition + 3) % alphabet.Length;
        char encryptedChar = alphabet[newLetterPosition];
        encryptedMessage[i] = encryptedChar;
      }

      string joinedChars = String.Join("", encryptedMessage);
      Console.WriteLine(joinedChars);
    }
  }
}
