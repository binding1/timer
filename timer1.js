const beepTimes= process.argv //arguments taken from command line
  .slice(2).map(string => {return parseInt(string)}) //parse all elements into numbers
  .sort((a, b) => a - b) //sort numbers to ascending order
  .filter(i => i >= 0) //filters for only positive numbers incl. 0
  .filter(i => !isNaN(i)) //filters out any NaN

const timer = () => {
  console.log("Starting timer..."); //timer start

  for (let time = 0; time <= Math.max(...beepTimes) * 1000; time += 1000) { //loops until the maximum time inputted
    setTimeout(() => {
      console.log(`Current time is: ${time / 1000} second(s).`); //logs the current time
      if (beepTimes.includes(time / 1000)) { //beeps if time is at any of the beepTime array's values
        process.stdout.write('\x07');
        console.log('*BEEP*');
      }

      if (time / 1000 === Math.max(...beepTimes)) {
        console.log(`Timer ended at ${time / 1000} seconds.`); //function ends at the max time inputed
      }

    }, time);
  }
};

timer();