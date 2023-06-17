// String Object:

let Output = document.getElementById("StringOutput");

let str = new String("Hello, My Name is Tayyab.");

Output.innerHTML = "<u>Original String:</u> " + str + "<br><u>String Operations:<u><br>";

Output.innerHTML += "1. String Length: " + str.length + "<br>";
Output.innerHTML += "2. Character at index 18: " + str.charAt(18) + "<br>";
Output.innerHTML += "3. Substring from index 0 to 4: " + str.substring(0, 5) + "<br>";

let newStr = str.concat(" Welcome to JavaScript!");
Output.innerHTML += "4. Concatenated string: " + newStr + "<br>";

Output.innerHTML += "5. Uppercase: " + str.toUpperCase() + "<br>";
Output.innerHTML += "6. Lowercase: " + str.toLowerCase() + "<br>";

Output.innerHTML += "7. Starts with 'Hello': " + str.startsWith("Hello") + "<br>";
Output.innerHTML += "8. Ends with 'Tayyab.': " + str.endsWith("Tayyab.") + "<br>";

Output.innerHTML += "9. Index of 'Tayyab': " + str.indexOf("Tayyab") + "<br>";

let replacedStr = str.replace("Hello", "Hi");
Output.innerHTML += "10. Replaced string: " + replacedStr + "<br>";

let splitStr = str.split(",");
Output.innerHTML += "11. Split string: " + splitStr + "<br>";
