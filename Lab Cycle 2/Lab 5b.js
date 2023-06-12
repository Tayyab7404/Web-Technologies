// Math Object:

let Output = document.getElementById("MathOutput");

Output.innerHTML = "<u>Math Properties:</u><br>";
Output.innerHTML += "1. Pi Value: " + Math.PI + "<br>";
Output.innerHTML += "2. Eulers Number(E): " + Math.E + "<br>";
Output.innerHTML += "3. Natural Logarithm of 2: " + Math.LN2 + "<br>";
Output.innerHTML += "4. Natural Logarithm of 10: " + Math.LN10 + "<br>";
Output.innerHTML += "5. Base 2 Logarithm of e: " + Math.LOG2E + "<br>";
Output.innerHTML += "6. Base 10 Logarithm of e: " + Math.LOG10E + "<br><br>";

Output.innerHTML += "<u>Math Methods:</u><br>";
Output.innerHTML += "1. Round off value of 3.454: " + Math.round(3.454) + "<br>";
Output.innerHTML += "2. Ceil of 4.3: " + Math.ceil(4.3) + "<br>";
Output.innerHTML += "3. Floor of 4.3: " + Math.floor(4.3) + "<br>";
Output.innerHTML += "4. Absolute value of -3.24: " + Math.abs(-3.24) + "<br>";

Output.innerHTML += "5. Maximum of (8,12,23): " + Math.max(8,12,23) + "<br>";
Output.innerHTML += "6. Minimum of (8,12,23): " + Math.min(8,12,23) + "<br>";

Output.innerHTML += "7. 2 to the power 3: " + Math.pow(2, 3) + "<br>";
Output.innerHTML += "8. Square root of 16: " + Math.sqrt(16) + "<br>";

Output.innerHTML += "9. Sine of 30 degrees: " + Math.sin(Math.PI / 6) + "<br>";
Output.innerHTML += "10. Cosine of 60 degrees: " + Math.cos(Math.PI / 3) + "<br>";
Output.innerHTML += "11. Tangent of 45 degrees: " + Math.tan(Math.PI / 4) + "<br>";

Output.innerHTML += "12. Random number between 0 and 1: " + Math.random() + "<br>";
Output.innerHTML += "13. Random integer from 1 and 10: " + Math.floor(Math.random()*10 + 1) + "<br>";