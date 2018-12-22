//Calendar 객체 생성하기
var Calendar = new Date();
var SubCalendar = new Date();
var ReCalendar = new Date();

var year = Calendar.getFullYear(); // 년도
var month = Calendar.getMonth(); // 월 0~11
var today = Calendar.getDate(); // 일
var weekday = Calendar.getDay(); // 요일 0~6
var re_month = ReCalendar.getMonth();
var re_year = ReCalendar.getFullYear();





function makeCalendar() {

	// getDay() 는 요일을 숫자로 반환한다
	// 일요일은 0 월요일은 1
	var day_of_week = [ "일", "월", "화", "수", "목", "금", "토" ];


	Calendar.setDate(1); // 달력은 1일부터 표시!
	SubCalendar.setMonth(re_month);
	SubCalendar.setFullYear(re_year);
	
	console.log(re_month);
	console.log(re_year);

	var DAYS_OF_WEEK = 7; // 일주일은 7일

	// 그해 한 달의 마지막 일
	var DAYS_OF_MONTH = new Date(year, month, 0).getDate();

	$("#monthTitle").text(year + "년 " + (month + 1) + "월");

	var THEAD_start = "<thead>";
	var THEAD_end = "</thead>";

	// 행
	var TR_start = "<tr>";
	var TR_end = "</tr>";

	var TD_pass_start = "<td class='pass'>"
	var TD_week_start = "<td class='week'>"; // 월요일 ~ 일요일을 나타낼 td
	var TD_blank_start = "<td class=''blank>"; // blank (1일 이전의 빈칸)
	var TD_today_start = "<td class='tdtoday'>"; // 오늘 날짜
	var TD_day_start = "<td>"; // 평일
	var TD_saturday_start = "<td>";
	var TD_sunday_start = "<td>";

	var TD_end = "</td>";

	var DIV_today_start = "<div class='sptoday'>";
	var DIV_day_start = "<div class='day'>";
	var DIV_pass_start = "<div class='daypass'>";
	var DIV_saturday_start = "<div class='saturday'>";
	var DIV_sunday_start = "<div class='sunday'>";
	
	
	var DIV_end = "</div>";

	var str = "";

	// 여기서부터 tr 시작
	// 일단 맨 첫줄을 요일을 나타내자
	str += THEAD_start;
	str += TR_start; // 요일

	for (var i = 0; i < DAYS_OF_WEEK; i++) {

		// day_of_week배열에 있는 [일 월 화 수 목 금 토]를 순서대로 td에 담음
		str += TD_week_start + day_of_week[i] + TD_end;
	}

	// 요일표시가 끝나고 다음 줄 작성
	str += TR_end;
	str += THEAD_end;

	// 1일이 시작하기 전까지 요일은 빈칸처리
	// 예를 들어 2018년 11월 이라고 했을 때
	// 11월은 1일이 목요일이다
	// 그러므로 1일 전인 일 월 화 수요일은 빈칸처리 해야하므로
	for (var i = 0; i < Calendar.getDay(); i++) {
		str += TD_blank_start + TD_end;
	}

	// 이제 1일부터 시작
	for (var i = 0; i < DAYS_OF_MONTH; i++) {

		// 11월 17일
		if (Calendar.getDate() > i) {

			var day_year = SubCalendar.getFullYear(); // 년
			var day_month = SubCalendar.getMonth(); // 월
			var day = Calendar.getDate(); // 날짜
			var week_day = Calendar.getDay(); // 요일
			var datevalue = year + "-" + (month + 1) + "-" + day;

			var INPUT_room = "<span id='sp1'><input type='radio' name='roomselect' value='"
					+ datevalue
					+ "' class='room1'>합주실(소)</span><br>"
					+ "<span id='sp2'><input type='radio' name='roomselect' value='"
					+ datevalue
					+ "' class='room2'>합주실(대)</span><br>"
					+ "<span id='sp3'><input type='radio' name='roomselect' value='"
					+ datevalue
					+ "' class='room3'>커뮤니티</span><br>"
					+ "<span id='sp4'><input type='radio' name='roomselect' value='"
					+ datevalue
					+ "' class='room4'>999홀</span><br>"
					+ "<span id='sp5'><input type='radio' name='roomselect' value='"
					+ datevalue + "' class='room5'>허브홀</span>";

		/*	console.log("day" + day);
			console.log("today" + today);
			console.log("day_month" + day_month);
			console.log("month" + month);
			console.log("day_year" + day_year);
			console.log("year" + year);*/

			// 일요일이면 tr로 한칸 내린다
			if (week_day == 0) {
				str += TR_start;
			}

			// 해당하는 달에서 지나간 날짜를 막음
			if (day < today && day_month == month && day_year == year) {
				
				str += TD_pass_start + DIV_pass_start + day + DIV_end + TD_end;


				// 해당하는 달에서 지나간 달을 막음
			} else if (year == day_year && day_month > month) {
				str += TD_pass_start + DIV_pass_start + day + DIV_end + TD_end;

				
				// 해당하는 달에서 지나간 년도를 막음
			} else if (day_year > year) {
				str += TD_pass_start + DIV_pass_start + day + DIV_end + TD_end;

			}

			// 오늘 날짜
			else if (day == today && day_month == month && day_year == year) {

				str += TD_today_start + DIV_today_start + day + DIV_end
						+ INPUT_room + TD_end;
			}

			else {

				switch (week_day) {

				case 0: // 일요일

					str += TD_sunday_start + DIV_sunday_start + day + DIV_end
							+ INPUT_room + TD_end;

					break;

				case 6: // 토요일
					str += TD_saturday_start + DIV_saturday_start + day
							+ DIV_end + INPUT_room + TD_end;
					str += TR_end;
					break;

				default: // 평일
					str += TD_day_start + DIV_day_start + day + DIV_end
							+ INPUT_room + TD_end;
					break;
				}

			}

		}

		// 다음 날짜로 넘어간다
		Calendar.setDate(Calendar.getDate() + 1);

	}

	str += "</td></tr>";

	$("table").html(str);

}











