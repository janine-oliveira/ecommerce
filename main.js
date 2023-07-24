var favoritos = [];
var carrinho = [];


function curtir(id) {
  var index = favoritos.indexOf(id);
  

  if (index === -1) {

    favoritos.push(id);
    document.getElementById("curtir" + id).style.color = "red"; 
  

  }else{
    
    favoritos.splice(index, 1);
    document.getElementById("curtir" + id).style.color = "#9d2091"; 
  }

}

function adicionarModal(favoritos){
   
  var listaFavoritos = document.getElementById("listaFavoritos");

  listaFavoritos.innerHTML = "";
  
  for (var i = 0; i < favoritos.length; i++) {
    var favoritoDiv = document.getElementById(favoritos[i]).cloneNode(true);
    listaFavoritos.appendChild(favoritoDiv);
  }

}

function carro(id) {

  var index = carrinho.indexOf(id);
  if (index === -1) {

    carrinho.push(id);
    document.getElementById("carrinho" + id).style.color = "blue"; 
  } else {
    
    carrinho.splice(index, 1);
    document.getElementById("carrinho" + id).style.color = "#9d2091"; 
  }
  
}

function adicionarModalCarro(carrinho){
   
  var listaCarro = document.getElementById("carrinhoCompras");

  listaCarro.innerHTML = "";
  
  for (var i = 0; i < carrinho.length; i++) {
    var carroDiv = document.getElementById(carrinho[i]).cloneNode(true);
    listaCarro.appendChild(carroDiv);
  }

}

function mostrarFeminino() {
    
    for (var i = 1; i <= 6; i++) {
      document.getElementById('f'+i).style.display = "block";
    }
    
    for (var i = 1; i <= 6; i++) {
        
        document.getElementById('m'+i).style.display = "none";
        
    }

    for (var i = 1; i <= 6; i++) {
        document.getElementById('i'+i).style.display = "none";
    }
}

function mostrarMasculino() {
    for (var i = 1; i <= 6; i++) {
      document.getElementById('f'+i).style.display = "none";
    }
    
    for (var i = 1; i <= 6; i++) {
        
        document.getElementById('m'+i).style.display = "block";
        
    }

    for (var i = 1; i <= 6; i++) {
        document.getElementById('i'+i).style.display = "none";
    }
}

function mostrarInfantil() {
    for (var i = 1; i <= 6; i++) {
      document.getElementById('f'+i).style.display = "none";
      console.log('f'+i)
    }
    
    for (var i = 1; i <= 6; i++) {
        
        document.getElementById('m'+i).style.display = "none";
        
    }

    for (var i = 1; i <= 6; i++) {
        document.getElementById('i'+i).style.display = "block";
    }
}

function mostrarTodos(){
  for (var i = 1; i <= 6; i++) {
    document.getElementById('f'+i).style.display = "block";
  }
  
  for (var i = 1; i <= 6; i++) {
      
      document.getElementById('m'+i).style.display = "block";
      
  }

  for (var i = 1; i <= 6; i++) {
      document.getElementById('i'+i).style.display = "blck";
  }
}

function pesquisarPalavra() {
 
  var palavraPesquisada = document.getElementById("text").value.toLowerCase();

  var divsCol = document.querySelectorAll(".row .col-md-6");

  for (var i = 0; i < divsCol.length; i++) {

    var divText = divsCol[i].textContent.toLowerCase();

    if (divText.includes(palavraPesquisada)) {
      divsCol[i].style.display = "block";
    } else {
      divsCol[i].style.display = "none";
    }
  }
}

function calcularValorTotal() {
  var precoProduto = parseFloat(document.getElementById("precoProduto").textContent);
  console.log(precoProduto);
  var quantidade = parseInt(document.getElementById("quantidade").value);
  console.log(quantidade)
  var valorTotal = precoProduto * quantidade;
  document.getElementById("valorTotal").textContent = valorTotal.toFixed(2);
  console.log(valorTotal);
}