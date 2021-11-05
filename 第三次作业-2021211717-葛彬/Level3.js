// 数组拉平

let arrl3 = [[1, [2, 3], 4], [5, [6, 7], 8, 9]];
var out=[];
function lp(arr){
	for(let i=0;i<arr.length;i++){
		if(arr[i].length&&arr[i].length>0){
			lp(arr[i]);
		}else{
			out.push(arr[i]);
		}
	}
}
lp(arrl3);
console.log(out);