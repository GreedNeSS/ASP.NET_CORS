const btnLogin = document.querySelector("#loginBtn");
const btnData = document.querySelector("#dataBtn");
const result = document.querySelector("#data");
const login = document.querySelector("#login");
const header = document.querySelector("#header");

btnData.addEventListener("click", async () => {
    try {
        const response = await fetch("https://localhost:7264");

        if (response.ok) {
            const headerTitle = "custom-header";
            result.innerText = await response.text();
            if (response.headers.has(headerTitle)) {
                header.innerText = response.headers.get(headerTitle);
            }
        }
    } catch (e) {
        result.innerText = e.massage;
    }
});

btnLogin.addEventListener("click", async () => {
    try {
        document.cookie = "login=greedness";
        const response = await fetch("https://localhost:7264/login", { credentials: "include" });
        if (response.ok) login.innerText = await response.text();
    } catch (e) {
        result.innerText = e.message;
    }
});