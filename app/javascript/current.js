function set2fig(num) {
  // 桁数が1桁だったら先頭に0を加えて2桁に調整する
  var ret;
  if( num < 10 ) { ret = "0" + num; }
  else { ret = num; }
  return ret;
}

// setTimeout(function () {
//   location.reload();
// }, 1500);

function showClock2() {
  var nowTime = new Date();
  var tags = JSON.parse(document.getElementById('up_time').dataset.json);
  var count = JSON.parse(document.getElementById('count_down_1').dataset.json);
  var count = JSON.parse(document.getElementById('count_down_2').dataset.json);

  var remain_time = Math.round((nowTime.getTime() - tags*1000)/1000)
  var nowHour = set2fig( nowTime.getHours() );
  var nowMin  = set2fig( nowTime.getMinutes() );
  var nowSec  = set2fig( nowTime.getSeconds() );
  var msg = "現在時刻は、" + nowHour + ":" + nowMin + ":" + nowSec + " です。";
  document.getElementById("up_time").innerHTML = tags + msg + remain_time + "a" + nowTime.getTime() + "a" + tags*1000 + "a" + count;
  document.getElementById("count_down_1").innerHTML = Math.round(604800 - (nowTime.getTime()/1000 -count))
  document.getElementById("count_down_2").innerHTML = Math.round(18000 - (nowTime.getTime()/1000 -count))
  // document.getElementById("count_down").innerHTML = 86400 - (nowTime.getTime() -count*1000)
  refresh();
}

function refresh() {
  setTimeout(showClock2, 1000);
}
  
window.addEventListener('load', showClock2)
