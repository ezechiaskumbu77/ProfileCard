fetch('people.json')
    .then(function (response){
        return response.json();
    })
    .then(function(data){
        appendData(data);
    })
    .catch(function(err){
        console.log('error: ' + err);
    });

    function appendData(data){
        var mainContainer = document.getElementById("myData");
        
        for (var i = 0; i <data.length; i++){
                            
            var div = document.createElement("div");
            div.innerHTML = '<br /><br /><div id="color"><h3>Nom : ' + data[i].nom + '<h3>Numero : ' + data[i].numero + '<h3>cle : ' + data[i].cle + '<h3>liste - ';
            mainContainer.appendChild(div);

            for(var j = 0; j <data[i].liste.length; j++){
                var div = document.createElement("div");
                div.innerHTML = '<div id="color">date : ' + data[i].liste[j].date + ' Heure : ' + data[i].liste[j].date + ' Coût : ' + data[i].liste[j].cout + ' Clé : ' + data[i].liste[j].cle + ' Valeur : ' + data[i].liste[j].valeur + '<br />    Remarque --<br />';
                mainContainer.appendChild(div);

                for(var k = 0; k <data[i].liste[j].remarque.length; k++){
                    var div = document.createElement("div");
                    div.innerHTML = '<div id="color">date : ' + data[i].liste[j].remarque[k].date + ' Heure : ' + data[i].liste[j].remarque[k].heure + ' Coût : ' + data[i].liste[j].remarque[k].cout + ' Clé : ' + data[i].liste[j].remarque[k].cle + ' Valeur : ' + data[i].liste[j].remarque[k].valeur;
                    mainContainer.appendChild(div);
                }
            }
        }
    }