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
}

function getSensibleData(items) {
  return items.filter(i => i.dataType)
}

function getPublicData(items) {
  return items.filter(i => !i.dataType)
}

function lalala() { }