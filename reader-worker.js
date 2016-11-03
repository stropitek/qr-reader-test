'use strict';

importScripts('./qrcodeReader.js');

onmessage = function(event) {
    console.time('qrcode');
    console.log('worker message', event);
    var size = 300;
    var imageData = new ImageData(new Uint8ClampedArray(event.data), size, size);
    var qr = new QrCode();
    qr.callback = function (res, err) {
        console.timeEnd('qrcode');
        console.log('qrcode callback', res, err);
        postMessage({
            res: res,
            err: err
        });
    };
    qr.decode(imageData);
};

