function contar(arrayAnimals){
    let contador = 0;
    for(let i = 0; i<arrayAnimals.length; i++){
      contador++;
    }
    return contador;
  }
  
  let animals = ["Chita", "Chimpanze", "Leão", "Lobo"]
  let nElementos = contar(animals)
  console.log("O array tem:", nElementos, "elementos")