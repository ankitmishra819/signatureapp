//select 
const colorPicker=document.getElementById('colorPicker');
const canvasColor=document.getElementById('canvascolor');
const fontPicker=document.getElementById('font');
const canvas=document.getElementById('canvas');
const resetbtn=document.getElementById('resetBtn');
const savebtn=document.getElementById('saveBtn');
const undobtn=document.getElementById('retriveBtn');

const ctx=canvas.getContext('2d');
//change text color of canvas
colorPicker.addEventListener('change',(e)=>{
    ctx.fillStyle=e.target.value;
    ctx.strokeStyle=e.target.value;

})
//change background color of canvas
canvasColor.addEventListener('change',(e)=>{
    ctx.fillStyle=e.target.value;
    ctx.fillRect(0,0,750,450);

})


//canvas mousedown event 
canvas.addEventListener('mousedown',(e)=>{
    isDrawing=true;
   X=e.offsetX;
   Y=e.offsetY;

})

//canvas mosemove event 
canvas.addEventListener('mousemove',(e)=>{
    if(isDrawing){
    ctx.beginPath();
    ctx.moveTo(X,Y);
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke();
    X=e.offsetX;
    Y=e.offsetY;
    }

 })
 //canvas mouseup event
 canvas.addEventListener('mouseup',(e)=>{
    isDrawing=false;
})

//fontsize change
fontPicker.addEventListener('change',(e)=>{
    ctx.lineWidth=e.target.value;
})

//clear canvas content
resetbtn.addEventListener('click',(e)=>{
   ctx.clearRect(0,0,canvas.width,canvas.height);
})

//saved canvas content in your local storage
savebtn.addEventListener('click',()=>{
localStorage.setItem('canvasContents',canvas.toDataURL());
 let link=document.createElement('a');
 link.download='signature.png';
 link.href=canvas.toDataURL();
 link.click();
})

//retrive canvascontents from localstorage
 undobtn.addEventListener('click',()=>{
    //getsaved canvas
    let getcanvas=localStorage.getItem('canvasContents');
    //if savedcanvas is present then retrive canvas item
    if(getcanvas){
        //create new img tag
        let img=document.createElement('img');
        //src url saved
        img.src = getcanvas;
        //show image in canvas
        ctx.drawImage(img, 0, 0);
    }
 })

