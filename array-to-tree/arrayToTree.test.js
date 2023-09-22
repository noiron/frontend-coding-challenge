const arrayToTree = require('./arrayToTree'); // 导入 arrayToTree 函数

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

describe('arrayToTree function', () => {
  it('should convert a flat array to a tree structure', () => {
    const expectedResult = {
      id: 0,
      name: 'root',
      children: [
        {
          id: 2,
          name: 'B',
          children: [
            {
              id: 1,
              name: 'A',
              children: [
                {
                  id: 3,
                  name: 'C',
                  children: [
                    {
                      id: 6,
                      name: 'F',
                      children: [],
                    },
                  ],
                },
                {
                  id: 4,
                  name: 'D',
                  children: [
                    {
                      id: 8,
                      name: 'H',
                      children: [],
                    },
                  ],
                },
              ],
            },
            {
              id: 5,
              name: 'E',
              children: [],
            },
            {
              id: 7,
              name: 'G',
              children: [],
            },
          ],
        },
      ],
    };

    const result = arrayToTree(arr);

    expect(result).toEqual(expectedResult);
  });

  it('should handle an empty input array', () => {
    const emptyArr = [];
    const expectedResult = {
      id: 0,
      name: 'root',
      children: [],
    };

    const result = arrayToTree(emptyArr);

    expect(result).toEqual(expectedResult);
  });

  it('should handle a single-node array', () => {
    const singleNodeArr = [
      {
        id: 1,
        name: 'A',
        parentId: 0,
      },
    ];
    const expectedResult = {
      id: 0,
      name: 'root',
      children: [
        {
          id: 1,
          name: 'A',
          children: [],
        },
      ],
    };

    const result = arrayToTree(singleNodeArr);

    expect(result).toEqual(expectedResult);
  });
});
