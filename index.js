//const { Sprite } = require("pixi.js");

const app = new PIXI.Application();
await app.init({ resizeTo: window, antialias: false, useContextAlpha: false });
    
PIXI.sound.add('geo8', './geo_8.mp3');



document.body.appendChild(app.canvas);

await PIXI.Assets.load('./img/star_shine.png');
await PIXI.Assets.load('./img/star.png');
await PIXI.Assets.load('./img/background.png');
await PIXI.Assets.load('./img/blood_effect.png');
await PIXI.Assets.load('./img/snow_effect.png');
await PIXI.Assets.load('./img/shiny_key.png');
await PIXI.Assets.load('./img/borders.png');
await PIXI.Assets.load('./img/key_red0.png');
await PIXI.Assets.load('./img/key_green0.png');
await PIXI.Assets.load('./img/key_blue0.png');
await PIXI.Assets.load('./img/key_yellow0.png');
await PIXI.Assets.load('./img/key_red1.png');
await PIXI.Assets.load('./img/key_green1.png');
await PIXI.Assets.load('./img/key_blue1.png');
await PIXI.Assets.load('./img/key_yellow1.png');
await PIXI.Assets.load('./img/tap_to_continue.png');
await PIXI.Assets.load('./img/game_over.png');
await PIXI.Assets.load('./img/black_top.png');
await PIXI.Assets.load('./img/star_score.png');
await PIXI.Assets.load('./img/blue_note.png');
await PIXI.Assets.load('./img/red_note.png');
await PIXI.Assets.load('./img/green_note.png');
await PIXI.Assets.load('./img/yellow_note.png');
await PIXI.Assets.load('./img/bomb.png');
await PIXI.Assets.load('./img/snow.png');
await PIXI.Assets.load('./img/main_menu.png');
await PIXI.Assets.load('./img/play_button.png');
await PIXI.Assets.load('./img/side_tiles.png');
await PIXI.Assets.load('./yoster.ttf');
await PIXI.Assets.load('./PIXY.ttf');
await PIXI.Assets.load('./img/game_win.png')

let sprite_game_win=PIXI.Sprite.from('./img/game_win.png')
Sprite_Auto(sprite_game_win)
sprite_game_win.blendMode='negation'


function Sprite_Auto(sprite1) {
    sprite1.width = sprite1.width * (app.screen.width / 720)
    sprite1.height = sprite1.height * (app.screen.height / 1280)
}

let key_music_one_start=false
//back
let sprite_back = PIXI.Sprite.from('./img/background.png');
Sprite_Auto(sprite_back)
app.stage.addChild(sprite_back);

//blood_effect

let sprite_blood_effect = PIXI.Sprite.from('./img/blood_effect.png');
Sprite_Auto(sprite_blood_effect)

//snow_effect

let sprite_snow_effect = PIXI.Sprite.from('./img/snow_effect.png');
Sprite_Auto(sprite_snow_effect)

//shiny_aroung_keys

let sprite_shiny_key = PIXI.Sprite.from('./img/shiny_key.png');
Sprite_Auto(sprite_shiny_key)
app.stage.addChild(sprite_shiny_key);

//borders

let sprite_borders = PIXI.Sprite.from('./img/borders.png');
Sprite_Auto(sprite_borders)
app.stage.addChild(sprite_borders);

//keys

let sprite_key_red0 = PIXI.Sprite.from('./img/key_red0.png');
let sprite_key_red1 = PIXI.Sprite.from('./img/key_red1.png');
Sprite_Auto(sprite_key_red0)
Sprite_Auto(sprite_key_red1)
sprite_key_red0.x = 40 * (app.screen.width / 720) + sprite_key_red0.width * 3
sprite_key_red0.y = app.screen.height - sprite_key_red0.height
sprite_key_red1.x = 40 * (app.screen.width / 720) + sprite_key_red1.width * 3
sprite_key_red1.y = app.screen.height - sprite_key_red1.height
app.stage.addChild(sprite_key_red0);

let sprite_key_green0 = PIXI.Sprite.from('./img/key_green0.png');
let sprite_key_green1 = PIXI.Sprite.from('./img/key_green1.png');
Sprite_Auto(sprite_key_green0)
Sprite_Auto(sprite_key_green1)
sprite_key_green0.x = 40 * (app.screen.width / 720) + sprite_key_green0.width * 2
sprite_key_green0.y = app.screen.height - sprite_key_green0.height
sprite_key_green1.x = 40 * (app.screen.width / 720) + sprite_key_green1.width * 2
sprite_key_green1.y = app.screen.height - sprite_key_green1.height
app.stage.addChild(sprite_key_green0);

let sprite_key_blue0 = PIXI.Sprite.from('./img/key_blue0.png');
let sprite_key_blue1 = PIXI.Sprite.from('./img/key_blue1.png');
Sprite_Auto(sprite_key_blue0)
Sprite_Auto(sprite_key_blue1)
sprite_key_blue0.x = 40 * (app.screen.width / 720) + sprite_key_blue0.width * 1
sprite_key_blue0.y = app.screen.height - sprite_key_blue0.height
sprite_key_blue1.x = 40 * (app.screen.width / 720) + sprite_key_blue1.width * 1
sprite_key_blue1.y = app.screen.height - sprite_key_blue1.height
app.stage.addChild(sprite_key_blue0);

let sprite_key_yellow0 = PIXI.Sprite.from('./img/key_yellow0.png');
let sprite_key_yellow1 = PIXI.Sprite.from('./img/key_yellow1.png');
Sprite_Auto(sprite_key_yellow0)
Sprite_Auto(sprite_key_yellow1)
sprite_key_yellow0.x = 40 * (app.screen.width / 720) + sprite_key_yellow0.width * 0
sprite_key_yellow0.y = app.screen.height - sprite_key_yellow0.height
sprite_key_yellow1.x = 40 * (app.screen.width / 720) + sprite_key_yellow1.width * 0
sprite_key_yellow1.y = app.screen.height - sprite_key_yellow1.height
app.stage.addChild(sprite_key_yellow0);

//tap

let sprite_tap_to_continue = PIXI.Sprite.from('./img/tap_to_continue.png');
Sprite_Auto(sprite_tap_to_continue)

let tap_snow = 0
let snow_timer = 0

let tap_red = 0
let tap_red_timer = 0

let tap_blue = 0
let tap_blue_timer = 0

let tap_green = 0
let tap_green_timer = 0

let tap_yellow = 0
let tap_yellow_timer = 0

const tap_timer = 5

