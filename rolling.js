// 롤링배너 복제본 형성 
var wid = $('.con3 .flex div').outerWidth();

let roller = $('.con3 .flex');
roller.attr('id','roller1');

let clone = roller.clone();
clone.attr('id','roller2');

//wrap의 하위 자식으로 부착 
$('.con3 .flex').after(clone);

//왼쪽으로 옮기기 
$('#roller1').css({"left":0});
$('#roller2').css({"left": "2400px"});

roller.addClass('original');
clone.addClass('clone');
