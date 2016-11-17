
var apiUrl = "http://testwx.nbguohe.top/index.php/guohe/weixin/";




var imgArray = [];

imgArray[1] = "[惊讶]";
imgArray[2] = "[撇嘴]";
imgArray[3] = "[色]";
imgArray[4] = "[发呆]";
imgArray[5] = "[得意]";
imgArray[6] = "[害羞]";
imgArray[7] = "[闭嘴]";
imgArray[8] = "[睡]";
imgArray[9] = "[大哭]";
imgArray[10] = "[尴尬]";
imgArray[11] = "[发怒]";
imgArray[12] = "[调皮]";
imgArray[13] = "[呲牙]";
imgArray[14] = "[微笑]";
imgArray[15] = "[难过]";
imgArray[16] = "[酷]";
imgArray[17] = "[疯了]";
imgArray[18] = "[吐]";
imgArray[19] = "[偷笑]";
imgArray[20] = "[愉快]";
imgArray[21] = "[白眼]";
imgArray[22] = "[傲慢]";
imgArray[23] = "[饥饿]";
imgArray[24] = "[困]";
imgArray[25] = "[惊恐]";
imgArray[26] = "[流汗]";
imgArray[27] = "[憨笑]";
imgArray[28] = "[悠闲]";
imgArray[29] = "[奋斗]";
imgArray[30] = "[疑问]";
imgArray[31] = "[嘘]";
imgArray[32] = "[晕]";
imgArray[33] = "[衰]";
imgArray[34] = "[骷髅]";
imgArray[35] = "[敲打]";
imgArray[36] = "[再见]";
imgArray[37] = "[发抖]";
imgArray[38] = "[爱情]";
imgArray[39] = "[跳跳]";
imgArray[40] = "[猪头]";
imgArray[41] = "[拥抱]";
imgArray[42] = "[蛋糕]";
imgArray[43] = "[闪电]";
imgArray[44] = "[炸弹]";
imgArray[45] = "[刀]";
imgArray[46] = "[足球]";
imgArray[47] = "[便便]";
imgArray[48] = "[咖啡]";
imgArray[49] = "[饭]";


var imgArray2 = [];
imgArray2[1] = "/::O";
imgArray2[2] = "/::~";
imgArray2[3] = "/::B";
imgArray2[4] = "/::|";
imgArray2[5] = "/:8-)";
imgArray2[6] = "/::$";
imgArray2[7] = "/::X";
imgArray2[8] = "/::Z";
imgArray2[9] = "/::’(";
imgArray2[10] = "/::-|";
imgArray2[11] = "/::@";
imgArray2[12] = "/::P";
imgArray2[13] = "/::D";
imgArray2[14] = "/::)";
imgArray2[15] = "/::(";
imgArray2[16] = "/::+";
imgArray2[17] = "/::Q";
imgArray2[18] = "/::T";
imgArray2[19] = "/:,@P";
imgArray2[20] = "/:,@-D";
imgArray2[21] = "/::d";
imgArray2[22] = "/:,@o";
imgArray2[23] = "/::g";
imgArray2[24] = "/:|-)";
imgArray2[25] = "/::!";
imgArray2[26] = "/::L";
imgArray2[27] = "/::>";
imgArray2[28] = "/::,@";
imgArray2[29] = "/:,@f";
imgArray2[30] = "/:?";
imgArray2[31] = "/:,@x";
imgArray2[32] = "/:,@@";
imgArray2[33] = "/:,@!";
imgArray2[34] = "/:!!!";
imgArray2[35] = "/:xx";
imgArray2[36] = "/:bye";
imgArray2[37] = "/:shake";
imgArray2[38] = "/:love";
imgArray2[39] = "/:jump";
imgArray2[40] = "/:pig";
imgArray2[41] = "hug";
imgArray2[42] = "/:cake";
imgArray2[43] = "/:li";
imgArray2[44] = "/:bome";
imgArray2[45] = "/:kn";
imgArray2[46] = "footb";
imgArray2[47] = "/:shit";
imgArray2[48] = "/:coffee";
imgArray2[49] = "/:eat";
imgArray2[50] = "/:rose";
imgArray2[51] = "/:fade";
imgArray2[52] = "/:heart";
imgArray2[53] = "/:break";
imgArray2[54] = "/:gift";
imgArray2[55] = "/:sun";
imgArray2[56] = "/:moon";
imgArray2[57] = "/:strong";
imgArray2[58] = "/:weak";
imgArray2[59] = "/:share";
imgArray2[60] = "/:<L>";
imgArray2[61] = "/:<O>";
imgArray2[62] = "/:<W>";
imgArray2[63] = "/:-b";
imgArray2[64] = "/:dig";
imgArray2[65] = "/:handclap";
imgArray2[66] = "/:&-(";
imgArray2[67] = "/:B-)";
imgArray2[68] = "/:<@";
imgArray2[69] = "/:@>";
imgArray2[70] = "/::-O";
imgArray2[71] = "/:>-|";
imgArray2[72] = "/:P-(";
imgArray2[73] = "/::’|";
imgArray2[74] = "/:X-)";
imgArray2[75] = "/::*";
imgArray2[76] = "/:@x";
imgArray2[77] = "/:8*";
imgArray2[78] = "/:pd";
imgArray2[79] = "/:beer";
imgArray2[80] = "/:basketb";
imgArray2[81] = "/:oo";
imgArray2[82] = "/:showlove";
imgArray2[83] = "/:ladybug";
imgArray2[84] = "/:@)";
imgArray2[85] = "/:jj";
imgArray2[86] = "/:@@";
imgArray2[87] = "/:bad";
imgArray2[88] = "/:lvu";
imgArray2[89] = "/:no";
imgArray2[90] = "/:ok";
imgArray2[91] = "/:cricle";
imgArray2[92] = "/:kotow";
imgArray2[93] = "/:turn";
imgArray2[94] = "/:skip";
imgArray2[95] = "/:oY";
imgArray2[96] = "/:#-O";
imgArray2[97] = "/:hiphot";
imgArray2[98] = "/:kiss";
imgArray2[99] = "/:<&";
imgArray2[100] = "/:&>";


function analysisXML(data){
	var obj = {};
	if(data.message_type == "text"){
		var a = $.parseXML(data.message_value);
		obj.tousername = $(a).find("ToUserName").text();
		obj.fromusername = $(a).find("FromUserName").text();
		obj.createtime = $(a).find("CreateTime").text();
		obj.msgtype = $(a).find("MsgType").text();
		obj.content = $(a).find("Content").text();
		obj.msgid = $(a).find("MsgId").text();
	}
	else if(data.message_type == "image"){
		var a = $.parseXML(data.message_value);
		obj.tousername = $(a).find("ToUserName").text();
		obj.fromusername = $(a).find("FromUserName").text();
		obj.createtime = $(a).find("CreateTime").text();
		obj.msgtype = $(a).find("MsgType").text();
		obj.picurl = $(a).find("PicUrl").text();
		obj.mediaid = $(a).find("MediaId").text();
		obj.msgid = $(a).find("MsgId").text();
	}
	return obj;
}
