

let tg = window.Telegram.WebApp;
tg.expand();
tg.disableVerticalSwipes()
//tg.viewportHeight
let tgid=window.Telegram.WebApp.initDataUnsafe.user.id
let f_name=window.Telegram.WebApp.initDataUnsafe.user.first_name

const app = new PIXI.Application();
await app.init({ resizeTo: window, autoDensity: true});
let ava=''


/*
await PIXI.Assets.load('./img/loading.png')
let sprite_loading=PIXI.Sprite.from('./img/loading.png')
Sprite_Auto(sprite_loading)
app.stage.addChild(sprite_loading)
*/
let domen='https://yamsgame.up.railway.app/'
await PIXI.Assets.load(domen+'/'+(tgid)+'.png')
let sprite_avatar=PIXI.Sprite.from(domen+'/'+(tgid)+'.png')


//await PIXI.Assets.load(domen+'/'+tgid+'.png').then(()=>{next_l+=1})



PIXI.sound.add('geo8', './geo_8.mp3');
PIXI.sound.add('1', './1.mp3');
PIXI.sound.add('2', './2.mp3');
PIXI.sound.add('3', './3.mp3');
PIXI.sound.add('4', './4.mp3');


document.body.appendChild(app.canvas);
let next_l=0
await PIXI.Assets.load('./img/star_shine.png').then(()=>{next_l+=1})
await PIXI.Assets.load('./img/star.png').then(()=>{next_l+=1})
await PIXI.Assets.load('./img/background.png').then(()=>{next_l+=1})
await PIXI.Assets.load('./img/blood_effect.png').then(()=>{next_l+=1})
await PIXI.Assets.load('./img/snow_effect.png').then(()=>{next_l+=1})
await PIXI.Assets.load('./img/shiny_key.png').then(()=>{next_l+=1})
await PIXI.Assets.load('./img/borders.png').then(()=>{next_l+=1})
await PIXI.Assets.load('./img/key_red0.png').then(()=>{next_l+=1})
await PIXI.Assets.load('./img/key_green0.png').then(()=>{next_l+=1})
await PIXI.Assets.load('./img/key_blue0.png').then(()=>{next_l+=1})
await PIXI.Assets.load('./img/key_yellow0.png').then(()=>{next_l+=1})
await PIXI.Assets.load('./img/key_red1.png').then(()=>{next_l+=1})
await PIXI.Assets.load('./img/key_green1.png').then(()=>{next_l+=1})
await PIXI.Assets.load('./img/key_blue1.png').then(()=>{next_l+=1})
await PIXI.Assets.load('./img/key_yellow1.png').then(()=>{next_l+=1})
await PIXI.Assets.load('./img/tap_to_continue.png').then(()=>{next_l+=1})
await PIXI.Assets.load('./img/game_over.png').then(()=>{next_l+=1})
await PIXI.Assets.load('./img/black_top.png').then(()=>{next_l+=1})
await PIXI.Assets.load('./img/star_score.png').then(()=>{next_l+=1})
await PIXI.Assets.load('./img/blue_note.png').then(()=>{next_l+=1})
await PIXI.Assets.load('./img/red_note.png').then(()=>{next_l+=1})
await PIXI.Assets.load('./img/green_note.png').then(()=>{next_l+=1})
await PIXI.Assets.load('./img/yellow_note.png').then(()=>{next_l+=1})
await PIXI.Assets.load('./img/bomb.png').then(()=>{next_l+=1})
await PIXI.Assets.load('./img/snow.png').then(()=>{next_l+=1})
await PIXI.Assets.load('./img/main_menu.png').then(()=>{next_l+=1})
await PIXI.Assets.load('./img/play_button.png').then(()=>{next_l+=1})
await PIXI.Assets.load('./img/side_tiles.png').then(()=>{next_l+=1})
await PIXI.Assets.load('./yoster.ttf').then(()=>{next_l+=1})
await PIXI.Assets.load('./PIXY.ttf').then(()=>{next_l+=1})
await PIXI.Assets.load('./img/game_win.png').then(()=>{next_l+=1})
await PIXI.Assets.load('./img/button_melodies.png').then(()=>{next_l+=1})
await PIXI.Assets.load('./img/button_endless.png').then(()=>{next_l+=1})
await PIXI.Assets.load('./img/button_duels.png').then(()=>{next_l+=1})
await PIXI.Assets.load('./img/button_duels1.png').then(()=>{next_l+=1})
await PIXI.Assets.load('./img/button_endless_hard.png').then(()=>{next_l+=1})
await PIXI.Assets.load('./img/profile_frame.png').then(()=>{next_l+=1})
await PIXI.Assets.load('./img/frame_avatar.png').then(()=>{next_l+=1});
await PIXI.Assets.load('./img/but0.png').then(()=>{next_l+=1});
await PIXI.Assets.load('./img/but1.png').then(()=>{next_l+=1});
await PIXI.Assets.load('./img/background_loc.png').then(()=>{next_l+=1});
await PIXI.Assets.load('./img/borders_loc.png').then(()=>{next_l+=1});
await PIXI.Assets.load('./img/flying_heart.png').then(()=>{next_l+=1});
await PIXI.Assets.load('./img/cup.png')
await PIXI.Assets.load('./img/leaderboard.png')
await PIXI.Assets.load('./img/lead10.png')
await PIXI.Assets.load('./img/lead11.png')
await PIXI.Assets.load('./img/lead20.png')
await PIXI.Assets.load('./img/lead21.png')
await PIXI.Assets.load('./img/lead30.png')
await PIXI.Assets.load('./img/lead31.png')

let sprite_cup=PIXI.Sprite.from('./img/cup.png')
Sprite_Auto(sprite_cup)
let sprite_lead=PIXI.Sprite.from('./img/leaderboard.png')
Sprite_Auto(sprite_lead)
let sprite_lead10=PIXI.Sprite.from('./img/lead10.png')
Sprite_Auto(sprite_lead10)
let sprite_lead11=PIXI.Sprite.from('./img/lead11.png')
Sprite_Auto(sprite_lead11)
let sprite_lead20=PIXI.Sprite.from('./img/lead20.png')
Sprite_Auto(sprite_lead20)
let sprite_lead21=PIXI.Sprite.from('./img/lead21.png')
Sprite_Auto(sprite_lead21)
let sprite_lead30=PIXI.Sprite.from('./img/lead30.png')
Sprite_Auto(sprite_lead30)
let sprite_lead31=PIXI.Sprite.from('./img/lead31.png')
Sprite_Auto(sprite_lead31)

sprite_lead.x=0
sprite_lead.y=app.screen.height*1/6

sprite_lead10.x=0
sprite_lead10.y=sprite_lead.y+sprite_lead.height/10
sprite_lead11.x=0
sprite_lead11.y=sprite_lead.y+sprite_lead.height/10

sprite_lead20.x=sprite_lead10.x+sprite_lead10.width
sprite_lead20.y=sprite_lead.y+sprite_lead.height/10
sprite_lead21.x=sprite_lead10.x+sprite_lead10.width
sprite_lead21.y=sprite_lead.y+sprite_lead.height/10

sprite_lead30.x=sprite_lead20.x+sprite_lead20.width
sprite_lead30.y=sprite_lead.y+sprite_lead.height/10
sprite_lead31.x=sprite_lead20.x+sprite_lead20.width
sprite_lead31.y=sprite_lead.y+sprite_lead.height/10
let key_leaderboard=false


let sprite_avatar_frame=PIXI.Sprite.from('./img/frame_avatar.png')
Sprite_Auto(sprite_avatar_frame)
let sprite_loc_back=PIXI.Sprite.from('./img/background_loc.png')
Sprite_Auto(sprite_loc_back)
let sprite_loc_borders=PIXI.Sprite.from('./img/borders_loc.png')
Sprite_Auto(sprite_loc_borders)
sprite_avatar_frame.x=10
sprite_avatar_frame.y=10

sprite_avatar.width=sprite_avatar_frame.width-6
sprite_avatar.height=sprite_avatar_frame.height-6
sprite_avatar.x=sprite_avatar_frame.x+3
sprite_avatar.y=sprite_avatar_frame.y+3

let sprite_game_win=PIXI.Sprite.from('./img/game_win.png')
Sprite_Auto(sprite_game_win)
sprite_game_win.tint=0xeffac4;

let sprite_button_melodies=PIXI.Sprite.from('./img/button_melodies.png')
Sprite_Auto(sprite_button_melodies)
let sprite_button_endless=PIXI.Sprite.from('./img/button_endless.png')
Sprite_Auto(sprite_button_endless)
let sprite_button_duels=PIXI.Sprite.from('./img/button_duels.png')
Sprite_Auto(sprite_button_duels)
let sprite_button_duels1=PIXI.Sprite.from('./img/button_duels1.png')
Sprite_Auto(sprite_button_duels1)
let sprite_button_hardmode=PIXI.Sprite.from('./img/button_endless_hard.png')
Sprite_Auto(sprite_button_hardmode)
let sprite_but0=PIXI.Sprite.from('./img/but0.png')
Sprite_Auto(sprite_but0)
let sprite_but1=PIXI.Sprite.from('./img/but1.png')
Sprite_Auto(sprite_but1)
let key_duels=false
let key_hardmode=false
let key_hardmode_button=1
let duels_ti=0
function Sprite_Auto(sprite1) {
    sprite1.width = sprite1.width * (app.screen.width / 720)
    sprite1.height = sprite1.height * (app.screen.height / 1280)
}

