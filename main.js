"use strict";

const pets = [
  {
    image: `./assets/images/card-images/bonbon_heart.png`,
    name: "bonbon",
    sex: "female",
    color: "orange",
    specialSkill: "thievery",
    typeOfPet: "ambiguous",
    isFeatured: true,
  },
  {
    image: `./assets/images/card-images/biscuits_heart.png`,
    name: "biscuits",
    sex: "male",
    color: "gray",
    specialSkill: "scratchy-scratchy",
    typeOfPet: "sly",
    isFeatured: false,
  },
  {
    image: `./assets/images/card-images/cheddar_heart.png`,
    name: "cheddar",
    sex: "male",
    color: "yellow tabby",
    specialSkill: "making biscuits",
    typeOfPet: "cheerful",
    isFeatured: false,
  },
  {
    image: `./assets/images/card-images/gumdrop_heart.png`,
    name: "gumdrop",
    sex: "female",
    color: "light grey",
    specialSkill: "parkour",
    typeOfPet: "escape artist",
    isFeatured: false,
  },
  {
    image: `./assets/images/card-images/jellybean_heart.png`,
    name: "jellybean",
    sex: "male",
    color: "black",
    specialSkill: "mice catching",
    typeOfPet: "adventurous",
    isFeatured: true,
  },
  {
    image: `./assets/images/card-images/latte_heart.png`,
    name: "latte",
    sex: "female",
    color: "calico",
    specialSkill: "napping",
    typeOfPet: "lazy",
    isFeatured: false,
  },
  {
    image: `./assets/images/card-images/marshmallow_heart.png`,
    name: "marshmallow",
    sex: "female",
    color: "white",
    specialSkill: "snuggling",
    typeOfPet: "sweet",
    isFeatured: false,
  },
  {
    image: `./assets/images/card-images/marzipan_heart.png`,
    name: "marzipan",
    sex: "male",
    color: "cream",
    specialSkill: "crying",
    typeOfPet: "clingy",
    isFeatured: true,
  },
  {
    image: `./assets/images/card-images/mocha_heart.png`,
    name: "mocha",
    sex: "female",
    color: "tabby",
    specialSkill: "hunting",
    typeOfPet: "wild",
    isFeatured: false,
  },
  {
    image: `./assets/images/card-images/muffin_heart.png`,
    name: "muffin",
    sex: "male",
    color: "tuxedo tabby",
    specialSkill: "climbing",
    typeOfPet: "curious",
    isFeatured: false,
  },
  {
    image: `./assets/images/card-images/pudding_heart.png`,
    name: "pudding",
    sex: "female",
    color: "tabby",
    specialSkill: "munching",
    typeOfPet: "gluttonous",
    isFeatured: true,
  },
];

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

const filterPets = (event) => {
  let buttonId = event.target.id;
  const tempPets = [];

  for (let i = 0; i < pets.length; i++) {
    if (pets[i].sex === buttonId) {
      tempPets.push(pets[i]);
      console.log('this works');
    }
  }
  buildPetCards(tempPets);
};

const filterPetsAll = (event) => {
  let buttonId = event.target.id;

  if (buttonId === 'all') {
    buildPetCards(pets);
  }
}

const buttonEvents = () => {
  document.getElementById('male').addEventListener('click', filterPets);
  document.getElementById('female').addEventListener('click', filterPets);
  document.getElementById('all').addEventListener('click', filterPetsAll);
}

const init = () => {
  buildPetCards(pets);
  buttonEvents();
};

init();
