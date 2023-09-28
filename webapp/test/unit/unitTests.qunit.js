/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"fioriv2northwind/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
