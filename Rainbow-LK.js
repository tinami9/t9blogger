<script type='text/javascript'>
//<![CDATA[
function makeColor(){if(elmS==0){elmR=elmV;elmG=elmV;elmB=elmV}else{t1=elmV;t2=(255-elmS)*elmV/255;t3=elmH%60;t3=(t1-t2)*t3/60;if(elmH<60){elmR=t1;elmB=t2;elmG=t2+t3}else if(elmH<120){elmG=t1;elmB=t2;elmR=t1-t3}else if(elmH<180){elmG=t1;elmR=t2;elmB=t2+t3}else if(elmH<240){elmB=t1;elmR=t2;elmG=t1-t3}else if(elmH<300){elmB=t1;elmG=t2;elmR=t2+t3}else if(elmH<360){elmR=t1;elmG=t2;elmB=t1-t3}else{elmR=0;elmG=0;elmB=0}}elmR=Math.floor(elmR).toString(16);elmG=Math.floor(elmG).toString(16);elmB=Math.floor(elmB).toString(16);if(elmR.length==1)elmR="0"+elmR;if(elmG.length==1)elmG="0"+elmG;if(elmB.length==1)elmB="0"+elmB;elmH=elmH+rate;if(elmH>=360)elmH=0;return"#"+elmR+elmG+elmB}function ChangeColor(){objActive.style.color=makeColor()}function Mozilla_stopRainbowAnchor(a){if(act){if(objActive.nodeName=="A"){objActive.style.color=clrOrg;clearInterval(TimerID);act=0}}}function Mozilla_doRainbowAnchor(a){if(act==0){obj=a.target;while(obj.nodeName!="A"&&obj.nodeName!="BODY"){obj=obj.parentNode;if(obj.nodeName=="A"||obj.nodeName=="BODY")break}if(obj.nodeName=="A"&&obj.href!=""){objActive=obj;act=1;clrOrg=obj.style.color;TimerID=setInterval("ChangeColor()",100)}}}function stopRainbowAnchor(){if(act){if(objActive.tagName=="A"){objActive.style.color=clrOrg;clearInterval(TimerID);act=0}}}function doRainbowAnchor(){if(act==0){var a=event.srcElement;while(a.tagName!="A"&&a.tagName!="BODY"){a=a.parentElement;if(a.tagName=="A"||a.tagName=="BODY")break}if(a.tagName=="A"&&a.href!=""){objActive=a;act=1;clrOrg=objActive.style.color;TimerID=setInterval("ChangeColor()",100)}}}function stopRainbow(){if(act){objActive.style.color=clrOrg;clearInterval(TimerID);act=0}}function doRainbow(a){if(act==0){act=1;if(a)objActive=a;else objActive=event.srcElement;clrOrg=objActive.style.color;TimerID=setInterval("ChangeColor()",100)}}var rate=20;if(document.getElementById)window.onerror=new Function("return true");var objActive;var act=0;var elmH=0;var elmS=128;var elmV=255;var clrOrg;var TimerID;if(document.all){document.onmouseover=doRainbowAnchor;document.onmouseout=stopRainbowAnchor}else if(document.getElementById){document.captureEvents(Event.MOUSEOVER|Event.MOUSEOUT);document.onmouseover=Mozilla_doRainbowAnchor;document.onmouseout=Mozilla_stopRainbowAnchor}
//]]>
</script>