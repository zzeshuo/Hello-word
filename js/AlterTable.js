

　　   function selectRow(target,obj,obj2,obj3,obj4,obj5) {
        var sTable = document.getElementById("ServiceListTable")
        for (var i = 1; i < sTable.rows.length; i++) //遍历除第一行外的所有行 
        {
            if (sTable.rows[i] != target) //判断是否当前选定行 
            {
                sTable.rows[i].bgColor = "#ffffff"; //设置背景色 
                sTable.rows[i].onmouseover = resumeRowOver; //增加onmouseover 事件
                sTable.rows[i].onmouseout = resumeRowOut; //增加onmouseout 事件

            }
            else {
                sTable.rows[i].bgColor = "#159add";
                sTable.rows[i].onmouseover = ""; //去除鼠标事件
                sTable.rows[i].onmouseout = ""; //去除鼠标事件
               
                document.getElementById("lb_id").value = obj + "&" + obj2 + "&" + obj3 + "&" + obj4 + "&" + obj5;
                window.returnValue = document.getElementById("lb_id").value;
                window.close();
            }
        }
    }
    //移过时tr的背景色 
    function rowOver(target) {
        target.bgColor = '#eaf7fe';
    }
    //移出时tr的背景色 
    function rowOut(target) {
        target.bgColor = '#ffffff';
    }
    //恢复tr的的onmouseover事件配套调用函数 
    function resumeRowOver() {
        rowOver(this);
    }
    //恢复tr的的onmouseout事件配套调用函数 
    function resumeRowOut() {
        rowOut(this);
    }

   
　　
    function selectRow1(target) {
        var sTable = document.getElementById("ServiceListTable")
        for (var i = 1; i < sTable.rows.length; i++) //遍历除第一行外的所有行 
        {
            if (sTable.rows[i] != target) //判断是否当前选定行 
            {
                sTable.rows[i].bgColor = "#ffffff"; //设置背景色 
                sTable.rows[i].onmouseover = resumeRowOver; //增加onmouseover 事件
                sTable.rows[i].onmouseout = resumeRowOut; //增加onmouseout 事件

            }
            else {
                sTable.rows[i].bgColor = "#159add";
                sTable.rows[i].onmouseover = ""; //去除鼠标事件
                sTable.rows[i].onmouseout = ""; //去除鼠标事件
               
            }
        }
    }