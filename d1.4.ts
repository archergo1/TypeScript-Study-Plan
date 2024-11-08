interface Person {
    // readonly 唯讀屬性，無法修改其值
    readonly id: number;
    name: string;
    age: number
    // 加上? 表示可選屬性
    phone?: string
    // 索引屬性 在某些狀況下 可能會有動態生成 或是我們無法確定物件上有那些屬性 此時可用索引屬性
    // 此外 這個屬性也代表 "任何屬性" 也就是物件裡的任何屬性都要符合他的規則 
    [key: string]: string | number
}

const anna: Person = {
    id: 1,
    name: "Anna",
    age: 30
}

// anna.id = 2

// const peter: Person = {
//     name: "Peter"
// }





// 在 TypeScript 中 
// 有多種方法可以定義陣列型別
// 1. 用 型別 + 方括 表示
let numbers: number[] = [1, 2, 3, 4, 5]
let names: string[] = ['Alice', 'Bob', 'Charlie']

// numbers.push(true)


// 2.用泛型表示
let numbers2: Array<number> = [1, 2, 3, 4, 5]
let names2: Array<string> = ['Alice', 'Bob', 'Charlie']

// 3. 用介面表示

// 如果陣列中有不同類別的元素 可以用 any[] 
let mixedArray: any[]


