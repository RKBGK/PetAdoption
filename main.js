
const pets = [
  {
    name: "Dusty",
    color: "Green",
    specialSkill: "Gives sincere apologies.",
    type: "cat",
    imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg"
  },
  {
    name: "Whiskers",
    color: "Yellow",
    specialSkill: "Can prove he is a real man by drinking whiskey.",
    type: "dino",
    imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
  },
  {
    name: "Coco",
    color: "Black",
    specialSkill: "Burps minimally.",
    type: "dog",
    imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
  },
  {
    name: "Spooky",
    color: "Brown",
    specialSkill: "Comfortable in the outdoors for up to eight hours.",
    type: "cat",
    imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
  },
  {
    name: "Tiger",
    color: "Black",
    specialSkill: "Can read (but cannot understand) Hebrew.",
    type: "dog",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
  },
  {
    name: "Oreo",
    color: "Yellow",
    specialSkill: "Able to stop chewing ice or whistling on request.",
    type: "cat",
    imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
  },
  {
    name: "Sassy",
    color: "Brown",
    specialSkill: "Adept at talking self and others out of fights.",
    type: "cat",
    imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
  },
  {
    name: "Sammy",
    color: "Blue",
    specialSkill: "Listens attentively to boring stories.",
    type: "cat",
    imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
  },
  {
    name: "Buster",
    color: "Green",
    specialSkill: "Does not use excessive acronyms.",
    type: "dog",
    imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
  },
  {
    name: "Samantha",
    color: "Brown",
    specialSkill: "Always up for dessert.",
    type: "cat",
    imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
  },
  {
    name: "Coco",
    color: "Red",
    specialSkill: "Burps minimally.",
    type: "cat",
    imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
  },
  {
    name: "Buddy",
    color: "Red",
    specialSkill: "Enjoys fine wine.",
    type: "dog",
    imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
  },
  {
    name: "Bubba",
    color: "Yellow",
    specialSkill: "Cleans himself.",
    type: "dog",
    imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
  },
  {
    name: "Chloe",
    color: "Green",
    specialSkill: "Admits he is wrong",
    type: "dino",
    imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
  },
  {
    name: "Nala",
    color: "Purple",
    specialSkill: "Dances when he has to.",
    type: "cat",
    imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
  },
  {
    name: "Oscar",
    color: "Green",
    specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
    type: "cat",
    imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
  }
];


// const bodyElement = document.querySelector('body');
// const divElement = document.querySelector('#outMost');
// const petDog = document.querySelector('#Dogs');
// const petCat = document.querySelector('#Cats');
// const petAll = document.querySelector('#All');
// console.log(bodyElement);
// console.log(divElement );

const renderToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};

const buttons = () => {
  const domString = `
  <button type="button" class="btn btn-primary" id="All">All</button>
  <button type="button" class="btn btn-Dog" id="Dog">Dogs</button>
  <button type="button" class="btn btn-Cat" id="Cat">Cats</button>
  <button type="button" class="btn btn-Dino" id="Dino">Dinos</button>
  `;
  renderToDom("#buttonContainer", domString);
};
  const filterPets = (array, type) => {
    console.log(type +' '+ 'filterpets');
    return array.filter((petObject) => petObject.type === type.toLowerCase());
  };
  
  // Handles the button events

const handleButtonClick = (event) => {
      console.log(event.target.id);
      if (event.target.id === "All") {
        printPets(pets);
      }
      if (event.target.id === "Cat") {
        const arrCat = filterPets(pets, event.target.id);
        printPets(arrCat);
      }
      if (event.target.id === "Dog") {
        const arrDog = filterPets(pets, event.target.id);
        printPets(arrDog);
      }
      if (event.target.id === "Dino") {
        const arrDino = filterPets(pets, event.target.id);
        printPets(arrDino);
      }
    };
    const deletePie = (event) => {
      const targetId = event.target.id;
      const targetType = event.target.type;
    
      if (targetType === "button") {
        pets.splice(targetId, 1);
        printPets(pets);
      }
    };


    const buttonEvents = () => {
      document
        .querySelector("#buttonContainer").addEventListener("click", handleButtonClick);
    
      document.querySelector("#petContainer").addEventListener("click", deletePie);
    };

  const printPets = (petArray) => {
    console.log(petArray)
    let domString = '';
    petArray.forEach((pet,i) => {
       
        domString += `
          <div class="card" style="width: 18rem;">
            <div class="card-header fw-bold text-secondary">
            <p class="card-title">${pet.name}</p>
            </div>
            <img src=${pet.imageUrl} class="card-img-top" alt=${pet.name}
            <div class="card-body">
              <p class="card-text">${pet.color}</p>
              <p class="card-text">${pet.specialSkill}</p>

              <button type="button" id=${i} class="btn btn-primary">Delete</button>
              <div class="card-footer ${pet.type}-type"><p>${pet.type}</p></div>
            </div>
          </div>`;
          console.log(domString)
      });
     
      renderToDom("#petContainer", domString);
 
 
 // }
}



const init = () => {
  // this starts the app
  buttons(); // PUT DOM ELEMENTS FIRST
  buttonEvents(); // EVENT LISTNERS AFTER
  printPets(pets);
  
 
};

init();