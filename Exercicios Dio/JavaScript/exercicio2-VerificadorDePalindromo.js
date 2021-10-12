// verificador de palindromo solução 1:
function verificaPalindromo(string) {
  if (!string) return "string inexistente";

  return string.split("").reverse().join("") === string;
}

console.log(verificaPalindromo("ama"));

// solução 2

function verificaPalindromo2(string) {
  if (!string) return "string inexistente";

  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

console.log(verificaPalindromo2("gato"));

// Uma string nada mais é do que uma lista de caracteres que estão juntos
// Na segunda solução a propriede lenght foi usada para percorrer cada caractere que existe dentro de seu comprimento.
// Usando também o loop for pra percorrer os caractereres
