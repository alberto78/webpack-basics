class MyClass {
    
    constructor() {
        this.title1 = 'ES6 + webpack';
        this.title2 = 'is working UGLIFIED!';
    }
    
    displayMessage() {
        const txt = this.title1 + ' ' + this.title2;
        
        alert(txt);
    }
}

export { MyClass };