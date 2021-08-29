'use strict';

QUnit.module('Тестируем функцию rle', function () {
	QUnit.test('rle работает правильно', function (assert) {
		assert.strictEqual(rle('AAAB'), 'A3B');
		assert.strictEqual(rle('BCCDDDAXXXX'), 'BC2D3AX4');
		assert.strictEqual(rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'), 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4');
	});

	QUnit.test('rle работает правильно при отсутсвии возможности сжатия', function (assert) {
		assert.strictEqual(rle('W'), 'W');
		assert.strictEqual(rle('AB'), 'AB');
		assert.strictEqual(rle('BCDAXABDC'), 'BCDAXABDC');
	});

	QUnit.test('rle работает правильно при пустом вводе', function (assert) {
		assert.strictEqual(rle(''), '');
	});
});
