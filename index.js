const booksFunctions = require('./books'); 
const processesArguments = require('./processesArguments'); 

function main() {

    const processedArguments = processesArguments(process.argv); 

    const key = Object.keys(processedArguments).toString();
    const value = Object.values(processedArguments).toString();


    switch (key) {
        case '':
            console.log(booksFunctions.getAll());
            break;
        case 'id':
            console.log(booksFunctions.getById(parseInt(value)));
            break;
        case 'name':
            console.log(booksFunctions.getByName(value));
            break;
        case 'author':
            console.log(booksFunctions.getByAuthor(value));
            break;
        case 'tag':
            console.log(booksFunctions.getByTag(value));
            break;
        case 'sold':
            console.log(booksFunctions.getSoldByAuthor(value));
            break;
        default:
            console.log('El parámetro ingresado es incorrecto. Ingrese alguna de las siguientes opciones: id, name, author, tag o sold');
            break;
    }

}

main();