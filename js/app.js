let raceNumber = Math.floor(Math.random() * 1000);
let earlyReg = false;
let runnerAge = 25;

if (runnerAge === 18 && earlyReg === true) {
  raceNumber += 1000;
  console.log('')
} else if (runnerAge > 18 && earlyReg === false) {
  console.log(`Your race is at a 11:00 AM.  Your race number is ${raceNumber}.`);
} else if (runnerAge < 18){
  console.log(`Your race is at 12:30 PM. Your race number is ${raceNumber}.`);
} else if (runnerAge == 18){
  console.log('Pleae see the registration desk for more information.')
}


//  assigning a default value
function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
  }

//return function
  function monitorCount(rows, columns) {
    return rows * columns
    };
    const numOfMonitors = monitorCount(5, 4) 
    console.log(numOfMonitors);

    // cost of monitors, helper functions multiple functions
    function monitorCount(rows, columns) {
        return rows * columns;
      }
      function costOfMonitors(rows, columns){
        return monitorCount(rows, columns) * 200;
      }
      const totalCost = costOfMonitors(5, 4)
      
      //Plants need water
      console.log(totalCost);
      const plantNeedsWater = function (day, plantNeedsWater){
        if (day === 'Wednesday'){
          return true;
        } else {
          return false;
        }
        console.log(plantNeedsWater('Tuesday'))
        }

        //same code as above but just an arrow function.
        const plantNeedsWater = (day) => {
          if (day === 'Wednesday') {
            return true;
          } else {
            return false;
          }
        };
        
        //same code as above but it's a implicit return line only has one parameter and it's turned into a teranary operator.
        
        const plantNeedsWater = day => day === 'Wednesday' ? true : false;