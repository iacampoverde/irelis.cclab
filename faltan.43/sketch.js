function setup() {
  let cnv = createCanvas(800, 700);
  cnv.parent("canvasContainer");
  background(0);

}

function draw() {

  console.log(window.scrollY);

}
function mousePressed() {
  if (window.scrollY <= 1530) {
    background(0);
    if (mouseX < width / 2 && mouseY < height / 2) {
      textSize(12);
      text('The mayor of Iguala and the Police Chief flee 2 weeks after the 26th', mouseX, mouseY);
      fill(255);
    } if (mouseX > width / 2 && mouseY > height / 2) {
      textSize(12);
      text('Out of the 5 buses, 3 are attacked by Municipal Police', mouseX, mouseY);
      text('Multiple rounds of attacks occur and the students split up', mouseX, mouseY + 15);
      fill(255);
    } if (mouseY < height / 2 && mouseX > width / 2) {
      textSize(12);
      text('Iguala Police block ambulances from entering Iguala after the initial attack', mouseX, mouseY);
      fill(255);
    } if (mouseY > height / 2 && mouseX < width / 2) {
      textSize(12);
      text('Despite finding 60 mass graves ', mouseX, mouseY);
      text('forensics confirm that none of the remains belong', mouseX, mouseY + 15);
      text('to the 43 missing students', mouseX, mouseY + 30);
      fill(255);
    }

  } else if (window.scrollY > 2020 && window.scrollY < 3020) {
    background(0);
    if (mouseX < width / 2 && mouseY < height / 2) {
      textSize(12);
      text('Inter-American Commission on Human Rights', mouseX, mouseY);
      text('requests that Mexico make a database to identify mass graves', mouseX, mouseY + 15);
      fill(255);
    } if (mouseX > width / 2 && mouseY > height / 2) {
      textSize(12);
      text('Murillo Karam ends his statement with "Ive had enough" ', mouseX, mouseY);
      fill(255);
    } if (mouseY < height / 2 && mouseX > width / 2) {
      textSize(12);
      text('Argentine Forensic team rejects this version of events due to the lack of scientific evidence to back up the claims.', mouseX, mouseY);
      fill(255);
    } if (mouseY > height / 2 && mouseX < width / 2) {
      textSize(12);
      text('Mexicos forensic team violates forensic protocol and the chain of custody', mouseX, mouseY);
      text('which leads to the origin of the remains to be unknown', mouseX, mouseY + 15);
      fill(255);
    }
  }  if (window.scrollY >= 3030 && window.scrollY < 3877) {
    background(0);
    if (mouseX < width && mouseY < height) {
      textSize(12);
      text('No new information', mouseX, mouseY);
      fill(255);
    }
  } else if (window.scrollY > 3867 && window.scrollY < 4848) {
    background(0);
    if (mouseX < width / 2 && mouseY < height / 2) {
      textSize(12);
      text('Pictures of some of the students sitting in a health clinic', mouseX, mouseY);
      text('are leaked from soldiers phones proving they were', mouseX, mouseY + 15);
      text('present that night', mouseX, mouseY + 30);
      fill(255);
    } if (mouseX > width / 2 && mouseY > height / 2) {
      textSize(12);
      text('Survivors reveal taxis refused to service them', mouseX, mouseY);
      fill(255);
    } if (mouseY < height / 2 && mouseX > width / 2) {
      textSize(12);
      text('Despite the students identifying themselves and stating', mouseX, mouseY);
      text('they had no weapons, armed forces kept shooting ', mouseX, mouseY + 15)
      text('at the buses and the students', mouseX, mouseY + 30);
      fill(255);
    } if (mouseY > height / 2 && mouseX < width / 2) {
      textSize(12);
      text('Patrols throughout the streets of Iguala continue until 5 am', mouseX, mouseY);
      text('searching for students to round up', mouseX, mouseY + 15);
      fill(255);
    }

  }  if (window.scrollY >= 4850 && window.scrollY < 9239) {
    background(0);
    if (mouseX < width && mouseY < height) {
      textSize(12);
      text('No new information', mouseX, mouseY);
      fill(255);
    }
  } else if (window.scrollY >= 9249 && window.scrollY < 9888) {
    background(0);
    if (mouseX < width / 2 && mouseY < height / 2) {
      textSize(12);
      text('The Mexican Army refuse to be investigated', mouseX, mouseY);
      text('by independent investigations', mouseX, mouseY + 15);
      fill(255);
    } if (mouseX > width / 2 && mouseY > height / 2) {
      textSize(12);
      text('Reporters say they were advised by the government', mouseX, mouseY);
      text('to not travel to Iguala that night', mouseX, mouseY + 15);
      fill(255);
    } if (mouseY < height / 2 && mouseX > width / 2) {
      textSize(12);
      text('The police return a second time and', mouseX, mouseY);
      text('resume shooting at the remaining students ', mouseX, mouseY + 15)
      fill(255);
    } if (mouseY > height / 2 && mouseX < width / 2) {
      textSize(12);
      text('Police stop another bus full of students', mouseX, mouseY);
      text('and tell them to get off the bus', mouseX, mouseY + 15);
      text('and leave Iguala, otherwise they will kill them', mouseX, mouseY + 30);
      fill(255);
    }
  }  if (window.scrollY >= 9900 && window.scrollY < 15650) {
    background(0);
    if (mouseX < width && mouseY < height) {
      textSize(12);
      text('No new information', mouseX, mouseY);
      fill(255);
    }
  } else if (window.scrollY >= 15670 && window.scrollY < 17322) {
    background(0);
    if (mouseX < width / 2 && mouseY < height / 2) {
      textSize(12);
      text('Depositions obtained from the Attorney General', mouseX, mouseY);
      text('reveal soldiers stated that they received orders', mouseX, mouseY + 15);
      text('to attack the students', mouseX, mouseY + 30);
      fill(255);
    } if (mouseX > width / 2 && mouseY > height / 2) {
      textSize(12);
      text('All the names in the depositions', mouseX, mouseY);
      text('are redacted by the Attorney', mouseX, mouseY + 15);
      text('Generals Office', mouseX, mouseY + 30);
      fill(255);
    } if (mouseY < height / 2 && mouseX > width / 2) {
      textSize(12);
      text('Attorney Generals Office continues', mouseX, mouseY);
      text('to release statements that ', mouseX, mouseY + 15)
      text('support their version of events', mouseX, mouseY + 30);
      fill(255);
    } if (mouseY > height / 2 && mouseX < width / 2) {
      textSize(12);
      text('Argentine Forensics dispute the Attorney', mouseX, mouseY);
      text('Generals claim that the remains', mouseX, mouseY + 15);
      text('of a second victim have been found', mouseX, mouseY + 30);
      text('due to a lack of scientific evidence', mouseX, mouseY + 45);
      fill(255);
    }
  }  if (window.scrollY >= 17333 && window.scrollY < 24200) {
    background(0);
    if (mouseX < width && mouseY < height) {
      textSize(12);
      text('No new information', mouseX, mouseY);
      fill(255);
    }
  } else if (window.scrollY >= 24214 && window.scrollY < 25005) {
    background(0);
    if (mouseX < width / 2 && mouseY < height / 2) {
      textSize(12);
      text('The Argentine Forensic Teams report', mouseX, mouseY);
      text('officially rejects the Attorney ', mouseX, mouseY + 15);
      text('Generals claims', mouseX, mouseY + 30);
      fill(255);
    } if (mouseX > width / 2 && mouseY > height / 2) {
      textSize(12);
      text('The families of the victims', mouseX, mouseY);
      text('ask the Argentine Forensic team', mouseX, mouseY + 15);
      text('to not got sold and accept any', mousex, mouseY + 30);
      text('bribe from the corrupt government', mouseX, mouseY + 45);
      fill(255);
    } if (mouseY < height / 2 && mouseX > width / 2) {
      textSize(12);
      text('The Mexican Government runs a ', mouseX, mouseY);
      text('smear campaign against ', mouseX, mouseY + 15)
      text('IACHR and GIEI', mouseX, mouseY + 30);
      fill(255);
    } if (mouseY > height / 2 && mouseX < width / 2) {
      textSize(12);
      text('Families reject the governments', mouseX, mouseY);
      text('account of events', mouseX, mouseY + 15);
      fill(255);
    }
  } if (window.scrollY >= 25015 && window.scrollY < 27730) {
    background(0);
    if (mouseX < width && mouseY < height) {
      textSize(12);
      text('No new information', mouseX, mouseY);
      fill(255);
    }
  } else if (window.scrollY >= 27741 && window.scrollY < 28872) {
    background(0);
    if (mouseX < width / 2 && mouseY < height / 2) {
      textSize(12);
      text('GIEI asks the Mexican government', mouseX, mouseY);
      text('to extend their stay', mouseX, mouseY + 15);
      fill(255);
    } if (mouseX > width / 2 && mouseY > height / 2) {
      textSize(12);
      text('The families of the victims beg the GIEI to stay', mouseX, mouseY);
      fill(255);
    } if (mouseY < height / 2 && mouseX > width / 2) {
      textSize(12);
      text('The GIEI present their final', mouseX, mouseY);
      text('report to the families urging ', mouseX, mouseY + 15)
      text('the Mexican government to investigate', mouseX, mouseY + 30);
      text('the military and the mass graves', mouseX, mouseY + 45);
      fill(255);
    } if (mouseY > height / 2 && mouseX < width / 2) {
      textSize(12);
      text('On the night of the 26th,', mouseX, mouseY);
      text('the students were blocked in Iguala with no way out', mouseX, mouseY + 15);
      fill(255);
    }
  }  if (window.scrollY >= 31345 && window.scrollY < 32104) {
    background(0);
    if (mouseX < width / 2 && mouseY < height / 2) {
      textSize(12);
      text('No new information', mouseX, mouseY);
      fill(255);
    } if (mouseX > width / 2 && mouseY > height / 2) {
      textSize(12);
      text('No new information', mouseX, mouseY);
      fill(255);
    } if (mouseY < height / 2 && mouseX > width / 2) {
      textSize(12);
      text('The report casts doubt on', mouseX, mouseY);
      text('the testimonies the Mexican government', mouseX, mouseY + 15)
      text('had gotten that agree with their', mouseX, mouseY + 30);
      text('version of events', mouseX, mouseY + 45);
      fill(255);
    } if (mouseY > height / 2 && mouseX < width / 2) {
      textSize(12);
      text('No new information', mouseX, mouseY);
      fill(255);
    }
  } else if (window.scrollY >= 36159 && window.scrollY < 36965) {
    background(0);
    if (mouseX < width && mouseY < height) {
      textSize(12);
      text('The GIEI cites a video that has surfaced', mouseX, mouseY);
      text('of Tomas Lucio Zeron at the exact', mouseX, mouseY + 15);
      text('location where the first remains were', mouseX, mouseY + 30);
      text('found by the Mexican government the next day', mouseX, mouseY + 45);
      fill(255);
    }
  }  if (window.scrollY >= 36970 && window.scrollY < 64970) {
    background(0);
    if (mouseX < width && mouseY < height) {
      textSize(12);
      text('No new information', mouseX, mouseY);
      fill(255);
    }
  } else if (window.scrollY >= 64989 && window.scrollY < 65819) {
    background(0);
    if (mouseX < width && mouseY < height) {
      textSize(12);
      text('On June 23rd 2019, a video', mouseX, mouseY);
      text('of an interrogation pops up', mouseX, mouseY + 15);
      text('showing the lead investigator torturing the detainee', mouseX, mouseY + 30);
      fill(255);
    }
  }  if (window.scrollY >= 65830 && window.scrollY < 110662) {
    background(0);
    if (mouseX < width && mouseY < height) {
      textSize(12);
      text('No new information', mouseX, mouseY);
      fill(255);
    }
  }
}
