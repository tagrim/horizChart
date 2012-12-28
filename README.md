horizChart
==========

horizChart - horizotal  pseudo-3d bar/progressbar

<table>
<thead>
<tr><th colspan = "2">Basic options</th></tr>
</thead>
<tbody>
  <tr><td>{width: int}</td><td>  Canvas width</td></tr>
  <tr><td>{height: int}</td><td> Canvas height</td></tr>
  <tr><td>{maxValue: int}</td><td> Max decimal value of progressbar</td></tr>
  <tr><td>{currValue: int}</td><td> Current value/progress</td></tr>
  <tr><td>{progressColorTop: '#string'}</td><td> Top color for progressbar gradient</td></tr>
  <tr><td>{progressColorMid: '#string'}</td><td> Middle color for progressbar gradient</td></tr>
  <tr><td>{progressColorBtm: '#string'}</td><td> Bottom color for progressbar gradient</td></tr>
  <tr><td>{progressColorEnd: '#string'}</td><td> Progressbar circle color</td></tr>
  <tr><td>{backgroundColorTop: '#string'}</td><td> Top color for container gradient</td></tr>
  <tr><td>{backgroundColorMid: '#string'}</td><td> Middle color for container gradient</td></tr>
  <tr><td>{backgroundColorBtm: '#string'}</td><td> Bottom color for container gradient</td></tr>
  <tr><td>{backgroundColorEnd: '#string'}</td><td> Container circle color</td></tr>
  <tr><td>{circleRadius: int}</td><td> Circle shapes radius</td></tr>
  <tr><td>{masterOverlayOpacity: float}</td><td> Opacity on overlay/intersect area</td></tr>
  <tr><td>{vertLines: bool}</td><td> Vertical lines visibility</td></tr>
  <tr><td>{horzLines: bool}</td><td> Horizontal lines visibility</td></tr>
</tbody>


Sample include:
<code>
$('#div').horizBar({
currValue: 300, 
maxValue: 400, 
height: 130, 
horzLineSpacing: 35, 
vertLines: true, 
horzLines: true
});
</code>

</table>