function check_red() {
    if (tap_red == 0) {
        tap_red = 1
    }

    for (let i = 0; i < red_keys.length; i++) {
        if (red_keys[i]) {
            if (red_keys[i].y + red_keys[i].height >= app.screen.height - sprite_key_red0.height) {
                app.stage.removeChild(red_keys[i]);
                delete red_keys[i]
                my_score += 10;
                if (queue_red[i]>=max_queue_timer){
                    key_win=true
                }
                if (key_random==false){
                    key_music_one_start=true
                }
            }
        }

    }
    for (let i = 0; i < stars_keys.length; i++) {
        if (stars_keys[i]) {
            if ((stars_keys[i].y + stars_keys[i].height >= app.screen.height - sprite_key_red0.height) & (stars_keys[i].x >= sprite_key_red0.x) & (stars_keys[i].x <= sprite_key_red0.x + sprite_key_red0.width)) {
                app.stage.removeChild(stars_keys[i]);
                app.stage.removeChild(stars_shine_keys[i]);
                delete stars_keys[i]
                delete stars_shine_keys[i]
                my_stars += 1
                my_score += 100
                if (queue_stars[i][0]>=max_queue_timer){
                    key_win=true
                    if (key_random==false){
                        key_music_one_start=true
                    }
                }
            }
        }
    }
    for (let i = 0; i < bombs_keys.length; i++) {
        if (bombs_keys[i]) {
            if ((bombs_keys[i].y + bombs_keys[i].height >= app.screen.height - sprite_key_red0.height) & (bombs_keys[i].x >= sprite_key_red0.x) & (bombs_keys[i].x <= sprite_key_red0.x + sprite_key_red0.width)) {
                app.stage.removeChild(bombs_keys[i]);
                delete bombs_keys[i]
                if (key_blood != 1) {
                    app.stage.addChild(sprite_blood_effect)
                }
                my_hp -= 1
                key_blood = 1
                if (queue_bombs[i][0]>=max_queue_timer){
                    key_win=true
                }
                if (key_random==false){
                    key_music_one_start=true
                }
            }
        }

    }

    for (let i = 0; i < snow_keys.length; i++) {
        if (snow_keys[i]) {
            if ((snow_keys[i].y + snow_keys[i].height >= app.screen.height - sprite_key_red0.height) & (snow_keys[i].x >= sprite_key_red0.x) & (snow_keys[i].x <= sprite_key_red0.x + sprite_key_red0.width)) {
                app.stage.removeChild(snow_keys[i]);
                delete snow_keys[i]
                if (tap_snow == 0) {
                    speed_bomb /= 2
                    speed_notes /= 2
                    speed_star /= 2
                    speed_snow /= 2
                    queue_timer_m=1
                    tap_snow = 1
                    snow_timer = 0
                }
                else {
                    snow_timer = 0
                }
                if (queue_snow[i][0]>=max_queue_timer){
                    key_win=true
                }
                if (key_random==false){
                    key_music_one_start=true
                }
            }
        }
    }

    app.stage.removeChild(sprite_key_red1);
    app.stage.addChild(sprite_key_red0);
}
function check_green() {
    if (tap_green == 0) {
        tap_green = 1
    }

    for (let i = 0; i < green_keys.length; i++) {
        if (green_keys[i]) {
            if (green_keys[i].y + green_keys[i].height >= app.screen.height - sprite_key_green0.height) {
                app.stage.removeChild(green_keys[i]);
                delete green_keys[i]
                my_score += 10;
                if (queue_green[i]>=max_queue_timer){
                    key_win=true
                }
                if (key_random==false){
                    key_music_one_start=true
                }
            }
        }

    }
    for (let i = 0; i < stars_keys.length; i++) {
        if (stars_keys[i]) {
            if ((stars_keys[i].y + stars_keys[i].height >= app.screen.height - sprite_key_green0.height) & (stars_keys[i].x >= sprite_key_green0.x) & (stars_keys[i].x <= sprite_key_green0.x + sprite_key_green0.width)) {
                app.stage.removeChild(stars_keys[i]);
                app.stage.removeChild(stars_shine_keys[i]);
                delete stars_keys[i]
                delete stars_shine_keys[i]
                my_stars += 1
                my_score += 100
                if (queue_stars[i][0]>=max_queue_timer){
                    key_win=true
                }
                if (key_random==false){
                    key_music_one_start=true
                }
            }
        }
    }
    for (let i = 0; i < bombs_keys.length; i++) {
        if (bombs_keys[i]) {
            if ((bombs_keys[i].y + bombs_keys[i].height >= app.screen.height - sprite_key_green0.height) & (bombs_keys[i].x >= sprite_key_green0.x) & (bombs_keys[i].x <= sprite_key_green0.x + sprite_key_green0.width)) {
                app.stage.removeChild(bombs_keys[i]);
                delete bombs_keys[i]
                if (key_blood != 1) {
                    app.stage.addChild(sprite_blood_effect)
                }
                my_hp -= 1
                key_blood = 1
                if (queue_bombs[i][0]>=max_queue_timer){
                    key_win=true
                }
                if (key_random==false){
                    key_music_one_start=true
                }
            }
        }

    }

    for (let i = 0; i < snow_keys.length; i++) {
        if (snow_keys[i]) {
            if ((snow_keys[i].y + snow_keys[i].height >= app.screen.height - sprite_key_green0.height) & (snow_keys[i].x >= sprite_key_green0.x) & (snow_keys[i].x <= sprite_key_green0.x + sprite_key_green0.width)) {
                app.stage.removeChild(snow_keys[i]);
                delete snow_keys[i]
                if (tap_snow == 0) {
                    speed_bomb /= 2
                    speed_notes /= 2
                    speed_star /= 2
                    speed_snow /= 2
                    queue_timer_m=1
                    tap_snow = 1
                    snow_timer = 0
                }
                else {
                    snow_timer = 0
                }
                if (queue_snow[i][0]>=max_queue_timer){
                    key_win=true
                }
                if (key_random==false){
                    key_music_one_start=true
                }
            }
        }
    }

}
function check_blue() {
    if (tap_blue == 0) {
        tap_blue = 1
    }

    for (let i = 0; i < blue_keys.length; i++) {
        if (blue_keys[i]) {
            if (blue_keys[i].y + blue_keys[i].height >= app.screen.height - sprite_key_blue0.height) {
                app.stage.removeChild(blue_keys[i]);
                delete blue_keys[i]
                my_score += 10;
                if (queue_blue[i]>=max_queue_timer){
                    key_win=true
                }
                if (key_random==false){
                    key_music_one_start=true
                }
            }
            
        }
    }

    for (let i = 0; i < stars_keys.length; i++) {
        if (stars_keys[i]) {
            if ((stars_keys[i].y + stars_keys[i].height >= app.screen.height - sprite_key_blue0.height) & (stars_keys[i].x >= sprite_key_blue0.x) & (stars_keys[i].x <= sprite_key_blue0.x + sprite_key_blue0.width)) {
                app.stage.removeChild(stars_keys[i]);
                app.stage.removeChild(stars_shine_keys[i]);
                delete stars_keys[i]
                delete stars_shine_keys[i]
                my_stars += 1
                my_score += 100
                if (queue_stars[i][0]>=max_queue_timer){
                    key_win=true
                }
                if (key_random==false){
                    key_music_one_start=true
                }
            }
        }
    }

    for (let i = 0; i < bombs_keys.length; i++) {
        if (bombs_keys[i]) {
            if ((bombs_keys[i].y + bombs_keys[i].height >= app.screen.height - sprite_key_blue0.height) & (bombs_keys[i].x >= sprite_key_blue0.x) & (bombs_keys[i].x <= sprite_key_blue0.x + sprite_key_blue0.width)) {
                app.stage.removeChild(bombs_keys[i]);
                delete bombs_keys[i]
                if (key_blood != 1) {
                    app.stage.addChild(sprite_blood_effect)
                }
                my_hp -= 1
                key_blood = 1
                if (queue_bombs[i][0]>=max_queue_timer){
                    key_win=true
                }
                if (key_random==false){
                    key_music_one_start=true
                }
            }
        }
    }

    for (let i = 0; i < snow_keys.length; i++) {
        if (snow_keys[i]) {
            if ((snow_keys[i].y + snow_keys[i].height >= app.screen.height - sprite_key_blue0.height) & (snow_keys[i].x >= sprite_key_blue0.x) & (snow_keys[i].x <= sprite_key_blue0.x + sprite_key_blue0.width)) {
                app.stage.removeChild(snow_keys[i]);
                delete snow_keys[i]
                if (tap_snow == 0) {
                    speed_bomb /= 2
                    speed_notes /= 2
                    speed_star /= 2
                    speed_snow /= 2
                    queue_timer_m=1
                    tap_snow = 1
                    snow_timer = 0
                }
                else {
                    snow_timer = 0
                }
                if (queue_snow[i][0]>=max_queue_timer){
                    key_win=true
                }
                if (key_random==false){
                    key_music_one_start=true
                }
            }
        }
    }
}
function check_yellow() {
    if (tap_yellow == 0) {
        tap_yellow = 1
    }

    for (let i = 0; i < yellow_keys.length; i++) {
        if (yellow_keys[i]) {
            if (yellow_keys[i].y + yellow_keys[i].height >= app.screen.height - sprite_key_yellow0.height) {
                app.stage.removeChild(yellow_keys[i]);
                delete yellow_keys[i]
                my_score += 10;
                if (queue_yellow[i]>=max_queue_timer){
                    key_win=true
                }
                if (key_random==false){
                    key_music_one_start=true
                }
            }
        }

    }
    for (let i = 0; i < stars_keys.length; i++) {
        if (stars_keys[i]) {
            if ((stars_keys[i].y + stars_keys[i].height >= app.screen.height - sprite_key_yellow0.height) & (stars_keys[i].x >= sprite_key_yellow0.x) & (stars_keys[i].x <= sprite_key_yellow0.x + sprite_key_yellow0.width)) {
                app.stage.removeChild(stars_keys[i]);
                app.stage.removeChild(stars_shine_keys[i]);
                delete stars_keys[i]
                delete stars_shine_keys[i]
                my_stars += 1
                my_score += 100
                if (queue_stars[i][0]>=max_queue_timer){
                    key_win=true
                }
                if (key_random==false){
                    key_music_one_start=true
                }
            }
        }
    }
    for (let i = 0; i < bombs_keys.length; i++) {
        if (bombs_keys[i]) {
            if ((bombs_keys[i].y + bombs_keys[i].height >= app.screen.height - sprite_key_yellow0.height) & (bombs_keys[i].x >= sprite_key_yellow0.x) & (bombs_keys[i].x <= sprite_key_yellow0.x + sprite_key_yellow0.width)) {
                    app.stage.removeChild(bombs_keys[i]);
                    delete bombs_keys[i]
                    if (key_blood != 1) {
                        app.stage.addChild(sprite_blood_effect)
                    }
                    my_hp -= 1
                    key_blood = 1
                    if (queue_bombs[i][0]>=max_queue_timer){
                        key_win=true
                    }
                    if (key_random==false){
                        key_music_one_start=true
                    }
                }
            }
        }

    /* */
    for (let i = 0; i < snow_keys.length; i++) {
        if (snow_keys[i]) {
            if ((snow_keys[i].y + snow_keys[i].height >= app.screen.height - sprite_key_yellow0.height) & (snow_keys[i].x >= sprite_key_yellow0.x) & (snow_keys[i].x <= sprite_key_yellow0.x + sprite_key_yellow0.width)) {
                app.stage.removeChild(snow_keys[i]);
                delete snow_keys[i]
                if (tap_snow == 0) {
                    speed_bomb /= 2
                    speed_notes /= 2
                    speed_star /= 2
                    speed_snow /= 2
                    queue_timer_m=1
                    tap_snow = 1
                    snow_timer = 0
                }
                else {
                    snow_timer = 0
                }
                if (queue_snow[i][0]>=max_queue_timer){
                    key_win=true
                }
                if (key_random==false){
                    key_music_one_start=true
                }
                
            }
        }
    }
}

