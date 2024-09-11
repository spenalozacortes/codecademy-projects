using System;
using System.Collections.Generic;

namespace CorporatePolymorphism
{
  class Program
  {
    static void Main(string[] args)
    { 
      Employee hrRep = new HR();

      hrRep.ClockIn();
      hrRep.Work();
      hrRep.SubmitDailyReport();
      Console.WriteLine(); 

      Employee employee1 = new Engineer();
      employee1.SubmitDailyReport();
      Console.WriteLine(); 

      Employee employee2 = new Intern();
      employee2.SubmitDailyReport();
      employee2.ClockIn();
      Console.WriteLine(); 

      Employee employee3 = new Manager();
      employee3.SubmitDailyReport();
      employee3.ClockIn();
      Console.WriteLine(); 

      Engineer engineer1 = employee1 as Engineer;
      if (engineer1 != null)
      {
        engineer1.SubmitDailyReport();
      }
      else
      {
        Console.WriteLine("Downcast failed!");
      }
      Console.WriteLine(); 

      List<Employee> employees = new List<Employee>();
      employees.Add(hrRep);
      employees.Add(employee1);
      employees.Add(employee2);
      employees.Add(employee3);
      foreach (Employee employee in employees)
      {
        if (employee is Engineer)
        {
          Console.WriteLine("This is an Engineer.");
        }
        else if (employee is Intern)
        {
          Console.WriteLine("This is an Intern.");
        }
        else if (employee is Manager)
        {
          Console.WriteLine("This is an Manager.");
        }
        employee.SubmitDailyReport();
        employee.Work();
        employee.ClockIn();
        Console.WriteLine(); 
      }
    }
  }
}
