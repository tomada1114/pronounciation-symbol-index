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
      '日本語の「パ」とほぼ同じですが、英語では息の勢い（帯気音）がより強くなります。上下の唇をしっかり閉じて空気をためてから、一気に破裂させるように息を吐き出します。手のひらを口の前に置いて、息が強く当たれば正しく出せています。語頭では特に強い息を出すことを意識しましょう。',
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
      '日本語の「バ」とほぼ同じ口の形で発音します。/p/と同じく両唇を閉じる位置ですが、こちらは声帯を振動させる有声音です。喉に手を当てて、振動を感じながら発音してみましょう。日本語の「バ」よりも唇をしっかり閉じてから開放することを意識してください。',
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
      '日本語の「タ」に近いですが、舌先の位置が異なります。日本語では舌先が上の歯の裏あたりに触れますが、英語の/t/は舌先を歯茎（歯の少し上の膨らんだ部分）にしっかり当てます。語頭では強い息（帯気音）を伴い、紙がなびくほどの勢いで息を出します。「タ」より舌の位置を少し後ろにずらす感覚で試してみてください。',
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
      '/t/の有声版で、舌先の位置は同じく歯茎です。日本語の「ダ」と似ていますが、舌先を歯ではなく歯茎にしっかり当てるのがポイントです。喉に手を当てて振動を感じながら発音しましょう。/t/と/d/を交互に練習すると、有声と無声の違いが体感できます。',
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
      '日本語の「カ」とほぼ同じで、舌の奥（後舌）を軟口蓋（上あごの奥の柔らかい部分）に当てて空気を止め、一気に開放します。語頭では強い帯気音を伴うため、日本語のときよりやや強めの息を意識しましょう。口の奥で「パンッ」と破裂させる感覚をつかんでください。',
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
      '日本語の「ガ」とほぼ同じで、/k/の有声版です。舌の奥を軟口蓋に当てて発音しますが、声帯を振動させます。日本語の鼻濁音（「かがみ」の「が」のように鼻に抜ける音）とは違い、しっかりと破裂させる音です。喉に手を当てて振動を確認しながら練習しましょう。',
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
      '日本語にはない音です。上の前歯を下唇の内側に軽く当て、その隙間から息を細く出します。日本語の「フ」は両唇を近づけて出す音ですが、英語の/f/は必ず歯と唇で作ります。鏡で見て前歯が下唇に触れているか確認しましょう。慣れないうちは下唇を軽く噛むぐらいの感覚でOKです。',
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
      '/f/と同じ口の形（上の前歯を下唇に当てる）で、声帯を振動させた音です。日本語にはない音なので要練習です。「ブ」で代用しがちですが、/v/は唇を閉じず、歯と唇の間の摩擦で出す音です。まず/f/で「フー」と息を出し、そのまま声を加えると/v/になります。喉の振動を感じながら練習しましょう。',
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
      '日本語にない音で、多くの日本語話者が苦手とする音です。舌先を上下の前歯の間に軽く挟む（または上の前歯の先端に触れる）ようにして、その隙間から息を漏らします。「サ」と言いながら舌先を前歯の間に出す感覚です。thinkやthreeの「th」がこの音で、舌先が歯の間から少し見えるくらい出すのがコツです。',
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
      '/θ/と同じ舌の位置で、声帯を振動させた有声音です。thisやthatの「th」がこの音です。舌先を上下の前歯の間に軽く挟み、声を出しながら息を漏らします。「ザ」で代用されがちですが、必ず舌先を歯の間に出してください。/θ/が出せればそこに声を足すだけです。theやtheyなど日常語に頻出します。',
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
      '日本語の「サ行」のs音にかなり近い音です。舌先を歯茎に近づけ（触れずに）、その狭い隙間から強く息を出します。日本語の「ス」の子音でほぼ通じますが、英語の/s/はより鋭く息の強い音です。蛇の「シーッ」という擬音をイメージして、息だけで鋭い音を作る感覚です。',
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
      '/s/の有声版で、日本語の「ザ行」のz音に近い音です。舌の位置は/s/と同じで、そこに声帯の振動を加えます。ミツバチの「ブーン（zzz）」という振動音をイメージすると近いです。日本語の「ズ」とほぼ同じ要領ですが、英語ではより持続的に摩擦音を出し続けます。',
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
      '日本語の「シ」の子音に近い音です。舌の前方を上あごに近づけ、唇を少し丸めて突き出しながら「シーッ」と言います。/s/よりも舌の位置が後方にあり、音がこもって柔らかい響きになります。人に静かにしてほしいときの「シーッ」がまさにこの音です。she, ship, pushなどに現れます。',
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
      '/ʃ/の有声版で、日本語の「ジ」の子音に近いですが、摩擦がより強い音です。measureやvisionの中にある音で、英語でも単独の子音字としては使われず他の綴りに隠れています。/ʃ/の口の形のまま声帯を振動させると出る音です。日本語の「ジ」よりも息の摩擦を強く意識してください。',
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
      '日本語の「ハ」の子音にとても近い音です。口や舌の特定の構えは不要で、声門（喉の奥）を軽く狭めて息を出します。寒い日に手を温めようと「ハーッ」と息を吐く感覚そのものです。後に続く母音によって口の形は変わりますが、/h/自体は単に息を出すだけのシンプルな音です。',
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
      '日本語の「チャ行」に非常に近い音です。/t/（破裂）と/ʃ/（摩擦）が合体した破擦音で、舌先を歯茎に当てて止めた空気を「シュッ」と摩擦させながら開放します。日本語の「チ」とほぼ同じ要領ですが、息の量をやや多めに出すと英語らしくなります。church, cheese, catchなどに現れます。',
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
      '/tʃ/の有声版で、日本語の「ジャ行」に近い音です。舌先を歯茎に当て、声帯を振動させながら「ジュッ」と開放します。日本語の「ジ」で代用できる場面も多いですが、破裂→摩擦の2段階があることを意識するとより正確です。judge, jump, ageなどに現れます。',
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
      '日本語の「マ行」とほぼ同じで、上下の唇を閉じた状態で声を鼻に通す音です。ハミングの「ンー」がまさに/m/です。唇をしっかり閉じたまま鼻に響かせてから唇を開けると、自然に/m/+母音の音になります。語末の/m/（swimなど）では、唇を閉じたまま鼻に抜ける音を維持するのがポイントです。',
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
      '日本語の「ナ行」の子音とほぼ同じです。舌先を歯茎に当て、口からの空気を止めた状態で声を鼻に通します。語末に来ても舌先は必ず歯茎に当たっていなければなりません。日本語の「ん」は後続の音によって舌の位置が変わりますが、英語の/n/は常に舌先を歯茎に固定します。sun, ten, nineなどに現れます。',
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
      '日本語の「案外（あんがい）」の「ん」がこの音です。舌の奥を軟口蓋に当て、鼻から声を出します。singの末尾の音で、/g/を発音せずに鼻に抜ける音です。日本語話者は「ン」の一種として自然に出せますが、英語では/n/との区別が重要です。singとsinの末尾を聞き比べて違いを確認しましょう。',
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
      '日本語の「ラ行」とは異なる音です。舌先を歯茎にしっかり当て、舌の横から空気を流して出します。日本語の「ラ」は舌先が歯茎を瞬間的に弾く音ですが、英語の/l/は舌先を歯茎に当てたまま維持します。語頭のlight（クリアL）と語末のfeel（ダークL＝舌の奥も持ち上がる）の2種類があります。まずは舌先を歯茎に「貼り付ける」感覚を身につけましょう。',
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
      '日本語にはない音で、最も習得が難しい子音の一つです。舌先をどこにも触れさせず、やや巻き上げるか反らせた状態で声を出します。同時に唇を軽く丸めると英語らしい/r/になります。「ウ」と言いかけた口で舌先を上に向ける感覚です。/l/との最大の違いは、/r/では舌が口の中のどこにも触れないことです。red, right, raceなどの語頭で練習しましょう。',
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
      '日本語の「ワ」の子音に近い音です。唇を強く丸めてすぼめ、「ウ」の口の形から素早く次の母音に移行します。日本語の「ワ」よりも唇の丸めが強いのがポイントです。口笛を吹く直前の口の形をイメージし、そこから一気に唇を開いて次の母音に移ります。we, water, wonderなどの語頭に現れます。',
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
      '日本語の「ヤ行」の子音とほぼ同じです。舌の前部を硬口蓋（上あごの硬い部分）に近づけ、「イ」の口の形から素早く次の母音に移行する音です。日本語の「ヤ・ユ・ヨ」とほぼ同じ要領で発音できるため、日本語話者にとっては比較的簡単な音です。yes, you, yearなどの語頭に現れます。',
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
      '日本語の「イー」を長く伸ばした音に近いですが、舌の位置がより高く前方にあり、口を横に引く力が強い音です。唇を左右に引いて笑顔のようにし、舌の前部を上あごに近づけて発音します。日本語の「イ」よりも緊張感のある音で、口の両端を横に引くことを意識しましょう。feet, see, keyなどに現れます。',
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
      '/i/に似ていますが、より短く弛緩した音です。日本語の「イ」に最も近いですが、口の力が抜けた「エ」寄りの「イ」です。舌の位置が/i/よりやや低く後ろにあり、筋肉の緊張が少ない音です。sit, big, fishの母音がこの音です。/i/との違いは長さだけでなく音質（力の抜けた緩い感じ）にあります。',
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
      '日本語の「エ」にかなり近い音です。口を「エ」よりやや大きめに開け、舌の前部を中程度の高さにして発音します。bed, get, redの母音がこの音です。日本語の「エ」でほぼ通じますが、英語ではやや口の開きが大きい傾向があります。/æ/との違いに注意して、こちらは素直な「エ」に近い音だと覚えましょう。',
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
      '日本語にはない母音で、「ア」と「エ」の中間の音です。口を「エ」の形のまま「ア」ぐらいまで大きく開けるイメージです。舌の前部を低くし、口を横に広げながら開きます。cat, bad, manの母音がこの音です。笑顔で「ア」と言う感覚、あるいは「えぁ」と素早く言う感覚が近いです。日本語話者は「エ」か「ア」のどちらかに寄りがちなので、その中間を狙いましょう。',
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
      '英語で最も頻出する母音で、「シュワー」と呼ばれます。口も舌も完全にリラックスした状態で、力を抜いて短く曖昧に「ア」と言う音です。aboutの最初の音、bananaの第1・第3音節がこれです。強勢のない音節に現れ、口をほとんど動かさずぼんやりした「ア」を出します。力を入れないことが最大のコツです。',
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
      '/ə/と口の形は似ていますが、こちらは強勢のある音節で使われるため、よりはっきり力強く発音します。日本語の短い「ア」に近いですが、口の開きはやや控えめです。cup, bus, loveの母音がこの音です。/ə/が弱く曖昧な「ア」なのに対し、/ʌ/はお腹から声を出す強い「ア」と覚えると区別しやすいです。',
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
      'アメリカ英語に特徴的なR音化母音で、舌を巻いた（またはこもらせた）「アー」です。舌先を口の中のどこにも触れさせず、舌の中央部を盛り上げるようにして「アー」と言います。日本語にはない音ですが、「アー」と言いながら舌先をそっと反り上げる練習から始めましょう。唇をやや丸めると出しやすくなります。bird, first, nurseの母音です。',
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
      '日本語の「ウー」に似ていますが、唇の丸めがずっと強い音です。唇を前に突き出して小さく丸め、舌の奥を高く持ち上げて発音します。日本語の「ウ」は唇があまり丸まりませんが、英語の/u/は唇を「オ」のように丸めて突き出すことが重要です。口笛を吹く寸前の口で「ウー」と言うイメージです。boot, food, moonに現れます。',
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
      '/u/を短く弛緩させた音で、日本語の「ウ」に近い音です。/u/ほど唇を強く丸めず、舌の位置もやや低めで力が抜けた状態です。foot, book, goodの母音がこの音です。/u/（長い「ウー」：food）と/ʊ/（短い「ウ」：foot）を比べて、力の入り具合と長さの違いを体感してください。',
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
      '唇を丸めた「オー」で、日本語の「オ」よりも口を大きく縦に開き、唇をしっかり丸めて発音します。あくびをするように口を大きく開けつつ唇を丸めるイメージです。日本語の「オ」よりも開放的でこもった響きになります。thought, law, allの母音です。ただしアメリカ英語の多くの方言では/ɑ/と統合されつつあります。',
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
      '口を大きく縦に開けた「ア」で、日本語の「ア」に最も近い英語母音です。口を縦に大きく開け、舌を低く平らにして口の奥から声を出します。日本語の「ア」より口の開きが大きく、喉の奥が見えるほど大きく開けるイメージです。あくびの始まりのような開放的な音です。father, hot, boxの母音に現れます。',
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
      '「エ」から「イ」へ滑らかに移動する二重母音です。日本語の「エイ」とほぼ同じですが、出だしの「エ」の部分がやや長く、「イ」に移る動きを滑らかに行うのがポイントです。「エー」と伸ばしながら最後に軽く「イ」を添えるイメージです。say, day, makeの母音に現れます。日本語のように「エー」と一定に伸ばすのではなく、音が移動する感覚を意識しましょう。',
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
      '口を大きく開けた「ア」から「イ」に向かって口を閉じていく二重母音です。日本語の「アイ」とほぼ同じですが、出だしの「ア」は/ɑ/のように口を大きく開け、そこから一気に「イ」の位置へ移動します。time, like, myの母音です。口の開きの変化を大きくダイナミックに行うと英語らしくなります。',
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
      '唇を丸めた「オ」から「イ」に向かって口を横に開いていく二重母音です。日本語の「オイ」とほぼ同じで、日本語話者にとって比較的簡単な音です。出だしの「オ」の部分で唇をしっかり丸め、「イ」に向かって唇を横に広げていくことを意識しましょう。boy, toy, oilの母音です。',
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
      '軽い「オ」から唇をさらにすぼめて「ウ」に移行する二重母音です。日本語の「オー」に似ていますが、後半で唇をさらに丸めて「ウ」に向かう動きがある点が異なります。go, home, noの母音です。日本語話者は「オー」と一定に伸ばしがちですが、後半の「ウ」への移行を意識しましょう。口の形が「オ→ウ」と変化するのがこの音の本質です。',
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
      '口を大きく開けた「ア」から唇を丸めて「ウ」に移行する二重母音です。日本語の「アウ」とほぼ同じ要領ですが、出だしの「ア」で口を十分に大きく開け、後半で唇を丸めて「ウ」に移る動きをしっかり行います。now, house, outの母音です。「ア」→「ウ」の口の変化を大げさなくらいに行うと英語らしい音になります。',
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
      '強勢のあるR音化母音で、アメリカ英語の最も特徴的な音の一つです。舌の中央部を持ち上げ、舌先はどこにも触れずに巻き上げた状態で「アー」と発音します。唇をやや丸めると出しやすくなります。「ウ」と「ア」の中間の音を出しながら舌全体を奥に引く感覚です。bird, first, nurseの母音に現れます。',
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
      'butterやdoctorの末尾に現れる弱い（無強勢の）R音化母音です。/ɝ/と舌の形は同じですが、強勢がないためより弱く短く発音します。英語で最も多く出現する音の一つで、語末の-er, -or, -ar, -ureの多くがこの音です。力を抜いた曖昧な「ア」に軽くRの舌の構えを添えるだけで十分です。',
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
      'carやstarの母音で、大きく口を開けた「アー」にR音の舌巻きが加わった音です。まず/ɑ/（口を大きく開けた「ア」）を出し、そのまま舌先を反らせてR音を添えます。日本語の「アール」から「ル」を取ったような響きです。口を大きく開けることと、後半でRの舌の構えに移行すること、この2段階を意識しましょう。',
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
      'doorやmoreの母音で、唇を丸めた「オー」にR音が加わった音です。/ɔ/（唇を丸めた「オー」）を出しながら舌先を反らせます。日本語の「オール」から「ル」を取った感覚です。唇を丸めることと舌を巻くこと、この二つの動作を同時に行います。four, core, bornなどにも現れます。',
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
      'hereやnearの母音で、「イ」からR音への移行を含む音です。/ɪ/（短い「イ」）を出してから舌先を反らせてR音に移ります。日本語の「イアー」を素早く言う感覚に近く、実際には「イァ」のような響きになります。舌が「イ」の位置からRの位置へ滑らかに移動します。ear, beer, fearなどに現れます。',
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
      'thereやcareの母音で、「エ」からR音への移行を含む音です。/ɛ/（「エ」）を出してから舌先を反らせてR音に移ります。日本語の「エアー」を素早く言う感覚です。「エ」の口の開きを保ちながらR音を添えます。/ɪr/（イ寄り）との混同に注意し、こちらは「エ」の響きが含まれることを意識しましょう。air, bear, whereなどに現れます。',
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
      'sureやtourの母音で、「ウ」からR音への移行を含む音です。/ʊ/（短い「ウ」）を出してから舌先を反らせてR音に移ります。日本語の「ウアー」を素早く言う感覚です。唇の丸みを保ちながらR音に移行します。ただし現代アメリカ英語では/ɔr/に統合される傾向があり、sureを「ショー＋R」のように発音する話者も多くいます。',
  },
]

export const ALL_PHONEMES: readonly Phoneme[] = Object.freeze(phonemes.map((p) => Object.freeze(p)))
