const height = document.querySelector('.height');
const weight = document.querySelector('.weight');
const form = document.querySelector('.form-calculator');
const btn = document.querySelector('.btn-calc');
const value = document.querySelector('.result-value');
const drescription = document.querySelector('.result-drescription')

console.log(form);

function gerarImc(event) {
  event.preventDefault();
  const imcHeight = height.value;
  const imcWeight = weight.value;
  const imc = (imcWeight / (imcHeight * imcHeight)).toFixed(2);
  value.innerText = imc;

  drescription.classList.add('atencao');

  if (imc < 18.5) {
    drescription.innerText = 'ATENÇÃO, Você está abaixo do peso ideal!'
    drescription.classList.add('atencao');
    drescription.classList.remove('normal', 'cuidado')
  } else if (imc >= 18.5 && imc <= 25) {
    drescription.classList.remove('atencao', 'cuidado')
    drescription.classList.add('normal')
    drescription.innerText = 'Você está no peso ideal!'
  } else {
    drescription.classList.remove('atencao', 'normal')
    drescription.classList.add('cuidado')
    drescription.innerText = 'Você está acima do peso ideal, CUIDADO!'
  }
}

form.addEventListener('submit', gerarImc);