let key_music_one_start=false
//back
let sprite_back = PIXI.Sprite.from('./img/background.png');
Sprite_Auto(sprite_back)
//app.stage.addChild(sprite_back);

//blood_effect

let sprite_blood_effect = PIXI.Sprite.from('./img/blood_effect.png');
Sprite_Auto(sprite_blood_effect)
sprite_blood_effect.tint=0x9e270d;


//snow_effect

let sprite_snow_effect = PIXI.Sprite.from('./img/snow_effect.png');
Sprite_Auto(sprite_snow_effect)
//sprite_snow_effect.tint=0xc4f8fa;

//shiny_aroung_keys

let sprite_shiny_key = PIXI.Sprite.from('./img/shiny_key.png');
Sprite_Auto(sprite_shiny_key)
//app.stage.addChild(sprite_shiny_key);

//borders

let sprite_borders = PIXI.Sprite.from('./img/borders.png');
Sprite_Auto(sprite_borders)
//app.stage.addChild(sprite_borders);

//keys

let sprite_key_red0 = PIXI.Sprite.from('./img/key_red0.png');
let sprite_key_red1 = PIXI.Sprite.from('./img/key_red1.png');
Sprite_Auto(sprite_key_red0)
Sprite_Auto(sprite_key_red1)
sprite_key_red0.x = 40 * (app.screen.width / 720) + sprite_key_red0.width * 3
sprite_key_red0.y = app.screen.height - sprite_key_red0.height
sprite_key_red1.x = 40 * (app.screen.width / 720) + sprite_key_red1.width * 3
sprite_key_red1.y = app.screen.height - sprite_key_red1.height
//app.stage.addChild(sprite_key_red0);

let sprite_key_green0 = PIXI.Sprite.from('./img/key_green0.png');
let sprite_key_green1 = PIXI.Sprite.from('./img/key_green1.png');
Sprite_Auto(sprite_key_green0)
Sprite_Auto(sprite_key_green1)
sprite_key_green0.x = 40 * (app.screen.width / 720) + sprite_key_green0.width * 2
sprite_key_green0.y = app.screen.height - sprite_key_green0.height
sprite_key_green1.x = 40 * (app.screen.width / 720) + sprite_key_green1.width * 2
sprite_key_green1.y = app.screen.height - sprite_key_green1.height
//app.stage.addChild(sprite_key_green0);

let sprite_key_blue0 = PIXI.Sprite.from('./img/key_blue0.png');
let sprite_key_blue1 = PIXI.Sprite.from('./img/key_blue1.png');
Sprite_Auto(sprite_key_blue0)
Sprite_Auto(sprite_key_blue1)
sprite_key_blue0.x = 40 * (app.screen.width / 720) + sprite_key_blue0.width * 1
sprite_key_blue0.y = app.screen.height - sprite_key_blue0.height
sprite_key_blue1.x = 40 * (app.screen.width / 720) + sprite_key_blue1.width * 1
sprite_key_blue1.y = app.screen.height - sprite_key_blue1.height
//app.stage.addChild(sprite_key_blue0);

