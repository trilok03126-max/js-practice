
const randomnum = Math.floor(Math.random() * 10) + 1 ;

while(true){

  let guessnum = Number(prompt("guess a number between 1 and 10"));
  
  if(guessnum < randomnum ){
    console.log("tooo low");
  }
  else if(guessnum > randomnum){
    console.log("too high");
  }
  else if(guessnum === randomnum){
    console.log("!Matched");
    break;
  }

}
