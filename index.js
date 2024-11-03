const app = new PIXI.Application();
await app.init({resizeTo: window,antialias:false,useContextAlpha:false});

document.body.appendChild(app.canvas);

function Sprite_Auto(sprite1){
    sprite1.width=sprite1.width*(app.screen.width/720)
    sprite1.height=sprite1.height*(app.screen.height/1280)
}

//stars
await PIXI.Assets.load('./img/star_shine.png');
await PIXI.Assets.load('./img/star.png');



//back
await PIXI.Assets.load('./img/background.png');
let sprite_back = PIXI.Sprite.from('./img/background.png');
Sprite_Auto(sprite_back)
app.stage.addChild(sprite_back);

//blood_effect
await PIXI.Assets.load('./img/blood_effect.png');
let sprite_blood_effect = PIXI.Sprite.from('./img/blood_effect.png');
Sprite_Auto(sprite_blood_effect)

//snow_effect
await PIXI.Assets.load('./img/snow_effect.png');
let sprite_snow_effect = PIXI.Sprite.from('./img/snow_effect.png');
Sprite_Auto(sprite_snow_effect)

//shiny_aroung_keys
await PIXI.Assets.load('./img/shiny_key.png');
let sprite_shiny_key = PIXI.Sprite.from('./img/shiny_key.png');
Sprite_Auto(sprite_shiny_key)
app.stage.addChild(sprite_shiny_key);

//borders
await PIXI.Assets.load('./img/borders.png');
let sprite_borders = PIXI.Sprite.from('./img/borders.png');
Sprite_Auto(sprite_borders)
app.stage.addChild(sprite_borders);

//keys
await PIXI.Assets.load('./img/key_red0.png');
await PIXI.Assets.load('./img/key_green0.png');
await PIXI.Assets.load('./img/key_blue0.png');
await PIXI.Assets.load('./img/key_yellow0.png');

await PIXI.Assets.load('./img/key_red1.png');
await PIXI.Assets.load('./img/key_green1.png');
await PIXI.Assets.load('./img/key_blue1.png');
await PIXI.Assets.load('./img/key_yellow1.png');

//multi
await PIXI.Assets.load('./img/multi_pink.png');
let sprite_multi = PIXI.Sprite.from('./img/multi_pink.png');
Sprite_Auto(sprite_multi)
let sprite_key_red0 = PIXI.Sprite.from('./img/key_red0.png');
let sprite_key_red1 = PIXI.Sprite.from('./img/key_red1.png');
Sprite_Auto(sprite_key_red0)
Sprite_Auto(sprite_key_red1)
sprite_key_red0.x=40*(app.screen.width/720)+sprite_key_red0.width*3
sprite_key_red0.y=app.screen.height-sprite_key_red0.height
sprite_key_red1.x=40*(app.screen.width/720)+sprite_key_red1.width*3
sprite_key_red1.y=app.screen.height-sprite_key_red1.height
app.stage.addChild(sprite_key_red0);

let sprite_key_green0 = PIXI.Sprite.from('./img/key_green0.png');
let sprite_key_green1 = PIXI.Sprite.from('./img/key_green1.png');
Sprite_Auto(sprite_key_green0)
Sprite_Auto(sprite_key_green1)
sprite_key_green0.x=40*(app.screen.width/720)+sprite_key_green0.width*2
sprite_key_green0.y=app.screen.height-sprite_key_green0.height
sprite_key_green1.x=40*(app.screen.width/720)+sprite_key_green1.width*2
sprite_key_green1.y=app.screen.height-sprite_key_green1.height
app.stage.addChild(sprite_key_green0);

let sprite_key_blue0 = PIXI.Sprite.from('./img/key_blue0.png');
let sprite_key_blue1 = PIXI.Sprite.from('./img/key_blue1.png');
Sprite_Auto(sprite_key_blue0)
Sprite_Auto(sprite_key_blue1)
sprite_key_blue0.x=40*(app.screen.width/720)+sprite_key_blue0.width*1
sprite_key_blue0.y=app.screen.height-sprite_key_blue0.height
sprite_key_blue1.x=40*(app.screen.width/720)+sprite_key_blue1.width*1
sprite_key_blue1.y=app.screen.height-sprite_key_blue1.height
app.stage.addChild(sprite_key_blue0);

