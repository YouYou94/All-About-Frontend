function solution(players, callings) {
  var answer = [];

  const hash = new Map();

  players.map((player, index) => {
    hash.set(player, index);
  });

  callings.forEach((call) => {
    const index = hash.get(call);
    const preview = players[index - 1];

    [players[index], players[index - 1]] = [players[index - 1], players[index]];

    hash.set(call, hash.get(call) - 1);
    hash.set(preview, hash.get(call) + 1);
  });

  return players;
}

let players = ["mumu", "soe", "poe", "kai", "mine"];
let callings = ["kai", "kai", "mine", "mine"];
console.log(solution(players, callings));
