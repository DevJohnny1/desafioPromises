const fs = require ("fs/promises")

let somar = (n1, n2) => {
    const resultado = n1 + n2
    return new Promise(async (reject, resolve) => {
        if(n1, n2 == String) {
            return reject("Não são números!")
        }

        await fs.appendFile("resultado.txt", `O valor dado ao somar ${n1} e ${n2} é = ${resultado} \n\n`);
        resolve(n1 + n2)
    })    
}

somar(10, 10)
    .catch(console.log)
somar(5, 7)
    .catch(console.log)
somar(137, 13)
    .catch(console.log)