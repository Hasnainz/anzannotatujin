function move_page() {
    window.location.href = "game.html";
}

function select_chapter(n) {
    sessionStorage.setItem("chapter", n);
    move_page();
}