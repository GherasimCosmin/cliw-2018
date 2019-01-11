document.addEventListener("DOMContentLoaded", () => {
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