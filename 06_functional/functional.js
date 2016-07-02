function doubler(num)
{
	return num*2;
}

function map(arr,func)
{
	var tmp = [];
	for (item in arr)
	{
		tmp[item] = func(arr[item]);
	}
	return tmp;
}

function filter(arr,func)
{
	var tmp = [];
	for(item in arr)
	{
		if (func(arr[item]))
			tmp.push(arr[item])
	}
	return tmp;
}

function contains(arr,val)
{
	var test = false;
	for (item in arr)
	{
		if (arr[item] == val)
			test = true;
	}
	return test;
}

function countWords(sent)
{
	return sent.split(" ").length;
}

function countWordsInReduce(startVal,sent)
{
	return startVal + countWords(sent);
}

function reduce(arr,startVal,func)
{
	var total = startVal;
	console.log(arr);
	for (item in arr)
	{
		//console.log(arr[item]);
		total=func(total,arr[item]);
	}
	return total;
}

function sum(arr)
{
	return reduce(arr,0,function(a,b){return a+b});
}

function every(arr,func)
{
	
	return reduce(arr,true,function(prev,curr){return prev && func(curr)});
	
}

function any(arr,func)
{
	return reduce(arr,false,function(prev,curr){return prev || func(curr)});
}