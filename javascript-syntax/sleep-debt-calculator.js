const getSleepHours = day => {
    switch(day) {
      case 'monday':
        return 8;
      case 'tuesday':
        return 7;
      case 'wednesday':
        return 8;
      case 'thursday':
        return 7;
      case 'friday':
        return 6;
      case 'saturday':
        return 9;
      case 'sunday':
        return 8;
    }
  };
  
  const getActualSleepHours = () => 
    getSleepHours("monday") + getSleepHours("tuesday") + getSleepHours("wednesday") + getSleepHours("thursday") + getSleepHours("friday") + getSleepHours("saturday") + getSleepHours("sunday");
  
  const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7;
  };
  
  const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
  
    if(actualSleepHours == idealSleepHours) {
      console.log("You got the perfect amount of sleep!");
    } else if(actualSleepHours > idealSleepHours) {
      console.log(`You slept ${actualSleepHours - idealSleepHours} hour(s) more than ideal. You got more sleep than needed.`);
    } else {
      console.log(`You slept ${idealSleepHours - actualSleepHours} hour(s) less than ideal. You should get some rest.`);
    }
  };
  
  calculateSleepDebt();