function getComputerChoice(){
    let rpsNum = Math.floor(Math.random() * (4 - 1) + 1);
    if (rpsNum === 1){
        console.log('Rock')
    }else if (rpsNum === 2){
        console.log('Paper')
    }else if (rpsNum === 3){
        console.log('Scissors')
    }
}
console.log (getComputerChoice())