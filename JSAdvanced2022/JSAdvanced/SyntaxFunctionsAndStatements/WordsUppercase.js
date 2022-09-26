function getUpperCase(input) {

    let text = input.replaceAll(/[,!.*+?^${}()|[\]\\][\s]/g, '');
    
   // let letter = text.toUpperCase();
    console.log(text.join(','));
    
}

getUpperCase('Hi, how are you?');