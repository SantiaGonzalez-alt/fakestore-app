document.addEventListener("DOMContentLoaded", () => {
    const apiUrl = "https://fakestoreapi.com/products";
    
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            let productsContainer = document.getElementById("products");

            data.forEach(product => {
                productsContainer.innerHTML += `
                    <div class="col-md-4">
                        <div class="card m-3 shadow-sm">
                            <img src="${product.image}" class="card-img-top p-3" alt="${product.title}" style="height: 250px; object-fit: contain;">
                            <div class="card-body">
                                <h5 class="card-title">${product.title}</h5>
                                <p class="card-text">${product.description.substring(0, 100)}...</p>
                                <p class="fw-bold">$${product.price}</p>
                                <button class="btn btn-primary">Comprar</button>
                            </div>
                        </div>
                    </div>
                `;
            });
        })
        .catch(error => console.error("Error al obtener productos:", error));
});
