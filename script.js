let page=document.createElement('div');
document.body.append(page);

page.innerHTML=`<div class="container">
<div class="pagination">
<button class="btn1">Prev</button>
<ul>
<li  class="arrow" onClick="activelink()">&laquo;</li>

<li class="link active" value="1"   onClick="activelink()">1</li>
<li class="link" value="2" onClick="activelink()">2</li>
<li class="link" value="3" onClick="activelink()">3</li>
<li class="link" value="4"onClick="activelink()">4</li>
<li class="link" value="5"onClick="activelink()">5</li>
<li class="link" value="6"onClick="activelink()">6</li>
<li class="link" value="7"onClick="activelink()">7</li>
<li class="link" value="8" onClick="activelink()">8</li>
<li class="link" value="9"onClick="activelink()">9</li>
<li class="link" value="10"onClick="activelink()">10</li>
<li  class="arrow" onClick="activelink()" >&raquo;</li>
</ul>
<button class="btn2">Next</button>
</div>
`