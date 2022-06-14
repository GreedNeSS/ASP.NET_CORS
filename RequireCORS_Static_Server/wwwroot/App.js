const result = document.querySelector("#result");
const button = document.querySelector("#btn");

button.addEventListener("click", async () => {
    try {
        const response = await fetch("https://localhost:7148/");

        if (response.ok) {
            resp = await response.json();
            result.innerText = resp.message;
        }
    } catch (e) {
        result.innerText = e.massage;
    }
})