function getRandom(max) {
    return Math.floor(Math.random() * max);
}

function main_menu() {
    key_main_menu = true

}
function check_tap_to_continue() {
    if ((key_game_over == true) | (key_win==true)) {
        if (key_tap_continue == false) {
            key_tap_continue = true
        }
    }
}

let key_main_menu = true
//game_over

let sprite_game_over = PIXI.Sprite.from('./img/game_over.png');
Sprite_Auto(sprite_game_over)
//black_top

let sprite_black_top = PIXI.Sprite.from('./img/black_top.png');

Sprite_Auto(sprite_black_top)
sprite_black_top.x = 0
sprite_black_top.y = 0
app.stage.addChild(sprite_black_top);
//health_bars
let sprite_hp = []
for (let i = 0; i < 6; i++) {
    await PIXI.Assets.load('./img/hp' + String(i) + '.png');
    sprite_hp.push(PIXI.Sprite.from('./img/hp' + String(i) + '.png'))
    Sprite_Auto(sprite_hp[i])
}
app.stage.addChild(sprite_hp[5]);
//star_score_icon

let sprite_star_score = PIXI.Sprite.from('./img/star_score.png');
Sprite_Auto(sprite_star_score)
sprite_star_score.x = app.screen.width - 12 * app.screen.width / 720 * 5
sprite_star_score.y = sprite_black_top.height / 2 - sprite_star_score.height / 2
app.stage.addChild(sprite_star_score);

//notes

let sprite_blue_note = PIXI.Sprite.from('./img/blue_note.png');
let sprite_red_note = PIXI.Sprite.from('./img/red_note.png');
let sprite_green_note = PIXI.Sprite.from('./img/green_note.png');
let sprite_yellow_note = PIXI.Sprite.from('./img/yellow_note.png');
Sprite_Auto(sprite_blue_note)
Sprite_Auto(sprite_red_note)
Sprite_Auto(sprite_green_note)
Sprite_Auto(sprite_yellow_note)


//star and bomb

let red_keys = []
let red_keys_id = 0
let red_keys_timer = 0

let blue_keys = []
let blue_keys_id = 0
let blue_keys_timer = 0

let green_keys = []
let green_keys_id = 0
let green_keys_timer = 0

let yellow_keys = []
let yellow_keys_id = 0
let yellow_keys_timer = 0

let bombs_keys=[]
let stars_keys=[]
let snow_keys=[]
let stars_shine_keys=[]

let bombs_keys_id=0
let stars_keys_id=0
let stars_shine_keys_id=0
let snow_keys_id=0

sprite_key_red0.eventMode = 'static';
sprite_key_red0.on('pointerdown', check_red);

sprite_key_green0.eventMode = 'static';
sprite_key_green0.on('pointerdown', check_green);

sprite_key_blue0.eventMode = 'static';
sprite_key_blue0.on('pointerdown', check_blue);

sprite_key_yellow0.eventMode = 'static';
sprite_key_yellow0.on('pointerdown', check_yellow);

sprite_game_over.eventMode = 'static';
sprite_game_over.on('pointerdown', check_tap_to_continue);
sprite_game_win.eventMode = 'static';
sprite_game_win.on('pointerdown', check_tap_to_continue);


let font_s = Math.round(10 * window.devicePixelRatio)
let font_w = Math.round(15 * window.devicePixelRatio)
const style = new PIXI.TextStyle({
    fontFamily: 'PIXY',
    fontSize: font_s,
    fill: '#ffffff'
});

let my_score = 0;
let my_stars = 0

const basicText = new PIXI.Text({ text: 'Score: ' + String(my_score), style });
const basicText2 = new PIXI.Text({ text: String(my_stars), style });
const basicText3 = new PIXI.Text({ text: 'Score: ', style: { fontFamily: 'PIXY', fontSize: font_w , fill: '#ffffff'} });
const basicText4 = new PIXI.Text({ text: 'Stars: ', style: { fontFamily: 'PIXY', fontSize: font_w , fill: '#ffffff'} });
basicText.x = 15 * window.devicePixelRatio / 2
basicText.y = sprite_black_top.height / 2 - font_s / 2;
basicText2.x = app.screen.width - sprite_star_score.width - basicText2.width - 12 * app.screen.width / 720 * 5;
basicText2.y = sprite_black_top.height / 2 - font_s / 2;

app.stage.addChild(basicText);
app.stage.addChild(basicText2);


//app.stage.addChild(myScoreText);
const def_speed_bomb=10//*devicePixelRatio
const def_speed_notes=10//*devicePixelRatio
const def_speed_snow=10//*devicePixelRatio
const def_speed_star=10//*devicePixelRatio

let current_survive_multi=1
let current_survive_taps_need=20
let current_survive_taps=0
let current_survive_qu=1
let speed_star = def_speed_star
let speed_notes = def_speed_notes
let speed_bomb = def_speed_bomb
let speed_snow = def_speed_snow

let blood_timer = 0
let key_blood = 0

