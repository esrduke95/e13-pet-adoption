// console.log('pets incoming');

const pets = [
    {
        image: `<img src="https://i.ibb.co/RzGTkrJ/4d526ee97692376c99289abc9f02140f.jpg" alt="" class="petPic"/>`,
        name: "Bonnie",
        color: "multi",
        specialSkill: "thievery",
        typeOfPet: "ambiguous"
      },
    {
        image: xxx,
        name: xxx,
        color: xxx,
        specialSkill: xxx,
        typeOfPet: xxx
      },
    {
        image: xxx,
        name: xxx,
        color: xxx,
        specialSkill: xxx,
        typeOfPet: xxx
      },
    {
        image: xxx,
        name: xxx,
        color: xxx,
        specialSkill: xxx,
        typeOfPet: xxx
      },
    {
        image: xxx,
        name: xxx,
        color: xxx,
        specialSkill: xxx,
        typeOfPet: xxx
      },
    {
        image: xxx,
        name: xxx,
        color: xxx,
        specialSkill: xxx,
        typeOfPet: xxx
      },
    {
        image: xxx,
        name: xxx,
        color: xxx,
        specialSkill: xxx,
        typeOfPet: xxx
      },
    {
        image: xxx,
        name: xxx,
        color: xxx,
        specialSkill: xxx,
        typeOfPet: xxx
      }
]

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const buildPetCards = () => {
    let domString = "";

    for (let i = 0; j < pets.length; i++) {
        domString += `<div class="petCard">`
        domString += `<div class="petName">${pets[i].name}</div>`
        domString += `${pets[i].image}`
        domString += `<h5>${pets[i].color}</h5>`
        domString += `<p class="petDescription">`
        domString += `${pets[i].name} is looking for a furrever home! This pet's Special Skill is ${pets[i].specialSkill}`
        domString += `</p>`
        domString += `</div>`
    }
    printToDom("pets", domString);
}

const init = () => {
    buildPetCards();
}

init();