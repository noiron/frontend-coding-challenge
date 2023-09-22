const arr = [
  {
    id: 2,
    name: 'B',
    parentId: 0,
  },
  {
    id: 3,
    name: 'C',
    parentId: 1,
  },
  {
    id: 1,
    name: 'A',
    parentId: 2,
  },
  {
    id: 4,
    name: 'D',
    parentId: 1,
  },
  {
    id: 5,
    name: 'E',
    parentId: 2,
  },
  {
    id: 6,
    name: 'F',
    parentId: 3,
  },
  {
    id: 7,
    name: 'G',
    parentId: 2,
  },
  {
    id: 8,
    name: 'H',
    parentId: 4,
  },
];

const arrayToTree = (arr) => {
  const rootNode = {
    id: 0,
    name: 'root',
    children: [],
  };
  const map = { 0: rootNode };

  arr.forEach((item) => {
    const { id, name, parentId } = item;
    
    // 这里有一个需要注意的点，假设 A 有两个子节点 C、D，它们在数组中的顺序是 C，D，A
    // 遍历至 C 时，它的父节点对象不存在，所以先创建了一个不完整的父节点 A，只包含 id 和 children
    // 遍历至 D 时，它的父节点对象已经存在，所以直接使用父节点对象，不用创建新的
    // 遍历至 A 时，它的节点对象已经存在，复用 map 中的对象，但是需要加入缺失的属性
    if (!map[id]) {
      map[id] = {
        id,
        name,
        children: [],
      };
    } else {
      map[id].name = name;
    }
    const node = map[id];

    if (!map[parentId]) {
      map[parentId] = {
        id: parentId,
        children: [],
      };
    }
    map[parentId].children.push(node);
  });

  return rootNode;
};

// console.log(JSON.stringify(arrayToTree(arr)));

module.exports = arrayToTree;
