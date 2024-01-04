function hitungLuas() {
    const alas = Number(document.getElementById("input-alas").value);
    const tinggi = Number(document.getElementById("input-tinggi").value);
  
    const luas = 0.5 * (alas * tinggi);
  
    document.getElementById("hasil").innerText = luas.toFixed(2);
  }
  
  function hitungKeliling() {
    var sisisatu = Number(document.getElementById("input-sisi1").value);
    var sisidua = Number(document.getElementById("input-sisi2").value);
    var sisitiga = Number(document.getElementById("input-sisi3").value);
  
    var keliling = sisisatu + sisidua + sisitiga;
    document.getElementById("hasil").innerText = keliling.toFixed(2);
  }
  
  function InputLuas() {
    document.getElementById("inputkan-keliling").style.display = "none";
    document.getElementById("inputkan-luas").style.display = "flex";
    document.getElementById("hitung-button1").style.display = "none";
    document.getElementById("hitung-button").style.display = "flex";
    document.getElementById("hasil-luas").style.display = "block";
  }
  function InputKeliling() {
    document.getElementById("inputkan-keliling").style.display = "flex";
    document.getElementById("inputkan-luas").style.display = "none";
    document.getElementById("hitung-button1").style.display = "flex";
    document.getElementById("hitung-button").style.display = "none";
  }
  
  function resetFormluas() {
    document.getElementById("input-alas").value = "";
    document.getElementById("input-tinggi").value = "";
    document.getElementById("hasil").innerText = " ";
  }
  
  function resetFormkeliling() {
    document.getElementById("input-sisi1").value = "";
    document.getElementById("input-sisi2").value = "";
    document.getElementById("input-sisi3").value = "";
    document.getElementById("hasil").innerText = "";
  }
  document
    .getElementById("reset-button")
    .addEventListener("click", resetFormkeliling);
  //
  document
    .getElementById("reset-button")
    .addEventListener("click", resetFormluas);
  //
  document.getElementById("luas-button").addEventListener("click", InputLuas);
  //
  document
    .getElementById("keliling-button")
    .addEventListener("click", InputKeliling);
  //
  document.getElementById("hitung-button").addEventListener("click", hitungLuas);
  //
  document
    .getElementById("hitung-button1")
    .addEventListener("click", hitungKeliling);