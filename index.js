let body = document.querySelector("body");

fetch("https://randomuser.me/api/")
.then((res) => res.json())
.then((data) =>{
    let results = data.results;
    let user = results[0];

    let box = document.createElement("div");
    let ism = document.createElement("h2");
    let list = document.createElement("ul");
    let tel = document.createElement("li");
    let email = document.createElement("li");
    let address = document.createElement("li");
    let image = document.createElement("img");

    image.classList.add("img");

    image.src = user.picture.large;
    ism.textContent = `${user.name.first} ${user.name.last}`;
    tel.textContent = user.phone;
    address.textContent = user.location.country;
    email.textContent = user.location.country;

    list.appendChild(tel);
    list.appendChild(email);
    list.appendChild(address);

    box.appendChild(image);
    box.appendChild(ism);
    box.appendChild(list);

    body.appendChild(box);
});





