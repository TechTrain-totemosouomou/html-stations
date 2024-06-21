async function getData() {
  // Promiseを使った実装をやってみましょう！APIとの通信でよく使う表現になります！
  // ３秒後にフルネームのリストを表示されるようにしましょう。
  // 最初から表示されていると、クリアになりません。
  const userList = [
    { id: 1, first_name: '優', family_name: '大木', affiliation: 'TechTrain', is_student: false },
    { id: 2, first_name: '太郎', family_name: '山田', affiliation: 'HogeHoge大学', is_student: true }
  ];

  // 3秒待機するPromiseを作成する関数
  function wait(timeout) {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  // 3秒後にフルネームのリストを返すPromise
  const result = await wait(3000).then(() => {
    return userList.map(buildFullName);
  });

  return result;
}

// フルネームを作成する関数
function buildFullName(data) {
  const full_name = `${data.family_name} ${data.first_name}`;
  return { ...data, full_name };
}

// test関数をPromiseを返す形式に変更
function test() {
  return new Promise(resolve => {
    resolve(getData());
  });
}

