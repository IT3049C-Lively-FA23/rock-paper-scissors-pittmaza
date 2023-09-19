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
    switch (userSelection) {
      case "Rock":
        switch (cpuSelection) {
          case "Rock":
            return "tie";
          case "Paper":
            return "lose";
          case "Scissors":
            return "win";
        }
        break;

      case "Paper":
        switch (cpuSelection) {
          case "Rock":
            return "win";
          case "Paper":
            return "tie";
          case "Scissors":
            return "lose";
        }
        break;

      case "Scissors":
        switch (cpuSelection) {
          case "Rock":
            return "lose";
          case "Paper":
            return "win";
          case "Scissors":
            return "tie";
        }
        break;
    }
  }

  /**
   *
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  play(userSelection) {
    const cpu_choice = this.generateCPUResponse();
    console.log(cpu_choice);
    const winner = this.determineWinner(userSelection, cpu_choice);
    if (winner == cpu_choice) {
      this.score.cpu++;
    } else if (winner == userSelection) {
      this.score.user++;
    }
    console.log(winner);
    this.gameHistoryLog.push(
      `${this.username} selected: ${userSelection}, CPU selected: ${cpu_choice} - ${winner} wins.`
    );
    console.log(this.gameHistoryLog.length);
  }
}
