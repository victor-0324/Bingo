const botaoGerar = document.querySelector("div.botao button")

var numerosTabela = document.querySelector("button.btn01")
var numerosTabela2 = document.querySelector("button.btn02")
var numerosTabela3 = document.querySelector("button.btn03")
var numerosTabela4 = document.querySelector("button.btn04")
var numerosTabela5 = document.querySelector("button.btn05")
var numerosTabela6 = document.querySelector("button.btn06")
var numerosTabela7 = document.querySelector("button.btn07")
var numerosTabela8 = document.querySelector("button.btn08")
var numerosTabela9 = document.querySelector("button.btn09")
var numerosTabela10 = document.querySelector("button.btn10")
var numerosTabela11 = document.querySelector("button.btn11")
var numerosTabela12 = document.querySelector("button.btn12")
var numerosTabela13 = document.querySelector("button.btn13")
var numerosTabela14 = document.querySelector("button.btn14")
var numerosTabela15 = document.querySelector("button.btn15")
var numerosTabela16 = document.querySelector("button.btn16")
var numerosTabela17 = document.querySelector("button.btn17")
var numerosTabela18 = document.querySelector("button.btn18")
var numerosTabela19 = document.querySelector("button.btn19")
var numerosTabela20 = document.querySelector("button.btn20")
var numerosTabela21 = document.querySelector("button.btn21")
var numerosTabela22 = document.querySelector("button.btn22")
var numerosTabela23 = document.querySelector("button.btn23")
var numerosTabela24 = document.querySelector("button.btn24")


numeros0 = ['11', '08', '02']
numeros1 = ['04', '07', '06']
numeros2 = ['03', '13', '09']
numeros3 = ['05', '01', '12']
numeros4 = ['10', '14', '15']

numeros5 = ['16', '30', '17']
numeros6 = ['19', '28', '18']
numeros7 = ['21', '22', '24']
numeros8 = ['20', '26', '27']
numeros9 = ['25', '29', '23']

numeros10 = ['31', '39', '32', '45']
numeros11 = ['44', '35', '33', '36', '38']
numeros12 = ['52', '50', '54'] /*esse*/
numeros13 = ['40', '34', '42']
numeros14 = ['43', '41', '37']

numeros15 = ['46', '53', '57']

numeros16 = ['47', '56', '58']
numeros17 = ['71', '67', '69'] /*esse*/
numeros18 = ['59', '48', '51']
numeros19 = ['55', '49', '60']
numeros20 = ['73', '75', '61']
numeros21 = ['65', '72', '64']
numeros22 = ['68', '74', '66']
numeros23 = ['76']
numeros24 = ['62', '70', '63']

var i = 0;
botaoGerar.addEventListener("click", function click(e) {
    numerosTabela.innerHTML = numeros0[Math.floor(Math.random() * numeros0.length)]
    numerosTabela2.innerHTML = numeros1[Math.floor(Math.random() * numeros1.length)]
    numerosTabela3.innerHTML = numeros2[Math.floor(Math.random() * numeros2.length)]
    numerosTabela4.innerHTML = numeros3[Math.floor(Math.random() * numeros3.length)]
    numerosTabela5.innerHTML = numeros4[Math.floor(Math.random() * numeros4.length)]
    numerosTabela6.innerHTML = numeros5[Math.floor(Math.random() * numeros5.length)]
    numerosTabela7.innerHTML = numeros6[Math.floor(Math.random() * numeros6.length)]
    numerosTabela8.innerHTML = numeros7[Math.floor(Math.random() * numeros7.length)]
    numerosTabela9.innerHTML = numeros8[Math.floor(Math.random() * numeros8.length)]
    numerosTabela10.innerHTML = numeros9[Math.floor(Math.random() * numeros9.length)]
    numerosTabela11.innerHTML = numeros10[Math.floor(Math.random() * numeros10.length)]
    numerosTabela12.innerHTML = numeros11[Math.floor(Math.random() * numeros11.length)]
    numerosTabela13.innerHTML = numeros12[Math.floor(Math.random() * numeros12.length)]
    numerosTabela14.innerHTML = numeros13[Math.floor(Math.random() * numeros13.length)]
    numerosTabela15.innerHTML = numeros14[Math.floor(Math.random() * numeros14.length)]
    numerosTabela16.innerHTML = numeros15[Math.floor(Math.random() * numeros15.length)]
    numerosTabela17.innerHTML = numeros16[Math.floor(Math.random() * numeros16.length)]
    numerosTabela18.innerHTML = numeros17[Math.floor(Math.random() * numeros17.length)]
    numerosTabela19.innerHTML = numeros18[Math.floor(Math.random() * numeros18.length)]
    numerosTabela20.innerHTML = numeros19[Math.floor(Math.random() * numeros19.length)]
    numerosTabela21.innerHTML = numeros20[Math.floor(Math.random() * numeros20.length)]
    numerosTabela22.innerHTML = numeros21[Math.floor(Math.random() * numeros21.length)]
    numerosTabela23.innerHTML = numeros22[Math.floor(Math.random() * numeros22.length)]
    numerosTabela24.innerHTML = numeros23[Math.floor(Math.random() * numeros23.length)] && numeros24[Math.floor(Math.random() * numeros24.length)]
    i++;
    botaoGerar.removeEventListener('click', click);
});