let count = 5;

const data = [
  {
    id: 1,
    desc: "12324",
    done: true,
  },
  {
    id: 2,
    desc: "dsjfh443",
    done: false,
  },
  {
    id: 3,
    desc: "nesto rjsdhf 2343",
    done: false,
  },
  {
    id: 4,
    desc: "dxjfhfdhfkdhjfkhdfhjdkf",
    done: true,
  },
];

const add = (inputT, inputC) => {
  let todo = { id: count++, desc: inputT, done: inputC };

  data.push(todo);
  console.log(data);
};

const deleteById = (id) => {
  let index = data.findIndex((item) => item.id == id);
  data.splice(index, 1);
  console.log(data);
};

const changeById = (id, noviItem) => {
  let index = data.findIndex((item) => item.id == id);
  data.splice(index, 1, noviItem);
  console.log(data);
};

export default {
  data,
  add,
  deleteById,
  changeById,
  count,
};
