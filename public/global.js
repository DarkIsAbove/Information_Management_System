async function logout() {
    const logout = await fetch("/api/auth/logout");
    
    location.reload();
}

async function getStatus() {
    const info = await fetch("/api/status");
    const datas = await info.json();

    const status = {};
    datas.forEach(data => {
        status[data.id] = data.name;
        status[data.name] = data.id;
    });
    global.STATUS = status;
}