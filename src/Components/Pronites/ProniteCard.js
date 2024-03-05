import React,{useEffect} from 'react';

const ProniteCard = ({states,showCard})=> {
    let data_index = (showCard<=2)?(showCard%2):2;
    let {card_num,pos,angl,scal,bgurl,title,text} = states;
    useEffect(()=>{
        console.log(states)
    },[])
    return ( 
             <div className={"card_"+card_num+"_container"}
                style={{
                    zIndex:`${(showCard===card_num)?5:2}`,
                    left:`${pos[data_index]}vw`,
                    transform:`scaleY(${scal[data_index]})`
                    }} >
                <div className={"card"+card_num} 
                  style={{
                    transform:`rotateY(${angl[data_index]}deg)`,
                  }}
                >
                    <div className={"heading"+card_num}>
                            {title}
                    </div>
                    <div className={"country"+card_num}>
                             {text}
                    </div>
                </div>
            </div>
            );
}

export default ProniteCard
