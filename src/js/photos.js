const arrowLeft = document.querySelector('.photos__arrow-left--js');
const arrowRight = document.querySelector('.photos__arrow-right--js');

const photos = document.querySelector('.photos__container--js');

const handleLeftClick = () => {
    if (!photos.classList.contains('photos-animation'))
        photos.classList.add('photos-animation');

    if(!photos.classList.contains('left1')
        && !photos.classList.contains('right1')
        && !photos.classList.contains('right2')
        && !photos.classList.contains('right3')
        && !photos.classList.contains('right4')
        && !photos.classList.contains('right5')) {
        photos.classList.add('left1');
        return;
    }

    if(!photos.classList.contains('left2') && photos.classList.contains('left1')) {
        photos.classList.add('left2');
        return;
    }

    if(!photos.classList.contains('left3') && photos.classList.contains('left2')) {
        photos.classList.add('left3');
        return;
    }

    if(!photos.classList.contains('left4') && photos.classList.contains('left3')) {
        photos.classList.add('left4');
        return;
    }

    if(photos.classList.contains('right1') && !photos.classList.contains('right2')) {
        photos.classList.remove('right1');
        return;
    }

    if(photos.classList.contains('right2') && !photos.classList.contains('right3')) {
        photos.classList.remove('right2');
        return;
    }

    if(photos.classList.contains('right3') && !photos.classList.contains('right4')) {
        photos.classList.remove('right3');
        return;
    }

    if(photos.classList.contains('right4') && !photos.classList.contains('right5')) {
        photos.classList.remove('right4');
    }

    if(photos.classList.contains('right5')) {
        photos.classList.remove('right5');
    }
}

const handleRightClick = () => {
    if (!photos.classList.contains('photos-animation'))
        photos.classList.add('photos-animation');

    if(!photos.classList.contains('right1')
        && !photos.classList.contains('left1')
        && !photos.classList.contains('left2')
        && !photos.classList.contains('left3')
        && !photos.classList.contains('left4')
        && !photos.classList.contains('left5')) {
        photos.classList.add('right1');
        return;
    }

    if(!photos.classList.contains('right2') && photos.classList.contains('right1')) {
        photos.classList.add('right2');
        return;
    }

    if(!photos.classList.contains('right3') && photos.classList.contains('right2')) {
        photos.classList.add('right3');
        return;
    }

    if(!photos.classList.contains('right4') && photos.classList.contains('right3')) {
        photos.classList.add('right4');
        return;
    }

    if(!photos.classList.contains('right5') && photos.classList.contains('right4')) {
        photos.classList.add('right5');
        return;
    }

    if(photos.classList.contains('left1') && !photos.classList.contains('left2')) {
        photos.classList.remove('left1');
        return;
    }

    if(photos.classList.contains('left2') && !photos.classList.contains('left3')) {
        photos.classList.remove('left2');
        return;
    }

    if(photos.classList.contains('left3') && !photos.classList.contains('left4')) {
        photos.classList.remove('left3');
        return;
    }

    if(photos.classList.contains('left4')) {
        photos.classList.remove('left4');
    }
}

arrowLeft.addEventListener('click', handleLeftClick);

arrowRight.addEventListener('click', handleRightClick);