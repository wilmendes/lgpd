window.onload = () => {

  // Vue.component('button-counter', {
  //   data: function () {
  //     return {
  //       count: 0
  //     }
  //   },
  //   template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
  // })
  Vue.component('dropdown', {
    props: ['items', 'value'],
    data: function () {
      return {
        expanded: false,
        // items: [],
        // value: {}
      }
    },
    methods: {
      toggle: function () {
        this.expanded = !this.expanded
      }
    },
    template: `
    <div>
      <div class="selectBox" @click="toggle()">
        <select>
          <option>Select an option</option>
        </select>
        <div class="overSelect"></div>
      </div>
      <div v-if="expanded" class="checkBoxes">
        <label for="one" v-for="item of items">
          <input type="checkbox" v-model="value[item.key]" />{{item.title}}</label>
      </div>
    </div>`
  })

  new Vue({
    el: '#main',
    data: {
      fields: [
        { key: 'ownerType', title: 'Tipo de Titular' },
        { key: 'data', title: 'Dados Coletados' },
        { key: 'dataType', title: 'Tipo de dado', combo: [{ key: 0, title: 'Publico' }, { key: 1, title: 'Sensível' }] },
        { key: 'collectionWay', title: 'Como foi coletado' },
        { key: 'reason', title: 'Objetivo da coleta' },
        { key: 'app', title: 'Aplicação' },
        { key: 'storage', title: 'Armazenamento' },
        {
          key: 'whoHasAccess', title: 'Quem tem acesso?', check: [
            { key: 0, title: 'Titular' },
            { key: 1, title: 'Controlador' },
            { key: 2, title: 'Operador' },
            { key: 3, title: 'Encarregado' }
          ]
        },
        { key: 'userProfile', title: 'Perfil do manipulador' },
        { key: 'userReason', title: 'Motivo do manipulador' },
        { key: 'howHasAccess', title: 'Como tem acesso' },
        // { key: 'manipulador', title: '' },
        // 'motivo'],
      ],
      items: [],
      test: [{ key: 0, title: 'oajsdnfasjd' }]
    },
    methods: {
      addEntry: function () {
        this.items.push({ whoHasAccess: {} })
      },
      generateReport: function () {
        window.localStorage.setItem('items', JSON.stringify(this.items))
        window.localStorage.setItem('fields', JSON.stringify(this.fields))
        const w = window.open('report.html', '_blank')
        // console.log(itemsByCategory(this.items));
      },
      showCheckboxes: function (event, item) {
        var checkboxes = event.target;
        if (checkboxes.style.display === 'none') {
          checkboxes.style.display = "block";
          // item.expanded = true;
        } else {
          checkboxes.style.display = "none";
          // item.expanded = false;
        }
      }
    }
  })
}

function itemsByCategory(items) {
  // const map = {};
  // items.forEach(element => {
  //   map[element.type] = element
  // });
  console.log(JSON.parse(JSON.stringify(items)));
}

var expanded = false;

