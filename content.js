chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message)
{
	console.log(message.txt);
    function getElementByXpath(path) {
        return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    }

    var lyrics=getElementByXpath("/html/body/div[3]/div/div[2]/div[5]"),
    h=document.getElementsByTagName('head')[0],
    html = document.getElementsByTagName("html")[0],
    body = document.getElementsByTagName("body")[0],
    s=document.createElement('style');
    
    html.removeChild(body);
    html.appendChild(lyrics);
    
    s.setAttribute('type','text/css'); 
    s.appendChild(document
        .createTextNode(
            `
                *{background-color: #000; color: #fff}
                div{margin: 0 auto; padding: 7px; width:100%; column-count: 3; line-height: 18px; height: auto; font-size: 18px; text-align: center}
            `
        ));
    h.appendChild(s); 
}