//선택 가능한 checkbox의 갯수
var maxChecked = 3;

//선택한 checkbox의 총갯수
var totalChecked = 0;

//checkbox총 선택수를 3개로 제한
function checkLimit(obj) {
  if (obj.checked == true){
      totalChecked += 1;
  	chkRow = obj.checked.value;
  }else{
      totalChecked -= 1;
  }
  if (totalChecked > maxChecked) {
      alert ("최대 3개 까지만 가능합니다.");
      obj.checked = false;
 		totalChecked -= 1;
  }
  
}

//취소 선택시 선택한 수를 0으로
function resetCount(){
  totalChecked = 0;
}

//대관신청 클릭시 연속된 시간인지 날짜와 방이 선택됐는지 확인
function chkContinuity() {
	// 체크박스를 가져옴
	var chk = document.getElementsByName("time");
	
	//체크박스의 전체 개수
	var len = chk.length;
	
	//체크된 체크박스의 value를 담기위한 변수
	var chkRow;
	
	for(var i=0; i<len; i++){
		//체크가 되어있는 값 구분
		if(chk[i].checked == true){
			 //value를 담음
			chkRow = chk[i].value;
			break;
			}
		}
	
	//배열로 넣어야되기 때문에 숫자 다시설정
	var select1 = (parseInt(chkRow) - 1);
	var select2 = (parseInt(chkRow));	
	var select3 = (parseInt(chkRow) + 1);
	
	//연속으로 체크되었는지 확인 선택된갯수로 switch문
	//날짜와 방이 선택됐는지 확인 선택 되었으면 submit
	//연속으로 선택하지 않으면  전체버튼을 해제하고 totalChecked 초기화	
	switch (totalChecked) {
	case 0:
		alert ("시간을 선택하세요");
		break;
		
	case 1:
		if(submitCheck != null){
			calendar.submit();
		}else{
			alert ("날짜와 방을 선택해주세요");
		}
		break;
		
	case 2:
		if(chk[select1].checked == true && chk[select2].checked == true){
			if(submitCheck != null){
				calendar.submit();
			}else{
				alert ("날짜와 방을 선택해주세요");
			}
			break;
		}else {
			alert ("시간이 연속되게 선택해주세요");
			for(i = 0; i < len; i++) {
				chk[i].checked = false;
			}
			totalChecked = 0;
			break;
		}
		break;
		
	case 3:
		if(chk[select1].checked == true && chk[select2].checked == true && chk[select3].checked == true){
			if(submitCheck != null){
				calendar.submit();
			}else{
				alert ("날짜와 방을 선택해주세요");
			}
			break;
		}else {
			alert ("시간이 연속되게 선택해주세요");
			for(i = 0; i < len; i++) {
				chk[i].checked = false;
			}
			totalChecked = 0;
			break;
		}
		break;
	}
}

























$(function() {

	// 이전 달로 가는 버튼
	$("#btnback").click(function() {

		month--;
		Calendar = new Date(year, month, today);
		makeCalendar();

		if (month == -1) {

			year--;
			month = 11;
			Calendar = new Date(year, month, today);
			makeCalendar();

		}
	});

	// 다음달로 가는 버튼
	$("#btngo").click(function() {

		if (month < 11) {
			month++;
			Calendar = new Date(year, month, today);
			makeCalendar();

		} else if (month == 11) {
			year++;
			month = 0;
			Calendar = new Date(year, month, today);
			console.log(month);
			makeCalendar();
		}

	});

	$("#radioButton").click(

	function() {
		var radioVal = $('input[name="roomselect"]:checked').val();
		if ($(".room1").is(":checked")) {

			var spantext = $("#sp1").text();
			var roomNumber = 1;

			$("#roomId").val(roomNumber);
			$("#date").val(radioVal);
			$("#dateroom").val(radioVal + " 합주실(소)");

		} else if ($(".room2").is(":checked")) {

			var spantext = $("#sp2").text();
			var roomNumber = 2;

			$("#roomId").val(roomNumber);
			$("#date").val(radioVal);
			$("#dateroom").val(radioVal + " 합주실(대)");

		} else if ($(".room3").is(":checked")) {

			var spantext = $("#sp3").text();
			var roomNumber = 3;

			$("#roomId").val(roomNumber);
			$("#date").val(radioVal);
			$("#dateroom").val(radioVal + " 커뮤니티");

		} else if ($(".room4").is(":checked")) {

			var spantext = $("#sp4").text();
			var roomNumber = 4;

			$("#roomId").val(roomNumber);
			$("#date").val(radioVal);
			$("#dateroom").val(radioVal + " 999홀");

		} else if ($(".room5").is(":checked")) {

			var spantext = $("#sp5").text();
			var roomNumber = 5;

			$("#roomId").val(roomNumber);
			$("#date").val(radioVal);
			$("#dateroom").val(radioVal + " 허브홀");

		}

	});

});