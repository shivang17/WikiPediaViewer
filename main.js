// let getURL =(search) => 
// {
// 	let url ="https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=5&format=json&srsearch=";
// 	search=search.replace('', '%20');
// 	url +=search;
// 	fetchURL(endpoint);
// };

function getURL()
{
	let url="https://en.wikipedia.org/w/api.php?origin=*&action=opensearch&format=json&search=" 
	var searchObj= document.getElementById("search-button").value;
	searchObj=searchObj.replace(' ', '%20');
	url +=searchObj;
	return url;
}


// let fetchURL= (endpoint)=>
// {
// 	fetch(endpoint).then(value=> value.json()).then(data=>retrivePages(data))
// };

function fetchURL(url){

	var endpoint= getURL();

	fetch(getURL())
	.then(data=>data.json())
	.then(value=>getPages(value));
}


// let retrivePages= (data)=>
function getPages(value) 
{
	console.log(value);
	let page= document.querySelector(".retrivePages");
	while(page.firstChild)
	{
		page.removeChild(page.firstChild);

	}
		for(let i=0; i<value[1].length; i++)
		{
			let title= value[1][i];
			let snippet= value[2][i];
			let pages=  value[3][i];
			//let page= 'https://en.wikipedia.org/?curid=$(pageID)';
			console.log(title,snippet,pages);

			// document.getElementById("1").appendChild(title);
			// document.getElementById("2").appendChild(page);
			// document.getElementById("3").appendChild(snippet);
			var tableRows= 
			document.createElement("tr");
			var tableData1=document.createElement("td");
			var tableData2=document.createElement("td");
			var textNode1= document.createTextNode(title);
			var textNode2= document.createTextNode(snippet);
			var aTag=document.createElement("a");
			aTag.appendChild(textNode1);	
			aTag.setAttribute("href",pages);
			aTag.setAttribute("target","_blank");
			tableData1.appendChild(aTag);
			tableData2.appendChild(textNode2);
			tableRows.appendChild(tableData1);
			tableRows.appendChild(tableData2);
			page.appendChild(tableRows);



		}
 }

// let keyPressCall=(e) =>
function keyPressCall(e) 
{
	if(e.keyCode == 13)
	{
		var valueFromInput = document.querySelector("input").value;
		document.querySelector("#container").style.marginTop = "5%";
		document.querySelector("#container").style.marginBottom = "5%";
		fetchURL(valueFromInput);
	}
}

let input = document.querySelector("input");
input.addEventListener("keyup",keyPressCall);
