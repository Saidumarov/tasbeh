let count = 0
function on() {
    count++
    document.getElementById("son" ).innerHTML = count;


    if (count > 0) {
        let h1 = document.querySelector("h1")
        h1.textContent = "Subhanalloh"
    }

    if (count > 33) {
        let h1 = document.querySelector("h1")
        h1.textContent = "Alhamdulillah"
    }

    if (count > 66) {
        let h1 = document.querySelector("h1")
        h1.textContent = "Allohu Akbar"
    }

    if( count === 99){
        count = 0;
        document.getElementById("son").innerHTML = count;
    }
}

function of(){
    count -- 
    document.getElementById("son").innerHTML =count;
    if (count === -1) {
        count = 0;
        document.getElementById("son").innerHTML = count;

        let h1 = document.querySelector("son")
        h1.textContent = "Bismillah"
        
    }

 

    
    if (count < 99) {
        let h1 = document.querySelector("h1")
        h1.textContent = "Allohu Akbar"
    }

    if (count < 66) {
        let h1 = document.querySelector("h1")
        h1.textContent = "Alhamdulillah"
    }

    if (count < 33) {
        let h1 = document.querySelector("h1")
        h1.textContent = "Subhanalloh"
    }

 
}

function res() {
    count = 0 
    document.getElementById("son").innerHTML = count;
    if (count === 0 ) {
        let h1 = document.querySelector("h1")
        h1.textContent = "Bismillah"
    }
}

// 22


function ona() {
    count++
    document.getElementById("num" ).innerHTML = count;


    if (count > 0) {
        let h1 = document.querySelector("h1")
        h1.textContent = "Subhanalloh"
    }

    if (count > 33) {
        let h1 = document.querySelector("h1")
        h1.textContent = "Alhamdulillah"
    }

    if (count > 66) {
        let h1 = document.querySelector("h1")
        h1.textContent = "Allohu Akbar"
    }

    if( count === 99){
        count = 0;
        document.getElementById("num").innerHTML = count;
    }
}

function ofa(){
    count -- 
    document.getElementById("num").innerHTML =count;
    if (count === -1) {
        count = 0;
        document.getElementById("num").innerHTML = count;

        let h1 = document.querySelector("num")
        h1.textContent = "Bismillah"
        
    }

 

    
    if (count < 99) {
        let h1 = document.querySelector("h1")
        h1.textContent = "Allohu Akbar"
    }

    if (count < 66) {
        let h1 = document.querySelector("h1")
        h1.textContent = "Alhamdulillah"
    }

    if (count < 33) {
        let h1 = document.querySelector("h1")
        h1.textContent = "Subhanalloh"
    }

 
}

function resa() {
    count = 0 
    document.getElementById("num").innerHTML = count;
    if (count === 0 ) {
        let h1 = document.querySelector("h1")
        h1.textContent = "Bismillah"
    }
}
