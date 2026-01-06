const promise = new Promise((resolve, reject) => {
    // setTimeout(() => {
    //     resolve("Success!");
    // }, 3000);

    reject("\nError! : failed to fetch data\n");
});

promise.then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
})
