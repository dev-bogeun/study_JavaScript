// let datas = [1,2,3,4,5];

// datas.forEach((data, i, datas) => datas[i] = Math.pow(data, 2));
// console.log(datas);


// let numbers = new Array(100).fill(0);
// console.log(numbers);

// numbers.forEach((num, i, numbers) => numbers[i] = i+1);
// numbers.filter(num => num % 2 == 0).forEach(console.log);



// let hangel = "공일이삼사오육칠팔구";
// let target = "일공이사";
// let result = "";

// target.split("").map(char => hangel.indexOf(char)).forEach(i => result += i);
// console.log(parseInt(result));

// let hangel = "공일이삼사오육칠팔구";
// let target = "1024";
// let result = "";

// target.split("").map(i => hangel[i]).forEach(char => result += char);
// console.log(result);

let nums = new Array(100).fill(0);
nums.forEach((num, i, nums) => nums[i] = i+1);
let result = nums.reduce((v,data) => v + data);
console.log(result);