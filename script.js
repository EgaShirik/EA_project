


// Берём элемент для вывода таймера
let timer_show = document.getElementById("timer");
 
// Функция для вычисления разности времени
function diffSubtract(date1, date2) {
    return date2 - date1;
}
 
// Массив данных о времени
let end_date = {
    "full_year": "2023", // Год
    "month": "05", // Номер месяца
    "day": "31", // День
    "hours": "00", // Час
    "minutes": "00", // Минуты
    "seconds": "00" // Секунды
}
 
// Строка для вывода времени
let end_date_str = `${end_date.full_year}-${end_date.month}-${end_date.day}T${end_date.hours}:${end_date.minutes}:${end_date.seconds}`;

// Запуск интервала таймера
timer = setInterval(function () {
    // Получение времени сейчас
    let now = new Date();
    // Получение заданного времени
    let date = new Date(end_date_str);
    // Вычисление разницы времени 
    let ms_left = diffSubtract(now, date);
    // Если разница времени меньше или равна нулю 
    if (ms_left <= 0) { // То
        // Выключаем интервал
        clearInterval(timer);
        // Выводим сообщение об окончание
        alert("Время закончилось");
    } else { // Иначе
        // Получаем время зависимую от разницы
        let res = new Date(ms_left);
        // Делаем строку для вывода
        let str_timer = `${res.getUTCDate() - 1}:${res.getUTCHours()}:${res.getUTCMinutes()}:${res.getUTCSeconds()}`;
        // Выводим время
        timer_show.innerHTML = str_timer;
    }
}, 1000)

//////////////////////////////////////////////////
var servResponse = document.querySelector('#response');

document.forms.ourForm.onsubmit = function(event){
    event.preventDefault();

    var userInput = document.forms.ourForm.ourForm__inp.value;
    userInput = encodeURIComponent(userInput);
    var xhr = new XMLHttpRequest;
    xhr.open('GET', 'form.php?' + 'ourForm__inp=' + userInput);
    xhr.setRequestHeader('Content-type', 'application/x-www--form-urlencoded');
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            servResponse.textContent = xhr.responseText;
        }
    }
    xhr.send('ourForm__inp=' + userInput)
};
//////////////////////////////////////////////////////////////////////
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const input = document.querySelector('input');

function isEmailValid(value) {
 	return EMAIL_REGEXP.test(value);
}

function onInput() {
	if (isEmailValid(input.value)) {
		input.style.borderColor = 'green';
        document.getElementById('send').onclick = function() {
            /* var txt = document.getElementById('inp').value; */
              /* if(txt == '')
              { */
                document.getElementById('modal_wr1').style.display = "block";
                document.getElementById('modal2').style.display = "none";
                document.getElementById('modal1').style.display = "block";
                 
              /* else{
                document.getElementById('modal_wr1').style.display = "block";
                document.getElementById('modal1').style.display = "block";
                document.getElementById('modal2').style.display = "none";
              } */
            
          }
	} else {
		input.style.borderColor = 'red';
        document.getElementById('send').onclick = function() {
            document.getElementById('modal_wr1').style.display = "block";
            document.getElementById('modal1').style.display = "none";
            document.getElementById('modal2').style.display = "block";
        }
        
	}
}

input.addEventListener('input', onInput);
//////////////////////////////////////////////////

  document.getElementById('close_btn1').onclick = function(){
    document.getElementById('modal_wr1').style.display = "none";
    document.getElementById('modal1').style.display = "none";
  }
  document.getElementById('close_btn2').onclick = function(){
    document.getElementById('modal_wr1').style.display = "none";
    document.getElementById('modal2').style.display = "none";
  }

  document.getElementById('cross_btn1').onclick = function(){
    document.getElementById('modal_wr1').style.display = "none";
    document.getElementById('modal1').style.display = "none";
  }
  document.getElementById('cross_btn2').onclick = function(){
    document.getElementById('modal_wr1').style.display = "none";
    document.getElementById('modal2').style.display = "none";
  }
