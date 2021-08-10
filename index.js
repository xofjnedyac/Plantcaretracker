let text = "heyo string"
    console.log(text)
    console.log('hello')
    console.log('show me the text')
    


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
                <p class="other">Notes: <textarea></textarea></p>
            </div>
            <button id="addNew">Add</button>
                    `
    container.append(div);
    body.append(container);
    console.log("this function is running")

    let addNew = document.querySelector("#addNew");
    function returnToHome() {
        container.remove();
    };

    let plantNameInput = document.querySelector('#plantName')
    let plantName = plantNameInput.Value;
    console.log(plantName);

    addNew.addEventListener('click', (event) => newPlantTile());
    addNew.addEventListener('click', (event) => returnToHome());
    
}

function closeWindow() {
    let window = document.querySelector('#newPlantWindow');
    window.innerHTML = ``;
    window.id = '';
}



function newPlantTile() {
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
    console.log("this function is running")
}

let windowbg = document.querySelector('#newPlantWindow')
// windowbg.addEventListener('click', (event) => closeWindow())
