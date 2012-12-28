function hexToRgb(hex) {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

 function drawEllipse(ctx, x, y, a, b, gradient) {
	ctx.save();
	ctx.beginPath();
	ctx.translate(x, y);
	ctx.scale(a / b, 1);
	ctx.arc(0, 0, b, 0, Math.PI * 2, true);
	ctx.restore(); 
	ctx.closePath();
	ctx.fillStyle = gradient;
	ctx.fill();
}

(function( $ ) {
	var margin    = 40;
	var figStartX = margin;
	var figStartY = margin / 2;
	var vertLine = true;
	var horzLine = true;
	var width  	 = 600;
	var height 	 = 130;
	var maxValue = 400;
	var curValue = 300;
	var circleRadius = 15;

	var progressColorTop   = '#77bd49';
	var progressColorMid   = '#e0de31';
	var progressColorBtm   = '#77bd49';
	var progressColorEnd   = '#5ee062';

	var backgroundColorTop = '#dddddd';
	var backgroundColorMid = '#eef3ec';
	var backgroundColorBtm = '#dddddd';
	var backgroundColorEnd = '#cfcfcf';
	var masterOverlayOpacity = 0.77;

	var methods = {
		init : function(options) {
			/** Config retrieval **/
				vertLine = options.vertLines;
				horzLine = options.horzLines;
				width  	 = (options.width) ? options.width : width;
				height 	 = (options.height) ? options.height : height;
				maxValue = (options.maxValue) ? options.maxValue : maxValue;
				curValue = (options.currValue) ? options.currValue : curValue;
				circleRadius = (options.circleRadius) ? options.circleRadius : circleRadius;
				progressColorTop   = (options.progressColorTop) ? options.progressColorTop : progressColorTop;
				progressColorMid   = (options.progressColorMid) ? options.progressColorMid : progressColorMid;
				progressColorBtm   = (options.progressColorBtm) ? options.progressColorBtm : progressColorBtm;
				progressColorEnd   = (options.progressColorEnd) ? options.progressColorEnd : progressColorEnd;
				backgroundColorTop = (options.backgroundColorTop) ? options.backgroundColorTop : backgroundColorTop;
				backgroundColorMid = (options.backgroundColorMid) ? options.backgroundColorMid : backgroundColorMid;
				backgroundColorBtm = (options.backgroundColorBtm) ? options.backgroundColorBtm : backgroundColorBtm;
				backgroundColorEnd = (options.backgroundColorEnd) ? options.backgroundColorEnd : backgroundColorEnd;
				masterOverlayOpacity = (options.masterOverlayOpacity) ? options.masterOverlayOpacity : masterOverlayOpacity;
			/** Config retrieval **/

			/** General parameters **/
				var marginH   = height - margin;
				var lenght    = width - figStartX - margin;
				var delimi    = lenght / maxValue;
				var curPos    = delimi * curValue;
				var graphEnd  = width - margin * 2;
				var interv_v  = lenght / 10;
				var interv_h  = height / 5;
				var barHeight = Math.round(marginH / 2);
				var absHeight = Math.round(height / 2);
			/** General parameters **/

			/** Create canvas with unique id to avoid duplicates **/
				var salt = Math.round(new Date().getTime() / 1000) + Math.floor((Math.random() * 1000) + 1);
				this.html('<canvas id = "horiz_chart_' + salt + '" width = "' + width + '" height = "' + height + '">');
				$('#horiz_chart_' + salt).parent('div').css('width', width + 'px');
				$('#horiz_chart_' + salt).parent('div').css('height', height + 'px');

				var canvas = document.getElementById('horiz_chart_'+salt);
				var ctx = canvas.getContext('2d');
			/** Create canvas with unique id to avoid duplicates **/


			/** Create gradients **/
				/** Progressbar **/
					var progressGradient = ctx.createLinearGradient(0, 0, 0, marginH);
					progressGradient.addColorStop(0, progressColorTop);
					progressGradient.addColorStop(0.5, progressColorMid);
					progressGradient.addColorStop(1, progressColorBtm);
				/** Progressbar **/

				/** Container **/
					var backgroundGradient = ctx.createLinearGradient(0, 0, 0, marginH);
					backgroundGradient.addColorStop(0, backgroundColorTop);
					backgroundGradient.addColorStop(0.5, backgroundColorMid);
					backgroundGradient.addColorStop(1, backgroundColorBtm);
				/** Container **/

				/** Container shapes **/
					var backgroundCircle = ctx.createLinearGradient(0, 0, 0, marginH);
					backgroundCircle.addColorStop(0, backgroundColorEnd);
				/** Container shapes **/

				/** Progressbar share **/
					var progressCircle = ctx.createLinearGradient(0, 0, 0, marginH);
					progressCircle.addColorStop(0, progressColorEnd);
				/** Progressbar share **/

				/** Container overlay on progressbar **/
					// Get the rgba() from #hex value
					var col = hexToRgb(backgroundColorTop);
					var colTop = 'rgba('+col.r+','+col.g+','+col.b+', '+masterOverlayOpacity+')';
					col = hexToRgb(backgroundColorMid);
					var colMid = 'rgba('+col.r+','+col.g+','+col.b+', '+masterOverlayOpacity+')';
					col = hexToRgb(backgroundColorBtm);
					var colBtm = 'rgba('+col.r+','+col.g+','+col.b+', '+masterOverlayOpacity+')';

					var alphaGradient = ctx.createLinearGradient(0, 0, 0, marginH);
					alphaGradient.addColorStop(0, colTop);
					alphaGradient.addColorStop(0.5, colMid);
					alphaGradient.addColorStop(1, colBtm);
				/** Container overlay on progressbar **/
			/** Create gradients **/


			/** In Opera and Chrome 1px width looks too ugly **/
			var isIE = /*@cc_on!@*/false;
			var is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
			var lineWidth = (is_firefox || isIE) ? 1 : 0.08;

			/** Draw vertical lines **/
				if (vertLine) {
					for (var i = margin; i <= width + margin; i += interv_v) {
						ctx.strokeStyle = "Grey";
						ctx.lineWidth = lineWidth;
						ctx.beginPath();
						ctx.moveTo(i, 0);
						ctx.lineTo(i, height);
						ctx.closePath();
						ctx.stroke();
					}
				}
			/** Draw vertical lines **/

			/** Draw horizontal lines **/
				if (horzLine) {
					for (var i = 0; i <= height; i += interv_h) {
						ctx.strokeStyle = "Grey";
						ctx.lineWidth = lineWidth;
						ctx.beginPath();
						ctx.moveTo(0, i);
						ctx.lineTo(width, i);
						ctx.closePath();
						ctx.stroke();
					}
				}
			/** Draw horizontal lines **/

			/** Overflow avoidance **/
				if (curPos > graphEnd)
					curPos = graphEnd;
				if (curPos < 0)
					curPos = 0;
			/** Overflow avoidance **/

			/** Fill background **/
				ctx.fillStyle = backgroundGradient;
				ctx.fillRect(figStartX, figStartY, graphEnd, marginH);
			/** Fill background **/

			/** Fill progress **/
				ctx.fillStyle = progressGradient;
				ctx.fillRect(figStartX, figStartY, curPos, marginH);
			/** Fill progress **/

			/** If position != 0 draw progressbar oval. Else: draw background shape **/
			if (curPos != 0) {
				drawEllipse(ctx, figStartX, absHeight, circleRadius, barHeight, progressGradient);
				drawEllipse(ctx, curPos + margin, absHeight, circleRadius, barHeight, progressCircle);
				if (curPos != graphEnd)
					drawEllipse(ctx, curPos + margin, absHeight, circleRadius, barHeight, alphaGradient);
			} else {
				drawEllipse(ctx, figStartX, absHeight, circleRadius, barHeight, backgroundCircle);
			}
			/** If position != 0 draw progressbar oval. Else: draw background shape **/

			if (curPos != graphEnd)
				drawEllipse(ctx, figStartX + lenght, absHeight, circleRadius, barHeight, backgroundCircle);
		},

	    update : function(options) {
			methods.init.apply(this, arguments);
	    }
	};

	$.fn.horizBar = function(method) {
		if (methods[method]) {
			return methods[method].apply( this, Array.prototype.slice.call(arguments, 1));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply(this, arguments);
		} else {
			$.error('No such method: "' +  method + '" for jQuery.horizChart' );
    } 
  };

})(jQuery);
