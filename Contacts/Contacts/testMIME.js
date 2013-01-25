
function testMIME(request, response) {
    var mimeWriter = new MIMEWriter();  // creates the message
    var photo = loadImage("c:/temp/Tulips.jpg");
    
    mimeWriter.addPart ("Look at these beautiful flowers\r\n", "lenom1", 'text/plain');
    mimeWriter.addPart (photo, "lenom2", 'image/jpeg');
    var mimeMessage = mimeWriter.getMIMEMessage();
    var blob = mimeMessage.toBlob ('text/plain');
 
   // response.headers.CONTENT_TYPE = 'text/plain';
 
  response.contentType = 'text/plain';
  
    return blob;
}