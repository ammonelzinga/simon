function login(){
    const user_name_el = document.querySelector("#name");
    localStorage.setItem("userName", user_name_el.value);
    window.location.href = "play.html";
}

