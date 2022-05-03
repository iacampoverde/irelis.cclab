function setup() {
  let cnv=createCanvas(800, 800);
  cnv.parent("canvasContainer");
  background(0);

}

function draw() {
  console.log(window.scrollY);

}
function mousePressed(){
  if (window.scrollY<=1400){
    background(0);
    if (mouseX<width/3 && mouseY<height/3){
      textSize(12);
      text('Municipal Police block the main road to Mexico City, the students head back to Iguala',mouseX,mouseY);
      fill(255);
    } if (mouseX>width/3&& mouseY>height/3){
      textSize(12);
      text('Out of the 5 buses, 3 are attacked by Municipal Police',mouseX,mouseY);
      fill(255);
    } if(mouseY<height/3&&mouseX>width/3){
      textSize(12);
      text('Attorney General claims the 43 missing students',mouseX,mouseY);
      text('were handed off to the cartel by municipal police',mouseX, mouseY+15);
      text('ending his speech with the quote "I am tired// I have had',mouseX, mouseY+30); 
      text('enough" referencing the case',mouseX, mouseY+45);
      fill(255);
    }if(mouseY>height/3&&mouseX<width/3){
      textSize(12);
      text('Despite finding 60 mass graves ',mouseX,mouseY);
      text('forensics confirm that none of the remains belong',mouseX,mouseY+15);
      text('to the 43 missing students',mouseX,mouseY+30);
      fill(255);
    }
  }else if(window.scrollY >11060 || window.scrollY< 24362){
    background(0);
    if (mouseX<width/2 && mouseY<height/2){
      textSize(12);
      text('Inter-American Commission on Human Rights',mouseX,mouseY);
      text('requests that Meixco make a database to identify mass graves',mouseX,mouseY+15);
      fill(255);
    } if (mouseX>width/2&& mouseY>height/2){
      textSize(32);
      text(':)',mouseX,mouseY);
      fill(255);
    } if(mouseY<height/2&&mouseX>width/2){
      textSize(32);
      text('HI',mouseX,mouseY);
      fill(255);
    }if(mouseY>height/2&&mouseX<width/2){
      textSize(32);
      text('LOL',mouseX,mouseY);
      fill(255);
    }
  }else if(window.scrollY>24362 && window.scrollY<34831){
    background(0);
    if (mouseX<width/2 && mouseY<height/2){
      textSize(32);
      text('TEST THIS IS INFORMATION #3',mouseX,mouseY);
      fill(255);
    } if (mouseX>width/2&& mouseY>height/2){
      textSize(32);
      text(':)',mouseX,mouseY);
      fill(255);
    } if(mouseY<height/2&&mouseX>width/2){
      textSize(32);
      text('HI',mouseX,mouseY);
      fill(255);
    }if(mouseY>height/2&&mouseX<width/2){
      textSize(32);
      text('LOL',mouseX,mouseY);
      fill(255);
  }
}

}
