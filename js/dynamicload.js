const render = function() {
	const arr = [
		{
			cardName:"Black Cheremosh rafting",
			paragraf: "Lorem Ipsum is simply dummy text of the printing",
			buttonName: "View Tours"
		},
		{
            cardName:"Paragliding",
			paragraf: "Lorem Ipsum is simply dummy text of the printing",
			buttonName: "View Tours"
		},
        {
			cardName:"Carpathian Trout",
			paragraf: "Lorem Ipsum is simply dummy text of the printing",
			buttonName: "View Tours"
		},
        {
			cardName:"Pip Ivan adventure",
			paragraf: "Lorem Ipsum is simply dummy text of the printing",
			buttonName: "View Tours"
		},
        {
			
            cardName:"Kayaking on Dnister",
			paragraf: "Lorem Ipsum is simply dummy text of the printing",
			buttonName: "View Tours"
		},
        {
            cardName:"Mushrooming",
			paragraf: "Lorem Ipsum is simply dummy text of the printing",
			buttonName: "View Tours"
		},
        {
            cardName:"Carpathian encounter",
			paragraf: "Lorem Ipsum is simply dummy text of the printing",
			buttonName: "View Tours"
		},
        {
            cardName: "Fishing the predator",
			paragraf: "Lorem Ipsum is simply dummy text of the printing",
			buttonName: "View Tours"
		}
	]
	for(let i = 0; i <= arr.length; i++) {
		
		const classe = `card-carousel${i+1}`
        const buttonId = `myBtn${8-i}`
		
		document.getElementById("carousel-items").insertAdjacentHTML('afterbegin',
			`
			<div class = "carousel-block">
				<div class = ${classe}>
					<div class = "content" >
						<h2 class = "title" >${arr[i].cardName}</h2>
						<p class ="copy">${arr[i].paragraf}</p>
						<button id = ${buttonId} class="btn">${arr[i].buttonName}</button>
				</div>
			</div>
		</div>
		`);
	}
}
render()
