const removeFromArray = function (array, ...removeVals) {

    const newArray = [];

    array.forEach((item) => {
        if (!removeVals.includes(item)) {
            newArray.push(item);
        }
    })


    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
