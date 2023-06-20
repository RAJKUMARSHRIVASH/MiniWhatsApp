// const baseURL = "https://miniwhatsapp.onrender.com"
const baseURL = "http://localhost:3000"

async function register(e) {
    e.preventDefault();
    const payload = {
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value,
        profilePic: e.target.profilePic.value

    }
    const fetching = await fetch(`${baseURL}/api/user/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });

    const data = await fetching.json();
    alert(data.msg);

}

async function login(e) {
    e.preventDefault();
    const payload = {
        email: e.target.email.value,
        password: e.target.password.value

    }
    const fetching = await fetch(`${baseURL}/api/user/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });

    const data = await fetching.json();
    if (data.msg === "login successful") {
        localStorage.setItem("token", data.token);
        window.location.href = "chat.html"
    }
    alert(data.msg);

}
