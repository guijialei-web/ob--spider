//
// function fn(){
//     let _0x12345678abcdef = 10;
//     let _0x12345678abcdee = 20;
//     return _0x12345678abcdef + _0x12345678abcdee;
// }
//
// qiaofu = {};
// qiaofu.name = "樵夫";
// qiaofu.age = 18;
//
// // var arr = ['cWlhbw==', 'MTg=', 'YWdl', 'bmFtZQ=='];
//
// var arr = ['bmFtZQ==', 'YWdl', 'MTg=', 'cWlhbw=='];
//
// (function(){
//     var arr2 = [];
//     for(var i = arr.length -1 ; i >=0; i--){
//         arr2.push(arr[i]);
//     }
//     arr = arr2;
// })()
//
// function exin(index){
//     return this.atob(arr[index])
// }
//
//
// qiaofu[exin(3)] = exin(0);
// qiaofu[exin(2)] = exin(1);
// console.log(qiaofu)
//
//
//
// ret = fn();
// console.log(ret)
//

var CryptoJS = require("crypto-js");

var fn = function(a, b, c) {
    if (0 == b)
        return a['substr'](c);
    var ret;
    ret = '' + a['substr'](0, b);
    return ret += a['substr'](b + c);
};

function shell(data){
    var a = parseInt(data[data['length'] - 1], 16) + 9
    , b = parseInt(data[a], 16);
     data = fn(data, a, 1);
     a = data['substr'](b, 8);
     data = fn(data, b, 8);
     b = CryptoJS['enc']['Utf8']['parse'](a);
     a = CryptoJS['enc']['Utf8']['parse'](a);

     a = CryptoJS['DES']['decrypt']({
            'ciphertext': CryptoJS['enc']['Hex']['parse'](data)
        }, b, {
            'iv': a,
            'mode': CryptoJS['mode']['ECB'],
            'padding': CryptoJS['pad']['Pkcs7']
        })['toString'](CryptoJS['enc']['Utf8']);
     return JSON.parse(a['substring'](0x0, (a['lastIndexOf']('}') + 1)));
}

