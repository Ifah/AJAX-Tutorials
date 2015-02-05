function dark(){
	table = document.getElementById("table");
	th = document.getElementById("tableHead");
	item1 = document.getElementById("item1");
	item2 = document.getElementById("item2");

	table.className = "darkTable";
	th.className = "darkHead";
	item1.className = "darkItems";
	item2.className = "darkItems";
}

function light(){
	table = document.getElementById("table");
	th = document.getElementById("tableHead");
	item1 = document.getElementById("item1");
	item2 = document.getElementById("item2");

	table.className = "lightTable";
	th.className = "lightHead";
	item1.className = "lightItems";
	item2.className = "lightItems";
}