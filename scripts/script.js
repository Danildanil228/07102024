function sliderh(){
    var slides = document.querySelectorAll('.image-s');
    var prevButton = document.getElementById('prev');
    var nextButton = document.getElementById('next');

    let currentIndex = 0;

    function updateSlides() {
        slides.forEach((slide, index) => {
            if (index === currentIndex) {
                slide.style.opacity = '1';
            } else {
                slide.style.opacity = '0.4';
            }
        });
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlides();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlides();
    });

    updateSlides();
}
sliderh();


function back(){
    var backgrounds = [
        'url(img/9c2ccdf22d8709499ca5ca680239de56.jpg)',
        'url(img/sankt-peterburg-piter-noch-5867.jpg)',
        'url(img/goroda-sankt-peterburg--petergof--rossiy-1400390.jpg)',
        'url(img/sanktpeterburg_piter_nevskij_prospekt_99598_1920x1080.jpg)'
    ];
    
    let currentIndex = 0;
    var backgroundElement = document.getElementById('background');
    
    function setBackground(index) {
        backgroundElement.style.backgroundImage = backgrounds[index];
    }
    
    function nextBackground() {
        currentIndex = (currentIndex + 1) % backgrounds.length;
        setBackground(currentIndex);
    }
    
    function prevBackground() {
        currentIndex = (currentIndex - 1 + backgrounds.length) % backgrounds.length;
        setBackground(currentIndex);
    }
    
    document.getElementById('next').addEventListener('click', nextBackground);
    document.getElementById('prev').addEventListener('click', prevBackground);
    
    setBackground(currentIndex);
}
back();
document.getElementById('btn').addEventListener('click', function() {
    var input = document.getElementById('inpt');
    var input2 = document.getElementById('inpt2')
    var input3 = document.getElementById('inpt3')
    var button = document.getElementById('btn');
    if (input.value.trim() !== '') {
        input.value = '';
        input2.value = '';
        input3.value = '';
        button.textContent = 'Отправлено';
        setTimeout(function() {
            button.textContent = 'Отправить сообщение';
        }, 1000);
    }
});
function sliderm(){
    var slides = document.querySelectorAll('.image-s2');
    var prevButton = document.getElementById('prevBtn2');
    var nextButton = document.getElementById('nextBtn2');

    let currentIndex = 0;

    function updateSlides() {
        slides.forEach((slide, index) => {
            if (index === currentIndex) {
                slide.style.opacity = '1';
            } else {
                slide.style.opacity = '0.4';
            }
        });
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlides();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlides();
    });

    updateSlides();
}
sliderm();



function imgSlid(){
    const imageSets = [
        "img/Rectangle 2(1).png",
        "img/images2.png",
        "img/Ok5proj7dcVBHsWB4lAcKA7FoThQHIoDxaE4UByKQ3GgOBQHikNxoDgUh-JAcSgOFIfiQHEoDsWB4lAc4PsD-35JiLwLXcEAAAAASUVORK5CYII.webp",
        "img/images.png"
    ];
    
    let currentSetIndex = 0;
    
    const imageContainer = document.getElementById('imageContainer');
    const prevBtn2 = document.getElementById('prevBtn2');
    const nextBtn2 = document.getElementById('nextBtn2');
    
    function updateImages() {
        const imageDivs = imageContainer.querySelectorAll('div');
        const currentImage = imageSets[currentSetIndex];
        imageDivs.forEach(div => {
            const img = div.querySelector('img');
            img.src = currentImage;
        });
    }
    
    prevBtn2.addEventListener('click', () => {
        currentSetIndex = (currentSetIndex - 1 + imageSets.length) % imageSets.length;
        updateImages();
    });
    
    nextBtn2.addEventListener('click', () => {
        currentSetIndex = (currentSetIndex + 1) % imageSets.length;
        updateImages();
    });

    updateImages();
}
imgSlid();


function sliderm2(){
    var slides = document.querySelectorAll('.image-s3');
    var prevButton = document.getElementById('prevBtn3');
    var nextButton = document.getElementById('nextBtn3');

    let currentIndex = 0;

    function updateSlides() {
        slides.forEach((slide, index) => {
            if (index === currentIndex) {
                slide.style.opacity = '1';
            } else {
                slide.style.opacity = '0.4';
            }
        });
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlides();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlides();
    });

    updateSlides();
}
sliderm2();

function textslide(){
    const reviews = [
        {
            text: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной<br>"рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую<br>коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum - это<br>текст-"рыба", часто используемый в печати и вэб-дизайне.',
            image: 'img/Ellipse(2).png',
            name: 'Екатерина Иванова',
            position: 'Директор ООО “Раз-два”'
        },
        {
            text: 'Lorem Ipsum - «рыба» текста, широко используемая в печати и веб-дизайне Lorem Ipsum является стандартной<br>«рыбой» латинского текста с начала XVI века. В то время одна безымянная типография создала большую<br>коллекцию размеров и форм шрифтов и напечатала образцы с использованием Lorem Ipsum Lorem Ipsum - это<br>широко используемый «рыбий» текст в печати и веб-дизайне.',
            image: 'img/images.jpg',
            name: 'Иван Петров',
            position: 'Менеджер ООО “Три-четыре”'
        },
        {
            text: 'Laurem Ipsum - текстовая «рыба», широко используемая в печати и веб-дизайне Laurem Ipsum является стандартной<br>«рыбой» латинского текста с начала XVI века. В то время неизвестный печатник создал большую<br>коллекцию размеров и форм шрифтов и напечатал образцы с использованием Laurem Ipsum.<br>Laurem Ipsum широко используется в печати и веб-дизайне<br>в текстах типа «рыба».',
            image: 'img/scale_1200.jpg',
            name: 'Анна Сидорова',
            position: 'Секретарь ООО “Пять-шесть”'
        },
        {
            text: 'Laurem Ipsum - текстовая «рыба», широко используемая в печати и веб-дизайне Laurem Ipsum является<br>стандартной «рыбой» латинского текста с начала XVI века. В то время неизвестный печатник создал большую<br>коллекцию размеров и форм шрифтов и напечатал образцы с использованием Laurem Ipsum<br>Laurem Ipsum широко используется в печати и веб-дизайне<br>для «рыбьего» типа текстов.',
            image: 'img/12.jpg',
            name: 'Петр Иванов',
            position: 'Директор ООО “Семь-восемь”'
        }
    ];
    
    let currentReviewIndex = 0;
    
    const reviewText = document.getElementById('reviewText');
    const reviewImage = document.getElementById('reviewImage');
    const reviewName = document.getElementById('reviewName');
    const prevBtn2 = document.getElementById('prevBtn3');
    const nextBtn2 = document.getElementById('nextBtn3');
    
    function updateReview() {
        const currentReview = reviews[currentReviewIndex];
        reviewText.innerHTML = currentReview.text;
        reviewImage.src = currentReview.image;
        reviewName.innerHTML = `<b>${currentReview.name}</b><br>${currentReview.position}`;
    }
    
    prevBtn2.addEventListener('click', () => {
        currentReviewIndex = (currentReviewIndex - 1 + reviews.length) % reviews.length;
        updateReview();
    });
    
    nextBtn2.addEventListener('click', () => {
        currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
        updateReview();
    });
    updateReview();
}
textslide();