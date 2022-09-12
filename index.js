


const events = document.querySelector('.bgcolor')
const all = document.querySelectorAll('.all')
const icon = document.querySelector('.Icon')
const decode = document.querySelector('.Dcode')
const drift_racing = document.querySelector('.Drift_racing')
const cryto_rush = document.querySelector('.Cryto_rush')
const game_jam = document.querySelector('.Game_jam')
const xxx = document.querySelector('.XXX')
const yyy = document.querySelector('.YYY')
const zzz = document.querySelector('.ZZZ')
const electronica = document.querySelector('.Electronica')
const brain_wiz = document.querySelector('.Brain_wiz')

const icon_title = document.querySelector('.title1')
const decode_title = document.querySelector('.title2')
const drift_racing_title = document.querySelector('.title3')
const cryto_rush_title = document.querySelector('.title4')
const game_jam_title = document.querySelector('.title5')
const xxx_title = document.querySelector('.title6')
const yyy_title = document.querySelector('.title7')
const zzz_title = document.querySelector('.title8')
const electronica_title = document.querySelector('.title9')
const brain_wiz_title = document.querySelector('.title10')
let all_event = {
    decode_var:[0,false],
    icon_var:[0,false],
    drift_racing_var:[0,false],
    cryto_rush_var:[0,false],
    game_jam_var:[0,false],
    xxx_var:[0,false],
    yyy_var:[0,false],
    zzz_var:[0,false],
    electronica_var:[0,false],
    brain_wiz_var:[0,false]
    ,};


all.forEach(et => {
    et.addEventListener('click',()=>{
        if (all_event.icon_var[0]===1){
            icon_title.innerHTML = "<h1><b>Events</b></h1>";
        };
        if (all_event.icon_var[0]===0){
            icon_title.innerHTML = "<h1><b>ICON</b></h1>";
        }
        if (all_event.decode_var[0]===1){
            decode_title.innerHTML = "<h1><b>Events</b></h1>";
        };
        if (all_event.decode_var[0]===0){
            decode_title.innerHTML = '<h1><b>Decode</b></h1>'
        }
        if (all_event.drift_racing_var[0]===1){
            drift_racing_title.innerHTML = "<h1><b>Events</b></h1>";
        };
        if (all_event.drift_racing_var[0]===0){
            drift_racing_title.innerHTML = '<h1><b>Drift&nbsp;Racing</b></h1>'
        }
        if (all_event.cryto_rush_var[0]===1){
            cryto_rush_title.innerHTML = "<h1><b>Events</b></h1>";
        };
        if (all_event.cryto_rush_var[0]===0){
            cryto_rush_title.innerHTML = '<h1><b>Crypto&nbsp;Rush</b></h1>'
        }
        if (all_event.game_jam_var[0]===1){
            game_jam_title.innerHTML = '<h1><b>Events</b></h1>';
        };
        if (all_event.game_jam_var[0]===0){
            game_jam_title.innerHTML = '<h1><b>Game&nbsp;Jam</b></h1>'
        }
        if (all_event.xxx_var[0]===1){
            xxx_title.innerHTML = '<h1><b>Events</b></h1>';
        };
        if (all_event.xxx_var[0]===0){
            xxx_title.innerHTML = '<h1><b>XXX</b></h1>'
        }
        if (all_event.yyy_var[0]===1){
            yyy_title.innerHTML = '<h1><b>Events</b></h1>';
        };
        if (all_event.yyy_var[0]===0){
            yyy_title.innerHTML = '<h1><b>YYY</b></h1>'
        }
        if (all_event.zzz_var[0]===1){
            zzz_title.innerHTML = '<h1><b>Events</b></h1>';
        };
        if (all_event.zzz_var[0]===0){
            zzz_title.innerHTML = '<h1><b>ZZZ</b></h1>'
        }
        if (all_event.electronica_var[0]===1){
            electronica_title.innerHTML = '<h1><b>Events</b></h1>';
        };
        if (all_event.electronica_var[0]===0){
            electronica_title.innerHTML = '<h1><b>Electronica</b></h1>'
        }
        if (all_event.brain_wiz_var[0]===1){
            brain_wiz_title.innerHTML = '<h1><b>Events</b></h1>';
        };
        if (all_event.brain_wiz_var[0]===0){
            brain_wiz_title.innerHTML = '<h1><b>Brain&nbsp;Wiz</b></h1>'
        }
        
    })
})

