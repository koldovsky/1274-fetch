const form = document.getElementById("footer-form");

async function handleSubmit(event) {
    event.preventDefault();
    const status = document.getElementById("footer-form-status");
    const response = await fetch('https://formspree.io/f/xldrvnbl', {
        method: 'POST',
        body: new FormData(event.target),
        headers: {
            'Accept': 'application/json'
        }
    })
    if (response.ok) {
        status.innerHTML = "Thanks for your submission!";
        form.reset()
    } else {
        status.innerHTML = "Oops! There was a problem submitting your form"
    }
}

form.addEventListener("submit", handleSubmit);