let my_hp = 5
let key_game_over = false
let key_win = false
function moving() {
    app.stage.removeChild(sprite_black_top)
    app.stage.addChild(sprite_black_top);

    app.stage.removeChild(basicText);
    basicText.text = 'Score: ' + String(my_score)
    app.stage.addChild(basicText);
    app.stage.removeChild(basicText2);
    basicText2.text = String(my_stars)
    basicText2.x = app.screen.width - sprite_star_score.width - basicText2.width - 12 * app.screen.width / 720 * 3;
    app.stage.addChild(basicText2);




    app.stage.removeChild(sprite_star_score);
    app.stage.addChild(sprite_star_score);

    for (let i = 0; i < 6; i++) {
        if (i == my_hp) {
            app.stage.removeChild(sprite_hp[i])
            app.stage.addChild(sprite_hp[i])
        }
        else {
            app.stage.removeChild(sprite_hp[i])
        }
    }
    if (my_hp <= 0) {
        if (key_random==false){
            key_game_over = true
        }
        else {
            key_game_over=false
            key_win=true
        }
        

    }

    if ((key_game_over == false) & (key_win==false)) {
        for (var i = 0; i < red_keys_id; i++) {
            if (red_keys[i]) {
                red_keys[i].y += speed_notes;
                if (red_keys[i].y >= app.screen.height - sprite_key_red0.height / 2) {
                    if (my_score >= 5) { my_score -= 5 } else { my_score = 0 }
                    app.stage.removeChild(red_keys[i]);
                    delete red_keys[i]
                    if (key_blood != 1) {
                        app.stage.addChild(sprite_blood_effect)
                    }
                    my_hp -= 1
                    key_blood = 1
                    if (queue_red[i]==max_queue_timer){
                        key_win=true
                    }
                }
            }

        }

        for (var i = 0; i < blue_keys_id; i++) {
            if (blue_keys[i]) {
                blue_keys[i].y += speed_notes;
                if (blue_keys[i].y >= app.screen.height - sprite_key_blue0.height / 2) {
                    if (my_score >= 5) { my_score -= 5 } else { my_score = 0 }
                    app.stage.removeChild(blue_keys[i]);
                    delete blue_keys[i]
                    if (key_blood != 1) {
                        app.stage.addChild(sprite_blood_effect)
                    }
                    my_hp -= 1
                    key_blood = 1
                    if (queue_blue[i]==max_queue_timer){
                        key_win=true
                    }
                }
            }
        }

        for (var i = 0; i < green_keys_id; i++) {
            if (green_keys[i]) {
                green_keys[i].y += speed_notes;
                if (green_keys[i].y >= app.screen.height - sprite_key_green0.height / 2) {
                    if (my_score >= 5) { my_score -= 5 } else { my_score = 0 }
                    app.stage.removeChild(green_keys[i]);
                    delete green_keys[i]
                    if (key_blood != 1) {
                        app.stage.addChild(sprite_blood_effect)
                    }
                    my_hp -= 1
                    key_blood = 1
                    if (queue_green[i]==max_queue_timer){
                        key_win=true
                    }
                }
            }
        }

        for (var i = 0; i < yellow_keys_id; i++) {
            if (yellow_keys[i]) {
                yellow_keys[i].y += speed_notes;
                if (yellow_keys[i].y >= app.screen.height - sprite_key_yellow0.height / 2) {
                    if (my_score >= 5) { my_score -= 5 } else { my_score = 0 }
                    app.stage.removeChild(yellow_keys[i]);
                    delete yellow_keys[i]
                    if (key_blood != 1) {
                        app.stage.addChild(sprite_blood_effect)
                    }
                    my_hp -= 1
                    key_blood = 1
                    if (queue_yellow[i]==max_queue_timer){
                        key_win=true
                    }
                }
            }
        }
/* */
        for (var i = 0; i < stars_keys_id; i++) {
            if (stars_keys[i]){
                stars_shine_keys[i].y += speed_star;
                stars_keys[i].y += speed_star;
                if (stars_keys[i].y >= app.screen.height - sprite_key_yellow0.height / 2) {
                    app.stage.removeChild(stars_keys[i]);
                    app.stage.removeChild(stars_shine_keys[i])
                    delete stars_keys[i]
                    delete stars_shine_keys[i]
                    if (queue_stars[i]==max_queue_timer){
                        key_win=true
                    }
                }
            }
        }
/* */
        for (var i = 0; i < bombs_keys_id; i++) {
            if (bombs_keys[i]) {
                bombs_keys[i].y += speed_bomb;
                if ((bombs_keys[i].y >= app.screen.height - sprite_key_yellow0.height)) {
                    app.stage.removeChild(bombs_keys[i]);
                    delete bombs_keys[i]
                    if (queue_bombs[i]==max_queue_timer){
                        key_win=true
                    }
                }
            }

        }
        
/* */
        for (var i = 0; i < snow_keys_id; i++) {
            if (snow_keys[i]) {
                snow_keys[i].y += speed_snow;
                if ((snow_keys[i].y >= app.screen.height - sprite_key_yellow0.height / 2)) {
                    app.stage.removeChild(snow_keys[i]);
                    delete snow_keys[i]
                    if (queue_snow[i]==max_queue_timer){
                        key_win=true
                    }
                }
            }
        }
/* */
        if (tap_red == 0) {
            
            app.stage.removeChild(sprite_key_red0)
            app.stage.addChild(sprite_key_red0);
        }
        else {
            app.stage.removeChild(sprite_key_red0)
            if (tap_red_timer <= tap_timer) {
                app.stage.removeChild(sprite_key_red1);
                app.stage.addChild(sprite_key_red1);
                tap_red_timer += 1
            }
            else {
                tap_red = 0
                tap_red_timer = 0
            }

        }

        if (tap_blue == 0) {
            app.stage.removeChild(sprite_key_blue0)
            app.stage.addChild(sprite_key_blue0);
        }
        else {
            app.stage.removeChild(sprite_key_blue0)
            if (tap_blue_timer <= tap_timer) {
                app.stage.removeChild(sprite_key_blue1);
                app.stage.addChild(sprite_key_blue1);
                tap_blue_timer += 1
            }
            else {
                tap_blue = 0
                tap_blue_timer = 0
            }

        }

        if (tap_green == 0) {
            app.stage.removeChild(sprite_key_green0)
            app.stage.addChild(sprite_key_green0);
        }
        else {
            app.stage.removeChild(sprite_key_green0)
            if (tap_green_timer <= tap_timer) {
                app.stage.removeChild(sprite_key_green1);
                app.stage.addChild(sprite_key_green1);
                tap_green_timer += 1
            }
            else {
                tap_green = 0
                tap_green_timer = 0
            }

        }

        if (tap_yellow == 0) {
            app.stage.removeChild(sprite_key_yellow0)
            app.stage.addChild(sprite_key_yellow0);
        }
        else {
            app.stage.removeChild(sprite_key_yellow0)
            if (tap_yellow_timer <= tap_timer) {
                app.stage.removeChild(sprite_key_yellow1);
                app.stage.addChild(sprite_key_yellow1);
                tap_yellow_timer += 1
            }
            else {
                tap_yellow = 0
                tap_yellow_timer = 0
            }

        }
        if (tap_snow == 1) {
        
            if (snow_timer >= 200) {
                tap_snow = 0
                speed_bomb *=2
                speed_notes *= 2
                speed_star *= 2
                speed_snow *= 2
                queue_timer_m=2
                app.stage.removeChild(sprite_snow_effect)

            }
            else {
                app.stage.removeChild(sprite_snow_effect)
                app.stage.addChild(sprite_snow_effect)
                snow_timer += 1
            }
        }
        if (key_blood == 0) {
            blood_timer = 0
        }
        else {
            blood_timer += 1
            app.stage.removeChild(sprite_blood_effect)
            app.stage.addChild(sprite_blood_effect)
        }
        if (blood_timer >= 100) {
            key_blood = 0
            blood_timer = 0
            app.stage.removeChild(sprite_blood_effect)
        }


    }

}
let queue_timer=0

