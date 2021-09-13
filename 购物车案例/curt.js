const vm = new Vue({
    el:'#app',
    
    data:{
      books:[{id:1,date:'2006-9',name:'unix编程艺术',price:108,counter:0},
            {id:2,date:'2006-2',name:'java',price:100,counter:0},
            {id:3,date:'2007-9',name:'Sql编程艺术',price:200,counter:0},
            {id:4,date:'2008-3',name:'linux',price:30,counter:0},
            {id:5,date:'2005-4',name:'云开发',price:60,counter:0},
            {id:6,date:'2003-2',name:'jvm',price:70,counter:0}]
      
    },
    computed:{
        totalPrice(){
            let price = 0
            console.log(this.books);
            // for(let  book of this.books)
            // { 
            //     price += book.price
               
            // }
             for(let  idx in this.books)
            { 
               
                price += this.books[idx].price*this.books[idx].counter
               
            }
            return price
        }
    },
    methods:{
        add(item){
            item.counter++
            console.log( item.counter);
        },
        des(item){
            item.counter--
            console.log( item.counter);
        },
        remove(idx){
            this.books.splice(idx,1)
        }
    },
    filters:{//过滤器
        showPrice(p){
          return "￥" + p.toFixed(2)
        }
    }
    
 

} )