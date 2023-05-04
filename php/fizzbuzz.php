<?php
/* first solution
$counter = 1;
while ($counter <= 100) {
  if ($counter % 15 === 0) {
    echo "FizzBuzz\n";
  } elseif ($counter % 5 === 0) {
    echo "Buzz\n";
  } elseif ($counter % 3 === 0) {
    echo "Fizz\n";
  } else {
    echo "$counter\n";
  }
  $counter++;
} 
*/

$output = [];
for ($i = 1; $i <= 100; $i++) {
  if ($i % 15 === 0) {
    array_push($output, "FizzBuzz");
  } elseif ($i % 5 === 0) {
    array_push($output, "Buzz");
  } elseif ($i % 3 === 0) {
    array_push($output, "Fizz");
  } else {
    array_push($output, $i);
  }
}

/*
foreach ($output as $value) {
  echo "$value\n";
}
*/

// skip Fizz and stop after first FizzBuzz
foreach ($output as $value) {
  if ($value === "Fizz") {
    continue;
  } elseif ($value === "FizzBuzz") {
    echo "$value\n";
    break;
  }
  echo "$value\n";
}