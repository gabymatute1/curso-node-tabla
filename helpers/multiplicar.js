const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');
var colors = require('colors');

const crearArchivo  = async(base=5,listar=false,hasta=10) =>{
    return new Promise ((resolve,reject) =>{
        
    
        let salida='';
    
        for (let i=1;i<=hasta;i++)
        {
            let total = base*i;
            salida += `${base} x ${i} = ${total}\n`;
        }
    if (listar)
    {
        console.log('=========================='.rainbow);
        console.log('TABLA DEL'.underline.yellow,colors.underline.yellow(base));
        console.log('=========================='.rainbow);
        console.log(salida);
    }
        
        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);

        return `tabla-${base}.txt creado`;
    }

    )
    
   

   
    
}


module.exports = {
    crearArchivo
}