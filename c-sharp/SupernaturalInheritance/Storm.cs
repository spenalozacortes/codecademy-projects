using System;

namespace MagicalInheritance
{
  class Storm
  {
    public string Essence
    { get; private set; }

    public bool IsStrong
    { get; private set; }

    public string Caster
    { get; private set; }

    public Storm(string essence, bool isStrong, string caster)
    {
      this.Essence = essence;
      this.IsStrong = isStrong;
      this.Caster = caster;
    }

    public string Announce()
    {
      string strength = "";
      if (this.IsStrong) 
      {
        strength += "strong";
      } 
      else
      {
        strength += "weak";
      }

      return $"{this.Caster} cast a {strength} {this.Essence} storm!";
    }
  }
}
