document.getElementById("ami-btn").addEventListener("click", function () {
  document.body.style.backgroundColor = "green";
  const inputArea = document.getElementById("text-area").value;
  const textGet = document.getElementById("text-pabo").innerText;

  const container = document.getElementById("container");
  const p = document.createElement("p");
  p.innerText = "HI this is hero of bangladesh";
  container.appendChild(p);
});

document
  .getElementById("products-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const brand = document.getElementById("brand-input").value;
    const price = document.getElementById("price").value;
    const product = document.getElementById("product").value;
    const containerDiv = document.getElementById("container-div");
    const div = document.createElement("div");
    div.innerHTML = `
    <h2>Product Name: ${product}</h2>
<h2>Brand Name: ${brand}</h2>
<p>Product Price: ${price}</p>
    `;

    containerDiv.appendChild(div);
  });
