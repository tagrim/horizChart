$('#update').click(function(){
	$('#can').horizBar('update', 
		{
			width: $('#width').val(),
			height: $('#height').val(),
			maxValue: $('#maxvalue').val(),
			currValue: $('#curvalue').val(),
			circleRadius: $('#radius').val(),
			progressColorTop: $('#ptopcol').val(),
			progressColorMid: $('#pmidcol').val(),
			progressColorBtm: $('#pbotcol').val(),
			progressColorEnd: $('#pshpcol').val(),
			backgroundColorTop: $('#btopcol').val(),
			backgroundColorMid: $('#bmidcol').val(),
			backgroundColorBtm: $('#bbotcol').val(),
			backgroundColorEnd: $('#bshpcol').val(),
			vertLines: $('#vert').attr('checked'), 
			horzLines: $('#horz').attr('checked')
		}
	);
});

$('#vert').click(function(){
	$('#can').horizBar('update', 
		{
			vertLines: $('#vert').attr('checked'), 
			horzLines: $('#horz').attr('checked')
		}
	);
});

$('#horz').click(function(){
	$('#can').horizBar('update', 
		{
			vertLines: $('#vert').attr('checked'), 
			horzLines: $('#horz').attr('checked')
		}
	);
});
