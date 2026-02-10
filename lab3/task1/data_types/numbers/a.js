console.log("6.35.toFixed(1) =", 6.35.toFixed(1));  // некорректное округление из-за потери точности
console.log("6.35 * 10 =", 6.35 * 10);              // 63.5


let correct = Math.round(6.35 * 10) / 10;
console.log("Правильное округление 6.35 =", correct); // 6.4
