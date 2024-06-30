function contarVogaisManual(str) {
   
    const vogais = ['a', 'á', 'à', 'â', 'ä', 'ã', 'e', 'é', 'è', 'ê', 'ë', 'i', 'í', 'ì', 'î', 'ï', 'o', 'ó', 'ò', 'ô', 'ö', 'õ', 'u', 'ú', 'ù', 'û', 'ü', 
                    'A', 'Á', 'À', 'Â', 'Ä', 'Ã', 'E', 'É', 'È', 'Ê', 'Ë', 'I', 'Í', 'Ì', 'Î', 'Ï', 'O', 'Ó', 'Ò', 'Ô', 'Ö', 'Õ', 'U', 'Ú', 'Ù', 'Û', 'Ü'];
    
    
    let contagem = 0;

    
    for (let char of str) {
       
        if (vogais.includes(char)) {
            
            contagem++;
        }
    }

    
    return contagem;
}


console.log(contarVogaisManual("Olá, como você está?")); 
