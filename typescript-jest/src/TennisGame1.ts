import { TennisGame } from './TennisGame';

export class TennisGame1 implements TennisGame {
  private player1Score: number = 0;
  private player2Score: number = 0;
  private player1Name: string;
  private player2Name: string;

  constructor(player1Name: string, player2Name: string) {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
  }

  wonPoint(playerName: string): void {
    if (playerName === 'player1')
      this.player1Score += 1;
    else
      this.player2Score += 1;
  }

  getScore(): string {
    const scores = ['Love', 'Fifteen', 'Thirty', 'Forty']
    const minusResult: number = this.player1Score - this.player2Score;

    if (minusResult === 0) {
      if (this.player1Score >= 3) { return "Deuce" }
      return scores[this.player1Score] + "-All"
    }

    if (this.player1Score >= 4 || this.player2Score >= 4) {
      const playerUp = minusResult > 0 ? this.player1Name : this.player2Name
      if (Math.abs(minusResult) === 1) return `Advantage ${playerUp}`
      return `Win for ${playerUp}`
    }

    return scores[this.player1Score] + "-" + scores[this.player2Score]
  }
}