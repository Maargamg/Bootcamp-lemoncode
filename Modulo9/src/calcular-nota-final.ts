


export const calcularNotaFinal = (notasMedias: number[], peso: number[]): number =>{

    const notaFinal = notasMedias.reduce((acc, notasMedias, indice) => acc + notasMedias * peso[indice], 0);

    const notaFinalRedondeada = Number(notaFinal.toFixed(2));

    return notaFinalRedondeada;
};