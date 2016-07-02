function findACount(str)
{
	return str.toLowerCase().split("a").length-1;
}

function areaCodeFinder(str)
{
	var re = /[0-9]{3}/;
	return Number(str.substr(str.search(re),3));
}

function adjustUrlParameter(url,param)
{
	var paramCat = param.substring(0,param.search('='));
	var paramVal = param.substring(param.search('=')+1,param.length-1);
	//console.log(paramCat);
	if(url.search(paramCat)=== -1) //doens't exist
	{
		if (url.search(/\?/) === -1 ) //no param at all
			return url + "?" + param;
		else
			return url + "&" + param;
	}
		
	else {
		//replace value of param
		//console.log(url.substring(0,url.search(paramCat))+param);
		return url.substring(0,url.search(paramCat))+param;

	}	
}

function stringPlusPlus(str)
{
	function replacer(match, p1,p2, offset, string) {
	  //replace digits + 1
	  //console.log(str,p1,p2);
	  var tmp = (Number(p2)+1).toString();
	  var pad = "";
	  //console.log("p2 len: ", p2.length, " tmp len: ", tmp.length);
	  for (var i = tmp.length; i < p2.length; i++)
	  {
	  		pad+="0";
	  		//console.log(pad);
	  }
	  //console.log(p1+pad+tmp);
	  return p1+pad +tmp;
	  
	}
	return str.replace(/(\D*)(\d*)/, replacer);
}