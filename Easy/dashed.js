/*
Create a function that takes a string and returns dashes on the left and right side of every vowel (a e i o u).

Examples

dashed("Carpe Diem") ➞ "C-a-rp-e- D-i--e-m"

dashed("Fight for your right to party!") ➞ "F-i-ght f-o-r y-o--u-r r-i-ght t-o- p-a-rty!"
Notes
A string can contain uppercase and lowercase vowels.
*/

function dashed( /*args*/ ) {
  //your code
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  let arr = string.split('');
  for (let i = 0; i < arr.length; i++) {
    if (vowels.has(arr[i])) {
      arr[i] = '-' + arr[i] + '-';
    }
  }
  return arr.join('');
}

exports.solution = dashed;