
function create() {
  URLEncode();
  alert("Created Successfully!!");
}
function test(){
  alert("Test");
}
function downloadImage(){
  alert("Right-Click on QR-Code and choose Save Image As");
}
function downloadPDF(){
  window.open("https://imagetopdf.com/");
}
function URLEncode(){
  var plaintext=document.getElementById("qrcode-text").value;
  var textEncoded;
  if (true) {
    var SAFECHARS = "0123456789" +					// Numeric
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +	// Alphabetic
    "abcdefghijklmnopqrstuvwxyz" +
    "-_.!~*'()";					// RFC2396 Mark characters
    var HEX = "0123456789ABCDEF";

    var encoded = "";
    for (var i = 0; i < plaintext.length; i++ ) {
      var ch = plaintext.charAt(i);
      if (ch == " ") {
        encoded += "+";				// x-www-urlencoded, rather than %20
      } else if (SAFECHARS.indexOf(ch) != -1) {
        encoded += ch;
      } else {
        var charCode = ch.charCodeAt(0);
        if (charCode > 255) {
          encoded += "+";
        } else {
          encoded += "%";
          encoded += HEX.charAt((charCode >> 4) & 0xF);
          encoded += HEX.charAt(charCode & 0xF);
        }
      }
      textEncoded = encoded;
    }
  }else {  // Modern browser mode
      textEncoded = encodeURIComponent(plaintext);
    }

    console.log(textEncoded);
    document.getElementById("qrcode").src="https://api.qrserver.com/v1/create-qr-code/?format=png&size=450x450&data="+textEncoded;
    return false;
  }
