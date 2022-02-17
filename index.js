const globalwrp = document.getElementById('glb');
const btn = document.getElementById('start');
const input = document.getElementById('inputuser');
var wrap;
var img;
const btn2 = document.getElementById('refresh');

const dic = {
  "A": "./imagini/LiteraA.webp",
  "a": "./imagini/LiteraA.webp",
  "B": "./imagini/LiteraB.webp",
  "b": "./imagini/LiteraB.webp",
  "C": "./imagini/LiteraC.webp",
  "c": "./imagini/LiteraC.webp",
  "D": "./imagini/LiteraD.webp",
  "d": "./imagini/LiteraD.webp",
  "E": "./imagini/LiteraE.webp",
  "e": "./imagini/LiteraE.webp",
  "F": "./imagini/LiteraF.webp",
  "f": "./imagini/LiteraF.webp",
  "G": "./imagini/LiteraG.webp",
  "g": "./imagini/LiteraG.webp",
  "H": "./imagini/LiteraH.webp",
  "h": "./imagini/LiteraH.webp",
  "I": "./imagini/LiteraI.webp",
  "i": "./imagini/LiteraI.webp",
  "J": "./imagini/LiteraJ.webp",
  "j": "./imagini/LiteraJ.webp",
  "K": "./imagini/LiteraK.webp",
  "k": "./imagini/LiteraK.webp",
  "L": "./imagini/LiteraL.webp",
  "l": "./imagini/LiteraL.webp",
  "M": "./imagini/LiteraM.webp",
  "m": "./imagini/LiteraM.webp",
  "N": "./imagini/LiteraN.webp",
  "n": "./imagini/LiteraN.webp",
  "O": "./imagini/LiteraO.webp",
  "o": "./imagini/LiteraO.webp",
  "P": "./imagini/LiteraP.webp",
  "p": "./imagini/LiteraP.webp",
  "Q": "./imagini/LiteraQ.webp",
  "q": "./imagini/LiteraQ.webp",
  "R": "./imagini/LiteraR.webp",
  "r": "./imagini/LiteraR.webp",
  "S": "./imagini/LiteraS.webp",
  "s": "./imagini/LiteraS.webp",
  "T": "./imagini/LiteraT.webp",
  "t": "./imagini/LiteraT.webp",
  "U": "./imagini/LiteraU.webp",
  "u": "./imagini/LiteraU.webp",
  "V": "./imagini/LiteraV.webp",
  "V": "./imagini/LiteraV.webp",
  "W": "./imagini/LiteraW.webp",
  "w": "./imagini/LiteraW.webp",
  "X": "./imagini/LiteraX.webp",
  "x": "./imagini/LiteraX.webp",
  "Y": "./imagini/LiteraY.webp",
  "y": "./imagini/LiteraY.webp",
  "Z": "./imagini/LiteraZ.webp",
  "z": "./imagini/LiteraZ.webp",
}

btn2.addEventListener('click', () => { btn2.disabled = true;
  btn.disabled = false;
input.value =""; 
while(globalwrp.firstChild) globalwrp.removeChild(globalwrp.firstChild); });

btn.addEventListener('click', () => {
 
  for (let i = 0; i < input.value.length; i++) {
    for (const [k, v] of Object.entries(dic)) {
      if (input.value[i] == k) {
        wrap = document.createElement('div');
        img = document.createElement('IMG');
        img.setAttribute("src", `${v}`);
        wrap.className = "wrapper";
        globalwrp.appendChild(wrap);
        wrap.appendChild(img);
      }
    }
  }
  btn.disabled = true;
  btn2.disabled = false;
});