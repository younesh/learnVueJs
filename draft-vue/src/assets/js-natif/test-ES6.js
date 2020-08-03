function rss(p) {
    console.log(" et bien voila ça dit : " + p);
}

function resolveAfter2Seconds() {
    return new Promise(rss => {
        setTimeout(() => {
            rss('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    console.log("fin de script");

    // expected output: 'resolved'
}

asyncCall();

// -----------------------------
function successCallback(res) {
    console.log(" ..... L'opération a réussi avec le message : " + res);
}


function failureCallback(erreur) {
    console.error("L'opération a échoué avec le message : " + erreur);
}

function faireQqc() {
    return new Promise((successCallback, failureCallback) => {
        console.log("C'est fait");
        // réussir une fois sur deux
        if (Math.random() > .5) {
            successCallback("Réussite");
        } else {
            failureCallback("Échec");
        }
    })
}

const promise = faireQqc();
promise.then(successCallback, failureCallback);


///------------------------

const getUsers = async function() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const json = await response.json()

    return json
}

// Call the getUsers function and log the response
getUsers().then(response => console.log(response))

//--------------
function* generatorFunction() {
    yield 'Neo'
    yield 'Morpheus'
    yield 'Trinity'

    return 'The Oracle'
}

const generator = generatorFunction()

for (const item of generator) {
    console.log(item.done);
}

//-----------
function removeProperty(obj, prop) {
    if (obj.hasOwnProperty(prop)) {
        delete obj.prop;
        return true;
    } else {
        return false;
    }
}