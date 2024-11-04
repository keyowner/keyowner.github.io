const app = new PIXI.Application();
await app.init({ resizeTo: window, antialias: false, useContextAlpha: false });
    



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
await PIXI.Assets.load('./img/multi_pink.png');
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
function Sprite_Auto(sprite1) {
    sprite1.width = sprite1.width * (app.screen.width / 720)
    sprite1.height = sprite1.height * (app.screen.height / 1280)
}

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

//multi

let sprite_multi = PIXI.Sprite.from('./img/multi_pink.png');
Sprite_Auto(sprite_multi)
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
                if (queue_red[i]==max_queue_timer){
                    key_win=true
                }
            }
        }

    }
    for (let i = 0; i < stars_keys_3.length; i++) {
        if (stars_keys_3[i]) {
            if ((stars_keys_3[i].y + stars_keys_3[i].height >= app.screen.height - sprite_key_red0.height) & (stars_keys_3[i].x >= sprite_key_red0.x) & (stars_keys_3[i].x <= sprite_key_red0.x + sprite_key_red0.width)) {
                app.stage.removeChild(stars_keys_3[i]);
                app.stage.removeChild(stars_shine_keys_3[i]);
                delete stars_keys_3[i]
                delete stars_shine_keys_3[i]
                my_stars += 1
                my_score += 100
                if (queue_stars_3[i]==max_queue_timer){
                    key_win=true
                }
            }
        }
    }
    for (let i = 0; i < bombs_keys_3.length; i++) {
        if (bombs_keys_3[i]) {
            if ((bombs_keys_3[i].y + bombs_keys_3[i].height >= app.screen.height - sprite_key_red0.height) & (bombs_keys_3[i].x >= sprite_key_red0.x) & (bombs_keys_3[i].x <= sprite_key_red0.x + sprite_key_red0.width)) {
                app.stage.removeChild(bombs_keys_3[i]);
                delete bombs_keys_3[i]
                if (key_blood != 1) {
                    app.stage.addChild(sprite_blood_effect)
                }
                my_hp -= 1
                key_blood = 1
                if (queue_bombs_3[i]==max_queue_timer){
                    key_win=true
                }

            }
        }

    }

    for (let i = 0; i < snow_keys_3.length; i++) {
        if (snow_keys_3[i]) {
            if ((snow_keys_3[i].y + snow_keys_3[i].height >= app.screen.height - sprite_key_red0.height) & (snow_keys_3[i].x >= sprite_key_red0.x) & (snow_keys_3[i].x <= sprite_key_red0.x + sprite_key_red0.width)) {
                app.stage.removeChild(snow_keys_3[i]);
                delete snow_keys_3[i]
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
                if (queue_snow_3[i]==max_queue_timer){
                    key_win=true
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
                if (queue_green[i]==max_queue_timer){
                    key_win=true
                }
            }
        }

    }
    for (let i = 0; i < stars_keys_2.length; i++) {
        if (stars_keys_2[i]) {
            if ((stars_keys_2[i].y + stars_keys_2[i].height >= app.screen.height - sprite_key_green0.height) & (stars_keys_2[i].x >= sprite_key_green0.x) & (stars_keys_2[i].x <= sprite_key_green0.x + sprite_key_green0.width)) {
                app.stage.removeChild(stars_keys_2[i]);
                app.stage.removeChild(stars_shine_keys_2[i]);
                delete stars_keys_2[i]
                delete stars_shine_keys_2[i]
                my_stars += 1
                my_score += 100
                if (queue_stars_2[i]==max_queue_timer){
                    key_win=true
                }
            }
        }
    }
    for (let i = 0; i < bombs_keys_2.length; i++) {
        if (bombs_keys_2[i]) {
            if ((bombs_keys_2[i].y + bombs_keys_2[i].height >= app.screen.height - sprite_key_green0.height) & (bombs_keys_2[i].x >= sprite_key_green0.x) & (bombs_keys_2[i].x <= sprite_key_green0.x + sprite_key_green0.width)) {
                app.stage.removeChild(bombs_keys_2[i]);
                delete bombs_keys_2[i]
                if (key_blood != 1) {
                    app.stage.addChild(sprite_blood_effect)
                }
                my_hp -= 1
                key_blood = 1
                if (queue_bombs_2[i]==max_queue_timer){
                    key_win=true
                }
            }
        }

    }

    for (let i = 0; i < snow_keys_2.length; i++) {
        if (snow_keys_2[i]) {
            if ((snow_keys_2[i].y + snow_keys_2[i].height >= app.screen.height - sprite_key_green0.height) & (snow_keys_2[i].x >= sprite_key_green0.x) & (snow_keys_2[i].x <= sprite_key_green0.x + sprite_key_green0.width)) {
                app.stage.removeChild(snow_keys_2[i]);
                delete snow_keys_2[i]
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
                if (queue_snow_2[i]==max_queue_timer){
                    key_win=true
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
                if (queue_blue[i]==max_queue_timer){
                    key_win=true
                }
            }
        }
    }

    for (let i = 0; i < stars_keys_1.length; i++) {
        if (stars_keys_1[i]) {
            if ((stars_keys_1[i].y + stars_keys_1[i].height >= app.screen.height - sprite_key_blue0.height) & (stars_keys_1[i].x >= sprite_key_blue0.x) & (stars_keys_1[i].x <= sprite_key_blue0.x + sprite_key_blue0.width)) {
                app.stage.removeChild(stars_keys_1[i]);
                app.stage.removeChild(stars_shine_keys_1[i]);
                delete stars_keys_1[i]
                delete stars_shine_keys_1[i]
                my_stars += 1
                my_score += 100
                if (queue_stars_1[i]==max_queue_timer){
                    key_win=true
                }
            }
        }
    }

    for (let i = 0; i < bombs_keys_1.length; i++) {
        if (bombs_keys_1[i]) {
            if ((bombs_keys_1[i].y + bombs_keys_1[i].height >= app.screen.height - sprite_key_blue0.height) & (bombs_keys_1[i].x >= sprite_key_blue0.x) & (bombs_keys_1[i].x <= sprite_key_blue0.x + sprite_key_blue0.width)) {
                app.stage.removeChild(bombs_keys_1[i]);
                delete bombs_keys_1[i]
                if (key_blood != 1) {
                    app.stage.addChild(sprite_blood_effect)
                }
                my_hp -= 1
                key_blood = 1
                if (queue_bombs_1[i]==max_queue_timer){
                    key_win=true
                }
            }
        }
    }

    for (let i = 0; i < snow_keys_1.length; i++) {
        if (snow_keys_1[i]) {
            if ((snow_keys_1[i].y + snow_keys_1[i].height >= app.screen.height - sprite_key_blue0.height) & (snow_keys_1[i].x >= sprite_key_blue0.x) & (snow_keys_1[i].x <= sprite_key_blue0.x + sprite_key_blue0.width)) {
                app.stage.removeChild(snow_keys_1[i]);
                delete snow_keys_1[i]
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
                if (queue_snow_1[i]==max_queue_timer){
                    key_win=true
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
                if (queue_yellow[i]==max_queue_timer){
                    key_win=true
                }
            }
        }

    }
    for (let i = 0; i < stars_keys_0.length; i++) {
        if (stars_keys_0[i]) {
            if ((stars_keys_0[i].y + stars_keys_0[i].height >= app.screen.height - sprite_key_yellow0.height) & (stars_keys_0[i].x >= sprite_key_yellow0.x) & (stars_keys_0[i].x <= sprite_key_yellow0.x + sprite_key_yellow0.width)) {
                app.stage.removeChild(stars_keys_0[i]);
                app.stage.removeChild(stars_shine_keys_0[i]);
                delete stars_keys_0[i]
                delete stars_shine_keys_0[i]
                my_stars += 1
                my_score += 100
                if (queue_stars_0[i]==max_queue_timer){
                    key_win=true
                }
            }
        }
    }
    for (let i = 0; i < bombs_keys_0.length; i++) {
        if (bombs_keys_0[i]) {
            if ((bombs_keys_0[i].y + bombs_keys_0[i].height >= app.screen.height - sprite_key_yellow0.height) & (bombs_keys_0[i].x >= sprite_key_yellow0.x) & (bombs_keys_0[i].x <= sprite_key_yellow0.x + sprite_key_yellow0.width)) {
                if (bombs_keys_0[i].y + bombs_keys_0[i].height >= app.screen.height - sprite_key_yellow0.height) {
                    app.stage.removeChild(bombs_keys_0[i]);
                    delete bombs_keys_0[i]
                    if (key_blood != 1) {
                        app.stage.addChild(sprite_blood_effect)
                    }
                    my_hp -= 1
                    key_blood = 1
                    if (queue_bombs_0[i]==max_queue_timer){
                        key_win=true
                    }
                }
            }
        }
    }
    /* */
    for (let i = 0; i < snow_keys_0.length; i++) {
        if (snow_keys_0[i]) {
            if ((snow_keys_0[i].y + snow_keys_0[i].height >= app.screen.height - sprite_key_yellow0.height) & (snow_keys_0[i].x >= sprite_key_yellow0.x) & (snow_keys_0[i].x <= sprite_key_yellow0.x + sprite_key_yellow0.width)) {
                app.stage.removeChild(snow_keys_0[i]);
                delete snow_keys_0[i]
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
                if (queue_snow_0[i]==max_queue_timer){
                    key_win=true
                }
            }
        }
    }
}

function getRandom(max) {
    return Math.floor(Math.random() * max);
}

function main_menu() {
    console.log('main menu')
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

let stars_keys_0 = []
let stars_keys_1 = []
let stars_keys_2 = []
let stars_keys_3 = []
let stars_keys_id_0 = 0
let stars_keys_id_1 = 0
let stars_keys_id_2 = 0
let stars_keys_id_3 = 0


let stars_shine_keys_0 = []
let stars_shine_keys_id_0 = 0
let stars_shine_keys_1 = []
let stars_shine_keys_id_1 = 0
let stars_shine_keys_2 = []
let stars_shine_keys_id_2 = 0
let stars_shine_keys_3 = []
let stars_shine_keys_id_3 = 0

let bombs_keys_0 = []
let bombs_keys_id_0 = 0
let bombs_keys_1 = []
let bombs_keys_id_1 = 0
let bombs_keys_2 = []
let bombs_keys_id_2 = 0
let bombs_keys_3 = []
let bombs_keys_id_3 = 0

let snow_keys_0 = []
let snow_keys_id_0 = 0
let snow_keys_1 = []
let snow_keys_id_1 = 0
let snow_keys_2 = []
let snow_keys_id_2 = 0
let snow_keys_3 = []
let snow_keys_id_3 = 0


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


let font_s = 10 * window.devicePixelRatio
const style = new PIXI.TextStyle({
    fontFamily: 'yoster',
    fontSize: font_s,
    fill: '#ffffff', // gradient
});
let my_score = 0;
let my_stars = 0

const basicText = new PIXI.Text({ text: 'Score: ' + String(my_score), style });
const basicText2 = new PIXI.Text({ text: String(my_stars), style });
basicText.x = 15 * window.devicePixelRatio / 2
basicText.y = sprite_black_top.height / 2 - font_s / 2;
basicText2.x = app.screen.width - sprite_star_score.width - basicText2.width - 12 * app.screen.width / 720 * 5;
basicText2.y = sprite_black_top.height / 2 - font_s / 2;

app.stage.addChild(basicText);
app.stage.addChild(basicText2);

//app.stage.addChild(myScoreText);

let speed_star = 5
let speed_notes = 5
let speed_bomb = 5
let speed_snow = 5

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
        key_game_over = true
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
        for (var i = 0; i < stars_keys_id_0; i++) {
            
            if (stars_keys_0[i]) {
                stars_shine_keys_0[i].y += speed_star;
                stars_keys_0[i].y += speed_star;
                if (stars_keys_0[i].y >= app.screen.height - sprite_key_yellow0.height / 2) {
                    app.stage.removeChild(stars_keys_0[i]);
                    console.log('star')
                    app.stage.removeChild(stars_shine_keys_0[i])
                    delete stars_keys_0[i]
                    delete stars_shine_keys_0[i]
                    if (queue_stars_0[i]==max_queue_timer){
                        key_win=true
                    }
                }
            }

        }
        for (var i = 0; i < stars_keys_id_1; i++) {
            if (stars_keys_1[i]) {
                stars_shine_keys_1[i].y += speed_star;
                stars_keys_1[i].y += speed_star;
                if (stars_keys_1[i].y >= app.screen.height - sprite_key_yellow0.height / 2) {
                    console.log('star')
                    app.stage.removeChild(stars_keys_1[i]);
                    app.stage.removeChild(stars_shine_keys_1[i])
                    delete stars_keys_1[i]
                    delete stars_shine_keys_1[i]
                    if (queue_stars_1[i]==max_queue_timer){
                        key_win=true
                    }
                }
            }

        }
        for (var i = 0; i < stars_keys_id_2; i++) {
            if (stars_keys_2[i]) {
                stars_shine_keys_2[i].y += speed_star;
                stars_keys_2[i].y += speed_star;
                if (stars_keys_2[i].y >= app.screen.height - sprite_key_yellow0.height / 2) {
                    console.log('star')
                    app.stage.removeChild(stars_keys_2[i]);
                    app.stage.removeChild(stars_shine_keys_2[i])
                    delete stars_keys_2[i]
                    delete stars_shine_keys_2[i]
                    if (queue_stars_2[i]==max_queue_timer){
                        key_win=true
                    }
                }
            }

        }
        for (var i = 0; i < stars_keys_id_3; i++) {
            if (stars_keys_3[i]) {
                stars_shine_keys_3[i].y += speed_star;
                stars_keys_3[i].y += speed_star;
                if (stars_keys_3[i].y >= app.screen.height - sprite_key_yellow0.height / 2) {
                    console.log('star')
                    app.stage.removeChild(stars_keys_3[i]);
                    app.stage.removeChild(stars_shine_keys_3[i])
                    delete stars_keys_3[i]
                    delete stars_shine_keys_3[i]
                    if (queue_stars_3[i]==max_queue_timer){
                        key_win=true
                    }
                }
            }

        }
/* */
        for (var i = 0; i < bombs_keys_id_0; i++) {
            if (bombs_keys_0[i]) {
                bombs_keys_0[i].y += speed_bomb;
                if ((bombs_keys_0[i].y >= app.screen.height - sprite_key_yellow0.height)) {
                    app.stage.removeChild(bombs_keys_0[i]);
                    delete bombs_keys_0[i]
                    if (queue_bombs_0[i]==max_queue_timer){
                        key_win=true
                    }
                }
            }

        }
        for (var i = 0; i < bombs_keys_id_1; i++) {
            if (bombs_keys_1[i]) {
                bombs_keys_1[i].y += speed_bomb;
                if ((bombs_keys_1[i].y >= app.screen.height - sprite_key_yellow0.height)) {
                    app.stage.removeChild(bombs_keys_1[i]);
                    delete bombs_keys_1[i]
                    if (queue_bombs_1[i]==max_queue_timer){
                        key_win=true
                    }
                }
            }

        }
        for (var i = 0; i < bombs_keys_id_2; i++) {
            if (bombs_keys_2[i]) {
                bombs_keys_2[i].y += speed_bomb;
                if ((bombs_keys_2[i].y >= app.screen.height - sprite_key_yellow0.height)) {
                    app.stage.removeChild(bombs_keys_2[i]);
                    delete bombs_keys_2[i]
                    if (queue_bombs_2[i]==max_queue_timer){
                        key_win=true
                    }
                }
            }

        }
        for (var i = 0; i < bombs_keys_id_3; i++) {
            if (bombs_keys_3[i]) {
                bombs_keys_3[i].y += speed_bomb;
                if ((bombs_keys_3[i].y >= app.screen.height - sprite_key_yellow0.height)) {
                    app.stage.removeChild(bombs_keys_3[i]);
                    delete bombs_keys_3[i]
                    if (queue_bombs_3[i]==max_queue_timer){
                        key_win=true
                    }
                }
            }

        }
        
/* */
        for (var i = 0; i < snow_keys_id_0; i++) {
            if (snow_keys_0[i]) {
                snow_keys_0[i].y += speed_snow;
                if ((snow_keys_0[i].y >= app.screen.height - sprite_key_yellow0.height / 2)) {
                    app.stage.removeChild(snow_keys_0[i]);
                    delete snow_keys_0[i]
                    if (queue_snow_0[i]==max_queue_timer){
                        key_win=true
                    }
                }
            }

        }
        for (var i = 0; i < snow_keys_id_1; i++) {
            if (snow_keys_1[i]) {
                snow_keys_1[i].y += speed_snow;
                if ((snow_keys_1[i].y >= app.screen.height - sprite_key_yellow0.height / 2)) {
                    app.stage.removeChild(snow_keys_1[i]);
                    delete snow_keys_1[i]
                    if (queue_snow_1[i]==max_queue_timer){
                        key_win=true
                    }
                }
            }

        }
        for (var i = 0; i < snow_keys_id_2; i++) {
            if (snow_keys_2[i]) {
                snow_keys_2[i].y += speed_snow;
                if ((snow_keys_2[i].y >= app.screen.height - sprite_key_yellow0.height / 2)) {
                    app.stage.removeChild(snow_keys_2[i]);
                    delete snow_keys_2[i]
                    if (queue_snow_2[i]==max_queue_timer){
                        key_win=true
                    }
                }
            }

        }
        for (var i = 0; i < snow_keys_id_3; i++) {
            if (snow_keys_3[i]) {
                snow_keys_3[i].y += speed_snow;
                if ((snow_keys_3[i].y >= app.screen.height - sprite_key_yellow0.height / 2)) {
                    app.stage.removeChild(snow_keys_3[i]);
                    delete snow_keys_3[i]
                    if (queue_snow_3[i]==max_queue_timer){
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
                speed_bomb *= 2
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


        app.stage.addChild(sprite_multi);
    }

}
let queue_timer=0
function falling() {
    for (var i=red_keys_id;i<queue_red.length;i++){
        if ((queue_timer+1>=queue_red[i]) & (queue_timer-1<=queue_red[i])){
            red_keys.push(PIXI.Sprite.from('./img/red_note.png'))     
            console.log('red')
            Sprite_Auto(red_keys[red_keys_id])
            red_keys[red_keys_id].x = 16 * app.renderer.width / 144 + 16 * app.renderer.width / 144 * 2 * 3
            app.stage.addChild(red_keys[red_keys_id]);
            red_keys_id+=1
        }
    }
    for (var i=blue_keys_id;i<queue_blue.length;i++){
        if ((queue_timer+1>=queue_blue[i]) & (queue_timer-1<=queue_blue[i])){
            console.log('blue')
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
   
    for (var i=stars_keys_id_0;i<(queue_stars_0.length+queue_stars_1.length+queue_stars_2.length+queue_stars_3.length);i++){
        if (((queue_timer+1>=queue_stars_0[i]) & (queue_timer-1<=queue_stars_0[i]))|
        ((queue_timer+1>=queue_stars_1[i]) & (queue_timer-1<=queue_stars_1[i]))|
        ((queue_timer+1>=queue_stars_2[i]) & (queue_timer-1<=queue_stars_2[i]))|
        ((queue_timer+1>=queue_stars_3[i]) & (queue_timer-1<=queue_stars_3[i]))){
            
            if ((queue_timer+1>=queue_stars_0[i]) & (queue_timer-1<=queue_stars_0[i])){
                stars_keys_0.push(PIXI.Sprite.from('./img/star.png'))
                stars_shine_keys_0.push(PIXI.Sprite.from('./img/star_shine.png'))
                Sprite_Auto(stars_keys_0[stars_keys_id_0])
                Sprite_Auto(stars_shine_keys_0[stars_shine_keys_id_0])
                stars_keys_0[stars_keys_id_0].x = 18 * app.renderer.width / 144 + 32 * app.renderer.width / 144 * 0
                stars_keys_0[stars_keys_id_0].y = 0
                stars_shine_keys_0[stars_shine_keys_id_0].x = stars_keys_0[stars_keys_id_0].x + stars_keys_0[stars_keys_id_0].width / 2 - stars_shine_keys_0[stars_shine_keys_id_0].width / 2
                stars_shine_keys_0[stars_shine_keys_id_0].y = stars_keys_0[stars_keys_id_0].y + stars_keys_0[stars_keys_id_0].height / 2 - stars_shine_keys_0[stars_shine_keys_id_0].height / 2
                app.stage.addChild(stars_shine_keys_0[stars_shine_keys_id_0]);
                app.stage.addChild(stars_keys_0[stars_keys_id_0]);
                stars_keys_id_0 += 1
                stars_shine_keys_id_0 += 1
            }
            else if ((queue_timer+1>=queue_stars_1[i]) & (queue_timer-1<=queue_stars_1[i])){
                stars_keys_1.push(PIXI.Sprite.from('./img/star.png'))
                stars_shine_keys_1.push(PIXI.Sprite.from('./img/star_shine.png'))
                Sprite_Auto(stars_keys_1[stars_keys_id_1])
                Sprite_Auto(stars_shine_keys_1[stars_shine_keys_id_1])
                stars_keys_1[stars_keys_id_1].x = 18 * app.renderer.width / 144 + 32 * app.renderer.width / 144 * 1
                stars_keys_1[stars_keys_id_1].y = 0
                stars_shine_keys_1[stars_shine_keys_id_1].x = stars_keys_1[stars_keys_id_1].x + stars_keys_1[stars_keys_id_1].width / 2 - stars_shine_keys_1[stars_shine_keys_id_1].width / 2
                stars_shine_keys_1[stars_shine_keys_id_1].y = stars_keys_1[stars_keys_id_1].y + stars_keys_1[stars_keys_id_1].height / 2 - stars_shine_keys_1[stars_shine_keys_id_1].height / 2
                app.stage.addChild(stars_shine_keys_1[stars_shine_keys_id_1]);
                app.stage.addChild(stars_keys_1[stars_keys_id_1]);
                stars_keys_id_1 += 1
                stars_shine_keys_id_1 += 1
            }
            else if ((queue_timer+1>=queue_stars_2[i]) & (queue_timer-1<=queue_stars_2[i])){
                stars_keys_2.push(PIXI.Sprite.from('./img/star.png'))
                stars_shine_keys_2.push(PIXI.Sprite.from('./img/star_shine.png'))
                Sprite_Auto(stars_keys_2[stars_keys_id_2])
                Sprite_Auto(stars_shine_keys_2[stars_shine_keys_id_2])
                stars_keys_2[stars_keys_id_2].x = 18 * app.renderer.width / 144 + 32 * app.renderer.width / 144 * 2
                stars_keys_2[stars_keys_id_2].y = 0
                stars_shine_keys_2[stars_shine_keys_id_2].x = stars_keys_2[stars_keys_id_2].x + stars_keys_2[stars_keys_id_2].width / 2 - stars_shine_keys_2[stars_shine_keys_id_2].width / 2
                stars_shine_keys_2[stars_shine_keys_id_2].y = stars_keys_2[stars_keys_id_2].y + stars_keys_2[stars_keys_id_2].height / 2 - stars_shine_keys_2[stars_shine_keys_id_2].height / 2
                app.stage.addChild(stars_shine_keys_2[stars_shine_keys_id_2]);
                app.stage.addChild(stars_keys_2[stars_keys_id_2]);
                stars_keys_id_2 += 1
                stars_shine_keys_id_2 += 1
            }
            else if ((queue_timer+1>=queue_stars_3[i]) & (queue_timer-1<=queue_stars_3[i])){
                stars_keys_3.push(PIXI.Sprite.from('./img/star.png'))
                stars_shine_keys_3.push(PIXI.Sprite.from('./img/star_shine.png'))
                Sprite_Auto(stars_keys_3[stars_keys_id_3])
                Sprite_Auto(stars_shine_keys_3[stars_shine_keys_id_3])
                stars_keys_3[stars_keys_id_3].x = 18 * app.renderer.width / 144 + 32 * app.renderer.width / 144 * 3
                stars_keys_3[stars_keys_id_3].y = 0
                stars_shine_keys_3[stars_shine_keys_id_3].x = stars_keys_3[stars_keys_id_3].x + stars_keys_3[stars_keys_id_3].width / 2 - stars_shine_keys_3[stars_shine_keys_id_3].width / 2
                stars_shine_keys_3[stars_shine_keys_id_3].y = stars_keys_3[stars_keys_id_3].y + stars_keys_3[stars_keys_id_3].height / 2 - stars_shine_keys_3[stars_shine_keys_id_3].height / 2
                app.stage.addChild(stars_shine_keys_3[stars_shine_keys_id_3]);
                app.stage.addChild(stars_keys_3[stars_keys_id_3]);
                stars_keys_id_3 += 1
                stars_shine_keys_id_3 += 1
            }
            
        }
    }
    for (var i=bombs_keys_id_0;i<(queue_bombs_0.length+queue_bombs_1.length+queue_bombs_2.length+queue_bombs_3.length);i++){
        if (((queue_timer+1>=queue_bombs_0[i]) & (queue_timer-1<=queue_bombs_0[i]))|
        ((queue_timer+1>=queue_bombs_1[i]) & (queue_timer-1<=queue_bombs_1[i]))|
        ((queue_timer+1>=queue_bombs_2[i]) & (queue_timer-1<=queue_bombs_2[i]))|
        ((queue_timer+1>=queue_bombs_3[i]) & (queue_timer-1<=queue_bombs_3[i]))){
            
            if ((queue_timer+1>=queue_bombs_0[i]) & (queue_timer-1<=queue_bombs_0[i])){
                bombs_keys_0.push(PIXI.Sprite.from('./img/bomb.png'))
                Sprite_Auto(bombs_keys_0[bombs_keys_id_0])
                bombs_keys_0[bombs_keys_id_0].x = 17 * app.renderer.width / 144 + 32 * app.renderer.width / 144 * 0
                app.stage.addChild(bombs_keys_0[bombs_keys_id_0]);
                bombs_keys_id_0 += 1
            }
            else if ((queue_timer+1>=queue_bombs_1[i]) & (queue_timer-1<=queue_bombs_1[i])){
                bombs_keys_1.push(PIXI.Sprite.from('./img/bomb.png'))
                Sprite_Auto(bombs_keys_1[bombs_keys_id_1])
                bombs_keys_1[bombs_keys_id_1].x = 17 * app.renderer.width / 144 + 32 * app.renderer.width / 144 * 1
                app.stage.addChild(bombs_keys_1[bombs_keys_id_1]);
                bombs_keys_id_1 += 1
            }
            else if ((queue_timer+1>=queue_bombs_2[i]) & (queue_timer-1<=queue_bombs_2[i])){
                bombs_keys_2.push(PIXI.Sprite.from('./img/bomb.png'))
                Sprite_Auto(bombs_keys_2[bombs_keys_id_2])
                bombs_keys_2[bombs_keys_id_2].x = 17 * app.renderer.width / 144 + 32 * app.renderer.width / 144 * 2
                app.stage.addChild(bombs_keys_2[bombs_keys_id_2]);
                bombs_keys_id_2 += 1
            }
            else if ((queue_timer+1>=queue_bombs_3[i]) & (queue_timer-1<=queue_bombs_3[i])){
                bombs_keys_3.push(PIXI.Sprite.from('./img/bomb.png'))
                Sprite_Auto(bombs_keys_3[bombs_keys_id_3])
                bombs_keys_3[bombs_keys_id_3].x = 17 * app.renderer.width / 144 + 32 * app.renderer.width / 144 * 3
                app.stage.addChild(bombs_keys_3[bombs_keys_id_3]);
                bombs_keys_id_3 += 1
            }
            
        }
    }
    for (var i=snow_keys_id_0;i<(queue_snow_0.length+queue_snow_1.length+queue_snow_2.length+queue_snow_3.length);i++){
        if (((queue_timer+1>=queue_snow_0[i]) & (queue_timer-1<=queue_snow_0[i]))|
        ((queue_timer+1>=queue_snow_1[i]) & (queue_timer-1<=queue_snow_1[i]))|
        ((queue_timer+1>=queue_snow_2[i]) & (queue_timer-1<=queue_snow_2[i]))|
        ((queue_timer+1>=queue_snow_3[i]) & (queue_timer-1<=queue_snow_3[i]))){
            
            if ((queue_timer+1>=queue_snow_0[i]) & (queue_timer-1<=queue_snow_0[i])){
                
                snow_keys_0.push(PIXI.Sprite.from('./img/snow.png'))
                Sprite_Auto(snow_keys_0[snow_keys_id_0])
                snow_keys_0[snow_keys_id_0].x = 18 * app.renderer.width / 144 + 32 * app.renderer.width / 144 * 0
                app.stage.addChild(snow_keys_0[snow_keys_id_0]);
                snow_keys_id_0 += 1
            }
            else if ((queue_timer+1>=queue_snow_1[i]) & (queue_timer-1<=queue_snow_1[i])){
                snow_keys_1.push(PIXI.Sprite.from('./img/snow.png'))
                Sprite_Auto(snow_keys_1[snow_keys_id_1])
                snow_keys_1[snow_keys_id_1].x = 18 * app.renderer.width / 144 + 32 * app.renderer.width / 144 * 1
                app.stage.addChild(snow_keys_1[snow_keys_id_1]);
                snow_keys_id_1 += 1
            }
            else if ((queue_timer+1>=queue_snow_2[i]) & (queue_timer-1<=queue_snow_2[i])){
                snow_keys_2.push(PIXI.Sprite.from('./img/snow.png'))
                Sprite_Auto(snow_keys_2[snow_keys_id_2])
                snow_keys_2[snow_keys_id_2].x = 18 * app.renderer.width / 144 + 32 * app.renderer.width / 144 * 2
                app.stage.addChild(snow_keys_2[snow_keys_id_2]);
                snow_keys_id_2 += 1
            }
            else if ((queue_timer+1>=queue_snow_3[i]) & (queue_timer-1<=queue_snow_3[i])){
                snow_keys_3.push(PIXI.Sprite.from('./img/snow.png'))
                Sprite_Auto(snow_keys_3[snow_keys_id_3])
                snow_keys_3[snow_keys_id_3].x = 18 * app.renderer.width / 144 + 32 * app.renderer.width / 144 * 3
                app.stage.addChild(snow_keys_3[snow_keys_id_3]);
                snow_keys_id_3 += 1
            }
            
            
        }
    }
    moving()
}

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
    console.log('new')
    key_main_menu=false
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

    bombs_keys_id_0=0
    bombs_keys_id_1=0
    bombs_keys_id_2=0
    bombs_keys_id_3=0

    stars_keys_id_0=0
    stars_keys_id_1=0
    stars_keys_id_2=0
    stars_keys_id_3=0

    stars_shine_keys_id_0=0
    stars_shine_keys_id_1=0
    stars_shine_keys_id_2=0
    stars_shine_keys_id_3=0

    snow_keys_id_0=0
    snow_keys_id_1=0
    snow_keys_id_2=0
    snow_keys_id_3=0

    red_keys=[]
    green_keys=[]
    blue_keys=[]
    yellow_keys=[]
    stars_keys_0=[]
    stars_keys_1=[]
    stars_keys_2=[]
    stars_keys_3=[]
    stars_shine_keys_0=[]
    stars_shine_keys_1=[]
    stars_shine_keys_2=[]
    stars_shine_keys_3=[]
    bombs_keys_0=[]
    bombs_keys_1=[]
    bombs_keys_2=[]
    bombs_keys_3=[]
    snow_keys_0=[]
    snow_keys_1=[]
    snow_keys_2=[]
    snow_keys_3=[]

    random_queue()
    clear_screen()

    app.stage.removeChild(sprite_back)
    app.stage.addChild(sprite_back)
    app.stage.removeChild(sprite_black_top)
    app.stage.addChild(sprite_black_top)
    app.stage.removeChild(sprite_shiny_key)
    app.stage.addChild(sprite_shiny_key)
    app.stage.removeChild(sprite_borders)
    app.stage.addChild(sprite_borders)


}


let queue_red=[]
let queue_blue=[]
let queue_green=[]
let queue_yellow=[]

let queue_stars_0=[]
let queue_stars_1=[]
let queue_stars_2=[]
let queue_stars_3=[]

let queue_bombs_0=[]
let queue_bombs_1=[]
let queue_bombs_2=[]
let queue_bombs_3=[]

let queue_snow_0=[]
let queue_snow_1=[]
let queue_snow_2=[]
let queue_snow_3=[]

let rate_blue=0
let rate_red=0
let rate_green=0
let rate_yellow=0
let rate_stars=0
let rate_bombs=0
let rate_snow=0

function random_queue(){
    queue_red=[]
    queue_blue=[]
    queue_green=[]
    queue_yellow=[]

    queue_stars_0=[]
    queue_stars_1=[]
    queue_stars_2=[]
    queue_stars_3=[]

    queue_bombs_0=[]
    queue_bombs_1=[]
    queue_bombs_2=[]
    queue_bombs_3=[]

    queue_snow_0=[]
    queue_snow_1=[]
    queue_snow_2=[]
    queue_snow_3=[]
    for (let w=100;w<5000;w+=70){
        let a=getRandom(100)
        if ((a>=0) & (a<20)){
            queue_blue.push(w)
        }
        if ((a>=20) & (a<40)){
            queue_red.push(w)
        }
        if ((a>=40) & (a<60)){
            queue_green.push(w)
        }
        if ((a>=60) & (a<80)){
            queue_yellow.push(w)
        }
        if ((a>=80) & (a<92)){
            console.log('star')
            if ((a>=80) & (a<83)){
                queue_stars_0.push(w)
                console.log('star0')
            }
            else if ((a>=83) & (a<86)){
                queue_stars_1.push(w)
                console.log('star1')
            }
            else if ((a>=86) & (a<89)){
                queue_stars_2.push(w)
                console.log('star2')
            }
            else if ((a>=89) & (a<92)){
                queue_stars_3.push(w)
                console.log('star3')
            }
        }
        if ((a>=92) & (a<96)){
            if ((a>=92) & (a<93)){
                queue_bombs_0.push(w)
            }
            else if ((a>=93) & (a<94)){
                queue_bombs_1.push(w)
            }
            else if ((a>=94) & (a<95)){
                queue_bombs_2.push(w)
            }
            else if ((a>=95) & (a<96)){
                queue_bombs_3.push(w)
            }
        }
        if ((a>=96) & (a<100)){
            if ((a>=96) & (a<97)){
                queue_snow_0.push(w)
            }
            else if ((a>=97) & (a<98)){
                queue_snow_1.push(w)
            }
            else if ((a>=98) & (a<99)){
                queue_snow_2.push(w)
            }
            else if ((a>=99) & (a<100)){
                queue_snow_3.push(w)
            }
        }
           
       
    }

}
let max_queue_timer=0
function clear_screen(){
    app.stage.removeChild(sprite_back)
    app.stage.removeChild(sprite_shiny_key)
    app.stage.removeChild(sprite_blood_effect)
    app.stage.removeChild(sprite_snow_effect)
    app.stage.removeChild(sprite_borders)
    app.stage.removeChild(sprite_key_blue0)
    app.stage.removeChild(sprite_key_blue1)
    app.stage.removeChild(sprite_key_red0)
    app.stage.removeChild(sprite_key_red1)
    app.stage.removeChild(sprite_key_green0)
    app.stage.removeChild(sprite_key_green1)
    app.stage.removeChild(sprite_key_green0)
    app.stage.removeChild(sprite_multi)
    app.stage.removeChild(sprite_shiny_key)
    app.stage.removeChild(sprite_tap_to_continue)
    app.stage.removeChild(sprite_game_over)
    app.stage.removeChild(sprite_black_top)
    app.stage.removeChild(sprite_star_score)

    for (let i=0;i<red_keys.length;i++){
        app.stage.removeChild(red_keys[i])
        delete red_keys[i]
    }   
    for (let i=0;i<blue_keys.length;i++){
        app.stage.removeChild(blue_keys[i])
        delete blue_keys[i]
    }  
    for (let i=0;i<green_keys.length;i++){
        app.stage.removeChild(green_keys[i])
        delete green_keys[i]
    }  
    for (let i=0;i<yellow_keys.length;i++){
        app.stage.removeChild(yellow_keys[i])
        delete yellow_keys[i]
    }  

    for (let i=0;i<stars_keys_0.length;i++){
        app.stage.removeChild(stars_keys_0[i])
        delete stars_keys_0[i]
    }  
    for (let i=0;i<stars_keys_1.length;i++){
        app.stage.removeChild(stars_keys_1[i])
        delete stars_keys_1[i]
    }
    for (let i=0;i<stars_keys_2.length;i++){
        app.stage.removeChild(stars_keys_2[i])
        delete stars_keys_2[i]
    }
    for (let i=0;i<stars_keys_3.length;i++){
        app.stage.removeChild(stars_keys_3[i])
        delete stars_keys_3[i]
    }

    for (let i=0;i<stars_shine_keys_0.length;i++){
        app.stage.removeChild(stars_shine_keys_0[i])
        delete stars_shine_keys_0[i]
    } 
    for (let i=0;i<stars_shine_keys_1.length;i++){
        app.stage.removeChild(stars_shine_keys_1[i])
        delete stars_shine_keys_1[i]
    }  
    for (let i=0;i<stars_shine_keys_2.length;i++){
        app.stage.removeChild(stars_shine_keys_2[i])
        delete stars_shine_keys_2[i]
    }  
    for (let i=0;i<stars_shine_keys_3.length;i++){
        app.stage.removeChild(stars_shine_keys_3[i])
        delete stars_shine_keys_3[i]
    }  

    for (let i=0;i<bombs_keys_0.length;i++){
        app.stage.removeChild(bombs_keys_0[i])
        delete bombs_keys_0[i]
    }  
    for (let i=0;i<bombs_keys_1.length;i++){
        app.stage.removeChild(bombs_keys_1[i])
        delete bombs_keys_1[i]
    }  
    for (let i=0;i<bombs_keys_2.length;i++){
        app.stage.removeChild(bombs_keys_2[i])
        delete bombs_keys_2[i]
    }  
    for (let i=0;i<bombs_keys_3.length;i++){
        app.stage.removeChild(bombs_keys_3[i])
        delete bombs_keys_3[i]
    }  

    for (let i=0;i<snow_keys_0.length;i++){
        app.stage.removeChild(snow_keys_0[i])
        delete snow_keys_0[i]
    }
    for (let i=0;i<snow_keys_1.length;i++){
        app.stage.removeChild(snow_keys_1[i])
        delete snow_keys_1[i]
    }
    for (let i=0;i<snow_keys_2.length;i++){
        app.stage.removeChild(snow_keys_2[i])
        delete snow_keys_2[i]
    }
    for (let i=0;i<snow_keys_3.length;i++){
        app.stage.removeChild(snow_keys_3[i])
        delete snow_keys_3[i]
    }  
    
    app.stage.removeChild(sprite_main_menu)
    app.stage.removeChild(sprite_play_button)

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
    for (let i=0;i<queue_stars_0.length;i++){
        max_queue_timer=Math.max(max_queue_timer,queue_stars_0[i])
    }
    for (let i=0;i<queue_stars_1.length;i++){
        max_queue_timer=Math.max(max_queue_timer,queue_stars_1[i])
    }
    for (let i=0;i<queue_stars_2.length;i++){
        max_queue_timer=Math.max(max_queue_timer,queue_stars_2[i])
    }
    for (let i=0;i<queue_stars_3.length;i++){
        max_queue_timer=Math.max(max_queue_timer,queue_stars_3[i])
    }
    for (let i=0;i<queue_bombs_0.length;i++){
        max_queue_timer=Math.max(max_queue_timer,queue_bombs_0[i])
    }
    for (let i=0;i<queue_bombs_1.length;i++){
        max_queue_timer=Math.max(max_queue_timer,queue_bombs_1[i])
    }
    for (let i=0;i<queue_bombs_2.length;i++){
        max_queue_timer=Math.max(max_queue_timer,queue_bombs_2[i])
    }
    for (let i=0;i<queue_bombs_3.length;i++){
        max_queue_timer=Math.max(max_queue_timer,queue_bombs_3[i])
    }
    for (let i=0;i<queue_snow_0.length;i++){
        max_queue_timer=Math.max(max_queue_timer,queue_snow_0[i])
    }
    for (let i=0;i<queue_snow_1.length;i++){
        max_queue_timer=Math.max(max_queue_timer,queue_snow_1[i])
    }
    for (let i=0;i<queue_snow_2.length;i++){
        max_queue_timer=Math.max(max_queue_timer,queue_snow_2[i])
    }
    for (let i=0;i<queue_snow_3.length;i++){
        max_queue_timer=Math.max(max_queue_timer,queue_snow_3[i])
    }
    console.log(max_queue_timer)

}

app.ticker.add(() => {
        if (key_main_menu == true) {
            
            app.stage.addChild(sprite_main_menu)
            sprite_play_button.x=app.screen.width/2-sprite_play_button.width/2
            sprite_play_button.y=app.screen.height/2-sprite_play_button.height/2
            app.stage.addChild(sprite_play_button)
            
            sprite_play_button.eventMode = 'static';
            sprite_play_button.on('pointerdown', new_game);
        }
        else if (key_main_menu == false) {
            if ((key_game_over == false) & (key_win==false)){
                queue_timer+=queue_timer_m
                falling()

            }
            else if ((key_game_over == false) & (key_win==true)){
                if (key_tap_continue == false) {
                    console.log('win!')
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
                    key_main_menu=true
                }
            }
        else if (key_game_over==true) {
            if (key_tap_continue == false) {
                console.log('lose!')
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
                key_main_menu=true
            }
        }
        }
    }

);

