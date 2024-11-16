console.log("con");


window.onload = function () {
    var storedName = sessionStorage.getItem("username");
    console.log(storedName);
    var namee = document.getElementById("name");
    console.log(namee.children[0]);
    console.log(namee.children[1]);

    if (storedName) {
        namee.children[0].innerHTML = `Hi! ${storedName} 👋 `
        namee.children[1].innerHTML = `Welcome to the SMIT student portal. You can find all your courses listed below`

    } else {
    window.location.href = "./SIGN-UP/Register.html";
    // namee.innerText = "Welcome, Guest!";
    }
};

var lengt = 10
var skip = 0
async function load() {
    lengt += 10
    console.log("Dabgya");
    if (lengt > 30) {
        lengt = 30
    }
    await apiii()
}
async function apiii() {
    var apiFetch = await fetch(`https://dummyjson.com/products?limit=${lengt}&skip=${skip}`)

    var data = await apiFetch.json()

    var dummy = data.products
    console.log(dummy.length);
    skip += lengt
    var main = document.getElementById('parent')
    console.log(main);

    // for(var i=0; i<dummy.lenght)

    dummy.forEach(product => {
        console.log(product.title);
        console.log(product.price);
        console.log(product.images);

        var card = document.createElement('div')
        card.classList.add('card', 'widi', 'cardItem')
        main.appendChild(card)

        var img = document.createElement('img')
        img.classList.add('card-img-top')
        img.setAttribute('src', product.images)
        card.appendChild(img)

        var diiiv = document.createElement('div')
        diiiv.classList.add("card-body")
        card.appendChild(diiiv)

        var h5 = document.createElement('h3')
        h5.classList.add('card-body')
        h5.innerHTML = product.title
        diiiv.appendChild(h5)

        var desc = document.createElement('p')
        desc.classList.add('card-text')
        desc.innerHTML = product.description
        diiiv.appendChild(desc)

        var price = document.createElement('a')
        price.setAttribute('href', '#')
        price.innerHTML = ` $ ${product.price}`
        price.classList.add('btn', 'btn-outline-dark')
        diiiv.appendChild(price)

    });
    console.log(dummy.length);

}

apiii()