//##ICON


 
icon_title.addEventListener('click',()=>{

    
    all_event.decode_var[0]=0
    all_event.drift_racing_var[0]=0
    all_event.cryto_rush_var[0]=0
    all_event.game_jam_var[0]=0
    all_event.xxx_var[0]=0
    all_event.yyy_var[0]=0
    all_event.zzz_var[0]=0
    all_event.electronica_var[0]=0
    all_event.brain_wiz_var[0]=0
    if (all_event.icon_var[1]===true){
        icon.style.left ='0vw';
        decode.style.left ='0vw';
        drift_racing.style.left ='0vw';
        cryto_rush.style.left='0vw';
        game_jam.style.left='0vw';
        xxx.style.left='0vw';
        yyy.style.left='0vw';
        zzz.style.left='0vw';
        electronica.style.left='0vw';
        brain_wiz.style.left='0vw';

        all_event.icon_var[1]=false
        all_event.decode_var[1]=false
        all_event.drift_racing_var[1]=false
        all_event.cryto_rush_var[1]=false
        all_event.game_jam_var[1]=false
        all_event.xxx_var[1]=false
        all_event.yyy_var[1]=false
        all_event.zzz_var[1]=false
        all_event.electronica_var[1]=false
        all_event.brain_wiz_var[1]=false

        if (all_event.icon_var[0]===0){
            all_event.icon_var[0]=1;
        }else{
            all_event.icon_var[0]=0;
        }
    }
    else{
        
        
        if (all_event.icon_var[0]===0){
            events.style.left ='-60vw';
            
            all_event.icon_var[0]=1;
        }else{
                
            events.style.left='0vw';
            all_event.icon_var[0]=0;
        }
    }
    
    
})
  
//##DECODE


decode_title.addEventListener('click',()=>{
    // All zero except decode
    all_event.icon_var[0]=0
    all_event.drift_racing_var[0]=0
    all_event.cryto_rush_var[0]=0
    all_event.game_jam_var[0]=0
    all_event.xxx_var[0]=0
    all_event.yyy_var[0]=0
    all_event.zzz_var[0]=0
    all_event.electronica_var[0]=0
    all_event.brain_wiz_var[0]=0
    if (all_event.decode_var[1]===true){
        // all events right to decode including decode 
        decode.style.left ='0vw';
        drift_racing.style.left ='0vw';
        cryto_rush.style.left='0vw';
        game_jam.style.left='0vw';
        xxx.style.left='0vw';
        yyy.style.left='0vw';
        zzz.style.left='0vw';
        electronica.style.left='0vw';
        brain_wiz.style.left='0vw';
        // Which elements remains at left (true)
        all_event.icon_var[1]=true
        all_event.decode_var[1]=false
        all_event.drift_racing_var[1]=false
        all_event.cryto_rush_var[1]=false
        all_event.game_jam_var[1]=false
        all_event.xxx_var[1]=false
        all_event.yyy_var[1]=false
        all_event.zzz_var[1]=false
        all_event.electronica_var[1]=false
        all_event.brain_wiz_var[1]=false
        // To change state since it is clicked
        if (all_event.decode_var[0]===0){
            all_event.decode_var[0]=1;
        }else{
            all_event.decode_var[0]=0;
        }
    }
    else{
        
        
        if (all_event.decode_var[0]===0){
            // all event left to decode
            events.style.left ='-60vw';
            icon.style.left ='-60vw';
            // all event left to decode left=true
            all_event.icon_var[1]=true
            all_event.decode_var[0]=1;
        }else{
            icon.style.left ='0vw';
            events.style.left='0vw';
            all_event.icon_var[1]=false
            all_event.decode_var[0]=0;
        }
    }
    // if (all_event.decode_var[0]===1){
    //     decode_title.innerHTML = 'Events';
        
        
    // };
    // if (all_event.decode_var[0]===0){
    //     decode_title.innerHTML = 'Decode'
    // }
    
})
  

