window.addEventListener('DOMContentLoaded',LoadArticle);
function LoadArticle()
{
	//Load the request and change the theme
	var request=JSON.parse('{'+location.search.slice(1).replace(/([^&=]*)=([^&]*)/g,'"$1":"$2"').replace(/&/g,',')+'}');
	if(!sessionStorage.getItem('theme'))
		sessionStorage.setItem('theme','default');
	if(request.theme)
		sessionStorage.setItem('theme',request.theme);
	if(sessionStorage.getItem('theme')!='default')
		document.body.className=sessionStorage.getItem('theme');
	//Load the style sheet of the article
	document.getElementsByTagName('head')[0].innerHTML+='<link rel="stylesheet" type="text/css" href="/add-on/article/article.css" /><link rel="stylesheet" type="text/css" href="/add-on/article/theme.css" />';
	//Fill the body and load the frame
	document.getElementsByTagName('body')[0].innerHTML='<nav class="btnfield"><select id="theme"><option value="default">Default theme</option><option value="bricks">bricks</option><option value="matrix">matrix</option><option value="mytale">mytale</option><option value="nights">nights</option><option value="OParis">OParis</option><option value="vector">vector</option></select><br /><a href="/">Homepage</a><a href="/codes/">Code List</a><a href="/posts/">Post List</a><a href="/sitemap.html">Sitemap</a></nav><header>zsz12251665</header><article>'+document.getElementsByTagName('body')[0].innerHTML+'</article><footer>&copy; 2016-2019 zsz12251665. Theme by zsz12251665. Licensed under the <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">CC BY-NC-ND 4.0 International License</a>. </footer>';
	document.getElementsByTagName('article')[0].style.marginTop='3rem';
	//Load the title
	if(document.getElementById('title'))
		document.title=document.getElementById('title').innerText+' | zsz12251665\'s Blog';
	//Load the event listener
	document.getElementsByTagName('header')[0].addEventListener('click',function(){document.getElementsByTagName('nav')[0].style.top=(document.getElementsByTagName('nav')[0].style.top)?'':document.getElementsByTagName('header')[0].offsetHeight;});
	for(var i=0,abbr=document.getElementsByTagName('abbr');i<abbr.length;i++)
		abbr[i].addEventListener('click',function(e){alert(e.target.title);});
	//Set the theme selector
	for(var i=0,selector=document.getElementById('theme');i<selector.options.length;i++)
		if(selector.options[i].value==sessionStorage.getItem('theme'))
			selector.selectedIndex=i;
	document.getElementById('theme').addEventListener('input',function(){sessionStorage.setItem('theme',document.getElementById('theme').options[document.getElementById('theme').selectedIndex].value);location.reload();});
}
