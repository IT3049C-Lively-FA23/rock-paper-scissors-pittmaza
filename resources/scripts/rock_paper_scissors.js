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
    if (userSelection === cpuSelection) {
      return "tie";
    } else if (
      (userSelection === "Rock" && cpuSelection === "Scissors") ||
      (userSelection === "Paper" && cpuSelection === "Rock") ||
      (userSelection === "Scissors" && cpuSelection === "Paper")
    ) {
      return "win";
    } else {
      return "lose";
    }
  }

  /**
   *
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  play(userSelection) {
    const cpu_choice = this.generateCPUResponse();
    const winner = this.determineWinner(userSelection, cpu_choice);
    let final_winner;
    console.log(winner);
    console.log(cpu_choice);
    console.log(userSelection);
    if (winner === cpu_choice) {
      console.log("here");
      this.score.cpu + 1;
      final_winner = "CPU";
    } else if (winner === userSelection) {
      this.score.user + 1;
      final_winner = this.username;
    } else {
      final_winner = "tie";
    }

    this.gameHistoryLog.push(
      `${this.username} selected: ${userSelection}, CPU selected: ${cpu_choice} & ${final_winner} wins.`
    );
    return winner;
  }
}
