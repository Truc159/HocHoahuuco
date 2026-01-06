
import { CategoryId, Topic } from './types';

export const TOPICS: Topic[] = [
  {
    id: CategoryId.ALKANE,
    name: 'Alkane (Ankan)',
    content: {
      title: 'Alkane (Ankan)',
      definition: 'Alkane là các hydrocarbon no, mạch hở, trong phân tử chỉ chứa các liên kết đơn C-C và C-H. Công thức tổng quát: CnH2n+2 (n ≥ 1).',
      iupacRules: [
        'Chọn mạch chính là mạch Carbon dài nhất và có nhiều nhánh nhất.',
        'Đánh số thứ tự các nguyên tử Carbon từ phía gần nhánh hơn.',
        'Gọi tên: [Số chỉ vị trí nhánh]-[Tên nhánh][Tên mạch chính]ane.',
        'Nếu có nhiều nhánh giống nhau, dùng tiền tố: di (2), tri (3), tetra (4)...'
      ],
      commonNames: ['Iso- (có nhánh CH3 ở C số 2)', 'Neo- (có 2 nhánh CH3 ở C số 2)'],
      examples: [
        { formula: 'CH4', name: 'Methane' },
        { formula: 'CH3-CH3', name: 'Ethane' },
        { formula: 'CH3-CH(CH3)-CH3', name: '2-methylpropane', common: 'Isobutane' }
      ]
    },
    questions: [
      { id: 1, question: 'Công thức tổng quát của Alkane là gì?', options: ['CnH2n', 'CnH2n-2', 'CnH2n+2', 'CnH2n+1'], correctAnswer: 2, explanation: 'Alkane là hydrocarbon no mạch hở nên có công thức CnH2n+2.' },
      { id: 2, question: 'Tên thay thế của CH3-CH(CH3)-CH2-CH3 là gì?', options: ['2-methylbutane', 'Isopentane', '3-methylbutane', 'Pentane'], correctAnswer: 0, explanation: 'Mạch chính 4C, nhánh methyl ở vị trí số 2.' },
      { id: 3, question: 'Chất nào sau đây là chất khí ở điều kiện thường?', options: ['Pentane', 'Hexane', 'Methane', 'Octane'], correctAnswer: 2, explanation: 'Các alkane từ C1 đến C4 là chất khí.' },
      { id: 4, question: 'Phản ứng đặc trưng của Alkane là?', options: ['Phản ứng cộng', 'Phản ứng thế', 'Phản ứng trùng hợp', 'Phản ứng thủy phân'], correctAnswer: 1, explanation: 'Alkane chỉ có liên kết đơn nên ưu tiên phản ứng thế.' },
      { id: 5, question: 'Số đồng phân cấu tạo của C4H10 là?', options: ['1', '2', '3', '4'], correctAnswer: 1, explanation: 'Có 2 đồng phân là Butane và 2-methylpropane.' },
      { id: 6, question: 'Gốc -CH3 có tên gọi là gì?', options: ['Ethyl', 'Propyl', 'Methyl', 'Butyl'], correctAnswer: 2, explanation: 'CH3- là gốc Methyl.' },
      { id: 7, question: 'Tên của CH3-CH2-CH2-CH3 là?', options: ['Ethane', 'Propane', 'Butane', 'Pentane'], correctAnswer: 2, explanation: 'Mạch thẳng 4C gọi là Butane.' },
      { id: 8, question: 'Trong phân tử Alkane chỉ có liên kết nào?', options: ['Liên kết đôi', 'Liên kết ba', 'Liên kết đơn', 'Liên kết cho nhận'], correctAnswer: 2, explanation: 'Alkane là hydrocarbon no chỉ có liên kết đơn.' },
      { id: 9, question: 'Gốc hóa trị I của Ethane là?', options: ['Methyl', 'Ethyl', 'Vinyl', 'Allyl'], correctAnswer: 1, explanation: 'C2H5- là gốc Ethyl.' },
      { id: 10, question: 'Neopentane có bao nhiêu nguyên tử Carbon?', options: ['4', '5', '6', '3'], correctAnswer: 1, explanation: 'Neopentane là 2,2-dimethylpropane có tổng 5C.' }
    ]
  },
  {
    id: CategoryId.ALKENE,
    name: 'Alkene (Anken)',
    content: {
      title: 'Alkene (Anken)',
      definition: 'Alkene là các hydrocarbon không no, mạch hở, trong phân tử có một liên kết đôi C=C. Công thức tổng quát: CnH2n (n ≥ 2).',
      iupacRules: [
        'Mạch chính phải chứa liên kết đôi và là mạch dài nhất.',
        'Đánh số thứ tự từ phía gần liên kết đôi hơn.',
        'Gọi tên: [Vị trí nhánh]-[Tên nhánh][Tên mạch chính]-[Vị trí liên kết đôi]-ene.'
      ],
      commonNames: ['Tên thay thế đuôi -ene bằng -ylene (vd: Ethylene, Propylene)'],
      examples: [
        { formula: 'CH2=CH2', name: 'Ethene', common: 'Ethylene' },
        { formula: 'CH2=CH-CH3', name: 'Propene', common: 'Propylene' },
        { formula: 'CH2=C(CH3)-CH3', name: '2-methylpropene', common: 'Isobutylene' }
      ]
    },
    questions: [
      { id: 1, question: 'Chất đầu tiên trong dãy đồng đẳng Alkene là?', options: ['Methane', 'Ethene', 'Propene', 'Ethyne'], correctAnswer: 1, explanation: 'Alkene bắt đầu từ n=2.' },
      { id: 2, question: 'CH2=CH-CH2-CH3 có tên là gì?', options: ['But-1-ene', 'But-2-ene', 'Propene', 'Butane'], correctAnswer: 0, explanation: 'Liên kết đôi ở C số 1.' },
      { id: 3, question: 'Phản ứng dùng để nhận biết Alkene là?', options: ['Làm mất màu dd Brom', 'Làm quỳ tím hóa xanh', 'Phản ứng tráng gương', 'Phản ứng với Cu(OH)2'], correctAnswer: 0, explanation: 'Alkene cộng Brom làm mất màu nâu đỏ.' },
      { id: 4, question: 'Sản phẩm chính của phản ứng cộng HBr vào Propene tuân theo quy tắc?', options: ['Zaitsev', 'Markovnikov', 'Hund', 'Pauli'], correctAnswer: 1, explanation: 'Cộng vào alkene bất đối xứng theo quy tắc Markovnikov.' },
      { id: 5, question: 'Ethylene có công thức là?', options: ['C2H2', 'C2H4', 'C2H6', 'C3H6'], correctAnswer: 1, explanation: 'C2H4 là ethylene.' },
      { id: 6, question: 'Số liên kết pi trong phân tử alkene là?', options: ['1', '2', '3', '0'], correctAnswer: 0, explanation: 'Một liên kết đôi gồm 1 sigma và 1 pi.' },
      { id: 7, question: 'Chất nào làm mất màu dung dịch thuốc tím (KMnO4)?', options: ['Methane', 'Ethane', 'Ethylene', 'Propane'], correctAnswer: 2, explanation: 'Alkene có phản ứng oxy hóa không hoàn toàn với KMnO4.' },
      { id: 8, question: 'Công thức C4H8 có bao nhiêu đồng phân cấu tạo alkene?', options: ['2', '3', '4', '5'], correctAnswer: 1, explanation: 'Có 3: But-1-ene, But-2-ene, và 2-methylpropene.' },
      { id: 9, question: 'Alkene có đồng phân hình học khi nào?', options: ['Luôn có', 'Mỗi C nối đôi liên kết với 2 nhóm thế khác nhau', 'Mạch dài', 'Có nhánh'], correctAnswer: 1, explanation: 'Điều kiện cần và đủ cho đồng phân cis-trans.' },
      { id: 10, question: 'Trùng hợp ethylene thu được polymer nào?', options: ['PVC', 'PE', 'PP', 'PS'], correctAnswer: 1, explanation: 'Polyethylene (PE).' }
    ]
  },
  {
    id: CategoryId.ALKYNE,
    name: 'Alkyne (Ankin)',
    content: {
      title: 'Alkyne (Ankin)',
      definition: 'Alkyne là hydrocarbon không no, mạch hở, chứa một liên kết ba C≡C. Công thức tổng quát: CnH2n-2 (n ≥ 2).',
      iupacRules: [
        'Mạch chính chứa liên kết ba, dài nhất.',
        'Đánh số ưu tiên phía gần liên kết ba.',
        'Đuôi -yne thay cho -ane.'
      ],
      commonNames: ['Gọi theo tên dẫn xuất của Acetylene (CH≡CH)'],
      examples: [
        { formula: 'CH≡CH', name: 'Ethyne', common: 'Acetylene' },
        { formula: 'CH≡C-CH3', name: 'Propyne', common: 'Methylacetylene' }
      ]
    },
    questions: [
      { id: 1, question: 'Chất nào tác dụng với dd AgNO3/NH3 tạo kết tủa vàng?', options: ['But-2-yne', 'But-1-yne', 'Ethane', 'Ethylene'], correctAnswer: 1, explanation: 'Chỉ Alkyne-1 (có H linh động ở liên kết ba) mới có phản ứng này.' },
      { id: 2, question: 'Tên thông thường của CH≡CH là?', options: ['Acetylene', 'Ethylene', 'Ethane', 'Vinyl'], correctAnswer: 0, explanation: 'Ethyne còn gọi là Acetylene.' },
      { id: 3, question: 'Gốc CH≡C- có tên là?', options: ['Vinyl', 'Allyl', 'Ethynyl', 'Phenyl'], correctAnswer: 2, explanation: 'Gốc Ethynyl.' },
      { id: 4, question: 'Công thức đơn giản nhất của acetylene là?', options: ['CH', 'C2H2', 'CH2', 'C2H'], correctAnswer: 0, explanation: 'Công thức phân tử C2H2 => CTĐGN là CH.' },
      { id: 5, question: 'Sản phẩm của phản ứng hydrate hóa acetylene (xúc tác HgSO4/H2SO4) là?', options: ['Ethanol', 'Ethanal', 'Ethane', 'Acid acetic'], correctAnswer: 1, explanation: 'Tạo ra Acetaldehyde (CH3CHO).' },
      { id: 6, question: 'Alkyne có bao nhiêu liên kết pi?', options: ['1', '2', '3', '0'], correctAnswer: 1, explanation: 'Liên kết ba gồm 1 sigma và 2 pi.' },
      { id: 7, question: 'Chất nào có 3 nguyên tử carbon trong phân tử?', options: ['Ethyne', 'Propyne', 'Butyne', 'Pentyne'], correctAnswer: 1, explanation: 'Prop- tương ứng với 3C.' },
      { id: 8, question: 'Phản ứng dimer hóa acetylene tạo ra?', options: ['Vinylacetylene', 'Benzene', 'Ethane', 'Ethylene'], correctAnswer: 0, explanation: '2C2H2 -> CH2=CH-C≡CH.' },
      { id: 9, question: 'Phản ứng trimer hóa acetylene tạo ra?', options: ['Styrene', 'Benzene', 'Toluene', 'Xylene'], correctAnswer: 1, explanation: '3C2H2 -> C6H6.' },
      { id: 10, question: 'Alkyne C4H6 có bao nhiêu đồng phân?', options: ['1', '2', '3', '4'], correctAnswer: 1, explanation: 'Có 2: But-1-yne và But-2-yne.' }
    ]
  },
  {
    id: CategoryId.ALCOHOL,
    name: 'Alcohol (Ancol)',
    content: {
      title: 'Alcohol (Ancol)',
      definition: 'Alcohol là những hợp chất hữu cơ có nhóm hydroxyl (-OH) liên kết trực tiếp với nguyên tử carbon no.',
      iupacRules: [
        'Chọn mạch chính dài nhất chứa nhóm -OH.',
        'Đánh số từ phía gần nhóm -OH hơn.',
        'Tên: Tên hydrocarbon tương ứng + vị trí -ol.'
      ],
      commonNames: ['Ancol + tên gốc alkyl + ic (vd: Ancol methylic)'],
      examples: [
        { formula: 'CH3OH', name: 'Methanol', common: 'Ancol methylic' },
        { formula: 'C2H5OH', name: 'Ethanol', common: 'Ancol ethylic' },
        { formula: 'CH2OH-CHOH-CH2OH', name: 'Propane-1,2,3-triol', common: 'Glycerol' }
      ]
    },
    questions: [
      { id: 1, question: 'Chất nào là alcohol đa chức?', options: ['Methanol', 'Ethanol', 'Glycerol', 'Phenol'], correctAnswer: 2, explanation: 'Glycerol có 3 nhóm -OH.' },
      { id: 2, question: 'Bậc của alcohol là gì?', options: ['Số nhóm OH', 'Bậc của C liên kết với OH', 'Số nguyên tử C', 'Số nguyên tử H'], correctAnswer: 1, explanation: 'Bậc alcohol = bậc nguyên tử carbon liên kết với nhóm -OH.' },
      { id: 3, question: 'Phản ứng tách nước của Ethanol ở 170°C, H2SO4 đặc tạo ra?', options: ['Ethane', 'Ethylene', 'Diethyl ether', 'Ethyl sulfate'], correctAnswer: 1, explanation: 'Ở 170°C tạo alkene.' },
      { id: 4, question: 'Ancol nào hòa tan được Cu(OH)2 ở nhiệt độ thường tạo dd xanh lam?', options: ['Ethanol', 'Methanol', 'Propan-1-ol', 'Ethylene glycol'], correctAnswer: 3, explanation: 'Ancol có các nhóm OH kề nhau.' },
      { id: 5, question: 'Sản phẩm oxy hóa không hoàn toàn alcohol bậc 1 bởi CuO, t° là?', options: ['Ketone', 'Aldehyde', 'Acid', 'Alkene'], correctAnswer: 1, explanation: 'RCH2OH + CuO -> RCHO + Cu + H2O.' },
      { id: 6, question: 'Sản phẩm oxy hóa alcohol bậc 2 bởi CuO, t° là?', options: ['Aldehyde', 'Acid', 'Ketone', 'Ester'], correctAnswer: 2, explanation: 'Oxy hóa alcohol bậc 2 tạo ketone.' },
      { id: 7, question: 'Công thức của Ancol Benzylic là?', options: ['C6H5OH', 'C6H5CH2OH', 'CH3C6H4OH', 'C6H5CH2CH2OH'], correctAnswer: 1, explanation: 'Gốc benzyl là C6H5CH2-.' },
      { id: 8, question: 'Nhiệt độ sôi của alcohol cao hơn hydrocarbon cùng C vì?', options: ['Khối lượng phân tử lớn', 'Có liên kết Hydrogen', 'Có liên kết đôi', 'Tính acid mạnh'], correctAnswer: 1, explanation: 'Liên kết hydrogen liên phân tử làm tăng nhiệt độ sôi.' },
      { id: 9, question: 'Phenol không thuộc loại alcohol vì?', options: ['Có vòng benzene', 'Nhóm OH gắn vào C thơm', 'Có tính acid', 'Tan trong nước'], correctAnswer: 1, explanation: 'Nhóm OH gắn vào C no mới là alcohol.' },
      { id: 10, question: 'C3H8O có bao nhiêu đồng phân ancol?', options: ['1', '2', '3', '4'], correctAnswer: 1, explanation: 'Propan-1-ol và Propan-2-ol.' }
    ]
  },
  {
    id: CategoryId.ALDEHYDE,
    name: 'Aldehyde (Anđehit)',
    content: {
      title: 'Aldehyde (Anđehit)',
      definition: 'Aldehyde là những hợp chất hữu cơ mà phân tử có nhóm -CHO liên kết trực tiếp với nguyên tử carbon hoặc nguyên tử hydrogen.',
      iupacRules: [
        'Mạch chính chứa nhóm -CHO, đánh số từ C của nhóm -CHO (số 1).',
        'Tên: Tên hydrocarbon tương ứng + al.'
      ],
      commonNames: ['Anđehit + tên acid tương ứng (vd: Anđehit axetic)'],
      examples: [
        { formula: 'HCHO', name: 'Methanal', common: 'Anđehit formic' },
        { formula: 'CH3CHO', name: 'Ethanal', common: 'Anđehit axetic' }
      ]
    },
    questions: [
      { id: 1, question: 'Nhóm chức của aldehyde là?', options: ['-OH', '-CHO', '-COOH', '-NH2'], correctAnswer: 1, explanation: '-CHO là nhóm formyl của aldehyde.' },
      { id: 2, question: 'Phản ứng tráng bạc dùng để nhận biết aldehyde tạo ra chất gì?', options: ['Cu', 'Ag', 'Fe', 'Al'], correctAnswer: 1, explanation: 'Aldehyde khử Ag+ thành Ag kim loại sáng bóng.' },
      { id: 3, question: 'HCHO có tên thay thế là?', options: ['Methanal', 'Ethanal', 'Propanal', 'Butanal'], correctAnswer: 0, explanation: '1C -> Methanal.' },
      { id: 4, question: 'Oxy hóa aldehyde bằng O2 (xúc tác Mn2+) thu được?', options: ['Alcohol', 'Ketone', 'Carboxylic acid', 'Ester'], correctAnswer: 2, explanation: 'RCHO + 1/2O2 -> RCOOH.' },
      { id: 5, question: 'Khử aldehyde bằng H2 (Ni, t°) thu được?', options: ['Carboxylic acid', 'Alcohol bậc 1', 'Alcohol bậc 2', 'Ketone'], correctAnswer: 1, explanation: 'RCHO + H2 -> RCH2OH.' },
      { id: 6, question: 'Fomon (Formalin) là dung dịch gì?', options: ['HCHO 37-40%', 'CH3CHO 37-40%', 'CH3COOH 5%', 'C2H5OH 90%'], correctAnswer: 0, explanation: 'Dung dịch bão hòa Methanal.' },
      { id: 7, question: 'Aldehyde axetic có công thức là?', options: ['HCHO', 'CH3CHO', 'C2H5CHO', 'C6H5CHO'], correctAnswer: 1, explanation: 'Acetaldehyde ứng với acid acetic (2C).' },
      { id: 8, question: 'Aldehyde vừa có tính khử vừa có tính gì?', options: ['Acid', 'Base', 'Oxy hóa', 'Lưỡng tính'], correctAnswer: 2, explanation: 'Tính khử (tráng bạc) và tính oxy hóa (+H2).' },
      { id: 9, question: 'Số mol Ag tạo ra khi tráng gương 1 mol HCHO là?', options: ['1', '2', '4', '3'], correctAnswer: 2, explanation: 'Riêng HCHO tạo 4 mol Ag.' },
      { id: 10, question: 'Aldehyde không no, đơn chức, một liên kết đôi có CTPT tổng quát là?', options: ['CnH2nO', 'CnH2n-2O', 'CnH2n+2O', 'CnH2n-4O'], correctAnswer: 1, explanation: 'Có 1 liên kết đôi C=C và 1 liên kết đôi C=O (độ bất bão hòa k=2).' }
    ]
  },
  {
    id: CategoryId.CARBOXYLIC_ACID,
    name: 'Carboxylic Acid (Axit cacboxylic)',
    content: {
      title: 'Carboxylic Acid',
      definition: 'Là những hợp chất hữu cơ mà phân tử có nhóm carboxyl (-COOH) liên kết trực tiếp với nguyên tử carbon hoặc nguyên tử hydrogen.',
      iupacRules: [
        'Mạch chính chứa nhóm -COOH, số 1 ưu tiên cho C của -COOH.',
        'Tên: Axit + tên hydrocarbon tương ứng + oic.'
      ],
      commonNames: ['Thường liên quan đến nguồn gốc tìm ra (vd: Acid formic - kiến)'],
      examples: [
        { formula: 'HCOOH', name: 'Axit methanoic', common: 'Axit formic' },
        { formula: 'CH3COOH', name: 'Axit ethanoic', common: 'Axit axetic' }
      ]
    },
    questions: [
      { id: 1, question: 'Giấm ăn chứa acid nào?', options: ['Acid formic', 'Acid acetic', 'Acid oxalic', 'Acid lactic'], correctAnswer: 1, explanation: 'Giấm là dd acid acetic 2-5%.' },
      { id: 2, question: 'Nhóm chức -COOH có tên là?', options: ['Hydroxyl', 'Carbonyl', 'Carboxyl', 'Amino'], correctAnswer: 2, explanation: 'Tên nhóm là Carboxyl.' },
      { id: 3, question: 'Axit nào có tính khử (tham gia phản ứng tráng bạc)?', options: ['Acid acetic', 'Acid formic', 'Acid propionic', 'Acid benzoic'], correctAnswer: 1, explanation: 'Vì có nhóm -CHO trong cấu trúc H-COO-H.' },
      { id: 4, question: 'Phản ứng giữa acid và alcohol gọi là gì?', options: ['Xà phòng hóa', 'Ester hóa', 'Thủy phân', 'Trùng ngưng'], correctAnswer: 1, explanation: 'Tạo thành ester và nước.' },
      { id: 5, question: 'Dãy nhiệt độ sôi giảm dần là?', options: ['Acid > Alcohol > Aldehyde', 'Alcohol > Acid > Aldehyde', 'Aldehyde > Alcohol > Acid', 'Acid > Aldehyde > Alcohol'], correctAnswer: 0, explanation: 'Acid có liên kết hydrogen bền nhất.' },
      { id: 6, question: 'Axit acrylic có công thức là?', options: ['CH2=CH-COOH', 'CH3-COOH', 'HCOOH', 'C6H5-COOH'], correctAnswer: 0, explanation: 'Acid không no có 1 nối đôi.' },
      { id: 7, question: 'Axit oxalic có mấy nhóm chức?', options: ['1', '2', '3', '4'], correctAnswer: 1, explanation: 'HOOC-COOH là acid nhị chức.' },
      { id: 8, question: 'Axit stearic là acid béo có bao nhiêu C?', options: ['15', '16', '17', '18'], correctAnswer: 3, explanation: 'C17H35COOH có tổng 18C.' },
      { id: 9, question: 'Axit palmitic có công thức là?', options: ['C15H31COOH', 'C17H35COOH', 'C17H33COOH', 'C17H31COOH'], correctAnswer: 0, explanation: 'C15H31COOH là acid béo no.' },
      { id: 10, question: 'Chất nào làm quỳ tím hóa đỏ?', options: ['Ethanol', 'Ethanal', 'Acid acetic', 'Acetone'], correctAnswer: 2, explanation: 'Carboxylic acid có tính acid.' }
    ]
  },
  {
    id: CategoryId.ESTER,
    name: 'Ester (Este)',
    content: {
      title: 'Ester (Este)',
      definition: 'Khi thay thế nhóm -OH ở nhóm carboxyl của acid carboxylic bằng nhóm -OR\' thì được ester. Công thức: R-COO-R\'.',
      iupacRules: [
        'Tên gốc alkyl R\' + tên gốc acid (đuôi -ate).'
      ],
      commonNames: ['Thường gọi theo tên mùi thơm (vd: Isoamyl acetate - mùi chuối)'],
      examples: [
        { formula: 'HCOOCH3', name: 'Methyl formate' },
        { formula: 'CH3COOC2H5', name: 'Ethyl acetate' }
      ]
    },
    questions: [
      { id: 1, question: 'Mùi chuối chín của ester nào?', options: ['Ethyl acetate', 'Isoamyl acetate', 'Benzyl acetate', 'Geranyl acetate'], correctAnswer: 1, explanation: 'Mùi chuối chín đặc trưng.' },
      { id: 2, question: 'Thủy phân ester trong môi trường kiềm gọi là phản ứng?', options: ['Ester hóa', 'Xà phòng hóa', 'Trùng hợp', 'Nhiệt phân'], correctAnswer: 1, explanation: 'Tạo muối carboxylate (xà phòng).' },
      { id: 3, question: 'Chất béo là triester của acid béo với chất nào?', options: ['Ethanol', 'Ethylene glycol', 'Glycerol', 'Methanol'], correctAnswer: 2, explanation: 'Chất béo là triglyceride.' },
      { id: 4, question: 'Methyl acrylate có công thức là?', options: ['CH2=CHCOOCH3', 'CH3COOCH3', 'HCOOCH3', 'CH3COOC2H5'], correctAnswer: 0, explanation: 'Gốc acid acrylic + gốc methyl.' },
      { id: 5, question: 'Ester có nhiệt độ sôi thấp hơn acid và alcohol tương ứng vì?', options: ['M lớn', 'Không có liên kết hydrogen', 'Dễ cháy', 'Tan nhiều trong nước'], correctAnswer: 1, explanation: 'Không có nhóm -OH linh động.' },
      { id: 6, question: 'Phản ứng thủy phân ester trong môi trường acid là phản ứng?', options: ['Một chiều', 'Thuận nghịch', 'Không xảy ra', 'Xà phòng hóa'], correctAnswer: 1, explanation: 'Phản ứng diễn ra theo 2 chiều.' },
      { id: 7, question: 'Vinyl acetate có công thức là?', options: ['CH3COOCH=CH2', 'CH3COOCH2CH3', 'HCOOCH=CH2', 'CH2=CHCOOCH3'], correctAnswer: 0, explanation: 'Gốc vinyl là CH2=CH-.' },
      { id: 8, question: 'Thủy phân chất béo thu được sản phẩm luôn có chất nào?', options: ['Ethanol', 'Xà phòng', 'Glycerol', 'Acid béo'], correctAnswer: 2, explanation: 'Glycerol luôn được tạo ra.' },
      { id: 9, question: 'Ester X có CTPT C2H4O2, tên gọi của X là?', options: ['Methyl formate', 'Ethyl acetate', 'Methyl acetate', 'Propyl formate'], correctAnswer: 0, explanation: 'HCOOCH3.' },
      { id: 10, question: 'Benzy axetat có mùi gì?', options: ['Mùi chuối', 'Mùi nhài', 'Mùi dứa', 'Mùi tỏi'], correctAnswer: 1, explanation: 'Mùi hoa nhài.' }
    ]
  },
  {
    id: CategoryId.AMINE,
    name: 'Amine (Amin)',
    content: {
      title: 'Amine (Amin)',
      definition: 'Amine được hình thành khi thay thế một hoặc nhiều nguyên tử hydrogen trong phân tử NH3 bằng gốc hydrocarbon.',
      iupacRules: [
        'Tên hydrocarbon + amine (số chỉ vị trí).',
        'N-alkyl + tên amine bậc 1 (cho amine bậc 2, 3).'
      ],
      commonNames: ['Tên gốc alkyl + amine'],
      examples: [
        { formula: 'CH3NH2', name: 'Methanamine', common: 'Methylamine' },
        { formula: 'C6H5NH2', name: 'Benzenamine', common: 'Aniline' }
      ]
    },
    questions: [
      { id: 1, question: 'Amin nào là chất khí ở điều kiện thường?', options: ['Methylamine', 'Aniline', 'Phenylamine', 'Benzylamine'], correctAnswer: 0, explanation: 'Các amin C1-C3 là chất khí.' },
      { id: 2, question: 'Bậc của amin là gì?', options: ['Số nhóm NH2', 'Số nguyên tử H bị thay thế', 'Bậc của C', 'Khối lượng phân tử'], correctAnswer: 1, explanation: 'Số gốc hydrocarbon liên kết với N.' },
      { id: 3, question: 'Aniline tác dụng với dd Brom tạo kết tủa màu gì?', options: ['Vàng', 'Trắng', 'Đỏ', 'Xanh'], correctAnswer: 1, explanation: 'Tạo 2,4,6-tribromoaniline kết tủa trắng.' },
      { id: 4, question: 'Amin có tính chất hóa học đặc trưng là gì?', options: ['Tính acid', 'Tính base', 'Lưỡng tính', 'Trung tính'], correctAnswer: 1, explanation: 'Do còn cặp electron tự do trên nguyên tử N.' },
      { id: 5, question: 'Lực base của các chất tăng dần là?', options: ['C6H5NH2 < NH3 < CH3NH2', 'NH3 < C6H5NH2 < CH3NH2', 'CH3NH2 < NH3 < C6H5NH2', 'C6H5NH2 < CH3NH2 < NH3'], correctAnswer: 0, explanation: 'Vòng benzene hút e làm giảm tính base, gốc đẩy e làm tăng tính base.' },
      { id: 6, question: 'Công thức của Dimethylamine là?', options: ['CH3NH2', '(CH3)2NH', '(CH3)3N', 'C2H5NH2'], correctAnswer: 1, explanation: 'Có 2 gốc methyl.' },
      { id: 7, question: 'Amin bậc 3 có công thức tổng quát là?', options: ['R-NH2', 'R-NH-R\'', 'R-N(R\')-R\'\'', 'R3NH'], correctAnswer: 2, explanation: 'Nguyên tử N liên kết với 3 gốc.' },
      { id: 8, question: 'Chất nào không làm quỳ tím đổi màu?', options: ['CH3NH2', 'NH3', 'C6H5NH2', 'NaOH'], correctAnswer: 2, explanation: 'Aniline có tính base rất yếu không đổi màu chỉ thị.' },
      { id: 9, question: 'Khử nitrobenzene bằng H mới sinh (Fe + HCl) thu được?', options: ['Aniline', 'Benzene', 'Phenol', 'Toluene'], correctAnswer: 0, explanation: 'Phản ứng điều chế aniline.' },
      { id: 10, question: 'Isopropylamine là amin bậc mấy?', options: ['1', '2', '3', '4'], correctAnswer: 0, explanation: '(CH3)2CH-NH2 là amin bậc 1 (nhóm -NH2).' }
    ]
  },
  {
    id: CategoryId.AMINO_ACID,
    name: 'Amino Acid',
    content: {
      title: 'Amino Acid',
      definition: 'Là hợp chất hữu cơ tạp chức, phân tử chứa đồng thời nhóm amino (-NH2) và nhóm carboxyl (-COOH).',
      iupacRules: [
        'Axit + vị trí nhóm amino + amino + tên acid tương ứng.'
      ],
      commonNames: ['Thường dùng tên riêng (Glycine, Alanine, Valine...)'],
      examples: [
        { formula: 'H2N-CH2-COOH', name: 'Axit aminoethanoic', common: 'Glycine (Gly)' },
        { formula: 'CH3-CH(NH2)-COOH', name: 'Axit 2-aminopropanoic', common: 'Alanine (Ala)' }
      ]
    },
    questions: [
      { id: 1, question: 'Amino acid đơn giản nhất là?', options: ['Alanine', 'Glycine', 'Valine', 'Lysine'], correctAnswer: 1, explanation: 'Glycine có 2C.' },
      { id: 2, question: 'Tính chất hóa học đặc trưng của amino acid là?', options: ['Tính acid', 'Tính base', 'Tính lưỡng tính', 'Tính khử'], correctAnswer: 2, explanation: 'Chứa cả nhóm -COOH và -NH2.' },
      { id: 3, question: 'Chất làm quỳ tím hóa xanh là?', options: ['Glycine', 'Alanine', 'Lysine', 'Axit glutamic'], correctAnswer: 2, explanation: 'Lysine có 2 nhóm NH2 và 1 nhóm COOH.' },
      { id: 4, question: 'Chất làm quỳ tím hóa đỏ là?', options: ['Valine', 'Alanine', 'Lysine', 'Axit glutamic'], correctAnswer: 3, explanation: 'Axit glutamic có 2 nhóm COOH và 1 nhóm NH2.' },
      { id: 5, question: 'Liên kết giữa các đơn vị alpha-amino acid trong peptide gọi là?', options: ['Liên kết hydro', 'Liên kết ion', 'Liên kết peptide', 'Liên kết cộng hóa trị'], correctAnswer: 2, explanation: 'Liên kết -CO-NH- giữa các alpha-amino acid.' },
      { id: 6, question: 'Số nhóm amino và carboxyl trong Alanine là?', options: ['1, 1', '1, 2', '2, 1', '2, 2'], correctAnswer: 0, explanation: 'Alanine là amino acid trung tính.' },
      { id: 7, question: 'Phản ứng màu Biure dùng để nhận biết peptide từ bao nhiêu liên kết trở lên?', options: ['Dipeptide', 'Tripeptide', 'Tetrapeptide', 'Polypeptide'], correctAnswer: 1, explanation: 'Từ tripeptide trở lên (có ít nhất 2 liên kết peptide).' },
      { id: 8, question: 'Amino acid tồn tại chủ yếu ở dạng nào trong dung dịch?', options: ['Phân tử', 'Ion lưỡng tính', 'Anion', 'Cation'], correctAnswer: 1, explanation: 'Dạng ion zwitterion +H3N-R-COO-.' },
      { id: 9, question: 'Thủy phân hoàn toàn protein đơn giản thu được?', options: ['Glucose', 'Acid béo', 'Alpha-amino acid', 'Ammonia'], correctAnswer: 2, explanation: 'Protein cấu tạo từ các alpha-amino acid.' },
      { id: 10, question: 'Khối lượng phân tử (M) của Glycine là?', options: ['75', '89', '117', '146'], correctAnswer: 0, explanation: 'H2NCH2COOH = 75.' }
    ]
  }
];