console.log(shell('FE1DA579E25B958F6CAFE43DA2082C6575B22413C2DA73033E501C3CCFA7B4A50C04FBD3CE45551DA20A5CBFCF0873A77DE003D39478794B1BAAC4724D50D70D104D83350C79D5D4997362C1AA7E23D775C226888033CCA03202BFF0BABA5CA2D3144DC41A3BD05BF4B73A2762E9DFA8333CF1EECC7B83A65F9E89DCEEE241E77A711E9A4225BD5F0E3E410AE35213312A9FBC41523195FFA65504B224566F917D0D264C9A4C643F8DC393F9719C8F70083DAF9AED205FF767EEDFF343550F6969EDE2E202092361C7BF875BD9177EC9F154256F38D4F39B2AFAE9296BE85BC35FDEE71DF0EA643B806BF7C3AF29240E9FF1535024954CBB8ED8CE03ACF06AB7F323065AAC678C9454AC751D9AA2DD8A1EC97F6B112126F6DE3FD17997B2B5B23D19B046974E07AD04F0613CD7D14F71F3867E6B3F17468C9C4B17FF9BF70B7F7EF076641AADE6B18635693996B01EB40B716D08832FD8A2761A6CAC674EF4B71BEAEAA764D3ABC8DBBFB13EB44A6F0599702EB19BA866794D6DE4642C7B83A65F9E89DCE1D95C69BD2389068225BD5F0E3E410AE35213312A9FBC41523195FFA65504B22A9D4C71E008F7D84A4C643F8DC393F9719C8F70083DAF9AED205FF767EEDFF343550F6969EDE2E208B7354D0DC1583DD9177EC9F154256F38D4F39B2AFAE9296BE85BC35FDEE71DF0EA643B806BF7C3AF29240E9FF1535024954CBB8ED8CE03ACF06AB7F323065AA9FC2CE877C4D8AE57A7FB6C35A99CDC8FED7E3875BBA097D6FEE2A3A8E1CB40488EACC3D0FD781767D14F71F3867E6B327DE7335C2FA40D5CEB46F3BDD936B2EAADE6B1863569399F17BF8C15159EE1FE531B08D3A36D21DABA5CA2D3144DC41517FF0BEBD923E2BAA6B2D575FA00A08C7B83A65F9E89DCE00A3344D5E630234225BD5F0E3E410AE35213312A9FBC41523195FFA65504B22FA1A5059BAD7DAFFFE3771C70A41812645595F58FB0734AA01D956E4686C304B45C83F83DAEDC65B0682A48DDE7FF1DAC84E1BD8E456B5B540A48A39A106A33EE375B547A4106B9937AFFC097373AF240C514708B31172082FBCFC46FC365E837B30A0FEEB6BFDF2062B21D0C33265BE3D924770863FDE27F81418DE9B7085964A91FCDD0864D1A8FFDB7C3675F9C86DDB2C1727D2E6DBE07186D05F61E8B6F5AF1F8F4A4B5AE98C329C84C0D36FF4EC89AE45E1FEF4FF9CA525F1FE9189DB7E2F2F1DB0F140F42F2D7F2E122685A22A5AA58A66DBBD6DA76388B8D05C42768E5592AAB13C8D36ECC6FC955FAFCF70FA49ABEF8EEC4528BF0B7A34DC57E8891B1E84B8008B87264CF5B99719C1F73911D438EC20F5EA287D0023CC6FD914A2D16653F69E8342FCCF3EF696C4718CC2D422D08B933A2BBBEA2DFFC318842651E0CD21812482D7E5C12D3E330F2E6FA9148CC3DC6ACD23CAE614B2EDBD1C2D68C58D706C911CEA9BA53186DA6ADDEB42C8D34B350B83D83BF1AA4037B8833C2081AB168C5DCACCE35EAAD93BE45ACCDB6BD04A8DA0D5AD815365C8290F1F7B63B039FB95DE5FE6A5D22B14BA1FD81B1BE875F585978230E0BCEB43336028AAB162C34DE053E3F7600E071C832FC01E023792F41C520FC2F0FBAC2A5951EC829A956327850F601EAD5406B0049D6EF29067A066E4D83EFF045A3B6688D69E11415E44334FB1E3FA7358EA81A5574B2F3A2E43BA9FC9FCD2BDD95632253677F182A3BF3D5228DBAAB236C6CE22F74B23CFC2361291DFE65A5C4EB058C295EA752BB24BEE6BD603728536C9B018EB49A82539E35A2129D918C888436CD53713C16A2A850345A2E9BC93663251C2E52EDE034DE800454C1E1681F1CA7CFC344B6D84100C2C28DB73F19935CD5E310227FC6254D9B336DB9B4FB6168295AB6966226E6DB40BADC46A31380B410EDD4A28A188FEE5842F9AC03B9C367D50C04DF0AB69772A6078C0792D3987F4B96BFF50AED8369A29A0DC3D5EEB3B00032367F760A7396327850F601EAD54B6C12AF9B8C0EA51ED63CA2CF4E51F5A3B6688D69E11415E2FF83B766FF43403EA81A5574B2F3A2E753CB21C3F32A2265632253677F182A3B34F830D3201E222C6CE22F74B23CFC27164A774E35F626EC1CD16FC9400DA6795A5F102470C227BFF4F2F51750C0839A474951E3BF70187966B0FE78BA0FA24D960CD25EACCF006DA8E6093B20BDDA93D190F4C4D85E631342004CDB0D19EC80F6750A515CBB502069EBC266919445B070358A663DA548EBDBAD4DCC26E20209173353512A9786F752D4BB2057177ECF667D30B3093333374E728C47EFCBDA5F0873A77DE003D39A9A73463DCCB3831D50D70D104D83350C0133AC071A8034A9E9CEF76C31041CA5095CF41DC33FC269590028249C49889BF7001CC02E8F3891EC0C3A0536144B8D10112F8445F3CA33D75D128F3F3E373B78C97E401E4DDC194737CC09A42DE9C0390BD2CB842276FD0E8B1C9CE7204187017485A09646EC8ECF28ADE76EE08E18170C0B27828056B417FE611FFDC4D7A095FFA494E7A3C48227007C5C7BABA1BC2CA0F2299FB31EECFCAD68A2F0DCF834B19C6B7379517B1FA2ADDF717891DFF70372E6A4EF853740454ABB531113DE8ADC87DB213BBEFC0DF9F4BB5626FD223C2BF2ADB4300DAB8F263323744862B7DBC5E1BD7DC8F827A32B07AAE52CE0AAD1F1B074C9A96D02A9BC37DBB2E7D9673C34DE053E3F7600E39F22D49EC2D1DDABD7767340268AB52D9372A7278A54FE06327850F601EAD54618665B76DEBD66EBF584DB16E529DD03B6688D69E11415EA26C6E539F6AFD3CEA81A5574B2F3A2E3B0EC82CD1C913985632253677F182A3A01C164D9FFD353DC6CE22F74B23CFC27164A774E35F626EC1CD16FC9400DA6795A5F102470C227BFF4F2F51750C0839F5530814E36FDF6B3675B59E46258FDED960CD25EACCF006DA8E6093B20BDDA93D190F4C4D85E631342004CDB0D19EC80F6750A515CBB502069EBC266919445B31B48D82AAABA94C7F561DA994009F1B1BE627AD95454D17AD4392FB10E0196E95D211D1876BA8EB74E728C47EFCBDA5F0873A77DE003D39B29729807BE9B717D50D70D104D83350386D53638BD241C1729B5273F35035157D2D8B9C409F1463E9984DC8EE9F0803DDDA49957A45C18A5E08FB309D1EB12D92F64C1155531688BAB5A6C01E0805925592AAB13C8D36EC6820F965A023CF6211A6D668200A307E73279CB00F9C26E31E84B8008B87264C53BE746448E222D4D438EC20F5EA287D67674B0BB1169FAB698881A6E223AD468170C0B27828056B417FE611FFDC4D7ACE009DE61E4A80F82130310B362FEAD5C2CA0F2299FB31EECFCAD68A2F0DCF834B19C6B7379517B1FA2ADDF717891DFF70372E6A4EF853740454ABB531113DE89B029788B4253668DF9F4BB5626FD2238DCF3F9941951521409879C4B90C0767812B157DF27DAF6732B07AAE52CE0AAD1F1B074C9A96D02AF16C776C29B631D165102D7D19B61FAC0B0DC4E394D0E97AF8FF5E298C40DEBAF58D71FA75E595CB5AA58A66DBBD6DA7209DA996F0FF3A0B5592AAB13C8D36EC34DD0FEFED1B10BBFB35A08D983AD751EE1F958360E1FCFF1E84B8008B87264C85BDED97DDA457A3D438EC20F5EA287D83A8ADD78787D10395A5F102470C227BFF4F2F51750C08390F069D0E92340207138EC6F072F84431D960CD25EACCF006DA8E6093B20BDDA93D190F4C4D85E631342004CDB0D19EC80F6750A515CBB502069EBC266919445B61751251DFA39B92BDBAD4DCC26E2020952FC51845CB574205C78467AEA3B4DD3BE60FC0C386F79C74E728C47EFCBDA5F0873A77DE003D3993944CECFCFD7130D50D70D104D8335020AC12AE3FD7A07BF00E6A24E167120000F412649961B83655DDFEB30458D6CD0F34850C04438DA274EF4B71BEAEAA7664D111EE55A420CE3A36FD3D7C301D409167B0849931DC6993E60918623053929CAACC3E316A539D9DB03755F464E7335AC9881EE0B57722ADAC4632FD4F6288F511756CC2A28E9CB9822C0B9B1F7F1522D08B933A2BBBEA2DFFC318842651E065DEDB84ACA1EA272D3E330F2E6FA9148CC3DC6ACD23CAE614B2EDBD1C2D68C58D706C911CEA9BA53186DA6ADDEB42C8D34B350B83D83BF1D22DCFD961549B066D34528E135531C661A481998EDE0266B61873FA1BAA5277E838FEB9C3F630A79C2E97923D1F37BF2B14BA1FD81B1BE8BA3ED6BF5CF5458776FAB80506BB118BC34DE053E3F7600EC48A748BD60CF36CC68E76FCBECB2FD09E04FBA6082C1095ABA5CA2D3144DC41CC59405DFEE42DEAB51AAECF8CDA40D7C7B83A65F9E89DCE22DCDA51A91CCCA6225BD5F0E3E410AE11FC168730EACB4523195FFA65504B22C3FBF43184C1C076A4C643F8DC393F9719C8F70083DAF9AED205FF767EEDFF343550F6969EDE2E20329F9D8F8A8DF0099177EC9F154256F38D4F39B2AFAE9296BE85BC35FDEE71DF0EA643B806BF7C3AF29240E9FF1535024954CBB8ED8CE03ACF06AB7F323065AA59B1A5014079ACB29C4F6D65EE99069EF00B9A2D4AF22B514143B3CD3919E7F58B018930732E97077D14F71F3867E6B3CC2BB7BE004054A447730BF543623DA0AADE6B1863569399765B273D3BDEE2FC03724FBCF90EADAF74EF4B71BEAEAA764D3ABC8DBBFB13EBBE7CB96B245419359167B0849931DC69EC73C2F6A2F870079CAACC3E316A539D9DB03755F464E7335AC9881EE0B5772284B1E0D607918F76F511756CC2A28E9CBFEF72094A3D7A8428A4E04916B6AB6D361291DFE65A5C4EB058C295EA752BB24BEE6BD60372853673590D93B6EA8903E35A2129D918C888436CD53713C16A2A850345A2E9BC93663251C2E52EDE034DE800454C1E1681F1CA7CFC344B6D84100C2C28DB73F199350C2B2D1D1CD06F81F02DF29ADCAD7797168E907721D8CF2F7EA6C8248D8E1D814BD03FB619A461A3E5842F9AC03B9C3647E79B2CC4C6A9F159A81F95E6616995F4B96BFF50AED8362E6DEEA1F9FEBCF0399C6F65CECCE9D96327850F601EAD545F82CBC1E5035108BF584DB16E529DD03B6688D69E11415E75C17F0B9328834BEA81A5574B2F3A2E43BA9FC9FCD2BDD95632253677F182A3A98D7340E76EACFDC6CE22F74B23CFC201D956E4686C304B84F7B7D3D85B85B495A5F102470C227BFF4F2F51750C083922AE931AC2C749F619D04819541515DDD960CD25EACCF006DA8E6093B20BDDA93D190F4C4D85E631342004CDB0D19EC80F6750A515CBB502069EBC266919445BD61BBEC4B00763487F561DA994009F1BECB3943799FD4F443DE20B585AC7DCE2A671A98D4AC29E0474E728C47EFCBDA5F0873A77DE003D396A1C2ECA43861A9A96BD3891B1225D0CEC6B84FB9D4DE3BAE7AFFC65E92316EACA66F5DB634F2CDC5E08FB309D1EB12DDC89CC0FB23E5055AD6B6FEB59DDDCC8213EF6B3A21B02827E0AEF4AF6A7DD3273B29307755E797085AF3F27D2FA66A43C3518BD845197948B964A961B3183D862ED2EC1E248F9F40380175214FAA3E40682A48DDE7FF1DAC84E1BD8E456B5B5CBBA705CE3C57E17E375B547A4106B9937AFFC097373AF240C514708B31172082FBCFC46FC365E837B30A0FEEB6BFDF2062B21D0C33265BE00D417DA1C3387475ACB794D877A00B02C9377A408AA9748D570BCEA5206E2460085357796603A197186D05F61E8B6F5AF1F8F4A4B5AE98C89A24EE55333709889AE45E1FEF4FF9C9A8B27272E6F4E5F0395CA82AF3277CDB73B3336A7234549701E50F46CDAEDCF5095CF41DC33FC268A31A2CF0CDF1E7F29EA4FACCD3755005CFD326F1C687B937D4515F63C9B8F083D75D128F3F3E37373B6E23C2093C21694737CC09A42DE9C3317F423DAA24090D0E8B1C9CE720418C1CD16FC9400DA670F2972B936A93B7D8170C0B27828056B417FE611FFDC4D7ACE009DE61E4A80F807C19AAFF5705773C2CA0F2299FB31EECFCAD68A2F0DCF834B19C6B7379517B1FA2ADDF717891DFF70372E6A4EF8537490B383DDD86763D4888E7F4CB339E71C141014421AA51EEA22D605F653F8309825C77FF053AFBB20E5D093CA2CBA151D32B07AAE52CE0AAD1F1B074C9A96D02ACF22CA1462C14E2265102D7D19B61FAC0C01FAAB15D28FC91908706F6C1A6D07DF9EA032EB3159BB04CCE2D2036B693F8096534B8BD1FF81FE3512D3208D1DA3A8F77F05764FDB37EDA3BD1ED9434858861480F4CDF6555D109A1C90E52BC00ECC80A408779B48A7EF98BF30E3EC6185275791910EF2F288E4307514ED115FBC22D08B933A2BBBEA2DFFC318842651E0B0203954133E59B12D3E330F2E6FA9148CC3DC6ACD23CAE614B2EDBD1C2D68C58D706C911CEA9BA53186DA6ADDEB42C8D34B350B83D83BF1D22DCFD961549B06E729D0C84A6AC1FEC6BCC71A2ECF23C4F5850CC14FA0B1ADB0D519E714A55B0CF860D1B3037A40532B14BA1FD81B1BE86360A50BCF54F14A4C66479C500F248BC34DE053E3F7600E7DD4CAE36A1D76106BBACC098C36719474EF4B71BEAEAA76967238610B784F43E14950FF2353D4C69167B0849931DC69EC1ED99A917FF278225BD5F0E3E410AE11FC168730EACB4523195FFA65504B228577E6702B454803FE3771C70A418126996066FBF5BF82947C0EFA582357AFAA0380175214FAA3E40682A48DDE7FF1DAC84E1BD8E456B5B5DDFF646C03EB7CA6E375B547A4106B9937AFFC097373AF240C514708B31172082FBCFC46FC365E837B30A0FEEB6BFDF2062B21D0C33265BE00D417DA1C33874739D5016D70507EB96065DEE66F3C5AD3FE6A52C886AC0856765ED7CF81CDC1497186D05F61E8B6F5AF1F8F4A4B5AE98C00D1EA70B63D684389AE45E1FEF4FF9CEB7A7CFF98E37940D343D0873CB051FC84BC84656AE46DD47F6AFC670750F9D2814092DD2446042F68F4D3458A8CE5F72C2CBD998CE4697A9CAACC3E316A539DF005719065C45ED25AC9881EE0B57722BD7BE8CA467C5153723D8061054881A8C8A1591052F9801719C8F70083DAF9AED205FF767EEDFF343550F6969EDE2E200A8DA66A394CAD109177EC9F154256F38D4F39B2AFAE9296BE85BC35FDEE71DF0EA643B806BF7C3AF29240E9FF1535024954CBB8ED8CE03A5B7B0064694E28BA44D9E0E21FDBA361F95B51E6EC1C3F7B17195756EE7CC2532B8583B79371EABBC131E136B306883D7D14F71F3867E6B3C3C5F18ACC5181524DDE785A37DC5D59AADE6B18635693996CAB1030ADFCC4E7DED525AD9E793A21B1D3BB3E73D06969D719B0D4DB4A9F6BBB1308F51E37AB27ABA5CA2D3144DC4166F22A61DF1F510EF3C292C43C830902C7B83A65F9E89DCE135AB69D5D7DEBB2EA81A5574B2F3A2EFD37F514F639C6825632253677F182A3BF3D5228DBAAB236C6CE22F74B23CFC2361291DFE65A5C4EB058C295EA752BB24BEE6BD603728536F05C4A54A10403AEE35A2129D918C888436CD53713C16A2A850345A2E9BC93663251C2E52EDE034DE800454C1E1681F1CA7CFC344B6D84107C72A8AB51766254115C3206B22E4A2A5F656C50DB2A3DCDB1CFE9CC5F76DF74FFBA900AFF3D1D04F4959BE14C4A9BAFE5842F9AC03B9C36043146766FBB39B00798FED7F9C55D32F4B96BFF50AED8360583109CE59F8717E5C915B0463ED5AD84BC84656AE46DD4E4D49C51BD1C4CC56647DF35A84F9A8668F4D3458A8CE5F7E6E369EFB9FB94769CAACC3E316A539DE4772811AFA765735AC9881EE0B57722D1AC0F4A502C4075F511756CC2A28E9CB9822C0B9B1F7F1522D08B933A2BBBEA2DFFC318842651E0F6BD6CCFA0FD5E272D3E330F2E6FA9148CC3DC6ACD23CAE614B2EDBD1C2D68C58D706C911CEA9BA53186DA6ADDEB42C8D34B350B83D83BF1D22DCFD961549B06C4ED3C0DD1DB77F07EE066BE6D0BDA4F702A353494FEF792AE6CBC645EE1D6CCB67194EB5D8AF2EA2B14BA1FD81B1BE836A8BD49CCC86E34CBE13A6D0D5611D1C34DE053E3F7600EF9ACB2C7BF5BB8782CD2FD1D5BAD81A95095CF41DC33FC2630D722E4602390C8CC50161E26437A92A378CC6D086A65813746BBE919E88E5573B29307755E797085AF3F27D2FA66A42BD5449018956B928B964A961B3183D834AC20A259C021CF0380175214FAA3E40682A48DDE7FF1DAC84E1BD8E456B5B53F639933BBD4FBF9E375B547A4106B9937AFFC097373AF240C514708B31172082FBCFC46FC365E837B30A0FEEB6BFDF2062B21D0C33265BE18261B8E4CC905C6C309AC95B24EF3ED4FA1601102277389EBDA8909CF9087D1D31B1255F86DD1EF7186D05F61E8B6F5AF1F8F4A4B5AE98C65EC500F047C796889AE45E1FEF4FF9C45B0FF37C52B8990C62D189DDB9D677051933A9D81B421B75E08FB309D1EB12D9CD9D0EC49D93AE7AD6B6FEB59DDDCC8B4E86D6227E465FFD92876D5975C991F0B7A34DC57E8891B1E84B8008B87264CC715175D6FA39F8DD438EC20F5EA287D0023CC6FD914A2D16653F69E8342FCCF3EF696C4718CC2D422D08B933A2BBBEA2DFFC318842651E06E2058033593EA1E2D3E330F2E6FA9148CC3DC6ACD23CAE614B2EDBD1C2D68C58D706C911CEA9BA53186DA6ADDEB42C8D34B350B83D83BF1AA4037B8833C20812FD511F6E7708AB6E642B659A8C1A8C67EE54BD5226792B83655F4143EE67ADDD80688676ADD85F92B14BA1FD81B1BE875F585978230E0BC40B50618461A2DB0C34DE053E3F7600EB82B32BB4D8B2C6F1217232C136FF664287F5262E7F1E8545AA58A66DBBD6DA7209DA996F0FF3A0B5592AAB13C8D36EC7CCDBE3F181645E49C0649030ADFE00A98131D9C9840D8D718D78E4E2BD446D2B767E530A29AE41BCCC872FEBD6F3A41E74E811AAA70D10CD10384225FCA18DCD04951949DCBAABAD205FF767EEDFF34C79D5D4997362C1A4F97D32A66A4636B9177EC9F154256F38D4F39B2AFAE9296BE85BC35FDEE71DF0EA643B806BF7C3AF29240E9FF1535024954CBB8ED8CE03A5B7B0064694E28BA701E6FFEEE5F06F22C4905D31832AD3CE10AAD8E7BEACEC51AE2380D6AB765C0F3D2364BA05D6C1C7D14F71F3867E6B36B6BB95CF7CE0922556B6A823968D090AADE6B18635693997135A5D802BA81759DF10C4979BC7F855E08FB309D1EB12D79FF9976C0966667AD6B6FEB59DDDCC892E901D4787D3FFC5A4AEFEE83E98C82CBFB2C4A4F0481EC1E84B8008B87264CD7053BF430AF30B5D438EC20F5EA287D83A8ADD78787D10395A5F102470C227BFF4F2F51750C08399925B540368FDA58D5A29CE409F699B2D960CD25EACCF006DA8E6093B20BDDA93D190F4C4D85E631342004CDB0D19EC80F6750A515CBB502069EBC266919445B712819CAAE06807B7F561DA994009F1B6ACAECE214B232BE644A965BB6DE8A21F258E13BA87805832C78DB2035C101C0BC15888C7564BE4CE28C023C8632BE53F60DB786A91F3467'))
