document.body.innerHTML=`
	<div class = "content">
		<div class = "inputQ">
			<p>Напишіть своє питання і натисніть на кулю<\p>
			<input type = "text" id ="question">
		</div>
			<div class = "ball" >
			<span  class = "answer"></span>
			<img src = "1.png">
				
			</div>
	</div>

`;

const phrases = ["Так","Ні","Можливо","Запитайте пізніше","Без сумнівів","Сумніваюсь","100% - так","Не найкраща ідея","Шансів багато", "Шансів мало","Думаю, що так","Точно так","Беззаперечно так"  ];

document.querySelector('img').onclick = function ball() {
if(question.value.length==0){
    alert("Введіть, будь ласка, своє запитання");}
    else{
	document.querySelector('img').classList.add('animation');    
    let clearAnimatiom = setTimeout(function() {
        document.querySelector('img').classList.remove('animation');
      }, 1500)
    let returnAnswer = phrases[Math.floor(Math.random()*phrases.length)];
    document.querySelector('.answer').innerHTML = returnAnswer;
}
}
