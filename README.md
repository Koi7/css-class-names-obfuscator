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
# Algorithm
Firstly, module iterates through data array and creates array of objects. Objects have two properties: className (reflects unique css class name) and frequency (how often this class name appears in array). It is necessary for minification.
Example of such array of objects:
```javascript
[ { className: 'some', frequency: 3 },
  { className: 'body', frequency: 2 },
  { className: 'help', frequency: 1 },
  { className: 'ME', frequency: 2 } ]
```
After that nodule sorts this array by frequency:
```javascript
[ { className: 'some', frequency: 3 },
  { className: 'body', frequency: 2 },
  { className: 'ME', frequency: 2 },
  { className: 'help', frequency: 1 } ]
```
After that module cretes new names from one latin character while it is possible. When it is not possible module increases new name length and tries to create new class name from to characters (first - only latin characters, secind - lating characters, "-", "_" and digits). Each time module meets matches between already created class names and cureent new class name it increases class name length.
# Examples
## First example
Input:
```javascript
 ["some", "body", "help", "ME", "ME", "body", "some", "some", "some", "help", "ME", "ME", "ME", "ME", "help"]
```
Output:
```javascript
{ ME: 'q', some: 'w', help: 'e', body: 'r' }
```
## Second example
Input: [see input data here](https://github.com/Koi7/css-class-names-obfuscator/blob/master/test1.json)

Output. Most common css class names go first and has shortest new name:
```javascript
{ sinvb: 'q',
  rlcbrr: 'w',
  gptkf: 'e',
  ayptks: 'r',
  ylkqa: 't',
  qkzhzgr: 'y',
  hwsmy: 'u',
  yvhwgozu: 'i',
  oepixgva: 'o',
  ylrrzhg: 'p',
  agwkv: 'a',
  wdedzl: 's',
  tskqb: 'd',
  fxgtnf: 'f',
  kzuyrdr: 'g',
  jbhtx: 'h',
  xafap: 'j',
  pzhoccuf: 'k',
  chfqdq: 'l',
  hkfwqvod: 'z',
  qgwxeq: 'x',
  qbnvl: 'c',
  bxufjd: 'v',
  imbznmd: 'b',
  thnsypuk: 'n',
  tuxpbx: 'm',
  cdudq: 'Q',
  dvsfalb: 'W',
  rbqzaoj: 'E',
  hyxjvp: 'R',
  slvzehcr: 'T',
  eyptyacf: 'Y',
  ajjmwx: 'U',
  nzuzr: 'I',
  zfwhsm: 'O',
  hisfrxss: 'P',
  uayjdlnz: 'A',
  wvbnx: 'S',
  eglubqpl: 'D',
  qlftsqz: 'F',
  fobrh: 'G',
  txqgq: 'H',
  caqxeu: 'J',
  opawo: 'K',
  daqycs: 'L',
  wqlsz: 'Z',
  drmkwvdp: 'X',
  tutdetfh: 'C',
  joddy: 'V',
  xldrboah: 'B',
  uskfoipw: 'N',
  smljvd: 'M',
  ifdlsscs: 'qn',
  ddrlqkxm: 'wu',
  hkffs: 'eH',
  xvgrws: 'rZ',
  wbjuqcyk: 'tt',
  xzuww: 'y4',
  vcpzalfs: 'uX',
  ahvifj: 'io',
  gczswo: 'ou',
  jryueaq: 'pC',
  dfyekgn: 'a6',
  dkeozlr: 's_',
  qmszpno: 'd6',
  nrlsku: 'f5',
  hlkon: 'g8',
  muinnnq: 'h4',
  bwohn: 'j7',
  xaoppsm: 'k-',
  xfoenl: 'lA',
  qqhhk: 'z4',
  iwqyw: 'xD',
  tldvnmsa: 'c1',
  godpap: 'v7',
  rjqukp: 'bv',
  zxjdqt: 'nR',
  sngpjyr: 'mf',
  awajl: 'Q4',
  ynkyd: 'W1',
  fqhbjmmd: 'E1',
  ftfdov: 'RO',
  iublzu: 'T0',
  fhirfdqg: 'Y7',
  cuztpc: 'U2',
  mffib: 'IS',
  pfnzybn: 'O4',
  oejrmxvx: 'P1',
  xzwcyxt: 'AZ',
  gnfjavnw: 'Sn',
  xoyviygy: 'DX' }
```
# P.S.
Если под наличием документации вы имели в виду документирование исходного кода модуля, то о каком документировании вы говорите требуя, чтобы модуль выглядел так:
```javascript
/** 
  * @param {Array} data – массив CSS классов
  */
module.exports = function(data) {
  // Ваш код
};
````
?
