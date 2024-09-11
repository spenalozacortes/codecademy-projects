using System;

namespace CorporatePolymorphism
{
  public abstract class Employee
  {
    public abstract void SubmitDailyReport();
    public abstract void Work();

    public void ClockIn()
    {
      Console.WriteLine("Employee clocks in.");
    }
  }
}
