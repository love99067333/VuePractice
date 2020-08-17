Vue.component('cat-list', {
    props:['cats'],
    template:
        `<ul>
        <li v-for="cat in cats">{{cat.name}}</li>
        </ul>
        `
})
app= new Vue({
    el: '#root',
    component: ['cat-list'],
    data: {
        // cats: [
        //     'A'
        //     , 'B'
        //     , 'C'
        //     , 'D'

        // ]
        cats: [
            { name: 'A' },
            { name: 'B' },
            { name: 'C' },
            { name: 'D' },

        ],
        newCat: ''
    },
    methods: {
        addKitty: function () {
            // return this.cats.push({name:this.newCat})
            this.cats.push({ name: this.newCat })
            this.newCat = ""
        },

    },
    filters: {
        capitalize: function (value) {
            return value.toUpperCase()
        },
        test: function (value) {
            return value + "test"
        }

    },
    computed: {
        kittyName: function () {
            if (this.newCat.length > 1) {
                return this.newCat + 'y'
            }
        }
    },
    created: function(){
        console.log('Created')
    },
    mounted: function(){
        console.log('Mounted')
    },
    updated: function(){
        console.log('Updated')
    },
    destroyed: function(){
        console.log('Destroyed')
    },
})

// setTimeout(function () {
//     app.$destroy();

//   },5000)