let index = 0;
var offsetX, offsetY, sqSide;
const cardRatio = 0.7163461538; //card width/height ratio
const borderThickness = 0.051 * cardRatio; //black border width as a factor of sqSide

function setup() {
  background(80, 160, 100);
  createCanvas(windowWidth, windowHeight);
  windowResized();
  index = ~~random(yomimono.length);
}

function draw() {
  background(80, 160, 100);
  cardStock();
  cardYomimono();
  cardBorder();
  cardKana();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  sqSide = min(windowHeight, windowWidth);
  offsetX = (windowWidth - sqSide) / 2;
  offsetY = (windowHeight - sqSide) / 2;
}

const cardStock = () => {
  push();
  translate(offsetX, offsetY);
  fill(255);
  rect((sqSide * (1 - cardRatio)) / 2, 0, sqSide * cardRatio, sqSide);
  pop();
};
const cardKana = () => {
  const kanaSize = sqSide / 8;
  push();
  translate(offsetX, offsetY);
  strokeWeight(10);
  translate(sqSide * 0.75, sqSide * 0.115);
  fill(255);
  circle(0, 0, sqSide / 5);
  fill(0);
  textSize(kanaSize);
  text(yomimono[index].kana, -kanaSize / 2, (kanaSize * 3) / 7);
  pop();
};
const cardYomimono = () => {
  const maxLines = 23;
  const yomimonoSize = sqSide / maxLines;
  push();
  translate(offsetX, offsetY);
  fill(0);
  textSize(yomimonoSize);
  textStart = [sqSide * (1 - cardRatio), 10 * yomimonoSize];
  text(yomimono[index].yomigana1, textStart[0], textStart[1]);
  text(
    yomimono[index].yomigana2,
    textStart[0],
    textStart[1] + yomimonoSize * 2
  );
  text(
    yomimono[index].yomigana3,
    textStart[0],
    textStart[1] + yomimonoSize * 4
  );
  pop();
};
const cardBorder = () => {
  push();
  translate(offsetX, offsetY);
  fill(0);
  rect((sqSide * (1 - cardRatio)) / 2, 0, sqSide * borderThickness, sqSide); //left border
  rect(
    sqSide * (cardRatio + (1 - cardRatio) / 2 - borderThickness),
    0,
    sqSide * borderThickness,
    sqSide
  ); //right border
  rect(
    (sqSide * (1 - cardRatio)) / 2,
    0,
    sqSide * cardRatio,
    sqSide * borderThickness
  ); //top border
  rect(
    (sqSide * (1 - cardRatio)) / 2,
    sqSide * (1 - borderThickness),
    sqSide * cardRatio,
    sqSide * borderThickness
  ); //bottom border
  pop();
};

