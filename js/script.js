let cocktailsArray = [
    {
        "name": "White Russian",
        "img": 'img/White-Russian.webp',
        "ingredients": [
            {
                "name": "kahlùa",
                "part": 1,
                "color": "#66462F"
            },
            {
                "name": "absolut vodka",
                "part": 1,
                "color": "#F5EDDA"
            },
            {
                "name": "heavy cream",
                "part": 1,
                "color": "#CA9E7B"
            }
        ]
    },
    {
        "name": "Margarita",
        "img": '',
        "ingredients": [
            {
                "name": "Cointreau",
                "part": 1,
                "color": "#ffc501"
            },
            {
                "name": "Blanco tequila",
                "part": 2,
                "color": "#fdfd96"
            },
            {
                "name": "Fresh lime juice",
                "part": 1,
                "color": "#99FF1D"
            }
        ]
    },
    {
        "name": "Screwdriver",
        "ingredients": [
            {
                "name": "orange juice",
                "part": 6,
                "color": "#FCA43C"
            },
            {
                "name": "vodka",
                "part": 1.5,
                "color": "#F5EDDA"
            },
            {
                "name": "ice cubes",
                "part": 1.5,
                "color": "#E8F6F9"
            }
        ]
    },
    {
        "name": "Bloody Mary",
        "ingredients": [
            {
                "name": "Pepper vodka",
                "part": 2,
                "color": "#F5EDDA"
            },
            {
                "name": "Tomato juice",
                "part": 4,
                "color": "#ff6347"
            },
            {
                "name": " Lemon juice",
                "part": 0.5,
                "color": "#FFFAC8"
            }
        ]
    },
    {
        "name": "Cosmopolitan",
        "ingredients": [
            {
                "name": "vodka",
                "part": 1.5,
                "color": "#F5EDDA"
            },
            {
                "name": "Fresh lime juice",
                "part": 0.25,
                "color": "#99FF1D"
            },
            {
                "name": "triple sec",
                "part": 0.25,
                "color": "#FCA43C"
            },
            {
                "name": "cranberry juice",
                "part": 0.25,
                "color": "#ba4242"
            },
            {
                "name": "ice cubes",
                "part": 1.5,
                "color": "#E8F6F9"
            }
        ]
    },
    {
        "name": "Tequilla Sunrise",
        "ingredients": [
            {
                "name": "tequila",
                "part": 2,
                "color": "#66462F"
            },
            {
                "name": "orange juice",
                "part": 4,
                "color": "#FCA43C"
            },
            {
                "name": "grenadine",
                "part": 0.5,
                "color": "#F9677A"
            }
        ]
    }
];
let cocktailBtns = document.getElementById('cocktails-btns');
let cocktailObject = {};
let cocktailGlass = document.getElementById('cocktail-glass');
for (let i = 0; i < cocktailsArray.length; i++) {
    let cocktailBtn = document.createElement("div"); //creo un div che verrà inserito nel contenitore
    cocktailBtn.className = "cocktail-btn";//metto come classe cocktail-btn su tutti i bottoni
    cocktailBtn.textContent = cocktailsArray[i].name;//il testo del bottone sarà il nome del drink
    cocktailBtns.appendChild(cocktailBtn);//aggiungo al contenitore dei bottoni dei cocktail
    cocktailBtn.addEventListener('click', function () {//creo una funzione che al click sul bottone mi dia il cocktail corrispondente
        cocktailObject = {};
        cocktailGlass.innerHTML = "";
        cocktailObject = cocktailsArray[i];
        let sum = 0;// questa variabile mi servirà per calcolare l'altezza di ogni div contenente l'ingrediente
        for (let x = 0; x < cocktailObject.ingredients.length; x++) {
            sum = sum + cocktailObject.ingredients[x].part;
        }
        cocktailObject.ingredients.forEach(element => {//per ogni ingrediente dell'array
            let ingredient = document.createElement("div");//creo un div con
            ingredient.style.textAlign = 'center';//testo centrato
            ingredient.style.fontSize = '0.9em';
            ingredient.style.backgroundColor = element.color;//colore in base all'elemento color presente nell'oggetto
            ingredient.style.flexGrow = 1;//in base a quanto ingrediente va inserito, si vedrà la proporzione sul bicchiere
            ingredient.innerHTML = element.name + ' ' + element.part + ' Oz.';//il nome dell'ingrediente
            cocktailGlass.appendChild(ingredient);//inserisco tutto nel container cocktail-glass
        });
    })
}