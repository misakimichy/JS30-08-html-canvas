const updateCords = (e, mouse, lastMouse, ctx) => {
    lastMouse.x = mouse.x;
    lastMouse.y = mouse.y;
    mouse.x = e.pageX - e.currentTarget.offsetLeft;
    mouse.y = e.pageY - e.currentTarget.offsetTop;

    updateColor(lastMouse.x, ctx);
};

const updateColor = (x, ctx) => {
    let color = x;
    ctx.strokeStyle = `hsl(${color}, 100%, 50%)`;
};

(function(){
    const canvas = document.querySelector("#draw");
    const ctx = canvas.getContext('2d');
    // make width and height the window size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const mouse = {x: 0, y: 0};
    const lastMouse = {x: 0, y: 0};

    ctx.lineWidth = 20;
    ctx.strokeStyle = '#fc9803';
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';

    canvas.addEventListener('mousemove', (e) => updateCords(e, mouse, lastMouse, ctx));

    canvas.addEventListener('mousedown', () => {
        canvas.addEventListener('mousemove', draw);
    });
    canvas.addEventListener('mouseup', () => {
        canvas.removeEventListener('mousemove', draw)
    });
    canvas.addEventListener('mouseout', () => {
        canvas.removeEventListener('mousemove', draw);
    });

    const draw = () => {
        ctx.beginPath();
        ctx.moveTo(lastMouse.x, lastMouse.y);
        ctx.lineTo(mouse.x, mouse.y);
		ctx.closePath();
		ctx.stroke();
    };
}());
