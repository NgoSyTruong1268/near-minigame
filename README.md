Minigame is a game of chance, smart contract will auto random to choose winner.

Let's start!

Deploy on testnet
```
near login -> login to ns-truong.testnet
yarn deploy:dev
```

## To run example

```
- Add players
near call dev-1632391902293-48567974163302 --accountId ns-truong.testnet addPlayer '{"idPlayer": "Player1.near"}'
near call dev-1632391902293-48567974163302 --accountId ns-truong.testnet addPlayer '{"idPlayer": "Player1.near"}'
near call dev-1632391902293-48567974163302 --accountId ns-truong.testnet addPlayer '{"idPlayer": "Player1.near"}'

- create random Winners
near call dev-1632391902293-48567974163302 --accountId ns-truong.testnet createRandomWinners

- Show all players
near call dev-1632391902293-48567974163302 --accountId ns-truong.testnet showAllPlayers

- Show history
near call dev-1632391902293-48567974163302 --accountId ns-truong.testnet showHistories

- Count number win of player
near call dev-1632391902293-48567974163302 --accountId ns-truong.testnet countNumberWinOfPlayer '{"idPlayer": "Player1.near"}'

- Reset game
near call dev-1632391902293-48567974163302 --accountId ns-truong.testnet resetGame
```
