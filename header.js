 let lastScrollY = window.scrollY;
  const header = document.getElementById('header');

  window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
      // 아래로 스크롤: 헤더 숨김
      header.style.top = '-170px';
    } else {
      // 위로 스크롤: 헤더 보임
      header.style.top = '0';
    }
    lastScrollY = window.scrollY;
  });
