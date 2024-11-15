console.log("con");

async function apiii() {
    var apiFetch = await fetch('https://dummyjson.com/products')

    var data = await apiFetch.json()

    var dummy = data.products
    console.log(dummy);

    var main = document.getElementById('parent')
    console.log(main);


    dummy.forEach(product => {
        console.log(product.title);
        console.log(product.price);
        console.log(product.images);
        var card = document.createElement('div')
        card.classList.add('card', 'widi')
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
        price.classList.add('btn', 'btn-primary')
        diiiv.appendChild(price)

    });
}

apiii()