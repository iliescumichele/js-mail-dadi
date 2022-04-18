
const classe61 = ['Domenico Agostino',
    'Mihai Badia',
    'Riccardo Becattini',
    'Manuel Benini',
    'Bruno Bernardini',
    'Guido Buono',
    'Pierluigi Cancellaro',
    'Francesco Cataletto',
    'Stefano Cravotta',
    'Giovanni Crispino',
    'Giancarlo Croce',
    'Enrico De Stefano',
    'Silvia Dugato',
    'Carlo Duminuco Del Monte',
    'Francesco Ercoli',
    'Luca Gaddini',
    'Marco Gagliano',
    'Cristina Gasperini',
    'Gabriele Giusti',
    'Chiara Grillo',
    'Manuela Ienuso',
    'Michele Iliescu',
    'Ketevan Jorjoliani',
    'Renato Lami',
    'Davide Manciucca',
    'Emanuele Mastronardi',
    'Luca Mazzarini',
    'Daniele Monteleone',
    'Salvatore Olivieri',
    'Leonardo Pellegrini',
    'Agostino Piquè',
    'Davide Pizzolla',
    'Antonio Pollo',
    'Ivan Russo',
    'Amanjit Singh',
    'Sebastiano Visco'
];

const btnExtract = document.getElementById('btn_extraction');

const nomiEstratti = [];
btnExtract.addEventListener('click', function(){

  let nameExtracted;
  let flag; 

  do{

    flag = false;
    let random = Math.floor(Math.random() * classe61.length);
    nameExtracted = classe61[random];

      
    console.log(nameExtracted + " --- " + nomiEstratti);


    if(nomiEstratti.length < classe61.length){
      for(let i = 0; i < nomiEstratti.length; i++){
      
        if(nameExtracted === nomiEstratti[i]){
          flag = true;
        }
      }
    }else{
      
      nameExtracted = "All names have been extracted";
      btnExtract.innerHTML = 'Restart';
    }
    
    if(!flag){
      nomiEstratti.push(nameExtracted);
    }
    
    console.log(nomiEstratti);


    if(nomiEstratti.length > classe61.length){
        console.log("--------------------------------------")
        console.log("-SVUOTO L'ARRAY CON I NOMI ESTRATTI-")
        console.log("--------------------------------------")

        while(nomiEstratti.length){
          console.log(nomiEstratti + " --- " + nomiEstratti.length);
          nomiEstratti.pop();
        }
      }

  }while(flag)

  document.getElementById('extracted_name').innerHTML = nameExtracted;

  

});

