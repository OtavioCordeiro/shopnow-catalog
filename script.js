const products = [
  { id: 1, name: "Notebook", price: 3500 },
  { id: 2, name: "Smartphone", price: 1800 },
  { id: 3, name: "Fone de Ouvido", price: 200 },
  { id: 4, name: "Placa de video", price: 8000 },
  { id: 5, name: "SSD", price: 400 },
  { id: 6, name: "Gabinete gamer", price: 900 },
  { id: 7, name: "Teclado", price: 100 },
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

function filterProductsByPrice(maxPrice) {
  if (maxPrice === "") {
    renderProducts(products);
  } else {
    const filtered = products.filter(p => p.price <= parseFloat(maxPrice));
    renderProducts(filtered);
  }
}

renderProducts(products);

// 🟢 Agora, só filtra ao clicar no botão
// Adicionar um comentário
const button = document.getElementById("btnFilter");
button.addEventListener("click", function () {
  const inputValue = document.getElementById("priceFilter").value;
  filterProductsByPrice(inputValue);
});
