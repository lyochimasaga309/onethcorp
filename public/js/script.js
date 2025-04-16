document.addEventListener("DOMContentLoaded", function () {
     setTimeout(() => {
    const menuIcon = document.getElementById("menu-icon");
    const sidebar = document.querySelector(".sidebar");

    if (!menuIcon || !sidebar) {
        console.error("Menu icon or sidebar not found!");
        return;
    }

    menuIcon.addEventListener("click", function () {
        sidebar.classList.toggle("open");
    });

document.querySelectorAll('.collapsible').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');

        const content = button.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});

   }, 500);
});
