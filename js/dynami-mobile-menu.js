const renderMenu = function() {
		document.getElementById("navbar-toggler").insertAdjacentHTML('afterbegin',
			`
            <a class="burger_mobile" id="myBtn0"></a>
        </div>
        <div id="myModal0" class="modal">
            <div class="modal-content">
                <nav class="header_navigation" id="header_navigation">
                    <span id="disable-scroll" class="close0 close-menu">
                        <ul class="header_navigation_items">
                            <a href="#works" class="modal-menu-nav">About us</a>
                            <a href="#our-tours" class="modal-menu-nav">Our tours</a>
                            <a href="#footer" class="modal-menu-nav">Contact us</a>
                            <a href="#works" class="modal-menu-nav">Discount request</a>
                            <a href="#works" class="modal-menu-nav">Hot deals</a>
                        </ul>
                        <div class="modal-social-media">
                            <a class="btn-modal-social btn-outline-light btn-floating m-1"
                                href="https://www.facebook.com/reneicanc" role="button" target="_blank"><i
                                    class="fab fa-facebook-f" style="margin-left: 2px;"></i></a>
                            <a class="btn-modal-social btn-outline-light btn-floating m-1"
                                href="https://twitter.com/IvanFedak" role="button" target="_blank"><i
                                    class="fab fa-twitter"></i></a>
                            <a class="btn-modal-social btn-outline-light btn-floating m-1" href="google.com"
                                role="button" target="_blank">
                                <i class="fab fa-google"></i></a>
                            <a class="btn-modal-social btn-outline-light btn-floating m-1"
                                href="https://www.instagram.com/cruise_blog" role="button" target="_blank"><i
                                    class="fab fa-instagram"></i></a>
                            <a class="btn-modal-social btn-outline-light btn-floating m-1"
                                href="https://www.linkedin.com/in/ivanfedak" role="button" target="_blank"><i
                                    class="fab fa-linkedin-in"></i></a>
                            <a class="btn-modal-social btn-outline-light btn-floating m-1"
                                href="https://github.com/IvanFedak2" role="button" target="_blank"><i
                                    class="fab fa-github"></i></a>
                        </div>
                    </span>
                </nav>
            </div>
        </div>
		`);
	}
    renderMenu()