let sprite_key_yellow0 = PIXI.Sprite.from('./img/key_yellow0.png');
let sprite_key_yellow1 = PIXI.Sprite.from('./img/key_yellow1.png');
Sprite_Auto(sprite_key_yellow0)
Sprite_Auto(sprite_key_yellow1)
sprite_key_yellow0.x = 40 * (app.screen.width / 720) + sprite_key_yellow0.width * 0
sprite_key_yellow0.y = app.screen.height - sprite_key_yellow0.height
sprite_key_yellow1.x = 40 * (app.screen.width / 720) + sprite_key_yellow1.width * 0
sprite_key_yellow1.y = app.screen.height - sprite_key_yellow1.height
//app.stage.addChild(sprite_key_yellow0);

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
                my_taps+=1
                if (key_random==false){
                    key_music_one_start=true
                    if (queue_red[i][0]>=max_queue_timer){
                        key_win=true
                    }
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
                my_collect_stars+=1
                if (key_random==false){
                    key_music_one_start=true
                    if (queue_stars[i][0]>=max_queue_timer){
                        key_win=true
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
                if (key_random==false){
                    key_music_one_start=true
                    if (queue_bombs[i][0]>=max_queue_timer){
                        key_win=true
                    }
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
                if (key_random==false){
                    key_music_one_start=true
                    if (queue_snow[i][0]>=max_queue_timer){
                        key_win=true
                    }
                }
            }
        }
    }
    for (let i = 0; i < heart_keys.length; i++) {
        if (heart_keys[i]) {
            if ((heart_keys[i].y + heart_keys[i].height >= app.screen.height - sprite_key_red0.height) & (heart_keys[i].x >= sprite_key_red0.x) & (heart_keys[i].x <= sprite_key_red0.x + sprite_key_red0.width)) {
                app.stage.removeChild(heart_keys[i]);
                delete heart_keys[i]
                if (my_hp<5){
                    my_hp += 1
                }
                if (key_random==false){
                    key_music_one_start=true
                }
            }
        }
    }
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
                my_taps+=1
                if (key_random==false){
                    key_music_one_start=true
                    if (queue_green[i][0]>=max_queue_timer){
                        key_win=true
                    }
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
                my_collect_stars+=1
                if (key_random==false){
                    key_music_one_start=true
                    if (queue_stars[i][0]>=max_queue_timer){
                        key_win=true
                    }
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
                if (key_random==false){
                    key_music_one_start=true
                    if (queue_bombs[i][0]>=max_queue_timer){
                        key_win=true
                    }
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
                if (key_random==false){
                    key_music_one_start=true
                    if (queue_snow[i][0]>=max_queue_timer){
                        key_win=true
                    }
                }
            }
        }
    }
    for (let i = 0; i < heart_keys.length; i++) {
        if (heart_keys[i]) {
            if ((heart_keys[i].y + heart_keys[i].height >= app.screen.height - sprite_key_green0.height) & (heart_keys[i].x >= sprite_key_green0.x) & (heart_keys[i].x <= sprite_key_green0.x + sprite_key_green0.width)) {
                app.stage.removeChild(heart_keys[i]);
                delete heart_keys[i]
                if (my_hp<5){
                    my_hp += 1
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
                my_taps+=1
                if (key_random==false){
                    key_music_one_start=true
                    if (queue_blue[i][0]>=max_queue_timer){
                        key_win=true
                    }
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
                my_collect_stars+=1
                if (key_random==false){
                    key_music_one_start=true
                    if (queue_stars[i][0]>=max_queue_timer){
                        key_win=true
                    }
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
                if (key_random==false){
                    key_music_one_start=true
                    if (queue_bombs[i][0]>=max_queue_timer){
                        key_win=true
                    }
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
                if (key_random==false){
                    key_music_one_start=true
                    if (queue_now[i][0]>=max_queue_timer){
                        key_win=true
                    }
                }
            }
        }
    }
    for (let i = 0; i < heart_keys.length; i++) {
        if (heart_keys[i]) {
            if ((heart_keys[i].y + heart_keys[i].height >= app.screen.height - sprite_key_blue0.height) & (heart_keys[i].x >= sprite_key_blue0.x) & (heart_keys[i].x <= sprite_key_blue0.x + sprite_key_blue0.width)) {
                app.stage.removeChild(heart_keys[i]);
                delete heart_keys[i]
                if (my_hp<5){
                    my_hp += 1
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
                my_taps+=1
                if (key_random==false){
                    key_music_one_start=true
                    if (queue_yellow[i][0]>=max_queue_timer){
                        key_win=true
                    }
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
                my_collect_stars+=1
                if (key_random==false){
                    key_music_one_start=true
                    if (queue_stars[i][0]>=max_queue_timer){
                        key_win=true
                    }
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
                    if (key_random==false){
                        key_music_one_start=true
                        if (queue_bombs[i][0]>=max_queue_timer){
                            key_win=true
                        }
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
    for (let i = 0; i < heart_keys.length; i++) {
        if (heart_keys[i]) {
            if ((heart_keys[i].y + heart_keys[i].height >= app.screen.height - sprite_key_yellow0.height) & (heart_keys[i].x >= sprite_key_yellow0.x) & (heart_keys[i].x <= sprite_key_yellow0.x + sprite_key_yellow0.width)) {
                app.stage.removeChild(heart_keys[i]);
                delete heart_keys[i]
                if (my_hp<5){
                    my_hp += 1
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
let heart_keys_id=0
let heart_keys=[]
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
sprite_back.eventMode = 'static';
sprite_back.on('pointerdown', check_tap_to_continue);


let font_s = Math.round(10)
let font_w = Math.round(15)
let font_m = Math.round(20)
const style = new PIXI.TextStyle({
    fontFamily: 'PIXY',
    fontSize: font_s,
    fill: '#ffffff'
});

let my_score = 0;
let my_stars = 0

const basicText = new PIXI.Text({ text: 'Score: ' + String(my_score), style: { fontFamily: 'PIXY', fontSize: 30 , fill: '#ffffff'} });
const basicText2 = new PIXI.Text({ text: String(my_stars), style: { fontFamily: 'PIXY', fontSize: 30 , fill: '#ffffff'} });
const basicText3 = new PIXI.Text({ text: 'Score: ', style: { fontFamily: 'PIXY', fontSize: 30 , fill: '#ffffff'} });
const basicText4 = new PIXI.Text({ text: 'Stars: ', style: { fontFamily: 'PIXY', fontSize: 30 , fill: '#ffffff'} });
basicText3.alpha=0
basicText.alpha=0
basicText4.alpha=0
basicText2.alpha=0
basicText.x = 15
basicText.y = sprite_black_top.height / 2 - basicText.height/1.5
basicText2.x = app.screen.width - sprite_star_score.width - basicText2.width - 12 * app.screen.width / 720 * 5;
basicText2.y = sprite_black_top.height / 2 - basicText.height/1.5

app.stage.addChild(basicText);
app.stage.addChild(basicText2);


//app.stage.addChild(myScoreText);
const def_speed_bomb=10/devicePixelRatio
const def_speed_notes=10/devicePixelRatio
const def_speed_snow=10/devicePixelRatio
const def_speed_star=10/devicePixelRatio
const def_speed_heart=10/devicePixelRatio

let current_survive_multi=1
let current_survive_taps_need=20
let current_survive_taps=0
let current_survive_qu=1
let speed_star = def_speed_star
let speed_notes = def_speed_notes
let speed_bomb = def_speed_bomb
let speed_snow = def_speed_snow
let speed_heart = def_speed_heart

let blood_timer = 0
let key_blood = 0

let my_hp = 5
let key_game_over = false
let key_win = false
let key_loc=0

const loc_min=1100
const loc_mid=1180
const loc_max=1500
const loc_end=1580


function moving() {
   
    if (key_hardmode==true){
        key_loc+=1
        if (key_loc<loc_min){
            app.stage.removeChild(sprite_borders)
            app.stage.addChild(sprite_borders)
    
            speed_heart=5
        }
        else if((key_loc>=loc_min) & (key_loc<=loc_min+1)){
            console.log('pole')
            sprite_loc_back.y=-app.screen.height
            sprite_loc_borders.y=-app.screen.height
            app.stage.addChild(sprite_loc_back)
            app.stage.addChild(sprite_loc_borders)
            
        }
        else if ((key_loc>loc_min) & (key_loc<loc_end)){
            if (sprite_loc_back.y<0){
                sprite_loc_back.y+=speed_bomb
                sprite_loc_borders.y+=speed_bomb
            }
            
            
            if (key_loc==loc_mid+(loc_max-loc_min)/loc_min) { 
                app.stage.removeChild(sprite_black_top)
                app.stage.addChild(sprite_black_top);
    
            }
    
            else if ((key_loc>=loc_max) & (key_loc<loc_end)){
                app.stage.addChild(sprite_loc_back)
                app.stage.addChild(sprite_loc_borders)
                app.stage.removeChild(sprite_black_top)
                app.stage.addChild(sprite_black_top);
                sprite_loc_back.y+=speed_bomb
                sprite_loc_borders.y+=speed_bomb
            }
        }
        else if (key_loc>=loc_end){
            app.stage.removeChild(sprite_black_top)
            app.stage.addChild(sprite_black_top);
            app.stage.removeChild(sprite_loc_back)
            app.stage.removeChild(sprite_loc_borders)
            key_loc=0
        }
    }
    else{
        app.stage.removeChild(sprite_borders)
        app.stage.addChild(sprite_borders)
    }
    

    

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
                app.stage.addChild(red_keys[i])
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
                    if (key_random==false){
                        if (queue_red[i][0]==max_queue_timer){
                            key_win=true
                        }
                    }
                    
                    if ((key_random==false) & (key_music_one_1==false)){
                        key_music_one_start=true
                    }
                }
            }

        }

        for (var i = 0; i < blue_keys_id; i++) {
            if (blue_keys[i]) {
                app.stage.addChild(blue_keys[i])
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
                    if (key_random==false){
                        if (queue_blue[i][0]==max_queue_timer){
                            key_win=true
                        }
                    }
                }
            }
        }

        for (var i = 0; i < green_keys_id; i++) {
            if (green_keys[i]) {
                app.stage.addChild(green_keys[i])
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
                    if (key_random==false){
                        if (queue_green[i][0]==max_queue_timer){
                            key_win=true
                        }
                    }
                }
            }
        }

        for (var i = 0; i < heart_keys_id; i++) {
            if (heart_keys[i]) {

                app.stage.addChild(heart_keys[i])
                heart_keys[i].y += speed_heart;
                if ((heart_keys[i].y >= app.screen.height - sprite_key_yellow0.height / 2)) {
                    app.stage.removeChild(heart_keys[i]);
                    delete heart_keys[i]
                    if (key_random==false){
                        if (queue_heart[i][0]==max_queue_timer){
                            key_win=true
                        }
                    }
                }
            }
        }

        for (var i = 0; i < yellow_keys_id; i++) {
            if (yellow_keys[i]) {
                app.stage.addChild(yellow_keys[i])
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
                    if (key_random==false){
                        if (queue_yellow[i][0]==max_queue_timer){
                            key_win=true
                        }
                    }
                }
            }
        }
/* */
        for (var i = 0; i < stars_keys_id; i++) {
            if (stars_keys[i]){
                app.stage.addChild(stars_shine_keys[i])
                app.stage.addChild(stars_keys[i])
                stars_shine_keys[i].y += speed_star;
                stars_keys[i].y += speed_star;
                if (stars_keys[i].y >= app.screen.height - sprite_key_yellow0.height / 2) {
                    app.stage.removeChild(stars_keys[i]);
                    app.stage.removeChild(stars_shine_keys[i])
                    delete stars_keys[i]
                    delete stars_shine_keys[i]
                    if (key_random==false){
                        if (queue_stars[i][0]==max_queue_timer){
                            key_win=true
                        }
                    }
                }
            }
        }
/* */
        for (var i = 0; i < bombs_keys_id; i++) {
            if (bombs_keys[i]) {
                app.stage.addChild(bombs_keys[i])
                bombs_keys[i].y += speed_bomb;
                if ((bombs_keys[i].y >= app.screen.height - sprite_key_yellow0.height)) {
                    app.stage.removeChild(bombs_keys[i]);
                    delete bombs_keys[i]
                    if (key_random==false){
                        if (queue_bombs[i][0]==max_queue_timer){
                            key_win=true
                        }
                    }
                }
            }

        }
        
/* */
        for (var i = 0; i < snow_keys_id; i++) {
            if (snow_keys[i]) {
                app.stage.addChild(snow_keys[i])
                snow_keys[i].y += speed_snow;
                if ((snow_keys[i].y >= app.screen.height - sprite_key_yellow0.height / 2)) {
                    app.stage.removeChild(snow_keys[i]);
                    delete snow_keys[i]
                    if (key_random==false){
                        if (queue_snow[i][0]==max_queue_timer){
                            key_win=true
                        }
                    }
                }
            }
        }
/* */   for (var i = 0; i < heart_keys_id; i++) {
            if (heart_keys[i]) {
                app.stage.addChild(heart_keys[i])
                heart_keys[i].y += speed_heart;
                if ((heart_keys[i].y >= app.screen.height - sprite_key_yellow0.height / 2)) {
                    app.stage.removeChild(heart_keys[i]);
                    delete heart_keys[i]
                    if (key_random==false){
                        if (queue_heart[i][0]==max_queue_timer){
                            key_win=true
                        }
                    }
                }
            }
        }
        if (tap_red == 0) {
            app.stage.removeChild(sprite_key_red0)
            app.stage.addChild(sprite_key_red0);
        }
        else {
            if ((tap_red_timer==0) & (key_random==true)){
                PIXI.sound.play('4')
            }
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
            if ((tap_blue_timer==0) & (key_random==true)){
                PIXI.sound.play('2')
            }
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
            if  ((tap_green_timer==0) & (key_random==true)){
                PIXI.sound.play('3')
            }
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
            if  ((tap_yellow_timer==0) & (key_random==true)){
                PIXI.sound.play('1')
            }

            app.stage.removeChild(sprite_key_yellow0)
            if (tap_yellow_timer <= tap_timer) {
                app.stage.removeChild(sprite_key_yellow1);
                app.stage.addChild(sprite_key_yellow1);
                tap_yellow_timer += 1
            }
            else {
                //PIXI.sound.stop('1')
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
            if (key_hardmode==false){
                let aa=get_random_a(true)
                for (var j=0;j<aa[1];j++){
                    if (aa[0][j]=='red'){
                        red_keys.push(PIXI.Sprite.from('./img/red_note.png'))     
                        Sprite_Auto(red_keys[red_keys_id])
                        red_keys[red_keys_id].x = 16 * app.renderer.width / 144 + 16 * app.renderer.width / 144 * 2 * 3
                        app.stage.addChild(red_keys[red_keys_id]);
                        red_keys_id+=1
                    }
                    else if (aa[0][j]=='green') {
                        green_keys.push(PIXI.Sprite.from('./img/green_note.png'))
                        Sprite_Auto(green_keys[green_keys_id])
                        green_keys[green_keys_id].x = 16 * app.renderer.width / 144 + 16 * app.renderer.width / 144 * 2 * 2
                        app.stage.addChild(green_keys[green_keys_id]);
                        green_keys_id+=1
                    }
                    else if (aa[0][j]=='blue') {
                        blue_keys.push(PIXI.Sprite.from('./img/blue_note.png'))
                        Sprite_Auto(blue_keys[blue_keys_id])
                        blue_keys[blue_keys_id].x = 16 * app.renderer.width / 144 + 16 * app.renderer.width / 144 * 2 * 1
                        app.stage.addChild(blue_keys[blue_keys_id]);
                        blue_keys_id+=1
                    }
                    else if (aa[0][j]=='yellow') {
                        yellow_keys.push(PIXI.Sprite.from('./img/yellow_note.png'))
                        Sprite_Auto(yellow_keys[yellow_keys_id])
                        yellow_keys[yellow_keys_id].x = 16 * app.renderer.width / 144 + 16 * app.renderer.width / 144 * 2 * 0
                        app.stage.addChild(yellow_keys[yellow_keys_id]);
                        yellow_keys_id+=1
                    }
                    else if (aa[0][j]=='stars') {
                        stars_keys.push(PIXI.Sprite.from('./img/star.png'))
                        stars_shine_keys.push(PIXI.Sprite.from('./img/star_shine.png'))
                        Sprite_Auto(stars_keys[stars_keys_id])
                        Sprite_Auto(stars_shine_keys[stars_shine_keys_id])
                        stars_keys[stars_keys_id].x = 18 * app.renderer.width / 144 + 32 * app.renderer.width / 144 * getRandom(4)
                        stars_keys[stars_keys_id].y = 0
                        stars_shine_keys[stars_shine_keys_id].x = stars_keys[stars_keys_id].x + stars_keys[stars_keys_id].width / 2 - stars_shine_keys[stars_shine_keys_id].width / 2
                        stars_shine_keys[stars_shine_keys_id].y = stars_keys[stars_keys_id].y + stars_keys[stars_keys_id].height / 2 - stars_shine_keys[stars_shine_keys_id].height / 2
                        app.stage.addChild(stars_shine_keys[stars_shine_keys_id]);
                        app.stage.addChild(stars_keys[stars_keys_id]);
                        stars_keys_id += 1
                        stars_shine_keys_id += 1
                    }
                    else if (aa[0][j]=='bombs') {
                        bombs_keys.push(PIXI.Sprite.from('./img/bomb.png'))
                        Sprite_Auto(bombs_keys[bombs_keys_id])
                        bombs_keys[bombs_keys_id].x = 17 * app.renderer.width / 144 + 32 * app.renderer.width / 144 * getRandom(4)
                        app.stage.addChild(bombs_keys[bombs_keys_id]);
                        bombs_keys_id += 1
                    }
                    else if (aa[0][j]=='snow') {
                        snow_keys.push(PIXI.Sprite.from('./img/snow.png'))
                        Sprite_Auto(snow_keys[snow_keys_id])
                        snow_keys[snow_keys_id].x = 18 * app.renderer.width / 144 + 32 * app.renderer.width / 144 * getRandom(4)
                        app.stage.addChild(snow_keys[snow_keys_id]);
                        snow_keys_id += 1
                    }
                }
            }
            else {

                if (key_loc<loc_min){
                    let aa=get_random_a(true)
                    key_loc+=1
                    for (var j=0;j<aa[1];j++){
                        if (aa[0][j]=='red'){
                            red_keys.push(PIXI.Sprite.from('./img/red_note.png'))     
                            Sprite_Auto(red_keys[red_keys_id])
                            red_keys[red_keys_id].x = 16 * app.renderer.width / 144 + 16 * app.renderer.width / 144 * 2 * 3
                            app.stage.addChild(red_keys[red_keys_id]);
                            red_keys_id+=1
                        }
                        else if (aa[0][j]=='green') {
                            green_keys.push(PIXI.Sprite.from('./img/green_note.png'))
                            Sprite_Auto(green_keys[green_keys_id])
                            green_keys[green_keys_id].x = 16 * app.renderer.width / 144 + 16 * app.renderer.width / 144 * 2 * 2
                            app.stage.addChild(green_keys[green_keys_id]);
                            green_keys_id+=1
                        }
                        else if (aa[0][j]=='blue') {
                            blue_keys.push(PIXI.Sprite.from('./img/blue_note.png'))
                            Sprite_Auto(blue_keys[blue_keys_id])
                            blue_keys[blue_keys_id].x = 16 * app.renderer.width / 144 + 16 * app.renderer.width / 144 * 2 * 1
                            app.stage.addChild(blue_keys[blue_keys_id]);
                            blue_keys_id+=1
                        }
                        else if (aa[0][j]=='yellow') {
                            yellow_keys.push(PIXI.Sprite.from('./img/yellow_note.png'))
                            Sprite_Auto(yellow_keys[yellow_keys_id])
                            yellow_keys[yellow_keys_id].x = 16 * app.renderer.width / 144 + 16 * app.renderer.width / 144 * 2 * 0
                            app.stage.addChild(yellow_keys[yellow_keys_id]);
                            yellow_keys_id+=1
                        }
                        else if (aa[0][j]=='stars') {
                            stars_keys.push(PIXI.Sprite.from('./img/star.png'))
                            stars_shine_keys.push(PIXI.Sprite.from('./img/star_shine.png'))
                            Sprite_Auto(stars_keys[stars_keys_id])
                            Sprite_Auto(stars_shine_keys[stars_shine_keys_id])
                            stars_keys[stars_keys_id].x = 18 * app.renderer.width / 144 + 32 * app.renderer.width / 144 * getRandom(4)
                            stars_keys[stars_keys_id].y = 0
                            stars_shine_keys[stars_shine_keys_id].x = stars_keys[stars_keys_id].x + stars_keys[stars_keys_id].width / 2 - stars_shine_keys[stars_shine_keys_id].width / 2
                            stars_shine_keys[stars_shine_keys_id].y = stars_keys[stars_keys_id].y + stars_keys[stars_keys_id].height / 2 - stars_shine_keys[stars_shine_keys_id].height / 2
                            app.stage.addChild(stars_shine_keys[stars_shine_keys_id]);
                            app.stage.addChild(stars_keys[stars_keys_id]);
                            stars_keys_id += 1
                            stars_shine_keys_id += 1
                        }
                        else if (aa[0][j]=='bombs') {
                            bombs_keys.push(PIXI.Sprite.from('./img/bomb.png'))
                            Sprite_Auto(bombs_keys[bombs_keys_id])
                            bombs_keys[bombs_keys_id].x = 17 * app.renderer.width / 144 + 32 * app.renderer.width / 144 * getRandom(4)
                            app.stage.addChild(bombs_keys[bombs_keys_id]);
                            bombs_keys_id += 1
                        }
                        else if (aa[0][j]=='snow') {
                            snow_keys.push(PIXI.Sprite.from('./img/snow.png'))
                            Sprite_Auto(snow_keys[snow_keys_id])
                            snow_keys[snow_keys_id].x = 18 * app.renderer.width / 144 + 32 * app.renderer.width / 144 * getRandom(4)
                            app.stage.addChild(snow_keys[snow_keys_id]);
                            snow_keys_id += 1
                        }
                    }
                }  
            }
        
        if (key_loc<loc_min){
            current_queue_timer+=(current_queue_qu)
            if (current_queue_timer>=current_survive_taps_need){
                current_survive_multi=1.1
                if (current_queue_timer>50){
                    current_queue_qu*=0.9
                }
                speed_bomb*=current_survive_multi
                speed_star*=current_survive_multi
                speed_snow*=current_survive_multi
                speed_notes*=current_survive_multi
                current_survive_taps_need+=30*100
            }
        }
        else{
            current_queue_timer+=100
        }    
    }
    if ((key_loc==(loc_max+loc_mid)/2) | (key_loc==loc_mid)){ 
        console.log('gg')
        heart_keys.push(PIXI.Sprite.from('./img/flying_heart.png'))
        Sprite_Auto(heart_keys[heart_keys_id])
        heart_keys[heart_keys_id].x = 11 * app.renderer.width / 144 + 33 * app.renderer.width / 144 * getRandom(4)
        app.stage.addChild(heart_keys[heart_keys_id]);
        heart_keys_id += 1
        
        
    }   
    
    }
    moving()
}

let current_queue_timer=100
let current_queue_qu=100
let alp_tap = 20
let alp_tap_dir = 1
let key_tap_continue = false
app.stage.addChild(sprite_tap_to_continue)
sprite_tap_to_continue.alpha = 0
let key_game_menu=true

let sprite_main_menu = PIXI.Sprite.from('./img/main_menu.png');
let sprite_profile_frame = PIXI.Sprite.from('./img/profile_frame.png')
Sprite_Auto(sprite_main_menu)
Sprite_Auto(sprite_profile_frame)
sprite_profile_frame.y=app.screen.height/2-sprite_profile_frame.height/4
let key_profile=false
function profile(){
    if (key_profile==false){
        sprite_avatar_frame.x=app.screen.width/2-sprite_avatar_frame.width/2
        sprite_avatar_frame.y=sprite_profile_frame.y-sprite_avatar_frame.height/2
        sprite_avatar.x=sprite_avatar_frame.x+3
        sprite_avatar.y=sprite_avatar_frame.y+3
        if (basicText5.width<=sprite_avatar_frame.width){
            basicText5.x=sprite_avatar_frame.x+sprite_avatar_frame.width/2-basicText5.width/2
        }
        else{
            basicText5.x=sprite_avatar_frame.x
        }

        basicText5.y=sprite_avatar_frame.y+sprite_avatar_frame.height+10
        key_profile=true
    }
}
function profile0(){
    if ((key_profile==true) ){
        sprite_avatar_frame.x=10
        sprite_avatar_frame.y=10

        sprite_avatar.width=sprite_avatar_frame.width-6
        sprite_avatar.height=sprite_avatar_frame.height-6
        sprite_avatar.x=sprite_avatar_frame.x+3
        sprite_avatar.y=sprite_avatar_frame.y+3
        if (basicText5.width<=sprite_avatar_frame.width){
            basicText5.x=sprite_avatar_frame.x+sprite_avatar_frame.width/2-basicText5.width/2
        }
        else{
            basicText5.x=sprite_avatar_frame.x
        }

        basicText5.y=sprite_avatar_frame.y+sprite_avatar_frame.height+10
        key_profile=false
        app.stage.removeChild(statistic_container)
        app.stage.removeChild(sprite_profile_frame)
    }
    if ((key_leaderboard==true) & (key_profile==false)){
        key_leaderboard=false
        app.stage.removeChild(sprite_lead)
        app.stage.removeChild(sprite_lead10)
        app.stage.removeChild(sprite_lead11)
        app.stage.removeChild(sprite_lead20)
        app.stage.removeChild(sprite_lead21)
        app.stage.removeChild(sprite_lead30)
        app.stage.removeChild(sprite_lead31)
        for (var i=0;i<lt1.length;i++){
            app.stage.removeChild(lt1[i])
            app.stage.removeChild(lt2[i])
        }
        
    }
    
}

let queue_timer_m=2
function new_game_endless(){
    if ((key_load_music==true) & (key_profile==false)& (key_leaderboard==false)){
        basicText3.alpha=1
        basicText.alpha=1
        basicText4.alpha=1
        basicText2.alpha=1
        menu_sprite=[]
        menu_sprite_id=0
        key_music_one_start==false
        key_music_one_1==false
        key_game_over=false
        key_win=false
        key_tap_continue=false
        key_blood=false
        tap_snow=0
        key_hard=false
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
        key_loc=0
        bombs_keys_id=0
        stars_keys_id=0
        stars_shine_keys_id=0
        snow_keys_id=0
        current_survive_multi=1
        current_survive_taps_need=25*100
        current_queue_timer=100
        current_queue_qu=100
        red_keys=[]
        green_keys=[]
        blue_keys=[]
        yellow_keys=[]
        stars_keys=[]
        heart_keys=[]
        heart_keys_id=0
        stars_shine_keys=[]
        bombs_keys=[]
        snow_keys=[]
        
        
    
        //
    
        clear_screen()
        random_queue()

        speed_bomb=5
        speed_star=5
        speed_notes=5
        speed_snow=5

        
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
function new_game_hardmode(){
    if ((key_load_music==true) & (key_profile==false)& (key_leaderboard==false)){
        basicText3.alpha=1
        basicText.alpha=1
        basicText4.alpha=1
        basicText2.alpha=1
        menu_sprite=[]
        menu_sprite_id=0
        key_hard=true
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
        key_loc=0
        bombs_keys_id=0
        stars_keys_id=0
        stars_shine_keys_id=0
        snow_keys_id=0
        current_survive_multi=2
        current_survive_taps_need=25*100
        current_queue_timer=100
        current_queue_qu=50
        red_keys=[]
        green_keys=[]
        blue_keys=[]
        yellow_keys=[]
        stars_keys=[]
        heart_keys=[]
        heart_keys_id=0
        stars_shine_keys=[]
        bombs_keys=[]
        snow_keys=[]
        
        clear_screen()
        random_queue()
        if (key_random==false){
            speed_bomb=def_speed_bomb
            speed_star=def_speed_star
            speed_notes=def_speed_notes
            speed_snow=def_speed_snow
        }
        else {
            speed_bomb=5*current_survive_multi
            speed_star=5*current_survive_multi
            speed_notes=5*current_survive_multi
            speed_snow=5*current_survive_multi
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
function new_game_melodies(){
        
        if ((key_load_music==true) & (key_profile==false) & (key_leaderboard==false)){
            key_hardmode=false
            basicText3.alpha=1
            basicText.alpha=1
            basicText4.alpha=1
            basicText2.alpha=1
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
        
            clear_screen()
            //random_queue()
            music_one()
            
            
            app.stage.removeChild(sprite_back)
            app.stage.addChild(sprite_back)
            app.stage.removeChild(sprite_black_top)
            app.stage.addChild(sprite_black_top)
            app.stage.removeChild(sprite_shiny_key)
            app.stage.addChild(sprite_shiny_key)
 
        }
        
        }

function duels(){
    app.stage.removeChild(sprite_button_duels)
    app.stage.addChild(sprite_button_duels1)
    key_duels=true
    if (key_duels==true){
        app.stage.removeChild(sprite_button_duels1)
        sprite_button_duels1.x=app.screen.width/2-sprite_button_duels1.width/2
        sprite_button_duels1.y=app.screen.height/2+sprite_button_duels1.height*2.2
        app.stage.addChild(sprite_button_duels1)
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

function get_random_a(key){
    let a=getRandom(100)
    let b=getRandom(100)

    if ((b>=0)&(b<=20)){
        if ((a>=0) & (a<20)){
            a=getRandom(3)
            let mm=[]
            mm.push('blue')
            switch (a){
                case 0: mm.push('red')
                case 1: mm.push('green')
                case 2: mm.push('yellow')
            }
            return [mm,2]
        }
        else if ((a>=20) & (a<40)){
            a=getRandom(3)
            let mm=[]
            mm.push('red')
            switch (a){
                case 0: mm.push('blue')
                case 1: mm.push('green')
                case 2: mm.push('yellow')
            }
            return [mm,2]
        }
        else if ((a>=40) & (a<60)){
            a=getRandom(3)
            let mm=[]
            mm.push('green')
            switch (a){
                case 0: mm.push('red')
                case 1: mm.push('blue')
                case 2: mm.push('yellow')
            }
            return [mm,2]
        }
        else if ((a>=60) & (a<80)){
            a=getRandom(3)
            let mm=[]
            mm.push('yellow')
            switch (a){
                case 0: mm.push('red')
                case 1: mm.push('green')
                case 2: mm.push('blue')
            }
            return [mm,2]
        }
        else if ((a>=80) & (a<92)){
            a=getRandom(4)
            let mm=[]
            mm.push('stars')
            return [mm,1]
        }
        else if ((a>=92) & (a<96)){
            a=getRandom(4)
            let mm=[]
            mm.push('bombs')
            return [mm,1]
        }
        else if ((a>=96) & (a<100)){
            a=getRandom(4)
            let mm=[]
            mm.push('snow')
            return [mm,1]
        }

    }
    else{
        if ((a>=0) & (a<20)){
            return [['blue'],1]
        }
        else if ((a>=20) & (a<40)){
            return [['red'],1]
        }
        else if ((a>=40) & (a<60)){
            return [['green'],1]
        }
        else if ((a>=60) & (a<80)){
            return [['yellow'],1]
        }
        else if ((a>=80) & (a<92)){
            return [['stars'],1]
        }
        else if ((a>=92) & (a<96)){
            return [['bombs'],1]
        }
        else if ((a>=96) & (a<100)){
            return [['snow'],1]
        }
    }
} 

function get_random_b(key){
    let a=getRandom(100)
    let b=getRandom(100)


    if ((b>=0)&(b<=40)){
        if ((a>=0) & (a<15)){
            a=getRandom(6)
            let mm=[]
            mm.push('blue')

            switch (a){
                case 0: mm.push('red')
                case 1: mm.push('green')
                case 2: mm.push('yellow')
            }
            return [mm,2]
        }
        else if ((a>=15) & (a<30)){
            a=getRandom(3)
            let mm=[]
            mm.push('red')
            switch (a){
                case 0: mm.push('blue')
                case 1: mm.push('green')
                case 2: mm.push('yellow')
            }
            return [mm,2]
        }
        else if ((a>=30) & (a<45)){
            a=getRandom(3)
            let mm=[]
            mm.push('green')
            switch (a){
                case 0: mm.push('red')
                case 1: mm.push('blue')
                case 2: mm.push('yellow')
            }
            return [mm,2]
        }
        else if ((a>=45) & (a<60)){
            a=getRandom(3)
            let mm=[]
            mm.push('yellow')
            switch (a){
                case 0: mm.push('red')
                case 1: mm.push('green')
                case 2: mm.push('blue')
            }
            return [mm,2]
        }
        else if ((a>=60) & (a<75)){
            a=getRandom(4)
            let mm=[]
            mm.push('stars')
            return [mm,1]
        }
        else if ((a>=75) & (a<95)){
            a=getRandom(4)
            let mm=[]
            mm.push('bombs')
            return [mm,1]
        }
        else if ((a>=95) & (a<100)){
            a=getRandom(4)
            let mm=[]
            mm.push('snow')
            return [mm,1]
        }
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
    let modi=1
    if (key_main_menu == true){
        let bar1=235*120/bpm
        let bar1_2=bar1/2
        let bar1_4=bar1/4
        let bar1_8=bar1/8
        let taps=[100*modi,bar1*modi,bar1*modi,bar1_4*3*modi,bar1_4*modi,bar1_2*modi]
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
        taps=[bar1_2*modi,bar1_8*3*modi,bar1_8*2*modi,bar1_8*3*modi,bar1_8*3*modi,bar1_8*2*modi,bar1_8*3*modi,bar1_8*3*modi,bar1_8*2*modi,bar1_8*3*modi,bar1_8*3*modi,bar1_8*2*modi]
        
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
        taps=[bar1_2*modi,bar1_8*3*modi,bar1_8*2*modi,bar1_8*3*modi,bar1_8*3*modi,bar1_8*2*modi,bar1_8*3*modi,bar1_8*3*modi,bar1_8*2*modi,bar1_8*3*modi,bar1_8*3*modi,bar1_8*2*modi]
        
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
        taps=[bar1_2*modi,bar1_8*2*modi,bar1_8*modi,bar1_8*2*modi,bar1_8*modi,bar1_8*2*modi,bar1_8*2*modi,bar1_8*modi,bar1_8*2*modi,bar1_8*modi,bar1_8*2*modi,bar1_8*2*modi,bar1_8*modi,bar1_8*2*modi,bar1_8*modi,bar1_8*2*modi,bar1_8*2*modi,bar1_8*modi,bar1_8*2*modi,bar1_8*modi]
        
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
        taps=[(bar1_4+bar1_8)*modi,bar1_8*modi,bar1_8*modi,bar1_8*2*modi,bar1_8*modi,bar1_8*2*modi,bar1_8*2*modi,bar1_8*modi,bar1_8*2*modi,bar1_8*modi,bar1_8*2*modi,bar1_8*2*modi,bar1_8*modi,bar1_8*2*modi,bar1_8*modi,bar1_8*2*modi,bar1_8*2*modi,bar1_8*modi,bar1_8*2*modi,bar1_8*modi]
        
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
        taps=[bar1_8*modi,bar1_8*3*modi,bar1_8*2*modi,bar1_8*3*modi,bar1_8*3*modi,bar1_8*2*modi,bar1_8*3*modi,bar1_8*3*modi,bar1_8*2*modi,bar1_8*3*modi,bar1_8*3*modi,bar1_8*2*modi]
        
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
        taps=[bar1_2*modi,bar1_8*3*modi,bar1_8*2*modi,bar1_8*3*modi,bar1_8*3*modi,bar1_8*2*modi,bar1_8*3*modi,bar1_8*3*modi,bar1_8*2*modi,bar1_8*3*modi,bar1_8*3*modi,bar1_8*2*modi]
        
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

        queue_stars.push([9000*modi,0])
        queue_stars.push([9000*modi,3])
        queue_stars.push([9050*modi,0])
        queue_stars.push([9050*modi,3])
        queue_stars.push([9100*modi,1])
        queue_stars.push([9100*modi,2])
        queue_stars.push([9150*modi,0])
        queue_stars.push([9150*modi,3])

        queue_stars.push([9200*modi,1])
        queue_stars.push([9200*modi,2])
        queue_stars.push([9250*modi,3])
        queue_stars.push([9250*modi,2])
        queue_stars.push([9300*modi,1])
        queue_stars.push([9300*modi,0])
        queue_stars.push([9350*modi,1])
        queue_stars.push([9350*modi,2])

        bombs_keys_id=0
        stars_keys_id=0
        stars_shine_keys_id=0
        snow_keys_id=0

        key_random=false
        max_queue_timer=0
        for (let i=0;i<queue_stars.length;i++){
            max_queue_timer=Math.max(max_queue_timer,queue_stars[i][0])
        }

        key_main_menu=false
    }
    
    
}
let menu_sprite=[]
let menu_sprite_id=0

function menu_falling(){
    let aa=get_random_a(true)
    for (var j=0;j<aa[1];j++){
        if (aa[0][j]=='red'){
            menu_sprite.push(PIXI.Sprite.from('./img/red_note.png'))     
            Sprite_Auto(menu_sprite[menu_sprite_id])
            menu_sprite[menu_sprite_id].x = Math.round(16 * app.screen.width / 144 + 16 * app.renderer.width / 144 * 2* getRandom(4))
            menu_sprite[menu_sprite_id].y=-100
            app.stage.addChild(menu_sprite[menu_sprite_id]);
        }
        else  if (aa[0][j]=='green'){
            menu_sprite.push(PIXI.Sprite.from('./img/green_note.png'))     
            Sprite_Auto(menu_sprite[menu_sprite_id])
            menu_sprite[menu_sprite_id].x = Math.round(16 * app.screen.width / 144 + 16 * app.renderer.width / 144 * 2 * getRandom(4))
            menu_sprite[menu_sprite_id].y=-100
            app.stage.addChild(menu_sprite[menu_sprite_id]);
        }
        else  if (aa[0][j]=='blue'){
            menu_sprite.push(PIXI.Sprite.from('./img/blue_note.png'))     
            Sprite_Auto(menu_sprite[menu_sprite_id])
            menu_sprite[menu_sprite_id].x = Math.round(16 * app.screen.width / 144 + 16 * app.renderer.width / 144 * 2 * getRandom(4))
            menu_sprite[menu_sprite_id].y=-100
            app.stage.addChild(menu_sprite[menu_sprite_id]);
        }
        else  if (aa[0][j]=='yellow'){
            menu_sprite.push(PIXI.Sprite.from('./img/yellow_note.png'))     
            Sprite_Auto(menu_sprite[menu_sprite_id])
            menu_sprite[menu_sprite_id].x = Math.round(16 * app.screen.width / 144 + 16 * app.renderer.width / 144 * 2 * getRandom(4))
            menu_sprite[menu_sprite_id].y=-100
            app.stage.addChild(menu_sprite[menu_sprite_id]);
        }
        else if (aa[0][j].includes('stars')) {
            menu_sprite.push(PIXI.Sprite.from('./img/star.png'))
            Sprite_Auto(menu_sprite[menu_sprite_id])
            menu_sprite[menu_sprite_id].x = Math.round(18 * app.screen.width / 144 + 32 * app.renderer.width / 144 * getRandom(4))
            menu_sprite[menu_sprite_id].y=-100
            app.stage.addChild(menu_sprite[menu_sprite_id]);
        }
        else if (aa[0][j].includes('bombs')) {
            menu_sprite.push(PIXI.Sprite.from('./img/bomb.png'))
            Sprite_Auto(menu_sprite[menu_sprite_id])
            menu_sprite[menu_sprite_id].x = Math.round(17 * app.screen.width / 144 + 32 * app.renderer.width / 144 * getRandom(4))
            menu_sprite[menu_sprite_id].y=-100
            app.stage.addChild(menu_sprite[menu_sprite_id]);
        }
        else if (aa[0][j].includes('snow')) {
            menu_sprite.push(PIXI.Sprite.from('./img/snow.png'))
            Sprite_Auto(menu_sprite[menu_sprite_id])
            menu_sprite[menu_sprite_id].x = Math.round(18 * app.screen.width / 144 + 32 * app.renderer.width / 144 * getRandom(4))
            menu_sprite[menu_sprite_id].y=-100
            app.stage.addChild(menu_sprite[menu_sprite_id]);
            
        }
        menu_sprite[menu_sprite_id].alpha=0.33
        menu_sprite_id += 1
    }  
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
function but0_1(){
    if (key_hardmode_button==0){
        key_hardmode_button=1
        key_hardmode=0
    }
}
function but1_0(){
    if (key_hardmode_button==1){
        key_hardmode_button=0
        key_hardmode=1
    }
}
let key_music_one_1=false
let key_load_music=false
let queue_menu_timer=0
let current_queue_menu_timer=100
PIXI.sound.play('geo8')
PIXI.sound.stop('geo8')
key_load_music=true
sprite_button_melodies.eventMode = 'static';
sprite_button_melodies.on('pointerdown', new_game_melodies)
sprite_button_endless.eventMode = 'static';
sprite_button_endless.on('pointerdown', new_game_endless)
sprite_button_hardmode.eventMode='static'
sprite_button_hardmode.on('pointerdown', new_game_hardmode)
sprite_but0.eventMode='static'
sprite_but0.on('pointerdown', but0_1)
sprite_but1.eventMode='static'
sprite_but1.on('pointerdown', but1_0)
sprite_button_duels.eventMode = 'static';
sprite_button_duels.on('pointerdown', duels)
sprite_avatar.eventMode = 'static';
sprite_avatar.on('pointerdown',profile)

let stats={}
let my_collect_stars=0
let my_taps=0
let my_highscore=0
let my_hard_highscore=0
let my_date=''
let key_hard=false

function update_statistics(){

    fetch(domen+'/stats?id='+tgid).then((res)=>{return res}).then((res)=>{return res.json()}).then((res)=>{
        stats=res;
        my_collect_stars=parseInt(stats['stars'])
        my_taps=parseInt(stats['taps'])
        my_highscore=parseInt(stats['highscore'])
        my_date=stats['date']
        my_hard_highscore=parseInt(stats['hardscore'])
        console.log(my_date)
    })


    basicText8.text='Collected stars: '+my_collect_stars
    basicText9.text='total notes played: '+my_taps
    basicText10.text='Highscore in endless mode: '+my_highscore
    basicText11.text='Highscore in endless hard mode: '+my_hard_highscore
    basicText15.text='Registration date: '+my_date
    
}
function save_statistics(){
    let a=(domen+'/player?id='+tgid+'&taps='+my_taps+'&stars='+my_collect_stars+'&highscore='+my_highscore+'&date='+my_date+'&hardscore='+my_hard_highscore)
    fetch(a)
}

function cup(){
    if (key_leaderboard==false){
        key_leaderboard=true
    }
    else{
        key_leaderboard=false
    }
   
}
//update_statistics()



const basicText5 = new PIXI.Text({ text: f_name+'', style: { fontFamily: 'PIXY', fontSize: 17, fill: '#ffffff'} });
if (basicText5.width<=sprite_avatar_frame.width){
    basicText5.x=sprite_avatar_frame.x+sprite_avatar_frame.width/2-basicText5.width/2
}
else{
    basicText5.x=sprite_avatar_frame.x
}
basicText5.y=sprite_avatar_frame.y+sprite_avatar_frame.height+10


const basicText6 = new PIXI.Text({ text: 'Your statistics:', style: { fontFamily: 'PIXY', fontSize: 30, fill: '#ffffff'} });
const basicText7 = new PIXI.Text({ text: 'PVE', style: { fontFamily: 'PIXY', fontSize: 20, fill: '#ffffff'} });
const basicText8 = new PIXI.Text({ text: 'Collected stars: '+my_collect_stars, style: { fontFamily: 'PIXY', fontSize: 17, fill: '#ffffff'} });
const basicText9 = new PIXI.Text({ text: 'total notes played: '+my_taps, style: { fontFamily: 'PIXY', fontSize:  17, fill: '#ffffff'} });
const basicText10 = new PIXI.Text({ text: 'Highscore in endless mode: '+my_highscore, style: { fontFamily: 'PIXY', fontSize:  17, fill: '#ffffff'} });
const basicText11 = new PIXI.Text({ text: 'Highscore in endless hard mode: '+my_hard_highscore, style: { fontFamily: 'PIXY', fontSize:  17, fill: '#ffffff'} });
const basicText12 = new PIXI.Text({ text: 'PVP', style: { fontFamily: 'PIXY', fontSize: 20, fill: '#ffffff'} });
const basicText13 = new PIXI.Text({ text: 'Wins on duels: -', style: { fontFamily: 'PIXY', fontSize:  17, fill: '#ffffff'} });
const basicText14 = new PIXI.Text({ text: 'Total duels played: -', style: { fontFamily: 'PIXY', fontSize:  17, fill: '#ffffff'} });
const basicText15 = new PIXI.Text({ text: 'Registration date: '+my_date, style: { fontFamily: 'PIXY', fontSize:  17, fill: '#ffffff'} });

update_statistics()
let menu_added=false

let statistic_container=new PIXI.Container()
statistic_container.addChild(basicText6)
statistic_container.addChild(basicText7)
statistic_container.addChild(basicText8)
statistic_container.addChild(basicText9)
statistic_container.addChild(basicText10)
statistic_container.addChild(basicText11)
statistic_container.addChild(basicText12)
statistic_container.addChild(basicText13)
statistic_container.addChild(basicText14)
statistic_container.addChild(basicText15)
app.stage.removeChild(statistic_container)
sprite_profile_frame.eventMode='static'
sprite_profile_frame.on('pointerdown',profile0)
sprite_main_menu.eventMode='static'
sprite_main_menu.on('pointerdown',profile0)

sprite_button_melodies.x=app.screen.width/2-sprite_button_melodies.width/2
sprite_button_melodies.y=app.screen.height/2-sprite_button_melodies.height*1

sprite_button_endless.x=app.screen.width/2-sprite_button_endless.width/2
sprite_button_endless.y=app.screen.height/2+sprite_button_endless.height*1/5

sprite_button_hardmode.x=app.screen.width/2-sprite_button_hardmode.width/2
sprite_button_hardmode.y=sprite_button_endless.y+sprite_button_endless.height-sprite_button_hardmode.height

sprite_but0.x=sprite_button_endless.x-app.screen.width/9
sprite_but0.y=sprite_button_endless.y+sprite_button_endless.height*2/3-sprite_but0.height/2
sprite_but1.x=sprite_button_endless.x+sprite_button_endless.width+app.screen.width/30
sprite_but1.y=sprite_button_endless.y+sprite_button_endless.height*2/3-sprite_but1.height/2
let sprite_star=PIXI.Sprite.from('./img/star.png')
Sprite_Auto(sprite_star)
sprite_star.width/=2
sprite_star.height/=2
console.log(my_stars)
const basicText16 = new PIXI.Text({ text: my_collect_stars, style: { fontFamily: 'PIXY', fontSize:  30, fill: '#ffffff'} });
basicText16.text=(my_collect_stars)
sprite_star.x=app.screen.width-10-sprite_star.width
sprite_star.y=10

sprite_cup.y=sprite_avatar_frame.y+sprite_avatar_frame.height+50
sprite_cup.x=10

sprite_cup.eventMode='static'
sprite_cup.on('pointerdown',cup)
let lt1=[]
for (var i=0;i<9;i++){
    lt1.push(new PIXI.Text({ text: '', style: { fontFamily: 'PIXY', fontSize: 15 , fill: '#ffffff'} }))
}
let lt2=[]
for (var i=0;i<9;i++){
    lt2.push(new PIXI.Text({ text: '', style: { fontFamily: 'PIXY', fontSize: 15 , fill: '#ffffff'} }))
}
let key_upd_st=false
let lead=1
function clead1(){
    if (lead1==false){
        console.log(1)
        lead1=true
        lead2=false
        lead3=false
        lead1req=false
    }

}
function clead2(){
    if (lead2==false){
        console.log(2)
        lead2=true
        lead1=false
        lead3=false
        lead2req=false
    }
}
function clead3(){
    if (lead3==false){
        console.log(3)
        lead3=true
        lead1=false
        lead2=false
        lead3req=false
    }
}
sprite_lead10.eventMode='static'
sprite_lead10.on('pointerdown',clead1)
sprite_lead20.eventMode='static'
sprite_lead20.on('pointerdown',clead2)
sprite_lead30.eventMode='static'
sprite_lead30.on('pointerdown',clead3)
let lead1=false
let lead2=true
let lead3=false
let lead1req=false
let lead2req=false
let lead3req=false
let jm=0
app.ticker.add(() => {

        if (key_main_menu == true) {
            if (menu_added==false){app.stage.removeChild(sprite_main_menu); app.stage.addChild(sprite_main_menu); menu_added=true}
            if (key_duels==true){
                duels_ti+=1
                if (duels_ti>=20){
                    key_duels=false
                    duels_ti=0
                    app.stage.removeChild(sprite_button_duels1)

                }
            }

            if (queue_menu_timer==100){
                menu_falling()
                
                queue_menu_timer=0

            }
            else{
                queue_menu_timer+=1
                for (var i=0;i<menu_sprite_id;i++){
                    if (menu_sprite[i]){
                        menu_sprite[i].y+=5;
                        if (menu_sprite[i].y>=app.screen.height){
                            delete menu_sprite[i]
                            app.stage.removeChild(menu_sprite[i])
                            
                        }
                        
                    }
                    
                    
                }
            }



            app.stage.removeChild(sprite_button_melodies)
            app.stage.addChild(sprite_button_melodies)
            
            if (key_hardmode_button==1){
                app.stage.removeChild(sprite_button_hardmode)
                app.stage.removeChild(sprite_button_endless)
                app.stage.addChild(sprite_button_endless)
                sprite_but0.alpha=0.3
                sprite_but1.alpha=1
                app.stage.addChild(sprite_but0)
                app.stage.addChild(sprite_but1)
            }
            else{
                app.stage.removeChild(sprite_button_endless)
                app.stage.removeChild(sprite_button_hardmode)
                app.stage.addChild(sprite_button_hardmode)
                sprite_but0.alpha=1
                sprite_but1.alpha=0.3
                app.stage.addChild(sprite_but0)
                app.stage.addChild(sprite_but1)
            }

            if (key_duels==false){
                app.stage.removeChild(sprite_button_duels)
                sprite_button_duels.x=app.screen.width/2-sprite_button_duels.width/2
                sprite_button_duels.y=app.screen.height/2+sprite_button_duels.height*2.2
                app.stage.addChild(sprite_button_duels)
            }
            app.stage.removeChild(sprite_star)
            app.stage.addChild(sprite_star)
            
            if (key_profile==true){

                if (key_upd_st==false){
                    update_statistics()
                    key_upd_st=true
                }
                app.stage.removeChild(sprite_profile_frame)
                app.stage.addChild(sprite_profile_frame)
                app.stage.removeChild(sprite_avatar_frame)
                app.stage.removeChild(sprite_avatar)
                
                basicText16.x=sprite_star.x-basicText16.width
                basicText16.y=sprite_star.y+sprite_star.height/2-basicText16.height/2       
                basicText6.y=basicText5.y+basicText5.height*1
                basicText6.x=app.screen.width/2-basicText6.width/2
                basicText7.y=basicText5.y+basicText5.height*3
                basicText7.x=app.screen.width/2-basicText7.width/2

                basicText8.y=basicText5.y+basicText5.height*5
                basicText8.x=app.screen.width/2-basicText8.width/2
                basicText9.y=basicText5.y+basicText5.height*6
                basicText9.x=app.screen.width/2-basicText9.width/2
                basicText10.y=basicText5.y+basicText5.height*7
                basicText10.x=app.screen.width/2-basicText10.width/2
                basicText11.y=basicText5.y+basicText5.height*8
                basicText11.x=app.screen.width/2-basicText11.width/2
                basicText12.y=basicText5.y+basicText5.height*10
                basicText12.x=app.screen.width/2-basicText12.width/2
                basicText13.y=basicText5.y+basicText5.height*11.5
                basicText13.x=app.screen.width/2-basicText13.width/2
                basicText14.y=basicText5.y+basicText5.height*12.5
                basicText14.x=app.screen.width/2-basicText14.width/2
                basicText15.y=sprite_profile_frame.y+sprite_profile_frame.height-basicText15.height*3
                basicText15.x=app.screen.width/2-basicText15.width/2
                basicText15.text='Registration Date: '+my_date
                app.stage.addChild(statistic_container)
            }
            if (key_leaderboard==true){
                
                if (lead1==true){
                    console.log(11)
                    sprite_lead.y=app.screen.height*1/6
                    app.stage.addChild(sprite_lead)
                    if (lead1req==false){
                        lead1req=true
                        fetch(domen+'/lead_stars').then((res)=>{return (res)}).then((resu)=>{return resu.json()}).then((resp)=>{
                            app.stage.alpha=1
                            sprite_lead.y=app.screen.height*1/6
                            app.stage.addChild(sprite_lead)
                            for (var j=0;j<resp.length;j++){
                                lt1[j].x=20
                                lt1[j].y=sprite_lead.y+sprite_lead.height/5+j*(sprite_lead.height/20)
                                lt1[j].text=(j+1)+'. '+resp[j][1]
                                
                                lt2[j].y=sprite_lead.y+sprite_lead.height/5+j*(sprite_lead.height/20)
                                lt2[j].text=resp[j][0]
                                lt2[j].x=app.screen.width-lt2[j].width-20
                                jm=resp.length
                            }
                        })
                    }
                    app.stage.removeChild(sprite_lead21)
                    app.stage.removeChild(sprite_lead31)
                    app.stage.addChild(sprite_lead11)
                    app.stage.addChild(sprite_lead20)
                    app.stage.addChild(sprite_lead30)
                    for (var j=0;j<jm;j++){
                        app.stage.removeChild(lt1[j])
                        app.stage.removeChild(lt2[j])
                        app.stage.addChild(lt1[j])
                        app.stage.addChild(lt2[j])
                    }
                }
                else if (lead2==true){
                    console.log(21)
                    sprite_lead.y=app.screen.height*1/6
                    app.stage.addChild(sprite_lead)
                    
                    if (lead2req==false){
                        lead2req=true
                        fetch(domen+'/lead_endless').then((res)=>{return (res)}).then((resu)=>{return resu.json()}).then((resp)=>{
                            
                            app.stage.alpha=1
                            sprite_lead.y=app.screen.height*1/6
                            app.stage.addChild(sprite_lead)
                            for (var j=0;j<resp.length;j++){
                                lt1[j].x=20
                                lt1[j].y=sprite_lead.y+sprite_lead.height/5+j*(sprite_lead.height/20)
                                lt1[j].text=(j+1)+'. '+resp[j][1]
                                
                                lt2[j].y=sprite_lead.y+sprite_lead.height/5+j*(sprite_lead.height/20)
                                lt2[j].text=resp[j][0]
                                lt2[j].x=app.screen.width-lt2[j].width-20
                                jm=resp.length
                            }
                        })
                    }
                    app.stage.removeChild(sprite_lead11)
                    app.stage.removeChild(sprite_lead21)
                    app.stage.addChild(sprite_lead21)
                    app.stage.addChild(sprite_lead10)
                    app.stage.addChild(sprite_lead30)
                    for (var j=0;j<jm;j++){
                        app.stage.removeChild(lt1[j])
                        app.stage.removeChild(lt2[j])
                        app.stage.addChild(lt1[j])
                        app.stage.addChild(lt2[j])
                    }
                }
                else if (lead3==true){
                    console.log(31)
                    sprite_lead.y=app.screen.height*1/6
                    app.stage.addChild(sprite_lead)
                    
                    if (lead3req==false){
                        lead3req=true
                        fetch(domen+'/lead_hardmode').then((res)=>{return (res)}).then((resu)=>{return resu.json()}).then((resp)=>{
                            
                            app.stage.alpha=1
                            sprite_lead.y=app.screen.height*1/6
                            app.stage.addChild(sprite_lead)
                            for (var j=0;j<resp.length;j++){
                                lt1[j].x=20
                                lt1[j].y=sprite_lead.y+sprite_lead.height/5+j*(sprite_lead.height/20)
                                lt1[j].text=(j+1)+'. '+resp[j][1]
                                
                                lt2[j].y=sprite_lead.y+sprite_lead.height/5+j*(sprite_lead.height/20)
                                lt2[j].text=resp[j][0]
                                lt2[j].x=app.screen.width-lt2[j].width-20
                                jm=resp.length
                            }
                        })
                    }
                    app.stage.removeChild(sprite_lead11)
                    app.stage.removeChild(sprite_lead21)
                    app.stage.addChild(sprite_lead31)
                    app.stage.addChild(sprite_lead20)
                    app.stage.addChild(sprite_lead10)
                    for (var j=0;j<jm;j++){
                        app.stage.removeChild(lt1[j])
                        app.stage.removeChild(lt2[j])
                        app.stage.addChild(lt1[j])
                        app.stage.addChild(lt2[j])
                    }
                }
            }
            else{
                app.stage.aplha=1

            }
            


            
            app.stage.addChild(sprite_avatar_frame)
            app.stage.addChild(sprite_avatar)
            if (key_leaderboard==false){
                //console.log(2)
                app.stage.removeChild(sprite_cup)
                app.stage.addChild(sprite_cup)
            }
            else{
                app.stage.removeChild(sprite_cup)
            }
            if (key_profile==true){
                app.stage.removeChild(sprite_cup)
                
            }
            basicText16.x=app.screen.width-sprite_star.width-basicText16.width*1.2
            basicText16.y=sprite_star.height/2-basicText16.height/4
            basicText16.text=(my_collect_stars)
            app.stage.addChild(basicText16)
            app.stage.addChild(basicText5)
        }
        else if (key_main_menu == false) {

            if ((key_game_over == false) & (key_win==false)){
                queue_timer+=queue_timer_m
                falling()
                if ((key_music_one_start==true) & (key_music_one_1==false)){
                    console.log(1)
                    key_music_one_1=true
                    PIXI.sound.play('geo8')
                    
                }

            }
            else if ((key_game_over == false) & (key_win==true)){
                if (key_tap_continue == false) {
                    app.stage.removeChild(sprite_game_win)
                    app.stage.addChild(sprite_game_win)
                    app.stage.removeChild(basicText3)
                    app.stage.removeChild(basicText4)
                    basicText3.text=('Score: ' + String(my_score));
                    basicText4.text=('Stars: ' + String(my_stars));
                    if (key_hard==false){
                        if (my_score>my_highscore){
                            my_highscore=my_score
                        }    
                    }
                    else {
                        if (my_score>my_hard_highscore){
                            my_hard_highscore=my_score
                        }  
                    }
                   
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
                    save_statistics()
                    key_upd_st=false
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
                    save_statistics()
                    key_upd_st=false
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
