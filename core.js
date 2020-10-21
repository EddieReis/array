"use strict";

const number = [2, 3, 6, 5, 10, 12, 14];
const vdr = [2, 3, 6, 5];
        let vd = ["Sou a adição de 1",];
        let newArrayNumber = ["Sou a multiplicação de 2"];

                for (let i = 0; i < number.length; i++){newArrayNumber.push(number[i] * 2)};
                for (let i = 0; i < vdr.length; i++){vd.push(number[i] + 1)};

        // document.write ou console.log diz "true" porque está comparando duas variáveis diferentes
        console.log(number, vdr, vd, newArrayNumber);

        // document.write ou console.log diz "false" porque está comparando se duas variáveis diferentes são realmente diferentes (e são).
        console.log(number != number, "Sou um valor falso porque você está me perguntando se eu sou igual a mim mesmo.");

        // document.write ou console.log diz "verdadeiro" porque está comparando se a variável "number" é diferente dela mesma (não é).
        console.log(vd != number, "Sou um valor verdadeiro porque desta vez você está me comparando a uma variável que entegra valores diferente de mim mesmo.");
        //end
        // By Eddie Reis

        
