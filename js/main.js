function draw (e, isDrawing, ctx) {
    if (!isDrawing) return;
    let lastX, lastY;
    ctx.beginPath();
    // start from
    ctx.moveTo(e.lastX, e.lastY);
    lastX = e.offsetX;
    lastY = e.offsetY;
    // go to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
}

(function(){
    const canvas = document.querySelector("#draw");
    const ctx = canvas.getContext('2d');
    // make width and height the window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // Ref: https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
    ctx.strokeStyle = '#111';
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';

    let isDrawing = false;

    canvas.addEventListener('mousemove', (e) => draw(e, isDrawing, ctx));
    canvas.addEventListener('mousedown', () => isDrawing = true);
    canvas.addEventListener('mouseup', () => isDrawing = false);
    canvas.addEventListener('mouseout', () => isDrawing = false);
}());
