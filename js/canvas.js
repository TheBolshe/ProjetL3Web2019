const ysj =[];
const ysa= [];
const ye = [];

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

getDataStatsbis();

function getDataStatsbis(){
  let callStats = $.ajax({
    type : "POST",
    url : "php/filtreQuandOu.php",
    success : function(data){
      affiche(data)
      console.log("cc");
    }
  });
}

function affiche(donnee){
  ye = donnee.E;
  ysj = donnee.SJ;
  ysa = donnee.SA;
  
  let ctx = document.getElementById('canvas').getContext('2d');

  Chart.defaults.scale.ticks.beginAtZero = true;

  let barChart = new Chart(ctx,{
    type : 'bar',
    data : {
      labels : ["Barbara, où rêvent mes saisons","Le château de ma mère","Fricassée de berniques sur lit de Prévert","Hugo es tu là?","La demande en mariage et L'ours","La gloire de mon père","La promesse de l'aube","Le marchand de Venise","Le mariage","Le prophète","Le Tartuffe ou l'imposteur","Les confessions : Les années de Jeunesse","Les confessions : Les années de Maturité","Les confessions : Les années de Sagesse","Les soliloques de Mariette","Mademoiselle Julie","Port Racines","Titre Provisoire"],
      datasets : [
        {
          label : 'Tarif Enfant',
          data : ye,
          backgroundColor : 'blue',
        },{
          label : 'Tarif Jeune',
          data : ysj,
          backgroundColor : 'green',
        },{
          label : 'Tarif Adult',
          data : ysa,
          backgroundColor : 'yellow',
        }
      ]
    },
    options : {
      scales: {
        xAxes: [{ stacked: true }],
        yAxes: [{ stacked: true }]
      }
    }
  });
}