function falling() {
    if (key_random==false){
        for (var i=red_keys_id;i<queue_red.length;i++){
            if ((queue_timer+1>=queue_red[i]) & (queue_timer-1<=queue_red[i])){
                red_keys.push(PIXI.Sprite.from('./img/red_note.png'))     
                Sprite_Auto(red_keys[red_keys_id])
                red_keys[red_keys_id].x = 16 * app.renderer.width / 144 + 16 * app.renderer.width / 144 * 2 * 3
                app.stage.addChild(red_keys[red_keys_id]);
                red_keys_id+=1
            }
        }
        for (var i=blue_keys_id;i<queue_blue.length;i++){
            if ((queue_timer+1>=queue_blue[i]) & (queue_timer-1<=queue_blue[i])){
                blue_keys.push(PIXI.Sprite.from('./img/blue_note.png'))
                Sprite_Auto(blue_keys[blue_keys_id])
                blue_keys[blue_keys_id].x = 16 * app.renderer.width / 144 + 16 * app.renderer.width / 144 * 2 * 1
                app.stage.addChild(blue_keys[blue_keys_id]);
                blue_keys_id+=1
            }
        }
        for (var i=green_keys_id;i<queue_green.length;i++){
            if ((queue_timer+1>=queue_green[i]) & (queue_timer-1<=queue_green[i])){
                green_keys.push(PIXI.Sprite.from('./img/green_note.png'))
                Sprite_Auto(green_keys[green_keys_id])
                green_keys[green_keys_id].x = 16 * app.renderer.width / 144 + 16 * app.renderer.width / 144 * 2 * 2
                app.stage.addChild(green_keys[green_keys_id]);
                green_keys_id+=1
            }
        }
        for (var i=yellow_keys_id;i<queue_yellow.length;i++){
            if ((queue_timer+1>=queue_yellow[i]) & (queue_timer-1<=queue_yellow[i])){
                yellow_keys.push(PIXI.Sprite.from('./img/yellow_note.png'))
                Sprite_Auto(yellow_keys[yellow_keys_id])
                yellow_keys[yellow_keys_id].x = 16 * app.renderer.width / 144 + 16 * app.renderer.width / 144 * 2 * 0
                app.stage.addChild(yellow_keys[yellow_keys_id]);
                yellow_keys_id+=1
            }
        }
       /* */
        for (var i=stars_keys_id;i<queue_stars.length;i++){
            if ((queue_timer>=queue_stars[i][0]) & (queue_timer<=queue_stars[i][0])){
                stars_keys.push(PIXI.Sprite.from('./img/star.png'))
                stars_shine_keys.push(PIXI.Sprite.from('./img/star_shine.png'))
                Sprite_Auto(stars_keys[stars_keys_id])
                Sprite_Auto(stars_shine_keys[stars_shine_keys_id])
                stars_keys[stars_keys_id].x = 18 * app.renderer.width / 144 + 32 * app.renderer.width / 144 * queue_stars[i][1]
                stars_keys[stars_keys_id].y = 0
                stars_shine_keys[stars_shine_keys_id].x = stars_keys[stars_keys_id].x + stars_keys[stars_keys_id].width / 2 - stars_shine_keys[stars_shine_keys_id].width / 2
                stars_shine_keys[stars_shine_keys_id].y = stars_keys[stars_keys_id].y + stars_keys[stars_keys_id].height / 2 - stars_shine_keys[stars_shine_keys_id].height / 2
                app.stage.addChild(stars_shine_keys[stars_shine_keys_id]);
                app.stage.addChild(stars_keys[stars_keys_id]);
                stars_keys_id += 1
                stars_shine_keys_id += 1
            }    
        }
        /* */
        for (var i=bombs_keys_id;i<queue_bombs.length;i++){
            if ((queue_timer+1>=queue_bombs[i][0]) & (queue_timer-1<=queue_bombs[i][0])){
                bombs_keys.push(PIXI.Sprite.from('./img/bomb.png'))
                Sprite_Auto(bombs_keys[bombs_keys_id])
                bombs_keys[bombs_keys_id].x = 17 * app.renderer.width / 144 + 32 * app.renderer.width / 144 * queue_bombs[i][1]
                app.stage.addChild(bombs_keys[bombs_keys_id]);
                bombs_keys_id += 1
            }
            }
        for (var i=snow_keys_id;i<queue_snow.length;i++)  {
            if ((queue_timer+1>=queue_snow[i][0]) & (queue_timer-1<=queue_snow[i][0])){
                
                snow_keys.push(PIXI.Sprite.from('./img/snow.png'))
                Sprite_Auto(snow_keys[snow_keys_id])
                snow_keys[snow_keys_id].x = 18 * app.renderer.width / 144 + 32 * app.renderer.width / 144 * queue_snow[i][1]
                app.stage.addChild(snow_keys[snow_keys_id]);
                snow_keys_id += 1
            }
                
            }
    }
    else {
        if ((queue_timer>=current_queue_timer-1) & (queue_timer<=current_queue_timer+1)){
            let aa=get_random_a()
            if (aa=='red'){
                red_keys.push(PIXI.Sprite.from('./img/red_note.png'))     
                Sprite_Auto(red_keys[red_keys_id])
                red_keys[red_keys_id].x = 16 * app.renderer.width / 144 + 16 * app.renderer.width / 144 * 2 * 3
                app.stage.addChild(red_keys[red_keys_id]);
                red_keys_id+=1
            }
            else if (aa=='green') {
                green_keys.push(PIXI.Sprite.from('./img/green_note.png'))
                Sprite_Auto(green_keys[green_keys_id])
                green_keys[green_keys_id].x = 16 * app.renderer.width / 144 + 16 * app.renderer.width / 144 * 2 * 2
                app.stage.addChild(green_keys[green_keys_id]);
                green_keys_id+=1
            }
            else if (aa=='blue') {
                blue_keys.push(PIXI.Sprite.from('./img/blue_note.png'))
                Sprite_Auto(blue_keys[blue_keys_id])
                blue_keys[blue_keys_id].x = 16 * app.renderer.width / 144 + 16 * app.renderer.width / 144 * 2 * 1
                app.stage.addChild(blue_keys[blue_keys_id]);
                blue_keys_id+=1
            }
            else if (aa=='yellow') {
                yellow_keys.push(PIXI.Sprite.from('./img/yellow_note.png'))
                Sprite_Auto(yellow_keys[yellow_keys_id])
                yellow_keys[yellow_keys_id].x = 16 * app.renderer.width / 144 + 16 * app.renderer.width / 144 * 2 * 0
                app.stage.addChild(yellow_keys[yellow_keys_id]);
                yellow_keys_id+=1
            }
            else if (aa=='stars0') {
                stars_keys.push(PIXI.Sprite.from('./img/star.png'))
                stars_shine_keys.push(PIXI.Sprite.from('./img/star_shine.png'))
                Sprite_Auto(stars_keys[stars_keys_id])
                Sprite_Auto(stars_shine_keys[stars_shine_keys_id])
                stars_keys[stars_keys_id].x = 18 * app.renderer.width / 144 + 32 * app.renderer.width / 144 * 0
                stars_keys[stars_keys_id].y = 0
                stars_shine_keys[stars_shine_keys_id].x = stars_keys[stars_keys_id].x + stars_keys[stars_keys_id].width / 2 - stars_shine_keys[stars_shine_keys_id].width / 2
                stars_shine_keys[stars_shine_keys_id].y = stars_keys[stars_keys_id].y + stars_keys[stars_keys_id].height / 2 - stars_shine_keys[stars_shine_keys_id].height / 2
                app.stage.addChild(stars_shine_keys[stars_shine_keys_id]);
                app.stage.addChild(stars_keys[stars_keys_id]);
                stars_keys_id += 1
                stars_shine_keys_id += 1
            }
            else if (aa=='stars1') {
                stars_keys.push(PIXI.Sprite.from('./img/star.png'))
                stars_shine_keys.push(PIXI.Sprite.from('./img/star_shine.png'))
                Sprite_Auto(stars_keys[stars_keys_id])
                Sprite_Auto(stars_shine_keys[stars_shine_keys_id])
                stars_keys[stars_keys_id].x = 18 * app.renderer.width / 144 + 32 * app.renderer.width / 144 * 1
                stars_keys[stars_keys_id].y = 0
                stars_shine_keys[stars_shine_keys_id].x = stars_keys[stars_keys_id].x + stars_keys[stars_keys_id].width / 2 - stars_shine_keys[stars_shine_keys_id].width / 2
                stars_shine_keys[stars_shine_keys_id].y = stars_keys[stars_keys_id].y + stars_keys[stars_keys_id].height / 2 - stars_shine_keys[stars_shine_keys_id].height / 2
                app.stage.addChild(stars_shine_keys[stars_shine_keys_id]);
                app.stage.addChild(stars_keys[stars_keys_id]);
                stars_keys_id += 1
                stars_shine_keys_id += 1
            }
            else if (aa=='stars2') {
                stars_keys.push(PIXI.Sprite.from('./img/star.png'))
                stars_shine_keys.push(PIXI.Sprite.from('./img/star_shine.png'))
                Sprite_Auto(stars_keys[stars_keys_id])
                Sprite_Auto(stars_shine_keys[stars_shine_keys_id])
                stars_keys[stars_keys_id].x = 18 * app.renderer.width / 144 + 32 * app.renderer.width / 144 * 2
                stars_keys[stars_keys_id].y = 0
                stars_shine_keys[stars_shine_keys_id].x = stars_keys[stars_keys_id].x + stars_keys[stars_keys_id].width / 2 - stars_shine_keys[stars_shine_keys_id].width / 2
                stars_shine_keys[stars_shine_keys_id].y = stars_keys[stars_keys_id].y + stars_keys[stars_keys_id].height / 2 - stars_shine_keys[stars_shine_keys_id].height / 2
                app.stage.addChild(stars_shine_keys[stars_shine_keys_id]);
                app.stage.addChild(stars_keys[stars_keys_id]);
                stars_keys_id += 1
                stars_shine_keys_id += 1
            }
            else if (aa=='stars3') {
                stars_keys.push(PIXI.Sprite.from('./img/star.png'))
                stars_shine_keys.push(PIXI.Sprite.from('./img/star_shine.png'))
                Sprite_Auto(stars_keys[stars_keys_id])
                Sprite_Auto(stars_shine_keys[stars_shine_keys_id])
                stars_keys[stars_keys_id].x = 18 * app.renderer.width / 144 + 32 * app.renderer.width / 144 * 3
                stars_keys[stars_keys_id].y = 0
                stars_shine_keys[stars_shine_keys_id].x = stars_keys[stars_keys_id].x + stars_keys[stars_keys_id].width / 2 - stars_shine_keys[stars_shine_keys_id].width / 2
                stars_shine_keys[stars_shine_keys_id].y = stars_keys[stars_keys_id].y + stars_keys[stars_keys_id].height / 2 - stars_shine_keys[stars_shine_keys_id].height / 2
                app.stage.addChild(stars_shine_keys[stars_shine_keys_id]);
                app.stage.addChild(stars_keys[stars_keys_id]);
                stars_keys_id += 1
                stars_shine_keys_id += 1
            }
            else if (aa=='bombs0') {
                bombs_keys.push(PIXI.Sprite.from('./img/bomb.png'))
                Sprite_Auto(bombs_keys[bombs_keys_id])
                bombs_keys[bombs_keys_id].x = 17 * app.renderer.width / 144 + 32 * app.renderer.width / 144 * 0
                app.stage.addChild(bombs_keys[bombs_keys_id]);
                bombs_keys_id += 1
            }
            else if (aa=='bombs1') {
                bombs_keys.push(PIXI.Sprite.from('./img/bomb.png'))
                Sprite_Auto(bombs_keys[bombs_keys_id])
                bombs_keys[bombs_keys_id].x = 17 * app.renderer.width / 144 + 32 * app.renderer.width / 144 * 1
                app.stage.addChild(bombs_keys[bombs_keys_id]);
                bombs_keys_id += 1
            }
            else if (aa=='bombs2') {
                bombs_keys.push(PIXI.Sprite.from('./img/bomb.png'))
                Sprite_Auto(bombs_keys[bombs_keys_id])
                bombs_keys[bombs_keys_id].x = 17 * app.renderer.width / 144 + 32 * app.renderer.width / 144 * 2
                app.stage.addChild(bombs_keys[bombs_keys_id]);
                bombs_keys_id += 1
            }
            else if (aa=='bombs3') {
                bombs_keys.push(PIXI.Sprite.from('./img/bomb.png'))
                Sprite_Auto(bombs_keys[bombs_keys_id])
                bombs_keys[bombs_keys_id].x = 17 * app.renderer.width / 144 + 32 * app.renderer.width / 144 * 3
                app.stage.addChild(bombs_keys[bombs_keys_id]);
                bombs_keys_id += 1
            }
            else if (aa=='snow0') {
                snow_keys.push(PIXI.Sprite.from('./img/snow.png'))
                Sprite_Auto(snow_keys[snow_keys_id])
                snow_keys[snow_keys_id].x = 18 * app.renderer.width / 144 + 32 * app.renderer.width / 144 * 0
                app.stage.addChild(snow_keys[snow_keys_id]);
                snow_keys_id += 1
            }
            else if (aa=='snow1') {
                snow_keys.push(PIXI.Sprite.from('./img/snow.png'))
                Sprite_Auto(snow_keys[snow_keys_id])
                snow_keys[snow_keys_id].x = 18 * app.renderer.width / 144 + 32 * app.renderer.width / 144 * 1
                app.stage.addChild(snow_keys[snow_keys_id]);
                snow_keys_id += 1
            }
            else if (aa=='snow2') {
                snow_keys.push(PIXI.Sprite.from('./img/snow.png'))
                Sprite_Auto(snow_keys[snow_keys_id])
                snow_keys[snow_keys_id].x = 18 * app.renderer.width / 144 + 32 * app.renderer.width / 144 * 2
                app.stage.addChild(snow_keys[snow_keys_id]);
                snow_keys_id += 1
            }
            else if (aa=='snow3') {
                snow_keys.push(PIXI.Sprite.from('./img/snow.png'))
                Sprite_Auto(snow_keys[snow_keys_id])
                snow_keys[snow_keys_id].x = 18 * app.renderer.width / 144 + 32 * app.renderer.width / 144 *3
                app.stage.addChild(snow_keys[snow_keys_id]);
                snow_keys_id += 1
            }
            current_queue_timer+=(100*1)
            if (current_queue_timer>=current_survive_taps_need){
                current_survive_multi=1.1
                //current_survive_qu*=0.9
                speed_bomb*=current_survive_multi
                speed_star*=current_survive_multi
                speed_snow*=current_survive_multi
                speed_notes*=current_survive_multi
                current_survive_taps_need+=30*100
            }

        }
    }
    moving()
    }

