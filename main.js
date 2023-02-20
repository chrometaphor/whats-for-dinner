//----------------------------------------------------
//QUERY SELECTORS
//----------------------------------------------------

// var variableName = document.querySelector('#selection-url');
var letsCookButton = document.querySelector('#letsCookBtn');
var cookPotImage = document.querySelector('#cookPotImg')
var mealMessageText = document.querySelector('#mealMessage')
var shouldMake = document.querySelector('#shouldMakeWords')

// var selectedMeal = document.querySelector('input[name="meal"]:checked').value;


// var currentMeal;


//----------------------------------------------------
//RADIO BUTTON
//----------------------------------------------------
var sideDishRadioBtn = document.querySelector('#sideDishRadio')
var mainDishRadioBtn = document.querySelector('#mainDishRadio')
var dessertRadioBtn = document.querySelector('#dessertRadio')
var entireMealRadioBtn = document.querySelector('#entireMealRadio')

//----------------------------------------------------
//DISHES
//----------------------------------------------------
var sides = [
    'Miso Glazed Carrots',
    'Coleslaw',
    'Garden Salad',
    'Crispy Potatoes',
    'Sweet Potato Tots',
    'Coconut Rice',
    'Caeser Salad',
    'Shrimp Summer Rolls',
    'Garlic Butter Mushrooms',
    'Hush Puppies'
];

var mains = [
    'Spaghetti and Meatballs',
    'Pineapple Chicken',
    'Shakshuka',
    'Thai Yellow Curry',
    'Bibimbap',
    'Chicken Parmesean',
    'Butternut Squash Soup',
    'BBQ Chicken Burgers',
    'Ramen',
    'Empanadas',
    'Chicken Fried Rice',
    'Sheet Pan Fajitas',
    'Margarita Pizza',
];

var desserts = [
    'Apple Pie',
    'Lemon Meringue Pie',
    'Black Forest Cake',
    'Banana Bread',
    'Peach Cobbler',
    'Cheesecake',
    'Funfetti Cake',
    'Baklava',
    'Flan',
    'Macarons',
    'Macaroons',
    'Chocolate Cupcakes',
    'Pavlova',
    'Pumpkin Pie',
    'Key Lime Pie',
    'Tart Tatin',
    'Croissants',
    'Eclairs',
]

//----------------------------------------------------
//EVENT LISTENERS
//----------------------------------------------------

//LETS COOK BUTTON
letsCookButton.addEventListener('click', getMeal)
    // event.preventDefault()
    // getMeal()

// //SIDE DISH RADIO BUTTON
// sideDishRadioBtn.addEventListener('click', displayRandomSideDish);

// //MAIN DISH RADIO BUTTON
// mainDishRadioBtn.addEventListener('click', displayRandomMainDish);

// //DESSERT RADIO BUTTON
// dessertRadioBtn.addEventListener('click', displayRandomDessert);

// //ENTIRE MEAL RADIO BUTTON
// entireMealRadioBtn.addEventListener('click', displayEntireMeal);



//----------------------------------------------------
//FUNCTIONS
//----------------------------------------------------



function getRandomIndex(array) {
    var random = Math.floor(Math.random() * array.length)
    return array[random]
}

function getMeal(event) {
    event.preventDefault() 
    var selectMeal = document.querySelector('input[name="meals"]:checked').value;
    var returnMessage = document.querySelector('#mealMessage');
    
    if (selectMeal === 'side') {
        cookPotImage.classList.add('hidden')
        shouldMake.classList.remove('hidden')
        returnMessage.classList.remove('hidden')
        returnMessage.innerText = getRandomIndex(sides)

    } else if (selectMeal === 'main') {
            cookPotImage.classList.add('hidden')
            shouldMake.classList.remove('hidden')
            returnMessage.classList.remove('hidden')
            returnMessage.innerText = getRandomIndex(mains)

    } else if (selectMeal === 'dessert') {
            cookPotImage.classList.add('hidden')
            shouldMake.classList.remove('hidden')
            returnMessage.classList.remove('hidden')
            returnMessage.innerText = getRandomIndex(desserts)            


}
}


    // } else if (selectMeal === 'main') {
    //         cookPotImage.classList.add('hidden')
    //         returnMessage.innerHTML = `
    //         <p> You should make: </p>
    //         <h1> ${mains[getRandomIndex(mains)]}!</h1>
    //         `
                
    // } else if (selectMeal === 'dessert') {
    //     cookPotImage.classList.add('hidden')
    //     returnMessage.innerHTML = `
    //     <p> You should make: </p>
    //     <h1> ${desserts[getRandomIndex(desserts)]}!</h1>
    //     `
    // }
    
    // }


// }

    // var selectedMeal = document.querySelector('input[name="meal"]:checked').value;
    // v








// function displayRandomSideDish() {
//     currentMeal = new Sides (sides[getRandomIndex(sides)])

// }


// function displayRandomMainDish() {

// }


// function displayRandomDessert() {

// }


// function displayEntireMeal() {

// }

//       if (document.getElementById("sideDishRadio").checked) {
//       radio = "side";
//       return (sides[getRandomIndex(sides)])
//     }
//     else if (document.getElementById("mainDishRadio").checked) {
//       radio = "main";
//       return (mains[getRandomIndex(mains)])
//     }
//     else if (document.getElementById("dessertRadio").checked) {
//         radio = "dessert";
//         return (desserts[getRandomIndex(desserts)])
//       }
//     else {
//       radio = "entireMealRadio";
//     }