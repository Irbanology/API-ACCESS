// console.log("Con");

// var apiData  = {}
// fetch('https://dummyjson.com/products')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data); // Display the retrieved data in the console

//   })
//   .catch(error => {
//     console.error('Error fetching data:', error);
//   });



// console.log("Con");

// var apiData = {};  // Declare the variable to store data

// fetch('https://dummyjson.com/products')
//   .then(response => response.json())
//   .then(data => {
//     apiData = data;  // Save the fetched data into the apiData variable
//     console.log(apiData);  // Display the entire data in the console
//   })
//   .catch(error => {
//     console.error('Error fetching data:', error);
//   });

console.log("Con");

var apiData = [];  // Declare the variable to store data

fetch('https://dummyjson.com/products')
    .then(response => response.json())
    .then(data => {
        apiData = data;  // Save the fetched data into the apiData variable
        console.log(apiData);  // Display the entire data in the console

        // Assuming the API returns an array of products in 'data.products'
        const products = apiData.products;
        // const price = apiData.price
        console.log(typeof (products));
        
        // Access and log the title of each product
        for (let i = 0; i < apiData.lenght; i++) {
            console.log(apiData[i]);
            // console.log();
        }

        // products.forEach(product => {
        //     console.log(product.images);
        //     console.log(product.title);  // Log the title of each product
        //     console.log(product.price);
        //     console.log(product.description);
        // });

    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
