@nearBindgen
export class Player {
  idPlayer: string;

  constructor(idPlayer: string) {
    this.idPlayer = idPlayer;
  }
}

@nearBindgen
export class History {
  winner: string;
  luckyNumber: u32;
  // dateTime: string;

  constructor(winner: string, luckyNumber: u32) {
    this.winner = winner;
    this.luckyNumber = luckyNumber;
    // this.dateTime = dateTime;
  }
}
