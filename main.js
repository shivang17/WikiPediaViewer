// let getURL =(search) => 
// {
// 	let url ="https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=5&format=json&srsearch=";
// 	search=search.replace('', '%20');
// 	url +=search;
// 	fetchURL(endpoint);
// };

function getURL(search)
{
	let url ="https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=5&format=json&srsearch=";
	search=search.replace('', '%20');
	url +=search;
	fetchURL(search);
}


// let fetchURL= (endpoint)=>
// {
// 	fetch(endpoint).then(value=> value.json()).then(data=>retrivePages(data))
// };

function fetchURL(endpoint){
		fetch(endpoint).then(value=>value.json()).then(data=>pageRetrive(data))
}


// let retrivePages= (data)=>
function retrivePages(data) 
{
	let page= document.querySelector(".retrivePages");
	while(page.firstChild)
	{
		page.removeChild(page.firstChild);

	}
		for(let i=0; i<data.query.search.length; i++)
		{

		let title= data.query.search[i].title;
		let snippet= data.query.search[i].snippet;
		let pageID=data.query.search[i].pageID;
		let href = document.createElement("a");
				href.setAttribute("href",page);
				href.setAttribute("target","_blank");
		href.className= "pageRedirect";
		let div= document.createElement("div");
		let head= document.createElement("h2");
		var content= document.createElement("p");
		var textNode= document.createTextNode("$(title)");
		content.innerHTML= snippet;
		head.appendChild(textNode);
		div.appendChild(head);
		div.appendChild(content);
		div.className="content";
		href.appendChild(div);
		page.appned(href);

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
		getURL(valueFromInput);
	}
}

let input = document.querySelector("input");
input.addEventListener("keyup",keyPressCall);