const yomimono = [
  {
    kana: "あ",
    yomigana1: "あったかい",
    yomigana2: "ひとがおおいね",
    yomigana3: "へんかくは",
    author: "okigaru",
  },
  {
    kana: "い",
    yomigana1: "いべんとで",
    yomigana2: "ぽーあっぷためて",
    yomigana3: "にやにやと",
    author: "RYU",
  },
  {
    kana: "う",
    yomigana1: "うぇぶすりー",
    yomigana2: "えこしすてむは",
    yomigana3: "しんかする",
    author: "SAKAI",
  },
  {
    kana: "え",
    yomigana1: "えらーでも",
    yomigana2: "おくれているのね",
    yomigana3: "へんかくよ",
    author: "okigaru",
  },
  {
    kana: "お",
    yomigana1: "おじさんも",
    yomigana2: "まだまだいくぞ",
    yomigana3: "うぇぶすりー",
    author: "RYU",
  },
  {
    kana: "か",
    yomigana1: "かんそうが",
    yomigana2: "またまにあわず",
    yomigana3: "つぎのかい",
    author: "yukka kiyo",
  },
  {
    kana: "き",
    yomigana1: "きょうはむり",
    yomigana2: "そんなときこそ",
    yomigana3: "みみさんか",
    author: "Jun_",
  },
  {
    kana: "く",
    yomigana1: "くりぷとの",
    yomigana2: "あなにおちたら",
    yomigana3: "めたばーす",
    author: "SAKAI",
  },
  {
    kana: "け",
    yomigana1: "けんきょにじょい",
    yomigana2: "こもじではじめる",
    yomigana3: "うぇぶすりー",
    author: "MINTA",
  },
  {
    kana: "こ",
    yomigana1: "こみゅにてぃ",
    yomigana2: "いごこちよすぎて",
    yomigana3: "いまなんじ",
    author: "KenKen",
  },
  {
    kana: "さ",
    yomigana1: "さがしても",
    yomigana2: "またさがしても",
    yomigana3: "みつからないときもある",
    author: "KKasumi",
  },
  {
    kana: "し",
    yomigana1: "しんかには",
    yomigana2: "てんさいよりも",
    yomigana3: "たようせい",
    author: "RYU",
  },
  {
    kana: "す",
    yomigana1: "すぺるみす",
    yomigana2: "さいきんよくある",
    yomigana3: "じょいをじょい",
    author: "emasato",
  },
  {
    kana: "せ",
    yomigana1: "せっかくの",
    yomigana2: "ぽーあっぷしんせい",
    yomigana3: "きげんぎれ",
    author: "SAKAI",
  },
  {
    kana: "そ",
    yomigana1: "そうだった",
    yomigana2: "へんかくかいに",
    yomigana3: "いってみよう",
    author: "tsumichara",
  },
  {
    kana: "た",
    yomigana1: "たまげたよ",
    yomigana2: "かもんげっとの",
    yomigana3: "すぴーどに",
    author: "okigaru",
  },
  {
    kana: "ち",
    yomigana1: "ちーむぷれー",
    yomigana2: "へんかくもらった",
    yomigana3: "しょにんきゅう",
    author: "mr.chill",
  },
  {
    kana: "つ",
    yomigana1: "ついてない",
    yomigana2: "へんかくいべんと",
    yomigana3: "しごとちゅう",
    author: "SAKAI",
  },
  {
    kana: "て",
    yomigana1: "でわーくの",
    yomigana2: "しんせいだれかと",
    yomigana3: "かさなるね",
    author: "okigaru",
  },
  {
    kana: "と",
    yomigana1: "ともがみな",
    yomigana2: "われよりえらく",
    yomigana3: "みゆるひよ",
    author: "Masa",
  },
  {
    kana: "な",
    yomigana1: "なつめろで",
    yomigana2: "おどりはじめる",
    yomigana3: "でぃーじぇーじょい",
    author: "RYU",
  },
  {
    kana: "に",
    yomigana1: "にっぽんの",
    yomigana2: "へんかくになう",
    yomigana3: "こみゅにてぃ",
    author: "Floating Ape",
  },
  {
    kana: "ぬ",
    yomigana1: "ぬきんでた",
    yomigana2: "こせいがきらり",
    yomigana3: "かがやくば",
    author: "fawn",
  },
  {
    kana: "ね",
    yomigana1: "ねるじかん",
    yomigana2: "けずってでぃすこーど",
    yomigana3: "おってます",
    author: "KKasumi",
  },
  {
    kana: "の",
    yomigana1: "のーしょんが",
    yomigana2: "うぇぶすりーっぽいの",
    yomigana3: "なんでだろう",
    author: "geeknees",
  },
  {
    kana: "は",
    yomigana1: "はたらけど",
    yomigana2: "はたらけどなお",
    yomigana3: "わがくらし",
    author: "Masa",
  },
  {
    kana: "ひ",
    yomigana1: "びっとこいん",
    yomigana2: "さいごのいちまい",
    yomigana3: "ろまんかな",
    author: "MINTA",
  },
  {
    kana: "ふ",
    yomigana1: "ふつうより",
    yomigana2: "へんがかつやく",
    yomigana3: "たようせい",
    author: "Floating Ape",
  },
  {
    kana: "へ",
    yomigana1: "へんかくは",
    yomigana2: "みんなのちから",
    yomigana3: "あわせわざ",
    author: "RYU",
  },
  {
    kana: "ほ",
    yomigana1: "ほんとうは",
    yomigana2: "ぼっとじゃないの",
    yomigana3: "あのひとは",
    author: "Floating Ape",
  },
  {
    kana: "ま",
    yomigana1: "まてぃっくは",
    yomigana2: "かったいじょうの",
    yomigana3: "かちがある",
    author: "RYU",
  },
  {
    kana: "み",
    yomigana1: "みずからの",
    yomigana2: "こうどうしめす",
    yomigana3: "なういすと",
    author: "FLOTAN",
  },
  {
    kana: "む",
    yomigana1: "むむなんで",
    yomigana2: "なんでちがうの",
    yomigana3: "きーわーど",
    author: "fawn",
  },
  {
    kana: "め",
    yomigana1: "めたばーす",
    yomigana2: "わたしのきゃらも",
    yomigana3: "ぶんさんす",
    author: "SAKAI",
  },
  {
    kana: "も",
    yomigana1: "もーれつに",
    yomigana2: "すまこんかいて",
    yomigana3: "えらーでる",
    author: "KenKen",
  },
  {
    kana: "や",
    yomigana1: "やってみる",
    yomigana2: "しんいりたすく",
    yomigana3: "さいしょのいっぽ",
    author: "mym1020",
  },
  {
    kana: "ゆ",
    yomigana1: "ゆめじゃない",
    yomigana2: "へんかくおこす",
    yomigana3: "だおこっか",
    author: "shin-san",
  },
  {
    kana: "よ",
    yomigana1: "よのなかを",
    yomigana2: "へんかくするぞ",
    yomigana3: "ばたふらい",
    author: "hirokazu",
  },
  {
    kana: "ら",
    yomigana1: "らいしゅうも",
    yomigana2: "あばたーさんか",
    yomigana3: "ていれいかい",
    author: "fawn",
  },
  {
    kana: "り",
    yomigana1: "りゅうさんに",
    yomigana2: "なんでもきける",
    yomigana3: "ありがとう",
    author: "Floating Ape",
  },
  {
    kana: "る",
    yomigana1: "るーてぃーん",
    yomigana2: "じーえむかいて",
    yomigana3: "またじーえぬ",
    author: "Jun_",
  },
  {
    kana: "れ",
    yomigana1: "れべるあっぷ",
    yomigana2: "するとでぃーえむくる",
    yomigana3: "みーしっくす",
    author: "karawapo",
  },
  {
    kana: "ろ",
    yomigana1: "ろーかるの",
    yomigana2: "みりょくにきづく",
    yomigana3: "へんかくで",
    author: "fawn",
  },
  {
    kana: "わ",
    yomigana1: "わすれずに",
    yomigana2: "どうちゅうもさんか",
    yomigana3: "ていれいかい",
    author: "mr.chill",
  },
  {
    kana: "を",
    yomigana1: "をのかるた",
    yomigana2: "さいごになったね",
    yomigana3: "かんせいだ",
    author: "yokoryu",
  },
  {
    kana: "ん",
    yomigana1: "んっなんで",
    yomigana2: "へんかくすこし",
    yomigana3: "ふえている",
    author: "SAKAI",
  },
];