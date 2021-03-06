function set2fig(num) {
  // 桁数が1桁だったら先頭に0を加えて2桁に調整する
  var ret;
  if( num < 10 ) { ret = "0" + num; }
  else { ret = num; }
  return ret;
}

function seconds2(num) {
  var timeD = Math.floor(num / (24 * 60 * 60));
  var timeH = Math.floor(num % (24 * 60 * 60) / (60 * 60));
  var timeM = Math.floor(num % (24 * 60 * 60) % (60 * 60) / 60);
  var timeS = num % (24 * 60 * 60) % (60 * 60) % 60;
  var timeDMS = timeD + '日' + timeH + '時間' + timeM + '分' + timeS + '秒';
  return timeDMS
}

function showClock2() {
  var nowTime = new Date();
  var count = JSON.parse(document.getElementById('count_down').dataset.json);
  var count_down_1 = Math.round(604800 - (nowTime.getTime()/1000 -count))
  var count_down_2 = Math.round(86400 - (nowTime.getTime()/1000 -count))
  var count_down_3 = Math.round(18000 - (nowTime.getTime()/1000 -count))
  var count_down_4 = Math.round(3600 - (nowTime.getTime()/1000 -count))
  var count_down_5 = Math.round(60 - (nowTime.getTime()/1000 -count))
 
  // var msg = "現在時刻は、" + nowHour + ":" + nowMin + ":" + nowSec + " です。";

  if (count_down_1 > 0) {
  document.getElementById("count_down_1").innerHTML = "再表示まで" + seconds2(count_down_1) 
  }
  if (count_down_2 > 0) {
    document.getElementById("count_down_2").innerHTML = "再表示まで" + seconds2(count_down_2)
  }
  if (count_down_3 > 0) {
    document.getElementById("count_down_3").innerHTML = "再表示まで" + seconds2(count_down_3)
  }
  if (count_down_4 > 0) {
    document.getElementById("count_down_4").innerHTML = "再表示まで" + seconds2(count_down_4)
  }
  if (count_down_5 > 0) {
    document.getElementById("count_down_5").innerHTML = "再表示まで" + seconds2(count_down_5) 
  }
  
  // document.getElementById("count_down").innerHTML = 86400 - (nowTime.getTime() -count*1000)
  refresh();
}

function refresh() {
  setTimeout(showClock2, 1000);
}
  
window.addEventListener('load', showClock2)
