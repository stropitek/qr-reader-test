'use strict';

importScripts('./qrcodeReader.js');

onmessage = function(event) {
    var size = 300;
    var imageData = new ImageData(new Uint8ClampedArray(event.data), size, size);
    var qr = new QrCode();
    qr.callback = function (res, err) {
        postMessage({
            res: res,
            err: err
        });
    };
    qr.decode(imageData);
};

