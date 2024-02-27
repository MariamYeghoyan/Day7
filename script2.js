const products = [
    { id: 1, name: "Eco-friendly Water Bottle", category: "Home", price: 15, tags: ["eco-friendly", "new"] },
    { id: 2, name: "Organic Cotton T-shirt", category: "Apparel", price: 25, tags: ["eco-friendly"] },
    { id: 3, name: "Wireless Headphones", category: "Electronics", price: 200, tags: ["new", "sale"] },
    { id: 4, name: "Recycled Paper Notebook", category: "Office", price: 10, tags: ["eco-friendly"] },
    { id: 5, name: "Fair Trade Coffee", category: "Food", price: 8, tags: ["sale"] },
    { id: 6, name: "Bamboo Toothbrush", category: "Home", price: 5, tags: ["eco-friendly", "new"] },
    { id: 7, name: "Solar-Powered Phone Charger", category: "Electronics", price: 50, tags: ["eco-friendly"] },
  ];
  
  
  const categoryFilter = document.getElementById('category-filter');
  const tagsFilter = document.getElementById('tags-filter');
  const productList = document.getElementById('product-list');
  
  function renderProducts(productsToRender) {
    productList.innerHTML = '';
    if (productsToRender.length === 0) {
      productList.innerHTML = '<p>No products found</p>';
      return;
    }
    productsToRender.forEach(product => {
      const div = document.createElement('div');
      div.classList.add('product');
      div.innerHTML = `<strong>Name:</strong> ${product.name}<br><strong>Category:</strong> ${product.category}<br><strong>Price:</strong> $${product.price}`;
      productList.appendChild(div);
    });
  }
  
  function applyFilters() {
    let filteredProducts = [...products];
    const selectedCategory = categoryFilter.value;
    if (selectedCategory !== 'all') {
      filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
    }
    const selectedTags = Array.from(tagsFilter.querySelectorAll('input[type="checkbox"]:checked')).map(input => input.value);
    if (selectedTags.length > 0) {
      filteredProducts = filteredProducts.filter(product => selectedTags.every(tag => product.tags.includes(tag)));
    }
    renderProducts(filteredProducts);
  }
  
  categoryFilter.addEventListener('change', applyFilters);
  tagsFilter.addEventListener('change', applyFilters);
  
  renderProducts(products);  