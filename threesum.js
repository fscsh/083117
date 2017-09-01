//auther: Shuhao Chen
//Date: 08312017
function threeSum(nums) {
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        let tmp = 0 - nums[i];
        // console.log('**tmp ==', tmp);
        let map = {};
        for (let j = i + 1; j < nums.length; j++) {
            let tmp2 = tmp - nums[j];
            // console.log('nums[i] =', nums[i], 'nums[j]', nums[j], 'tmp2', tmp2);
            if (tmp2 in map) {
                // console.log('enter push');
                res.push([nums[i], nums[j], tmp2]);
            } else {
                map[nums[j]] = j;
            }
        }
    }
    for (let i = 0; i < res.length; i++) {
        res[i] = res[i].sort().toString();
    }
    set = new Set(res);
    res = Array.from(set);
    for (let i in res) {
        let tmp = res[i].split(',');
        // console.log('after split,tmp =', tmp);
        for (let j = 0; j < tmp.length; j++) {
            // console.log('tmp[j]', tmp[j]);
            tmp[j] = parseInt(tmp[j]);
            // console.log('tmp = ', tmp);
        }
        res[i] = tmp;
    }
    // res = res.map(JSON.parse);
    return res;

}


let S = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(S));
