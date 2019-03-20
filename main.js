let alerts = document.getElementById('alert')
let duma = document.getElementById('a')
let dumb = document.getElementById('b')
let dumc = document.getElementById('c')
let dumd = document.getElementById('d')

votacion()

function votacion() {

    alerts.innerHTML = `<div class="alert alert-primary" id="alert">
    <strong>RESULTADOS AQUI</strong>
</div>`

    let number = 5

    let a = 0
    let b = 0
    let c = 0
    let d = 0

    while (number != 0) {
        number = Number(prompt('Vote aqui'))

        switch (number) {
            case 1:
                a++
                break
            case 2:
                b++
                break
            case 3:
                c++
                break
            case 4:
                d++
                break
        }

    }

    console.log(a, b, c, d)

    alerts.innerHTML = `<div class="alert alert-primary" id="alert">
    <strong>A) VOTOS: ${a} PORCENTAGE: ${((a/(a+b+c+d))*100).toFixed(2)}%</strong><br>
    <strong>B) VOTOS: ${b} PORCENTAGE: ${((b/(a+b+c+d))*100).toFixed(2)}%</strong><br>
    <strong>C) VOTOS: ${c} PORCENTAGE: ${((c/(a+b+c+d))*100).toFixed(2)}%</strong><br>
    <strong>D) VOTOS: ${d} PORCENTAGE: ${((d/(a+b+c+d))*100).toFixed(2)}%</strong><br>
</div>`

duma.style.width = `${((a/(a+b+c+d))*100).toFixed(2)}%`
dumb.style.width = `${((b/(a+b+c+d))*100).toFixed(2)}%`
dumc.style.width = `${((c/(a+b+c+d))*100).toFixed(2)}%`
dumd.style.width = `${((d/(a+b+c+d))*100).toFixed(2)}%`

}