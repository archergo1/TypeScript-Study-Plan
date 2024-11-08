var anna = {
    id: 1,
    name: "Anna",
    age: 30
};
// anna.id = 2
// const peter: Person = {
//     name: "Peter"
// }
// 在 TypeScript 中 
// 有多種方法可以定義陣列型別
// 1. 用 型別 + 方括 表示
var numbers = [1, 2, 3, 4, 5];
var names = ['Alice', 'Bob', 'Charlie'];
// numbers.push(true)
// 2.用泛型表示
var numbers2 = [1, 2, 3, 4, 5];
var names2 = ['Alice', 'Bob', 'Charlie'];
// 3. 用介面表示
// 如果陣列中有不同類別的元素 可以用 any[] 
var mixedArray;
