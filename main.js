let label = document.getElementById("numLabel");
let labelOp = document.getElementById("opLabel");
let textLabel = label.innerText;
let numText = parseInt(label);

let numberInScreen = 0;
let num1 = 0;
let num2 = 0;

let firstNum = true;

let operation = '';

const numInScreen = (number) => { 
    
    if(label.textContent.toString().length <= 10)
    {
        if (firstNum)
        {
            label.textContent = '';
            num1 = 0;
            num2 = 0;
            firstNum = false;
            // console.log('Paso por aca')
        }
        label.textContent += `${number}`;
    }
    
}

const addDot = () => {
    if (label.textContent.includes('.')) {
        console.log('Ya hay un punto en la cadena.');
      } else {
        // Agregar un punto solo si no existe
        console.log('No hay un punto en la cadena.');
        label.textContent += ".";
      }
}

const deleteScreen = () => {
    label.textContent = '';
    labelOp.textContent = '';
    numberInScreen = 0;
    num1 = 0;
    num2 = 0;
    operation = '';
}

const emptyOperator = () => {
    if(label.textContent == '')
    {
        num1 = 0;
    }
    else
    {
        num1 = parseFloat(label.innerText);
    }
    label.textContent = '';
    firstNum = false;
}

const addFunction = () => {
    emptyOperator();
    operation = 'add';
    labelOp.textContent = '+';
}
const subFunction = () => {
    emptyOperator();
    operation = 'sub';
    labelOp.textContent = '-';
}
const timesFunction = () => {
    emptyOperator();
    operation = 'times';
    labelOp.textContent = 'x';
}
const divFunction = () => {
    emptyOperator();
    operation = 'div';
    labelOp.textContent = '/';
}

const negativeNum = () => {
    label.textContent = parseFloat(label.innerText) * (-1);
    firstNum = false;
}

const equal = () => {
    num2 = parseFloat(label.innerText);
    label.textContent = '';
    labelOp.textContent = '';
    switch (operation){
        case 'add':
            label.textContent = Math.round((num1 + num2) * 10000)/10000;
            break;
        case 'sub':
            label.textContent = Math.round((num1 - num2) * 10000)/10000;
            break;
        case 'times':
            label.textContent = Math.round((num1 * num2) * 10000)/10000;
            break;
        case 'div':
            label.textContent = Math.round((num1 / num2) * 10000)/10000;
            break;
        default:
            label.textContent = '';
    }

    if( label.textContent.toString().length > 10)
    {
        // label.textContent = Number(parseFloat(label.textContent).toExponential());
        // label.textContent = parseFloat(label.textContent).toFixed(2);
        label.textContent = label.textContent.toString().substring(0, 8) + '...';
    }
    firstNum = true;
}

const test = () => {
    console.log('Num1: ', num1)
    console.log('Num2: ', num2)
    console.log('Numinprogres: ', numberInScreen)
    console.log('Operador: ', operation)
    console.log(label.innerText)
}




