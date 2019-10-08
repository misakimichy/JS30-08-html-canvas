function draw (e, isDrawing) {
    if (!isDrawing) {console.log(isDrawing); return;}
    console.log(e);
    console.log(isDrawing);
}

(function(){
    const canvas = document.querySelector("#draw");
    const ctx = canvas.getContext('2d');
    // make width and height the window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // Ref: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
    ctx.strokeStyle = '#fff';
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';

    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;

    canvas.addEventListener('mousemove', (e) => draw(e, isDrawing));
    canvas.addEventListener('mousedown', () => isDrawing = true);
    canvas.addEventListener('mouseup', () => isDrawing = false);
    canvas.addEventListener('mouseout', () => isDrawing = false);
}());
