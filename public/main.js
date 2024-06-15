async function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;

    const username = form.username.value;
    const password = form.password.value;

    const login = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "same-origin",
        body: JSON.stringify({username,password})
    });

    const response = await login.json();


    if (login.status == 200)
        return location.assign("/view/dashboard");

    alert(response.message);
}