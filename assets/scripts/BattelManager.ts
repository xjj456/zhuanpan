
import { _decorator, Component, Node, random, find, Sprite, tween, Quat, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = BattelManager
 * DateTime = Fri Jul 07 2023 19:25:06 GMT+0800 (中国标准时间)
 * Author = 杰哥真好
 * FileBasename = BattelManager.ts
 * FileBasenameNoExtension = BattelManager
 * URL = db://assets/scripts/BattelManager.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
 *
 */

@ccclass('BattelManager')
export class BattelManager extends Component {

    private arr: any = null
    private result:string=''
    private isclick:boolean=false
    private curruent=[]
    onLoad() {
        this.arr = {
            "谢谢参与": [0, 45,89],
            "一等奖": [45, 90,0.5],
            "二等奖": [90, 135,1],
            "三等奖": [135, 180,1],
            "特等奖": [180, 225,0.5],
            "鼓励奖": [225, 270,4],
            "四等奖": [270, 315,2],
            "五等奖": [315, 360,2],
        }
        this.isclick=false
        this.curruent=[0,45]
       
    }
    randomRust(){
      const num=Math.floor(Math.random()*100)
      
      if(num>=0&&num<=89){
        this.result="谢谢参与"
      }else if(num>89&&num<=93){
        this.result="鼓励奖"
      }else if(num>93&&num<=96){
        this.result="五等奖"
      }
      else if(num>96&&num<=98){
        this.result="四等奖"
      }
      else if(num>98&&num<=99){
        this.result="三等奖"
      }
      else if(num>99.0&&num<=99.5){
        this.result="二等奖"
      }
      else if(num>99.5&&num<=99.9){
        this.result="一等奖"
      }else if(num>99.9999&&num<=100){
        this.result="特等奖"
      }
      console.log(this.result);

      return this.result
    }

    Rotate(){

     
      if(this.isclick===false){
        this.isclick=true
      
        const angle=this.arr[this.randomRust()]
        console.log(angle);

       
        
               
        const node= find("Canvas/bg/zhuanpan")
     
        node.angle=0
        tween().target(node)
        .by(8,{
          angle:360*10+45*(angle[1]/45-1)
        },{
          easing:'sineInOut'
        }).call(()=>{
        
          this.isclick=false
        }).start()    
      }
      
    }
    

    start() {
        // [3]
    }

}


