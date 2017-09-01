function twoSum(nums, target) {
    let map = {};
    let res = [];
    // map[nums[0]] = 0;
    for (let i = 0; i < nums.length; i++) {
        let tmp = target - nums[i];
        if (tmp in map) {
            res.push(map[tmp], i);
        } else {
            map[nums[i]] = i;
        }
    }
    return res;
}

let nums = [3, 2, 4];
let target = 6;
console.log(twoSum(nums, target));
