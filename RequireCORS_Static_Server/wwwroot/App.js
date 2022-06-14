const result = document.querySelector("#result");
const buttonM = document.querySelector("#btnM");
const buttonH = document.querySelector("#btnH");
const buttonA = document.querySelector("#btnA");
const buttonC = document.querySelector("#btnC");

buttonM.addEventListener("click", async () => {
    try {
        const response = await fetch("https://localhost:7232");

        if (response.ok) {
            resp = await response.text();
            result.innerText = resp;
        }
    } catch (e) {
        result.innerText = e.massage;
    }
})

buttonH.addEventListener("click", async () => {
    try {
        const response = await fetch("https://localhost:7232/home");

        if (response.ok) {
            resp = await response.text();
            result.innerText = resp;
        }
    } catch (e) {
        result.innerText = e.massage;
    }
})

buttonA.addEventListener("click", async () => {
    try {
        const response = await fetch("https://localhost:7232/about");

        if (response.ok) {
            resp = await response.text();
            result.innerText = resp;
        }
    } catch (e) {
        result.innerText = e.massage;
    }
})

buttonC.addEventListener("click", async () => {
    try {
        const response = await fetch("https://localhost:7232/contacts");

        if (response.ok) {
            resp = await response.text();
            result.innerText = resp;
        }
    } catch (e) {
        result.innerText = e.massage;
    }
})