//##DRIFTRACING


drift_racing_title.addEventListener('click',()=>{
    all_event.icon_var[0]=0
    all_event.decode_var[0]=0
    all_event.cryto_rush_var[0]=0
    all_event.game_jam_var[0]=0
    all_event.xxx_var[0]=0
    all_event.yyy_var[0]=0
    all_event.zzz_var[0]=0
    all_event.electronica_var[0]=0
    all_event.brain_wiz_var[0]=0
    if (all_event.drift_racing_var[1]===true){
        
       
        drift_racing.style.left ='0vw';
        cryto_rush.style.left='0vw';
        game_jam.style.left='0vw';
        xxx.style.left='0vw';
        yyy.style.left='0vw';
        zzz.style.left='0vw';
        electronica.style.left='0vw';
        brain_wiz.style.left='0vw';

        all_event.icon_var[1]=true
        all_event.decode_var[1]=true
        all_event.drift_racing_var[1]=false
        all_event.cryto_rush_var[1]=false
        all_event.game_jam_var[1]=false
        all_event.xxx_var[1]=false
        all_event.yyy_var[1]=false
        all_event.zzz_var[1]=false
        all_event.electronica_var[1]=false
        all_event.brain_wiz_var[1]=false
        // To change state since it is clicked
        if (all_event.drift_racing_var[0]===0){
            all_event.drift_racing_var[0]=1;
        }else{
            all_event.drift_racing_var[0]=0;
        }
    }
    else{
        
        
        if (all_event.drift_racing_var[0]===0){
            events.style.left ='-60vw';
            icon.style.left ='-60vw';
            decode.style.left ='-60vw';
            all_event.icon_var[1]=true
            all_event.decode_var[1]=true
            all_event.drift_racing_var[0]=1;
        }else{
            icon.style.left ='0vw';
            events.style.left='0vw';
            decode.style.left ='0vw';
            all_event.icon_var[1]=false
            all_event.decode_var[1]=false
            all_event.drift_racing_var[0]=0;
        }
    }
    
})

//##CRYTORUSH

cryto_rush_title.addEventListener('click',()=>{
    all_event.icon_var[0]=0
    all_event.decode_var[0]=0
    all_event.drift_racing_var[0]=0
    all_event.game_jam_var[0]=0
    all_event.xxx_var[0]=0
    all_event.yyy_var[0]=0
    all_event.zzz_var[0]=0
    all_event.electronica_var[0]=0
    all_event.brain_wiz_var[0]=0
    if (all_event.cryto_rush_var[1]===true){
        
        cryto_rush.style.left='0vw';
        game_jam.style.left='0vw';
        xxx.style.left='0vw';
        yyy.style.left='0vw';
        zzz.style.left='0vw';
        electronica.style.left='0vw';
        brain_wiz.style.left='0vw';
        
        all_event.icon_var[1]=true
        all_event.decode_var[1]=true
        all_event.drift_racing_var[1]=true
        all_event.cryto_rush_var[1]=false
        all_event.game_jam_var[1]=false
        all_event.cryto_rush_var[1]=false
        all_event.xxx_var[1]=false
        all_event.yyy_var[1]=false
        all_event.zzz_var[1]=false
        all_event.electronica_var[1]=false
        all_event.brain_wiz_var[1]=false
        // To change state since it is clicked
        if (all_event.cryto_rush_var[0]===0){
            all_event.cryto_rush_var[0]=1;
        }else{
            all_event.cryto_rush_var[0]=0;
        }
    }
    else{
        
        
        if (all_event.cryto_rush_var[0]===0){
            events.style.left='-60vw';
            icon.style.left ='-60vw';
            decode.style.left ='-60vw';
            drift_racing.style.left ='-60vw';
            all_event.icon_var[1]=true
            all_event.decode_var[1]=true
            all_event.drift_racing_var[1]=true
            
            
            all_event.cryto_rush_var[0]=1;
        }else{
            events.style.left='0vw';
            icon.style.left ='0vw';
            decode.style.left ='0vw';
            drift_racing.style.left ='0vw';
            all_event.icon_var[1]=false
            all_event.decode_var[1]=false
            all_event.drift_racing_var[1]=false
            all_event.cryto_rush_var[0]=0;
        }
    }
    
})


