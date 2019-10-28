
function median(data) {
    var sortedData = data.sort((a, b) => a - b);
    var midleNumber = Math.floor(sortedData.length / 2);

    if (sortedData.length % 2 != 0) {
        return console.log(sortedData[midleNumber]);
    }
    else {
        var evenMidleNumber = (sortedData[midleNumber] + sortedData[midleNumber - 1]) / 2
        return console.log(evenMidleNumber);

    }

}

median([1, 2, 3, 4, 5])
median([3, 1, 2, 5, 3])
median([1, 300, 2, 200, 1])
median([3, 6, 20, 99, 10, 15])




