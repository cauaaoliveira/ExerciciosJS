function separaParImpar(nums){
    let pares = [];
    let impares = [];
    let indexPar = 0;
    let indexImpar = 0;
  
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] % 2 === 0) {
        pares[indexPar] = nums[i];
        indexPar++;
      } else {
        impares[indexImpar] = nums[i];
        indexImpar++;
      }
    }
  
    return [pares, impares];
}

let numeros = [1, 2, 3, 4, 5];
let resultado = separaParImpar(numeros);
console.log(resultado);