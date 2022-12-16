function receivesAFunction(cb) {
    cb();
    return null;
}

function returnsANamedFunction() {
    const functionName = () => console.log("Hello, World");
    return functionName;
}

function returnsAnAnonymousFunction() {
    return function () { console.log("HelloWorld"); }
}