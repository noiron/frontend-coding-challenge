function shuffle(arr) {
  let m = arr.length;

  while (m) {
    // 选出一个剩余的元素
    const i = Math.floor(Math.random() * m--);

    // 交换两个元素
    [arr[m], arr[i]] = [arr[i], arr[m]];
  }
  return arr;
}

module.exports = shuffle;
