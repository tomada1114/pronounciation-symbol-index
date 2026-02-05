import type { Phoneme } from './types'

function deepFreeze<T extends object>(obj: T): Readonly<T> {
  for (const value of Object.values(obj)) {
    if (value !== null && typeof value === 'object' && !Object.isFrozen(value)) {
      deepFreeze(value)
    }
  }
  return Object.freeze(obj)
}

const phonemes: Phoneme[] = [
  // === Consonants (24) ===
  // Plosives (6)
  {
    symbol: 'p',
    displaySymbol: '/p/',
    category: 'consonant',
    subcategory: 'plosive',
    articulation: {
      lips: {
        shape: 'closed',
        description: '上下の唇をしっかり閉じて密閉する',
      },
      tongue: {
        region: 'neutral',
        target: 'none',
        description:
          '舌は特定の位置を取りません。後続の母音の発音に備えて、口の中でリラックスした状態で待機します。',
      },
      voicing: '無声',
      articulationPoint: '両唇',
    },
    exampleWord: 'pat',
    elsaNotation: '/pæt/',
    japaneseApprox: 'パ行',
    pronunciationGuide: {
      mechanism:
        '歯は直接関与しません。顎は唇を閉じた状態から、破裂と同時に自然に開きます。語頭では強い帯気音（aspiration）を伴います。手のひらを口の前5cmほどに置いて発音し、はっきりと息が当たれば正しい強さです。ティッシュを口の前に垂らし、パッとなびかせる練習も効果的です。',
      comparison:
        '日本語の「パ」よりも強く唇を密閉し、語頭では強い帯気を出します。日本語の「パ」では帯気がほとんどありませんが、英語の語頭では必ず強い息を出します。特定の子音の直後では帯気音がなくなり日本語の「パ」に近くなります。語末では唇を閉じるだけで破裂させない「未開放」の音になることも多いです。',
    },
  },
  {
    symbol: 'b',
    displaySymbol: '/b/',
    category: 'consonant',
    subcategory: 'plosive',
    articulation: {
      lips: {
        shape: 'closed',
        description: '上下の唇をしっかり閉じる',
      },
      tongue: {
        region: 'neutral',
        target: 'none',
        description:
          '舌は特定の位置を取りません。後続の母音の発音に備えて、口の中でリラックスした状態で待機します。',
      },
      voicing: '有声',
      articulationPoint: '両唇',
    },
    exampleWord: 'bat',
    elsaNotation: '/bæt/',
    japaneseApprox: 'バ行',
    pronunciationGuide: {
      mechanism:
        '歯は直接関与しません。顎は閉じた状態から自然に開きます。有声音なので、唇を閉じた状態で声帯を振動させてから開放します。喉に手を当てて発音すると、唇を閉じている段階からすでに喉の振動を感じるはずです。',
      comparison:
        '日本語の「バ」に近いですが、英語では唇の閉鎖がより強く、声帯の振動がより明確です。語末では唇を閉じたまま軽く声帯を振動させるだけで、破裂が弱くなります。語末で余計な母音「ウ」を入れないように注意しましょう。',
    },
  },
  {
    symbol: 't',
    displaySymbol: '/t/',
    category: 'consonant',
    subcategory: 'plosive',
    articulation: {
      lips: {
        shape: 'neutral',
        description: '特定の形は取らず後続の母音に応じて変わる',
      },
      tongue: {
        region: 'tip',
        target: 'alveolar',
        description:
          '舌先の裏側を上の歯茎（上前歯のすぐ後ろの出っ張り部分）にしっかり当てて、空気の流れを完全に止めます。舌先は歯には触れず、歯茎のやや後ろに位置します。',
      },
      voicing: '無声',
      articulationPoint: '歯茎',
    },
    exampleWord: 'top',
    elsaNotation: '/tɑp/',
    japaneseApprox: 'タ行',
    pronunciationGuide: {
      mechanism:
        '上の前歯の裏側のすぐ上に舌先が位置しますが、歯自体には触れません。舌先の「裏側」が歯茎に密着するイメージです。語頭では強い帯気音を伴い、舌先を歯茎から離す瞬間に強い息が出ます。特定の子音の直後では帯気が消えます。',
      comparison:
        '日本語の「タ」では舌先が上の前歯の裏あたりに触れますが、英語ではそれよりやや後ろの歯茎に当てます。アメリカ英語では母音に挟まれた位置で「フラップ」に変化し、日本語の「ラ行」に近い音になることがあります。語末では舌先を歯茎に当てるだけで破裂させない場合や、声門閉鎖（喉を詰める音）が入ることもあります。',
    },
  },
  {
    symbol: 'd',
    displaySymbol: '/d/',
    category: 'consonant',
    subcategory: 'plosive',
    articulation: {
      lips: {
        shape: 'neutral',
        description: '特定の形は取らない',
      },
      tongue: {
        region: 'tip',
        target: 'alveolar',
        description:
          '舌先の裏側を上の歯茎（上前歯のすぐ後ろの出っ張り部分）にしっかり当てて、空気の流れを完全に止めます。/t/と同じ舌の位置ですが、声帯を振動させながら発音します。',
      },
      voicing: '有声',
      articulationPoint: '歯茎',
    },
    exampleWord: 'dog',
    elsaNotation: '/dɑg/',
    japaneseApprox: 'ダ行',
    pronunciationGuide: {
      mechanism:
        '歯には直接触れませんが、舌先は上の前歯のすぐ上に位置します。有声音なので、舌先を歯茎に当てた状態で声帯を振動させます。喉に手を当てて振動を確認しながら練習しましょう。「タダタダタダ」と素早く繰り返すと、舌の位置は同じまま声帯のON/OFFだけが切り替わる感覚がつかめます。',
      comparison:
        '日本語の「ダ」では舌先が上の歯の裏に触れますが、英語では歯茎（もう少し上）に当てます。語末では声帯を軽く振動させて舌先を歯茎に当てるだけの弱い音になります。',
    },
  },
  {
    symbol: 'k',
    displaySymbol: '/k/',
    category: 'consonant',
    subcategory: 'plosive',
    articulation: {
      lips: {
        shape: 'neutral',
        description: '特定の形は取らない（後続の母音による）',
      },
      tongue: {
        region: 'back',
        target: 'velar',
        description:
          '舌の後ろ側（奥の部分）を軟口蓋（口の天井の柔らかい奥の部分）に押し当てて、空気の流れを完全に止めます。舌先は下の前歯の裏あたりに自然に置いたままです。',
      },
      voicing: '無声',
      articulationPoint: '軟口蓋',
    },
    exampleWord: 'cat',
    elsaNotation: '/kæt/',
    japaneseApprox: 'カ行',
    pronunciationGuide: {
      mechanism:
        '舌先は下の歯の裏あたりに自然に置いたまま、口の一番奥で閉鎖を作ります。歯は関与しません。語頭では強い帯気音を伴い、口の奥から勢いよく空気が出ます。特定の子音の直後では帯気が消えます。',
      comparison:
        '日本語の「カ」に比べて語頭の帯気はかなり強いため、意識して息を多めに出しましょう。手のひらを口の前に置いて帯気の強さを確認する練習が効果的です。語末では舌の奥を軟口蓋に当てるだけで開放しないことも多いです。',
    },
  },
  {
    symbol: 'g',
    displaySymbol: '/g/',
    category: 'consonant',
    subcategory: 'plosive',
    articulation: {
      lips: {
        shape: 'neutral',
        description: '特定の形は取らない',
      },
      tongue: {
        region: 'back',
        target: 'velar',
        description:
          '舌の後ろ側（奥の部分）を軟口蓋（口の天井の柔らかい奥の部分）に押し当てて、空気の流れを完全に止めます。/k/と同じ舌の位置ですが、声帯を振動させながら発音します。',
      },
      voicing: '有声',
      articulationPoint: '軟口蓋',
    },
    exampleWord: 'go',
    elsaNotation: '/goʊ/',
    japaneseApprox: 'ガ行',
    pronunciationGuide: {
      mechanism:
        '舌先は下の歯の裏あたりに自然に置きます。歯は関与しません。有声音なので、舌の奥で閉鎖を作った状態で声帯を振動させてから開放します。喉に手を当てて振動を確認しながら、口の奥で「パンッ」と破裂させる感覚で発音してください。',
      comparison:
        '日本語には語頭の「ガ」（破裂音）と語中の「ガ」（鼻濁音になることがある）の二種類がありますが、英語では常にしっかりとした破裂音で、鼻には抜けません。語末では声帯の振動と破裂が弱くなります。語末で「グ」の「ウ」を入れないよう注意しましょう。',
    },
  },

  // Fricatives (9)
  {
    symbol: 'f',
    displaySymbol: '/f/',
    category: 'consonant',
    subcategory: 'fricative',
    articulation: {
      lips: {
        shape: 'labiodental',
        description: '上の前歯の先端を下唇の内側に軽く当てる',
      },
      tongue: {
        region: 'neutral',
        target: 'none',
        description:
          '舌は特定の位置を取りません。この音は唇と歯で作るため、舌は口の中で自然にリラックスした状態で待機します。',
      },
      voicing: '無声',
      articulationPoint: '唇歯',
    },
    exampleWord: 'fan',
    elsaNotation: '/fæn/',
    japaneseApprox: 'ファ行',
    pronunciationGuide: {
      mechanism:
        '噛むのではなく、歯を唇に「乗せる」感覚です。この隙間から細く息を出して摩擦音を作ります。鏡で確認して、上の前歯が下唇に触れているのを確認しましょう。顎はわずかに開いた状態です。',
      comparison:
        '日本語にはこの音がありません。日本語の「フ」は両唇の隙間から息を出す音で、歯は関与しません。英語では必ず「歯＋唇」で作ります。最初は下唇を軽く噛むくらいの大げさな動作で練習し、慣れたら歯を軽く乗せるだけに軽くしていきましょう。「フーッ」と息を吐きながら、途中で上の歯を下唇に当てると自然にこの音が出ます。',
    },
  },
  {
    symbol: 'v',
    displaySymbol: '/v/',
    category: 'consonant',
    subcategory: 'fricative',
    articulation: {
      lips: {
        shape: 'labiodental',
        description: '上の前歯を下唇の内側に軽く当てる',
      },
      tongue: {
        region: 'neutral',
        target: 'none',
        description:
          '舌は特定の位置を取りません。この音は唇と歯で作るため、舌は口の中で自然にリラックスした状態で待機します。',
      },
      voicing: '有声',
      articulationPoint: '唇歯',
    },
    exampleWord: 'van',
    elsaNotation: '/væn/',
    japaneseApprox: 'ヴァ行',
    pronunciationGuide: {
      mechanism:
        '歯と唇の隙間から声帯を振動させた空気を出す有声摩擦音です。顎はわずかに開いた状態。唇を完全に閉じてはいけません。必ず上の歯が下唇に触れている状態を維持しましょう。',
      comparison:
        '日本語にはこの音がなく、「ブ」で代用しがちです。しかし「ブ」は両唇を閉じて破裂させる音で、この音は歯と唇の摩擦音です。まず無声で「フー」と息を細く出す練習をし、その口の形のまま声を出してください。下唇がビリビリ振動する感覚があれば正しく出せています。',
    },
  },
  {
    symbol: 'θ',
    displaySymbol: '/θ/',
    category: 'consonant',
    subcategory: 'fricative',
    articulation: {
      lips: {
        shape: 'neutral',
        description: '自然に開いた状態で力を入れない',
      },
      tongue: {
        region: 'tip',
        target: 'interdental',
        description:
          '舌先を上下の前歯の間からわずかに出し（2〜3mm程度）、上の前歯の先端に軽く当てます。舌と前歯の間のわずかな隙間から息を漏らして摩擦音を作ります。鏡で見ると舌先が歯の間から少し見えるはずです。',
      },
      voicing: '無声',
      articulationPoint: '歯',
    },
    exampleWord: 'think',
    elsaNotation: '/θɪŋk/',
    japaneseApprox: 'サ行に近い（舌先を歯に）',
    pronunciationGuide: {
      mechanism:
        '舌を歯で挟むのではなく、舌先を前歯の先端に「当てる」感覚です。この狭い隙間から息を漏らして無声の摩擦音を出します。顎はわずかに開いた状態。鏡で自分の口を見て、舌先が前歯の間からわずかに出ているか確認してください。',
      comparison:
        '日本語にはこの音がないため、「サ行」で代用されがちです。しかし「サ」の音は舌先が口の中にあり前歯から出ていません。この音は舌先が前歯の間から見えている点が大きく異なります。最初は大げさに舌を歯の間から出して練習し、徐々に控えめにしていきましょう。',
    },
  },
  {
    symbol: 'ð',
    displaySymbol: '/ð/',
    category: 'consonant',
    subcategory: 'fricative',
    articulation: {
      lips: {
        shape: 'neutral',
        description: '自然に開いた状態',
      },
      tongue: {
        region: 'tip',
        target: 'interdental',
        description:
          '舌先を上下の前歯の間からわずかに出し、上の前歯の先端に軽く当てます。/θ/と同じ舌の位置ですが、声帯を振動させながら発音します。舌先が前歯の間でビリビリ振動する感覚があれば正しく出せています。',
      },
      voicing: '有声',
      articulationPoint: '歯',
    },
    exampleWord: 'this',
    elsaNotation: '/ðɪs/',
    japaneseApprox: 'ザ行に近い（舌先を歯に）',
    pronunciationGuide: {
      mechanism:
        '無声の歯間摩擦音と同じ舌と歯の位置で、声帯を振動させます。舌先が前歯の間でビリビリ振動する感覚があれば正しく出せています。顎はわずかに開いた状態。',
      comparison:
        '日本語では「ザ行」で代用されがちですが、「ザ」の音は舌先が歯茎付近にあり、この音は舌先が前歯の間に出ている点が異なります。超頻出の機能語に含まれるため、日常会話で非常に重要な音です。まず無声の歯間摩擦音を確実に出せるようになってから、そこに声を加えて練習するのが効率的です。',
    },
  },
  {
    symbol: 's',
    displaySymbol: '/s/',
    category: 'consonant',
    subcategory: 'fricative',
    articulation: {
      lips: {
        shape: 'neutral',
        description: '自然に開いた状態で後続の母音に応じて変わる',
      },
      tongue: {
        region: 'tip',
        target: 'alveolar',
        description:
          '舌先を上の歯茎に非常に近づけますが、触れさせません。この狭い隙間に息を通して鋭い摩擦音を作ります。舌の両側は上の奥歯に触れて空気を中央に集中させ、舌の中央に浅い溝を作ります。',
      },
      voicing: '無声',
      articulationPoint: '歯茎',
    },
    exampleWord: 'sun',
    elsaNotation: '/sʌn/',
    japaneseApprox: 'サ行',
    pronunciationGuide: {
      mechanism:
        '舌先と歯茎の間にごく狭い隙間を作り、そこに息を通して鋭い摩擦音を出します。舌の両側は上の奥歯に触れて空気が横に逃げないようにし、息を舌の中央の溝に集中させます。上下の前歯はほぼ噛み合わせに近い位置で、歯の隙間から鋭い息が出ます。',
      comparison:
        '日本語の「サ行」の子音にかなり近い音です。ただし英語ではより鋭く、息の圧力が強い傾向があります。蛇の「シーッ」という擬音や、風船から空気が漏れる「スー」というイメージの、息だけで作る鋭い音です。舌先が口の中にあり前歯から出ない点が歯間摩擦音との違いです。',
    },
  },
  {
    symbol: 'z',
    displaySymbol: '/z/',
    category: 'consonant',
    subcategory: 'fricative',
    articulation: {
      lips: {
        shape: 'neutral',
        description: '自然な状態',
      },
      tongue: {
        region: 'tip',
        target: 'alveolar',
        description:
          '舌先を上の歯茎に非常に近づけますが、触れさせません。/s/と同じ舌の位置で、狭い隙間から声帯を振動させた息を出して有声摩擦音を作ります。舌の両側は上の奥歯に触れて空気を中央に集中させます。',
      },
      voicing: '有声',
      articulationPoint: '歯茎',
    },
    exampleWord: 'zoo',
    elsaNotation: '/zu/',
    japaneseApprox: 'ザ行',
    pronunciationGuide: {
      mechanism:
        '舌先と歯茎の隙間から声帯を振動させた息を出して有声摩擦音を作ります。舌の両側は上の奥歯に触れて空気を中央に集中させます。上下の前歯はほぼ噛み合った位置。',
      comparison:
        '日本語の「ザ行」の子音に近い音です。ミツバチの羽音「ブーン」のような、振動を含んだ持続音をイメージしてください。日本語の「ズ」は破裂要素が入ることがありますが、英語では純粋な摩擦音を持続させます。まず無声で「スー」と持続音を出し、途中で声帯を振動させて「ズー」に変える練習が効果的です。',
    },
  },
  {
    symbol: 'ʃ',
    displaySymbol: '/ʃ/',
    category: 'consonant',
    subcategory: 'fricative',
    articulation: {
      lips: {
        shape: 'rounded',
        description: '軽く前に突き出して丸める',
      },
      tongue: {
        region: 'blade',
        target: 'post-alveolar',
        description:
          '舌の前方部分（舌先のやや後ろ）を後部歯茎（歯茎と硬口蓋の境目あたり）に近づけます。舌先は歯茎にほぼ触れない程度の位置で、舌の中央にやや広い溝を作って空気を通します。/s/より舌の位置が後ろで、音がこもった感じになります。',
      },
      voicing: '無声',
      articulationPoint: '後部歯茎',
    },
    exampleWord: 'she',
    elsaNotation: '/ʃi/',
    japaneseApprox: 'シャ行',
    pronunciationGuide: {
      mechanism:
        '舌先は歯茎にほぼ触れない程度に近づけます。唇を丸めることでこもった柔らかい音質になります。歯は直接関与しませんが、上下の歯の間はやや開いています。',
      comparison:
        '日本語の「シ」の子音に近い音です。人に「静かに！」と言うときの「シーッ」がほぼこの音そのものです。日本語の「シ」と同じ要領で発音できますが、英語では唇の丸めをより意識しましょう。',
    },
  },
  {
    symbol: 'ʒ',
    displaySymbol: '/ʒ/',
    category: 'consonant',
    subcategory: 'fricative',
    articulation: {
      lips: {
        shape: 'rounded',
        description: '軽く丸めて突き出す',
      },
      tongue: {
        region: 'blade',
        target: 'post-alveolar',
        description:
          '舌の前方部分（舌先のやや後ろ）を後部歯茎に近づけます。/ʃ/と同じ舌の位置で、声帯を振動させながら摩擦音を作ります。純粋な摩擦音なので、舌を上あごに当てて離す動作はありません。',
      },
      voicing: '有声',
      articulationPoint: '後部歯茎',
    },
    exampleWord: 'measure',
    elsaNotation: '/mɛʒər/',
    japaneseApprox: 'ジャ行に近い',
    pronunciationGuide: {
      mechanism:
        '純粋な摩擦音で、舌を上あごに当てて離す破裂の動作はなく、隙間から声を含んだ息を流し続けます。歯は直接関与しません。英語の中でも比較的出現頻度が低い音で、語頭にはほとんど現れません。',
      comparison:
        '日本語の「ジ」の子音にやや近いですが、日本語の「ジ」は破擦音（閉鎖＋摩擦）であるのに対し、この音は純粋な摩擦音です。無声の後部歯茎摩擦音を確実に出せるようになったら、そこに声を足すだけでこの音になります。',
    },
  },
  {
    symbol: 'h',
    displaySymbol: '/h/',
    category: 'consonant',
    subcategory: 'fricative',
    articulation: {
      lips: {
        shape: 'neutral',
        description: '後続の母音に応じて変わる',
      },
      tongue: {
        region: 'neutral',
        target: 'none',
        description:
          '舌は特定の位置を取りません。この音は喉の奥（声門）で作るため、舌は後続の母音の位置に備えて準備します。舌の形は次に来る母音によって変わります。',
      },
      voicing: '無声',
      articulationPoint: '声門',
    },
    exampleWord: 'hat',
    elsaNotation: '/hæt/',
    japaneseApprox: 'ハ行',
    pronunciationGuide: {
      mechanism:
        '声門（喉の奥にある声帯の隙間）を軽く狭め、そこを通る息で摩擦音を作ります。口の中の特定の位置で閉鎖や狭めを作る他の子音とは異なり、喉の奥だけで作る音です。歯は関与しません。語頭にのみ現れ、語末には現れません。弱形ではしばしば脱落します。',
      comparison:
        '日本語の「ハ行」の子音にとても近く、日本語話者にとって出しやすい音です。寒い日に手を温めようとする「ハーッ」という息そのものです。日本語の「ヒ」は硬口蓋摩擦音、「フ」は両唇摩擦音ですが、英語では常に声門摩擦音です。',
    },
  },

  // Affricates (2)
  {
    symbol: 'tʃ',
    displaySymbol: '/tʃ/',
    category: 'consonant',
    subcategory: 'affricate',
    articulation: {
      lips: {
        shape: 'rounded',
        description: '唇を軽く丸めて突き出す',
      },
      tongue: {
        region: 'blade',
        target: 'post-alveolar',
        description:
          '舌先から前方部分を後部歯茎に広く当てて、空気を完全に止めます。その後、ゆっくりと舌を離して/ʃ/の摩擦音に移行します。この「止める→摩擦」の2段階が一つの音として融合した破擦音です。',
      },
      voicing: '無声',
      articulationPoint: '後部歯茎',
    },
    exampleWord: 'church',
    elsaNotation: '/tʃɝtʃ/',
    japaneseApprox: 'チャ行',
    pronunciationGuide: {
      mechanism:
        '破裂と摩擦が連続して起こる破擦音です。まず舌で空気を完全に遮断し、次にゆっくりと離して摩擦を出します。この2段階が一つの音として融合しています。歯は直接関与しませんが、歯の隙間から摩擦音が出ます。最初に舌で空気を止めてから摩擦を出す「タメ」があるのが特徴です。',
      comparison:
        '日本語の「チャ行」に非常に近い音で、比較的出しやすい音です。ただし英語では閉鎖から摩擦への移行がやや遅く、日本語の「チ」より息の量が多い傾向があります。「チッ」と鋭く言うときの子音がほぼこの音です。',
    },
  },
  {
    symbol: 'dʒ',
    displaySymbol: '/dʒ/',
    category: 'consonant',
    subcategory: 'affricate',
    articulation: {
      lips: {
        shape: 'rounded',
        description: '軽く丸めて突き出す',
      },
      tongue: {
        region: 'blade',
        target: 'post-alveolar',
        description:
          '舌の前方部分を後部歯茎に当てて、空気を完全に止めます。/tʃ/と同じ舌の位置で、声帯を振動させながら「止める→摩擦」の動作を行います。全体を通して声帯の振動を維持する有声破擦音です。',
      },
      voicing: '有声',
      articulationPoint: '後部歯茎',
    },
    exampleWord: 'judge',
    elsaNotation: '/dʒʌdʒ/',
    japaneseApprox: 'ジャ行',
    pronunciationGuide: {
      mechanism:
        '有声の破擦音で、全体を通して声帯を振動させながら破裂と摩擦を行います。歯は直接関与しません。最初に舌で空気を止めてから摩擦を出す「タメ」があり、力強い印象の音です。',
      comparison:
        '日本語の「ジャ行」にかなり近い音です。日本語の「ジ」は「ヂ」とも書かれるように破擦音の要素があり、この英語の音に近い音です。舌先を上あごに当て、声を出しながら離す要領で発音します。',
    },
  },

  // Nasals (3)
  {
    symbol: 'm',
    displaySymbol: '/m/',
    category: 'consonant',
    subcategory: 'nasal',
    articulation: {
      lips: {
        shape: 'closed',
        description: '上下の唇をしっかり閉じる',
      },
      tongue: {
        region: 'neutral',
        target: 'none',
        description:
          '舌は特定の位置を取りません。この音は唇を閉じて作る鼻音なので、舌は口の中でリラックスした状態です。声は鼻から出ます。',
      },
      voicing: '有声',
      articulationPoint: '両唇',
    },
    exampleWord: 'man',
    elsaNotation: '/mæn/',
    japaneseApprox: 'マ行',
    pronunciationGuide: {
      mechanism:
        '口からの空気は完全に止め、代わりに鼻腔を通して声を響かせます。軟口蓋（上あごの奥の柔らかい部分）が下がって鼻腔への通路を開いています。歯は関与しません。ハミングの「ンー」がまさにこの音の持続音です。',
      comparison:
        '日本語の「マ行」とほぼ同じで、日本語話者にとって最も簡単な英語子音の一つです。唇を閉じたまま「ンー」と鼻に声を響かせ、そこから唇を開けると母音につながります。語末では唇を閉じたまま鼻に声を通して終わります。「ム」のように母音を加えないよう注意しましょう。鼻に手を当てると振動を感じるはずです。',
    },
  },
  {
    symbol: 'n',
    displaySymbol: '/n/',
    category: 'consonant',
    subcategory: 'nasal',
    articulation: {
      lips: {
        shape: 'neutral',
        description: '特定の形は取らない',
      },
      tongue: {
        region: 'tip',
        target: 'alveolar',
        description:
          '舌先を上の歯茎にしっかり当てて、口からの空気の流れを完全に遮断します。舌の両側も上の歯の内側に触れて口腔を完全に塞ぎ、声は鼻腔を通って出ます。舌先が触れるのは歯ではなく歯茎です。',
      },
      voicing: '有声',
      articulationPoint: '歯茎',
    },
    exampleWord: 'no',
    elsaNotation: '/noʊ/',
    japaneseApprox: 'ナ行',
    pronunciationGuide: {
      mechanism:
        '軟口蓋が下がって鼻腔が開き、声が鼻を通って出ます。舌の両側も上の歯の内側に触れて完全に口腔を塞ぎます。舌先が触れるのは歯ではなく歯茎（歯の少し上）です。',
      comparison:
        '日本語の「ナ行」の子音とほぼ同じです。ただし日本語の「ん」は後続の音によって舌の位置が変わりますが、英語のこの音は常に舌先を歯茎に固定します。語末では舌先を歯茎に当てたまま鼻に声を通して終わります。「ヌ」のように母音を加えないよう注意しましょう。鼻をつまんで発音できなくなれば正しく鼻音が出ている証拠です。',
    },
  },
  {
    symbol: 'ŋ',
    displaySymbol: '/ŋ/',
    category: 'consonant',
    subcategory: 'nasal',
    articulation: {
      lips: {
        shape: 'neutral',
        description: '特定の形は取らず軽く開いた状態',
      },
      tongue: {
        region: 'back',
        target: 'velar',
        description:
          '舌の後ろ側（奥の部分）を軟口蓋に当てて、口からの空気の流れを完全に遮断します。舌先は下の歯の裏あたりに自然に置いたままで、声は鼻腔を通って出ます。/k/や/g/と同じ接触点ですが、鼻音なので声が鼻に抜けます。',
      },
      voicing: '有声',
      articulationPoint: '軟口蓋',
    },
    exampleWord: 'sing',
    elsaNotation: '/sɪŋ/',
    japaneseApprox: '「ン」（カ行の前）',
    pronunciationGuide: {
      mechanism:
        '軟口蓋が下がって鼻腔への通路が開き、声が鼻を通って出る鼻音です。舌先は下の歯の裏あたりに自然に置きます。歯は関与しません。この音の後には必ずしも破裂が続かないことに注意してください。',
      comparison:
        '日本語の「案外」「りんご」の「ん」がこの音に近く、日本語話者は無意識に出せています。ただし日本語ではこの音は独立した音素ではなく「ん」の変異形ですが、英語では別の音素として区別されます。歯茎鼻音との違いは、舌の奥が軟口蓋に触れる点です。',
    },
  },

  // Liquids (2)
  {
    symbol: 'l',
    displaySymbol: '/l/',
    category: 'consonant',
    subcategory: 'liquid',
    articulation: {
      lips: {
        shape: 'neutral',
        description: '特定の形は取らず後続の母音に応じて変わる',
      },
      tongue: {
        region: 'tip',
        target: 'alveolar',
        description:
          '舌先を上の歯茎にしっかり当てて、その状態を維持したまま舌の側面から空気と声を流します。舌先は歯茎に「貼り付けた」まま離さないのが最大の特徴です。語末では舌の奥も持ち上がり、こもった暗い響きの「ダークL」になります。',
      },
    },
    exampleWord: 'let',
    elsaNotation: '/lɛt/',
    japaneseApprox: 'ラ行に近い（舌先を歯茎に）',
    pronunciationGuide: {
      mechanism:
        '側面音とも呼ばれ、舌先を歯茎に「貼り付けた」まま離さないのが最大の特徴です。舌先は歯ではなく歯茎に当たります。語頭や母音の前の「クリアL」では舌の前部がやや持ち上がった明るい響きになります。語末や子音の前の「ダークL」では舌の奥も持ち上がり、こもった暗い「ウ」のような響きが加わります。',
      comparison:
        '日本語の「ラ行」は舌先が歯茎を瞬間的に弾く音で、根本的に異なります。舌先を歯茎に「くっつけたまま」声を出す練習をしましょう。「ンラー」のように鼻音から始めると舌先を当てた状態を維持しやすいです。日本語のラ行のように舌先が弾いてすぐ離れる感覚を捨てることが重要です。',
    },
  },
  {
    symbol: 'r',
    displaySymbol: '/r/',
    category: 'consonant',
    subcategory: 'liquid',
    articulation: {
      lips: {
        shape: 'rounded',
        description: '軽く丸めて前に突き出す',
      },
      tongue: {
        region: 'center',
        target: 'none',
        description:
          '舌先は口の中のどこにも触れません。発音方法は2つあります。(1) 舌先をカールさせて上あごの方に向ける方法（retroflex）、(2) 舌先は下のままで舌全体を奥に引きながら中央部を盛り上げる方法（bunched）。どちらでも同じ音になります。',
      },
    },
    exampleWord: 'red',
    elsaNotation: '/rɛd/',
    japaneseApprox: 'ラ行に近い（舌を巻く）',
    pronunciationGuide: {
      mechanism:
        '発音方法は主に2つあります。舌先をカールさせて上あごの方に向ける方法（retroflex）と、舌先は下のままで舌全体を奥に引きながら中央部を持ち上げる方法（bunched）です。どちらでも同じ音になります。唇を丸めることが英語らしい音を出すための重要なポイントです。歯は関与しません。',
      comparison:
        '日本語の「ラ行」は舌先が歯茎を瞬間的に弾く音（はじき音）で、この音とは全く異なります。「ウー」の口の形（唇を丸める）で、舌先をどこにも触れさせずに上に向けたまま声を出すと近い音が出ます。犬が唸る「グルルルル」の音の舌の感覚もヒントになります。',
    },
  },

  // Glides (2)
  {
    symbol: 'w',
    displaySymbol: '/w/',
    category: 'consonant',
    subcategory: 'glide',
    articulation: {
      lips: {
        shape: 'rounded',
        description: '唇を強く丸めてすぼめ、小さな円形の開口を作る',
      },
      tongue: {
        region: 'back',
        target: 'velar',
        description:
          '舌の後ろ側（奥の部分）を軟口蓋に向かって持ち上げます。接近音なので舌は軟口蓋に近づくだけで触れません。この構えから素早く次の母音の位置へ移動する「動き」の音です。',
      },
      articulationPoint: '両唇軟口蓋',
    },
    exampleWord: 'we',
    elsaNotation: '/wi/',
    japaneseApprox: 'ワ行',
    pronunciationGuide: {
      mechanism:
        '口笛を吹く直前の唇の形に近いです。歯は関与せず、唇が歯を覆うくらい丸めてOKです。接近音（glide）と呼ばれ、この唇と舌の構えから素早く次の母音の位置へ移動する「動き」の音です。「ウ」の口をしっかり作ってから、一気に次の母音に移行します。',
      comparison:
        '日本語の「ワ」は唇の丸めが弱いため、英語ではもっと唇を「ぎゅっ」とすぼめる感覚を大げさにするとちょうどよいです。',
    },
  },
  {
    symbol: 'j',
    displaySymbol: '/j/',
    category: 'consonant',
    subcategory: 'glide',
    articulation: {
      lips: {
        shape: 'spread',
        description: '次の母音に応じて変わるが基本的には横に引き気味',
      },
      tongue: {
        region: 'front',
        target: 'palatal',
        description:
          '舌の前部を硬口蓋（口の天井の硬い部分）に近づけます。舌先は下の前歯の裏に自然に置いたままです。接近音なので舌は硬口蓋に近づくだけで触れません。「イ」の位置から素早く次の母音の位置へ移動する「動き」の音です。',
      },
      articulationPoint: '硬口蓋',
    },
    exampleWord: 'yes',
    elsaNotation: '/jɛs/',
    japaneseApprox: 'ヤ行',
    pronunciationGuide: {
      mechanism:
        '接近音（glide）で、「イ」の位置から素早く次の母音の位置へ舌と唇が移動する「動き」の音です。歯は関与しません。',
      comparison:
        '日本語の「ヤ行」の子音とほぼ同じで、日本語話者にとって最も出しやすい英語子音の一つです。「ヤ・ユ・ヨ」の最初の子音がほぼこの音です。',
    },
  },

  // === Monophthongs (11) ===
  // Front Vowels (4)
  {
    symbol: 'i',
    displaySymbol: '/i/',
    category: 'monophthong',
    subcategory: 'front-vowel',
    articulation: {
      lips: {
        shape: 'spread',
        description: '左右に横に引いて笑顔のような形にする',
      },
      tongue: {
        region: 'front',
        target: 'palatal',
        description:
          '舌の前部を硬口蓋（口の天井の硬い部分）に向かって最も高い位置に持ち上げます。英語母音の中で舌が最も高く、最も前にある音です。舌先は下の前歯の裏に軽く触れ、舌全体に力を入れた緊張した状態で発音します。',
      },
      openness: '狭（閉）',
    },
    exampleWord: 'feet',
    elsaNotation: '/fit/',
    japaneseApprox: '「イー」（長め）',
    pronunciationGuide: {
      mechanism:
        '英語の母音の中で舌の位置が最も高く、最も前方にある音です。舌先は下の前歯の裏に軽く触れます。舌に力を入れた緊張した状態（tense vowel）で発音します。上下の歯の間隔は非常に狭く、ほとんど閉じかけの状態です。顎もほとんど閉じています。',
      comparison:
        '日本語の「イー」を長く伸ばした音に近いですが、英語ではより舌の位置が高く、唇の引きが強く、筋肉の緊張がある音です。日本語の「イ」はよりリラックスしています。唇を横に引く力を意識して練習しましょう。',
    },
  },
  {
    symbol: 'ɪ',
    displaySymbol: '/ɪ/',
    category: 'monophthong',
    subcategory: 'front-vowel',
    articulation: {
      lips: {
        shape: 'spread',
        description: '横に引くが力は弱め、リラックスした状態',
      },
      tongue: {
        region: 'front',
        target: 'palatal',
        description:
          '舌の前部を硬口蓋に向かってやや高めの位置に置きます。/i/より低く、力を入れずに弛緩した状態（リラックス）で保ちます。舌先は下の前歯の裏あたりに自然に置きます。',
      },
      openness: '半狭',
    },
    exampleWord: 'sit',
    elsaNotation: '/sɪt/',
    japaneseApprox: '「イ」（短く弛緩）',
    pronunciationGuide: {
      mechanism:
        '筋肉の緊張がない弛緩した状態（lax vowel）で発音します。舌先は下の歯の裏あたり。歯の間はやや広く開いています。顎もやや開いた状態。',
      comparison:
        '日本語の「イ」に最も近い英語母音ですが、英語ではより「エ」寄りの弛緩した「イ」です。口の力を抜いて「イ」と「エ」の中間あたりの音を出すイメージです。日本語の「イ」をだらけさせた感覚に近いです。',
    },
  },
  {
    symbol: 'ɛ',
    displaySymbol: '/ɛ/',
    category: 'monophthong',
    subcategory: 'front-vowel',
    articulation: {
      lips: {
        shape: 'neutral',
        description: '自然に開いた状態、横にも丸めにもしない',
      },
      tongue: {
        region: 'front',
        target: 'palatal',
        description:
          '舌の前部を中程度の高さに置きます。/i/や/ɪ/より低い位置ですが、まだ前舌の領域です。舌先は下の前歯の裏に軽く触れた状態で、リラックスして発音します。',
      },
      openness: '半広',
    },
    exampleWord: 'bed',
    elsaNotation: '/bɛd/',
    japaneseApprox: '「エ」',
    pronunciationGuide: {
      mechanism:
        'リラックスした中間の唇の形で発音します。歯の間はやや広い程度に開いています。顎はやや開いた状態で、指1本分ほどの開きです。',
      comparison:
        '日本語の「エ」にかなり近い音で、日本語話者にとって出しやすい音です。日本語の「エ」よりやや口の開きが大きい傾向がありますが、ほぼそのままで通じます。',
    },
  },
  {
    symbol: 'æ',
    displaySymbol: '/æ/',
    category: 'monophthong',
    subcategory: 'front-vowel',
    articulation: {
      lips: {
        shape: 'spread',
        description: '横に広げる（「エ」の口の形のまま大きく開ける）',
      },
      tongue: {
        region: 'front',
        target: 'palatal',
        description:
          '舌の前部を低い位置に下げますが、前方の位置は保ちます。英語の前舌母音の中で最も舌が低い音です。舌先は下の前歯の裏に触れたままで、口を大きく開けつつ舌を前に押し出すような感覚です。',
      },
      openness: '広',
    },
    exampleWord: 'cat',
    elsaNotation: '/kæt/',
    japaneseApprox: '「ア」と「エ」の間',
    pronunciationGuide: {
      mechanism:
        '英語の前舌母音の中で最も舌が低い音です。上下の歯の間は指1〜2本分開きます。唇を横に引きつつ顎を下げるのがポイントです。',
      comparison:
        '日本語にはこの音がありません。「ア」と「エ」の中間の音で、「エ」の口の形（横に引く）を保ちながら「ア」くらい口を大きく開けます。笑顔を作って口を大きく開けた状態で「ア」と言うと近い音になります。「エ」と言いながら口をどんどん開けていくと途中でこの音になります。日本語話者は「エ」か「ア」のどちらかに寄りがちなので、必ず中間を狙いましょう。',
    },
  },

  // Central Vowels (3)
  {
    symbol: 'ə',
    displaySymbol: '/ə/',
    category: 'monophthong',
    subcategory: 'central-vowel',
    articulation: {
      lips: {
        shape: 'neutral',
        description: '力を入れず自然に半開きの状態。丸めも引きもしない',
      },
      tongue: {
        region: 'center',
        target: 'none',
        description:
          '舌は口の中央、中程度の高さのニュートラルな位置に置きます。前にも後ろにも偏らず、どの筋肉にも力を入れない、最もリラックスした状態です。何の準備もなく「声を出すだけ」の最も自然な位置です。',
      },
      openness: '中央（弱）',
    },
    exampleWord: 'about',
    elsaNotation: '/əbaʊt/',
    japaneseApprox: '曖昧な「ア」（弱く短い）',
    pronunciationGuide: {
      mechanism:
        '「シュワー（schwa）」と呼ばれ、英語で最も頻出する母音です。口のどの筋肉にも力を入れず、ただ「声を出す」だけの最も楽な母音です。驚いたときに出る短い「ア！」のような、何の準備もなく出る曖昧な母音がこの音です。歯はやや開いた自然な状態。顎はリラックスしてやや開いた状態。',
      comparison:
        '強勢のない音節に現れます。英語のリズムの中核で、強勢のない音節の母音は多くがこの音に変化します。力を入れないことが最大のコツです。',
    },
  },
  {
    symbol: 'ʌ',
    displaySymbol: '/ʌ/',
    category: 'monophthong',
    subcategory: 'central-vowel',
    articulation: {
      lips: {
        shape: 'neutral',
        description: '自然に開いた状態で丸めも引きもしない',
      },
      tongue: {
        region: 'center',
        target: 'none',
        description:
          '舌は口の中央からやや後方、中程度の高さに置きます。/ə/より位置が明確で、強勢のある音節で力強く発音します。舌先は下の前歯の裏あたりに自然に置きます。',
      },
      openness: '半広',
    },
    exampleWord: 'cup',
    elsaNotation: '/kʌp/',
    japaneseApprox: '「ア」（短く強め）',
    pronunciationGuide: {
      mechanism:
        '強勢のある音節に現れ、はっきり力強く発音します。歯はやや開いた状態。顎は自然に開いた状態。お腹から声を出す強い「ア」のイメージです。',
      comparison:
        '日本語の短い「ア」に近い音ですが、口の開きがやや小さく、「ア」と「オ」の中間的な響きがあります。日本語の「ア」ほど口を大きく開けず、少しこもった「ア」を強めに出すイメージです。',
    },
  },
  {
    symbol: 'ɝ',
    displaySymbol: '/ɝ/',
    category: 'monophthong',
    subcategory: 'central-vowel',
    articulation: {
      lips: {
        shape: 'rounded',
        description: 'やや丸めて軽く突き出す',
      },
      tongue: {
        region: 'center',
        target: 'none',
        description:
          '舌全体をやや後方に引き、中央部を盛り上げます。舌先はどこにも触れません。発音方法は2つあります。(1) 舌先を反らせて上方に向ける方法（retroflex）、(2) 舌先は下のままで舌全体を奥に引く方法（bunched）。どちらでも同じ音になります。',
      },
      openness: '中央（R音化・強勢）',
    },
    exampleWord: 'bird',
    elsaNotation: '/bɝd/',
    japaneseApprox: '「アー」＋舌巻き',
    pronunciationGuide: {
      mechanism:
        'アメリカ英語に特徴的なR音化母音です。舌先は反らせて上方に向ける方法（retroflex）と、下のまま舌全体を奥に引く方法（bunched）の2つがあります。唇の丸めがR音化の響きを強めます。歯は関与しません。顎はやや開いた程度。',
      comparison:
        '日本語にはない音で、アメリカ英語を特徴づける音の一つです。「ウー」と「アー」の中間の音を出しながら、舌全体を奥に引いてこもらせるイメージです。うがいをする直前の舌の感覚（舌を奥に引いて持ち上げた状態）が近いです。唇をやや丸めて「アー」と言いながら舌先を反らせると、こもった音になります。',
    },
  },

  // Back Vowels (4)
  {
    symbol: 'u',
    displaySymbol: '/u/',
    category: 'monophthong',
    subcategory: 'back-vowel',
    articulation: {
      lips: {
        shape: 'rounded',
        description: 'しっかりと丸めて前に突き出し、小さな円形の開口を作る',
      },
      tongue: {
        region: 'back',
        target: 'velar',
        description:
          '舌の後ろ側（奥の部分）を軟口蓋に向かって最も高い位置に持ち上げます。英語母音の中で舌が最も後ろにあり、最も高い音です。舌先は下の前歯から離れ、舌全体に力を入れた緊張した状態で発音します。',
      },
      openness: '狭（閉）',
    },
    exampleWord: 'boot',
    elsaNotation: '/but/',
    japaneseApprox: '「ウー」（唇丸め）',
    pronunciationGuide: {
      mechanism:
        '英語の母音の中で最も舌が後方かつ高い位置にあります。口笛を吹く寸前のように小さく丸めます。唇が丸まって前に出るため、歯はほとんど見えません。顎はほとんど閉じた状態。緊張母音（tense vowel）で、筋肉に力を入れて発音します。',
      comparison:
        '日本語の「ウ」は唇をほとんど丸めず、平べったい形で出す音です。英語では「オ」のように唇を丸めて突き出すことが必須です。日本語の「ウ」の口のまま英語を話すとこの音が正しく聞こえません。口笛を吹く直前の口で「ウー」と長く伸ばしてみてください。',
    },
  },
  {
    symbol: 'ʊ',
    displaySymbol: '/ʊ/',
    category: 'monophthong',
    subcategory: 'back-vowel',
    articulation: {
      lips: {
        shape: 'rounded',
        description: '軽く丸めるが強く突き出さない緩んだ丸め',
      },
      tongue: {
        region: 'back',
        target: 'velar',
        description:
          '舌の後ろ側（奥の部分）をやや高めの位置に置きますが、/u/より低く、中央寄りです。力を抜いた弛緩した状態（リラックス）で発音します。',
      },
      openness: '半狭',
    },
    exampleWord: 'foot',
    elsaNotation: '/fʊt/',
    japaneseApprox: '「ウ」（短く弛緩）',
    pronunciationGuide: {
      mechanism:
        '筋肉の緊張がない弛緩した状態（lax vowel）です。歯は少し見える程度。顎はやや開いた状態。',
      comparison:
        '日本語の「ウ」の音質に最も近い英語母音です。唇を軽く丸めた短い「ウ」で、力を抜いた自然な状態で出します。',
    },
  },
  {
    symbol: 'ɔ',
    displaySymbol: '/ɔ/',
    category: 'monophthong',
    subcategory: 'back-vowel',
    articulation: {
      lips: {
        shape: 'rounded',
        description: 'しっかりと丸め、口を大きく縦に開く',
      },
      tongue: {
        region: 'back',
        target: 'velar',
        description:
          '舌の後ろ側（奥の部分）を中程度の高さに持ち上げます。/u/や/ʊ/より低い位置です。舌先は下の前歯から離れた自然な位置に置きます。',
      },
      openness: '半広',
    },
    exampleWord: 'thought',
    elsaNotation: '/θɔt/',
    japaneseApprox: '「オー」（唇丸め）',
    pronunciationGuide: {
      mechanism:
        '明確な円唇（まるくち）を作ります。歯は唇が丸まるためあまり見えません。顎はやや大きく開き、指1〜2本分。アメリカ英語の多くの方言では広い後舌母音との区別がなくなりつつあります。',
      comparison:
        '日本語の「オ」よりも口を縦に大きく開け、唇の丸めが強い音です。あくびの途中のように口を大きく開けつつ唇を丸めるイメージです。「オー」と伸ばしながら口を縦に大きく開けると近づきます。',
    },
  },
  {
    symbol: 'ɑ',
    displaySymbol: '/ɑ/',
    category: 'monophthong',
    subcategory: 'back-vowel',
    articulation: {
      lips: {
        shape: 'neutral',
        description: '丸めず自然に開いた状態',
      },
      tongue: {
        region: 'back',
        target: 'velar',
        description:
          '舌を低く平らにして、やや後方に引きます。英語母音の中で舌が最も低く、口が最も開く音の一つです。舌全体がリラックスして口の底に沈んだ状態で、喉の奥が見えるほど口を大きく開けます。',
      },
      openness: '広',
    },
    exampleWord: 'father',
    elsaNotation: '/fɑðər/',
    japaneseApprox: '「ア」（口を大きく）',
    pronunciationGuide: {
      mechanism:
        '英語の母音の中で最も舌が低く、最も口が開く音の一つです。舌先は下の前歯から離れた位置。上下の歯の間は大きく開き、指2本分ほど。顎を大きく下げ、口を縦に大きく開けます。',
      comparison:
        '日本語の「ア」に最も近い英語母音ですが、英語ではより口の開きが大きく、喉の奥が見えるほど大きく開けます。あくびの始まりの「アー」のような開放的な音です。日本語の「ア」をそのまま使うと口の開きが不十分に聞こえることがあります。',
    },
  },

  // === Diphthongs (5) ===
  {
    symbol: 'eɪ',
    displaySymbol: '/eɪ/',
    category: 'diphthong',
    subcategory: 'diphthong',
    articulation: {
      lips: {
        shape: 'dynamic',
        description: '自然に開いた状態から口を閉じる方向に変化する',
      },
      tongue: {
        region: 'dynamic',
        description:
          '舌の前部を中程度の高さ（/ɛ/に近い位置）から、より高い前方の位置（/ɪ/に近い位置）へ持ち上げていきます。「エ」から「イ」への滑らかな移動で、前半が長く後半が短い配分です。',
      },
      movement: '前舌→狭',
    },
    exampleWord: 'say',
    elsaNotation: '/seɪ/',
    japaneseApprox: '「エイ」',
    pronunciationGuide: {
      mechanism:
        '「エ」から「イ」へ滑らかに移動する二重母音です。最初の「エ」の部分を長めに保ち、最後に軽く「イ」に向かう動きがあります。前半が長く後半が短い配分です。二重母音は「動き」が本質なので、音が一定に伸びるのではなく「変化する」ことが重要です。顎が閉じて口の開きが小さくなります。',
      comparison:
        '日本語の「エイ」は「エー」と長く伸ばして最後の「イ」が弱い傾向がありますが、英語では「エ」→「イ」への舌と顎の移動がより明確です。',
    },
  },
  {
    symbol: 'aɪ',
    displaySymbol: '/aɪ/',
    category: 'diphthong',
    subcategory: 'diphthong',
    articulation: {
      lips: {
        shape: 'dynamic',
        description: '自然に開いた状態から横に引かれる方向に変化する',
      },
      tongue: {
        region: 'dynamic',
        description:
          '舌を低い位置（/ɑ/に近い広い状態）から、舌の前部を高い位置（/ɪ/に近い位置）へ大きく持ち上げていきます。英語の二重母音の中で最も舌の動きが大きい音の一つです。',
      },
      movement: '広→狭',
    },
    exampleWord: 'time',
    elsaNotation: '/taɪm/',
    japaneseApprox: '「アイ」',
    pronunciationGuide: {
      mechanism:
        '口を大きく開けた広い「ア」の状態から始め、口を閉じていきます。英語の二重母音の中で最も口の動きが大きい音の一つです。顎と舌の大幅な移動があり、この動きを大げさにするほど英語らしく聞こえます。最初の「ア」を十分に大きく開けることがコツです。',
      comparison:
        '日本語の「アイ」にかなり近い音ですが、英語では出だしの「ア」がより大きく開いた音です。日本語の「ア」より口を大きく開けてから「イ」に移行します。',
    },
  },
  {
    symbol: 'ɔɪ',
    displaySymbol: '/ɔɪ/',
    category: 'diphthong',
    subcategory: 'diphthong',
    articulation: {
      lips: {
        shape: 'dynamic',
        description: '丸めた唇から横に引いた形へ変化する',
      },
      tongue: {
        region: 'dynamic',
        description:
          '舌の後ろ側が中程度の高さ（/ɔ/に近い位置）から始まり、舌の前部を高い位置（/ɪ/に近い位置）へ持ち上げていきます。舌が後方から前方へ移動しながら高くなる、大きな動きを伴う二重母音です。',
      },
      movement: '後舌→狭',
    },
    exampleWord: 'boy',
    elsaNotation: '/bɔɪ/',
    japaneseApprox: '「オイ」',
    pronunciationGuide: {
      mechanism:
        '唇の形が「丸い（オ）」→「横に引く（イ）」と大きく変化する二重母音です。唇の丸めを解除して横に引く動きを意識しましょう。舌も後方低めから前方高めへ大きく移動します。',
      comparison:
        '日本語の「オイ」にかなり近く、日本語話者にとって比較的出しやすい二重母音です。出だしの「オ」の部分で唇をしっかり丸めることと、「イ」に向かう動きの中で唇の丸めを解除することを意識しましょう。',
    },
  },
  {
    symbol: 'oʊ',
    displaySymbol: '/oʊ/',
    category: 'diphthong',
    subcategory: 'diphthong',
    articulation: {
      lips: {
        shape: 'dynamic',
        description: '中程度に丸めた唇からさらにすぼめて小さく丸める',
      },
      tongue: {
        region: 'dynamic',
        description:
          '舌の後ろ側を中程度の高さから、より高い位置（/ʊ/に近い位置）へ持ち上げていきます。舌は後方の領域に留まったまま上昇する動きです。「軽いオ」から「すぼめたウ」への移行です。',
      },
      movement: '後舌→狭',
    },
    exampleWord: 'go',
    elsaNotation: '/goʊ/',
    japaneseApprox: '「オウ」',
    pronunciationGuide: {
      mechanism:
        '「軽い オ」→「すぼめた ウ」へ移行する二重母音です。口が「やや丸い→もっと丸くすぼめる」と変化します。後半の「ウ」への移行を省略して「オー」と一定に伸ばすと日本語的に聞こえてしまうので、唇をさらにすぼめる動きを意識しましょう。',
      comparison:
        '日本語では「オー」と一定の音で伸ばすことが多いですが、英語では後半で唇がさらにすぼまり「ウ」に向かう変化があります。「オ→ウ」の口の変化を大げさにするくらいでちょうどよいです。',
    },
  },
  {
    symbol: 'aʊ',
    displaySymbol: '/aʊ/',
    category: 'diphthong',
    subcategory: 'diphthong',
    articulation: {
      lips: {
        shape: 'dynamic',
        description: '自然に開いた状態から丸めてすぼめる方向に劇的に変化する',
      },
      tongue: {
        region: 'dynamic',
        description:
          '舌を低い位置（/ɑ/に近い広い状態）から、舌の後ろ側を高い位置（/ʊ/に近い位置）へ大きく持ち上げていきます。口の形が最も大きく変化する二重母音の一つで、舌も低い位置から後方高めの位置へダイナミックに移動します。',
      },
      movement: '広→後舌狭',
    },
    exampleWord: 'now',
    elsaNotation: '/naʊ/',
    japaneseApprox: '「アウ」',
    pronunciationGuide: {
      mechanism:
        '口の形が最も大きく変化する二重母音の一つです。「大きく開いた ア」→「丸くすぼめた ウ」への移行で、顎の高さも唇の形も大幅に変わります。この大きな口の動きを省略すると英語らしく聞こえません。',
      comparison:
        '日本語の「アウ」に近い音ですが、英語ではより口の変化を大げさに行います。出だしの「ア」で十分に口を大きく開け、後半で唇をしっかり丸めてすぼめる動きをダイナミックに行いましょう。',
    },
  },

  // === R-colored Vowels (7) ===
  {
    symbol: 'ɝ',
    displaySymbol: '/ɝ/',
    category: 'r-colored',
    subcategory: 'r-colored-vowel',
    articulation: {
      lips: {
        shape: 'rounded',
        description: 'やや丸めて軽く突き出す',
      },
      tongue: {
        region: 'center',
        target: 'none',
        description:
          '舌の中央部を持ち上げて盛り上げます。舌先はどこにも触れません。発音方法は2つあります。(1) 舌先を反らせて上方に向ける方法（retroflex）、(2) 舌先は下のままで舌全体を奥に引いて「太く」する方法（bunched）。強勢のある位置で明確に発音します。',
      },
    },
    exampleWord: 'bird',
    elsaNotation: '/bɝd/',
    japaneseApprox: '「アー」＋舌巻き（強勢）',
    pronunciationGuide: {
      mechanism:
        '強勢のあるR音化母音で、アメリカ英語で最も特徴的な音の一つです。舌先を反らせて上方に向ける方法（retroflex）と、舌先は下のまま舌の奥を引いて舌全体を「太く」する方法（bunched）の2つがあります。歯は関与しません。顎は中程度に開いた状態。',
      comparison:
        '日本語にはR音化母音がないため、最も習得が難しい母音の一つです。「ウ」と「ア」の中間のような暗い音に、舌のこもりが加わった独特の響きです。「アー」と言いながら舌先を徐々に反り上げていき、こもった響きに変わるポイントを見つけましょう。うがいの前に舌を奥に引く動作や、唸り声「ウー」の感覚もヒントになります。',
    },
  },
  {
    symbol: 'ər',
    displaySymbol: '/ər/',
    category: 'r-colored',
    subcategory: 'r-colored-vowel',
    articulation: {
      lips: {
        shape: 'rounded',
        description: 'わずかに丸める程度',
      },
      tongue: {
        region: 'center',
        target: 'none',
        description:
          '舌を反らせるか中央を盛り上げますが、/ɝ/より弱く控えめに行います。強勢のない位置で現れるため、力を抜いた曖昧な母音に軽くR音の舌の構えを添えるだけで十分です。',
      },
    },
    exampleWord: 'butter',
    elsaNotation: '/bʌtər/',
    japaneseApprox: '「ア」＋舌巻き（弱勢）',
    pronunciationGuide: {
      mechanism:
        '強勢のないR音化母音で、英語で最も多く出現する音の一つです。力を抜いた曖昧な母音に軽くR音の舌の構えを添えるだけで十分です。歯は関与しません。顎はリラックスしてやや開いた状態。',
      comparison:
        '語末の-er、-or、-ar、-ureなど非常に多くの単語の弱音節に現れます。力を入れず短く弱く発音するのがポイントです。',
    },
  },
  {
    symbol: 'ɑr',
    displaySymbol: '/ɑr/',
    category: 'r-colored',
    subcategory: 'r-colored-vowel',
    articulation: {
      lips: {
        shape: 'dynamic',
        description: '最初は丸めず大きく開け、R音に向けてやや丸めに移行',
      },
      tongue: {
        region: 'dynamic',
        description:
          '舌を低く平らにした状態（/ɑ/の位置）から始め、R音の舌の構え（舌先を反らせるか中央を盛り上げる）に移行します。最初の「ア」の口を十分に大きく開けることが重要です。',
      },
    },
    exampleWord: 'car',
    elsaNotation: '/kɑr/',
    japaneseApprox: '「アー」＋舌巻き',
    pronunciationGuide: {
      mechanism:
        '大きな「ア」の口から始め、そのままR音の舌の構え（舌先を反らせるか舌中央を盛り上げる）に移行する2段階の動きがあります。歯は関与しません。顎は最初大きく開き、R音に向かってやや閉じます。まず口を大きく開けて「アー」と言い、そのまま舌先を反らせてR音を添えます。最初の「ア」の開きを十分に大きくすることが重要です。',
      comparison:
        '日本語の「アール」から「ル」を取った響きに近いですが、英語のR音化はもっと舌のこもりが強いです。',
    },
  },
  {
    symbol: 'ɔr',
    displaySymbol: '/ɔr/',
    category: 'r-colored',
    subcategory: 'r-colored-vowel',
    articulation: {
      lips: {
        shape: 'rounded',
        description: '丸めた唇を維持しながらR音を出す',
      },
      tongue: {
        region: 'dynamic',
        description:
          '舌の後ろ側を中程度の高さにした状態（/ɔ/の位置）から始め、R音の舌の構えに移行します。唇を丸めた「オー」を出しながら舌先を反らせるか中央を盛り上げます。',
      },
    },
    exampleWord: 'door',
    elsaNotation: '/dɔr/',
    japaneseApprox: '「オー」＋舌巻き',
    pronunciationGuide: {
      mechanism:
        '唇を丸めた「オー」を出しながら舌先を反らせます。唇を丸めることとR音の舌の構えを同時に維持する必要がある点がやや難しいポイントです。歯は関与しません。顎は最初やや大きく開き、R音に向かってやや閉じます。',
      comparison:
        '日本語の「オール」から「ル」を取った音に近いですが、舌のこもりがより強いです。唇の丸めを維持しながら舌の構えを変えることを意識して練習しましょう。',
    },
  },
  {
    symbol: 'ɪr',
    displaySymbol: '/ɪr/',
    category: 'r-colored',
    subcategory: 'r-colored-vowel',
    articulation: {
      lips: {
        shape: 'dynamic',
        description: 'やや横に引いた状態から軽く丸めの方向に変化する',
      },
      tongue: {
        region: 'dynamic',
        description:
          '舌の前部をやや高めの位置（/ɪ/に近い位置）から始め、R音の舌の構えに移行します。舌が前方から中央への大きな動きを伴い、実際の音は「イァ」のような響きになります。',
      },
    },
    exampleWord: 'here',
    elsaNotation: '/hɪr/',
    japaneseApprox: '「イア」＋舌巻き',
    pronunciationGuide: {
      mechanism:
        '短い「イ」の構えからR音の舌の構えに移行します。舌が前方高めの位置から中央の盛り上がった位置へ移動するため、舌の大きな動きを伴います。歯は関与しません。顎はやや閉じた状態からR音に向かってやや開きます。',
      comparison:
        '実際の音は「イァ」のような響きで、「イ」から「ア」に向かいつつR音のこもりが加わります。日本語の「イア」を素早く言った音に近いですが、R音のこもりが加わります。「イ」を出してから舌先を反らせてR音に移る2段階を意識して練習しましょう。',
    },
  },
  {
    symbol: 'ɛr',
    displaySymbol: '/ɛr/',
    category: 'r-colored',
    subcategory: 'r-colored-vowel',
    articulation: {
      lips: {
        shape: 'dynamic',
        description: '自然に開いた状態からR音で軽く丸めの方向へ',
      },
      tongue: {
        region: 'dynamic',
        description:
          '舌の前部を中程度の高さ（/ɛ/に近い位置）から始め、R音の舌の構えに移行します。/ɪr/より口の開きが大きく、「エァ」のような響きになります。',
      },
    },
    exampleWord: 'there',
    elsaNotation: '/ðɛr/',
    japaneseApprox: '「エア」＋舌巻き',
    pronunciationGuide: {
      mechanism:
        '「エ」の口の開きを保ちながらR音を添えます。出発点の口の開きがやや大きいのが特徴です。歯は関与しません。顎はやや開いた状態で始まります。',
      comparison:
        '「エァ」のような響きで、「エ」の音色が含まれていることがポイントです。日本語の「エア」を素早く言った音にR音のこもりが加わったイメージで練習しましょう。',
    },
  },
  {
    symbol: 'ʊr',
    displaySymbol: '/ʊr/',
    category: 'r-colored',
    subcategory: 'r-colored-vowel',
    articulation: {
      lips: {
        shape: 'rounded',
        description: '軽く丸めた状態を全体的に維持する',
      },
      tongue: {
        region: 'dynamic',
        description:
          '舌の後ろ側をやや高めにした状態（/ʊ/に近い位置）から始め、R音の舌の構えに移行します。唇の丸みを維持しながらR音を出し、「ウァ」のような響きになります。',
      },
    },
    exampleWord: 'sure',
    elsaNotation: '/ʃʊr/',
    japaneseApprox: '「ウア」＋舌巻き',
    pronunciationGuide: {
      mechanism:
        '短い「ウ」の構えからR音の舌の構えに移行します。唇の丸めを保ちながらR音を出す必要があります。歯は関与しません。顎はやや開いた状態。「ウァ」のような響きで、唇の丸みを維持しながらR音のこもりが加わります。',
      comparison:
        '現代アメリカ英語ではこの音が丸い後舌のR音化母音に統合される傾向が強く、両方の発音が使われます。',
    },
  },
]

export const ALL_PHONEMES: readonly Phoneme[] = Object.freeze(phonemes.map(deepFreeze))
