 export const fadeIn = (direction,delay)=>{
    return {
        hidden :{
            y : direction === "up" ? 40 : direction === "dowen" ? -40 : 0,
            x : direction === "left" ? 40 : direction === "right" ? -40 : 0 ,
            opacity  : 0,
        },
        show : {
            y : 0,
            x : 0,
            opacity :1,
            transition : {
                type : "tween",
                duration : 1.3,
                delay : delay,
                ease : [0.55 , 0.55 , 0.55, 0.75],
            }
        }
    }

}