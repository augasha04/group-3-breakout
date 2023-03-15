function isPalindrome(string){
    return string === string.split(``).reverse().join(``);
}
console.log(isPalindrome("laptop"));
console.log(isPalindrome("Moringa"));
console.log(isPalindrome("mom"));