let sprite_key_yellow0 = PIXI.Sprite.from('./img/key_yellow0.png');
let sprite_key_yellow1 = PIXI.Sprite.from('./img/key_yellow1.png');
Sprite_Auto(sprite_key_yellow0)
Sprite_Auto(sprite_key_yellow1)
sprite_key_yellow0.x=40*(app.screen.width/720)+sprite_key_yellow0.width*0
sprite_key_yellow0.y=app.screen.height-sprite_key_yellow0.height
sprite_key_yellow1.x=40*(app.screen.width/720)+sprite_key_yellow1.width*0
sprite_key_yellow1.y=app.screen.height-sprite_key_yellow1.height
app.stage.addChild(sprite_key_yellow0);



let tap_snow=0
let snow_timer=0

let tap_red=0
let tap_red_timer=0

let tap_blue=0
let tap_blue_timer=0

let tap_green=0
let tap_green_timer=0

let tap_yellow=0
let tap_yellow_timer=0

const tap_timer=5

function check_red(){
    if (tap_red==0) {
        tap_red=1
    }
    
    for (let i=0;i<red_keys.length;i++){
        if (red_keys[i]){
            if (red_keys[i].y+red_keys[i].height>=app.screen.height-sprite_key_red0.height){
                app.stage.removeChild(red_keys[i]);
                delete red_keys[i]
                my_score+=10;
                }
        }
        
    } 
    for (let i=0;i<stars_keys.length;i++){
        if (stars_keys[i]){
                if ((stars_keys[i].y+stars_keys[i].height>=app.screen.height-sprite_key_red0.height) & (stars_keys[i].x>=sprite_key_red0.x) & (stars_keys[i].x<=sprite_key_red0.x+sprite_key_red0.width)){
                    app.stage.removeChild(stars_keys[i]);
                    app.stage.removeChild(stars_shine_keys[i]);
                    delete stars_keys[i]
                    delete stars_shine_keys[i]
                    my_stars+=1
                    my_score+=100
                    }
            }
        }
    for (let i=0;i<bombs_keys.length;i++){
        if (bombs_keys[i]){
            if ((bombs_keys[i].y+bombs_keys[i].height>=app.screen.height-sprite_key_red0.height) & (bombs_keys[i].x>=sprite_key_red0.x) & (bombs_keys[i].x<=sprite_key_red0.x+sprite_key_red0.width)){
                app.stage.removeChild(bombs_keys[i]);
                delete bombs_keys[i]
                if (key_blood!=1){
                    app.stage.addChild(sprite_blood_effect) 
                }
                my_hp-=1
                key_blood=1
                
        }
        }
            
    }

    for (let i=0;i<snow_keys.length;i++){
        if (snow_keys[i]){
                if ((snow_keys[i].y+snow_keys[i].height>=app.screen.height-sprite_key_red0.height) & (snow_keys[i].x>=sprite_key_red0.x) & (snow_keys[i].x<=sprite_key_red0.x+sprite_key_red0.width)){
                    app.stage.removeChild(snow_keys[i]);
                    delete snow_keys[i]
                    if (tap_snow==0){
                        speed_bomb/=2
                        speed_notes/=2
                        speed_star/=2
                        speed_snow/=2
                        tap_snow=1
                        snow_timer=0
                         
                    
                    }               
                    else {
                        snow_timer=0
                    }
                }
            }
        }

    app.stage.removeChild(sprite_key_red1);
    app.stage.addChild(sprite_key_red0);
}
function check_green(){
    if (tap_green==0) {
        tap_green=1
    }

    for (let i=0;i<green_keys.length;i++){
        if (green_keys[i]){
            if (green_keys[i].y+green_keys[i].height>=app.screen.height-sprite_key_green0.height){
                app.stage.removeChild(green_keys[i]);
                delete green_keys[i]
                my_score+=10;
                }
        }
        
    } 
    for (let i=0;i<stars_keys.length;i++){
        if (stars_keys[i]){
                if ((stars_keys[i].y+stars_keys[i].height>=app.screen.height-sprite_key_green0.height) & (stars_keys[i].x>=sprite_key_green0.x) & (stars_keys[i].x<=sprite_key_green0.x+sprite_key_green0.width)){
                    app.stage.removeChild(stars_keys[i]);
                    app.stage.removeChild(stars_shine_keys[i]);
                    delete stars_keys[i]
                    delete stars_shine_keys[i]
                    my_stars+=1
                    my_score+=100
                    }
            }
        }
    for (let i=0;i<bombs_keys.length;i++){
        if (bombs_keys[i]){
            if ((bombs_keys[i].y+bombs_keys[i].height>=app.screen.height-sprite_key_green0.height) & (bombs_keys[i].x>=sprite_key_green0.x) & (bombs_keys[i].x<=sprite_key_green0.x+sprite_key_green0.width)){
                        app.stage.removeChild(bombs_keys[i]);
                        delete bombs_keys[i]
                        if (key_blood!=1){
                            app.stage.addChild(sprite_blood_effect) 
                        }
                        my_hp-=1
                        key_blood=1
                        }
                    }
            
    }

    for (let i=0;i<snow_keys.length;i++){
        if (snow_keys[i]){
                if ((snow_keys[i].y+snow_keys[i].height>=app.screen.height-sprite_key_green0.height) & (snow_keys[i].x>=sprite_key_green0.x) & (snow_keys[i].x<=sprite_key_green0.x+sprite_key_green0.width)){
                    app.stage.removeChild(snow_keys[i]);
                    delete snow_keys[i]
                    if (tap_snow==0){
                        speed_bomb/=2
                        speed_notes/=2
                        speed_star/=2
                        speed_snow/=2
                        tap_snow=1
                        snow_timer=0
                    }               
                    else {
                        snow_timer=0
                    }
                }
            }
        }
    
}
function check_blue(){
    if (tap_blue==0) {
        tap_blue=1
    }

    for (let i=0;i<blue_keys.length;i++){
        if (blue_keys[i]){
            if (blue_keys[i].y+blue_keys[i].height>=app.screen.height-sprite_key_blue0.height){
                app.stage.removeChild(blue_keys[i]);
                delete blue_keys[i]
                my_score+=10;
                }
        }
    } 

    for (let i=0;i<stars_keys.length;i++){
        if (stars_keys[i]){
                if ((stars_keys[i].y+stars_keys[i].height>=app.screen.height-sprite_key_blue0.height) & (stars_keys[i].x>=sprite_key_blue0.x) & (stars_keys[i].x<=sprite_key_blue0.x+sprite_key_blue0.width)){
                    app.stage.removeChild(stars_keys[i]);
                    app.stage.removeChild(stars_shine_keys[i]);
                    delete stars_keys[i]
                    delete stars_shine_keys[i]
                    my_stars+=1
                    my_score+=100
                    }
            }
        }

    for (let i=0;i<bombs_keys.length;i++){
        if (bombs_keys[i]){
        if ((bombs_keys[i].y+bombs_keys[i].height>=app.screen.height-sprite_key_blue0.height) & (bombs_keys[i].x>=sprite_key_blue0.x) & (bombs_keys[i].x<=sprite_key_blue0.x+sprite_key_blue0.width)){
                app.stage.removeChild(bombs_keys[i]);
                delete bombs_keys[i]
                if (key_blood!=1){
                    app.stage.addChild(sprite_blood_effect) 
                }
                my_hp-=1
                key_blood=1
                }
            }
        }

    for (let i=0;i<snow_keys.length;i++){
        if (snow_keys[i]){
                if ((snow_keys[i].y+snow_keys[i].height>=app.screen.height-sprite_key_blue0.height) & (snow_keys[i].x>=sprite_key_blue0.x) & (snow_keys[i].x<=sprite_key_blue0.x+sprite_key_blue0.width)){
                    app.stage.removeChild(snow_keys[i]);
                    delete snow_keys[i]
                    if (tap_snow==0){
                        speed_bomb/=2
                        speed_notes/=2
                        speed_star/=2
                        speed_snow/=2
                        tap_snow=1
                        snow_timer=0
                    }               
                    else {
                        snow_timer=0
                    }
                }
            }
        }
}
function check_yellow(){
    if (tap_yellow==0) {
        tap_yellow=1
    }

    for (let i=0;i<yellow_keys.length;i++){
        if (yellow_keys[i]){
            if (yellow_keys[i].y+yellow_keys[i].height>=app.screen.height-sprite_key_yellow0.height){
                app.stage.removeChild(yellow_keys[i]);
                delete yellow_keys[i]
                my_score+=10;
                }
        }
        
    } 
    for (let i=0;i<stars_keys.length;i++){
    if (stars_keys[i]){
            if ((stars_keys[i].y+stars_keys[i].height>=app.screen.height-sprite_key_yellow0.height) & (stars_keys[i].x>=sprite_key_yellow0.x) & (stars_keys[i].x<=sprite_key_yellow0.x+sprite_key_yellow0.width)){
                app.stage.removeChild(stars_keys[i]);
                app.stage.removeChild(stars_shine_keys[i]);
                delete stars_keys[i]
                delete stars_shine_keys[i]
                my_stars+=1
                my_score+=100
                }
        }
    }
    for (let i=0;i<bombs_keys.length;i++){
        if (bombs_keys[i]){
        if ((bombs_keys[i].y+bombs_keys[i].height>=app.screen.height-sprite_key_yellow0.height) & (bombs_keys[i].x>=sprite_key_yellow0.x) & (bombs_keys[i].x<=sprite_key_yellow0.x+sprite_key_yellow0.width)){
                if (bombs_keys[i].y+bombs_keys[i].height>=app.screen.height-sprite_key_yellow0.height){
                    app.stage.removeChild(bombs_keys[i]);
                    delete bombs_keys[i]
                    if (key_blood!=1){
                        app.stage.addChild(sprite_blood_effect) 
                    }
                    my_hp-=1
                    key_blood=1
                    }
            }
        }
    }
    for (let i=0;i<snow_keys.length;i++){
        if (snow_keys[i]){
                if ((snow_keys[i].y+snow_keys[i].height>=app.screen.height-sprite_key_yellow0.height) & (snow_keys[i].x>=sprite_key_yellow0.x) & (snow_keys[i].x<=sprite_key_yellow0.x+sprite_key_yellow0.width)){
                    app.stage.removeChild(snow_keys[i]);
                    delete snow_keys[i]
                    if (tap_snow==0){
                        speed_bomb/=2
                        speed_notes/=2
                        speed_star/=2
                        speed_snow/=2
                        tap_snow=1
                        snow_timer=0
                    }               
                    else {
                        snow_timer=0
                    }
                }
            }
        }
}

