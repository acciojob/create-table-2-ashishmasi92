let table = document.getElementById("myTable")

function createTable() {
    let numberOfRows = prompt("Input number of rows")
 let numberOfColumn = prompt("Input number of columns")
	
	for(let i=0;i<=Number(numberOfRows)-1;i++){
		let tr = document.createElement("tr")
		
		for(let j=0;j<=Number(numberOfColumn)-1;j++){
			let td = document.createElement("td")
		td.innerText = `Row-${i} Column-${j}`	
	tr.append(td)
		}
		table.append(tr)
		
	}
}


