function najduziPalindrom(str) {
  let najduzi = "";

  for (let i = 0; i < str.length; i++) {
    let oddPalindrome = expandFromCenter(str, i, i);
    let evenPalindrome = expandFromCenter(str, i - 1, i);

    if (oddPalindrome.length > najduzi.length) {
      najduzi = oddPalindrome;
    }

    if (evenPalindrome.length > najduzi.length) {
      najduzi = evenPalindrome;
    }
  }
  return najduzi;
}

function expandFromCenter(str, left, right) {
  let i = 0;

  while (str[left - i] === str[right + i]) {
    i++;
  }

  i--;

  return str.slice(left - i, right + i + 1);
}

console.log(
  najduziPalindrom("HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE")
);
