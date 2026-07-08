let botaoImc = document.querySelector("#botaoImc")
    botaoImc.addEventListener('click', async () => {
        let altura = document.querySelector("#altura").value
        let peso = document.querySelector("#peso").value
        altura = parseInt(altura)
        peso = parseInt(peso)
        altura /= 100
        let imc = peso / (altura**2)

    try {
        document.querySelector("#resultado-imc ").textContent += imc.toFixed(2);
    switch (true) {
        case imc < 18.5:
            document.querySelector("#classificacao-imc ").textContent += "Abaixo do peso"
            break
        case imc < 25:
            document.querySelector("#classificacao-imc ").textContent += "Peso normal"
            break
        case imc < 30:
            document.querySelector("#classificacao-imc ").textContent += "Excesso de peso"
            break
        case imc < 35:
            document.querySelector("#classificacao-imc ").textContent += "Obesidade de classe I"
            break
        case imc < 40:
            document.querySelector("#classificacao-imc ").textContent += "Obesidade de classe II"
            break
        case imc >= 45:
            document.querySelector("#classificacao-imc ").textContent += "Obesidade de classe III"
            break
        default:
            document.querySelector("#classificacao-imc ").textContent += "Peso Inválido"
        }

    } catch (error) {
        console.error(error.message)
    }
})