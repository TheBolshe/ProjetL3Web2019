let ctx = document.getElementById('canvas').getContext('2d');

Chart.defaults.scale.ticks.beginAtZero = true;

let barChart = new Chart(ctx,{
  type : 'bar',
  data : {
    labels : ["Barbara, où rêvent mes saisons","Le château de ma mère","Fricassée de berniques sur lit de Prévert","Hugo es tu là?","La demande en mariage et L'ours","La gloire de mon père","La promesse de l'aube","Le marchand de Venise","Le mariage","Le prophète","Le Tartuffe ou l'imposteur","Les confessions : Les années de Jeunesse","Les confessions : Les années de Maturité","Les confessions : Les années de Sagesse","Les soliloques de Mariette","Mademoiselle Julie","Port Racines","Titre Provisoire"],
    datasets : [
      {
        label : 'Tarif Enfant',
        data : [10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        backgroundColor : 'blue',
      },{
        label : 'Tarif Jeune',
        data : [10,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        backgroundColor : 'green',
      },{
        label : 'Tarif Adult',
        data : [10,10,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
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
