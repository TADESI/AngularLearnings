import { Component, effect, signal, computed, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Profile } from './profile/profile';

@Component({
  imports: [RouterOutlet,Profile],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  //template:`<h1>inline</h1>`
})
export class App {
  protected readonly title = signal('angularLearnings');
  // name="siddhant";
  // age=20;
  // getCalc(a:number,b:number){
  //   return(a+b);
  // }
  // callMe(){
  //   alert("Hello World from!")
  // // }

  // count=0;
  // counter(action:string){
  //   if (action == 'minus') {
  //     this.count > 0 && this.count--;
  //   } else {
  //     this.count++;
  //   }
  //   this.showUserName();//calling one function in another
  // }
  // showUserName(){
  //   alert("hello")
  // }
  // handleEvent(event:any){
  //   console.log(event.target.value);
  // }
  // handleEvent1(eventName:string){
  //   console.log(eventName);
  // }

  // data=20
  // something:number| boolean | null | undefined | string // => is similar to something:any
  // updateData(){
  //   this.data=12
  // }
  // editSomething(){
  //   this.something="siddhant";
  // }

  //   data:number=20;
  //   updateData(val:number,name:string){
  //     this.data=val;
  //     console.log(name);
  //     console.log(this.sum(10,20));
  //   }
  //   sum(a:number,b:number):number{
  //     return a + b;
  //   }
  //   handleEvent2(event:PointerEvent | Event |MouseEvent){
  //     console.log(event);
  //   }

  // btnDisable=true;
  // inputReadOnly=true;
  // url="https://search.brave.com/images?q=image"
  // toggle(){
  //   this.btnDisable = !this.btnDisable; //Many times boolean doesn't work that's why use property binding, generally try to use property binding with properties
  // }

  // data=10
  // count=signal(0)
  // constructor() {
  //   effect(()=>{
  //     console.log("this is",this.data);
  //     console.log("this is count",this.count());
  //     if(this.count()==10){
  //       this.count.set(0)
  //     }
  //     }
  //   )
  // }
  //     updateData(){
  //       this.data++;
  //     }
  //     updateCount(){
  //     this.count.set(this.count()+1)
  // }

  // height=100;
  // width=20;
  // area=this.height*this.width;
  // handleHeight(){
  //   this.height=this.height+10;
  //   this.area=this.height*this.width; //here we need to write the same variable twice
  // }

  // computed signal syntax
  //  height=signal(100);
  //  width=signal(20);
  //  area=computed(()=>this.height()*this.width());
  //  constructor(){
  //    effect(()=>{
  //      console.log("area is",this.area())
  //    })
  //  }
  //  handleHeight(){
  //    this.height.set(this.height()+10);
  //  }

  // speed=signal(0)
  // color="black"
  // fruit=signal("apple");
  // constructor(){
  //   effect(()=>{
  //     if(this.speed()>0 && this.speed()<80){
  //       this.color='green'
  //     }
  //     if(this.speed()>80 && this.speed()<120){
  //       this.color='yellow'
  //     }
  //     if (this.speed() >= 120) {
  //       this.color = 'red';
  //     }
  //     console.log("speed:",this.speed())
  //   })
  // }
  // increaseSpeed(){
  //   this.speed.set(this.speed()+10);
  // }
  // changeFruit(){
  //   this.fruit.set('banana')
  // }
  data:WritableSignal<number | boolean | string>=signal<number | boolean |string>("sid")
  users:WritableSignal<string[]>=signal(["sid","kun","praj"])
  speed=computed<number>(()=>90)
  handleData(){
    this.data.set(true)
    this.users.update((item)=>[...item,"lee"])
    console.log(this.users())
  }
}
