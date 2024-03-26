module.exports = function processesArguments(arguments) {
    const argumentoRecortado = arguments.slice(2);

    const processedArguments = {};

    argumentoRecortado.forEach((parametro, index) => {
        if (parametro.startsWith('--')) {
            const nombrePropiedad = parametro.slice(2);
            processedArguments[nombrePropiedad] = argumentoRecortado[index + 1];
        }
    });

    for (const propiedad in processedArguments) {
        if (processedArguments[propiedad].includes('*')) {
            processedArguments[propiedad] = processedArguments[propiedad].replaceAll(
                '*',
                ' '
            );
        }
    }

    return processedArguments;
}
