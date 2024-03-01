function solution(skill, skill_trees) {
  // skill 문자열을 배열로 변환한다.
  const arr = skill.split("");

  // skill_trees를 filter()메서드를 통해 하나씩 확인하면서 골라준다.
  return skill_trees.filter((item) => {
    let idx = 0;
    // skill_trees에서 들어온 값을 for()문을 통해 하나씩 확인한다.
    for (let i = 0; i < item.length; i++) {
      // skill에 현재 들어온 값이 존재하지 않는다면
      // 선행 스킬에 영향이 없기때문에 넘겨준다.
      if (!arr.includes(item[i])) continue;

      // 존재한다면 다음으로 skill의 순서를 확인한다.
      // ex) arr = ["C", "B", "D"]
      // ex) item = ["B", "D", "A"]
      // B가 처음 들어오게 되는데 현재 idx는 선행 스킬인 C를 가리키고 있다.
      // 맞지 않으므로 바로 false를 리턴해 걸러준다.
      if (arr[idx++] !== item[i]) return false;
    }
    // 이상없이 루프가 종료되면 true를 리턴해 filter() 메소드에 포함시켜준다.
    return true;

    // 길이를 구해 바로 반환을해준다.
  }).length;
}
