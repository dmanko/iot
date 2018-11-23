function pf3() {
	repl("#f3");
	if ($("#radgeo").prop("checked")) {
		if (isNaN($("#shirgeo").val()) || isNaN($("#dolgeo").val()) || isNaN($("#visgeo").val()) || 90 < Math.abs($("#shirgeo").val()) || 180 < Math.abs($("#dolgeo").val()))
			return $("#error3").html("\u041e\u0448\u0438\u0431\u043a\u0430! \u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0432\u0432\u0435\u0434\u0435\u043d\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445!"), 0;
		xgeo = XX($("#shirgeo").val(), $("#dolgeo").val(), $("#visgeo").val(), 6378136, .006694366177);
		ygeo = YY($("#shirgeo").val(), $("#dolgeo").val(), $("#visgeo").val(), 6378136, .006694366177);
		zgeo = ZZ($("#shirgeo").val(), $("#dolgeo").val(), $("#visgeo").val(), 6378136, .006694366177);
		$("#xgeo").val(xgeo);
		$("#ygeo").val(ygeo);
		$("#zgeo").val(zgeo);
		$("#xpgeo").val(gradtomx($("#shirgeo").val(), $("#dolgeo").val()));
		$("#ypgeo").val(gradtomy($("#shirgeo").val(), $("#dolgeo").val()))
	}
	if ($("#radxgeo").prop("checked")) {
		if (isNaN($("#xgeo").val()) ||
			isNaN($("#ygeo").val()) || isNaN($("#zgeo").val())) return $("#error3").html("\u041e\u0448\u0438\u0431\u043a\u0430! \u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0432\u0432\u0435\u0434\u0435\u043d\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445!"), 0;
		$("#shirgeo").val(BB(xgeo, ygeo, zgeo, 6378136, .006694366177));
		$("#dolgeo").val(LL(xgeo, ygeo, zgeo));
		$("#visgeo").val(HH(xgeo, ygeo, zgeo, 6378136, .006694366177));
		$("#xpgeo").val(gradtomx($("#shirgeo").val(),
			$("#dolgeo").val()));
		$("#ypgeo").val(gradtomy($("#shirgeo").val(), $("#dolgeo").val()))
	}
	if ($("#radxpgeo").prop("checked")) {
		if (isNaN($("#xpgeo").val()) || isNaN($("#ypgeo").val())) return $("#error3").html("\u041e\u0448\u0438\u0431\u043a\u0430! \u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0432\u0432\u0435\u0434\u0435\u043d\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445!"), 0;
		$("#shirgeo").val(mxtograd($("#xpgeo").val(),
			$("#ypgeo").val()));
		$("#dolgeo").val(mytograd($("#xpgeo").val(), $("#ypgeo").val()));
		$("#visgeo").val(0);
		xgeo = XX($("#shirgeo").val(), $("#dolgeo").val(), $("#visgeo").val(), 6378136, .006694366177);
		ygeo = YY($("#shirgeo").val(), $("#dolgeo").val(), $("#visgeo").val(), 6378136, .006694366177);
		zgeo = ZZ($("#shirgeo").val(), $("#dolgeo").val(), $("#visgeo").val(), 6378136, .006694366177);
		$("#xgeo").val(xgeo);
		$("#ygeo").val(ygeo);
		$("#zgeo").val(zgeo)
	}
}


function mxtograd(a, b) {
	a = parseFloat(a);
	b = parseFloat(b);
	betapx = a / 6367558.4968;
	sin2B = Math.sin(betapx) * Math.sin(betapx);
	sin4B = sin2B * sin2B;
	B0x = betapx + Math.sin(2 * betapx) * (.00252588685 - 1.49186E-5 * sin2B + 1.1904E-7 * sin4B);
	z0x = (b - 1E5 * (10 * Math.floor(1E-6 * b) + 5)) / (6378245 * Math.cos(B0x));
	sin2B0 = Math.sin(B0x) * Math.sin(B0x);
	sin4B0 = sin2B0 * sin2B0;
	sin6B0 = sin4B0 * sin2B0;
	dBx = -z0x * z0x * Math.sin(2 * B0x) * (.251684631 - .003369263 * sin2B0 + 1.1276E-5 * sin4B0 - z0x * z0x * (.10500614 - .04559916 * sin2B0 + .00228901 * sin4B0 - 2.987E-5 * sin6B0 - z0x *
		z0x * (.042858 - .025318 * sin2B0 + .01434 * sin4B0 - .001264 * sin6B0 - z0x * z0x * (.01672 - .0063 * sin2B0 + .01188 * sin4B0 - .00328 * sin6B0))));
	return 180 * (B0x + dBx) / 3.14159265358979
}

function mytograd(a, b) {
	a = parseFloat(a);
	b = parseFloat(b);
	betapy = a / 6367558.4968;
	sin2B = Math.sin(betapy) * Math.sin(betapy);
	sin4B = sin2B * sin2B;
	B0y = betapy + Math.sin(2 * betapy) * (.00252588685 - 1.49186E-5 * sin2B + 1.1904E-7 * sin4B);
	z0y = (b - 1E5 * (10 * Math.floor(1E-6 * b) + 5)) / (6378245 * Math.cos(B0y));
	sin2B0 = Math.sin(B0y) * Math.sin(B0y);
	sin4B0 = sin2B0 * sin2B0;
	sin6B0 = sin4B0 * sin2B0;
	ly = z0y * (1 - .0033467108 * sin2B0 - 5.6002E-6 * sin4B0 - 1.87E-8 * sin6B0 - z0y * z0y * (.16778975 + .16273586 * sin2B0 - 5.249E-4 * sin4B0 - 8.46E-6 * sin6B0 - z0y * z0y * (.0420025 + .1487407 *
		sin2B0 + .005942 * sin4B0 - 1.5E-5 * sin6B0 - z0y * z0y * (.01225 + .09477 * sin2B0 + .03282 * sin4B0 - 3.4E-4 * sin6B0 - z0y * z0y * (.0038 + .0524 * sin2B0 + .0482 * sin4B0 + .0032 * sin6B0)))));
	return 180 * (6 * (Math.floor(1E-6 * b) - .5) / 57.29577951 + ly) / 3.14159265358979
}