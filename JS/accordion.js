/* accordion 의 클래스를 가진 Element 를 모두 읽어온다. */
let acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
    /* 읽어온 accordion 요소들에 click 이벤트 추가. */
    acc[i].addEventListener("click", function() {
        /* accordion 클릭 이벤트 발생 시 active class 추가 / 삭제 */
        this.classList.toggle("active");

        /* 자식 요소를 잃어와 높이로 컨텐츠 보이고, 안보이고 설정하기. */
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}