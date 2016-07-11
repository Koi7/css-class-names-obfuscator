# css-class-names-obfuscator
CSS class names obfuscator and minificator for Yandex Frontend School in Simferopol.
# Usage
To use module just require it and provide a paramater:
    ```javascript
    var obfuscator = require("obfuscator");
    var cssClasses = ["some", "body", "help", "ME", "ME", "body", "some", "some", "some", "help", "ME", "ME", "ME", "ME", "help"];
    var newNames = mod(cssClasses);
    console.log(newNames);
    ```
# Examples
Input:
        ```javascript
         ["some", "body", "help", "ME", "ME", "body", "some", "some", "some", "help", "ME", "ME", "ME", "ME", "help"]
        ```
Output
        ```javascript
        { ME: 'q', some: 'w', help: 'e', body: 'r' }
        ```
    
