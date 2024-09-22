function addItem() {
    document.getElementById("items").innerHTML = document.getElementById("items").innerHTML+'<div class="card mb-3"><div class="card-body"><div class="d-flex justify-content-between"><div class="d-flex flex-row align-items-center"><div><img src="./maybe.jpg" class="img-fluid rounded-3" alt="Shopping item" style="width: 65px;"></div><div class="ms-3"><h5>Produto Surpresa </h5><p class="small mb-0">512GB, Navy Blue</p></div></div><div class="d-flex flex-row align-items-center"><div style="width: 50px;"><h5 class="fw-normal mb-0">1</h5></div><div style="width: 80px;"><h5 class="mb-0">$1900</h5></div><a href="#!" style="color: #cecece;"><i class="fas fa-trash-alt"></i></a></div></div></div></div>'
};

//"item" representa o parâmetro dentro da função, que é definido pela ordem de cada item no carrinho
//exemplo: para o primeiro item a função será chamada da seguinte forma: addQuantity(0)
function addQuantity (item) {
    console.log("função para adicionar quantidade")
}