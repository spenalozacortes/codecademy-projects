<?php
function generateStory($singular_noun, $verb, $color, $distance_unit)
{
  $story = "\nThe {$singular_noun}s are lovely, {$color}, and deep.\nBut I have promises to keep,\nAnd {$distance_unit} to go before I {$verb},\nAnd {$distance_unit} to go before I {$verb}.\n";

  return $story;
}

echo generateStory("apple", "run", "red", "kilometers");
echo generateStory("duck", "draw", "yellow", "miles");
echo generateStory("computer", "love", "black", "light-years");