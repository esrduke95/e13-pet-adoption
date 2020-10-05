# PET-ADOPTION aka KITTEN SMITTEN

A single-page app dedicated to kittens. This site has the ability to filter different kittens by male or female, or to view all kittens via buttons below the header. Kitten cards are written to the DOM using Javascript. 

## Motivation

As opposted to hardcoding every card onto the page, this project seeks to write HTML elements to the DOM with Javascript. The purpose was to use for... loops to loop through the array of kitten objects and build cards on the page out of the object data. 

## Code

This project utilizes CSS, HTML5, and E6 Javascript. 

## Framework

Javascript + supporting HTML

## Features

Displays an array of objects as "kitten cards" on the webpage with javascript. A function uses a for... loop to loop through an array containing data of each kitten and printing it to the DOM with a printToDom function grabbing elements by their ID. Also contains buttons that filter the cards on click by their male or female property. 

## Code Snippet

```
const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const buildPetCards = (pets) => {
  let domString = "";

  for (let i = 0; i < pets.length; i++) {
    domString += `<div class="card">
                    <img class="petImg" src="${pets[i].image}" alt=""/>
                      <div class="nameBanner">
                        <h2>${pets[i].name}</h2>
                      </div>
                      <h4>color: ${pets[i].color}</h4>
                      <h4>specialty: ${pets[i].specialSkill}</h4>
                      <h4>temperament: ${pets[i].typeOfPet}</h4>
                  </div>`;
  }
  printToDom("pets", domString);
};

```
