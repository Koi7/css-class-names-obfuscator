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
