const promise1 = new Promise((resolve, reject) => {
    resolve(["JavaScript", "Java"]);
});

const promise2 = new Promise((resolve, reject) => {
    resolve(["React", "Angular"]);
    // reject("Error: failed to fetch data");
});

const allPromises = Promise.all([promise1, promise2]); // returns a promise if all promises are resolved
const allPromisessWith_allSettled = Promise.allSettled([promise1, promise2]); // return all promises with status
const allPromisessWith_any = Promise.any([promise1, promise2]); // returns a single promise, if everything fails then it shows "All promises were rejected"
const allPromisesWith_race = Promise.race([promise1, promise2]); // return a single promise as soon it fails or succeeds

console.log("================== all =======================");

allPromises
    .then((res) => {
        console.log(res); // normal
        console.log(res.flat()); //nested array
        console.log(res.flat(Infinity)); //more nested array
    })
    .catch((err) => {
        console.log(err);
    });
console.log("================== allSettled =======================");

allPromisessWith_allSettled
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });

console.log("================== any =======================");

allPromisessWith_any
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });

console.log("================== race=======================");

allPromisesWith_race
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });
