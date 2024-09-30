const products = [
    {
        id: "1",
        title: "Baby Yoda",
        description: "A lovable creature from a galaxy far, far away, Baby Yoda is known for his adorable expressions and mysterious Force abilities. The perfect companion for your space adventures.",
        image: "img/baby-yoda.svg",
        price: 10.99
    },
    {
        id: "2",
        title: "Banana",
        description: "A quirky and fun-loving character, Banana is always ready for a good time. Whether it’s in a tropical adventure or a silly situation, Banana brings smiles everywhere.",
        image: "img/banana.svg",
        price: 8.49
    },
    {
        id: "3",
        title: "Street Artist Girl",
        description: "This stylish street artist is fearless and expressive, showcasing her artistic flair with bold graffiti and a cool attitude. Perfect for those who appreciate creativity and individuality.",
        image: "img/girl.svg",
        price: 12.75
    },
    {
        id: "4",
        title: "Viking Warrior",
        description: "A fierce Viking warrior, ready for battle. With a magical sword and a helmet adorned with wings, she strikes fear into her enemies and inspires her allies.",
        image: "img/viking.svg",
        price: 15.99
    }
];

function renderProducts(products) {
    let productsHtml = '';
    for (const product of products) {
        productsHtml += `
            <article class="product-card">
                <img src="${product.image}" alt="${product.title}">
                <h3 class="product-card__h3">${product.title}</h3>
                <p class="product-card__description">${product.description}</p>
                <div class="product-card__buttons">
                    <button class="product-card__buttons-info button button-card">
                        Info
                    </button>
                    <button class="product-card__buttons-buy button button-card">
                        Buy - $${product.price}
                    </button>
                </div>
            </article>
        `;
    }
    const productsContainer = document.querySelector('.products__list');
    productsContainer.innerHTML = productsHtml;
}

renderProducts(products);