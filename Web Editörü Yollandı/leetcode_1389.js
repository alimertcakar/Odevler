var createTargetArray = function (nums, index) {
    let output = [];
    index.forEach((item, index) => {
        output.splice(item, 0, nums[index]) // splice kullanarak insert yapıyoruz
    });
    return output;
};

