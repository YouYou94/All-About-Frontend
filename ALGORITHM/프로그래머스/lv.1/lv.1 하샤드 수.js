function solution(x) {
  return !(
    x %
    (x + "").split("").reduce(function (item, sum) {
      return +item + +sum;
    })
  );
}
