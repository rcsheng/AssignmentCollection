function concatString()
{
	var arr = Array.from(arguments);
	return arr.join("");
}

function yourFunctionRunner()
{
	var arr = Array.from(arguments);
	var sent = "";
	for(arg in arguments)
	{
		sent += arguments[arg]();
	}
	return sent;
}

function makeAdder(A)
{
	var newFunc = function(param)
	{
		return A + param;
	}
	return newFunc;
}

function once(param)
{
	var ran = 0;

	var myFunc = function()
	{
		ran++;
		if (ran <= 1)
			param();
	}
	return myFunc;
}

function createObjectWithClosures()
{
	var x = 0;
	var obj =  
	{
		oneIncrementer : function(){x++},
		tensIncrementer : function(){x+=10},
		getValue : function(){return x}
	}
	return obj;
}

