function firstNonRepeatedChar(str) {
 // Write your code here
	
	for(let i=0 ; i<str.length() ; i++){
		boolean isrepeated = false;
		for(let j=0 ; j<str.length() ; j++){
			if(str.charAt(i)==str.charAt(j)){
				isrepeated = true;
				break;
			}
		}
		if(isrepeated == false){
			return arr[i];
		}
	}
	return ;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
