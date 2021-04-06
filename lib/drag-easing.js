/* 说明 V 1.0.0
* 该组件提供了移动端的拖拽缓动方法。
* API：https://github.com/ningbonb/drag-easing
* npm：https://www.npmjs.com/package/drag-easing
* */

let saidHello = false;
const VERSION = '1.0.0';
const defaultProps = {
    element: window.document,
    elementOutsideRemoveEvent: true,
    windowOutsideRemoveEvent: true,
    minX: null,
    maxX: null,
    minY: null,
    maxY: null,
    easingRatio: 0.1,
    onDragging: ()=>{},
}

export default class DragEasing{
    constructor(props) {
        this.props = Object.assign({}, defaultProps, props);
        this.element = this.props.element instanceof HTMLElement ? this.props.element : document.querySelector(this.props.element);
        this.initX = 0;
        this.initY = 0;
        this.touchFlag = false;
        this.targetX = 0;
        this.targetY = 0;
        this.changeX = 0;
        this.changeY = 0;
        this.timer = null;
        this.init();
        this.sayHello();
    }
    init(){
        this.touchAnimate();
        this.bindEvent();
    }
    bindEvent(){
        this.element.addEventListener('touchstart',(e)=>{
            this.touchFlag = true;
            this.initX = e.touches[0].clientX;
            this.initY = e.touches[0].clientY;
        });
        this.element.addEventListener('touchmove',(e)=>{
            if(!this.touchFlag) return
            const { clientX: moveX, clientY: moveY } = e.touches[0];
            if(this.props.windowOutsideRemoveEvent && (moveX < 0 || moveX > window.innerWidth || moveY < 0 || moveY > window.innerHeight)){
                this.touchFlag = false;
                return;
            }
            if(this.props.elementOutsideRemoveEvent){
                const {left, right, top, bottom} = this.element.getClientRects()[0];
                if(moveX < left || moveX > right || moveY < top || moveY > bottom){
                    this.touchFlag = false;
                    return;
                }
            }
            this.targetX += (moveX - this.initX);
            this.targetY += (moveY - this.initY);
            if(this.props.maxY !== null && this.targetY >= this.props.maxY){
                this.targetY = this.props.maxY;
            }
            if(this.props.minY !== null && this.targetY <= this.props.minY){
                this.targetY = this.props.minY;
            }
            if(this.props.maxX !== null && this.targetX >= this.props.maxX){
                this.targetX = this.props.maxX;
            }
            if(this.props.minX !== null && this.targetX <= this.props.minX){
                this.targetX = this.props.minX;
            }
            this.initX = moveX;
            this.initY = moveY;
        });
        this.element.addEventListener('touchend',(e)=>{
            this.touchFlag = false;
        });
    }
    touchAnimate(){
        this.timer = requestAnimationFrame(()=>{
            this.touchAnimate();
        });
        this.changeX += (this.targetX - this.changeX) * this.props.easingRatio;
        this.changeY += (this.targetY - this.changeY) * this.props.easingRatio;
        this.draggingCtrl();
    }
    destroy(){
        window.cancelAnimationFrame(this.timer);
    }
    draggingCtrl(){
        const e = {
            changeX: this.changeX,
            changeY: this.changeY,
            touchFlag: this.touchFlag,
        }
        this.props.onDragging(e);
    }
    sayHello() {
        if (saidHello) return;
        if (window.console) {
            window.console.log("DragEasing " + VERSION + " - https://github.com/ningbonb/drag-easing");
        }
        saidHello = true;
    }
}
