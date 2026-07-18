// 1. Your data array (similar to your state or props in Next.js)
const products = [
    { id: 1, name: "Wireless Mouse", price: 29.99 },
    { id: 2, name: "Mechanical Keyboard", price: 89.99 },
    { id: 3, name: "Gaming Monitor", price: 249.99 }
];

// 2. Select the parent container from the HTML
const container = document.getElementById('product-list');

// 3. Map over the array to generate HTML strings
const htmlTemplates = products.map(product => {
    return `
        <div class="product-card" id="prod-${product.id}">
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
        </div>
    `;
});

// 4. Join the array of strings and inject them into the DOM
container.innerHTML = htmlTemplates.join('');
