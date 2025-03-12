const canvasSketch = require('canvas-sketch');

const settings = {
  //dimensions: [ 1024, 1024 ],
  dimensions: 'A4',
  orientation: 'portrait',
  units: 'mm',
  pixelsPerInch: 300,
  //name: 'footbar',
  /*prefix: 'artwork',
  suffix: '.draft',*/
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'yellow';
    context.fillRect(0, 0, width, height);

    context.beginPath();
    context.rect(10,10,100,100);
    context.lineWidth = 5;
    context.strokeStyle = 'red';
    context.stroke();
    //context.fillStyle = 'purple';
    //context.fill();
    

    context.beginPath();
    context.arc(width/2, height/2, 50, 0, Math.PI * 2, false);
    context.fillStyle = 'blue';
    context.fill();
    context.lineWidth = 15;
    context.strokeStyle = 'pink';
    context.stroke();
    
    function saluto(nome) {
      return "Ciao, " + nome + "!";
    }

    console.log(saluto("Giulia"));
    //alert(saluto("tua sorella"));

    /*for(let i = 0; i < 5; i++) {
      console.log(i);
      context.beginPath();
      context.rect(10 + i * 30, height/2, 10, 10);
      console.log(10 + i * 50);
      context.lineWidth = 5;
      context.strokeStyle = 'rgb(136,' + (i + 24) + ', 124)';
      contextStroke(); 
    } */

    for(let i = 0; i < 10; i++) {
      for(let j = 0; j < 10; j++) {
        console.log(i);
        context.beginPath();
        context.rect(10 + j * (Math.random() * 30), 10 + i * (Math.random() * 30), height/2, 10, 10);
        console.log(10 + i * 50);
        context.lineWidth = 5;
        context.strokeStyle = 'rgb(136,' + (i + 24) + ', 124)';
        contextStroke(); 

      }
    }
    
    console.log(Math.random());


  };
};

canvasSketch(sketch, settings);
