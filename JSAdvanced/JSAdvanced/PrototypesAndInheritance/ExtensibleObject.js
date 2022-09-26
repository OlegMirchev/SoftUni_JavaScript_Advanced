function extensibleObject() {
    return {
        extend: function(template) {
            let protoObj = Object.getPrototypeOf(this);
            let templateArray = Object.entries(template);

            for (const[key, value] of templateArray) {
                if (typeof value === 'function') {
                    protoObj[key] = value;
                }else {
                    this[key] = value;
                }
            }
        }
    }
}

const myObj = extensibleObject(); 
const template = { 
      extensionMethod: function () {}, 
      extensionProperty: 'someString' 
    } 
    myObj.extend(template); 
