document.querySelectorAll('a[href^="#Contact"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const headerContent = document.querySelector(".header-content");
    const profileImage = document.querySelector(".profile-image");
    headerContent.style.animation = "slideUp 1.5s ease-out forwards 0.5s";
    profileImage.style.animation = "slideUp 1.5s ease-out forwards";

    new Typed("#typed-text", {
        strings: [
            " Hi, Im a Web Developer",
        ], // Text strings to display
        typeSpeed: 50, // Typing speed in milliseconds
        backSpeed: 30, // Backspacing speed
        backDelay: 1000, // Pause before deleting
        startDelay: 500, // Delay before typing starts
        loop: true, // Keep looping the text
    });
});
// Open the modal
function openContactModal() {
    document.getElementById('contactModal').classList.add('show');
}

// Close the modal
function closeContactModal(event) {
    // Prevent modal from closing if clicking inside the modal content
    if (event) {
        event.stopPropagation();
    }
    document.getElementById('contactModal').classList.remove('show');
}
