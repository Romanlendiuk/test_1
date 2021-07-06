
function activeLink(as=0){
  const menuLinks = document.querySelectorAll('.menu__link')
  menuLinks[as].classList.add('active')
  
  for (const active of menuLinks){
   active.addEventListener('click',()=>{
       clearActiveClasses()
          active.classList.add('active')
      })
  }
  
  function clearActiveClasses() {
      menuLinks.forEach((active) =>{
          active.classList.remove('active')
      })
  }
}

activeLink(1)

/* Локализация datepicker */
$.datepicker.regional['ru'] = {
  closeText: 'Закрыть',
  prevText: 'Предыдущий',
  nextText: 'Следующий',
  currentText: 'Сегодня',
  monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
  monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
  dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
  dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
  dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
  weekHeader: 'Не',
  dateFormat: 'dd.mm.yy',
  firstDay: 1,
  isRTL: false,
  showMonthAfterYear: false,
  yearSuffix: ''
};
$.datepicker.setDefaults($.datepicker.regional['ru']);

let setDat=0

$(function(){
	$("#datepicker").datepicker({
		onSelect: function(date){
			$('#datepicker_value').val(date)
     setDat=date
			setTime()
     }
	});
	$("#datepicker").datepicker("setDate", $('#datepicker_value').val());
});


const calendarTime = document.querySelector('.calendar__time')
const timeChek = ['00:00 - 00:30','00:30 - 01:00','01:00 - 01:30','01:30 - 02:00','02:00 - 02:30',
'02:30 - 03:00','03:00 - 03:30','03:30 - 04:00','04:00 - 04:30','04:30 - 05:00','05:00 - 05:30','05:30 - 06:00','06:00 - 06:30',
'06:30 - 07:00','07:00 - 07:30','07:30 - 08:00','08:00 - 08:30','08:30 - 09:00','09:00 - 09:30','09:30 - 10:00','10:00 - 10:30',
'10:30 - 11:00','11:00 - 11:30','11:30 - 12:00','12:00 - 12:30','12:30 - 13:00','13:00 - 13:30','13:30 - 14:00','14:00 - 14:30',
'14:30 - 15:00','15:00 - 15:30','15:30 - 16:00','16:00 - 16:30','16:30 - 17:00','17:00 - 17:30','17:30 - 18:00','18:00 - 18:30',
'18:30 - 19:00','19:00 - 19:30','19:30 - 20:00','20:00 - 20:30','20:30 - 21:00','21:00 - 21:30','21:30 - 22:00','22:00 - 22:30',
'22:30 - 23:00','23:00 - 23:30','23:30 - 00:00',
]


function setTime(){  
  let id = 0
  const total = 48
  for (let i=0; i<total; i++){      
    let calendar = document.createElement('div')
    calendar.classList.add('time_chek')
    let tim =`<input class="time" type="checkbox" id="${id}" value="${timeChek[i]}"><label for="${id}">${timeChek[i]}</label>`
    id ++
    calendar.innerHTML=tim
    calendarTime.append(calendar) 
}
}




document.querySelector('.container_footer_button').addEventListener('click', ()=>{
  let chek = document.querySelectorAll('.time')
  for (let i =0; i< chek.length; i++){
    if (chek[i].checked){
      selectedTime = chek[i].value
      console.log('selected' + ' - ' + setDat + '   ' + selectedTime)
      break
    }    
  }
  
})
