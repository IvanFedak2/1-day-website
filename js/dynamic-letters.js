
const renderLetters = function() {
	const arr = [
		{
letter: "letter",
letterBack: "letter-back",
letterMid: "letter-mid",
d1: "M 100 -20 L 100 100 L 100 150 L 100 150 L 100 150 Q 100 200 150 200 Q 200 200 200 150 L 200 150 L 200 150 L 200 100 Q 200 75 200 -20",
video: "video/U.mp4"
		},
        {
letter: "letter2",
letterBack: "letter-back2",
letterMid: "letter-mid2",
d1: "M100 50 A50 50 0 1 0 50 100 A50 50 0 1 1 0 150",
video: "video/S.mp4"
		},
        {
letter: "letter3",
letterBack: "letter-back3",
letterMid: "letter-mid3",
d1: "M 50 220 L 50 150 L 50 150 L 50 50 L 50 50 L 100 110 L 150 50 L 150 50 L 150 100 L 150 150 L 150 200 L 150 220",
video: "video/M1.mp4"
		},
        {
letter: "letter4",
letterBack: "letter-back4",
letterMid: "letter-mid4",
d1: "M 50 220 L 50 150 L 50 150 L 50 50 L 50 50 L 100 110 L 150 50 L 150 50 L 150 100 L 150 150 L 150 200 L 150 220",
video: "video/M2.mp4"
		},
        {
letter: "letter5",
letterBack: "letter-back5",
letterMid: "letter-mid5",
d1: "M 150 200 L 100 200 L 50 200 L 50 140 L 50 100 L 100 100 L 150 100 L 100 100 L 50 100 L 50 50 L 50 0 L 100 0 L 140 0 L 150 0",
video: "video/E.mp4"
		},
        {
letter: "letter6",
letterBack: "letter-back6",
letterMid: "letter-mid6",
d1: "M 0 250 L 0 200 L 0 150 L 0 100 L 0 50 Q 50 0 100 50 Q 150 100 100 150 L 68 150 Q 100 200 100 250",
video: "video/R.mp4"
		}
	]
	for(let i = 0; i <= arr.length; i++) {
	
		document.getElementById("section-intro").insertAdjacentHTML('afterbegin',
			`
            <div class="${arr[i].letter}">
            <div class="${arr[i].letterBack} sketch" style="opacity: 1;">
                <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                    <path path-onseen="1" transform="translate(65, 50)" stroke="white" stroke-width="50" fill="none"
                        d="${arr[i].d1}"
                        style="stroke-dasharray: 606.649, 606.649; stroke-dashoffset: 606.649px;" class="triggered">
                    </path>
                </svg>
            </div>
            <div class="${arr[i].letterMid} sketch" style="opacity: 1;">
                <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                    <path path-onseen="1" transform="translate(65, 50)" stroke="black" stroke-width="50" fill="none"
                        d="${arr[i].d1}"
                        style="stroke-dasharray: 606.649, 606.649;stroke-dashoffset: 606.649px;" class="triggered">
                    </path>
                </svg>
                <div class="video">
                    <video disablepictureinpicture="true" muted="true" loop="true" autoplay="true">
                        <source src="${arr[i].video}" type="video/mp4">
                    </video>
                </div>
            </div>
        </div>
		`);
	}
}
renderLetters()
