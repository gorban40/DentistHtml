import IMask from 'imask';

var element = document.getElementById('phoneMask');
var element2 = document.getElementById("phoneMaskModal")
var maskOptions = {
  mask: '+{38}(000)000-00-00'
};
var mask = IMask(element, maskOptions);
export var mask2 = IMask(element2, maskOptions);


export default mask;