let current_queue_timer=100
let alp_tap = 20
let alp_tap_dir = 1
let key_tap_continue = false
app.stage.addChild(sprite_tap_to_continue)
sprite_tap_to_continue.alpha = 0
let key_game_menu=true

let sprite_main_menu = PIXI.Sprite.from('./img/main_menu.png');
Sprite_Auto(sprite_main_menu)
let sprite_play_button = PIXI.Sprite.from('./img/play_button.png');
Sprite_Auto(sprite_play_button)
let queue_timer_m=2
function new_game(){
    if (key_load_music==true){
        console.log('new')
        menu_sprite=[]
        menu_sprite_id=0
        key_music_one_start==false
        key_music_one_1==false
        key_game_over=false
        key_win=false
        key_tap_continue=false
        key_blood=false
        tap_snow=0
        snow_timer=1000
        key_blood=0
        blood_timer=1000
        my_hp=5
        my_score=0
        my_stars=0
        queue_timer=0
        queue_timer_m=2
        red_keys_id=0
        blue_keys_id=0
        green_keys_id=0
        yellow_keys_id=0
        current_queue_timer=100
        bombs_keys_id=0
        stars_keys_id=0
        stars_shine_keys_id=0
        snow_keys_id=0
        current_survive_multi=1
        current_survive_taps_need=25*100
        current_survive_qu=1
        red_keys=[]
        green_keys=[]
        blue_keys=[]
        yellow_keys=[]
        stars_keys=[]
        stars_shine_keys=[]
        bombs_keys=[]
        snow_keys=[]
        
        
    
        //
    
        clear_screen()
        random_queue()
       // music_one()
        if (key_random==false){
            speed_bomb=def_speed_bomb
            speed_star=def_speed_star
            speed_notes=def_speed_notes
            speed_snow=def_speed_snow
        }
        else {
            speed_bomb=5
            speed_star=5
            speed_notes=5
            speed_snow=5
        }
        
        app.stage.removeChild(sprite_back)
        app.stage.addChild(sprite_back)
        app.stage.removeChild(sprite_black_top)
        app.stage.addChild(sprite_black_top)
        app.stage.removeChild(sprite_shiny_key)
        app.stage.addChild(sprite_shiny_key)
        app.stage.removeChild(sprite_borders)
        app.stage.addChild(sprite_borders)
    }
    
    }


let queue_red=[]
let queue_blue=[]
let queue_green=[]
let queue_yellow=[]

let queue_stars=[]
let queue_bombs=[]
let queue_snow=[]
let rate_blue=0
let rate_red=0
let rate_green=0
let rate_yellow=0
let rate_stars=0
let rate_bombs=0
let rate_snow=0

function get_random_a(){
    let a=getRandom(100)
    if ((a>=0) & (a<20)){
        return 'blue'
    }
    else if ((a>=20) & (a<40)){
        return 'red'
    }
    else if ((a>=40) & (a<60)){
        return 'green'
    }
    else if ((a>=60) & (a<80)){
        return 'yellow'
    }
    else if ((a>=80) & (a<83)){
        return 'stars0'
    }
    else if ((a>=83) & (a<86)){
        return 'stars1'
    }
    else if ((a>=86) & (a<89)){
        return 'stars2'
    }
    else if ((a>=89) & (a<92)){
        return 'stars3'
    }
    else if ((a>=92) & (a<93)){
        return 'bombs0'
    }
    else if ((a>=93) & (a<94)){
        return 'bombs1'
    }
    else if ((a>=94) & (a<95)){
        return 'bombs2'
    }
    else if ((a>=95) & (a<96)){
        return 'bombs3'
    }
    else if ((a>=96) & (a<97)){
        return 'snow0'
    }
    else if ((a>=97) & (a<98)){
        return 'snow1'
    }
    else if ((a>=98) & (a<99)){
        return 'snow2'
    }
    else if ((a>=99) & (a<100)){
        return 'snow3'
    }
    } 

let key_random=true
function random_queue(){
    queue_red=[]
    queue_blue=[]
    queue_green=[]
    queue_yellow=[]
    
    queue_stars=[]
    queue_bombs=[]
    queue_snow=[[],[],[],[],[],[],[],[],[],[]]
    queue_stars=[[],[],[],[],[],[],[],[],[],[]]
    queue_bombs=[[],[],[],[],[],[],[],[],[],[]]
    queue_snow=[[],[],[],[],[],[],[],[],[],[]]
    key_random=true
    max_queue_timer=999999999999999999999

    key_main_menu=false
}

function convert_tap_to_queue(taps,st){
    let qu_red=[]
    let qu_red1=st
    for (var i = 0; i<taps.length;i++){
        qu_red1+=taps[i]
        qu_red.push(Math.round(qu_red1))
    }

    return qu_red
}


