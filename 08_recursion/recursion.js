function factorialIterative(num)
{
	var total = 1;
	for (var i=num; i>0; i--)
		total*=i;
	return total;
}

function factorial(num)
{
	if (num == 0)
		return 1;
	else
		return num * factorial(num - 1);
}

function fib(num)
{
	if (num < 2)
		return 1;
	else
		return fib(num-1) + fib (num - 2);
}

function type(param)
{
	return Object.prototype.toString.call(param).slice(8,-1);
}

function stringify(param)
{
	var sent = "";
	if (type(param) == 'Arrays')
	{
		for (item in param)
		{
			sent += stringify(param[item]);
		}
	} else if (type(param) == 'Object') {

	} else {

	}
}