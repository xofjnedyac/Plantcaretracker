
let newPlant = document.querySelector("#newPlant")
newPlant.addEventListener('click', (event) => newPlantWindow())


function newPlantWindow() {
    // Bring up the plant creator window after pressing the add new button
    let body = document.querySelector('#body')
    let container = document.createElement('div');
    container.id = 'newPlantWindow';
    let div = document.createElement('div');
    div.id = 'window';
    div.innerHTML = `
                <div class="plantcontainer">
                <img src="./plant-icon.png" width="475" height="475">
                <input type="text" value="My Plant" id="plantName">
                <p class="water">Water once every: <select id="plantWater">
                    <option>Day</option>
                    <option>Week</option>
                    <option>1-2 Weeks</option>
                    <option>2-3 Weeks</option>
                    <option>Month</option>
                </select></p>
                <p class="light">This plant likes: <select id="plantLight">
                    <option>Direct light</option>
                    <option>Bright, indirect light</option>
                    <option>Medium light</option>
                    <option>Low light</option>
                </select></p>
                <p class="other">Notes: <textarea id="notes"></textarea></p>
            </div>
            <button id="addNew">Add</button>
                    `
    container.append(div);
    body.append(container);

    let addNew = document.querySelector("#addNew");

    // remove the new plant window
    function returnToHome() {
        container.remove();
    };

   
    // get user inputs and store as variables
    let name = document.getElementById('plantName');
    let water = document.getElementById('plantWater');
    let light = document.getElementById('plantLight');
    let notes = document.getElementById('notes');
   
    // define render plant function
    function newPlantTile() {
        let container = document.querySelector('#plantsbox');
        let div = document.createElement('div');
        div.classList.add("plantcontainer")

        let img = document.createElement('img')
        img.setAttribute('src', "./plant-icon.png")
        div.append(img);

        let h1 = document.createElement('h1')
        h1.classList.add('name')
        let plantName = document.createTextNode(name.value)
        h1.append(plantName)
        div.append(h1);

        let textContainer = document.createElement('div')
        textContainer.classList.add("textContainer")
        div.append(textContainer)


        let brk = document.createElement('brk')
        textContainer.append(brk)

        let p1 = document.createElement('p')
        p1.classList.add('water')
        let plantWater = document.createTextNode("Water once every " + water.value)
        p1.append(plantWater)
        textContainer.append(p1)

        let p2 = document.createElement('p')
        p2.classList.add('light')
        let plantLight = document.createTextNode("This plant prefers " + light.value)
        p2.append(plantLight)
        textContainer.append(p2)

        let p3 = document.createElement('p')
        p3.classList.add('other')
        let plantNotes = document.createTextNode("Notes: " + notes.value)
        p3.append(plantNotes)
        textContainer.append(p3)

        let p4 = document.createElement('p')
        p4.classList.add('other')
        let input = document.createElement('input')
        input.setAttribute('type', 'text')
        input.classList.add('last')
        let lastWatered = document.createTextNode("Last watered date: ")
        p4.append(lastWatered)
        p4.append(input)
        textContainer.append(p4)
        container.append(div);
        console.log("New plant added")

        // dbl click to remove plant
        function removePlant() {
            div.remove();
            console.log('running')
        }
        div.addEventListener('dblclick', (event) => removePlant())
    }
    addNew.addEventListener('click', (event) => newPlantTile());
    addNew.addEventListener('click', (event) => returnToHome());
    
    
}


//  create initial example tile
function ogPlantTile() {
    let container = document.querySelector('#plantsbox');
    let div = document.createElement('div');
    div.innerHTML = `
  
                    <img src="./lauren-mancke-DpphPG9ENsI-unsplash.jpg" width="2600" height="4000">
                    <h1 class="name">Fiddle-Leaf Fig</h1>
                    <div class="textContainer">
                    <p class="water">Water once every 1-2 weeks</p>
                    <p class="light">This plant likes Bright, indirect light</p>
                    <p class="other">Notes: Fertilize every 3-4 weeks during growing season</p>
                    <p class="other">Last watered date: <input type="text" class="last"></input></p>
                    </div>`
        div.classList.add("plantcontainer")
    container.append(div);
    console.log("Original Plant Created")

    // dbl click to remove
    function removePlant() {
        div.remove();
        console.log('running')
    }
    div.addEventListener('dblclick', (event) => removePlant())
}


ogPlantTile();
