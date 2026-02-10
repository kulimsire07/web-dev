function extractCurrencyValue(str) {
    return +str.slice(1); // убираем первый символ "$" и преобразуем в число
  }
  
  // Примеры использования
  console.log(extractCurrencyValue('$120')); // 120
  console.log(extractCurrencyValue('$45.50')); // 45.5
  console.log(extractCurrencyValue('$0')); // 0
  
  // Проверка на равенство
  console.log(extractCurrencyValue('$120') === 120); // true
  