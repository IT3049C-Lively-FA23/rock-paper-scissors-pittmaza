class RockPaperScissors {
  constructor(username) {
    this.username = username;
    (this.score = {
      user: 0,
      cpu: 0,
    }),
      (this.gameHistoryLog = []);
  }

  /**
   * RETURN: one of the following values (`rock`, `paper`, `scissors`)
   * using Math.random() method, you should be able to get one of the following values
   */
  generateCPUResponse() {
    const acceptedValues = ["Rock", "Paper", "Scissors"];
    const index = Math.floor(Math.random() * acceptedValues.length);
    //this is returning the string of the index
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
  determineWinner(userSelection, cpuSelection) {
    {
      switch (userSelection) {
        case userSelection == "Rock":
          switch (cpuSelection) {
            case cpuSelection == "Rock":
              return "tie";
            case cpuSelection == "Paper":
              return "lose";
            case cpuSelection == "Scissors":
              return "win";
          }
          break;

        case userSelection == "Paper":
          switch (cpuSelection) {
            case cpuSelection == "Rock":
              return "win";
            case cpuSelection == "Paper":
              return "tie";
            case cpuSelection == "Scissors":
              return "lose";
          }
          break;

        case userSelection == "Scissors":
          switch (cpuSelection) {
            case cpuSelection == "Rock":
              return "lose";
            case cpuSelection == "Paper":
              return "win";
            case cpuSelection == "Scissors":
              return "tie";
          }
          break;
      }
    }
  }

  /**
   *
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  play(userSelection) {
    const cpu_choice = this.generateCPUResponse();
    const winner = this.determineWinner(userSelection, cpu_choice);
    if (winner == cpu_choice) {
      this.score.cpu++;
    } else if (winner == userSelection) {
      this.score.user++;
    }
    this.gameHistoryLog.push(
      `${this.username} selected: ${userSelection}, CPU selected: ${cpu_choice} - ${winner} wins.`
    );
    console.log(this.gameHistoryLog.length);
  }
}
