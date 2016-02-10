var year = document.getElementById('calender_year').value;
var month = document.getElementById('calender_month').value;

console.log(year)
console.log(month);

if (month === '1') {

}

var day = new Date(year,month,0).getDate();
console.log(day)

var firstday = new Date(year,month - 1,1).getDay();
console.log(firstday)

/********************************行追加*********************************/
var addTr = function (){
  var element = document.createElement('tr');
  var line = document.getElementById('calender')
  line.appendChild(element);
};

for(var i = 1 ; i <= 6 ; i = i + 1){
  addTr();
}

/********************************セル追加*********************************/
var addTd = function (){
  var element2 = document.createElement('td');
  var weeks = document.getElementById('calender').children;

  for(var i = 0; i < weeks.length; i++) {
    var week = weeks[i];
    console.log(week);
  }

  // day.appendChild(element2);
}

addTd();


// var line = day %
// 日付がどのくらいあるのか取得する

// 何曜日から始まるのか取得する

// 何行必要なのか計算する

// tr を生成する

// td を生成する
//firstdayの分をcolspanで開ける
//合計7日になったら次の行になるようにする
//後ろにも余白を開ける