function getRandom(max) {
    return Math.floor(Math.random() * max);
  }
    

//health_bars
await PIXI.Assets.load('./img/hp0.png');
await PIXI.Assets.load('./img/hp1.png');
await PIXI.Assets.load('./img/hp2.png');
await PIXI.Assets.load('./img/hp3.png');
await PIXI.Assets.load('./img/black_top.png');
let sprite_hp0 = PIXI.Sprite.from('./img/hp0.png');
Sprite_Auto(sprite_hp0)
app.stage.addChild(sprite_hp0);
let sprite_hp1 = PIXI.Sprite.from('./img/hp1.png');
Sprite_Auto(sprite_hp1)
let sprite_hp2 = PIXI.Sprite.from('./img/hp2.png');
Sprite_Auto(sprite_hp2)
let sprite_hp3 = PIXI.Sprite.from('./img/hp3.png');
Sprite_Auto(sprite_hp3)
app.stage.addChild(sprite_hp3);
//game_over
await PIXI.Assets.load('./img/game_over.png');
let sprite_game_over = PIXI.Sprite.from('./img/game_over.png');
Sprite_Auto(sprite_game_over)
//black_top
let sprite_black_top = PIXI.Sprite.from('./img/black_top.png');
Sprite_Auto(sprite_black_top)
app.stage.addChild(sprite_black_top);
//star_score_icon
await PIXI.Assets.load('./img/star_score.png');
let sprite_star_score = PIXI.Sprite.from('./img/star_score.png');
Sprite_Auto(sprite_star_score)
sprite_star_score.x=app.screen.width-12*app.screen.width/720*5
sprite_star_score.y=sprite_black_top.height/2-sprite_star_score.height/2
app.stage.addChild(sprite_black_top);

