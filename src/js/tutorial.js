(function() {
  var container = document.createElement('HEADER');
  var menuBtn = document.createElement('BUTTON');
  var nav = document.createElement('NAV');

  container.className = 'tutorial-header';
  menuBtn.className = 'tutorial-menu';
  menuBtn.innerHTML = '<img src="images/hamburger.png">';
  nav.className = 'tutorial-nav';
  nav.innerHTML = '<ul>' +
    '<li><a href="slides.html">0. 投影片</a></li>' +
    '<li><a href="step1.html">1. 建立網頁架構</a></li>' +
    '<li><a href="step2.html">2. 建立表單</a></li>' +
    '<li><a href="step3.html">3. 建立CSS架構</a></li>' +
    '<li><a href="step4.html">4. 版面配置</a></li>' +
    '<li><a href="step5.html">5. 響應式網頁</a></li>' +
    '<li><a href="step6.html">6. 完成版面配置</a></li>' +
    '<li><a href="step7.html">7. 加入背景影片</a></li>' +
    '<li><a href="step8.html">8. 滾動視差</a></li>' +
  '</ul>';
  container.appendChild(menuBtn);
  container.appendChild(nav);
  document.body.appendChild(container);

  menuBtn.addEventListener('click', function() {
    var clazz = container.classList;
    if (clazz.contains('is-open')) clazz.remove('is-open');
    else clazz.add('is-open');
  }, true);
})();
