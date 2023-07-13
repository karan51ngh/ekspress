function logResponseBody(jsonBody) {
    console.log(jsonBody);
}

function callbackFn(result) { // an asynchronous function that returns a promise
    result.json().then(logResponseBody)
}

var sendObj = {
    method: "GET"
}

fetch("http://localhost:3000?first=1&second=2", sendObj).then(callbackFn);