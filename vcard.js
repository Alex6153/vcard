function saveAsFile(filename, dataType, textInput) {
  var element = document.createElement('a');
  element.setAttribute('href','data:' + dataType + ';charset=utf-8, ' + encodeURIComponent(textInput));
  element.setAttribute('download', filename);
  document.body.appendChild(element);
  element.click();
}
async function downloadMyVCard(version){
  if(version == null)
    version = "vcard-with-photo.txt"
  let request = await fetch("https://alex6153.github.io/vcard/" + version) 
  let encodedText = await request.text()
  saveAsFile("Axelander.vcf", "text/x-vcard", atob(encodedText))
}
