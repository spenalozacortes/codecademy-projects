using System;

namespace MagicalInheritance
{
  class Archmage : Mage
  {
    public Archmage(string title) : base(title)
    {}

    public override Storm CastRainStorm()
    {
      return new Storm("rain", true, this.Title);
    }

    public Storm CastLightningStorm()
    {
      return new Storm("lightning", true, this.Title);
    }
  }
}
