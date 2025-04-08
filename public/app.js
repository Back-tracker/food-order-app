const items = [
    { name: "Pizza", price: 9.99 },
    { name: "Burger", price: 6.49 },
    { name: "Pasta", price: 8.25 }
  ];
  
  const container = document.getElementById("menu-items");
  if (container) {
    items.forEach(item => {
      const div = document.createElement("div");
      div.className = "bg-white text-black p-4 rounded-lg shadow-md";
      div.innerHTML = `
        <h3 class="text-xl font-bold">${item.name}</h3>
        <p class="text-gray-700">$${item.price}</p>
        <button class="mt-2 bg-pink-500 text-white px-4 py-1 rounded hover:bg-pink-600">Order</button>
      `;
      container.appendChild(div);
    });
  }
  