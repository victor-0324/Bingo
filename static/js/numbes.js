//       BOTAO INICIAR
const botaoSortear = document.querySelector("div.box button")
var numeroPrincipal = document.querySelector("div.box h2")

//     TABELA     >> g <<
var numerosTabela = document.querySelector("table.box button.btn1")
var numerosTabela1 = document.querySelector("table.box button.btn2")
var numerosTabela2 = document.querySelector("table.box button.btn3")
var numerosTabela3 = document.querySelector("table.box button.btn4")
var numerosTabela4 = document.querySelector("table.box button.btn5")
var numerosTabela5 = document.querySelector("table.box button.btn6")
var numerosTabela6 = document.querySelector("table.box button.btn7")
var numerosTabela7 = document.querySelector("table.box button.btn8")
var numerosTabela8 = document.querySelector("table.box button.btn9")
var numerosTabela9 = document.querySelector("table.box button.btn10")
var numerosTabela10 = document.querySelector("table.box button.btn11")
var numerosTabela11 = document.querySelector("table.box button.btn12")
var numerosTabela12 = document.querySelector("table.box button.btn13")
var numerosTabela13 = document.querySelector("table.box button.btn14")
var numerosTabela14 = document.querySelector("table.box button.btn15")

//     TABELA     >> N <<
var numerosTabela15 = document.querySelector("table.box button.btn16")
var numerosTabela16 = document.querySelector("table.box button.btn17")
var numerosTabela17 = document.querySelector("table.box button.btn18")
var numerosTabela18 = document.querySelector("table.box button.btn19")
var numerosTabela19 = document.querySelector("table.box button.btn20")
var numerosTabela20 = document.querySelector("table.box button.btn21")
var numerosTabela21 = document.querySelector("table.box button.btn22")
var numerosTabela22 = document.querySelector("table.box button.btn23")
var numerosTabela23 = document.querySelector("table.box button.btn24")
var numerosTabela24 = document.querySelector("table.box button.btn25")
var numerosTabela25 = document.querySelector("table.box button.btn26")
var numerosTabela26 = document.querySelector("table.box button.btn27")
var numerosTabela27 = document.querySelector("table.box button.btn28")
var numerosTabela28 = document.querySelector("table.box button.btn29")
var numerosTabela29 = document.querySelector("table.box button.btn30")

//      TABELA     >> E <<  
var numerosTabela30 = document.querySelector("table.box button.btn31")
var numerosTabela31 = document.querySelector("table.box button.btn32")
var numerosTabela32 = document.querySelector("table.box button.btn33")
var numerosTabela33 = document.querySelector("table.box button.btn34")
var numerosTabela34 = document.querySelector("table.box button.btn35")
var numerosTabela35 = document.querySelector("table.box button.btn36")
var numerosTabela36 = document.querySelector("table.box button.btn37")
var numerosTabela37 = document.querySelector("table.box button.btn38")
var numerosTabela38 = document.querySelector("table.box button.btn39")
var numerosTabela39 = document.querySelector("table.box button.btn40")
var numerosTabela40 = document.querySelector("table.box button.btn41")
var numerosTabela41 = document.querySelector("table.box button.btn42")
var numerosTabela42 = document.querySelector("table.box button.btn43")
var numerosTabela43 = document.querySelector("table.box button.btn44")
var numerosTabela44 = document.querySelector("table.box button.btn45")

//      TABELA     >> T << 
var numerosTabela45 = document.querySelector("table.box button.btn46")
var numerosTabela46 = document.querySelector("table.box button.btn47")
var numerosTabela47 = document.querySelector("table.box button.btn48")
var numerosTabela48 = document.querySelector("table.box button.btn49")
var numerosTabela49 = document.querySelector("table.box button.btn50")
var numerosTabela50 = document.querySelector("table.box button.btn51")
var numerosTabela51 = document.querySelector("table.box button.btn52")
var numerosTabela52 = document.querySelector("table.box button.btn53")
var numerosTabela53 = document.querySelector("table.box button.btn54")
var numerosTabela54 = document.querySelector("table.box button.btn55")
var numerosTabela55 = document.querySelector("table.box button.btn56")
var numerosTabela56 = document.querySelector("table.box button.btn57")
var numerosTabela57 = document.querySelector("table.box button.btn58")
var numerosTabela58 = document.querySelector("table.box button.btn59")
var numerosTabela59 = document.querySelector("table.box button.btn60")

