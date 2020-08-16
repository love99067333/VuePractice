new Vue({
    el: '#root',
    data: {
        // cats: [
        //     'A'
        //     , 'B'
        //     , 'C'
        //     , 'D'

        // ]
        cats: [
            {name:'A'},
            {name:'B'},
            {name:'C'},
            {name:'D'},

        ],
        newCat:''
    },
    methods:{
        addKitty:function(){
            // return this.cats.push({name:this.newCat})
            this.cats.push({name:this.newCat})
            this.newCat=""
        }
    },
    filters:{
        capitalize:function(value){
            return value.toUpperCase()
        },
        test:function(value){
            return value + "test"         }

    }
})