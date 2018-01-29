window.addEventListener('DOMContentLoaded', function () {

    var popupBtn = document.querySelector('#ffpopupbtn'), popup; window.ff_classic_count = 1, window.ffref = 'ben'
    var styles = ".flex {    display: -webkit-box;    display: -webkit-flex;    display: -ms-flexbox;    display: flex;}.justify-content-center {    -webkit-box-pack: center;    -webkit-justify-content: center;    -ms-flex-pack: center;    justify-content: center;}.justify-space-between {    -webkit-box-pack: space-between;    -webkit-justify-content: space-between;    -ms-flex-pack: space-between;    justify-content: space-between;}.align-items-center {    -ms-flex-align: center;    -webkit-align-items: center;     align-items: center;    -webkit-box-align: center;}aside#ffpopup {    all: unset;    position: fixed;    opacity: 0;    visibility: hidden;    height: 100vh;    width: 100vw;    top: 0;    transition: all .5s linear;    left: 0;    background: rgba(0,0,0,.8);}aside#ffpopup * {    font-family: 'Poppins', sans-serif;}aside#ffpopup #ff-popup-inner img {    max-width: 60%;}aside#ffpopup #ff-popup-inner {    /* height: 400px; */    width: 400px;    max-width: 100%;    background: white;    padding: 0 0rem 1rem;}#ffpopup.show {    opacity: 1;    visibility: visible;}div#ff-img-wrap {    text-align: center;}div#ffpopupouter {    height: 100%;}hr {    opacity: .2;}div#ff-popup-close {    cursor:pointer;padding: 0 1.5rem 0 0;    font-size: 12px;}button#ff-popup-go {    width: 100px;    height: 30px;    background: initial;    border: 0px;    background: #0089ff;    color: white;}aside#ffpopup * p {    font-weight: 300;    padding: 0 1rem;    color: #73869c;}div#ff-popup-head {    background: #edf6ff;    padding: 0 0 0 1rem;}div#ff-bottom {    padding: .5rem 1rem 0;}h4 {    font-weight: 300;}h4 {    color: #6b819d;}h4 a {    text-decoration: none;}"
    var _sEl = document.createElement('style')
    _sEl.innerHTML = styles
    document.body.appendChild(_sEl)
    function toggleModal() {

        function close() {
            popup.classList.remove('show')
        }
        function open() {
            popup.classList.add('show')
        }
        if (popup.classList.contains('show')) close(); else open()

    }
    popupBtn.addEventListener('click', toggleModal)
    var temp = '<div id="ffpopupouter" class="flex align-items-center justify-content-center"><div id="ff-popup-inner"><div class="flex justify-space-between align-items-center" id="ff-popup-head"><h4>Buy <a href="https://www.getfractals.com">Fractal Filters</a></h4><div id="ff-popup-close">x</div></div><div id="ff-img-wrap"><img src="https://www.getfractals.com/static/2017/box.png" alt=""></div><p>The ultimate filters for prism photography</p><hr><div class="flex justify-space-between" id="ff-bottom"><input type="number" id="ffcount" value="1"><button id="ff-popup-go">Purchase</button></div></div></div>'
    popup = document.createElement('aside')
    popup.innerHTML = temp
    popup.id = 'ffpopup'
    document.body.appendChild(popup)
    document.querySelector('#ff-popup-close').addEventListener('click', toggleModal)
    document.querySelector('#ffcount').addEventListener('change', function (ev) {
        window.ff_classic_count = ev.target.value
    })
    document.querySelector('#ff-popup-go').addEventListener('click', function () {

        window.location.href = 'https://www.getfractals.com/checkout?ref= ' + window.ffref + '&ff_classic=' + window.ff_classic_count

    })

})