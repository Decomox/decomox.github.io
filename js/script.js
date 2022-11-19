document.getElementById("btns").addEventListener("click", function(){
     var oke = confirm("Apakah anda ingin membeli barang ini?")

    if (oke === true){
        var oke = prompt("Masukkan jumlah barang yang ingin dibeli")
        alert("Pesanan anda sebanyak " + oke + " buah akan segera diproses")
    } else {
        alert("Yahh")
    }
});