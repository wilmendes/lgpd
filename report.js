window.onload = () => {
  const items = JSON.parse(localStorage.getItem('items'));
  const fields = JSON.parse(localStorage.getItem('fields'));
  const sensible = getSensibleData(items);
  const public = getPublicData(items);
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