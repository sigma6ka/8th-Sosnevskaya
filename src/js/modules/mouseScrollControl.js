let isDragging = false;
let startPosition = 0;
let currentScrollPosition = 0;

function startDragging(event) {
    if (!event) return; // Добавляем проверку на существование объекта события
    isDragging = true;
    startPosition = event.clientX;
    currentScrollPosition = document.querySelector('.advantages__container').scrollLeft;
}

function drag(event) {
    if (!event) return; // Добавляем проверку на существование объекта события
    if (isDragging) {
        const deltaX = event.clientX - startPosition;
        document.querySelector('.advantages__container').scrollLeft = currentScrollPosition - deltaX;
    }
}

function endDragging() {
    isDragging = false;
}

export { startDragging, drag, endDragging };