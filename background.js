console.log("Background running");
chrome.browserAction.onClicked.addListener(IconClicked);
function IconClicked(tab)
{
	let msg = {
		txt : "Changing AzLyrics!"
	}
	chrome.tabs.sendMessage(tab.id,msg);
}