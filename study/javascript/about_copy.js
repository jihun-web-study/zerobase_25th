const print = console.log;

const orgin_arr1 = [1, 2, 3, 4];
const orgin_arr2 = [[1], [2], [3], [4]];

const orgin_obj1 = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
};
const orgin_obj2 = {
  a: 1,
  b: 2,
  c: 3,
  d: {
    e: 5,
    f: 6,
  },
};

const copy_arr1 = [...orgin_arr1];
const copy_arr2 = [...orgin_arr2];

copy_arr1[1] = 100;
copy_arr2[1][0] = 100;

print("====arr print====");
print(`orgin 1: ${orgin_arr1}\ncopy 1 ${copy_arr1}`);
print(`orgin 2: ${orgin_arr2}\ncopy 2: ${copy_arr2}`);

const copy_obj1 = [...orgin_obj1];
const copy_obj2 = [...orgin_obj2];

copy_obj1[1] = 100;
copy_obj2[1][0] = 100;

print("====obj print====");
print(`orgin 1: ${orgin_obj1}\ncopy 1 ${copy_obj1}`);
print(`orgin 2: ${orgin_obj2}\ncopy 2: ${copy_obj2}`);
