const themeBtn = document.getElementById("theme-btn");


if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

themeBtn.onclick = () => {
    document.body.classList.toggle("dark");


    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
};
