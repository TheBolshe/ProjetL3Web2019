/*const ysj =[];
const ysa= [];
const ye = [];
*/

//getDataStats();

//version serveur + API

/*async function getDataStats(){
  const response = await fetch('data/ResultatsFestival.csv');
  const data = await response.text();

  const rows = data.split('\n').slice(1);
  rows.forEach(row =>{
    const column = row.split(',');
    const sj = row[9];
    ysj.push(sj);
    const sa = row[10];
    ysa.push(sa);
    const e = row[11];
    ye.push(e);
    console.log(sj,sa,e);
  })

}*/


function getDataStatsbis(){
  $.ajax({
    type : "GET",
    url : "php/filtrePlaces.php",
    success : function(data){
      affiche(data);
      //affichePrix(data);
    }
  });
}

function affichePrix(donnee){
  yo = donnee.O;
  yr = donnee.R;
  yp = donnee.P;
  ysj = donnee.SJ;
  ysa = donnee.SA;

  const res = [18];
  const dep = [18];

  for (var i = 0; i < 18; i++) {
    ysa[i] = Number.parseInt(ysa[i],10) * 12,5;
  }

  for (var i = 0; i < 18; i++) {
    ysj[i] = Number.parseInt(ysj[i],10) * 9;
  }

  for (var i = 0; i < 18; i++) {
    yp[i] = Number.parseInt(yp[i],10) * 15;
  }

  for (var i = 0; i < 18; i++) {
    yr[i] = Number.parseInt(yr[i],10) * 10;
  }

  for (var i = 0; i < 18; i++) {
    res[i] = yr[i] + yp[i];
  }

  for (var i = 0; i < 18; i++) {
    dep[i] = ysj[i] + ysa[i];
  }

  let ctx = document.getElementById('canvas').getContext('2d');

  Chart.defaults.scale.ticks.beginAtZero = true;
  Chart.defaults.global.defaultFontColor = "white";
  Chart.defaults.global.title = "Reçettes et Dépense ainsi que leurs détails";

  let barChart = new Chart(ctx,{
    type : 'bar',
    data : {
      labels : ["Barbara, où rêvent mes saisons","Le château de ma mère","Fricassée de berniques sur lit de Prévert","Hugo es tu là?","La demande en mariage et L'ours","La gloire de mon père","La promesse de l'aube","Le marchand de Venise","Le mariage","Le prophète","Le Tartuffe ou l'imposteur","Les confessions : Les années de Jeunesse","Les confessions : Les années de Maturité","Les confessions : Les années de Sagesse","Les soliloques de Mariette","Mademoiselle Julie","Port Racines","Titre Provisoire"],
      datasets : [
        {
          label : 'Tarif Jeune',
          data : yr,
          backgroundColor : 'orange',
        },{
          label : 'Tarif Adult',
          data : yp,
          backgroundColor : 'yellow',
        },{
          label : 'Reçettes',
          data : res,
          backgroundColor : 'green',
        },{
          label : 'Dépenses',
          data : dep,
          backgroundColor : 'red',
        }
      ]
    },
    options : {
      title :{
        text : "Reçettes et Dépense ainsi que leurs détails"
      },
      scales: {
        xAxes: [{ stacked: true }],
        yAxes: [{ stacked: true }]
      }
    }
  });
}

function affiche(donnee){
  yo = donnee.O;
  yr = donnee.R;
  yp = donnee.P;
  ysj = donnee.SJ;
  ysa = donnee.SA;
  ye = donnee.E;

  const res = [18];

  for (var i = 0; i < 18; i++) {
    res[i] = Number.parseInt(yo[i],10) + Number.parseInt(yp[i],10) + Number.parseInt(yr[i],10) + Number.parseInt(ysa[i],10) + Number.parseInt(ysj[i],10) + Number.parseInt(ye[i],10);
  }

  let ctx = document.getElementById('canvas').getContext('2d');

  Chart.defaults.scale.ticks.beginAtZero = true;
  Chart.defaults.global.defaultFontColor = "white";
  Chart.defaults.global.title = "Nombres de Places Vendues";

  let barChart = new Chart(ctx,{
    type : 'bar',
    data : {
      labels : ["Barbara, où rêvent mes saisons","Le château de ma mère","Fricassée de berniques sur lit de Prévert","Hugo es tu là?","La demande en mariage et L'ours","La gloire de mon père","La promesse de l'aube","Le marchand de Venise","Le mariage","Le prophète","Le Tartuffe ou l'imposteur","Les confessions : Les années de Jeunesse","Les confessions : Les années de Maturité","Les confessions : Les années de Sagesse","Les soliloques de Mariette","Mademoiselle Julie","Port Racines","Titre Provisoire"],
      datasets : [
        {
          label : 'Tarif Enfant',
          data : yo,
          backgroundColor : 'blue',
        },{
          label : 'Spécial Enfant',
          data : ye,
          backgroundColor : '#0CF8E5',
        },{
          label : 'Tarif Jeune',
          data : yr,
          backgroundColor : '#3AA000',
        },{
          label : 'Spécial Jeune',
          data : ysj,
          backgroundColor : 'green',
        },{
          label : 'Tarif Adult',
          data : yp,
          backgroundColor : '#D0D814',
        },{
          label : 'Spécial Adut',
          data : ysa,
          backgroundColor : 'yellow',
        },{
          label : 'Total de billets',
          data : res,
          backgroundColor : 'red',
        }
      ]
    },
    options : {
      title :{
        text : "Nombres de Places Vendues"
      },
      scales: {
        xAxes: [{ stacked: true }],
        yAxes: [{ stacked: true }]
      }
    }
  });
}
getDataStatsbis();
