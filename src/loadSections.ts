import { Section } from './types';

export const sections: Section[] = [
  {
    step: 0,
    name: '性別について',
    description: '4つのSTEPによる簡単な質問から、\nあなたの職場におけるストレスレベルを測定します。\n質問は全部で57問です。（所要時間約5分間）',
    questions: [{ id: 1, text: 'はじめに性別を選んでください', score: 0, reverse: false }],
    choices: ['男性', '女性', 'その他', '答えない'],
    factors: [{ point: 0, scale: '', value: 0, inverse: false }],
  },
  {
    step: 1,
    name: '仕事について',
    description: 'あなたの仕事についてうかがいます。\n最もあてはまる選択ボタンを選んでください。',
    questions: [
      { id: 1, text: '非常にたくさんの仕事をしなければならない', score: 0, reverse: true },
      { id: 2, text: '時間内に仕事が処理しきれない', score: 0, reverse: true },
      { id: 3, text: '一生懸命働かなければならない', score: 0, reverse: true },
      { id: 4, text: 'かなり注意を集中する必要がある', score: 0, reverse: true },
      { id: 5, text: '高度の知識や技術が必要なむずかしい仕事だ', score: 0, reverse: true },
      { id: 6, text: '勤務時間中はいつも仕事のことを考えていなければならない', score: 0, reverse: true },
      { id: 7, text: 'からだを大変よく使う仕事だ', score: 0, reverse: true },
      { id: 8, text: '自分のペースで仕事ができる', score: 0, reverse: false },
      { id: 9, text: '自分で仕事の順番・やり方を決めることができる', score: 0, reverse: false },
      { id: 10, text: '職場の仕事の方針に自分の意見を反映できる', score: 0, reverse: false },
      { id: 11, text: '自分の技能や知識を仕事で使うことが少ない', score: 0, reverse: true },
      { id: 12, text: '私の部署内で意見のくい違いがある', score: 0, reverse: true },
      { id: 13, text: '私の部署と他の部署とはうまが合わない', score: 0, reverse: true },
      { id: 14, text: '私の職場の雰囲気は友好的である', score: 0, reverse: false },
      { id: 15, text: '私の職場の作業環境（騒音、照明、温度、換気など）はよくない', score: 0, reverse: true },
      { id: 16, text: '仕事の内容は自分にあっている', score: 0, reverse: false },
      { id: 17, text: '働きがいのある仕事だ', score: 0, reverse: false },
    ],
    choices: ['そうだ', 'まあそうだ', 'ややちがう', 'ちがう'],
    factors: [
      {
        point: 1,
        scale: '心理的な仕事の負担（量）',
        value: 0,
        inverse: true,
        rates: [
          { min: 3, max: 5, value: 5 },
          { min: 6, max: 7, value: 4 },
          { min: 8, max: 9, value: 3 },
          { min: 10, max: 11, value: 2 },
          { min: 12, max: 12, value: 1 },
        ],
        items: [1, 2, 3],
      },
      {
        point: 2,
        scale: '心理的な仕事の負担（質）',
        value: 0,
        inverse: true,
        rates: [
          { min: 3, max: 5, value: 5 },
          { min: 6, max: 7, value: 4 },
          { min: 8, max: 9, value: 3 },
          { min: 10, max: 11, value: 2 },
          { min: 12, max: 12, value: 1 },
        ],
        items: [4, 5, 6],
      },
      {
        point: 3,
        scale: '自覚的な身体的負担度',
        value: 0,
        inverse: true,
        rates: [
          { min: 1, max: 1, value: 4 },
          { min: 2, max: 2, value: 3 },
          { min: 3, max: 3, value: 2 },
          { min: 4, max: 4, value: 1 },
        ],
        items: [7],
      },
      {
        point: 4,
        scale: '職場の対人関係でのストレス',
        value: 0,
        inverse: true,
        rates: [
          { min: 3, max: 3, value: 5 },
          { min: 4, max: 5, value: 4 },
          { min: 6, max: 7, value: 3 },
          { min: 8, max: 9, value: 2 },
          { min: 10, max: 12, value: 1 },
        ],
        items: [12, 13, 14],
      },
      {
        point: 5,
        scale: '職場環境によるストレス',
        value: 0,
        inverse: true,
        rates: [
          { min: 1, max: 1, value: 4 },
          { min: 2, max: 2, value: 3 },
          { min: 3, max: 3, value: 2 },
          { min: 4, max: 4, value: 1 },
        ],
        items: [15],
      },
      {
        point: 6,
        scale: '仕事のコントロール度',
        value: 0,
        inverse: false,
        rates: [
          { min: 3, max: 4, value: 1 },
          { min: 5, max: 6, value: 2 },
          { min: 7, max: 8, value: 3 },
          { min: 9, max: 10, value: 4 },
          { min: 11, max: 12, value: 5 },
        ],
        items: [8, 9, 10],
      },
      {
        point: 7,
        scale: '技能の活用度',
        value: 0,
        inverse: false,
        rates: [
          { min: 1, max: 1, value: 1 },
          { min: 2, max: 2, value: 2 },
          { min: 3, max: 3, value: 3 },
          { min: 4, max: 4, value: 4 },
        ],
        items: [11],
      },
      {
        point: 8,
        scale: '仕事の適性度',
        value: 0,
        inverse: false,
        rates: [
          { min: 1, max: 1, value: 1 },
          { min: 2, max: 2, value: 2 },
          { min: 3, max: 3, value: 3 },
          { min: 4, max: 4, value: 5 },
        ],
        items: [16],
      },
      {
        point: 9,
        scale: '働きがい',
        value: 0,
        inverse: false,
        rates: [
          { min: 1, max: 1, value: 1 },
          { min: 2, max: 2, value: 2 },
          { min: 3, max: 3, value: 3 },
          { min: 4, max: 4, value: 5 },
        ],
        items: [17],
      },
    ],
  },
  {
    step: 2,
    name: '最近1か月の状態について',
    description: '最近 1 か月間のあなたの状態についてうかがいます。\n最もあてはまる選択ボタンを選んでください。',
    questions: [
      { id: 1, text: '活気がわいてくる', score: 0, reverse: true },
      { id: 2, text: '元気がいっぱいだ', score: 0, reverse: true },
      { id: 3, text: '生き生きする', score: 0, reverse: true },
      { id: 4, text: '怒りを感じる', score: 0, reverse: false },
      { id: 5, text: '内心腹立たしい', score: 0, reverse: false },
      { id: 6, text: 'イライラしている', score: 0, reverse: false },
      { id: 7, text: 'ひどく疲れた', score: 0, reverse: false },
      { id: 8, text: 'へとへとだ', score: 0, reverse: false },
      { id: 9, text: 'だるい', score: 0, reverse: false },
      { id: 10, text: '気がはりつめている', score: 0, reverse: false },
      { id: 11, text: '不安だ', score: 0, reverse: false },
      { id: 12, text: '落着かない', score: 0, reverse: false },
      { id: 13, text: 'ゆううつだ', score: 0, reverse: false },
      { id: 14, text: '何をするのも面倒だ', score: 0, reverse: false },
      { id: 15, text: '物事に集中できない', score: 0, reverse: false },
      { id: 16, text: '気分が晴れない', score: 0, reverse: false },
      { id: 17, text: '仕事が手につかない', score: 0, reverse: false },
      { id: 18, text: '悲しいと感じる', score: 0, reverse: false },
      { id: 19, text: 'めまいがする', score: 0, reverse: false },
      { id: 20, text: '体のふしぶしが痛む', score: 0, reverse: false },
      { id: 21, text: '頭が重かったり頭痛がする', score: 0, reverse: false },
      { id: 22, text: '首筋や肩がこる', score: 0, reverse: false },
      { id: 23, text: '腰が痛い', score: 0, reverse: false },
      { id: 24, text: '目が疲れる', score: 0, reverse: false },
      { id: 25, text: '動悸や息切れがする', score: 0, reverse: false },
      { id: 26, text: '胃腸の具合が悪い', score: 0, reverse: false },
      { id: 27, text: '食欲がない', score: 0, reverse: false },
      { id: 28, text: '便秘や下痢をする', score: 0, reverse: false },
      { id: 29, text: 'よく眠れない', score: 0, reverse: false },
    ],
    choices: ['ほとんどなかった', 'ときどきあった', 'しばしばあった', 'ほとんどいつもあった'],
    factors: [
      {
        point: 1,
        scale: '活気',
        value: 0,
        inverse: false,
        rates: [
          { min: 3, max: 3, value: 1 },
          { min: 4, max: 5, value: 2 },
          { min: 6, max: 7, value: 3 },
          { min: 8, max: 9, value: 4 },
          { min: 10, max: 12, value: 5 },
        ],
        items: [1, 2, 3],
      },
      {
        point: 2,
        scale: 'イライラ感',
        value: 0,
        inverse: true,
        rates: [
          { min: 3, max: 3, value: 5 },
          { min: 4, max: 5, value: 4 },
          { min: 6, max: 7, value: 3 },
          { min: 8, max: 9, value: 2 },
          { min: 10, max: 12, value: 1 },
        ],
        items: [4, 5, 6],
      },
      {
        point: 3,
        scale: '疲労感',
        value: 0,
        inverse: true,
        rates: [
          { min: 3, max: 3, value: 5 },
          { min: 4, max: 4, value: 4 },
          { min: 5, max: 7, value: 3 },
          { min: 8, max: 10, value: 2 },
          { min: 11, max: 12, value: 1 },
        ],
        items: [7, 8, 9],
      },
      {
        point: 4,
        scale: '不安感',
        value: 0,
        inverse: true,
        rates: [
          { min: 3, max: 3, value: 5 },
          { min: 4, max: 5, value: 4 },
          { min: 6, max: 7, value: 3 },
          { min: 8, max: 9, value: 2 },
          { min: 10, max: 12, value: 1 },
        ],
        items: [10, 11, 12],
      },
      {
        point: 5,
        scale: '抑うつ感',
        value: 0,
        inverse: true,
        rates: [
          { min: 6, max: 6, value: 5 },
          { min: 7, max: 8, value: 4 },
          { min: 9, max: 12, value: 3 },
          { min: 13, max: 16, value: 2 },
          { min: 17, max: 24, value: 1 },
        ],
        items: [13, 14, 15, 16, 17, 18],
      },
      {
        point: 6,
        scale: '身体愁訴',
        value: 0,
        inverse: true,
        rates: [
          { min: 11, max: 11, value: 5 },
          { min: 12, max: 15, value: 4 },
          { min: 16, max: 21, value: 3 },
          { min: 22, max: 26, value: 2 },
          { min: 27, max: 44, value: 1 },
        ],
        items: [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
      },
    ],
  },
  {
    step: 3,
    name: '周りの方々について',
    description: 'あなたの周りの方々についてうかがいます。\n最もあてはまる選択ボタンを選んでください。',
    questions: [
      { id: 1, text: '次の人たちとはどのくらい気軽に話ができますか？\n上司', score: 0, reverse: false },
      { id: 2, text: '次の人たちとはどのくらい気軽に話ができますか？\n職場の同僚', score: 0, reverse: false },
      { id: 3, text: '次の人たちとはどのくらい気軽に話ができますか？\n配偶者、家族、友人等', score: 0, reverse: false },
      { id: 4, text: 'あなたが困った時、次の人たちはどのくらい頼りになりますか?\n上司', score: 0, reverse: false },
      { id: 5, text: 'あなたが困った時、次の人たちはどのくらい頼りになりますか?\n職場の同僚', score: 0, reverse: false },
      { id: 6, text: 'あなたが困った時、次の人たちはどのくらい頼りになりますか?\n配偶者、家族、友人等', score: 0, reverse: false },
      { id: 7, text: 'あなたの個人的な問題を相談したら、次の人たちはどのくらい聞いてくれますか?\n上司', score: 0, reverse: false },
      { id: 8, text: 'あなたの個人的な問題を相談したら、次の人たちはどのくらい聞いてくれますか?\n職場の同僚', score: 0, reverse: false },
      { id: 9, text: 'あなたの個人的な問題を相談したら、次の人たちはどのくらい聞いてくれますか?\n配偶者、家族、友人等', score: 0, reverse: false },
    ],
    choices: ['非常に', 'かなり', '多少', '全くない'],
    factors: [
      {
        point: 1,
        scale: '上司からのサポート',
        value: 0,
        inverse: false,
        rates: [
          { min: 3, max: 4, value: 1 },
          { min: 5, max: 6, value: 2 },
          { min: 7, max: 8, value: 3 },
          { min: 9, max: 10, value: 4 },
          { min: 11, max: 12, value: 5 },
        ],
        items: [1, 4, 7],
      },
      {
        point: 2,
        scale: '同僚からのサポート',
        value: 0,
        inverse: false,
        rates: [
          { min: 3, max: 5, value: 1 },
          { min: 6, max: 7, value: 2 },
          { min: 8, max: 9, value: 3 },
          { min: 10, max: 11, value: 4 },
          { min: 12, max: 12, value: 5 },
        ],
        items: [2, 5, 8],
      },
      {
        point: 3,
        scale: '家族・友人からのサポート',
        value: 0,
        inverse: false,
        rates: [
          { min: 3, max: 6, value: 1 },
          { min: 7, max: 8, value: 2 },
          { min: 9, max: 9, value: 3 },
          { min: 10, max: 11, value: 4 },
          { min: 12, max: 12, value: 5 },
        ],
        items: [3, 6, 9],
      },
    ],
  },
  {
    step: 4,
    name: '満足度について',
    description: 'あなたの満足度についてうかがいます。\n4つの中から最もあてはまるものを選んでください。（全2問）',
    questions: [
      { id: 1, text: '仕事に満足だ', score: 0, reverse: false },
      { id: 2, text: '家庭環境に満足だ', score: 0, reverse: false },
    ],
    choices: ['満足', 'まあ満足', 'やや不満足', '不満足'],
    factors: [{ point: 1, scale: '仕事や生活の満足度', value: 0, inverse: false }],
  },
];

