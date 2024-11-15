console.log("con");

async function apiii() {
    var apiFetch = await fetch('https://dummyjson.com/products')

    var data = await apiFetch.json()

    var dummy = data.products
    console.log(dummy);

    dummy.forEach(product => {
        console.log(product.title);
        console.log(product.price);
        console.log(product.images);
    });
}

apiii()