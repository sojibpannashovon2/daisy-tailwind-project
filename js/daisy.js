

//First card details
let serial = 1;
document.getElementById('first-product').addEventListener('click', function () {
    // console.log("its working babe")
    // const productName = document.getElementById('product-name').innerText;
    // const productPrice = document.getElementById('product-price').innerText;
    // const productQuantity = document.getElementById('product-quantity').innerText;

    const productName = productDetails('product-name');
    const productPrice = productDetails('product-price');
    const productQuantity = productDetails('product-quantity');
    // console.log(typeof productName, typeof productPrice, typeof productQuantity);
    const totalPrice = parseInt(productPrice) * parseInt(productQuantity);
    // console.log(typeof totalPrice);

    //create element for table
    tableDetails(productName, productPrice, productQuantity, totalPrice)
    serial++;
    // Disabled the button
    // disabledButton('first-product');

})

//Second details
document.getElementById('second-product').addEventListener('click', function (event) {
    // console.log(event.target.parentNode.parentNode.children[0].innerText);
    const pName = event.target.parentNode.parentNode.children[0].innerText;
    const pPrice = event.target.parentNode.parentNode.children[2].children[0].innerText;
    const pQuantity = event.target.parentNode.parentNode.children[3].children[0].innerText;
    console.log(pName, pPrice, pQuantity);
    const totalPrice2 = parseInt(pPrice) * parseInt(pQuantity);
    //create element for table
    tableDetails(pName, pPrice, pQuantity, totalPrice2)
    serial++;
    // Disabled the button
    // disabledButton('first-product');
})

//third details
document.getElementById('third-product').addEventListener('click', function (event) {
    // console.log(event.target.parentNode.parentNode.children[0].innerText);
    const pName = event.target.parentNode.parentNode.children[0].innerText;
    const pPrice = event.target.parentNode.parentNode.children[2].children[0].innerText;
    const pQuantity = event.target.parentNode.parentNode.children[3].children[0].innerText;
    console.log(pName, pPrice, pQuantity);
    const totalPrice2 = parseInt(pPrice) * parseInt(pQuantity);
    //create element for table
    tableDetails(pName, pPrice, pQuantity, totalPrice2)
    serial++;
    // Disabled the button
    // disabledButton('first-product');
})
//fourth details
document.getElementById('fourth-product').addEventListener('click', function (event) {
    // console.log(event.target.parentNode.parentNode.children[0].innerText);
    const pName = event.target.parentNode.parentNode.children[0].innerText;
    const pPrice = event.target.parentNode.parentNode.children[2].children[0].innerText;
    const pQuantity = event.target.parentNode.parentNode.children[3].children[0].innerText;
    console.log(pName, pPrice, pQuantity);
    const totalPrice2 = parseInt(pPrice) * parseInt(pQuantity);
    //create element for table
    tableDetails(pName, pPrice, pQuantity, totalPrice2)
    serial++;
    // Disabled the button
    // disabledButton('first-product');
})







function tableDetails(name, price, quantity, total) {
    const cardDetails = document.getElementById('item-details');
    const tr = document.createElement('tr');
    tr.innerHTML = ` 
                <td>${serial}</th>
                <td>${name}</td>
                <td>${price}</td>
                <td>${quantity}</td>
                <td>${total}</td>`
    cardDetails.appendChild(tr);

    //Total products count
    document.getElementById('total-products-quantity').innerText = serial;
}

function productDetails(id) {
    const name = document.getElementById(id).innerText;
    return name;
}

function disabledButton(id) {
    document.getElementById(id).setAttribute("disabled", true);
}