//      TABELA     >> + << 
var numerosTabela60 = document.querySelector("table.box button.btn61")
var numerosTabela61 = document.querySelector("table.box button.btn62")
var numerosTabela62 = document.querySelector("table.box button.btn63")
var numerosTabela63 = document.querySelector("table.box button.btn64")
var numerosTabela64 = document.querySelector("table.box button.btn65")
var numerosTabela65 = document.querySelector("table.box button.btn66")
var numerosTabela66 = document.querySelector("table.box button.btn67")
var numerosTabela67 = document.querySelector("table.box button.btn68")
var numerosTabela68 = document.querySelector("table.box button.btn69")
var numerosTabela69 = document.querySelector("table.box button.btn70")
var numerosTabela70 = document.querySelector("table.box button.btn71")
var numerosTabela71 = document.querySelector("table.box button.btn72")
var numerosTabela72 = document.querySelector("table.box button.btn73")
var numerosTabela73 = document.querySelector("table.box button.btn74")
var numerosTabela74 = document.querySelector("table.box button.btn75")

let numeros = ['0', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17',
    '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34',
    '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51',
    '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68',
    '69', '70', '71', '72', '73', '74', '75',
]

botaoSortear.addEventListener("click", () => {
    // GLOBO GIRANDO   
    let painel = Math.floor(Math.random() * numeros.length)
    numeross = numeros.splice(painel, 1)
    const bolasChamadas = numeross

    //  ESTRUTURA DE DECISAO LETRA G
    if (bolasChamadas == '01') {
        numeroPrincipal.innerHTML = 'B' + ' ' + bolasChamadas
        numerosTabela.innerHTML = bolasChamadas
    }
    if (bolasChamadas == '02') {
        numeroPrincipal.innerHTML = 'B' + ' ' + bolasChamadas
        numerosTabela1.innerHTML = bolasChamadas
    }
    if (bolasChamadas == '03') {
        numeroPrincipal.innerHTML = 'B' + ' ' + bolasChamadas
        numerosTabela2.innerHTML = bolasChamadas
    }
    if (bolasChamadas == '04') {
        numeroPrincipal.innerHTML = 'B' + ' ' + bolasChamadas
        numerosTabela3.innerHTML = bolasChamadas
    }
    if (bolasChamadas == '05') {
        numeroPrincipal.innerHTML = 'B' + ' ' + bolasChamadas
        numerosTabela4.innerHTML = bolasChamadas
    }
    if (bolasChamadas == '06') {
        numeroPrincipal.innerHTML = 'B' + ' ' + bolasChamadas
        numerosTabela5.innerHTML = bolasChamadas
    }
    if (bolasChamadas == '07') {
        numeroPrincipal.innerHTML = 'B' + ' ' + bolasChamadas
        numerosTabela6.innerHTML = bolasChamadas
    }
    if (bolasChamadas == '08') {
        numeroPrincipal.innerHTML = 'B' + ' ' + bolasChamadas
        numerosTabela7.innerHTML = bolasChamadas
    }
    if (bolasChamadas == '09') {
        numeroPrincipal.innerHTML = 'B' + ' ' + bolasChamadas
        numerosTabela8.innerHTML = bolasChamadas
    }
    if (bolasChamadas == '10') {
        numeroPrincipal.innerHTML = 'B' + ' ' + bolasChamadas
        numerosTabela9.innerHTML = bolasChamadas
    }
    if (bolasChamadas == '11') {
        numeroPrincipal.innerHTML = 'B' + ' ' + bolasChamadas
        numerosTabela10.innerHTML = bolasChamadas
    }
    if (bolasChamadas == '12') {
        numeroPrincipal.innerHTML = 'B' + ' ' + bolasChamadas
        numerosTabela11.innerHTML = bolasChamadas
    }
    if (bolasChamadas == '13') {
        numeroPrincipal.innerHTML = 'B' + ' ' + bolasChamadas
        numerosTabela12.innerHTML = bolasChamadas
    }
    if (bolasChamadas == '14') {
        numeroPrincipal.innerHTML = 'B' + ' ' + bolasChamadas
        numerosTabela13.innerHTML = bolasChamadas
    }
    if (bolasChamadas == '15') {
        numeroPrincipal.innerHTML = 'B' + ' ' + bolasChamadas
        numerosTabela14.innerHTML = bolasChamadas
    }

    //  ESTRUTURA DE DECISAO LETRA N
    if (bolasChamadas == '16') {
        numeroPrincipal.innerHTML = 'I' + ' ' + bolasChamadas
        numerosTabela15.innerHTML = bolasChamadas
    }
    if (bolasChamadas == '17') {
        numeroPrincipal.innerHTML = 'I' + ' ' + bolasChamadas
        numerosTabela16.innerHTML = bolasChamadas
    }
    if (bolasChamadas == '18') {
        numeroPrincipal.innerHTML = 'I' + ' ' + bolasChamadas
        numerosTabela17.innerHTML = bolasChamadas
    }
    if (bolasChamadas == '19') {
        numeroPrincipal.innerHTML = 'I' + ' ' + bolasChamadas
        numerosTabela18.innerHTML = bolasChamadas
    }
    if (bolasChamadas == '20') {
        numeroPrincipal.innerHTML = 'I' + ' ' + bolasChamadas
        numerosTabela19.innerHTML = bolasChamadas
    }
    if (bolasChamadas == '21') {
        numeroPrincipal.innerHTML = 'I' + ' ' + bolasChamadas
        numerosTabela20.innerHTML = bolasChamadas
    } 
    if (bolasChamadas == '22') {
        numeroPrincipal.innerHTML = 'I' + ' ' + bolasChamadas
        numerosTabela21.innerHTML = bolasChamadas
    }
    if (bolasChamadas == '23') {
        numeroPrincipal.innerHTML = 'I' + ' ' + bolasChamadas
        numerosTabela22.innerHTML = bolasChamadas
    }
    if (bolasChamadas == '24') {
        numeroPrincipal.innerHTML = 'I' + ' ' + bolasChamadas
        numerosTabela23.innerHTML = bolasChamadas
    }
    if (bolasChamadas == '25') {
        numeroPrincipal.innerHTML = 'I' + ' ' + bolasChamadas
        numerosTabela24.innerHTML = bolasChamadas
    }
    if (bolasChamadas == '26') {
        numeroPrincipal.innerHTML = 'I' + ' ' + bolasChamadas
        numerosTabela25.innerHTML = bolasChamadas
    }
    if (bolasChamadas == '27') {
        numeroPrincipal.innerHTML = 'I' + ' ' + bolasChamadas
        numerosTabela26.innerHTML = bolasChamadas
    }
    if (bolasChamadas == '28') {
        numeroPrincipal.innerHTML = 'I' + ' ' + bolasChamadas
        numerosTabela27.innerHTML = bolasChamadas
    }
    if (bolasChamadas == '29') {
        numeroPrincipal.innerHTML = 'I' + ' ' + bolasChamadas
        numerosTabela28.innerHTML = bolasChamadas
    }
    if (bolasChamadas == '30') {
        numeroPrincipal.innerHTML = 'I' + ' ' + bolasChamadas
        numerosTabela29.innerHTML = bolasChamadas
    }

    //  ESTRUTURA DE DECISAO LETRA E
    if (bolasChamadas == '31') {
        numeroPrincipal.innerHTML = 'N' + ' ' + bolasChamadas
        numerosTabela30.innerHTML = bolasChamadas
    }
    if (bolasChamadas == '32') {
        numeroPrincipal.innerHTML = 'N' + ' ' + bolasChamadas
        numerosTabela31.innerHTML = bolasChamadas
    }
    if (bolasChamadas == '33') {
        numeroPrincipal.innerHTML = 'N' + ' ' + bolasChamadas
        numerosTabela32.innerHTML = bolasChamadas
    }
    if (bolasChamadas == '34') {
        numeroPrincipal.innerHTML = 'N' + ' ' + bolasChamadas
        numerosTabela33.innerHTML = bolasChamadas
    }
    if (bolasChamadas == '35') {
        numeroPrincipal.innerHTML = 'N' + ' ' + bolasChamadas
        numerosTabela34.innerHTML = bolasChamadas
    }
    if (bolasChamadas == '36') {
        numeroPrincipal.innerHTML = 'N' + ' ' + bolasChamadas
        numerosTabela35.innerHTML = bolasChamadas
    }
    if (bolasChamadas == '37') {
        numeroPrincipal.innerHTML = 'N' + ' ' + bolasChamadas
        numerosTabela36.innerHTML = bolasChamadas
    }
    if (bolasChamadas == '38') {
        numeroPrincipal.innerHTML = 'N' + ' ' + bolasChamadas
        numerosTabela37.innerHTML = bolasChamadas
    }
    if (bolasChamadas == '39') {
        numeroPrincipal.innerHTML = 'N' + ' ' + bolasChamadas
        numerosTabela38.innerHTML = bolasChamadas
    }
    if (bolasChamadas == '40') {
        numeroPrincipal.innerHTML = 'N' + ' ' + bolasChamadas
        numerosTabela39.innerHTML = bolasChamadas
    }
    if (bolasChamadas == '41') {
        numeroPrincipal.innerHTML = 'N' + ' ' + bolasChamadas
        numerosTabela40.innerHTML = bolasChamadas
    }
    if (bolasChamadas == '42') {
        numeroPrincipal.innerHTML = 'N' + ' ' + bolasChamadas
        numerosTabela41.innerHTML = bolasChamadas
    }
    if (bolasChamadas == '43') {
        numeroPrincipal.innerHTML = 'N' + ' ' + bolasChamadas
        numerosTabela42.innerHTML = bolasChamadas
    }
    if (bolasChamadas == '44') {
        numeroPrincipal.innerHTML = 'N' + ' ' + bolasChamadas
        numerosTabela43.innerHTML = bolasChamadas
    }
    if (bolasChamadas == '45') {
        numeroPrincipal.innerHTML = 'N' + ' ' + bolasChamadas
        numerosTabela44.innerHTML = bolasChamadas
    }

    //  ESTRUTURA DE DECISAO LETRA T
    if (bolasChamadas == '46') {
        numeroPrincipal.innerHTML = 'G' + ' ' + bolasChamadas
        numerosTabela45.innerHTML = bolasChamadas
    }
    if (bolasChamadas == '47') {
        numeroPrincipal.innerHTML = 'G' + ' ' + bolasChamadas
        numerosTabela46.innerHTML = bolasChamadas
    }
    if (bolasChamadas == '48') {
        numeroPrincipal.innerHTML = 'G' + ' ' + bolasChamadas
        numerosTabela47.innerHTML = bolasChamadas
    }
    if (bolasChamadas == '49') {
        numeroPrincipal.innerHTML = 'G' + ' ' + bolasChamadas
        numerosTabela48.innerHTML = bolasChamadas
    }
    if (bolasChamadas == '50') {
        numeroPrincipal.innerHTML = 'G' + ' ' + bolasChamadas
        numerosTabela49.innerHTML = bolasChamadas
    }
    if (bolasChamadas == '51') {
        numeroPrincipal.innerHTML = 'G' + ' ' + bolasChamadas
        numerosTabela50.innerHTML = bolasChamadas
    }
    if (bolasChamadas == '52') {
        numeroPrincipal.innerHTML = 'G' + ' ' + bolasChamadas
        numerosTabela51.innerHTML = bolasChamadas
    }
    if (bolasChamadas == '53') {
        numeroPrincipal.innerHTML = 'G' + ' ' + bolasChamadas
        numerosTabela52.innerHTML = bolasChamadas
    }
    if (bolasChamadas == '54') {
        numeroPrincipal.innerHTML = 'G' + ' ' + bolasChamadas
        numerosTabela53.innerHTML = bolasChamadas
    }
    if (bolasChamadas == '55') {
        numeroPrincipal.innerHTML = 'G' + ' ' + bolasChamadas
        numerosTabela54.innerHTML = bolasChamadas
    }
    if (bolasChamadas == '56') {
        numeroPrincipal.innerHTML = 'G' + ' ' + bolasChamadas
        numerosTabela55.innerHTML = bolasChamadas
    }
    if (bolasChamadas == '57') {
        numeroPrincipal.innerHTML = 'G' + ' ' + bolasChamadas
        numerosTabela56.innerHTML = bolasChamadas
    }
    if (bolasChamadas == '58') {
        numeroPrincipal.innerHTML = 'G' + ' ' + bolasChamadas
        numerosTabela57.innerHTML = bolasChamadas
    }
    if (bolasChamadas == '59') {
        numeroPrincipal.innerHTML = 'G' + ' ' + bolasChamadas
        numerosTabela58.innerHTML = bolasChamadas
    }
    if (bolasChamadas == '60') {
        numeroPrincipal.innerHTML = 'G' + ' ' + bolasChamadas
        numerosTabela59.innerHTML = bolasChamadas
    }

    //  ESTRUTURA DE DECISAO LETRA +
    if (bolasChamadas == '61') {
        numeroPrincipal.innerHTML = 'O' + ' ' + bolasChamadas
        numerosTabela60.innerHTML = bolasChamadas
    }
    if (bolasChamadas == '62') {
        numeroPrincipal.innerHTML = 'O' + ' ' + bolasChamadas
        numerosTabela61.innerHTML = bolasChamadas
    }
    if (bolasChamadas == '63') {
        numeroPrincipal.innerHTML = 'O' + ' ' + bolasChamadas
        numerosTabela62.innerHTML = bolasChamadas
    }
    if (bolasChamadas == '64') {
        numeroPrincipal.innerHTML = 'O' + ' ' + bolasChamadas
        numerosTabela63.innerHTML = bolasChamadas
    }
    if (bolasChamadas == '65') {
        numeroPrincipal.innerHTML = 'O' + ' ' + bolasChamadas
        numerosTabela64.innerHTML = bolasChamadas
    }
    if (bolasChamadas == '66') {
        numeroPrincipal.innerHTML = 'O' + ' ' + bolasChamadas
        numerosTabela65.innerHTML = bolasChamadas
    }
    if (bolasChamadas == '67') {
        numeroPrincipal.innerHTML = 'O' + ' ' + bolasChamadas
        numerosTabela66.innerHTML = bolasChamadas
    }
    if (bolasChamadas == '68') {
        numeroPrincipal.innerHTML = 'O' + ' ' + bolasChamadas
        numerosTabela67.innerHTML = bolasChamadas
    }
    if (bolasChamadas == '69') {
        numeroPrincipal.innerHTML = 'O' + ' ' + bolasChamadas
        numerosTabela68.innerHTML = bolasChamadas
    }
    if (bolasChamadas == '70') {
        numeroPrincipal.innerHTML = 'O' + ' ' + bolasChamadas
        numerosTabela69.innerHTML = bolasChamadas
    }
    if (bolasChamadas == '71') {
        numeroPrincipal.innerHTML = 'O' + ' ' + bolasChamadas
        numerosTabela70.innerHTML = bolasChamadas
    }
    if (bolasChamadas == '72') {
        numeroPrincipal.innerHTML = 'O' + ' ' + bolasChamadas
        numerosTabela71.innerHTML = bolasChamadas
    }
    if (bolasChamadas == '73') {
        numeroPrincipal.innerHTML = 'O' + ' ' + bolasChamadas
        numerosTabela72.innerHTML = bolasChamadas
    }
    if (bolasChamadas == '74') {
        numeroPrincipal.innerHTML = 'O' + ' ' + bolasChamadas
        numerosTabela73.innerHTML = bolasChamadas
    }
    if (bolasChamadas == '75') {
        numeroPrincipal.innerHTML = 'O' + ' ' + bolasChamadas
        numerosTabela74.innerHTML = bolasChamadas
    }
})