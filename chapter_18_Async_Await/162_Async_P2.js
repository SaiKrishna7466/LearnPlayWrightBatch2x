//Aysnc part 2
function getToken() {
    return Promise.resolve("All good and approved");
}

async function run() {
    let token = await getToken();
    console.log(token);
}

run();