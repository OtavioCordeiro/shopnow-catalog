const products = [
  { id: 1, name: "Notebook", price: 3500 },
  { id: 2, name: "Smartphone", price: 1800 },
  { id: 3, name: "Fone de Ouvido", price: 200 }
];

function renderProducts(filteredProducts) {
  const container = document.getElementById("productList");
  container.innerHTML = ""; // limpa os produtos antigos

  filteredProducts.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `<strong>${product.name}</strong><br>Preço: R$ ${product.price}`;
    container.appendChild(div);
  });
}

// Função para filtrar os produtos
function filterProductsByPrice(maxPrice) {
  if (maxPrice === "") {
    renderProducts(products);
  } else {
    const filtered = products.filter(p => p.price <= parseFloat(maxPrice));
    renderProducts(filtered);
  }
}

// Primeira renderização com todos os produtos
renderProducts(products);

// Adiciona evento de escuta no input
const priceFilterInput = document.getElementById("priceFilter");
priceFilterInput.addEventListener("input", function () {
  filterProductsByPrice(this.value);
});
