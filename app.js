// https://calculator.swiftutors.com/kinetic-friction-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const kineticFrictionRadio = document.getElementById('kineticFrictionRadio');
const coefficientofKineticFrictionRadio = document.getElementById('coefficientofKineticFrictionRadio');
const normalForceRadio = document.getElementById('normalForceRadio');

let kineticFriction;
let coefficientofKineticFriction = v1;
let normalForce = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

kineticFrictionRadio.addEventListener('click', function() {
  variable1.textContent = '(μk) Coefficient of Kinetic Friction (N)';
  variable2.textContent = '(N) Normal Force (N)';
  coefficientofKineticFriction = v1;
  normalForce = v2;
  result.textContent = '';
});

coefficientofKineticFrictionRadio.addEventListener('click', function() {
  variable1.textContent = '(Fk) Kinetic Friction (N)';
  variable2.textContent = '(N) Normal Force (N)';
  kineticFriction = v1;
  normalForce = v2;
  result.textContent = '';
});

normalForceRadio.addEventListener('click', function() {
  variable1.textContent = '(Fk) Kinetic Friction (N)';
  variable2.textContent = '(μk) Coefficient of Kinetic Friction (N)';
  kineticFriction = v1;
  coefficientofKineticFriction = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(kineticFrictionRadio.checked)
    result.textContent = `Kinetic Friction = ${computeKineticFriction().toFixed(2)} N`;

  else if(coefficientofKineticFrictionRadio.checked)
    result.textContent = `Coefficient of Kinetic Friction = ${computeCoefficientofKineticFriction().toFixed(2)} N`;

  else if(normalForceRadio.checked)
    result.textContent = `Normal Force = ${computeNormalForce().toFixed(2)} N`;
})

// calculation

function computeKineticFriction() {
  return Number(coefficientofKineticFriction.value) * Number(normalForce.value);
}

function computeCoefficientofKineticFriction() {
  return Number(kineticFriction.value) / Number(normalForce.value);
}

function computeNormalForce() {
  return Number(kineticFriction.value) / Number(coefficientofKineticFriction.value);
}