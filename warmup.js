// Warmup functions

// My Max function. Takes array and 
// returns largest value.

function my_max(array) {
	return Math.max.apply(array);
};

console.log([3,94,25,85,10,1000,86,2,1]);

// Vowel Count function. 

function vowel_count(string1)
{
	var vowel_list = 'aeiouAEIOU';
	var v_count = 0;

	for (var i = 0; i < string1.length; i++)
	{
		if (vowel_list.indexOf(string1[i]) !== -1)
		{
			v_count +=1
		};
	};
	return v_count;
};

alert(vowel_count("The quick brown fox"));

// Reverse a string function.

function reverse_string(string1)
{
	var output = "";
	for (var i = string1.length - 1; i >= 0; i--)
	{
		output += string1[i];
	};
	console.log(output);
};

reverse_string("The quick brown fox");