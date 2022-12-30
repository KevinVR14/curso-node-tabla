const fs = require('fs');

// const crearArchivo = (base) => {
//     return new Promise ( (resolve, reject) => {
//         let salida = '';
    
//         for (let i = 1; i <= 10; i++) {
//             resultado = Number(i) * 5;
//             salida += `${base} x ${i} = ${base * i}\n`;
//         }
    
//         console.log(salida);
    
//         fs.writeFileSync(`tabla-${base}.txt`, salida);
    
//         resolve(`tabla-${base}.txt`);
//     })
// }

const crearArchivo = async(base, listar, hasta) => {
    try {
        let salida = '';
        let consola = '';
        
        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`.red;
            consola += `${base} x ${i} = ${base * i}\n`;
        }
        
        if(listar){
            console.log(salida);
        }
        
        fs.writeFileSync(`./archivo/tabla-${base}.txt`, consola);
        
        return `tabla-${base}.txt`;
    } catch (error) {
        throw error;
    }

}

module.exports = {
    crearArchivo
}