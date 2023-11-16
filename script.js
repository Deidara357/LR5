function validateForm() {
    var pib = document.getElementById('pib').value;
    var group = document.getElementById('group').value;
    var phone = document.getElementById('phone').value;
    var idCard = document.getElementById('idCard').value;
    var faculty = document.getElementById('faculty').value;
  
    var pibRegex = /^[А-ЯІЇЄ][а-яіїє]+\s[А-ЯІЇЄ]\.[А-ЯІЇЄ]\.$/;
    var groupRegex = /^[А-ЯІЇЄ]{2}-\d{2}$/;
    var phoneRegex = /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/;
    var idCardRegex = /^[А-ЯІЇЄ]{2} №\d{6}$/;
    var facultyRegex = /^[А-ЯІЇЄ]{4}$/;
  
    var isValid = true;
  
    // Перевірка ПІБ
    if (!pibRegex.test(pib)) {
      document.getElementById('pib').classList.add('error');
      isValid = false;
    } else {
      document.getElementById('pib').classList.remove('error');
    }
  
    // Перевірка варіанту
    if (!groupRegex.test(group)) {
      document.getElementById('group').classList.add('error');
      isValid = false;
    } else {
      document.getElementById('group').classList.remove('error');
    }
  
    // Перевірка телефону
    if (!phoneRegex.test(phone)) {
      document.getElementById('phone').classList.add('error');
      isValid = false;
    } else {
      document.getElementById('phone').classList.remove('error');
    }
  
    // Перевірка idCard
    if (!idCardRegex.test(idCard)) {
      document.getElementById('idCard').classList.add('error');
      isValid = false;
    } else {
      document.getElementById('idCard').classList.remove('error');
    }

    // Перевірка факультету
    if (!facultyRegex.test(faculty)) {
      document.getElementById('faculty').classList.add('error');
      isValid = false;
    } else {
      document.getElementById('faculty').classList.remove('error');
    }

    // Виведення результатів
    if (isValid) {
      alert('Всі дані введені правильно:\nПІБ: ' + pib + '\nВаріант: ' + group + '\nТелефон: ' + phone + '\nФакультет: ' + idCard + '\nАдреса: ' + faculty);
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
  var rgbValues = color.match(/\d+/g);
  var invertedRed = 255 - parseInt(rgbValues[0]);
  var invertedGreen = 255 - parseInt(rgbValues[1]);
  var invertedBlue = 255 - parseInt(rgbValues[2]);
  return 'rgb(' + invertedRed + ',' + invertedGreen + ',' + invertedBlue + ')';
}

// Функція для зміни кольору при наведенні на клітинку з номером 17
function changeColorOnHover17(element) {
  element.addEventListener('mouseover', function () {
      if (element.innerText == '17') {
          element.style.backgroundColor = getRandomColor();
      }
  });
}

// Функція для відображення палітри при кліку на клітинку з номером 17
function showColorPalette(element) {
  var colorPalette = document.getElementById('colorPalette');
  var colorPicker = document.getElementById('colorPicker');
  var okButton = document.getElementById('okButton');

  colorPalette.style.top = element.offsetTop + 'px';
  colorPalette.style.left = element.offsetLeft + 'px';
  colorPalette.style.display = 'block';

  okButton.addEventListener('click', function () {
      element.style.backgroundColor = colorPicker.value;
      colorPalette.style.display = 'none';
  });
}

// Функція для зміни кольору рядків
function changeRowColor(rowNum, color) {
  var rows = table.getElementsByTagName('tr');
  rows[rowNum].style.backgroundColor = color;
}

// Функція для обробки події DoubleClick
function handleDoubleClick(cell) {
  var cellValue = parseInt(cell.innerText);

  // Перевірка чи натискання було на клітинці з номером "17"
  if (cellValue === 17) {
      var rowIndex = cell.parentNode.rowIndex;

      // Зміна кольору рядків, починаючи з обраного і через один
      changeRowColor(rowIndex, 'lightblue');
      changeRowColor(rowIndex + 2, 'lightblue');
  }
}

// Створення таблиці
var table = document.getElementById('myTable');

//Налаштування викликів функцій
for (var i = 0; i < 6; i++) {
  var row = table.insertRow();
  for (var j = 0; j < 6; j++) {
      var cell = row.insertCell();
      var cellValue = i * 6 + j + 1;
      cell.innerText = cellValue;

      //Виклик функцій
      changeColorOnHover17(cell);
      
      cell.addEventListener('click', function () {
          if (this.innerText === '17') {
              showColorPalette(this);
          }
      });

      cell.addEventListener('dblclick', function () {
        handleDoubleClick(this);
      });
  }
}