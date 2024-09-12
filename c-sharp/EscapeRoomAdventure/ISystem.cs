using System;

namespace EscapeRoomAdventure
{
  interface ISystem
  {
    string Status { get; set; }
    void Operate();
  }
}