//##GAMEJAM

game_jam_title.addEventListener('click',()=>{
    all_event.icon_var[0]=0
    all_event.decode_var[0]=0
    all_event.drift_racing_var[0]=0
    all_event.cryto_rush_var[0]=0
    all_event.xxx_var[0]=0
    all_event.yyy_var[0]=0
    all_event.zzz_var[0]=0
    all_event.electronica_var[0]=0
    all_event.brain_wiz_var[0]=0
    if (all_event.game_jam_var[1]===true){
        
        game_jam.style.left='0vw';
        xxx.style.left='0vw';
        yyy.style.left='0vw';
        zzz.style.left='0vw';
        electronica.style.left='0vw';
        brain_wiz.style.left='0vw';

        all_event.icon_var[1]=true
        all_event.decode_var[1]=true
        all_event.drift_racing_var[1]=true
        all_event.cryto_rush_var[1]=true
        all_event.game_jam_var[1]=false
        all_event.cryto_rush_var[1]=false
        all_event.xxx_var[1]=false
        all_event.yyy_var[1]=false
        all_event.zzz_var[1]=false
        all_event.electronica_var[1]=false
        all_event.brain_wiz_var[1]=false
        // To change state since it is clicked
        if (all_event.game_jam_var[0]===0){
            all_event.game_jam_var[0]=1;
        }else{
            all_event.game_jam_var[0]=0;
        }
    }
    else{
        
        
        if (all_event.game_jam_var[0]===0){
            events.style.left='-60vw';
            icon.style.left ='-60vw';
            decode.style.left ='-60vw';
            drift_racing.style.left ='-60vw';
            cryto_rush.style.left='-60vw';
           
            all_event.icon_var[1]=true
            all_event.decode_var[1]=true
            all_event.drift_racing_var[1]=true
            all_event.cryto_rush_var[1]=true
            
            all_event.game_jam_var[0]=1;
        }else{
            events.style.left='0vw';
            icon.style.left ='0vw';
            decode.style.left ='0vw';
            drift_racing.style.left ='0vw';
            cryto_rush.style.left='0vw';

            all_event.icon_var[1]=false
            all_event.decode_var[1]=false
            all_event.drift_racing_var[1]=false
            all_event.cryto_rush_var[1]=false
            
            
            all_event.game_jam_var[0]=0;
        }
    }
    
})


//##XXX


xxx_title.addEventListener('click',()=>{
    all_event.icon_var[0]=0
    all_event.decode_var[0]=0
    all_event.drift_racing_var[0]=0
    all_event.cryto_rush_var[0]=0
    all_event.game_jam_var[0]=0
    all_event.yyy_var[0]=0
    all_event.zzz_var[0]=0
    all_event.electronica_var[0]=0
    all_event.brain_wiz_var[0]=0
    if (all_event.xxx_var[1]===true){

        xxx.style.left='0vw';
        yyy.style.left='0vw';
        zzz.style.left='0vw';
        electronica.style.left='0vw';
        brain_wiz.style.left='0vw';

        all_event.icon_var[1]=true
        all_event.decode_var[1]=true
        all_event.drift_racing_var[1]=true
        all_event.cryto_rush_var[1]=true
        all_event.game_jam_var[1]=true
        all_event.xxx_var[1]=false
        all_event.yyy_var[1]=false
        all_event.zzz_var[1]=false
        all_event.electronica_var[1]=false
        all_event.brain_wiz_var[1]=false
        // To change state since it is clicked
        if (all_event.xxx_var[0]===0){
            all_event.xxx_var[0]=1;
        }else{
            all_event.xxx_var[0]=0;
        }
    }
    else{
        
        
        if (all_event.xxx_var[0]===0){
            events.style.left='-60vw';
            icon.style.left ='-60vw';
            decode.style.left ='-60vw';
            drift_racing.style.left ='-60vw';
            cryto_rush.style.left='-60vw';
            game_jam.style.left='-60vw';
            
            all_event.icon_var[1]=true
            all_event.decode_var[1]=true
            all_event.drift_racing_var[1]=true
            all_event.cryto_rush_var[1]=true
            all_event.game_jam_var[1]=true
            

            all_event.xxx_var[0]=1;
        }else{
            events.style.left='0vw';
            icon.style.left ='0vw';
            decode.style.left ='0vw';
            drift_racing.style.left ='0vw';
            cryto_rush.style.left='0vw';
            game_jam.style.left='0vw';
            

            all_event.icon_var[1]=false
            all_event.decode_var[1]=false
            all_event.drift_racing_var[1]=false
            all_event.cryto_rush_var[1]=false
            all_event.game_jam_var[1]=false
           

            all_event.xxx_var[0]=0;
        }
    }
    
})


