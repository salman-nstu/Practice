function reverse(str) {
    const reversestr = str.split("").reverse().join("");
    const isPal = str === reversestr;

    console.log(`Original: "${str}"`);
    console.log(`Reversed: "${reversestr}"`);
    console.log(`Palindrome: "${isPal}"`);

    return isPal;
}

reverse("racecar ii racecar");
reverse("");
