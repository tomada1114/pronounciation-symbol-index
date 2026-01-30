import type { Phoneme } from './types'

const phonemes: Phoneme[] = [
  // === Consonants (24) ===
  // Plosives (6)
  {
    symbol: 'p',
    displaySymbol: '/p/',
    category: 'consonant',
    subcategory: 'plosive',
    voicing: '無声',
    articulationPoint: '両唇',
    exampleWord: 'pat',
    elsaNotation: '/pæt/',
    japaneseApprox: 'パ行',
    description:
      '【唇】上下の唇をしっかりと合わせて完全に閉じ、口の中に空気の圧力をためます。日本語の「パ」よりも強く密閉することを意識してください。【舌】舌は特定の位置を取らず、後に続く母音の位置に備えてリラックスさせます。【歯】歯は直接関与しません。【顎】唇を閉じた状態から、破裂と同時に自然に開きます。' +
      '\n\n' +
      '【息の使い方】語頭では強い帯気音（aspiration）を伴います。手のひらを口の前5cmほどに置いて発音し、はっきりと息が当たれば正しい強さです。ティッシュを口の前に垂らし、パッとなびかせる練習も効果的です。日本語の「パ」では帯気がほとんどありませんが、英語の語頭/p/では必ず強い息を出します。' +
      '\n\n' +
      '【注意点】sp-（sport, spoonなど）の中の/p/は帯気音がなくなり、日本語の「パ」に近くなります。語末（stop, cupなど）では唇を閉じるだけで破裂させない「未開放」の/p/になることも多いです。pat, pen, park, space, happy, open, stop, cup, mapなどに現れます。',
  },
  {
    symbol: 'b',
    displaySymbol: '/b/',
    category: 'consonant',
    subcategory: 'plosive',
    voicing: '有声',
    articulationPoint: '両唇',
    exampleWord: 'bat',
    elsaNotation: '/bæt/',
    japaneseApprox: 'バ行',
    description:
      '【唇】/p/と同じく上下の唇をしっかり閉じますが、こちらは有声音なので、唇を閉じた状態で声帯を振動させてから開放します。【舌】舌は特定の位置を取らず、後続の母音に備えてリラックスします。【歯】直接関与しません。【顎】/p/と同様、閉じた状態から自然に開きます。' +
      '\n\n' +
      '【声帯の使い方】喉に手を当てて発音してみてください。/b/では唇を閉じている段階からすでに喉の振動を感じるはずです。/p/では振動がなく息だけが出ます。この「声帯が振動するかどうか」が/p/と/b/の唯一の違いです。' +
      '\n\n' +
      '【日本語との違い】日本語の「バ」に近いですが、英語の/b/は唇の閉鎖がより強く、声帯の振動がより明確です。語末（cab, webなど）では唇を閉じたまま軽く声帯を振動させるだけで、破裂が弱くなります。bat, bed, big, about, table, job, web, cabなどに現れます。',
  },
  {
    symbol: 't',
    displaySymbol: '/t/',
    category: 'consonant',
    subcategory: 'plosive',
    voicing: '無声',
    articulationPoint: '歯茎',
    exampleWord: 'top',
    elsaNotation: '/tɑp/',
    japaneseApprox: 'タ行',
    description:
      '【舌】舌先を上の歯茎（前歯のすぐ上にある膨らんだ部分）にしっかり当てます。日本語の「タ」では舌先が上の前歯の裏あたりに触れますが、英語の/t/はそれよりやや後ろの歯茎に当てます。舌先の「裏側」が歯茎に密着するイメージです。【唇】特定の形は取らず、後続の母音に応じて変わります。【歯】上の前歯の裏側のすぐ上に舌先が位置しますが、歯自体には触れません。' +
      '\n\n' +
      '【息の使い方】語頭（top, timeなど）では/p/と同様に強い帯気音を伴います。舌先を歯茎から離す瞬間に「トゥッ」と強い息が出るのが特徴です。st-（stop, stayなど）の中の/t/では帯気が消え、日本語の「タ」に近くなります。' +
      '\n\n' +
      '【注意点】アメリカ英語では母音に挟まれた/t/（water, betterなど）が「フラップt」に変化し、日本語の「ラ行」に近い「ɾ」のような音になります。語末（cat, setなど）では舌先を歯茎に当てるだけで破裂させない場合もあります。また、/t/の前に声門閉鎖（喉を詰める音）が入ることもあります。top, time, stay, water, better, cat, set, nightなどに現れます。',
  },
  {
    symbol: 'd',
    displaySymbol: '/d/',
    category: 'consonant',
    subcategory: 'plosive',
    voicing: '有声',
    articulationPoint: '歯茎',
    exampleWord: 'dog',
    elsaNotation: '/dɑg/',
    japaneseApprox: 'ダ行',
    description:
      '【舌】/t/と全く同じ位置で、舌先を歯茎にしっかり当てます。日本語の「ダ」より舌先の位置がやや後ろ（歯茎）であることを意識してください。【唇】特定の形は取りません。【歯】/t/と同様、直接触れませんが、舌先は上の前歯のすぐ上に位置します。' +
      '\n\n' +
      '【声帯の使い方】/t/との唯一の違いは声帯の振動です。喉に手を当て、/t/と/d/を交互に発音して振動の有無を確認しましょう。「タダタダタダ」と素早く繰り返すと、舌の位置は同じまま声帯のON/OFFだけが切り替わる感覚がつかめます。' +
      '\n\n' +
      '【日本語との違い】日本語の「ダ」では舌先が上の歯の裏に触れますが、英語の/d/は歯茎（もう少し上）に当てます。語末の/d/（bed, goodなど）では、声帯を軽く振動させて舌先を歯茎に当てるだけの弱い音になります。dog, day, door, body, middle, bed, good, headなどに現れます。',
  },
  {
    symbol: 'k',
    displaySymbol: '/k/',
    category: 'consonant',
    subcategory: 'plosive',
    voicing: '無声',
    articulationPoint: '軟口蓋',
    exampleWord: 'cat',
    elsaNotation: '/kæt/',
    japaneseApprox: 'カ行',
    description:
      '【舌】舌の奥の部分（後舌面）を軟口蓋（上あごの奥の柔らかい部分）に押し当てて空気を遮断します。舌先は下の歯の裏あたりに自然に置いたままです。口の一番奥で閉鎖を作る感覚をつかんでください。【唇】特定の形は取りませんが、後続の母音によって変わります（/ku/のように/u/が続くときは唇を丸めます）。【歯】関与しません。' +
      '\n\n' +
      '【息の使い方】語頭（cat, keyなど）では強い帯気音を伴い、口の奥から「クッ」と勢いよく空気が出ます。sk-（sky, skinなど）では帯気が消えます。日本語の「カ」に比べて、語頭の帯気はかなり強いので、意識して息を多めに出しましょう。' +
      '\n\n' +
      '【練習のコツ】手のひらを口の前に置いて「カ」と「sky」を言い比べると、帯気の有無を体感できます。語末（book, backなど）では舌の奥を軟口蓋に当てるだけで開放しないことも多いです。cat, key, cold, sky, skin, book, back, darkなどに現れます。',
  },
  {
    symbol: 'g',
    displaySymbol: '/g/',
    category: 'consonant',
    subcategory: 'plosive',
    voicing: '有声',
    articulationPoint: '軟口蓋',
    exampleWord: 'go',
    elsaNotation: '/goʊ/',
    japaneseApprox: 'ガ行',
    description:
      '【舌】/k/と同じく、舌の奥（後舌面）を軟口蓋に押し当てます。舌先は下の歯の裏あたりに自然に置きます。/k/との違いは声帯を振動させる点だけです。【唇】特定の形は取りません。【歯】関与しません。' +
      '\n\n' +
      '【日本語との違い】日本語には二種類の「ガ」があります。語頭の「ガ」（がっこう）は英語の/g/に近い破裂音ですが、語中の「ガ」（かがみ）は鼻濁音[ŋ]になることがあります。英語の/g/は常にしっかりとした破裂音で、鼻には抜けません。喉に手を当てて振動を確認しながら、口の奥で「パンッ」と破裂させる感覚で発音してください。' +
      '\n\n' +
      '【語末の注意】語末の/g/（dog, bigなど）では声帯の振動が弱くなり、破裂も弱くなります。dog, bag, bigなどの語末で「グ」の「ウ」を入れないように注意しましょう。go, get, give, again, bigger, dog, bag, bigなどに現れます。',
  },

  // Fricatives (9)
  {
    symbol: 'f',
    displaySymbol: '/f/',
    category: 'consonant',
    subcategory: 'fricative',
    voicing: '無声',
    articulationPoint: '唇歯',
    exampleWord: 'fan',
    elsaNotation: '/fæn/',
    japaneseApprox: 'ファ行',
    description:
      '【唇と歯】上の前歯の先端を下唇の内側（乾いた部分と湿った部分の境目あたり）に軽く当てます。噛むのではなく、歯を唇に「乗せる」感覚です。この隙間から細く息を出して摩擦音を作ります。鏡で確認して、上の前歯が下唇に触れているのを確認しましょう。【舌】特定の位置は取らず、自然な位置でリラックスします。【顎】わずかに開いた状態です。' +
      '\n\n' +
      '【日本語との違い】これは日本語にはない音です。日本語の「フ」は両唇の隙間から息を出す音（両唇摩擦音[ɸ]）で、歯は関与しません。英語の/f/は必ず「歯＋唇」で作ります。日本語の「フ」の癖で両唇を近づけるだけだと/f/にはなりません。' +
      '\n\n' +
      '【練習のコツ】最初は下唇を軽く噛むくらいの大げさな動作で練習し、慣れたら歯を軽く乗せるだけに軽くしていきましょう。「フーッ」と息を吐きながら、途中で上の歯を下唇に当てると、自然に/f/の音が出ます。fan, fish, five, offer, coffee, off, life, leafなどに現れます。',
  },
  {
    symbol: 'v',
    displaySymbol: '/v/',
    category: 'consonant',
    subcategory: 'fricative',
    voicing: '有声',
    articulationPoint: '唇歯',
    exampleWord: 'van',
    elsaNotation: '/væn/',
    japaneseApprox: 'ヴァ行',
    description:
      '【唇と歯】/f/と全く同じ口の形で、上の前歯を下唇の内側に軽く当てます。その状態で声帯を振動させ、歯と唇の隙間から振動を含んだ空気を出します。【舌】自然な位置でリラックス。【顎】わずかに開いた状態。' +
      '\n\n' +
      '【日本語との違い】日本語にはこの音がなく、「ブ（b）」で代用しがちです。しかし/b/は両唇を閉じて破裂させる音で、/v/は歯と唇の摩擦音です。/v/では唇を完全に閉じてはいけません。必ず上の歯が下唇に触れている状態を維持しましょう。' +
      '\n\n' +
      '【練習のコツ】まず/f/で「フー」と息を細く出す練習をし、その口の形のまま声を出してください。下唇がビリビリ振動する感覚があれば正しく出せています。/f/と/v/を交互に「フヴフヴ」と繰り返すと、声帯のON/OFFだけの違いを体感できます。van, very, voice, over, seven, give, love, liveなどに現れます。',
  },
  {
    symbol: 'θ',
    displaySymbol: '/θ/',
    category: 'consonant',
    subcategory: 'fricative',
    voicing: '無声',
    articulationPoint: '歯',
    exampleWord: 'think',
    elsaNotation: '/θɪŋk/',
    japaneseApprox: 'サ行に近い（舌先を歯に）',
    description:
      '【舌と歯】舌先を上の前歯と下の前歯の間から少し出し、上の前歯の先端に軽く触れさせます。舌先が歯の間から2〜3mm見えるくらいが目安です。この狭い隙間から息を漏らして摩擦音を出します。舌を歯で挟むのではなく、舌先を前歯の先端に「当てる」感覚です。【唇】自然に開いた状態。力を入れません。【顎】わずかに開いた状態。' +
      '\n\n' +
      '【日本語との違い】日本語にはこの音がないため、「サ行（s音）」で代用されがちです。しかし/s/は舌先が歯茎近くにあり歯の間から出ていませんが、/θ/は舌先が前歯の間から見えている点が大きく異なります。鏡で自分の口を見て、舌先が前歯の間からわずかに出ているか確認してください。' +
      '\n\n' +
      '【練習のコツ】最初は大げさに舌を歯の間から出して練習し、徐々に控えめにしていきます。「サ」と言いながら舌先を前歯の間に出すと/θ/に変わります。think, three, both, math, path, health, tooth, birthなどに現れます。thankとsankの最初の音を比べて違いを確認しましょう。',
  },
  {
    symbol: 'ð',
    displaySymbol: '/ð/',
    category: 'consonant',
    subcategory: 'fricative',
    voicing: '有声',
    articulationPoint: '歯',
    exampleWord: 'this',
    elsaNotation: '/ðɪs/',
    japaneseApprox: 'ザ行に近い（舌先を歯に）',
    description:
      '【舌と歯】/θ/と全く同じ位置で、舌先を上下の前歯の間に軽く出し、上の前歯の先端に当てます。その状態で声帯を振動させ、摩擦を含んだ声を出します。【唇】自然に開いた状態。【顎】わずかに開いた状態。' +
      '\n\n' +
      '【日本語との違い】日本語では「ザ行」で代用されがちですが、/z/は舌先が歯茎付近にあり、/ð/は舌先が前歯の間に出ている点が異なります。the, this, that, thereなどの超頻出単語に含まれるため、この音は日常会話で非常に重要です。' +
      '\n\n' +
      '【練習のコツ】/θ/を確実に出せるようになってから、そこに声を加えて/ð/を練習するのが効率的です。舌先が前歯の間でビリビリ振動する感覚があれば正しく出せています。the, this, that, there, other, mother, father, smooth, breatheなどに現れます。thinkの/θ/（無声）とthisの/ð/（有声）を比べて違いを確認しましょう。',
  },
  {
    symbol: 's',
    displaySymbol: '/s/',
    category: 'consonant',
    subcategory: 'fricative',
    voicing: '無声',
    articulationPoint: '歯茎',
    exampleWord: 'sun',
    elsaNotation: '/sʌn/',
    japaneseApprox: 'サ行',
    description:
      '【舌】舌先を上の歯茎に非常に近づけますが、触れさせません。舌先と歯茎の間にごく狭い隙間を作り、そこに息を通して鋭い摩擦音を出します。舌の両側は上の奥歯に触れて空気が横に逃げないようにし、息を舌の中央の溝に集中させます。【歯】上下の前歯はほぼ噛み合わせに近い位置で、歯の隙間から鋭い息が出ます。【唇】自然に開いた状態で、後続の母音に応じて変わります。' +
      '\n\n' +
      '【日本語との違い】日本語の「サ行」の子音にかなり近い音です。ただし英語の/s/はより鋭く、息の圧力が強い傾向があります。蛇の「シーッ」という擬音や、風船から空気が漏れる「スー」というイメージの、息だけで作る鋭い音です。' +
      '\n\n' +
      '【/θ/との区別】日本語話者は/θ/（think）と/s/（sink）を混同しやすいです。/s/では舌先が口の中にあり前歯から出ませんが、/θ/では舌先が前歯の間に出ます。この違いを鏡で確認しましょう。sun, sit, see, answer, lesson, bus, face, iceなどに現れます。',
  },
  {
    symbol: 'z',
    displaySymbol: '/z/',
    category: 'consonant',
    subcategory: 'fricative',
    voicing: '有声',
    articulationPoint: '歯茎',
    exampleWord: 'zoo',
    elsaNotation: '/zu/',
    japaneseApprox: 'ザ行',
    description:
      '【舌】/s/と全く同じ位置で、舌先を歯茎に近づけて狭い隙間を作ります。その隙間から声帯を振動させた息を出して有声摩擦音を作ります。舌の両側は上の奥歯に触れて空気を中央に集中させます。【歯】/s/と同じく、上下の前歯はほぼ噛み合った位置。【唇】自然な状態。' +
      '\n\n' +
      '【日本語との違い】日本語の「ザ行」の子音に近い音です。ミツバチの羽音「ブーン（zzz...）」のような、振動を含んだ持続音をイメージしてください。日本語の「ズ」は破裂要素が入ることがありますが、英語の/z/は純粋な摩擦音を持続させます。' +
      '\n\n' +
      '【練習のコツ】まず/s/で「スー」と持続音を出し、途中で声帯を振動させて「ズー」に変えてみましょう。「スーズースーズー」と交互に練習すると、声帯のON/OFFの切り替えが身につきます。英語の複数形-sは前の音が有声なら/z/になります（dogs, beds, livesなど）。zoo, zero, zone, easy, busy, was, has, roseなどに現れます。',
  },
  {
    symbol: 'ʃ',
    displaySymbol: '/ʃ/',
    category: 'consonant',
    subcategory: 'fricative',
    voicing: '無声',
    articulationPoint: '後部歯茎',
    exampleWord: 'she',
    elsaNotation: '/ʃi/',
    japaneseApprox: 'シャ行',
    description:
      '【舌】舌の前方部分を上あごの後部歯茎（/s/の位置よりやや後方）に近づけて、/s/より広めの隙間から息を出します。舌全体が/s/より後方にあり、舌先は歯茎にほぼ触れない程度に近づけます。舌の中央にやや広い溝を作ります。【唇】これが重要なポイントで、唇を前に軽く突き出して丸めます。/s/では唇は丸めませんが、/ʃ/では唇を丸めることでこもった柔らかい音質になります。【歯】直接関与しませんが、上下の歯の間はやや開いています。' +
      '\n\n' +
      '【日本語との違い】日本語の「シ」の子音に近い音です。人に「静かに！」と言うときの「シーッ」がほぼ/ʃ/そのものです。日本語の「シ」と同じ要領で発音できますが、英語では唇の丸めをより意識しましょう。' +
      '\n\n' +
      '【/s/との区別】/s/は舌先が歯茎に近く鋭い高い音。/ʃ/は舌が少し後方で唇を丸めたこもった音。「スー」と「シュー」の違いに近いです。she, ship, show, fashion, nation, push, fish, wishなどに現れます。',
  },
  {
    symbol: 'ʒ',
    displaySymbol: '/ʒ/',
    category: 'consonant',
    subcategory: 'fricative',
    voicing: '有声',
    articulationPoint: '後部歯茎',
    exampleWord: 'measure',
    elsaNotation: '/mɛʒər/',
    japaneseApprox: 'ジャ行に近い',
    description:
      '【舌】/ʃ/と全く同じ位置で、舌の前方部分を後部歯茎に近づけます。その状態で声帯を振動させます。【唇】/ʃ/と同じく軽く丸めて突き出します。【歯】直接関与しません。' +
      '\n\n' +
      '【日本語との違い】日本語の「ジ」の子音にやや近いですが、日本語の「ジ」は破擦音（/dʒ/に近い）であるのに対し、/ʒ/は純粋な摩擦音です。舌を上あごに当てて離す破裂の動作はなく、隙間から声を含んだ息を流し続けます。' +
      '\n\n' +
      '【特徴】英語の中でも比較的出現頻度が低い音で、語頭にはほとんど現れません。語中や語末で、特定のスペルパターンに現れます。measure, pleasure, vision, decision, usual, garage（一部の発音）, beige, genreなどに現れます。/ʃ/を確実に出せるようになったら、そこに声を足すだけで/ʒ/になります。',
  },
  {
    symbol: 'h',
    displaySymbol: '/h/',
    category: 'consonant',
    subcategory: 'fricative',
    voicing: '無声',
    articulationPoint: '声門',
    exampleWord: 'hat',
    elsaNotation: '/hæt/',
    japaneseApprox: 'ハ行',
    description:
      '【声門と息】声門（喉の奥にある声帯の隙間）を軽く狭め、そこを通る息で摩擦音を作ります。口の中の特定の位置で閉鎖や狭めを作る他の子音とは異なり、/h/は喉の奥だけで作る音です。【舌】/h/自体では舌は特定の位置を取りません。後に続く母音の位置にすでに準備している状態です。つまり、heatの/h/とhootの/h/では舌の位置が異なります。【唇】後続の母音に応じて変わります。【歯】関与しません。' +
      '\n\n' +
      '【日本語との違い】日本語の「ハ行」の子音にとても近く、日本語話者にとって出しやすい音です。寒い日に手を温めようとする「ハーッ」という息そのものです。日本語の「ヒ」は[çi]（硬口蓋摩擦音）、「フ」は[ɸ]（両唇摩擦音）ですが、英語の/h/は常に声門摩擦音です。' +
      '\n\n' +
      '【注意点】英語では語頭にのみ現れ、語末には現れません。また、弱形ではしばしば脱落します（him→\u2019im, her→\u2019er）。hat, he, here, hot, house, who, behind, perhapsなどに現れます。hourのhは発音されません。',
  },

  // Affricates (2)
  {
    symbol: 'tʃ',
    displaySymbol: '/tʃ/',
    category: 'consonant',
    subcategory: 'affricate',
    voicing: '無声',
    articulationPoint: '後部歯茎',
    exampleWord: 'church',
    elsaNotation: '/tʃɝtʃ/',
    japaneseApprox: 'チャ行',
    description:
      '【舌】/t/の破裂と/ʃ/の摩擦が連続して起こる破擦音です。まず舌先から舌の前方部分を後部歯茎に広く当てて空気を完全に遮断し（/t/の閉鎖）、次にゆっくりと離して/ʃ/の摩擦を出します。この2段階が一つの音として融合しています。【唇】/ʃ/の要素があるため、唇を軽く丸めて突き出します。【歯】直接関与しませんが、歯の隙間から摩擦音が出ます。' +
      '\n\n' +
      '【日本語との違い】日本語の「チャ行」に非常に近い音で、比較的出しやすい音です。ただし英語の/tʃ/では、閉鎖から摩擦への移行がやや遅く（強い摩擦成分）、日本語の「チ」より息の量が多い傾向があります。「チッ」と鋭く言うときの子音がほぼ/tʃ/です。' +
      '\n\n' +
      '【/ʃ/との区別】/ʃ/は摩擦音のみ（息がずっと流れる）ですが、/tʃ/は最初に舌で空気を止めてから摩擦を出す（「タメ」がある）のが違いです。church, cheese, catch, watch, teacher, nature, question, matchなどに現れます。',
  },
  {
    symbol: 'dʒ',
    displaySymbol: '/dʒ/',
    category: 'consonant',
    subcategory: 'affricate',
    voicing: '有声',
    articulationPoint: '後部歯茎',
    exampleWord: 'judge',
    elsaNotation: '/dʒʌdʒ/',
    japaneseApprox: 'ジャ行',
    description:
      '【舌】/tʃ/と同じ位置で、舌の前方部分を後部歯茎に当てて閉鎖し、ゆっくり離して摩擦を出しますが、全体を通して声帯を振動させます。/d/の有声破裂と/ʒ/の有声摩擦が融合した音です。【唇】軽く丸めて突き出します。【歯】直接関与しません。' +
      '\n\n' +
      '【日本語との違い】日本語の「ジャ行」にかなり近い音です。日本語の「ジ」は「ヂ」とも書かれるように破擦音の要素があり、英語の/dʒ/に近い音です。舌先を上あごに当て、声を出しながら離す要領で発音します。' +
      '\n\n' +
      '【/ʒ/との区別】/ʒ/は純粋な摩擦音（measureのs部分）で、/dʒ/は最初に破裂がある（judgeのj部分）という違いがあります。/dʒ/の方が「タメ」があり、より力強い印象の音です。judge, jump, job, age, page, orange, bridge, changeなどに現れます。',
  },

  // Nasals (3)
  {
    symbol: 'm',
    displaySymbol: '/m/',
    category: 'consonant',
    subcategory: 'nasal',
    voicing: '有声',
    articulationPoint: '両唇',
    exampleWord: 'man',
    elsaNotation: '/mæn/',
    japaneseApprox: 'マ行',
    description:
      '【唇】上下の唇をしっかり閉じます。/b/と同じ唇の位置ですが、/m/では口からの空気は完全に止め、代わりに鼻腔を通して声を響かせます。【舌】特定の位置は取らず、リラックスした状態。軟口蓋（上あごの奥の柔らかい部分）が下がって鼻腔への通路を開いています。【歯】関与しません。' +
      '\n\n' +
      '【日本語との違い】日本語の「マ行」とほぼ同じで、日本語話者にとって最も簡単な英語子音の一つです。ハミングの「ンー」がまさに/m/の持続音です。唇を閉じたまま「ンー」と鼻に声を響かせ、そこから唇を開けると/m/+母音の音になります。' +
      '\n\n' +
      '【語末の注意】語末の/m/（swim, comeなど）では、唇を閉じたまま鼻に声を通して終わります。「ム」のように母音を加えないよう注意しましょう。鼻に手を当てると振動を感じるはずです。man, make, more, summer, animal, swim, come, teamなどに現れます。',
  },
  {
    symbol: 'n',
    displaySymbol: '/n/',
    category: 'consonant',
    subcategory: 'nasal',
    voicing: '有声',
    articulationPoint: '歯茎',
    exampleWord: 'no',
    elsaNotation: '/noʊ/',
    japaneseApprox: 'ナ行',
    description:
      '【舌】舌先を上の歯茎にしっかり当て、口からの空気の流れを遮断します。/d/と同じ舌の位置ですが、/n/では軟口蓋が下がって鼻腔が開き、声が鼻を通って出ます。舌の両側も上の歯の内側に触れて完全に口腔を塞ぎます。【唇】特定の形は取りません。【歯】舌先が触れるのは歯ではなく歯茎（歯の少し上）です。' +
      '\n\n' +
      '【日本語との違い】日本語の「ナ行」の子音とほぼ同じです。ただし日本語の「ん」は後続の音によって舌の位置が変わります（「ん」の前が「か行」なら[ŋ]、「た行」なら[n]、「ま行」なら[m]）。英語の/n/は常に舌先を歯茎に固定します。' +
      '\n\n' +
      '【語末の注意】語末の/n/（sun, penなど）では、舌先を歯茎に当てたまま鼻に声を通して終わります。「ヌ」のように母音を加えないよう注意しましょう。鼻をつまんで発音できなくなれば、正しく鼻音が出ている証拠です。no, new, night, dinner, sunny, sun, pen, tenなどに現れます。',
  },
  {
    symbol: 'ŋ',
    displaySymbol: '/ŋ/',
    category: 'consonant',
    subcategory: 'nasal',
    voicing: '有声',
    articulationPoint: '軟口蓋',
    exampleWord: 'sing',
    elsaNotation: '/sɪŋ/',
    japaneseApprox: '「ン」（カ行の前）',
    description:
      '【舌】舌の奥（後舌面）を軟口蓋に当てて口からの空気を遮断し、鼻腔を通して声を出します。/g/と同じ舌の位置ですが、軟口蓋が下がって鼻腔への通路が開いています。舌先は下の歯の裏あたりに自然に置きます。【唇】特定の形は取りません。軽く開いた状態。【歯】関与しません。' +
      '\n\n' +
      '【日本語との違い】日本語の「案外（あんがい）」「りんご」の「ん」がこの音に近く、日本語話者は無意識に出せています。ただし日本語ではこの音は独立した音素ではなく「ん」の変異形ですが、英語では/n/と/ŋ/は別の音素です（sin vs. singは違う単語）。' +
      '\n\n' +
      '【/n/との区別】/n/は舌先が歯茎に触れますが、/ŋ/は舌の奥が軟口蓋に触れます。singとsinの末尾を比べてみてください。/ŋ/の後には/g/の破裂が続かないことに注意。singは/sɪŋ/であり/sɪŋg/ではありません（ただしfinger=/fɪŋgər/のように/g/が続く場合もあります）。sing, ring, long, song, king, thing, running, nothingなどに現れます。',
  },

  // Liquids (2)
  {
    symbol: 'l',
    displaySymbol: '/l/',
    category: 'consonant',
    subcategory: 'liquid',
    exampleWord: 'let',
    elsaNotation: '/lɛt/',
    japaneseApprox: 'ラ行に近い（舌先を歯茎に）',
    description:
      '【舌】舌先を上の歯茎にしっかり当て、その状態を維持したまま、舌の片側または両側から空気を流します（側面音）。これが英語/l/の最大の特徴で、日本語の「ラ行」（舌先が歯茎を瞬間的に弾く音）とは根本的に異なります。舌先は歯茎に「貼り付いた」まま離しません。【唇】特定の形は取りませんが、後続の母音に応じて変わります。【歯】舌先は歯ではなく歯茎に当たります。' +
      '\n\n' +
      '【2種類の/l/】語頭や母音の前の「クリアL（明るいL）」（light, let）では、舌先を歯茎に当て、舌の前部がやや持ち上がった明るい響きになります。語末や子音の前の「ダークL（暗いL）」（feel, milk）では、舌先は歯茎に当てつつ、舌の奥（後舌面）も持ち上がり、こもった暗い「ウ」のような響きが加わります。' +
      '\n\n' +
      '【練習のコツ】「ラリルレロ」を言うとき、舌先が歯茎を弾いてすぐ離れる日本語の感覚を捨てて、舌先を歯茎に「くっつけたまま」声を出す練習をしましょう。「ンラー」のように鼻音から始めると舌先を当てた状態を維持しやすいです。let, light, like, follow, hello, feel, all, milkなどに現れます。',
  },
  {
    symbol: 'r',
    displaySymbol: '/r/',
    category: 'consonant',
    subcategory: 'liquid',
    exampleWord: 'red',
    elsaNotation: '/rɛd/',
    japaneseApprox: 'ラ行に近い（舌を巻く）',
    description:
      '【舌】英語の/r/は舌先を口の中のどこにも触れさせません。これが/l/との最大の違いです。発音方法は主に2つあります。(1)舌先を反らせて上に向ける方法（retroflex R）：舌先をカールさせて上あごの方に向けますが、触れません。(2)舌の中央を盛り上げる方法（bunched R）：舌先は下のままで、舌全体を奥に引きながら中央部を持ち上げます。どちらでも同じ音になるので、自分に合う方を選びましょう。【唇】軽く丸めて前に突き出します。この唇の丸めが英語らしい/r/を出すための重要なポイントです。【歯】関与しません。' +
      '\n\n' +
      '【日本語との違い】日本語の「ラ行」は舌先が歯茎を瞬間的に弾く音（はじき音）で、英語の/r/とは全く異なります。英語の/r/は舌がどこにも触れず、/l/は舌先が歯茎に当たるという区別が極めて重要です。' +
      '\n\n' +
      '【練習のコツ】「ウー」の口の形（唇を丸める）で、舌先をどこにも触れさせずに上に向けたまま「アー」と言うと/r/に近い音が出ます。犬が唸る「グルルルル」の音の舌の感覚もヒントになります。/r/と/l/を交互に練習（right/light, read/lead）して区別を体感しましょう。red, right, run, very, sorry, car, more, starなどに現れます。',
  },

  // Glides (2)
  {
    symbol: 'w',
    displaySymbol: '/w/',
    category: 'consonant',
    subcategory: 'glide',
    articulationPoint: '両唇軟口蓋',
    exampleWord: 'we',
    elsaNotation: '/wi/',
    japaneseApprox: 'ワ行',
    description:
      '【唇】唇を強く丸めてすぼめ、小さな円形の開口を作ります。口笛を吹く直前の唇の形に近いです。この唇の丸めが/w/の最大の特徴です。日本語の「ワ」よりもはるかに強く丸めます。【舌】舌の奥（後舌面）を軟口蓋に向かって持ち上げます。/u/（ウー）の母音の舌の位置に非常に近いです。【歯】関与しません。唇が歯を覆うくらい丸めてOKです。' +
      '\n\n' +
      '【動き方】/w/は「接近音（glide）」と呼ばれ、/u/の位置から素早く次の母音の位置へ舌と唇が移動する「動き」の音です。「ウ」の口をしっかり作ってから、一気に次の母音に移行します。we=/wi/なら、「ウ」の口→「イ」の口へ素早く移動する動きです。' +
      '\n\n' +
      '【日本語との違い】日本語の「ワ」は唇の丸めが弱いため、英語の/w/よりずっと軽い音です。英語では唇を「ぎゅっ」とすぼめる感覚を大げさにするとちょうどよいです。we, water, want, away, always, question, quick, oneなどに現れます。oneは/wʌn/と発音されます。',
  },
  {
    symbol: 'j',
    displaySymbol: '/j/',
    category: 'consonant',
    subcategory: 'glide',
    articulationPoint: '硬口蓋',
    exampleWord: 'yes',
    elsaNotation: '/jɛs/',
    japaneseApprox: 'ヤ行',
    description:
      '【舌】舌の前部を硬口蓋（上あごの硬い部分、歯茎の後方からやや奥）に近づけます。/i/（イー）の母音の舌の位置に非常に近く、そこから素早く次の母音へ移行する音です。舌先は下の歯の裏あたりに自然に置きます。【唇】次の母音に応じて変わりますが、/j/自体では唇は横に引き気味（「イ」の口に近い）です。【歯】関与しません。' +
      '\n\n' +
      '【動き方】/w/と同様に接近音（glide）で、/i/の位置から次の母音へ素早く移行する「動き」の音です。yes=/jɛs/なら、「イ」の口の構え→「エ」の位置へ移行する動きです。' +
      '\n\n' +
      '【日本語との違い】日本語の「ヤ行」の子音とほぼ同じで、日本語話者にとって最も出しやすい英語子音の一つです。「ヤ・ユ・ヨ」の最初の子音がほぼ/j/です。yes, you, year, young, beyond, opinion, million, onionなどに現れます。uの字がyouのように/ju/と発音されるケースも多いです（use=/juz/、unit=/junɪt/など）。',
  },

  // === Monophthongs (11) ===
  // Front Vowels (4)
  {
    symbol: 'i',
    displaySymbol: '/i/',
    category: 'monophthong',
    subcategory: 'front-vowel',
    openness: '狭（閉）',
    exampleWord: 'feet',
    elsaNotation: '/fit/',
    japaneseApprox: '「イー」（長め）',
    description:
      '【舌】舌の前部を硬口蓋に向かって高く持ち上げます。英語の母音の中で舌の位置が最も高く、最も前方にある音です。舌先は下の前歯の裏に軽く触れます。舌に力を入れた緊張した状態で発音します。【唇】左右に横に引いて、笑顔のような形にします。唇を横に引く力が日本語の「イ」より強いです。【歯】上下の歯の間隔は非常に狭く、ほとんど閉じかけの状態です。【顎】ほとんど閉じた状態。' +
      '\n\n' +
      '【日本語との違い】日本語の「イー」を長く伸ばした音に近いですが、英語の/i/は舌の位置がより高く、唇の引きがより強く、筋肉の緊張がある音（tense vowel）です。日本語の「イ」はよりリラックスしています。' +
      '\n\n' +
      '【/ɪ/との区別】/i/と/ɪ/は長さだけでなく音質が異なります。/i/は緊張した高い音、/ɪ/は弛緩した低めの音です。feet(/i/)とfit(/ɪ/)、seat(/i/)とsit(/ɪ/)を比べて練習しましょう。feet, see, key, eat, believe, people, these, pieceなどに現れます。',
  },
  {
    symbol: 'ɪ',
    displaySymbol: '/ɪ/',
    category: 'monophthong',
    subcategory: 'front-vowel',
    openness: '半狭',
    exampleWord: 'sit',
    elsaNotation: '/sɪt/',
    japaneseApprox: '「イ」（短く弛緩）',
    description:
      '【舌】舌の前部を/i/よりやや低く、やや後方にして発音します。/i/ほど舌を高く持ち上げず、筋肉の緊張もない弛緩した状態（lax vowel）です。舌先は下の歯の裏あたり。【唇】/i/のように横に引きますが、力は弱めです。自然にリラックスした状態。【歯】/i/より歯の間がやや広く開いています。【顎】/i/よりやや開いた状態。' +
      '\n\n' +
      '【日本語との違い】日本語の「イ」に最も近い英語母音ですが、英語の/ɪ/は「エ」寄りの弛緩した「イ」です。口の力を抜いて「イ」と「エ」の中間あたりの音を出すイメージです。日本語の「イ」をだらけさせた感覚に近いです。' +
      '\n\n' +
      '【/i/との区別が重要な単語】seat vs. sit、feel vs. fill、heat vs. hit、sheep vs. ship。/i/は口に力を入れて高い音、/ɪ/は力を抜いて低めの音。この違いで意味が変わります。sit, big, fish, give, this, milk, rich, listなどに現れます。',
  },
  {
    symbol: 'ɛ',
    displaySymbol: '/ɛ/',
    category: 'monophthong',
    subcategory: 'front-vowel',
    openness: '半広',
    exampleWord: 'bed',
    elsaNotation: '/bɛd/',
    japaneseApprox: '「エ」',
    description:
      '【舌】舌の前部を中程度の高さにします。/ɪ/より舌の位置がさらに低く、/æ/よりは高い位置です。舌先は下の前歯の裏に軽く触れます。【唇】自然に開いた状態で、横にも丸めにもしません。リラックスした中間の形。【歯】/ɪ/より歯の間がやや広い程度。【顎】やや開いた状態。指1本分ほどの開き。' +
      '\n\n' +
      '【日本語との違い】日本語の「エ」にかなり近い音で、日本語話者にとって出しやすい音です。日本語の「エ」よりやや口の開きが大きい傾向がありますが、ほぼそのままで通じます。' +
      '\n\n' +
      '【/æ/との区別】/ɛ/と/æ/は日本語話者にとって混同しやすい音です。/ɛ/は素直な「エ」で口の開きが控えめ、/æ/は「ア」と「エ」の中間で口の開きが大きいという違いがあります。bed(/ɛ/)とbad(/æ/)、set(/ɛ/)とsat(/æ/)を比べて練習しましょう。bed, get, red, head, said, friend, many, breadなどに現れます。',
  },
  {
    symbol: 'æ',
    displaySymbol: '/æ/',
    category: 'monophthong',
    subcategory: 'front-vowel',
    openness: '広',
    exampleWord: 'cat',
    elsaNotation: '/kæt/',
    japaneseApprox: '「ア」と「エ」の間',
    description:
      '【舌】舌の前部を低い位置に下げます。英語の前舌母音の中で最も舌が低い音です。舌を低く平らにしながらも、前方（前舌）の位置を保ちます。舌先は下の前歯の裏に触れたまま。【唇】横に広げます。「エ」の口の形のまま大きく開けるイメージです。唇を横に引きつつ顎を下げるのがポイント。【歯】上下の歯の間は指1〜2本分開きます。【顎】/ɛ/よりさらに大きく開きます。' +
      '\n\n' +
      '【日本語との違い】日本語にはこの音がありません。「ア」と「エ」の中間の音で、「エ」の口の形（横に引く）を保ちながら「ア」くらい口を大きく開けます。笑顔を作って口を大きく開けた状態で「ア」と言うと/æ/に近い音になります。' +
      '\n\n' +
      '【練習のコツ】「エ」と言いながら口をどんどん開けていくと、途中で/æ/の音になります。あるいは「ア」と言いながら唇を横に引くアプローチでも近づけます。「エァ」と素早く言う感覚でもOKです。日本語話者は「エ」か「ア」のどちらかに寄りがちなので、必ず中間を狙いましょう。cat, bad, man, have, back, hand, flat, happyなどに現れます。',
  },

  // Central Vowels (3)
  {
    symbol: 'ə',
    displaySymbol: '/ə/',
    category: 'monophthong',
    subcategory: 'central-vowel',
    openness: '中央（弱）',
    exampleWord: 'about',
    elsaNotation: '/əbaʊt/',
    japaneseApprox: '曖昧な「ア」（弱く短い）',
    description:
      '【舌】舌は口の中央、中程度の高さの「ニュートラルポジション」に置きます。前にも後ろにも、高くも低くも偏らない、完全にリラックスした状態です。舌先は下の歯の裏あたり。【唇】力を入れず、自然に半開きの状態。丸めも引きもしません。【歯】やや開いた自然な状態。【顎】リラックスしてやや開いた状態。' +
      '\n\n' +
      '【この音の本質】「シュワー（schwa）」と呼ばれ、英語で最も頻出する母音です。口のどの筋肉にも力を入れず、ただ「声を出す」だけの最も楽な母音です。驚いたときに出る短い「ア！」のような、何の準備もなく出る曖昧な母音がこの音です。' +
      '\n\n' +
      '【出現パターン】強勢のない音節に現れます。about(/əbaʊt/)の最初の音、banana(/bənænə/)の第1・第3音節、sofa(/soʊfə/)の末尾などです。英語のリズムの中核で、強勢のない音節の母音は多くがこの/ə/に変化します。力を入れないことが最大のコツです。about, banana, sofa, again, common, problem, open, humanなどに現れます。',
  },
  {
    symbol: 'ʌ',
    displaySymbol: '/ʌ/',
    category: 'monophthong',
    subcategory: 'central-vowel',
    openness: '半広',
    exampleWord: 'cup',
    elsaNotation: '/kʌp/',
    japaneseApprox: '「ア」（短く強め）',
    description:
      '【舌】/ə/と口の形はほぼ同じですが、やや舌が低く、口がやや大きく開きます。舌は中央のやや後方、中程度の高さにあります。舌先は下の歯の裏あたり。【唇】自然に開いた状態で、丸めも引きもしません。/ə/よりやや開きが大きい程度。【歯】やや開いた状態。【顎】自然に開いた状態で、/ə/よりやや大きめ。' +
      '\n\n' +
      '【/ə/との違い】音質的には/ə/に非常に近い音ですが、最大の違いは「強勢があるかどうか」です。/ʌ/は強勢のある音節に現れ、はっきり力強く発音します。/ə/は弱く曖昧な「ア」、/ʌ/はお腹から声を出す強い「ア」と覚えましょう。' +
      '\n\n' +
      '【日本語との違い】日本語の短い「ア」に近い音ですが、口の開きがやや小さく、「ア」と「オ」の中間的な響きがあります。日本語の「ア」ほど口を大きく開けず、少しこもった「ア」を強めに出すイメージです。cup, bus, love, money, come, run, fun, someなどに現れます。',
  },
  {
    symbol: 'ɝ',
    displaySymbol: '/ɝ/',
    category: 'monophthong',
    subcategory: 'central-vowel',
    openness: '中央（R音化・強勢）',
    exampleWord: 'bird',
    elsaNotation: '/bɝd/',
    japaneseApprox: '「アー」＋舌巻き',
    description:
      '【舌】アメリカ英語に特徴的なR音化母音です。舌全体をやや後方に引き、舌の中央部を盛り上げます。舌先は反らせて上方に向けるか（retroflex）、または下のまま舌全体を奥に引く（bunched）方法があります。どちらの方法でも、舌先は口の中のどこにも触れません。これは子音/r/の舌の構えと同じです。【唇】やや丸めて軽く突き出します。この唇の丸めがR音化の響きを強めます。【歯】関与しません。【顎】やや開いた程度。' +
      '\n\n' +
      '【日本語との違い】日本語にはない音で、アメリカ英語を特徴づける音の一つです。「ウー」と「アー」の中間の音を出しながら、舌全体を奥に引いてこもらせるイメージです。最初は「アー」と言いながら舌先をそっと上に反らせる練習から始めましょう。' +
      '\n\n' +
      '【練習のコツ】うがいをする直前の舌の感覚（舌を奥に引いて持ち上げた状態）が近いです。唇をやや丸めて「アー」と言いながら舌先を反らせると、こもった音になります。bird, first, nurse, work, learn, heard, earth, turnなどに現れます。アメリカ英語では/ɜːr/と書かれることもあります。',
  },

  // Back Vowels (4)
  {
    symbol: 'u',
    displaySymbol: '/u/',
    category: 'monophthong',
    subcategory: 'back-vowel',
    openness: '狭（閉）',
    exampleWord: 'boot',
    elsaNotation: '/but/',
    japaneseApprox: '「ウー」（唇丸め）',
    description:
      '【舌】舌の奥の部分（後舌面）を軟口蓋に向かって高く持ち上げます。英語の母音の中で最も舌が後方かつ高い位置にあります。舌先は下の前歯から離れています。【唇】しっかりと丸めて前に突き出します。口笛を吹く寸前のように、小さな円形の開口を作ります。この唇の丸めが/u/の最も重要な特徴です。【歯】唇が丸まって前に出るため、歯はほとんど見えません。【顎】ほとんど閉じた状態。' +
      '\n\n' +
      '【日本語との違い】日本語の「ウ」は唇をほとんど丸めず、平べったい形で出す音です（非円唇後舌母音）。英語の/u/は「オ」のように唇を丸めて突き出すことが必須です。日本語の「ウ」の口のまま英語を話すと、/u/の音が正しく聞こえません。' +
      '\n\n' +
      '【練習のコツ】口笛を吹く直前の口で「ウー」と長く伸ばしてみてください。唇が前に突き出して小さく丸まっていればOKです。/u/は緊張母音（tense vowel）で、筋肉に力を入れて発音します。boot, food, moon, two, blue, juice, group, rudeなどに現れます。',
  },
  {
    symbol: 'ʊ',
    displaySymbol: '/ʊ/',
    category: 'monophthong',
    subcategory: 'back-vowel',
    openness: '半狭',
    exampleWord: 'foot',
    elsaNotation: '/fʊt/',
    japaneseApprox: '「ウ」（短く弛緩）',
    description:
      '【舌】/u/よりやや低く、やや中央寄りの位置に舌の奥部分を置きます。/u/ほど舌を高く持ち上げず、筋肉の緊張もない弛緩した状態（lax vowel）です。【唇】/u/より唇の丸めが弱く、やや緩んだ丸めです。強く突き出さず、軽く丸める程度。【歯】/u/よりやや歯が見える程度。【顎】/u/よりやや開いた状態。' +
      '\n\n' +
      '【日本語との違い】日本語の「ウ」の音質に最も近い英語母音です。唇を軽く丸めた短い「ウ」で、力を抜いた自然な状態で出します。' +
      '\n\n' +
      '【/u/との区別】/u/（food）は長く、唇を強く丸めた緊張した音。/ʊ/（foot）は短く、唇の丸めが弱い弛緩した音。長さだけでなく音質（力の入り具合）が異なります。pool(/u/) vs. pull(/ʊ/)、fool(/u/) vs. full(/ʊ/)を比べて練習しましょう。foot, book, good, put, look, cook, push, shouldなどに現れます。',
  },
  {
    symbol: 'ɔ',
    displaySymbol: '/ɔ/',
    category: 'monophthong',
    subcategory: 'back-vowel',
    openness: '半広',
    exampleWord: 'thought',
    elsaNotation: '/θɔt/',
    japaneseApprox: '「オー」（唇丸め）',
    description:
      '【舌】舌の奥（後舌面）を中程度の高さに持ち上げます。/u/よりかなり低く、/ɑ/よりは高い位置です。舌先は下の前歯から離れた自然な位置。【唇】しっかりと丸めます。/u/ほど強くすぼめませんが、明確な円唇（まるくち）を作ります。日本語の「オ」よりも口を大きく縦に開き、唇を丸めます。【歯】唇が丸まるため、あまり見えません。【顎】やや大きく開きます。指1〜2本分。' +
      '\n\n' +
      '【日本語との違い】日本語の「オ」よりも口を縦に大きく開け、唇の丸めが強い音です。あくびの途中のように口を大きく開けつつ唇を丸めるイメージです。「オー」と伸ばしながら口を縦に大きく開けると近づきます。' +
      '\n\n' +
      '【注意点】アメリカ英語の多くの方言では/ɔ/と/ɑ/が区別されなくなりつつあります（cot-caught合流）。caught(/kɔt/)とcot(/kɑt/)が同じ発音になる話者も多いです。thought, law, all, water, talk, cause, walk, bossなどに現れます。区別する方言では、/ɔ/は唇を丸めた「オー」、/ɑ/は唇を丸めない大きな「ア」です。',
  },
  {
    symbol: 'ɑ',
    displaySymbol: '/ɑ/',
    category: 'monophthong',
    subcategory: 'back-vowel',
    openness: '広',
    exampleWord: 'father',
    elsaNotation: '/fɑðər/',
    japaneseApprox: '「ア」（口を大きく）',
    description:
      '【舌】舌を低く平らにし、やや後方に引きます。英語の母音の中で最も舌が低く、最も口が開く音の一つです。舌先は下の前歯から離れた位置。舌全体がリラックスして口の底に沈んだ状態です。【唇】丸めず、自然に開いた状態です。/ɔ/と違い円唇にはなりません。【歯】上下の歯の間は大きく開きます。指2本分ほど。【顎】大きく下げ、口を縦に大きく開けます。' +
      '\n\n' +
      '【日本語との違い】日本語の「ア」に最も近い英語母音ですが、英語の/ɑ/はより口の開きが大きく、喉の奥が見えるほど大きく開けます。あくびの始まりの「アー」のような開放的な音です。日本語の「ア」をそのまま使うと、口の開きが不十分に聞こえることがあります。' +
      '\n\n' +
      '【/æ/との区別】/ɑ/は口を大きく縦に開けた「ア」で唇は丸めない。/æ/は口を横に引いた「エ」と「ア」の中間。hot(/ɑ/)とhat(/æ/)、box(/ɑ/)とbacks(/æ/)を比べて、口の開け方の違いを確認しましょう。father, hot, box, stop, rock, clock, body, doctorなどに現れます。',
  },

  // === Diphthongs (5) ===
  {
    symbol: 'eɪ',
    displaySymbol: '/eɪ/',
    category: 'diphthong',
    subcategory: 'diphthong',
    movement: '前舌→狭',
    exampleWord: 'say',
    elsaNotation: '/seɪ/',
    japaneseApprox: '「エイ」',
    description:
      '【出発点の口の構え】舌の前部を中程度の高さに置き（/ɛ/よりやや高い位置）、口をやや開いた「エ」の状態から始めます。唇は自然に開いた状態。【到達点の口の構え】舌の前部を/ɪ/の位置（やや高く前方）に向かって持ち上げていきます。顎が閉じて口の開きが小さくなります。' +
      '\n\n' +
      '【動きのポイント】「エ」から「イ」へ滑らかに移動する二重母音です。最初の「エ」の部分を長めに保ち、最後に軽く「イ」に向かう動きがあります。「エーーイ」のように前半が長く後半が短い配分です。二重母音は「動き」が本質なので、音が一定に伸びるのではなく「変化する」ことが重要です。' +
      '\n\n' +
      '【日本語との違い】日本語の「エイ」は「エー」と長く伸ばして最後の「イ」が弱い傾向がありますが、英語では「エ」→「イ」への舌と顎の移動がより明確です。say, day, make, take, name, face, late, trainなどに現れます。a_e（make）、ai（rain）、ay（day）、ey（they）など様々なスペルで表されます。',
  },
  {
    symbol: 'aɪ',
    displaySymbol: '/aɪ/',
    category: 'diphthong',
    subcategory: 'diphthong',
    movement: '広→狭',
    exampleWord: 'time',
    elsaNotation: '/taɪm/',
    japaneseApprox: '「アイ」',
    description:
      '【出発点の口の構え】口を大きく開け、舌を低い位置に置きます。/ɑ/に近い広い「ア」の状態です。唇は丸めず自然に開いた状態。顎は大きく下がっています。【到達点の口の構え】そこから舌の前部を/ɪ/の位置に向かって高く持ち上げ、口を閉じていきます。唇は横に引かれます。' +
      '\n\n' +
      '【動きのポイント】英語の二重母音の中で最も口の動きが大きい音の一つです。「大きく開いた ア」→「小さく閉じた イ」という、顎と舌の大幅な移動があります。この動きを大げさにするほど英語らしく聞こえます。最初の「ア」を十分に大きく開けることがコツです。' +
      '\n\n' +
      '【日本語との違い】日本語の「アイ」にかなり近い音ですが、英語では出だしの「ア」がより大きく開いた/ɑ/寄りの音です。日本語の「ア」より口を大きく開けてから「イ」に移行します。time, like, my, high, buy, life, light, sideなどに現れます。i_e（time）、igh（high）、y（my）、ie（tie）など多くのスペルパターンがあります。',
  },
  {
    symbol: 'ɔɪ',
    displaySymbol: '/ɔɪ/',
    category: 'diphthong',
    subcategory: 'diphthong',
    movement: '後舌→狭',
    exampleWord: 'boy',
    elsaNotation: '/bɔɪ/',
    japaneseApprox: '「オイ」',
    description:
      '【出発点の口の構え】/ɔ/の口の形で始めます。唇をしっかり丸めて口を縦にやや大きく開けた「オ」の状態。舌の奥が中程度の高さにあります。【到達点の口の構え】そこから舌の前部を/ɪ/の位置に向かって持ち上げながら、唇の丸めをほどいて横に引いていきます。口は小さくなります。' +
      '\n\n' +
      '【動きのポイント】唇の形が「丸い（オ）」→「横に引く（イ）」と大きく変化する二重母音です。唇の丸めを解除して横に引く動きを意識しましょう。舌も後方低めから前方高めへ大きく移動します。' +
      '\n\n' +
      '【日本語との違い】日本語の「オイ」にかなり近く、日本語話者にとって比較的出しやすい二重母音です。出だしの「オ」の部分で唇をしっかり丸めることと、「イ」に向かう動きの中で唇の丸めを解除することを意識しましょう。boy, toy, oil, join, point, noise, choice, enjoyなどに現れます。oi（oil）、oy（boy）のスペルで表されます。',
  },
  {
    symbol: 'oʊ',
    displaySymbol: '/oʊ/',
    category: 'diphthong',
    subcategory: 'diphthong',
    movement: '後舌→狭',
    exampleWord: 'go',
    elsaNotation: '/goʊ/',
    japaneseApprox: '「オウ」',
    description:
      '【出発点の口の構え】中程度に丸めた唇で、/ɔ/よりやや狭い「オ」の状態から始めます。舌の奥は中程度の高さ。口はやや開いた状態。【到達点の口の構え】そこから唇をさらにすぼめて小さく丸め、舌の奥を/ʊ/の位置に向かって高く持ち上げます。口がさらに小さくなります。' +
      '\n\n' +
      '【動きのポイント】「軽い オ」→「すぼめた ウ」へ移行する二重母音です。口が「やや丸い→もっと丸くすぼめる」と変化します。後半の「ウ」への移行を省略して「オー」と一定に伸ばすと日本語的に聞こえてしまうので、唇をさらにすぼめる動きを意識しましょう。' +
      '\n\n' +
      '【日本語との違い】日本語では「オー」と一定の音で伸ばすことが多いですが、英語の/oʊ/は後半で唇がさらにすぼまり「ウ」に向かう変化があります。「オ→ウ」の口の変化を大げさにするくらいでちょうどよいです。go, home, no, old, show, phone, road, coatなどに現れます。o_e（home）、oa（road）、ow（show）などのスペルパターンがあります。',
  },
  {
    symbol: 'aʊ',
    displaySymbol: '/aʊ/',
    category: 'diphthong',
    subcategory: 'diphthong',
    movement: '広→後舌狭',
    exampleWord: 'now',
    elsaNotation: '/naʊ/',
    japaneseApprox: '「アウ」',
    description:
      '【出発点の口の構え】口を大きく開け、舌を低い位置に置きます。/ɑ/に近い大きな「ア」の状態で、唇は丸めず自然に開いています。顎は大きく下がっています。【到達点の口の構え】そこから唇を丸めてすぼめ、舌の奥を/ʊ/の位置に向かって高く持ち上げます。口が「大きく開いた状態」→「小さく丸めた状態」へ劇的に変化します。' +
      '\n\n' +
      '【動きのポイント】口の形が最も大きく変化する二重母音の一つです。「大きく開いた ア」→「丸くすぼめた ウ」への移行で、顎の高さも唇の形も大幅に変わります。この大きな口の動きを省略すると英語らしく聞こえません。' +
      '\n\n' +
      '【日本語との違い】日本語の「アウ」に近い音ですが、英語ではより口の変化を大げさに行います。出だしの「ア」で十分に口を大きく開け、後半で唇をしっかり丸めてすぼめる動きをダイナミックに行いましょう。now, house, out, how, about, down, found, mouthなどに現れます。ou（out）、ow（now）のスペルで表されます。',
  },

  // === R-colored Vowels (7) ===
  {
    symbol: 'ɝ',
    displaySymbol: '/ɝ/',
    category: 'r-colored',
    subcategory: 'r-colored-vowel',
    exampleWord: 'bird',
    elsaNotation: '/bɝd/',
    japaneseApprox: '「アー」＋舌巻き（強勢）',
    description:
      '【舌】強勢のあるR音化母音で、アメリカ英語で最も特徴的な音の一つです。舌の中央部を持ち上げて盛り上げ、舌先は反らせて上方に向けるか（retroflexタイプ）、または舌先は下のまま舌の奥を引いて舌全体を「太く」する（bunchedタイプ）かのどちらかで発音します。どちらの場合も舌先は口の中のどこにも触れません。【唇】やや丸めて軽く突き出します。【歯】関与しません。【顎】中程度に開いた状態。' +
      '\n\n' +
      '【日本語との違い】日本語にはR音化母音がないため、最も習得が難しい母音の一つです。「ウ」と「ア」の中間のような暗い音に、舌のこもりが加わった独特の響きです。' +
      '\n\n' +
      '【練習のコツ】「アー」と言いながら舌先を徐々に反り上げていき、こもった響きに変わるポイントを見つけましょう。うがいの前に舌を奥に引く動作や、唸り声「ウー」の感覚もヒントになります。唇を軽く丸めることを忘れないでください。bird, first, nurse, word, learn, heard, earth, turnなどに現れます。ir, ur, er, ear, orなど多くのスペルパターンで表されます。',
  },
  {
    symbol: 'ər',
    displaySymbol: '/ər/',
    category: 'r-colored',
    subcategory: 'r-colored-vowel',
    exampleWord: 'butter',
    elsaNotation: '/bʌtər/',
    japaneseApprox: '「ア」＋舌巻き（弱勢）',
    description:
      '【舌】/ɝ/と舌の形は同じ（舌を反らせるか中央を盛り上げる）ですが、強勢がないためより弱く短く発音します。舌先の反り具合もやや控えめです。力を抜いた曖昧な「ア」に軽くR音の舌の構えを添えるだけで十分です。【唇】わずかに丸める程度。/ɝ/ほど強くは丸めません。【歯】関与しません。【顎】リラックスしてやや開いた状態。' +
      '\n\n' +
      '【出現パターン】英語で最も多く出現する音の一つで、語末の-er（butter, water, teacher）、-or（doctor, factor）、-ar（sugar, dollar）、-ure（nature, picture）など、非常に多くの単語に現れます。/ə/（シュワー）にR音が加わった音と理解できます。' +
      '\n\n' +
      '【/ɝ/との違い】/ɝ/は強勢があり（bird, first）、はっきり力強く発音します。/ər/は強勢がなく（butter, water）、弱く短い音です。母音の音質は似ていますが、強さと長さが異なります。butter, water, teacher, doctor, sugar, nature, better, neverなどに現れます。',
  },
  {
    symbol: 'ɑr',
    displaySymbol: '/ɑr/',
    category: 'r-colored',
    subcategory: 'r-colored-vowel',
    exampleWord: 'car',
    elsaNotation: '/kɑr/',
    japaneseApprox: '「アー」＋舌巻き',
    description:
      '【舌】まず/ɑ/の位置（舌を低く平らにして口を大きく開ける）から始め、そのままR音の舌の構え（舌先を反らせるか舌の中央を盛り上げる）に移行します。2段階の動きがあります。【唇】/ɑ/の部分では丸めず大きく開け、R音の部分ではやや丸めに移行します。【歯】関与しません。【顎】/ɑ/では大きく開き、R音に向かってやや閉じます。' +
      '\n\n' +
      '【動きのポイント】/ɑ/（大きな「ア」）→R音（舌巻き）の2段階を意識しましょう。まず口を大きく開けて「アー」と言い、そのまま舌先を反らせてR音を添えます。最初の「ア」の開きを十分に大きくすることが重要です。' +
      '\n\n' +
      '【日本語との違い】日本語の「アール」から「ル」を取った響きに近いですが、英語のR音化はもっと舌のこもりが強いです。car, star, far, park, dark, heart, arm, garden, start, marchなどに現れます。arのスペルで表されることが多いです。',
  },
  {
    symbol: 'ɔr',
    displaySymbol: '/ɔr/',
    category: 'r-colored',
    subcategory: 'r-colored-vowel',
    exampleWord: 'door',
    elsaNotation: '/dɔr/',
    japaneseApprox: '「オー」＋舌巻き',
    description:
      '【舌】/ɔ/の位置（舌の奥を中程度の高さに）から始め、R音の構え（舌先を反らせるか舌中央を盛り上げる）に移行します。【唇】/ɔ/の丸めた唇を維持しながらR音を出します。唇の丸めとR音の舌巻きを同時に行う必要があります。【歯】関与しません。【顎】/ɔ/でやや大きく開き、R音に向かってやや閉じます。' +
      '\n\n' +
      '【動きのポイント】唇を丸めた「オー」を出しながら舌先を反らせます。唇を丸めることとR音の舌の構えを同時に維持する必要がある点がやや難しいポイントです。' +
      '\n\n' +
      '【日本語との違い】日本語の「オール」から「ル」を取った音に近いですが、舌のこもりがより強いです。door, more, four, core, born, sport, horse, floor, store, forceなどに現れます。or, ore, our, oarなどのスペルで表されます。/ɑr/との区別では、/ɑr/は口を大きく開けた「ア」+R、/ɔr/は唇を丸めた「オ」+Rです。',
  },
  {
    symbol: 'ɪr',
    displaySymbol: '/ɪr/',
    category: 'r-colored',
    subcategory: 'r-colored-vowel',
    exampleWord: 'here',
    elsaNotation: '/hɪr/',
    japaneseApprox: '「イア」＋舌巻き',
    description:
      '【舌】/ɪ/の位置（舌の前部をやや高めに）から始め、R音の構えに移行します。舌が前方高めの位置から中央の盛り上がった位置へ移動するため、舌の大きな動きを伴います。【唇】/ɪ/ではやや横に引いた状態から、R音では軽く丸めの方向に変化します。【歯】関与しません。【顎】/ɪ/ではやや閉じた状態から、R音に向かってやや開きます。' +
      '\n\n' +
      '【動きのポイント】短い「イ」→R音（舌巻き）の2段階です。「イ」を出してから舌先を反らせてR音に移ります。実際の音は「イァ」のような響きで、「イ」から「ア」に向かいつつR音のこもりが加わります。' +
      '\n\n' +
      '【日本語との違い】日本語の「イア」を素早く言った音に近いですが、R音のこもりが加わります。here, near, ear, beer, fear, clear, appear, ideaなどに現れます。eer（beer）、ear（hear）、ere（here）などのスペルパターンがあります。/ɛr/（there, care）との違いに注意しましょう。',
  },
  {
    symbol: 'ɛr',
    displaySymbol: '/ɛr/',
    category: 'r-colored',
    subcategory: 'r-colored-vowel',
    exampleWord: 'there',
    elsaNotation: '/ðɛr/',
    japaneseApprox: '「エア」＋舌巻き',
    description:
      '【舌】/ɛ/の位置（舌の前部を中程度の高さに）から始め、R音の構えに移行します。/ɛ/は/ɪ/より舌が低いため、/ɪr/より出発点の口の開きが大きいです。【唇】自然に開いた状態からR音で軽く丸めの方向へ。【歯】関与しません。【顎】/ɛ/でやや開いた状態で始まり、R音に向かってやや動きます。' +
      '\n\n' +
      '【動きのポイント】「エ」→R音（舌巻き）の2段階です。「エ」の口の開きを保ちながらR音を添えます。「エァ」のような響きで、「エ」の音色が含まれていることが/ɪr/（「イァ」のような響き）との区別のポイントです。' +
      '\n\n' +
      '【/ɪr/との区別】/ɪr/（here, beer）は出発点が「イ」で口の開きが小さい。/ɛr/（there, care）は出発点が「エ」で口の開きがやや大きい。beer(/ɪr/)とbear(/ɛr/)、here(/ɪr/)とhair(/ɛr/)を比べて練習しましょう。there, care, air, bear, where, fair, share, pairなどに現れます。are（care）、air（fair）、ear（bear）、ere（there）などのスペルパターンがあります。',
  },
  {
    symbol: 'ʊr',
    displaySymbol: '/ʊr/',
    category: 'r-colored',
    subcategory: 'r-colored-vowel',
    exampleWord: 'sure',
    elsaNotation: '/ʃʊr/',
    japaneseApprox: '「ウア」＋舌巻き',
    description:
      '【舌】/ʊ/の位置（舌の奥をやや高めに）から始め、R音の構えに移行します。唇の丸めを保ちながらR音を出す必要があります。【唇】/ʊ/で軽く丸めた状態からR音でやや変化しますが、全体的に丸めた唇を維持します。【歯】関与しません。【顎】やや開いた状態。' +
      '\n\n' +
      '【動きのポイント】短い「ウ」→R音（舌巻き）の2段階です。「ウ」を出してから舌先を反らせてR音に移ります。「ウァ」のような響きで、唇の丸みを維持しながらR音のこもりが加わります。' +
      '\n\n' +
      '【現代英語での変化】現代アメリカ英語では/ʊr/が/ɔr/に統合される傾向が強く、sureを/ʃɔr/（「ショー」＋R）のように発音する話者が増えています。tourも/tʊr/と/tɔr/の両方が使われます。ただしpoor, tour, sureなどでは/ʊr/を維持する話者もいます。sure, tour, poor, pure, cure, during, furious, matureなどに現れます。ure（sure）、oor（poor）、our（tour）などのスペルパターンがあります。',
  },
]

export const ALL_PHONEMES: readonly Phoneme[] = Object.freeze(phonemes.map((p) => Object.freeze(p)))
