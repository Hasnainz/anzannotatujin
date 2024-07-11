function move_page() {
    window.location.href = "game.html";
}

function select_chapter(n) {
    console.log(n);
    console.log("aaa");
    sessionStorage.setItem("chapter", n);
    move_page();
}