//##YYY

yyy_title.addEventListener('click',()=>{
    all_event.icon_var[0]=0
    all_event.decode_var[0]=0
    all_event.drift_racing_var[0]=0
    all_event.cryto_rush_var[0]=0
    all_event.game_jam_var[0]=0
    all_event.xxx_var[0]=0
    all_event.zzz_var[0]=0
    all_event.electronica_var[0]=0
    all_event.brain_wiz_var[0]=0
    if (all_event.yyy_var[1]===true){
        
        yyy.style.left='0vw';
        zzz.style.left='0vw';
        electronica.style.left='0vw';
        brain_wiz.style.left='0vw';
        
        all_event.icon_var[1]=true
        all_event.decode_var[1]=true
        all_event.drift_racing_var[1]=true
        all_event.cryto_rush_var[1]=true
        all_event.game_jam_var[1]=true
        all_event.cryto_rush_var[1]=true
        all_event.xxx_var[1]=true
        all_event.yyy_var[1]=false
        all_event.zzz_var[1]=false
        all_event.electronica_var[1]=false
        all_event.brain_wiz_var[1]=false
        // To change state since it is clicked
        if (all_event.yyy_var[0]===0){
            all_event.yyy_var[0]=1;
        }else{
            all_event.yyy_var[0]=0;
        }
    }
    else{
        
        
        if (all_event.yyy_var[0]===0){
            events.style.left='-60vw';
            icon.style.left ='-60vw';
            decode.style.left ='-60vw';
            drift_racing.style.left ='-60vw';
            cryto_rush.style.left='-60vw';
            game_jam.style.left='-60vw';
            xxx.style.left='-60vw';
            
            all_event.icon_var[1]=true
            all_event.decode_var[1]=true
            all_event.drift_racing_var[1]=true
            all_event.cryto_rush_var[1]=true
            all_event.game_jam_var[1]=true
            all_event.xxx_var[1]=true

            all_event.yyy_var[0]=1;
        }else{
            events.style.left='0vw';
            icon.style.left ='0vw';
            decode.style.left ='0vw';
            drift_racing.style.left ='0vw';
            cryto_rush.style.left='0vw';
            game_jam.style.left='0vw';
            xxx.style.left='0vw';
            all_event.icon_var[1]=false
            all_event.decode_var[1]=false
            all_event.drift_racing_var[1]=false
            all_event.cryto_rush_var[1]=false
            all_event.game_jam_var[1]=false
            all_event.xxx_var[1]=false

            all_event.yyy_var[0]=0;
        }
    }
    
})


//##ZZZ


