const qr = require('qr-image');
const file = require('fs')
 

const generateBarecode = (req, res, next) => {
    const textCode = req.body.text;

    const barcode_svg = qr.image(textCode, { type: 'svg' });
    const barecode_download = barcode_svg.pipe(file.createWriteStream(`./public/barcodes/${textCode}.svg`));

    const svg_string = qr.imageSync(textCode, { type: 'svg' });

    console.log('barcode created')
    res.download(barecode_download.path)
}

module.exports = generateBarecode