function music_one(){
    let bpm=120
    if (key_main_menu == true){
        let bar1=235
        let bar1_2=bar1/2
        let bar1_4=bar1/4
        let bar1_8=bar1/8
        let taps=[100,bar1,bar1,bar1_4*3,bar1_4,bar1_2]
        let qq=convert_tap_to_queue(taps,0)
        let red_ids=[0,]
        let blue_ids=[2,4,]
        let green_ids=[1,5,]
        let yellow_ids=[3,]

        for (var i=0;i<red_ids.length;i++){
            queue_red.push(qq[red_ids[i]])
        }   
        for (var i=0;i<blue_ids.length;i++){
            queue_blue.push(qq[blue_ids[i]])
        } 
        for (var i=0;i<green_ids.length;i++){
            queue_green.push(qq[green_ids[i]])
        } 
        for (var i=0;i<yellow_ids.length;i++){
            queue_yellow.push(qq[yellow_ids[i]])
        } 
        let st=qq[qq.length-1]
        taps=[bar1_2,bar1_8*3,bar1_8*2,bar1_8*3,bar1_8*3,bar1_8*2,bar1_8*3,bar1_8*3,bar1_8*2,bar1_8*3,bar1_8*3,bar1_8*2]
        
        qq=convert_tap_to_queue(taps,st)
        red_ids=[0,10]
        blue_ids=[2,5,8]
        green_ids=[1,3,6,7,9]
        yellow_ids=[4,11]
        for (var i=0;i<red_ids.length;i++){
            queue_red.push(qq[red_ids[i]])
        }   
        for (var i=0;i<blue_ids.length;i++){
            queue_blue.push(qq[blue_ids[i]])
        } 
        for (var i=0;i<green_ids.length;i++){
            queue_green.push(qq[green_ids[i]])
        } 
        for (var i=0;i<yellow_ids.length;i++){
            queue_yellow.push(qq[yellow_ids[i]])
        } 

        st=qq[qq.length-1]
        taps=[bar1_2,bar1_8*3,bar1_8*2,bar1_8*3,bar1_8*3,bar1_8*2,bar1_8*3,bar1_8*3,bar1_8*2,bar1_8*3,bar1_8*3,bar1_8*2]
        
        qq=convert_tap_to_queue(taps,st)
        red_ids=[0,10]
        blue_ids=[2,5,8]
        green_ids=[1,3,6,7,9]
        yellow_ids=[4,11]
        for (var i=0;i<red_ids.length;i++){
            queue_red.push(qq[red_ids[i]])
        }   
        for (var i=0;i<blue_ids.length;i++){
            queue_blue.push(qq[blue_ids[i]])
        } 
        for (var i=0;i<green_ids.length;i++){
            queue_green.push(qq[green_ids[i]])
        } 
        for (var i=0;i<yellow_ids.length;i++){
            queue_yellow.push(qq[yellow_ids[i]])
        } 

        st=qq[qq.length-1]
        taps=[bar1_2,bar1_8*2,bar1_8,bar1_8*2,bar1_8,bar1_8*2,bar1_8*2,bar1_8,bar1_8*2,bar1_8,bar1_8*2,bar1_8*2,bar1_8,bar1_8*2,bar1_8,bar1_8*2,bar1_8*2,bar1_8,bar1_8*2,bar1_8]
        
        qq=convert_tap_to_queue(taps,st)
        red_ids=[0,9,11,15,19]
        blue_ids=[2,4,6,8,13,17]
        green_ids=[1,5,10,14,18]
        yellow_ids=[3,7,12,16]
        for (var i=0;i<red_ids.length;i++){
            queue_red.push(qq[red_ids[i]])
        }   
        for (var i=0;i<blue_ids.length;i++){
            queue_blue.push(qq[blue_ids[i]])
        } 
        for (var i=0;i<green_ids.length;i++){
            queue_green.push(qq[green_ids[i]])
        } 
        for (var i=0;i<yellow_ids.length;i++){
            queue_yellow.push(qq[yellow_ids[i]])
        } 

        st=qq[qq.length-1]
        taps=[bar1_4+bar1_8,bar1_8,bar1_8,bar1_8*2,bar1_8,bar1_8*2,bar1_8*2,bar1_8,bar1_8*2,bar1_8,bar1_8*2,bar1_8*2,bar1_8,bar1_8*2,bar1_8,bar1_8*2,bar1_8*2,bar1_8,bar1_8*2,bar1_8]
        
        qq=convert_tap_to_queue(taps,st)
        red_ids=[0,9,11,15,19]
        blue_ids=[2,4,6,8,13,17]
        green_ids=[1,5,10,14,18]
        yellow_ids=[3,7,12,16]
        for (var i=0;i<red_ids.length;i++){
            queue_red.push(qq[red_ids[i]])
        }   
        for (var i=0;i<blue_ids.length;i++){
            queue_blue.push(qq[blue_ids[i]])
        } 
        for (var i=0;i<green_ids.length;i++){
            queue_green.push(qq[green_ids[i]])
        } 
        for (var i=0;i<yellow_ids.length;i++){
            queue_yellow.push(qq[yellow_ids[i]])
        } 

        st=qq[qq.length-1]
        taps=[bar1_2+bar1_4,bar1_8,bar1_8,bar1_8*2,bar1_8,bar1_8,
            bar1_8*2,bar1_8,bar1_8,bar1_8*2,bar1_8*2,
            bar1_8*2,bar1_8,bar1_8*2,bar1_8,bar1_8*2,
            bar1_8*2,bar1_8,bar1_8*2,bar1_8,bar1_8*2,
            bar1_8*2,bar1_8,bar1_8,bar1_8*2,bar1_8,bar1_8,
            bar1_8*2,bar1_8,bar1_8,bar1_8*2,bar1_8*2,
            bar1_8,bar1_8,bar1_8,bar1_8,bar1_8,bar1_8,bar1_8,bar1_8,
            bar1_8,bar1_8,bar1_8,bar1_8,bar1_8,bar1_8*2]
        //32 - до цифры 7, потом чередованием
        qq=convert_tap_to_queue(taps,st)
        red_ids=[2,5,8,14,16,20,26,31,33,35,40]
        blue_ids=[3,7,6,10,11,15,21,24,28,32,34,41,43]
        green_ids=[0,4,9,12,17,22,25,27,30,36,38,42,45]
        yellow_ids=[1,13,18,19,23,29,37,39,44]

        for (var i=0;i<red_ids.length;i++){
            queue_red.push(qq[red_ids[i]])
        }   
        for (var i=0;i<blue_ids.length;i++){
            queue_blue.push(qq[blue_ids[i]])
        } 
        for (var i=0;i<green_ids.length;i++){
            queue_green.push(qq[green_ids[i]])
        } 
        for (var i=0;i<yellow_ids.length;i++){
            queue_yellow.push(qq[yellow_ids[i]])
        } 

        st=qq[qq.length-1]
        taps=[bar1_8,bar1_8*3,bar1_8*2,bar1_8*3,bar1_8*3,bar1_8*2,bar1_8*3,bar1_8*3,bar1_8*2,bar1_8*3,bar1_8*3,bar1_8*2]
        
        qq=convert_tap_to_queue(taps,st)
        red_ids=[0,10]
        blue_ids=[2,5,8]
        green_ids=[1,3,6,7,9]
        yellow_ids=[4,11]
        for (var i=0;i<red_ids.length;i++){
            queue_red.push(qq[red_ids[i]])
        }   
        for (var i=0;i<blue_ids.length;i++){
            queue_blue.push(qq[blue_ids[i]])
        } 
        for (var i=0;i<green_ids.length;i++){
            queue_green.push(qq[green_ids[i]])
        } 
        for (var i=0;i<yellow_ids.length;i++){
            queue_yellow.push(qq[yellow_ids[i]])
        } 

        st=qq[qq.length-1]
        taps=[bar1_2,bar1_8*3,bar1_8*2,bar1_8*3,bar1_8*3,bar1_8*2,bar1_8*3,bar1_8*3,bar1_8*2,bar1_8*3,bar1_8*3,bar1_8*2]
        
        qq=convert_tap_to_queue(taps,st)
        red_ids=[0,10]
        blue_ids=[2,5,8]
        green_ids=[1,3,6,7,9]
        yellow_ids=[4,11]
        for (var i=0;i<red_ids.length;i++){
            queue_red.push(qq[red_ids[i]])
        }   
        for (var i=0;i<blue_ids.length;i++){
            queue_blue.push(qq[blue_ids[i]])
        } 
        for (var i=0;i<green_ids.length;i++){
            queue_green.push(qq[green_ids[i]])
        } 
        for (var i=0;i<yellow_ids.length;i++){
            queue_yellow.push(qq[yellow_ids[i]])
        } 
        queue_snow=[]
        queue_stars=[]
        queue_bombs=[]
        queue_snow=[]

        queue_stars.push([9000,0])
        queue_stars.push([9000,3])
        queue_stars.push([9050,0])
        queue_stars.push([9050,3])
        queue_stars.push([9100,1])
        queue_stars.push([9100,2])
        queue_stars.push([9150,0])
        queue_stars.push([9150,3])

        queue_stars.push([9200,1])
        queue_stars.push([9200,2])
        queue_stars.push([9250,3])
        queue_stars.push([9250,2])
        queue_stars.push([9300,1])
        queue_stars.push([9300,0])
        queue_stars.push([9350,1])
        queue_stars.push([9350,2])

        bombs_keys_id=0
        stars_keys_id=0
        stars_shine_keys_id=0
        snow_keys_id=0
        console.log(queue_stars)
        key_random=false
        max_queue_timer=0
        for (let i=0;i<queue_stars.length;i++){
            max_queue_timer=Math.max(max_queue_timer,queue_stars[i][0])
        }
        console.log(max_queue_timer)
        key_main_menu=false
    }
    
    
}
let menu_sprite=[]
let menu_sprite_id=0

