class RockPaperScissors {
  constructor(username) {
    this.username = username;
    this.score = {
      user: 0,
      cpu:0
    },
    this.gameHistoryLog = [];
  }

  /**
   * RETURN: one of the following values (`rock`, `paper`, `scissors`)
   * using Math.random() method, you should be able to get one of the following values
   */
  generateCPUResponse(){
    const acceptedValues = ['rock', 'paper', 'scissors' ];
    const index = Math.floor(Math.random() * acceptedValues.length);
    return acceptedValues[index];
  }
  /**
   * returns one of the following values: `win`, `lose`, `tie`
   * tie:
   *     the user selection the same as the CPU
   * win: 
   *    (user is `rock` and cpu is `scissors
   *     OR
   *    (user is `paper` and cpu is `rock`) 
   *     OR 
   *    (user is `scissors` and cpu is `paper`)
   * `lose`:
   *    the opposite case :)
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   * @param {string} cpuSelection computer selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  determineWinner(userSelection, cpuSelection){

    switch(userSelection) {
      case 'rock':
       switch(cpuSelection) {
        case 'rock':
          return 'tie';
        case 'paper':
          return 'lose';
        case 'scissors':
          return 'win';
       } break;

       case 'paper':
       switch(cpuSelection) {
        case 'rock':
          return 'win';
        case 'paper':
          return 'tie';
        case 'scissors':
          return 'lose';
       } break;

       case 'scissors':
       switch(cpuSelection) {
        case 'rock':
          return 'lose';
        case 'paper':
          return 'win';
        case 'scissors':
          return 'tie';
       } break;
      
    }
  }

  /**
   * 
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  play(userSelection){
    const cpu_choice = this.generateCPUResponse();
    const winner = this.determineWinner(userSelection, cpu_choice)
    console.log(winner)
    if (winner == 'win') {
      this.score.user ++;
    } else if (winner == 'lose') {
      this.score.cpu ++;
    } 
    this.gameHistoryLog.push(
      `${this.username} selected: ${userSelection}, CPU selected: ${cpu_choice} - ${winner} wins.`
    );
  }

}