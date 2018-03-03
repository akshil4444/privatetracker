document.getElementById('submit').addEventListener('click',function(){

    var input1= document.getElementById('input1').value;
    chrome.tabs.create({url: "https://www.torrentleech.org/torrents/browse/index/query/" + input1 + "/newfilter"});
	  chrome.tabs.create({url:"https://torrentbytes.net/browse.php?search=" + input1 + "&cat=0&sc=1"});
	  chrome.tabs.create({url:"https://privatehd.to/torrents?in=1&search=" +input1 + "&type=0"});
	  chrome.tabs.create({url:"https://uhdbits.org/torrents.php?searchstr=" +input1 + "&type=0"});

});