zzz_title.addEventListener('click',()=>{
    all_event.icon_var[0]=0
    all_event.decode_var[0]=0
    all_event.drift_racing_var[0]=0
    all_event.cryto_rush_var[0]=0
    all_event.game_jam_var[0]=0
    all_event.yyy_var[0]=0
    all_event.xxx_var[0]=0
    all_event.electronica_var[0]=0
    all_event.brain_wiz_var[0]=0
    if (all_event.zzz_var[1]===true){
        
        zzz.style.left='0vw';
        electronica.style.left='0vw';
        brain_wiz.style.left='0vw';
        
        all_event.icon_var[1]=true
        all_event.decode_var[1]=true
        all_event.drift_racing_var[1]=true
        all_event.cryto_rush_var[1]=true
        all_event.game_jam_var[1]=true
        all_event.xxx_var[1]=true
        all_event.yyy_var[1]=true
        all_event.zzz_var[1]=false
        all_event.electronica_var[1]=false
        all_event.brain_wiz_var[1]=false
        // To change state since it is clicked
        if (all_event.zzz_var[0]===0){
            all_event.zzz_var[0]=1;
        }else{
            all_event.zzz_var[0]=0;
        }
    }
    else{
        
        
        if (all_event.zzz_var[0]===0){
            events.style.left='-60vw';
            icon.style.left ='-60vw';
            decode.style.left ='-60vw';
            drift_racing.style.left ='-60vw';
            cryto_rush.style.left='-60vw';
            game_jam.style.left='-60vw';
            xxx.style.left='-60vw';
            yyy.style.left='-60vw';
            
            all_event.icon_var[1]=true
            all_event.decode_var[1]=true
            all_event.drift_racing_var[1]=true
            all_event.cryto_rush_var[1]=true
            all_event.game_jam_var[1]=true
            all_event.xxx_var[1]=true
            all_event.yyy_var[1]=true

            all_event.zzz_var[0]=1;
        }else{
            events.style.left='0vw';
            icon.style.left ='0vw';
            decode.style.left ='0vw';
            drift_racing.style.left ='0vw';
            cryto_rush.style.left='0vw';
            game_jam.style.left='0vw';
            xxx.style.left='0vw';
            yyy.style.left='0vw';
            
            all_event.icon_var[1]=false
            all_event.decode_var[1]=false
            all_event.drift_racing_var[1]=false
            all_event.cryto_rush_var[1]=false
            all_event.game_jam_var[1]=false
            all_event.xxx_var[1]=false
            all_event.yyy_var[1]=false

            all_event.zzz_var[0]=0;
        }
    }
    
})


//##ELECTRONICA


electronica_title.addEventListener('click',()=>{
    all_event.icon_var[0]=0
    all_event.decode_var[0]=0
    all_event.drift_racing_var[0]=0
    all_event.cryto_rush_var[0]=0
    all_event.game_jam_var[0]=0
    all_event.yyy_var[0]=0
    all_event.xxx_var[0]=0
    all_event.zzz_var[0]=0
    all_event.brain_wiz_var[0]=0
    if (all_event.electronica_var[1]===true){
        
        electronica.style.left='0vw';
        brain_wiz.style.left='0vw';
        
        all_event.icon_var[1]=true
        all_event.decode_var[1]=true
        all_event.drift_racing_var[1]=true
        all_event.cryto_rush_var[1]=true
        all_event.game_jam_var[1]=true
        all_event.xxx_var[1]=true
        all_event.yyy_var[1]=true
        all_event.zzz_var[1]=true
        all_event.electronica_var[1]=false
        all_event.brain_wiz_var[1]=false
        // To change state since it is clicked
        if (all_event.electronica_var[0]===0){
            all_event.electronica_var[0]=1;
        }else{
            all_event.electronica_var[0]=0;
        }
    }
    else{
        
        
        if (all_event.electronica_var[0]===0){
            events.style.left='-60vw';
            icon.style.left ='-60vw';
            decode.style.left ='-60vw';
            drift_racing.style.left ='-60vw';
            cryto_rush.style.left='-60vw';
            game_jam.style.left='-60vw';
            xxx.style.left='-60vw';
            yyy.style.left='-60vw';
            zzz.style.left='-60vw';

            all_event.icon_var[1]=true
            all_event.decode_var[1]=true
            all_event.drift_racing_var[1]=true
            all_event.cryto_rush_var[1]=true
            all_event.game_jam_var[1]=true
            all_event.xxx_var[1]=true
            all_event.yyy_var[1]=true
            all_event.zzz_var[1]=true

            all_event.electronica_var[0]=1;
        }else{
            events.style.left='0vw';
            icon.style.left ='0vw';
            decode.style.left ='0vw';
            drift_racing.style.left ='0vw';
            cryto_rush.style.left='0vw';
            game_jam.style.left='0vw';
            xxx.style.left='0vw';
            yyy.style.left='0vw';
            zzz.style.left='0vw';
            
            all_event.icon_var[1]=false
            all_event.decode_var[1]=false
            all_event.drift_racing_var[1]=false
            all_event.cryto_rush_var[1]=false
            all_event.game_jam_var[1]=false
            all_event.xxx_var[1]=false
            all_event.yyy_var[1]=false
            all_event.zzz_var[1]=false

            all_event.electronica_var[0]=0;
        }
    }
    
})