//notes
await PIXI.Assets.load('./img/blue_note.png');
await PIXI.Assets.load('./img/red_note.png');
await PIXI.Assets.load('./img/green_note.png');
await PIXI.Assets.load('./img/yellow_note.png');
let sprite_blue_note = PIXI.Sprite.from('./img/blue_note.png');
let sprite_red_note = PIXI.Sprite.from('./img/red_note.png');
let sprite_green_note = PIXI.Sprite.from('./img/green_note.png');
let sprite_yellow_note = PIXI.Sprite.from('./img/yellow_note.png');
Sprite_Auto(sprite_blue_note)
Sprite_Auto(sprite_red_note)
Sprite_Auto(sprite_green_note)
Sprite_Auto(sprite_yellow_note)


//star and bomb
await PIXI.Assets.load('./img/bomb.png');
await PIXI.Assets.load('./img/snow.png');

let red_keys=[]
let red_keys_id=0
let red_keys_timer=0

let blue_keys=[]
let blue_keys_id=0
let blue_keys_timer=0

let green_keys=[]
let green_keys_id=0
let green_keys_timer=0

let yellow_keys=[]
let yellow_keys_id=0
let yellow_keys_timer=0

let stars_keys=[]
let stars_keys_id=0
let stars_keys_timer=0

