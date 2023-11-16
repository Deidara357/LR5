function validateForm() {
    var pib = document.getElementById('pib').value;
    var variant = document.getElementById('variant').value;
    var phone = document.getElementById('phone').value;
    var faculty = document.getElementById('faculty').value;
    var address = document.getElementById('address').value;
  
    // Регулярні вирази для перевірки валідності даних
    var pibRegex = /^[А-ЯІЇЄ][а-яіїє]+\s[А-ЯІЇЄ]\.[А-ЯІЇЄ]\.$/;
    var variantRegex = /^\d{1,2}$/;
    var phoneRegex = /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/;
    var facultyRegex = /^[А-ЯІЇЄ][а-яіїє]+$/;
    var addressRegex = /^м\.\s[А-ЯІЇЄ][а-яіїє]+$/;
  
    var isValid = true;
  
    // Перевірка ПІБ
    if (!pibRegex.test(pib)) {
      document.getElementById('pib').classList.add('error');
      isValid = false;
    } else {
      document.getElementById('pib').classList.remove('error');
    }
  
    // Перевірка варіанту
    if (!variantRegex.test(variant)) {
      document.getElementById('variant').classList.add('error');
      isValid = false;
    } else {
      document.getElementById('variant').classList.remove('error');
    }
  
    // Перевірка телефону
    if (!phoneRegex.test(phone)) {
      document.getElementById('phone').classList.add('error');
      isValid = false;
    } else {
      document.getElementById('phone').classList.remove('error');
    }
  
    // Перевірка факультету
    if (!facultyRegex.test(faculty)) {
      document.getElementById('faculty').classList.add('error');
      isValid = false;
    } else {
      document.getElementById('faculty').classList.remove('error');
    }
  
    // Перевірка адреси
    if (!addressRegex.test(address)) {
      document.getElementById('address').classList.add('error');
      isValid = false;
    } else {
      document.getElementById('address').classList.remove('error');
    }
  
    // Виведення результатів
    if (isValid) {
      alert('Всі дані введені правильно:\nПІБ: ' + pib + '\nВаріант: ' + variant + '\nТелефон: ' + phone + '\nФакультет: ' + faculty + '\nАдреса: ' + address);
    } else {
      alert('Будь ласка, перевірте введені дані.');
    }
}
  

// Функція для генерації випадкового кольору
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
  
  // Функція для інверсії кольору з формату RGB
function invertColor(color) {
    // Розділяємо значення RGB
    var rgbValues = color.match(/\d+/g);
  
    // Інвертуємо кожен канал кольору та віднімаємо від 255
    var invertedRed = 255 - parseInt(rgbValues[0]);
    var invertedGreen = 255 - parseInt(rgbValues[1]);
    var invertedBlue = 255 - parseInt(rgbValues[2]);
  
    // З'єднуємо інвертовані канали та повертаємо результат
    return 'rgb(' + invertedRed + ',' + invertedGreen + ',' + invertedBlue + ')';
}

// Функція для зміни кольору при наведенні на клітинку "22"
function changeColorOnHover22(element) {
    element.addEventListener('mouseover', function () {
      if (element.innerText == '22') {
        element.style.backgroundColor = getRandomColor();
      }
    });
}
  
// Функція для зміни кольору при кліку на клітинку "22"
function changeColorOnClick22(element) {
    element.addEventListener('click', function () {
      if (element.innerText === '22') {
        element.classList.toggle('selected');
        element.style.backgroundColor = invertColor(element.style.backgroundColor);
      }
    });
}

// Функція для зміни кольору стовпця при подвійному кліку
function changeColumnColorOnDoubleClick(table, columnIndex) {
    table.addEventListener('dblclick', function () {
      var rows = table.rows;
      var hasCell22 = false;
  
      // Перевірка, чи є в поточному стовпці клітинка зі значенням "22"
      for (var i = 0; i < rows.length; i++) {
        if (rows[i].cells[columnIndex].innerText === '22' && rows[i].cells[columnIndex].classList.contains('selected')) {
          hasCell22 = true;
          break;
        }
      }
  
      // Якщо є клітинка "22" в стовпці та вона відзначена як вибрана, то змінюємо кольори
      if (hasCell22) {
        var color = getRandomColor();
        for (var i = 0; i < rows.length; i++) {
          rows[i].cells[columnIndex].style.backgroundColor = color;
        }
      }
    });
}
  
  
// Створення таблиці та налаштування обробників подій
var table = document.getElementById('myTable');
for (var i = 0; i < 6; i++) {
    var row = table.insertRow();
    for (var j = 0; j < 6; j++) {
        var cell = row.insertCell();
        var cellValue = i * 6 + j + 1;
        cell.innerText = cellValue;
  
        // Виклик нової функції для клітинок зі значенням "22"
        changeColorOnHover22(cell);
        changeColorOnClick22(cell);
        changeColumnColorOnDoubleClick(table, j);
    }
}