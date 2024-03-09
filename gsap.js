var timeline = gsap.timeline();

const searchButton = document.querySelector('.search button');
const weatherContainer = document.querySelector('.weather-container');
const weatherInfo = document.querySelector('.weather-details');

searchButton.addEventListener('click', () => {
    timeline.from(weatherContainer, {
        y: -100,
        scale: 0.5,
        opacity: 0,
        duration: 0.7,
        delay: 0.5,
        ease: 'power4.out'
    });


    // timeline.from(weatherInfo, {
    //     y : -100,
    //     duration : 0.7,
    //     opacity : 0,
    //     delay : 0.5
    // })
});



