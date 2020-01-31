var LODOP; //声明为全局变量

function PreviewMytable(id, type, type2, base_no,status) {
	LODOP = getLodop();
	LODOP.PRINT_INIT("打印控件功能演示_Lodop功能_预览打印表格");
	var strResult = LODOP.FORMAT("TIME:yyyy-mm-dd", new Date()); //返回当前日期；

	LODOP.ADD_PRINT_HTM("98%", "42%", 100, 20, "<span tdata='pageNO' style='font-size:12px' >第##页</span>/<span tdata='pageCount' style='font-size:12px'>共##页</span>");
	LODOP.ADD_PRINT_TEXT("98%", "80%", 100, 20, strResult);
    if(status==8){
    LODOP.ADD_PRINT_TEXT(1, 520, 230, 50,  "草拟合同");
    }else{
	LODOP.ADD_PRINT_BARCODE(1, 520, 230, 50, "128Auto", base_no);
	}
	LODOP.SET_PRINT_STYLEA(1, "ItemType", 1); //每页都输出
	LODOP.SET_PRINT_STYLEA(2, "ItemType", 1); //每页都输出
	LODOP.SET_PRINT_STYLEA(3, "ItemType", 1); //每页都输出

	LODOP.SET_PRINT_STYLEA(2, "FontSize", 9); //日期字体大小

	if (type == 1) {
		LODOP.ADD_PRINT_URL("5%", 65, 645, "85%", "http://localhost:51592/Build/record1/print_jsfht.aspx?id=" + id);
	} else {
		if (type2 == 1) {
			LODOP.ADD_PRINT_URL("5%", 60, 645, "85%", "http://localhost:51592/Build/record1/print_ht_new.aspx?id=" + id);
		} else if (type2 == 2) {
			LODOP.ADD_PRINT_URL("5%", 60, 645, "85%", "http://localhost:51592/Build/record1/print_ht_new_xf.aspx?id=" + id);

		} else {
			LODOP.ADD_PRINT_URL("5%", 60, 645, "85%", "http://localhost:51592/Build/record1/print_hthz.aspx?id=" + id);

		}
	}

	LODOP.PREVIEW();
};