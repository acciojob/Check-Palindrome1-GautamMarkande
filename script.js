// complete the given function

function palindrome(str){
	let str1 = str.toLowerCase();
	let i = 0;
	let j = str.length;
	while(i<j){
		if(!(str1.charAt(i)>='a' && str1.charAt(i)<='z')){
			i++;
		}
		else if((!(str1.charAt(j)>='a' && str1.charAt(j)<='z')){
			j--;
		}else{
			if(str1.charAt(i)!=str1.charAt(j)){
				return false;
			}
			i++;
			j--;
		}
	}
return true;
}
module.exports = palindrome
