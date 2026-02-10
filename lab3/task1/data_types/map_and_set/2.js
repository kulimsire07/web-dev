function aclean(arr) {
    let map = new Map();
  
    for (let word of arr) {
      // приводим к нижнему регистру, сортируем буквы и объединяем обратно
      let sorted = word.toLowerCase().split('').sort().join('');
      map.set(sorted, word); // сохраняем только одно слово для каждого "ключа-анаграммы"
    }
  
    return Array.from(map.values());
  }
  
  // Пример использования
  let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
  
  console.log(aclean(arr)); 
  // Результат может быть: ["PAN", "cheaters", "era"] или ["nap", "teachers", "ear"]
  