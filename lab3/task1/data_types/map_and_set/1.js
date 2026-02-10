function unique(arr) {
    return Array.from(new Set(arr)); // создаём Set для уникальных значений и превращаем обратно в массив
  }
  
  // Пример использования
  let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  console.log(unique(values)); // ["Hare", "Krishna", ":-O"]
  
  // Проверка типа значений
  let mixed = [1, 2, 2, 3, "1", "2", "2"];
  console.log(unique(mixed)); // [1, 2, 3, "1", "2"]
  