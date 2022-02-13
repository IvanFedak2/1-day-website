const renderModal = function() {
	const arr = [
		{
modalId: "myModal1",
modalText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.11111111111111111111111111111111111111111111111",
modalScroll: "disable-scroll1",
modalClose: "close1",
modalCarousel: "carousel_modal1",
modalCarouselList: "carousel__list1",
modalCarouselItem: "carousel__item1"
		},
		{
modalId: "myModal2",
modalText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.22222222222222222222222222222222222222222222",
modalScroll: "disable-scroll2",
modalClose: "close2",
modalCarousel: "carousel_modal2",
modalCarouselList: "carousel__list2",
modalCarouselItem: "carousel__item2"
		},
    {
modalId: "myModal3",
modalText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.333333333333333333333333333333333333333333333333",
modalScroll: "disable-scroll3",
modalClose: "close3",
modalCarousel: "carousel_modal3",
modalCarouselList: "carousel__list3",
modalCarouselItem: "carousel__item3"
		},
    {
modalId: "myModal4",
modalText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.44444444444444444444444444444444444444",
modalScroll: "disable-scroll4",
modalClose: "close4",
modalCarousel: "carousel_modal4",
modalCarouselList: "carousel__list4",
modalCarouselItem: "carousel__item4"
		},
    {
modalId: "myModal5",
modalText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 5555555555555555555555555555555555555555555",
modalScroll: "disable-scroll5",
modalClose: "close5",
modalCarousel: "carousel_modal5",
modalCarouselList: "carousel__list5",
modalCarouselItem: "carousel__item5"
		},
    {
modalId: "myModal6",
modalText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.66666666666666666666666666666666666666666666666666",
modalScroll: "disable-scroll6",
modalClose: "close6",
modalCarousel: "carousel_modal6",
modalCarouselList: "carousel__list6",
modalCarouselItem: "carousel__item6"
		},
    {
modalId: "myModal7",
modalText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.7777777777777777777777777777777777777777777777777",
modalScroll: "disable-scroll7",
modalClose: "close7",
modalCarousel: "carousel_modal7",
modalCarouselList: "carousel__list7",
modalCarouselItem: "carousel__item7"
		},
    {
modalId: "myModal8",
modalText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.8888888888888888888888888888888888888888888888888",
modalScroll: "disable-scroll8",
modalClose: "close8",
modalCarousel: "carousel_modal8",
modalCarouselList: "carousel__list8",
modalCarouselItem: "carousel__item8"
		}
	]
	for(let i = 0; i <= arr.length; i++) {
	
		document.getElementById("modal").insertAdjacentHTML('afterend',
			`
			<div id="${arr[i].modalId}" class="modal">
                        <div class="modal-content">
                            <span id="${arr[i].modalScroll}" class="${arr[i].modalClose}">&times;</span>
                            <div class="${arr[i].modalCarousel}">
                                <ul class="${arr[i].modalCarouselList}">
                                    <li class="${arr[i].modalCarouselItem}" data-pos="-2">1</li>
                                    <li class="${arr[i].modalCarouselItem}" data-pos="-1">2</li>
                                    <li class="${arr[i].modalCarouselItem}" data-pos="0">3</li>
                                    <li class="${arr[i].modalCarouselItem}" data-pos="1">4</li>
                                    <li class="${arr[i].modalCarouselItem}" data-pos="2">5</li>
                                </ul>
                            </div>
                            <p class="modal-text">${arr[i].modalText}</p>
                        </div>
                    </div>
		`);
	}
}
renderModal()
