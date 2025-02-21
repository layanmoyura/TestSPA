$(document).ready(function () {
    loadProducts(); 
    resetForm();
});

function loadProducts() {
    $.ajax({
        url: "/Home/GetProducts",
        type: "GET",
        success: function (data) {
            let rows = "";
            $.each(data, function (i, product) {
                rows += `<tr>
                    <td>${product.name}</td>
                    <td>${product.price}</td>
                    <td>${product.stock}</td>
                    <td>
                        <button class="btn btn-warning btn-sm" onclick="editProduct(${product.id}, '${product.name}', ${product.price}, ${product.stock})">Edit</button>
                        <button class="btn btn-danger btn-sm" onclick="deleteProduct(${product.id})">Delete</button>
                    </td>
                </tr>`;
            });
            $("#productTable").html(rows);
        }
    });
}

function editProduct(id, name, price, stock) {
    $("#name").val(name);
    $("#price").val(price);
    $("#stock").val(stock);

    $("#productId").val(id);

    $("#btnSave").text("Update Product");
}

function saveProduct() {
    let product = {
        id: $("#productId").val(),
        name: $("#name").val(),
        price: $("#price").val(),
        stock: $("#stock").val()
    };

    $.ajax({
        url: "/Home/SaveProduct",
        type: "POST",
        data: { product: product },
        success: function () {
            loadProducts();
            resetForm();
            alert("Saved");
        }
    });
}

function deleteProduct(id) {
    $.ajax({
        url: "/Home/DeleteProduct",
        type: "DELETE",
        data: { id: id },
        success: function (response) {
            resetForm();
            loadProducts();
            alert("Deleted")
        }
    });
}

function resetForm() {
    $("#name").val("");
    $("#price").val("");
    $("#stock").val("");
    $("#productId").val("");

    $("#btnSave").text("Add Product");
}
