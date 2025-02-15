'use strict';

const userNameInput=document.getElementById('username');
const assessmentButton=document.getElementById('assessment');
const resultDivision=document.getElementById('result_area');
const xDivision=document.getElementById('x_share');

assessmentButton.addEventListener(
  'click',
  ()=>{
    const userName=userNameInput.value;
    if(userName.length===0){
      return;
    }
    resultDivision.innerText='';
    const heading=document.createElement('h3');
    heading.innerText='Result';
    resultDivision.appendChild(heading);

    const paragraph=document.createElement('p');
    const result=assessment(userName);
    paragraph.innerText=result;
    resultDivision.appendChild(paragraph);

    xDivision.innerText='';
    const anchor= document.createElement('a');
    const hrefValue=
    'https://x.com/intent/tweet?button_hashtag=' +
    encodeURIComponent('FindyourStrengths') +
    '&ref_src=twsrc%5Etfw';

      anchor.setAttribute('href',hrefValue);
      anchor.setAttribute('class','twitter-hashtag-button');
      anchor.setAttribute('dataText', result);
      anchor.innerText='Post #FindyourStrengths';

      xDivision.appendChild(anchor);

      const script=document.createElement('script');
      script.setAttribute('src','https://platform.twitter.com/widgets.js');
      xDivision.appendChild(script);
  }
);

userNameInput.addEventListener(
  'keydown',
  (event)=>{
    if(event.code==='Enter'){
      assessmentButton.dispatchEvent(new Event('click'));
    }
  }
)

const answers=[
'###userName###のいいところは声です。###userName###の特徴的な声は皆を惹きつけ、心に残ります。',
'###userName###のいいところはまなざしです。###userName###に見つめられた人は、気になって仕方がないでしょう。',
'###userName###のいいところは情熱です。###userName###の情熱に周りの人は振り回されます。',
'###userName###のいいところは厳しさです。###userName###の厳しさがものごとを秩序に導きます。',
'###userName###のいいところは知識です。博識な###userName###を多くの人が頼ります。',
'###userName###のいいところはユニークさです。###userName###だけのその特徴が皆の予想を超えます。',
'###userName###のいいところは用心深さです。###userName###の洞察に、多くの人が見抜かれます。',
'###userName###のいいところは見た目です。内側から溢れ出る###userName###の良さに皆が気を使います。',
'###userName###のいいところは決断力です。###userName###がする決断にいつも驚く人がいます。',
'###userName###のいいところは思いやりです。###userName###に気をかけてもらった多くの人が感謝しています。',
'###userName###のいいところは感受性です。###userName###が感じたことに皆が共感し、わかりあうことができます。',
'###userName###のいいところは節度です。強引すぎない###userName###の考えに皆が感謝しています。',
'###userName###のいいところは好奇心です。新しいことに向かっていく###userName###の心構えが多くの人に魅力的に映ります。',
'###userName###のいいところは気配です。###userName###の気配が多くの人に届いています。',
'###userName###のいいところはその全てです。###userName###自身がいいところなのです。',
'###userName###のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる###userName###が皆から評価されています。',
]

function assessment(userName){
  let CharcodeSum=0;
  for(let i=0; i<userName.length; i++){
    CharcodeSum=CharcodeSum+userName.charCodeAt(i)
  }
  const index=CharcodeSum%answers.length;
  let result=answers[index]
  return result.replaceAll('###userName###',userName);
};

// テストを行う関数
function test() {
  console.log('診断結果の文章のテスト');

  //太郎
  console.log('太郎');
  console.assert(
    assessment('太郎') ===
    '太郎のいいところは決断力です。太郎がする決断にいつも驚く人がいます。',
    '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。'
  );

  //次郎
  console.log('次郎');
  console.assert(
    assessment('次郎') ===
    '次郎のいいところは自制心です。やばいと思ったときにしっかりと衝動を抑えられる次郎が皆から評価されています。',
    '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。'
  );

  //花子
  console.log('花子');
  console.assert(
    assessment('花子') ===
    '花子のいいところはまなざしです。花子に見つめられた人は、気になって仕方がないでしょう。',
    '診断結果の文言の特定の部分を名前に置き換える処理が正しくありません。'
  );
  
  console.log('診断結果の文章のテスト終了');

  console.log('同じ名前なら、同じ結果を出力することのテスト');

  console.log('太郎');
  console.assert(
    assessment('太郎') === assessment('太郎'),
    '入力が同じ名前なら同じ診断結果を出力する処理が正しくありません。'
  )

  console.log('次郎');
  console.assert(
    assessment('次郎') === assessment('次郎'),
    '入力が同じ名前なら同じ診断結果を出力する処理が正しくありません。'
  )

  console.log('花子');
  console.assert(
    assessment('花子') === assessment('花子'),
    '入力が同じ名前なら同じ診断結果を出力する処理が正しくありません。'
  )

  console.log('同じ名前なら、同じ結果を出力することのテスト終了');
}

test();