//##BRAINWIZ


brain_wiz_title.addEventListener('click',()=>{
    all_event.icon_var[0]=0
    all_event.decode_var[0]=0
    all_event.drift_racing_var[0]=0
    all_event.cryto_rush_var[0]=0
    all_event.game_jam_var[0]=0
    all_event.yyy_var[0]=0
    all_event.xxx_var[0]=0
    all_event.electronica_var[0]=0
    all_event.zzz_var[0]=0
    if (all_event.brain_wiz_var[1]===true){
        
        brain_wiz.style.left='0vw';
        
        all_event.icon_var[1]=true
        all_event.decode_var[1]=true
        all_event.drift_racing_var[1]=true
        all_event.cryto_rush_var[1]=true
        all_event.game_jam_var[1]=true
        all_event.xxx_var[1]=true
        all_event.yyy_var[1]=true
        all_event.zzz_var[1]=true
        all_event.electronica_var[1]=true
        all_event.brain_wiz_var[1]=false

        // To change state since it is clicked
        if (all_event.brain_wiz_var[0]===0){
            all_event.brain_wiz_var[0]=1;
        }else{
            all_event.brain_wiz_var[0]=0;
        }
    }
    else{
        
        
        if (all_event.brain_wiz_var[0]===0){
            events.style.left='-60vw';
            icon.style.left ='-60vw';
            decode.style.left ='-60vw';
            drift_racing.style.left ='-60vw';
            cryto_rush.style.left='-60vw';
            game_jam.style.left='-60vw';
            xxx.style.left='-60vw';
            yyy.style.left='-60vw';
            zzz.style.left='-60vw';
            electronica.style.left='-60vw';
            
            all_event.icon_var[1]=true
            all_event.decode_var[1]=true
            all_event.drift_racing_var[1]=true
            all_event.cryto_rush_var[1]=true
            all_event.game_jam_var[1]=true
            all_event.xxx_var[1]=true
            all_event.yyy_var[1]=true
            all_event.zzz_var[1]=true
            all_event.electronica_var[1]=true
            
            all_event.brain_wiz_var[0]=1;
        }else{
            events.style.left='0vw';
            icon.style.left ='0vw';
            decode.style.left ='0vw';
            drift_racing.style.left ='0vw';
            cryto_rush.style.left='0vw';
            game_jam.style.left='0vw';
            xxx.style.left='0vw';
            yyy.style.left='0vw';
            zzz.style.left='0vw';
            electronica.style.left='0vw';

            all_event.icon_var[1]=false
            all_event.decode_var[1]=false
            all_event.drift_racing_var[1]=false
            all_event.cryto_rush_var[1]=false
            all_event.game_jam_var[1]=false
            all_event.xxx_var[1]=false
            all_event.yyy_var[1]=false
            all_event.zzz_var[1]=false
            all_event.electronica_var[1]=false

            all_event.brain_wiz_var[0]=0;
        }
    }
    
})



  // for(let i=1 ;i<=10;i++){
//     const element = document.querySelector
// }
// const decode = document.querySelector('.Dcode')
// const drift_racing = document.querySelector('.Drift_racing')
// const cryto_rush = document.querySelector('.Cryto_rush')
// const game_jam = document.querySelector('.Game_jam')
// const xxx = document.querySelector('.XXX')
// const yyy = document.querySelector('.YYY')
// const zzz = document.querySelector('.ZZZ')
// const electronica = document.querySelector('.Electronica')
// const brain_wiz = document.querySelector('.Brain_wiz')


// function eve_call(){
//     if (events.style.left ==='0vw'){
//         drift_racing_var = 0;
//         decode_var = 0;
//         icon_var = 0;
//         drift_racing_left = false;
//         decode_left = false;
//         icon_left = false;
//     }

