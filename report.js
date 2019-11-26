window.onload = () => {
  const items = JSON.parse(localStorage.getItem('items'));
  const fields = JSON.parse(localStorage.getItem('fields'));
  const sensible = getSensibleData(items);
  const public = getPublicData(items);
  console.log('sensible: ', sensible)
  console.log('public: ', public)
  new Vue({
    el: '#main',
    data: {
      items,
      fields,
      sensible,
      public
    },
    methods: {
      lalala: function (data) {
        return data ? 'Sensível' : 'Publico'
      },
      whoHasAccess(data) {
        data = Object.keys(data);
        const options = ['Titular', 'Controlador', 'Operador', 'Encarregado']
        return data.length ? data.map(x => options[x]).join(', ') : '';
      }
    }
  });
  // create the chart
  var chart = anychart.pie();

  const chartData = [
    { x: 'Público', value: public.length },
    { x: 'Sensível', value: sensible.length }
  ]
  // add the data
  chart.data(chartData);

  // display the chart in the container
  chart.container('chart');
  chart.draw();
}

function getSensibleData(items) {
  return items.filter(i => i.dataType)
}

function getPublicData(items) {
  return items.filter(i => !i.dataType)
}

function lalala() { }