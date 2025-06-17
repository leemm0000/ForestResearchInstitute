/* 
한페이지에 10개 행 보여지게 설정
페이지네이션 안에 번호 추가
페이지 번호 클릭시 이벤트
100개의 행을 숨기고 현재 선택한 범위만 보여주기 .active추가
*/
let rowsPerPage = 10; //한페이지에서 보여줄 행 개수
let rows = document.querySelectorAll('tbody tr');//전체 테이블 행 수집
let rowsCount = rows.length;//총 행 개수
let pageCount = Math.ceil(rowsCount/rowsPerPage);//총 페이지 개수
let numbers = document.querySelector('#numbers');//페이지 번호 들어갈ul
// console.log(numbers);
//페이지 번호 <li><a href="">1</a></li>
for(let i = 1; i <= pageCount; i++){
  numbers.innerHTML += `<li><a href="">${i}</a></li>`
}
//클릭이벤트
let numberBtn = numbers.querySelectorAll('a');
numberBtn.forEach(function(item, idx){
  item.addEventListener('click', function(e){
    e.preventDefault();
    console.log(item,idx)
    displayRow(idx)
  })
})
//테이블 10개씩 보여주는 함수
function displayRow(idx){
  let start = idx * rowsPerPage; //시작인덱스
  let end = start + rowsPerPage; //끝인덱스
  let rowsArray = [...rows];
  // console.log(start);
  // console.log(end);
  // console.log(rowsArray);
  //tr다 지우기, 클릭한 영역 해당하는 행만 보여주기
  for(let row of  rowsArray){
    row.style.display = 'none';
  }
  let newRows = rowsArray.slice(start, end);
  for(let row of newRows){
    row.style.display = ''
  }
  for(let btn of numberBtn){
    btn.classList.remove('active')
  }
  numberBtn[idx].classList.add('active');
}
displayRow(0);

//좌우버튼 선택
let prevPageBtn = document.querySelector('.pagination .arrow-left');
let nextPageBtn = document.querySelector('.pagination .arrow-right');
let pageActiveIdx = 0; //현재 보고있는 페이지 번호 그룹(0)
let maxPageNum = 3; //한 번에 보여줄 페이지 최대개수
console.log(prevPageBtn, nextPageBtn);
//전부지우기
for(let nb of numberBtn){
  nb.style.display='none'
}
//현재 페이지 그룹에 해당하는 페이지 번호만 보여주기
function displayPage(num){
  //1. 모든페이지 번호 숨기기
  for(let nb of numberBtn){
    nb.style.display='none'
  }
  //2. 전체 페이지 번호 그룹 개수 
  let totalGroup = Math.ceil(pageCount / maxPageNum)
  //3. 현재 보고있는 그룹 num에 해당하는 시작/끝 계산'
  let start = num * maxPageNum;
  let end = start + maxPageNum; 
  //4. 배열로 잘라내기
  let groupArr = [...numberBtn].slice(start, end)
  //5. 잘라낸 번호만 화면에서 보여주기
  for(let btn of groupArr){
    btn.style.display = ''
  }
  //6. 왼쪽 버튼제어
  //첫 그룹이면 왼쪽버튼 숨기기, 아니면 보이게 하기
  if (pageActiveIdx === 0) {
    prevPageBtn.style.display = 'none';
  } else {
    prevPageBtn.style.display = 'inline-block'; 
  }
  //7. 오른쪽 버튼 제어
  //마지막 그룹이면 안보이게 아니면 보이게
  if (pageActiveIdx === totalGroup - 1) {
    nextPageBtn.style.display = 'none'; 
  } else {
    nextPageBtn.style.display = 'inline-block'; 
  }
}
//오른쪽 버튼 클릭시 : 다음페이지 그룹 보여주기
nextPageBtn.addEventListener('click', () => {
  pageActiveIdx++;
  displayPage(pageActiveIdx);
  displayRow(pageActiveIdx * maxPageNum);
})
//왼쪽 버튼 클릭시 : 이전페이지 그룹 보여주기
prevPageBtn.addEventListener('click', () => {
  pageActiveIdx--;
  displayPage(pageActiveIdx);
  displayRow(pageActiveIdx * maxPageNum);
})
displayPage(0);