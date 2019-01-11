document.addEventListener("DOMContentLoaded", () => {
    insertDOM();
    
    let controlBtnList = document.querySelectorAll(".gallery-controls button");

    let galleryContentWrapper = document.querySelector(".gallery-content");
    let imagesWrapper = galleryContentWrapper.querySelector(".gallery-content__images");
    let imagesLi = imagesWrapper.querySelectorAll("li");

    let swiper = null;

    document.querySelector(".gallery-controls").addEventListener("click", function (e) {
        if (e.target.tagName === "BUTTON" && !e.target.classList.contains("is--selected")) {
            controlBtnList.forEach(btn => btn.classList.remove("is--selected"));
            e.target.classList.add("is--selected");

            let newState = e.target.dataset.state;
            galleryContentWrapper.className = "gallery-content";
            if (newState === 'swiper') {
                imagesWrapper.className = "gallery-content__images swiper-wrapper";
                imagesLi.forEach(li => li.className = "swiper-slide");

                swiper = initSwiper(".gallery-content");
            } else {
                galleryContentWrapper.classList.add(`gallery-content--${newState}`);
                imagesWrapper.className = `gallery-content__images gallery-content__images--${newState}`;
                imagesLi.forEach(li => li.className = "");

                if (swiper && swiper.destroy) {
                    swiper.destroy();
                }
            }

            if (newState === "map") {
                initMap();
            }
        }
    });
})

function insertDOM() {
    // Header
    let header = document.createElement("header");
    header.innerHTML = `<h1>
        <span class="highlight--yellow">Optimize</span> this
        <i class="far fa-hand-point-down"></i>
    </h1>`;

    // Main
    let main = document.createElement("main");
    main.innerHTML = `<div class="gallery-controls">
        <button data-state="2x" class="is--selected fas fa-th-large"></button>
        <button data-state="3x" class="fas fa-th"></button>
        <button data-state="swiper" class="far fa-images"></button>
        <button data-state="map" id="mapBtn" class="fas fa-map-marked-alt"></button>
    </div>
    <div class="gallery-content">
        <ul class="gallery-content__images">
            <li>
                <picture>
                    <source srcset="assets/images/bike_1.webp"
                        media="(min-width: 800px)">
                        <img src="assets/images/bike_1_s.webp" />
                </picture>
            </li>
            <li>
                <picture>
                    <source srcset="assets/images/bike_2.webp"
                        media="(min-width: 400px)">
                        <img src="assets/images/bike_2_s.webp" />
                </picture>
            </li>
            <li>
                <picture>
                    <source srcset="assets/images/bike_3.webp"
                        media="(min-width: 400px)">
                        <img src="assets/images/bike_3_s.webp" />
                </picture>
            </li>
            <li>
                <picture>
                    <source srcset="assets/images/bike_4.webp"
                        media="(min-width: 400px)">
                        <img src="assets/images/bike_4_s.webp" />
                </picture>
            </li>
            <li>
                <picture>
                    <source srcset="assets/images/bike_5.webp"
                        media="(min-width: 400px)">
                        <img src="assets/images/bike_5_s.webp" />
                </picture>
            </li>
            <li>
                <picture>
                    <source srcset="assets/images/bike_6.webp"
                        media="(min-width: 400px)">
                        <img src="assets/images/bike_6_s.webp" />
                </picture>
            </li>
            <li>
                <picture>
                    <source srcset="assets/images/bike_7.webp"
                        media="(min-width: 400px)">
                        <img src="assets/images/bike_7_s.webp" />
                </picture>
            </li>
            <li>
                <picture>
                    <source srcset="assets/images/bike_8.webp"
                        media="(min-width: 400px)">
                        <img src="assets/images/bike_8_s.webp" />
                </picture>
            </li>
            <li>
                <picture>
                    <source srcset="assets/images/bike_9.webp"
                        media="(min-width: 400px)">
                        <img src="assets/images/bike_9_s.webp" />
                </picture>
            </li>
        </ul>
        <div class="gallery-content__map">
            <span>0 location-based images</span>
            <div id="map"></div>
        </div>
    </div>`;
   
    // Footer
    let footer = document.createElement("footer");
    footer.innerHTML = `<p>Made with <span class="heart">❤</span> by <a href="https://iampava.com">Pava</a></p>`;

    document.body.appendChild(header);
    document.body.appendChild(main);
    document.body.appendChild(footer);
}


var initMap = (function () {
    let cachedOLMap = null;
    return function () {
        if (!cachedOLMap) {
            cachedOLMap = new ol.Map({
                target: 'map',
                layers: [
                    new ol.layer.Tile({
                        source: new ol.source.OSM()
                    })
                ],
                view: new ol.View({
                    center: ol.proj.fromLonLat([37.41, 8.82]),
                    zoom: 4
                })
            });
        }

        return cachedOLMap;
    }
}());

function initSwiper(selector) {
    return new Swiper(selector);
}