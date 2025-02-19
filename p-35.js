const books = [
    { name: "Book A", price: 250, quantity: 2 },
    { name: "Book B", price: 300, quantity: 1 },
    { name: "Book C", price: 150, quantity: 3 }
  ];
  
  function totalBookPrice(books) {
    let total = 0;
    for (let book of books) {
      let multi = book.price * book.quantity;
      total = multi + total;
    }
    return total;
  }
  
  const total = totalBookPrice(books);
  console.log("Total book price:", total);
  