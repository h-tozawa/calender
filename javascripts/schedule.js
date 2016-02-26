// デフォルトの行数
var DEFAULT_ROW = 6;
// 一週間の日にちの数
var ONE_WEEK_DAYS = 7;

var test = {};

var change = function(num){
  var year = Number(document.getElementById('calender_year').value);
  var month = Number(document.getElementById('calender_month').value);
  // NaN Not a Number
  if (isNaN(year)) {
    alert('年に変な値入れんな');
    return;
  }
  if (isNaN(month)) {
    alert('月に変な値入れんな');
    return;
  }

  if(month + num >= 1 && month + num < 13){
    month += num;
  }
  document.getElementById('calender_month').value = month.toString();
  // 対象の月の日数
  var dayLength = new Date(year,month,0).getDate();

  // 開始曜日番号
  var firstday = new Date(year,month - 1,1).getDay();

  /********************************行追加*********************************/
  var addTr = function (argCalender){
    var line = document.createElement('tr');
    argCalender.appendChild(line);
  };

  var calender_body = document.getElementById('calender_body');
  for(var i = 0 ; i < DEFAULT_ROW ; i++){
    addTr(calender_body);
  }

  /********************************セル追加*********************************/
  var addTd = function (argWeek, text, colspan){
    if (typeof(colSpan) == 'undefined') {
      colSpan = 0;
    }

    var dayElement = document.createElement('td');
    if(colspan > 0){
      dayElement.colSpan = colspan;
    }
    argWeek.appendChild(dayElement);
    var divElement = document.createElement('div');
    divElement.innerHTML = text;
    dayElement.appendChild(divElement);
    var textareaElement = document.createElement('textarea');
    textareaElement.className = "memo";
    dayElement.appendChild(textareaElement);
  };
  var sunday = 1;
  var weeks = document.getElementById('calender_body').children;
  // ループしてtdを作る
  var startIndex = firstday;
  var endIndex = startIndex + dayLength;

  // 前の colspan を作る
  if (firstday > 0) {
    var week = weeks[0];
    addTd(week, "", firstday);
  }

  for(var i = startIndex; i < endIndex; i++) {
    var weekIndex = Math.floor(i / ONE_WEEK_DAYS);
    var week = weeks[weekIndex];
    addTd(week, (i - startIndex + 1));
  }

  var endWeekIndex = Math.floor(endIndex / ONE_WEEK_DAYS);
//後ろのcolSpanを作る
  if((endIndex % ONE_WEEK_DAYS) !== 0) {
    var remainingDays = ONE_WEEK_DAYS - (endIndex % ONE_WEEK_DAYS);
    var week = weeks[endWeekIndex];
    addTd(week, "", remainingDays);
    endWeekIndex += 1;
  }

  for(var i = endWeekIndex; i < weeks.length; i++) {
    var week = weeks[i];
    addTd(week, "", ONE_WEEK_DAYS);
  }
};

document.getElementById('form').addEventListener('submit', function(event) {
  // form の送信を強制中断
  event.preventDefault();
}, false);




document.getElementById('prev').onclick = function(event, removeevent) {
    var month = Number(document.getElementById('calender_month').value);
  remenber(month);
  var calender = document.getElementById('calender');
  var calenderBody = document.getElementById('calender_body');
  calender.removeChild(calenderBody);
  calenderBody = document.createElement('tbody');
  calenderBody.id = 'calender_body';
  calender.appendChild(calenderBody);
  document.forms[""]
  change(-1);

};


document.getElementById('next').onclick = function(event) {
    var month = Number(document.getElementById('calender_month').value);
  remenber(month);


  var calender = document.getElementById('calender');
  var calenderBody = document.getElementById('calender_body');
  calender.removeChild(calenderBody);
  calenderBody = document.createElement('tbody');
  calenderBody.id = 'calender_body';
  calender.appendChild(calenderBody);

  change(+1);
};

function remenber(month){
  var texts = [];
  var tableBody = document.getElementById('calender_body');
  //⇩要素の取り方はいっぱいある
  // tableBody.querySelectorAll('tr > td > textarea');
  // var tableRows = tableBody.getElementsByTagName('tr');
  // for (var j = 0; j < tableRows.length; j++) {
  //   var tableRow = tableRows[j];
  //   var tds = tableRow.getElementsByTagName('td');
  //   for (var k = 0; k < tds.length; k++) {
  //     var td = tds[k];
  //     var textArea = td.getElementsByTagName('textarea')[0];
  //     texts.push(textArea.value);
  //   }
  // }

  var textareas = document.getElementsByClassName('memo');
  for (var i = 0; i < textareas.length; i++) {
    var year = document.getElementById('calender_year').value;
    var month = document.getElementById('calender_month').value;

    var key = year + month;

    var memo = memos[key];
    var text = memo[i];
    var storage = localstorage;
    localstorage.setItem(key,text);
    localstorage.getItem(key);

  }
  test[month] = texts;
  console.log(test);

  // var textArea = document.forms["tareacopy"].elements[i];
  // var tareaCopy = document.tareacopy.elements[i];
  // tareaCopy.value = textArea.value;
}




// 初期化
change();