let stars_shine_keys=[]
let stars_shine_keys_id=0

let bombs_keys=[]
let bombs_keys_id=0
let bombs_keys_timer=0

let snow_keys=[]
let snow_keys_id=0
let snow_keys_timer=0

sprite_key_red0.eventMode = 'static';
sprite_key_red0.on('pointerdown',check_red);

sprite_key_green0.eventMode = 'static';
sprite_key_green0.on('pointerdown',check_green);

sprite_key_blue0.eventMode = 'static';
sprite_key_blue0.on('pointerdown',check_blue);

sprite_key_yellow0.eventMode = 'static';
sprite_key_yellow0.on('pointerdown',check_yellow);

await PIXI.Assets.load('./yoster.ttf');
let font_s=10*window.devicePixelRatio
const style = new PIXI.TextStyle({
    fontFamily: 'yoster',
    fontSize: font_s,
    fill: '#ffffff', // gradient
});
let my_score=0;
let my_stars=0

const basicText = new PIXI.Text({text: 'Score: '+String(my_score),style});
const basicText2 = new PIXI.Text({text: String(my_stars),style});
basicText.x=15*window.devicePixelRatio/2
basicText.y = sprite_black_top.height/2-font_s/2;
basicText2.x = app.screen.width-sprite_star_score.width-basicText2.width-12*app.screen.width/720*5;
basicText2.y = sprite_black_top.height/2-font_s/2;

app.stage.addChild(basicText);
app.stage.addChild(basicText2);

//app.stage.addChild(myScoreText);

let speed_star=3
let speed_notes=4
let speed_bomb=5
let speed_snow=5

let blood_timer=0
let key_blood=0

