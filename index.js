'use strict'

let osoba1 = {
  jmeno: 'Alena',
  uspory: 53000
};

let osoba2 = {
  jmeno: 'Karolína',
  uspory: 68000
};

let save1 = document.querySelector('#number1');
let save2 = document.querySelector('#number2');
// const numSave1 = Number(save1.value);
// const numSave2 = Number(save2.value); - s tímhle mi to nějak nefungovalo, tak jsem to nechala hloupě rozepsané. 
// Byť vím, že by bylo lepší, kdybych si to uložila do proměnné a tu pak používala
const haveWeEnough = () => {
  //Obě mají našetřeno dostatek financí
  if ((Number(save1.value) + Number(save2.value)) >= 100000 && Number(save1.value) >= 50000 && Number(save2.value) >= 50000) {
    console.log('funguju');
    const celkem = Number(save1.value) + Number(save2.value);
    const weCanGo = document.querySelector('.vysledek');
    weCanGo.innerHTML = `<p class="muzeme__jet">Hurá! Můžeme jet! Máme ${celkem},-.</p>`;
  } else if ((Number(save1.value) + Number(save2.value)) >= 100000 && Number(save1.value) >= 50000 && Number(save2.value) < 50000) {
    // dohramady mají našetřeno dost, ale jedna z holek má méně než 50 000.
    const celkem2 = Number(save1.value) + Number(save2.value);
    const weCanGo3 = document.querySelector('.vysledek');
    weCanGo3.innerHTML = `<p class="muzeme__jet">Hurá! Můžeme jet! Máme ${celkem2},-. Ale Karolína po návratu musí Aleně dát ${50000 - Number(save2.value)},-.</p>`
  } else if ((Number(save1.value) + Number(save2.value)) >= 100000 && Number(save1.value) < 50000 && Number(save2.value) >= 50000) {
    const celkem2 = Number(save1.value) + Number(save2.value);
    const weCanGo3 = document.querySelector('.vysledek');
    weCanGo3.innerHTML = `<p class="muzeme__jet">Hurá! Můžeme jet! Máme ${celkem2},-. Ale po návratu musí Alena dát Karolíně ${50000 - Number(save1.value)},-.</p>`
  } else {
    // ani dohromady nemají dost našetřeno
    console.log('funguju');
    const chybiNam = 100000 - Number(save1.value) - Number(save2.value);
    const weCanGo4 = document.querySelector('.vysledek');
    weCanGo4.innerHTML = `<p class="muzeme__jet">Ještě musíme nějakou dobu šetřit. Celkem nám chybí ${chybiNam},-.<br>
    Přičemž Aleně chybí ${50000 - Number(save1.value)},- a Karolíně ${50000 - Number(save2.value)},-.</p>`;
  }
};

const btmElm = document.querySelector('#submit');
btmElm.addEventListener('click', haveWeEnough);
