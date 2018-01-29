# Fractals Affiliate Widget
Sell Fractal Filters [www.getfractals.com](https://www.getfractals.com) on your website, and start making money right away. Want to join or have questions? Email me at nikk@getfractals.com
## Get started
Include the following button on your page, where you want it to appear. When the user clicks on this button, they'll be shown a popup which will take them to ```www.getfractals.com/checkout```, with your ref code in the query path.
```
<button id='ffpopupbtn'>Purchase</button>
```

Copy and paste the following code onto every page on which the ```<button id='ffpopupbtn'>Purchase</button>``` appears, ideally before the ```</body>``` tag.
*IMPORTANT*—make sure to replace the ref code at the bottom with the ref code we've agreed upon: ```window.ffref="YOUR_REF_CODE_HERE"```, should become, for example, ```window.ffref="ben"```. That's it!

If you use Wordpress or a flavor of some CMS, feel free to email me and I'll help you set it up. 

### Tracking technology
You'll receive attribution for sales that you've referred even if the sale is made in a subsequent browsing session. For example, if you refer someone who then decides to purchase a week later, you'll still receive your commission.

```
<script>
    window.addEventListener("DOMContentLoaded",function(){function e(){t.classList.contains("show")?t.classList.remove("show"):t.classList.add("show")}var t,i=document.querySelector("#ffpopupbtn");window.ff_classic_count=1;var n=document.createElement("style");n.innerHTML=".flex {    display: -webkit-box;    display: -webkit-flex;    display: -ms-flexbox;    display: flex;}.justify-content-center {    -webkit-box-pack: center;    -webkit-justify-content: center;    -ms-flex-pack: center;    justify-content: center;}.justify-space-between {    -webkit-box-pack: space-between;    -webkit-justify-content: space-between;    -ms-flex-pack: space-between;    justify-content: space-between;}.align-items-center {    -ms-flex-align: center;    -webkit-align-items: center;     align-items: center;    -webkit-box-align: center;}aside#ffpopup {    all: unset;    position: fixed;    opacity: 0;    visibility: hidden;    height: 100vh;    width: 100vw;    top: 0;    transition: all .5s linear;    left: 0;    background: rgba(0,0,0,.8);}aside#ffpopup * {    font-family: 'Poppins', sans-serif;}aside#ffpopup #ff-popup-inner img {    max-width: 60%;}aside#ffpopup #ff-popup-inner {    /* height: 400px; */    width: 400px;    max-width: 100%;    background: white;    padding: 0 0rem 1rem;}#ffpopup.show {    opacity: 1;    visibility: visible;}div#ff-img-wrap {    text-align: center;}div#ffpopupouter {    height: 100%;}hr {    opacity: .2;}div#ff-popup-close {    cursor:pointer;padding: 0 1.5rem 0 0;    font-size: 12px;}button#ff-popup-go {    width: 100px;    height: 30px;    background: initial;    border: 0px;    background: #0089ff;    color: white;}aside#ffpopup * p {    font-weight: 300;    padding: 0 1rem;    color: #73869c;}div#ff-popup-head {    background: #edf6ff;    padding: 0 0 0 1rem;}div#ff-bottom {    padding: .5rem 1rem 0;}h4 {    font-weight: 300;}h4 {    color: #6b819d;}h4 a {    text-decoration: none;}",document.body.appendChild(n),i.addEventListener("click",e);(t=document.createElement("aside")).innerHTML='<div id="ffpopupouter" class="flex align-items-center justify-content-center"><div id="ff-popup-inner"><div class="flex justify-space-between align-items-center" id="ff-popup-head"><h4>Buy <a href="https://www.getfractals.com">Fractal Filters</a></h4><div id="ff-popup-close">x</div></div><div id="ff-img-wrap"><img src="https://www.getfractals.com/static/2017/box.png" alt=""></div><p>The ultimate filters for prism photography</p><hr><div class="flex justify-space-between" id="ff-bottom"><input type="number" id="ffcount" value="1"><button id="ff-popup-go">Purchase</button></div></div></div>',t.id="ffpopup",document.body.appendChild(t),document.querySelector("#ff-popup-close").addEventListener("click",e),document.querySelector("#ffcount").addEventListener("change",function(e){window.ff_classic_count=e.target.value}),document.querySelector("#ff-popup-go").addEventListener("click",function(){window.location.href="https://www.getfractals.com/checkout?ref= "+window.ffref+"&ff_classic="+window.ff_classic_count})});
    window.ffref="YOUR_REF_CODE_HERE";
</script>        
```