let my_hp=10
let key_game_over=false
function moving(){
    
    if (my_hp==3) {
        app.stage.removeChild(sprite_hp0)
        app.stage.removeChild(sprite_hp1)
        app.stage.removeChild(sprite_hp2)
        app.stage.addChild(sprite_hp3)
    }
    else if (my_hp==2) {
        app.stage.removeChild(sprite_hp0)
        app.stage.removeChild(sprite_hp1)
        app.stage.removeChild(sprite_hp3)
        app.stage.addChild(sprite_hp2)
    }
    else if (my_hp==1) {
        app.stage.removeChild(sprite_hp0)
        app.stage.removeChild(sprite_hp2)
        app.stage.removeChild(sprite_hp3)
        app.stage.addChild(sprite_hp1)
    }
    else if (my_hp==0) {
        app.stage.removeChild(sprite_hp1)
        app.stage.removeChild(sprite_hp2)
        app.stage.removeChild(sprite_hp3)
        app.stage.addChild(sprite_hp0)
        key_game_over=true
        
    } 
    app.stage.removeChild(sprite_black_top)
    app.stage.addChild(sprite_black_top);

    app.stage.removeChild(basicText);
    basicText.text='Score: '+String(my_score)
    app.stage.addChild(basicText);
    app.stage.removeChild(basicText2);
    basicText2.text=String(my_stars)
    basicText2.x = app.screen.width-sprite_star_score.width-basicText2.width-12*app.screen.width/720*3;
    app.stage.addChild(basicText2);

    app.stage.removeChild(sprite_star_score);
    app.stage.addChild(sprite_star_score);


    
    for (var i=0; i<red_keys_id; i++){
        if (red_keys[i]){
            red_keys[i].y+=speed_notes;
            if (red_keys[i].y>=app.screen.height-sprite_key_red0.height/2){
                if (my_score>=5){my_score-=5}else{my_score=0}
                app.stage.removeChild(red_keys[i]);
                delete red_keys[i]
                if (key_blood!=1){
                    app.stage.addChild(sprite_blood_effect) 
                }
                my_hp-=1
                key_blood=1
            }
        }
        
    }

    for (var i=0; i<blue_keys_id; i++){
        if (blue_keys[i]){
            blue_keys[i].y+=speed_notes;
            if (blue_keys[i].y>=app.screen.height-sprite_key_blue0.height/2){
                if (my_score>=5){my_score-=5}else{my_score=0}
                app.stage.removeChild(blue_keys[i]);
                delete blue_keys[i]
                if (key_blood!=1){
                    app.stage.addChild(sprite_blood_effect) 
                }
                my_hp-=1
                key_blood=1
            }
        }
    }

    for (var i=0; i<green_keys_id; i++){
        if (green_keys[i]){
            green_keys[i].y+=speed_notes;
            if (green_keys[i].y>=app.screen.height-sprite_key_green0.height/2){
                if (my_score>=5){my_score-=5}else{my_score=0}
                app.stage.removeChild(green_keys[i]);
                delete green_keys[i]
                if (key_blood!=1){
                    app.stage.addChild(sprite_blood_effect)
                }
                my_hp-=1
                key_blood=1
            }
        }
    }

    for (var i=0; i<yellow_keys_id; i++){
        if (yellow_keys[i]){
            yellow_keys[i].y+=speed_notes;
            if (yellow_keys[i].y>=app.screen.height-sprite_key_yellow0.height/2){
                if (my_score>=5){my_score-=5}else{my_score=0}
                app.stage.removeChild(yellow_keys[i]);
                delete yellow_keys[i]
                if (key_blood!=1){
                    app.stage.addChild(sprite_blood_effect)
                }
                my_hp-=1
                key_blood=1
            }
        }
    }

    for (var i=0; i<stars_keys_id; i++){
        if (stars_keys[i]){
            stars_shine_keys[i].y+=speed_star;
            stars_keys[i].y+=speed_star;
            if ((stars_keys[i].y>=app.screen.height-sprite_key_yellow0.height/2) | (stars_keys[i].y>=app.screen.height-sprite_key_red0.height/2) | (stars_keys[i].y>=app.screen.height-sprite_key_green0.height/2) | (stars_keys[i].y>=app.screen.height-sprite_key_blue0.height/2)){
                app.stage.removeChild(stars_keys[i]);
                app.stage.removeChild(stars_shine_keys[i])
                delete stars_keys[i]
                
            }
        }
        
    }

    for (var i=0; i<bombs_keys_id; i++){
        if (bombs_keys[i]){
            bombs_keys[i].y+=speed_bomb;
            if ((bombs_keys[i].y>=app.screen.height-sprite_key_yellow0.height)){
                
                app.stage.removeChild(bombs_keys[i]);
                delete bombs_keys[i]
            }
        }
        
    }

    for (var i=0; i<snow_keys_id; i++){
        if (snow_keys[i]){
            
            snow_keys[i].y+=speed_snow;
            if ((snow_keys[i].y>=app.screen.height-sprite_key_yellow0.height/2)){
                console.log(snow_keys[i].y)
                app.stage.removeChild(snow_keys[i]);
                delete snow_keys[i]
            }
        }
        
    }

    if (tap_red==0){
        app.stage.removeChild(sprite_key_red0)
        app.stage.addChild(sprite_key_red0);
    }
    else {
        app.stage.removeChild(sprite_key_red0)
        if (tap_red_timer<=tap_timer) {
            app.stage.removeChild(sprite_key_red1);
            app.stage.addChild(sprite_key_red1);
            tap_red_timer+=1
        }
        else {
            tap_red=0
            tap_red_timer=0
        }
        
    }

    if (tap_blue==0){
        app.stage.removeChild(sprite_key_blue0)
        app.stage.addChild(sprite_key_blue0);
    }
    else {
        app.stage.removeChild(sprite_key_blue0)
        if (tap_blue_timer<=tap_timer) {
            app.stage.removeChild(sprite_key_blue1);
            app.stage.addChild(sprite_key_blue1);
            tap_blue_timer+=1
        }
        else {
            tap_blue=0
            tap_blue_timer=0
        }
        
    }
    
    if (tap_green==0){
        app.stage.removeChild(sprite_key_green0)
        app.stage.addChild(sprite_key_green0);
    }
    else {
        app.stage.removeChild(sprite_key_green0)
        if (tap_green_timer<=tap_timer) {
            app.stage.removeChild(sprite_key_green1);
            app.stage.addChild(sprite_key_green1);
            tap_green_timer+=1
        }
        else {
            tap_green=0
            tap_green_timer=0
        }
        
    }

    if (tap_yellow==0){
        app.stage.removeChild(sprite_key_yellow0)
        app.stage.addChild(sprite_key_yellow0);
    }
    else {
        app.stage.removeChild(sprite_key_yellow0)
        if (tap_yellow_timer<=tap_timer) {
            app.stage.removeChild(sprite_key_yellow1);
            app.stage.addChild(sprite_key_yellow1);
            tap_yellow_timer+=1
        }
        else {
            tap_yellow=0
            tap_yellow_timer=0
        }
        
    }
    if (tap_snow==1) {
        if (snow_timer>=200) {
            tap_snow=0
            speed_bomb*=2
            speed_notes*=2
            speed_star*=2
            speed_snow*=2
            app.stage.removeChild(sprite_snow_effect)
            
        }
        else {
            app.stage.removeChild(sprite_snow_effect)
            app.stage.addChild(sprite_snow_effect)
            snow_timer+=1
        }
    }
    if (key_blood==0){
        blood_timer=0
    }
    else {
        blood_timer+=1
        app.stage.removeChild(sprite_blood_effect)
        app.stage.addChild(sprite_blood_effect)
    }
    if (blood_timer>=100){
        key_blood=0
        blood_timer=0
        app.stage.removeChild(sprite_blood_effect)
    }

    
    //app.stage.addChild(sprite_multi);
}
function falling(){
    if ((red_keys_id<=10) & (red_keys_timer==150)){
        red_keys.push(PIXI.Sprite.from('./img/red_note.png'))
        Sprite_Auto(red_keys[red_keys_id])
        app.stage.addChild(red_keys[red_keys_id]);
        red_keys[red_keys_id].x=16*app.renderer.width/144+16*app.renderer.width/144*2*3
        red_keys_id+=1
        red_keys_timer=0
    }
    else {
        red_keys_timer+=1
    }

    if ((blue_keys_id<=10) & (blue_keys_timer==120)){
        blue_keys.push(PIXI.Sprite.from('./img/blue_note.png'))
        Sprite_Auto(blue_keys[blue_keys_id])
        app.stage.addChild(blue_keys[blue_keys_id]);
        blue_keys[blue_keys_id].x=16*app.renderer.width/144+16*app.renderer.width/144*2*1
        blue_keys_id+=1
        blue_keys_timer=0
    }
    else {
        blue_keys_timer+=1
    }

    if ((green_keys_id<=10) & (green_keys_timer==100)){
        green_keys.push(PIXI.Sprite.from('./img/green_note.png'))
        Sprite_Auto(green_keys[green_keys_id])
        app.stage.addChild(green_keys[green_keys_id]);
        green_keys[green_keys_id].x=16*app.renderer.width/144+16*app.renderer.width/144*2*2
        green_keys_id+=1
        green_keys_timer=0
    }
    else {
        green_keys_timer+=1
    }

    if ((yellow_keys_id<=10) & (yellow_keys_timer==140)){
        yellow_keys.push(PIXI.Sprite.from('./img/yellow_note.png'))
        Sprite_Auto(yellow_keys[yellow_keys_id])
        app.stage.addChild(yellow_keys[yellow_keys_id]);
        yellow_keys[yellow_keys_id].x=16*app.renderer.width/144+16*app.renderer.width/144*2*0
        yellow_keys_id+=1
        yellow_keys_timer=0
    }
    else {
        yellow_keys_timer+=1
    }

    if ((stars_keys_id<=10) & (stars_keys_timer==100)){
        stars_keys.push(PIXI.Sprite.from('./img/star.png'))
        stars_shine_keys.push(PIXI.Sprite.from('./img/star_shine.png'))
        Sprite_Auto(stars_keys[stars_keys_id])
        Sprite_Auto(stars_shine_keys[stars_shine_keys_id])
        stars_keys[stars_keys_id].x=18*app.renderer.width/144+32*app.renderer.width/144*getRandom(3)
        stars_keys[stars_keys_id].y=0
        stars_shine_keys[stars_shine_keys_id].x=stars_keys[stars_keys_id].x+stars_keys[stars_keys_id].width/2-stars_shine_keys[stars_shine_keys_id].width/2
        stars_shine_keys[stars_shine_keys_id].y=stars_keys[stars_keys_id].y+stars_keys[stars_keys_id].height/2-stars_shine_keys[stars_shine_keys_id].height/2
        app.stage.addChild(stars_shine_keys[stars_shine_keys_id]);
        app.stage.addChild(stars_keys[stars_keys_id]);
        stars_keys_id+=1
        stars_keys_timer=0
        stars_shine_keys_id+=1
    }
    else {
        stars_keys_timer+=1
    }

    if ((bombs_keys_id<=10) & (bombs_keys_timer==250)){
        bombs_keys.push(PIXI.Sprite.from('./img/bomb.png'))
        Sprite_Auto(bombs_keys[bombs_keys_id])
        app.stage.addChild(bombs_keys[bombs_keys_id]);
        bombs_keys[bombs_keys_id].x=17*app.renderer.width/144+32*app.renderer.width/144*getRandom(3)
        bombs_keys_id+=1
        bombs_keys_timer=0
    }
    else {
        bombs_keys_timer+=1
    }

    if ((snow_keys_id<=10) & (snow_keys_timer==250)){
        snow_keys.push(PIXI.Sprite.from('./img/snow.png'))
        Sprite_Auto(snow_keys[snow_keys_id])
        app.stage.addChild(snow_keys[snow_keys_id]);
        snow_keys[snow_keys_id].x=18*app.renderer.width/144+32*app.renderer.width/144*getRandom(3)
        snow_keys_id+=1
        snow_keys_timer=0
    }
    else {
        snow_keys_timer+=1
    }
    moving()
}


app.ticker.add(() => {
    if (key_game_over==false){
        falling()
    }
    else {
        app.stage.addChild(sprite_game_over)
    }
});

