
    
let plants = ['name', 'water', 'light', 'notes']; 

let newPlant = document.querySelector("#newPlant")
newPlant.addEventListener('click', (event) => newPlantWindow())


function newPlantWindow() {
    let body = document.querySelector('#body')
    let container = document.createElement('div');
    container.id = 'newPlantWindow';
    let div = document.createElement('div');
    div.id = 'window';
    div.innerHTML = `
                <div class="plantcontainer">
                <!-- <img src="./lauren-mancke-DpphPG9ENsI-unsplash.jpg" width="2600" height="4000"> -->
                <i class="fas fa-leaf fa-10x"></i>
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
    function returnToHome() {
        container.remove();
    };

//    get name from input field
    let name = document.getElementById('plantName');
    addNew.addEventListener('click', (event) => {
            console.log(name.value)
    });

    // get water value from select field
    let water = document.getElementById('plantWater');
    addNew.addEventListener('click', (event) => {
        console.log(water.value)
});

    // get light value from select field
    let light = document.getElementById('plantLight');
    addNew.addEventListener('click', (event) => {
        console.log(light.value)
});

    // get notes from notes field
    let notes = document.getElementById('notes');
    addNew.addEventListener('click', (event) => {
        console.log(notes.value)
});

    // define render plant function
    function newPlantTile() {
        let container = document.querySelector('#plantsbox');
        let div = document.createElement('div');
        div.classList.add("plantcontainer")

        let img = document.createElement('img')
        img.setAttribute('src', "./lauren-mancke-DpphPG9ENsI-unsplash.jpg")
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
    }

    addNew.addEventListener('click', (event) => newPlantTile());
    addNew.addEventListener('click', (event) => returnToHome());
    
    
}



function ogPlantTile() {
    let container = document.querySelector('#plantsbox');
    let div = document.createElement('div');
    div.innerHTML = `
  
                    <img src="./lauren-mancke-DpphPG9ENsI-unsplash.jpg" width="2600" height="4000">
                    <h1 class="name">Fiddle-Leaf Fig</h1>
                    <p class="water">Water once every: <select>
                        <option>Day</option>
                        <option>Week</option>
                        <option>1-2 Weeks</option>
                        <option>2-3 Weeks</option>
                        <option>Month</option>
                    </select></p>
                    <p class="light">This plant likes: <select>
                        <option>Direct light</option>
                        <option>Bright, indirect light</option>
                        <option>Medium light</option>
                        <option>Low light</option>
                    </select></p>
                    <p class="other">Notes: <textarea></textarea></p>`
        div.classList.add("plantcontainer")
    container.append(div);
    console.log("Original Plant Created")
}


ogPlantTile();


let windowbg = document.querySelector('#newPlantWindow')
// windowbg.addEventListener('click', (event) => closeWindow())
