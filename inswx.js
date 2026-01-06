console.log("start...");
function getDataFromAPI(callback) {
    setTimeout(() => {
        callback(1);
    }, 1000);
}
function getDataFromAPI2(callback) {
    setTimeout(() => {
      callback(2)
    }, 1000);
}
function getDataFromAPI3(callback) {
    setTimeout(() => {
        callback(3)
    }, 1000);
}
console.log("End...");

getDataFromAPI((api1Value) => {
    getDataFromAPI2((api2Value) => {
        getDataFromAPI3((api3Value) => {
            console.log(api3Value + api2Value + api1Value);
        });
    });
});