// }

// const icon = document.querySelector('.Icon')
// const events = document.querySelector('.Event')


// //###ICON


// let icon_left = false;
// let icon_var = 0;
// icon.addEventListener('click',()=>{
    
    
    
//     if (icon_left===true){

//         icon.style.left = '0vw';
//         drift_racing.style.left = '0vw';
//         cryto_rush.style.left = '0vw';
//        decode.style.left = '0vw';
//         decode_var=0;
//         drift_racing_var=0;
//         icon_left = false;
//         if (icon_var===0){
//             icon_var++
//            }
        
//     }
//     else{
//         if(icon_var===0){ 
//             events.style.left ='-60vw' ;
//             icon_var++
            
//     }
//         else{
//             events.style.left = '0vw';
//             icon_var--
//         }
//     }
//     eve_call()
    
// })

// //###DECODE



// let decode_left = false;
// let decode_var = 0;
// decode.addEventListener('click',()=>{
//     // console.log(decode_var)
//     //    console.log(decode_left)
//     //    console.log(icon_left)
//     //    console.log(icon_var)
    
//     // eve_call()
//     // console.log(decode_var)
//     if (decode_left===true){
        
//         drift_racing.style.left = '0vw';
//         cryto_rush.style.left = '0vw';
//        decode.style.left = '0vw';
//        drift_racing_var=0;
//        decode_left = false;
//        if (decode_var===0){
//         decode_var++
//        }
       
       
//     }
//     else{
        
//         if(decode_var===0)
//        { icon.style.left = '-60vw';
//         events.style.left ='-60vw' ;
//         icon_left = true;
        
//         decode_var++}

//         else{
//             icon.style.left = '0vw';
//             events.style.left = '0vw';
//             icon_left = true;
//             decode_var--
//         }
//     }
//     // console.log(decode_var)
//     eve_call()
// })


// //###DRIFT RACING

// let drift_racing_left = false;
// let drift_racing_var = 0;
// drift_racing.addEventListener('click',()=>{
    
//     // eve_call()
    
//     if (drift_racing_left==true){
//         cryto_rush.style.left = '0vw';
//         drift_racing_left=false;
//         if (drift_racing_var===0){
//             drift_racing_var++
//            }
//     }

//     else{
//         if(drift_racing_var===0){  
//             eve= false
//             icon.style.left = '-60vw';
//             decode.style.left = '-60vw';
//             events.style.left ='-60vw' ;
//             icon_left = true;
//             decode_left = true;
//             drift_racing_var++
//         }
//         else{
//             icon.style.left = '0vw';
//             decode.style.left = '0vw';
//             events.style.left = '0vw';
//             icon_left = true;
//             decode_left = true;
//             drift_racing_var--
//         }
//     }
//     eve_call()
    
// })


// let cryto_rush_left = false;
// let cryto_rush_var = 0;
// cryto_rush.addEventListener('click',()=>{
//     if(cryto_rush_var===0)
//        {  icon.style.left = '-60vw';
//        decode.style.left = '-60vw';
//        drift_racing.style.left = '-60vw';
//         events.style.left ='-60vw' ;
//         cryto_rush_var++}
//     else{
//         icon.style.left = '0vw';
//         drift_racing.style.left = '0vw';
//        decode.style.left = '0vw';
//         events.style.left = '0vw';
//         cryto_rush_var--
//     }
// })

// let game_jam_left = false;
// let game_jam_var = 0;
// game_jam.addEventListener('click',()=>{
//     if(game_jam_var===0)
//        {  icon.style.left = '-60vw';
//        decode.style.left = '-60vw';
//        cryto_rush.style.left = '-60vw';
//        drift_racing.style.left = '-60vw';
//         events.style.left ='-60vw' ;
//         game_jam_var++}
//     else{
//         icon.style.left = '0vw';
//         drift_racing.style.left = '0vw';
//         cryto_rush.style.left = '0vw';
//        decode.style.left = '0vw';
//         events.style.left = '0vw';
//         game_jam_var--
//     }
// })




