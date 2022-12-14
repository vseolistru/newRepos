//classic
const nums = [22,33,44,55]
for (let i = 0; i<nums.length; i++) {
    console.log(nums[i])
}

//for of перебирает значения
for (let num of nums ) {
    console.log(num)
}

// перебирает индексы
for (let num in nums) {
    console.log(num)
}
