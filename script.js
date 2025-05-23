const products = [
    { id: 1, name: "Notebook", price: 3500 },
    { id: 2, name: "Smartphone", price: 1800 },
    { id: 3, name: "Fone de Ouvido", price: 200 }
  ];
  
  function renderProducts() {
    const container = document.getElementById("productList");
    products.forEach(product => {
      const div = document.createElement("div");
      div.className = "product";
      div.innerHTML = `<strong>${product.name}</strong><br>Preço: R$ ${product.price}`;
      container.appendChild(div);
    });
  }
  
  renderProducts();
  