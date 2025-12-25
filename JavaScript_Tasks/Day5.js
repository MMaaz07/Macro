//Closures and asyncronous functions used here
function debounce(fucn, delay){
    let timeoutId;
    return function(...args){
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            fucn.apply(this, args);
        }, delay);
    };
}

function throttle(func, interval) {
    let lastTime = 0;
    return function (...args) {
        const now = Date.now();
        if (now - lastTime >= interval) {
            lastTime = now;
            func.apply(this, args);
        }
    };
}

//Funciton currying concept used here
function logger(type){
    return function(message){
        console.log(`${type} - ${message}`);
    };
}

const infoLogger=logger("INFO");


function getData(query) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([query, "result1", "result2"]);
        }, 1000);
    });
}


//Used Promises here
const fetchData = (event) => {
    const value = event.target.value;

    infoLogger("Debounced search triggered");

    getData(value)
        .then(data => data.map(item => item.toUpperCase())) // clean
        .then(formattedData => {
            document.getElementById("result").innerText =
                "Results: " + formattedData.join(", ");
        });
};

const throttledLogger = throttle((event) => {
    infoLogger(`Throttled keystroke: ${event.target.value}`);
}, 300);



const debounceField = debounce(fetchData, 1000);
const input = document.getElementById("search");

input.addEventListener("input", debounceField);
input.addEventListener("input", throttledLogger);
