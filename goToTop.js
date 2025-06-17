 
let backToTop = document.getElementById('backToTop');//버튼선택
let docElem = document.documentElement; //화면선택
let scrollAmount; //스크롤양 저장하는 변수 미리 선언

//스크롤 이벤트 
window.addEventListener('scroll', function(){
  scrollAmount = docElem.scrollTop;
  console.log('스크롤 위치', scrollAmount);
  if(scrollAmount>1700){
    backToTop.classList.add('visible');
    console.log('visible추가')
  }
  else{
    backToTop.classList.remove('visible');
  }
})