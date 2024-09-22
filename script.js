function enviar() {
    let confirmacao = confirm("Deseja realmente enviar esse item?")
    if (confirmacao) {
        return;
    } else {
        alert("continue escrevendo")
    }

}

let a = "<div>OLA MUNDO</div>"
function criar() {
    document.getElementById("cards").innerHTML = document.getElementById("cards").innerHTML+a
}

let p = document.getElementsByTagName("p");
p[0].innerHTML = "<p>Este é outro paragrafo</p><p>Mais um</p>";
p[0].style.color = "red";
p[0].innerText.toLocaleUpperCase();

let estilo = document.getElementsByClassName("estilo");

for (let i = 0; i < estilo.length; i++) {
    estilo[i].style.background = "blue";
    estilo[i].style.color = "white";
    estilo[i].innerText = estilo[i].innerText.toUpperCase()
}

let span = document.querySelector("a");