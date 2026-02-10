function truncate(str, maxlength) {
    return (str.length > maxlength) ? str.slice(0, maxlength - 1) + '…' : str;
  }
  
  // Примеры использования
  console.log(truncate("What I'd like to tell on this topic is:", 20)); // "What I'd like to te…"
  console.log(truncate("Hi everyone!", 20));                             // "Hi everyone!"
  console.log(truncate("Short", 10));                                    // "Short"
  console.log(truncate("", 5));                                          // "" (пустая строка)
  