import { context, logging, PersistentVector, RNG } from "near-sdk-as";
import { Player, History } from "./model";

const players = new PersistentVector<Player>("p");
const histories = new PersistentVector<History>("h");
const chairman: string = "ns-truong.testnet";

// contract functions
export function addPlayer(idPlayer: string): void {
  logging.log(context.sender);
  assert(
    context.sender.localeCompare(chairman) === 0,
    "Only chairman can add player"
  );
  const playerIdx = getPlayerIdxByCode(idPlayer);
  assert(playerIdx < 0, `${idPlayer} was existed`);
  const player = new Player(idPlayer);
  players.push(player);
}

export function createRandomWinners(): string {
  assert(players.length >= 2, "Minigame must have 2 player or higher");
  const rng = new RNG<u32>(1, players.length);
  const roll = rng.next();
  const winner = players[roll].idPlayer;
  const history = new History(winner, roll);
  histories.push(history);
  return winner;
}

export function showAllPlayers(): Player[] {
  let listPlayers: Player[] = [];
  for (let i = 0; i < players.length; i++) {
    listPlayers.push(players[i]);
  }
  return listPlayers;
}

export function showHistories(): History[] {
  let listHistory: History[] = [];
  for (let i = 0; i < histories.length; i++) {
    listHistory.push(histories[i]);
  }
  return listHistory;
}

export function countNumberWinOfPlayer(idPlayer: string): u32 {
  var numberWin = 0;
  for (let i = 0; i < histories.length; i++) {
    if (histories[i].winner == idPlayer) {
      numberWin = numberWin + 1;
    }
  }
  return numberWin;
}

// check user exist
export function getPlayerIdxByCode(idPlayer: string): i32 {
  for (let i = 0; i < players.length; i++) {
    if (players[i].idPlayer.localeCompare(idPlayer) === 0) {
      return i;
    }
  }
  return -1;
}

export function resetGame(): void {
  for (let i = 0; i < players.length; i++) {
    players.pop();
  }
}

//This Function only need when reset history for testing
export function clearHistories(): void {
  for (let i = 0; i < histories.length; i++) {
    histories.pop();
  }
}
