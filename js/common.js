// class가 search인 요소를 css 선택자로 찾아서 그것을 searchEl이라는 변수에 할당
// document는 html의 도큐먼트를 의미함 ~ searchEl안에 input이 있다는 걸 효율적으로 나타낸 거임
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input')

// search 라는 클래스를 가지고 있는 div 요소를 클릭하면 함수가 실행 - 함수 내용이 인풋 요소에 포커스를 해라
// 돋보기 누르면 검색창 나옴 희희
searchEl.addEventListener('click', function () {
// Logic..
searchInputEl.focus();
});

// searchInputEl 부분에 만약 focus가 되면 함수가 실행이 될 거다 - 이렇게 실행되는 함수는 핸들러
// 특정 요소에 class 정보를 가지고 있는 객체에서 class 내용 (focused)을 추가하겠다 !
// set= 지정한다, Attribute= html의 속성 - html 속성을 "지정"하는 것 
searchInputEl.addEventListener('focus', function () {
searchEl.classList.add('focused');
searchInputEl.setAttribute('placeholder', '통합검색');
});

// 위의 값과 반대로 "지워" 지는 것
searchInputEl.addEventListener('blur', function () {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '');
    });


    // 올해가 몇 년도인지 계산
const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear()
