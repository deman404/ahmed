//age secure 

//function if else alert promp logic

//if = ila kan 
//else = ila makanx 

//if central kayn => ghadi iji 
//else jib jawda

//function NameDialha () { hna kaykon lkod  }

//NameDialha()

// || aw hada ola hada 
// !dkhol = madkholx
// !yes = no
// + - * / ** // % ? 
// ayman? = ilkayn mzian mkynx foto 
//age >= 1 akbar aw = 1


function validateAge() {
    //diklarina les const dialna
    const age = document.getElementById("ageInput").value;
    const errorMessage = document.getElementById("errorMessage");
    //ila dkhal sghar mn 0
    if (age === "" || age < 1) {
        errorMessage.textContent = "Please enter a valid age.";
    } 
    // bin 1 o 18
    if (age >= 1 || age < 18 ) {
        errorMessage.textContent = "nta ba9i sghir";
        
    } 
    // kbar mn 18 
    if (age > 18  || age == 18){
        
        alert("mrhba bik rak valide")
    }
}

//{age >= 1 || age < 18 (nta ba9i sghir) : (mrhba bik rak valide) }

// = / test = 1 type 
// == / test == 1 tupe et valeur
// === / test === 1 type et valeur et Qualify


var test = 1
test = 1 // test = test   | hadi bax kan3ti dak var wahd l valeur
test == 1 //test = test | test = 1 | bax kan9arn m3a hadak l var 
test === 4 //4 = 1 | test = test | test = number | bax knxof wax dak l var howa nfso 