function menu_falling(){
    let aa=get_random_a()
    if (aa=='red'){
        menu_sprite.push(PIXI.Sprite.from('./img/red_note.png'))     
        Sprite_Auto(menu_sprite[menu_sprite_id])
        menu_sprite[menu_sprite_id].x = Math.round(16 * app.screen.width / 144 + 16 * app.renderer.width / 144 * 2* getRandom(4))
        app.stage.addChild(menu_sprite[menu_sprite_id]);
    }
    else  if (aa=='green'){
        menu_sprite.push(PIXI.Sprite.from('./img/green_note.png'))     
        Sprite_Auto(menu_sprite[menu_sprite_id])
        menu_sprite[menu_sprite_id].x = Math.round(16 * app.screen.width / 144 + 16 * app.renderer.width / 144 * 2 * getRandom(4))
        app.stage.addChild(menu_sprite[menu_sprite_id]);
    }
    else  if (aa=='blue'){
        menu_sprite.push(PIXI.Sprite.from('./img/blue_note.png'))     
        Sprite_Auto(menu_sprite[menu_sprite_id])
        menu_sprite[menu_sprite_id].x = Math.round(16 * app.screen.width / 144 + 16 * app.renderer.width / 144 * 2 * getRandom(4))
        app.stage.addChild(menu_sprite[menu_sprite_id]);
    }
    else  if (aa=='yellow'){
        menu_sprite.push(PIXI.Sprite.from('./img/yellow_note.png'))     
        Sprite_Auto(menu_sprite[menu_sprite_id])
        menu_sprite[menu_sprite_id].x = Math.round(16 * app.screen.width / 144 + 16 * app.renderer.width / 144 * 2 * getRandom(4))
        app.stage.addChild(menu_sprite[menu_sprite_id]);
    }
    else if (aa.includes('stars')) {
        menu_sprite.push(PIXI.Sprite.from('./img/star.png'))
        Sprite_Auto(menu_sprite[menu_sprite_id])
        menu_sprite[menu_sprite_id].x = Math.round(18 * app.screen.width / 144 + 32 * app.renderer.width / 144 * getRandom(4))
        app.stage.addChild(menu_sprite[menu_sprite_id]);
    }
    else if (aa.includes('bombs')) {
        menu_sprite.push(PIXI.Sprite.from('./img/bomb.png'))
        Sprite_Auto(menu_sprite[menu_sprite_id])
        menu_sprite[menu_sprite_id].x = Math.round(17 * app.screen.width / 144 + 32 * app.renderer.width / 144 * getRandom(4))
        app.stage.addChild(menu_sprite[menu_sprite_id]);
    }
    else if (aa.includes('snow')) {
        menu_sprite.push(PIXI.Sprite.from('./img/snow.png'))
        Sprite_Auto(menu_sprite[menu_sprite_id])
        menu_sprite[menu_sprite_id].x = Math.round(18 * app.screen.width / 144 + 32 * app.renderer.width / 144 * getRandom(4))
        app.stage.addChild(menu_sprite[menu_sprite_id]);
        
    }
    menu_sprite[menu_sprite_id].alpha=0.33
    menu_sprite_id += 1
}
        
let max_queue_timer=0
function clear_screen(){
    for (var i = app.stage.children.length - 1; i >= 0; i--) {	app.stage.removeChild(app.stage.children[i]);};

    for (let i=0;i<queue_red.length;i++){
        max_queue_timer=Math.max(max_queue_timer,queue_red[i])
    }
    for (let i=0;i<queue_blue.length;i++){
        max_queue_timer=Math.max(max_queue_timer,queue_blue[i])
    }
    for (let i=0;i<queue_green.length;i++){
        max_queue_timer=Math.max(max_queue_timer,queue_green[i])
    }
    for (let i=0;i<queue_yellow.length;i++){
        max_queue_timer=Math.max(max_queue_timer,queue_yellow[i])
    }
    for (let i=0;i<queue_stars.length;i++){
        max_queue_timer=Math.max(max_queue_timer,queue_stars[i][0])
    }
    for (let i=0;i<queue_bombs.length;i++){
        max_queue_timer=Math.max(max_queue_timer,queue_bombs[i][0])
    }
    for (let i=0;i<queue_snow.length;i++){
        max_queue_timer=Math.max(max_queue_timer,queue_snow[i][0])
    }
}
let key_music_one_1=false
let key_load_music=false
let queue_menu_timer=0
let current_queue_menu_timer=100
PIXI.sound.play('geo8')
PIXI.sound.stop('geo8')
PIXI.Assets.load('./geo_8.mp3').then(() =>{key_load_music=true})
sprite_play_button.eventMode = 'static';
sprite_play_button.on('pointerdown', new_game)

let menu_added=false
app.ticker.add(() => {

        if (key_main_menu == true) {
            if (menu_added==false){app.stage.removeChild(sprite_main_menu); app.stage.addChild(sprite_main_menu); menu_added=true}
            if (queue_menu_timer==100){
                menu_falling()
                
                queue_menu_timer=0
                console.log(100)
            }
            else{
                queue_menu_timer+=1
                for (var i=0;i<menu_sprite_id;i++){
                    if (menu_sprite[i]){
                        menu_sprite[i].y+=5;
                        if (menu_sprite[i].y>=app.screen.height){
                            delete menu_sprite[i]
                            app.stage.removeChild(menu_sprite[i])
                            
                            console.log('delete'+i)
                        }
                        
                    }
                    
                    
                }
            }
            app.stage.removeChild(sprite_play_button)
            sprite_play_button.x=app.screen.width/2-sprite_play_button.width/2
            sprite_play_button.y=app.screen.height/2-sprite_play_button.height/2
            app.stage.addChild(sprite_play_button)
            
        }
        else if (key_main_menu == false) {

            if ((key_game_over == false) & (key_win==false)){
                queue_timer+=queue_timer_m
                falling()
                if ((key_music_one_start==true) & (key_music_one_1==false)){

                    key_music_one_1=true
                    PIXI.sound.play('geo8')
                    
                }

            }
            else if ((key_game_over == false) & (key_win==true)){
                if (key_tap_continue == false) {
                    app.stage.removeChild(sprite_game_win)
                    sprite_game_win.x=app.screen.width/2-sprite_game_win.width/2
                    sprite_game_win.y=app.screen.height/2-sprite_game_win.height/2
                    app.stage.addChild(sprite_game_win)
                    app.stage.removeChild(basicText3)
                    app.stage.removeChild(basicText4)
                    basicText3.text=('Score: ' + String(my_score));
                    basicText4.text=('Stars: ' + String(my_stars));
                    basicText3.x=app.screen.width/2-basicText3.width/2
                    basicText3.y=app.screen.height/2-basicText3.height/2
                    basicText4.x=app.screen.width/2-basicText4.width/2
                    basicText4.y=app.screen.height/2+basicText4.height
                    
                    app.stage.addChild(basicText3)
                    app.stage.addChild(basicText4)
                    app.stage.removeChild(sprite_tap_to_continue)
                    app.stage.addChild(sprite_tap_to_continue)

                    if ((alp_tap < 70) & (alp_tap_dir == 1)) {
                        alp_tap += alp_tap_dir
                        sprite_tap_to_continue.alpha = alp_tap / 100
                        if (alp_tap == 70) {
                            alp_tap_dir *= -1
                        }
                    }
                    if ((alp_tap > 20) & (alp_tap_dir == -1)) {
                        alp_tap += alp_tap_dir
                        sprite_tap_to_continue.alpha = alp_tap / 100
                        if (alp_tap == 20) {
                            alp_tap_dir *= -1
                        }
                    }

                }
                else {
                    PIXI.sound.stop('geo8')
                    key_main_menu=true
                    menu_added=false
                }
            }
            else if (key_game_over==true) {
                if (key_tap_continue == false) {
                    
                    app.stage.removeChild(sprite_game_over)
                    app.stage.addChild(sprite_game_over)

                    app.stage.removeChild(sprite_tap_to_continue)
                    app.stage.addChild(sprite_tap_to_continue)

                    if ((alp_tap < 70) & (alp_tap_dir == 1)) {
                        alp_tap += alp_tap_dir
                        sprite_tap_to_continue.alpha = alp_tap / 100
                        if (alp_tap == 70) {
                            alp_tap_dir *= -1
                            }
                        }
                    if ((alp_tap > 20) & (alp_tap_dir == -1)) {
                        alp_tap += alp_tap_dir
                        sprite_tap_to_continue.alpha = alp_tap / 100
                        if (alp_tap == 20) {
                            alp_tap_dir *= -1
                        }
                    }

                }
                else {
                    PIXI.sound.stop('geo8')
                    key_main_menu=true
                    menu_added=false
                    key_music_one_1=false
                    key_music_one_start=false
                }
            }
        }
    }
);

