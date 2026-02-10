function count(obj) {
    return Object.keys(obj).length; // возвращает количество "обычных" свойств
  }
  
  // Пример использования
  let user = {
    name: 'John',
    age: 30
  };
  
  console.log(count(user)); // 2
  
  // Ещё пример
  let empty = {};
  console.log(count(empty)); // 0