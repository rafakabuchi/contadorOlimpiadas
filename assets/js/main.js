inicio = 1896

escolha = prompt("escolha um ano")

total = ((escolha - inicio) / 4) - 1
//1906 - Edição especial
//1916 - Interrupção devido à I Guerra Mundial
//1940 - Interrupção devido à II Guerra Mundial
//1944 - Interrupção devido à II Guerra Mundial

result.innerHTML = `${total.toFixed(0)}`

titulo.innerHTML = `${escolha}`