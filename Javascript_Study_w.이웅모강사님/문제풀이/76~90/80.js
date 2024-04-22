/* 외계어 사전
알파벳이 담긴 배열 spell과 외계어 사전 dic이 매개변수로 주어집니다. 
spell에 담긴 알파벳을 한번씩만 모두 사용한 단어가 dic에 존재한다면 1, 존재하지 않는다면 2를 return
*/

function solution2(spell, dic) {
  const equals = (a, b) => JSON.stringify(a) === JSON.stringify(b);

  const check = spell.toSorted();

  for (const str of dic) {
    if (equals(check, [...str].sort())) return 1;
  }

  return 2;
}

console.log(solution2(['p', 'o', 's'], ['sod', 'eocd', 'qixm', 'adio', 'soo'])); // 2
console.log(solution2(['z', 'd', 'x'], ['def', 'dww', 'dzx', 'loveaw'])); // 1
console.log(solution2(['s', 'o', 'm', 'd'], ['moos', 'dzx', 'smm', 'sunmmo', 'som'])); // 2

/* == 라이브 도중 추가 == */
