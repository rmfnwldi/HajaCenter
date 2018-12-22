<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="/part/header.jsp"></jsp:include>
<link rel="stylesheet" type="text/css" href="/HajaCenter/css/menu2.css">
<script type="text/javascript" src="/HajaCenter/script/menu2.js"></script>
</head>
<jsp:include page="/part/topMenu.jsp"></jsp:include>
<div id="container">
	<div id="bennerimage">
		<img src="image/benner.jpg" width="100%" height="300px">
	</div>
	<div id="bennercolor">대 관 하 기</div>
	<div id="containerbody">
		<div>
			<ul id="sidemenu">
				<li>
					<a href="javascript:location.reload();">대관 신청</a>
				</li>
				<li>
					<a href="rentlookup.jsp">신청 조회</a>
				</li>
				<li>
					<a href="rentcancel.jsp">신청 취소</a>
				</li>
				<li>
					<a href="rentcheck.jsp">결과 확인</a>
				</li>
			</ul>
		</div>
		<div id="maintext">
			<br>
			<h1 style="color: #757575;">대관 신청</h1>
			<br>
			<br>
			<br>
			<br>
			<button id="btnback" class="btn btncalender">이전달</button>
			<b id="monthTitle"></b>
			<button id="btngo" class="btn btncalender">다음달</button>
			<div id="divtable">
				<form>
					<table>
						<!-- 달력 들어가는 부분 -->
					</table>
					<div style="margin-bottom: 100px;">
						보여줌 :
						<input type="text" name="dateroom" id="dateroom" readonly="readonly">
						&emsp;&emsp; 히든할거 :
						<!-- 히든으로 날짜 데이터 넘겨줌  -->
						<input type="text" name="date" id="date" readonly="readonly">
						<!-- 히든으로 공간 데이터 넘겨줌 -->
						<input type="text" name="roomId" id="roomId" readonly="readonly">
						<div>시간</div>
						<div>
						<input type="checkbox" name="time" id="chk1" value="1" onclick="checkLimit(this)" >AM 09:00 ~ AM 10:00<br>
						<input type="checkbox" name="time" id="chk1" value="2" onclick="checkLimit(this)" >AM 10:00 ~ AM 11:00<br>
						<input type="checkbox" name="time" id="chk1" value="3" onclick="checkLimit(this)" >AM 11:00 ~ AM 12:00<br>
						<input type="checkbox" name="time" id="chk1" value="4" onclick="checkLimit(this)" >AM 12:00 ~ PM 01:00<br>
						<input type="checkbox" name="time" id="chk1" value="5" onclick="checkLimit(this)" >PM 01:00 ~ PM 02:00<br>
						<input type="checkbox" name="time" id="chk1" value="6" onclick="checkLimit(this)" >PM 02:00 ~ PM 03:00<br>
						<input type="checkbox" name="time" id="chk1" value="7" onclick="checkLimit(this)" >PM 03:00 ~ PM 04:00<br>
						<input type="checkbox" name="time" id="chk1" value="8" onclick="checkLimit(this)" >PM 04:00 ~ PM 05:00<br>
						<input type="checkbox" name="time" id="chk1" value="9" onclick="checkLimit(this)" >PM 05:00 ~ PM 06:00<br>
						<button class="subreset" type="button" onclick="chkContinuity()" >대관 신청</button>
						<button class="subreset" type="reset" name="reset" onclick="resetCount()">선택 취소</button>
						</div>
					</div>
					<!-- <input class="btn btncalender" type="submit" value="결정하기"> -->
				</form>
				<button id="radioButton" class="btn btncalender">선택</button>
			</div>
		</div>
	</div>
</div>
<script>
	makeCalendar();
</script>
<jsp:include page="/part/footer.jsp"></jsp:include>