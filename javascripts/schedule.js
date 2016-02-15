// デフォルトの行数
var DEFAULT_ROW = 6;
// 一週間の日にちの数
var ONE_WEEK_DAYS = 7;

var year = document.getElementById('calender_year').value;
var month = document.getElementById('calender_month').value;

if (month === '1') {

}

// 対象の月の日数
var dayLength = new Date(year,month,0).getDate();

// 開始曜日番号
var firstday = new Date(year,month - 1,1).getDay();

/********************************行追加*********************************/
var addTr = function (argCalender){
  var line = document.createElement('tr');
  argCalender.appendChild(line);
};

var calender = document.getElementById('calender');
for(var i = 0 ; i < DEFAULT_ROW ; i++){
  addTr(calender);
}

/********************************セル追加*********************************/
var addTd = function (argWeek, colspan){
  var dayElement = document.createElement('td');
  argWeek.appendChild(dayElement);
};

var count = 1;
var weeks = document.getElementById('calender').children;
for(var i = 0; i < weeks.length; i++) {
  var week = weeks[i];
  for(var l = 0; l < ONE_WEEK_DAYS; l++ ){
    if(count === 'firstday') {
    // 繋げない時
      addTd(week)
    }else{
    // もしつなげるなら
      addTd(week, "colSpan",'firstday')
    }
  }
}

  // day.appendChild(element2);




// var line = day %
// 日付がどのくらいあるのか取得する

// 何曜日から始まるのか取得する

// 何行必要なのか計算する

// tr を生成する

// td を生成する
//firstdayの分をcolspanで開ける
//合計7日になったら次の行になるようにする
//後ろにも余白を開ける
