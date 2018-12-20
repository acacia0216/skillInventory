(function()
{
    return function()
    {
        if (!this._is_form)
            return;
        
        this.on_create = function()
        {
            // Declare Reference
            var obj = null;
            
            if (Form == this.constructor) {
                this.set_name("form_search");
                this.set_classname("form_search");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,700);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_userList", this);
            obj._setContents("<ColumnInfo><Column id=\"userNo\" type=\"STRING\" size=\"256\"/><Column id=\"userName\" type=\"STRING\" size=\"256\"/><Column id=\"userId\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_search", this);
            obj._setContents("<ColumnInfo><Column id=\"condition\" type=\"STRING\" size=\"256\"/><Column id=\"keyword\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"maritalState\" type=\"STRING\" size=\"256\"/><Column id=\"age\" type=\"STRING\" size=\"256\"/><Column id=\"certificate\" type=\"STRING\" size=\"256\"/><Column id=\"career\" type=\"STRING\" size=\"256\"/><Column id=\"education\" type=\"STRING\" size=\"256\"/><Column id=\"technology\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_result", this);
            obj._setContents("<ColumnInfo><Column id=\"userNo\" type=\"STRING\" size=\"256\"/><Column id=\"userName\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"company\" type=\"STRING\" size=\"256\"/><Column id=\"career\" type=\"STRING\" size=\"256\"/><Column id=\"address\" type=\"STRING\" size=\"256\"/><Column id=\"education\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Grid("Grid01", "absolute", "20.61%", "143", null, "448", "20.12%", null, this);
            obj.set_taborder("3");
            obj.set_binddataset("ds_result");
            obj.set_autofittype("col");
            obj.set_visible("false");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"39\"/><Column size=\"80\"/><Column size=\"77\"/><Column size=\"129\"/><Column size=\"80\"/><Column size=\"40\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"이름\"/><Cell col=\"1\" text=\"성별\"/><Cell col=\"2\" text=\"현재회사\"/><Cell col=\"3\" text=\"경력\"/><Cell col=\"4\" text=\"주소\"/><Cell col=\"5\" text=\"최종학력\"/><Cell col=\"6\" text=\"열람\"/></Band><Band id=\"body\"><Cell text=\"bind:userName\"/><Cell col=\"1\" text=\"bind:gender\"/><Cell col=\"2\" text=\"bind:company\"/><Cell col=\"3\" text=\"bind:career\"/><Cell col=\"4\" text=\"bind:address\"/><Cell col=\"5\" text=\"bind:education\"/><Cell col=\"6\" displaytype=\"button\" text=\"보기\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Grid("Grid00", "absolute", "20.61%", "142", null, "449", "20.12%", null, this);
            obj.set_taborder("7");
            obj.set_binddataset("ds_userList");
            obj.set_autofittype("col");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"40\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"번호\"/><Cell col=\"1\" text=\"이름\"/><Cell col=\"2\" text=\"아이디\"/><Cell col=\"3\" displaytype=\"normal\" text=\"열람\"/></Band><Band id=\"body\"><Cell text=\"bind:userNo\"/><Cell col=\"1\" text=\"bind:userName\"/><Cell col=\"2\" text=\"bind:userId\"/><Cell col=\"3\" displaytype=\"button\" text=\"보기\"/></Band></Format></Formats>");
            this.addChild(obj.name, obj);

            obj = new Button("btn_search", "absolute", "69.24%", "104", null, "33", "21.19%", null, this);
            obj.set_taborder("5");
            obj.set_text("검색");
            this.addChild(obj.name, obj);

            obj = new Combo("Combo00", "absolute", "31.64%", "105", null, "32", "60.74%", null, this);
            this.addChild(obj.name, obj);
            var Combo00_innerdataset = new Dataset("Combo00_innerdataset", this.Combo00);
            Combo00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">userName</Col><Col id=\"datacolumn\">이름</Col></Row><Row><Col id=\"codecolumn\">userId</Col><Col id=\"datacolumn\">아이디</Col></Row></Rows>");
            obj.set_innerdataset(Combo00_innerdataset);
            obj.set_taborder("4");
            obj.set_value("userName");
            obj.set_text("이름");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");

            obj = new Edit("Edit02", "absolute", "40.04%", "105", null, "31", "31.64%", null, this);
            obj.set_taborder("6");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "22.95%", "110", null, "23", "69.73%", null, this);
            obj.set_taborder("1");
            obj.set_text("상세검색(F5)");
            obj.style.set_align("center");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "20.02%", "96", null, "294", "20.02%", null, this);
            obj.set_taborder("2");
            obj.style.set_background("#ffffffff");
            obj.style.set_border("1 solid #385d8aff");
            obj.set_visible("false");
            this.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "0.33%", "50", null, "35", "0.33%", null, this.Div00);
            obj.set_taborder("47");
            obj.style.set_border("1 solid #385d8aff");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "0.33%", "2", null, "44", "0.33%", null, this.Div00);
            obj.set_taborder("48");
            obj.style.set_border("1 solid #385d8aff");
            this.Div00.addChild(obj.name, obj);
            obj = new Button("Button00", "absolute", "82.19%", "7", null, "33", "1.63%", null, this.Div00);
            obj.set_taborder("49");
            obj.set_text("검색");
            obj.style.set_image("URL('Img::img_LF_search.png')");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "0.33%", "50", null, "35", "90.03%", null, this.Div00);
            obj.set_taborder("50");
            obj.set_text("성별");
            obj.style.set_border("1 solid #385d8aff");
            obj.style.set_align("center");
            this.Div00.addChild(obj.name, obj);
            obj = new Radio("Radio00", "absolute", "11.44%", "53", null, "35", "43.46%", null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            var Radio00_innerdataset = new Dataset("Radio00_innerdataset", this.Div00.Radio00);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">남</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">여</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">상관없음</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            obj.set_taborder("51");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("2");
            obj.set_direction("vertical");
            obj.set_index("2");
            obj = new Static("Static06", "absolute", "0.33%", "254", null, "35", "0.33%", null, this.Div00);
            obj.set_taborder("52");
            obj.style.set_border("1 solid #385d8aff");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "0.33%", "220", null, "35", "0.33%", null, this.Div00);
            obj.set_taborder("53");
            obj.style.set_border("1 solid #385d8aff");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "0.33%", "152", null, "35", "0.33%", null, this.Div00);
            obj.set_taborder("68");
            obj.style.set_border("1 solid #385d8aff");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static08", "absolute", "0.33%", "186", null, "35", "0.33%", null, this.Div00);
            obj.set_taborder("54");
            obj.style.set_border("1 solid #385d8aff");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "0.33%", "84", null, "35", "0.33%", null, this.Div00);
            obj.set_taborder("55");
            obj.style.set_border("1 solid #385d8aff");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static10", "absolute", "0.33%", "84", null, "35", "90.03%", null, this.Div00);
            obj.set_taborder("56");
            obj.set_text("결혼여부");
            obj.style.set_border("1 solid #385d8aff");
            obj.style.set_align("center");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "0.33%", "186", null, "35", "90.03%", null, this.Div00);
            obj.set_taborder("57");
            obj.set_text("자격증");
            obj.style.set_border("1 solid #385d8aff");
            obj.style.set_align("center");
            this.Div00.addChild(obj.name, obj);
            obj = new Radio("Radio01", "absolute", "11.44%", "89", null, "28", "43.3%", null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            var Radio01_innerdataset = new Dataset("Radio01_innerdataset", this.Div00.Radio01);
            Radio01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">미혼</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">기혼</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">상관없음</Col></Row></Rows>");
            obj.set_innerdataset(Radio01_innerdataset);
            obj.set_taborder("58");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("2");
            obj.set_direction("vertical");
            obj.set_index("2");
            obj = new Edit("Edit01", "absolute", "11.44%", "157", null, "25", "73.69%", null, this.Div00);
            obj.set_taborder("59");
            obj.set_inputtype("number");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static12", "absolute", "27.78%", "157", null, "26", "68.63%", null, this.Div00);
            obj.set_taborder("60");
            obj.set_text("년");
            obj.style.set_align("center");
            this.Div00.addChild(obj.name, obj);
            obj = new Combo("Combo01", "absolute", "32.68%", "157", null, "26", "55.23%", null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            var Combo01_innerdataset = new Dataset("Combo01_innerdataset", this.Div00.Combo01);
            Combo01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">이상</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">이하</Col></Row></Rows>");
            obj.set_innerdataset(Combo01_innerdataset);
            obj.set_taborder("61");
            obj.set_value("0");
            obj.set_text("이상");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_index("0");
            obj = new Static("Static13", "absolute", "0.33%", "220", null, "35", "90.03%", null, this.Div00);
            obj.set_taborder("62");
            obj.set_text("최종학력");
            obj.style.set_border("1 solid #385d8aff");
            obj.style.set_align("center");
            this.Div00.addChild(obj.name, obj);
            obj = new Radio("Radio02", "absolute", "11.44%", "225", null, "27", "27.29%", null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            var Radio02_innerdataset = new Dataset("Radio02_innerdataset", this.Div00.Radio02);
            Radio02_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">고졸</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">초대졸</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">대졸</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">대학원</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">상관없음</Col></Row></Rows>");
            obj.set_innerdataset(Radio02_innerdataset);
            obj.set_taborder("63");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("4");
            obj.set_direction("vertical");
            obj.set_index("4");
            obj = new Static("Static04", "absolute", "0.33%", "254", null, "35", "90.03%", null, this.Div00);
            obj.set_taborder("64");
            obj.set_text("보유기술");
            obj.style.set_border("1 solid #385d8aff");
            obj.style.set_align("center");
            this.Div00.addChild(obj.name, obj);
            obj = new Radio("Radio03", "absolute", "11.44%", "261", null, "22", "26.8%", null, this.Div00);
            this.Div00.addChild(obj.name, obj);
            var Radio03_innerdataset = new Dataset("Radio03_innerdataset", this.Div00.Radio03);
            Radio03_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">Java</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">Python</Col></Row><Row><Col id=\"codecolumn\">2</Col><Col id=\"datacolumn\">C</Col></Row><Row><Col id=\"codecolumn\">3</Col><Col id=\"datacolumn\">상관없음</Col></Row><Row><Col id=\"codecolumn\">4</Col><Col id=\"datacolumn\">기타</Col></Row></Rows>");
            obj.set_innerdataset(Radio03_innerdataset);
            obj.set_taborder("65");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("3");
            obj.set_direction("vertical");
            obj.set_index("3");
            obj = new Edit("Edit00", "absolute", "69.44%", "259", null, "25", "9.15%", null, this.Div00);
            obj.set_taborder("66");
            obj.set_enable("false");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "0.33%", "118", null, "35", "0.33%", null, this.Div00);
            obj.set_taborder("67");
            obj.style.set_border("1 solid #385d8aff");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static14", "absolute", "0.33%", "118", null, "35", "90.03%", null, this.Div00);
            obj.set_taborder("69");
            obj.set_text("나이");
            obj.style.set_border("1 solid #385d8aff");
            obj.style.set_align("center");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "0.33%", "152", null, "35", "90.03%", null, this.Div00);
            obj.set_taborder("70");
            obj.set_text("경력");
            obj.style.set_border("1 solid #385d8aff");
            obj.style.set_align("center");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("Edit02", "absolute", "11.44%", "190", null, "28", "68.46%", null, this.Div00);
            obj.set_taborder("71");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("Edit03", "absolute", "11.44%", "121", null, "28", "81.21%", null, this.Div00);
            obj.set_taborder("72");
            obj.set_inputtype("number");
            obj.set_maxlength("2");
            this.Div00.addChild(obj.name, obj);
            obj = new Static("Static16", "absolute", "19.44%", "121", null, "28", "76.8%", null, this.Div00);
            obj.set_taborder("73");
            obj.set_text("~");
            obj.style.set_align("center");
            this.Div00.addChild(obj.name, obj);
            obj = new Edit("Edit04", "absolute", "23.69%", "121", null, "28", "68.46%", null, this.Div00);
            obj.set_taborder("74");
            obj.set_inputtype("number");
            obj.set_maxlength("2");
            this.Div00.addChild(obj.name, obj);

            obj = new Static("Static00", "absolute", "31.93%", "30", null, "49", "33.11%", null, this);
            obj.set_taborder("8");
            obj.set_text("이력 조회");
            obj.style.set_align("center");
            obj.style.set_font("bold 18 Dotum");
            this.addChild(obj.name, obj);

            obj = new Button("btn_detail", "absolute", "20.7%", "107", null, "29", "76.27%", null, this);
            obj.set_taborder("0");
            obj.set_tooltiptext("상세검색");
            obj.set_hotkey("F5");
            obj.style.set_image("URL('Img::btn_MDI_list_O.png')");
            obj.style.set_background("0");
            obj.style.set_border("0 solid #999999ff");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 294, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("2");
            		p.style.set_background("#ffffffff");
            		p.style.set_border("1 solid #385d8aff");
            		p.set_visible("false");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 700, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("form_search");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("form_search.xfdl", function() {
        //온로드
        this.form_onload = function(obj,e)
        {
        	this.Grid00.set_visible(true);
        	this.Grid01.set_visible(false);
        	this.transaction("searchList","http://localhost:8080/nexacro-egov_skill/searchAll.do",
        	"","ds_userList=output1","","");
        }
        //콜백
        this.fnCallback = function(){
        	trace("검색창 트랜잭션 이후 콜백");
        	this.Grid00.set_visible(false);
        	this.Grid01.set_visible(true);
        }

        //기본 그리드 유저리스트 셀 클릭시
        this.onCellClick = function(obj,e)
        {
        	var nRow = this.Grid00.currentrow;
        	var userName = this.ds_userList.getColumn(nRow,"userName");
        	if(this.Grid00.getCellPos() == 3){
        		//alert(userName+"의 정보 열람");
        		//alert(this.ds_userList.getColumn(nRow,"userNo"));
        		application.gb_searchUser = this.ds_userList.getColumn(nRow,"userNo");
        		//this.Static02.set_value(application.gb_searchUser); 왜안먹음?;;
        		//alert(application.gb_searchUser);
        		this.go("Base::form_view.xfdl");
        	}else{
        		//alert(nRow+"번째 줄 "+userName);
        	}
        }

        //조건검색 버튼 클릭시
        this.Button00_onclick = function(obj,e)
        {
        	this.btn_detail.set_tooltiptext("상세검색");
        	this.Static01.set_visible(true);
        	this.Div00.set_visible(false);
        	
        	//검색조건 데이터 가져오고
        	if(this.Div00.Radio00.text != "상관없음"){
        		var gender = this.Div00.Radio00.text;
        	}
        	if(this.Div00.Radio01.text != "상관없음"){
        		var maritalState = this.Div00.Radio01.text;
        	}
        	if(this.Div00.Radio02.text != "상관없음"){
        		var education = this.Div00.Radio02.text;
        	}
        	if(this.Div00.Radio03.text != "상관없음"){
        		var technology = this.Div00.Radio03.text;
        	}
        	if(this.Div00.Edit03.value != undefined && this.Div00.Edit04.value != undefined){
        		var age = this.Div00.Edit03.value;
        		var ageTo = this.Div00.Edit04.value;
        		age = age+"/"+ageTo;
        	}
        	if(this.Div00.Edit02.value != undefined){
        		var certificate = this.Div00.Edit02.value;
        	}
        	if(this.Div00.Edit01.value != undefined){
        		var career = this.Div00.Edit01.value;
        		var careerState = this.Div00.Combo01.text;
        		career = career+"/"+careerState;
        	}
        	
        	if(technology == "기타"){
        		technology = this.Div00.Edit00.value;
        	}
        	//데이터셋에 담고
        	this.ds_search.setColumn(0,"gender",gender);
        	this.ds_search.setColumn(0,"maritalState",maritalState);
        	this.ds_search.setColumn(0,"age",age);
        	this.ds_search.setColumn(0,"certificate",certificate);
        	this.ds_search.setColumn(0,"career",career);
        	this.ds_search.setColumn(0,"education",education);
        	this.ds_search.setColumn(0,"technology",technology);
        	//트랜잭션
        	alert(this.ds_search.getColumn(0,"career"));
        	alert(this.ds_search.getColumn(0,"age"));
        	this.transaction("searchList","http://localhost:8080/nexacro-egov_skill/conditionalSearch.do",
        	"ds_search=ds_search","ds_result=output1","","fnCallback");
        }
        //단일검색 버튼 클릭시
        this.btn_search_onclick = function(obj,e)
        {
        	//단일검색 데이터 가져오고
        	var condition = this.Combo00.value;
        	var keyword = this.Edit02.value;
        	//데이터셋에 담고
        	this.ds_search.setColumn(0,"condition",condition);
        	this.ds_search.setColumn(0,"keyword",keyword);
        	//트랜잭션
         	this.transaction("searchList","http://localhost:8080/nexacro-egov_skill/conditionalSearch.do",
         	"ds_search=ds_search","ds_result=output1","","fnCallback");
        }

        //엔터 클릭시
        this.onkeydown = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.Button00_onclick();
        	}
        }

        //상세검색 메뉴버튼(F5)
        this.btn_detail_onclick = function(obj,e)
        {
        	var temp = this.btn_detail.tooltiptext;
        	if(temp == "상세검색"){
        		this.btn_detail.set_tooltiptext("닫기");
        		this.Static01.set_visible(false);
        		this.Div00.set_visible(true);
        	}else{
        		this.btn_detail.set_tooltiptext("상세검색");
        		this.Static01.set_visible(true);
        		this.Div00.set_visible(false);
        	}
        	
        }

        //보유기술 기타항목
        this.Div00_Radio03_onitemclick = function(obj,e)
        {
        	var check = this.Div00.Radio03.text;
        	if(check == "기타"){
        		this.Div00.Edit00.set_enable(true);
        	}else{
        		this.Div00.Edit00.set_enable(false);
        	}
        }

        //검색결과 그리드 셀 클릭시
        this.result_onCellClick = function(obj,e)
        {
        	var nRow = this.Grid01.currentrow;
        	var userName = this.ds_result.getColumn(nRow,"userName");
        	if(this.Grid01.getCellPos() == 6){
        		//alert(userName+"의 정보 열람");
        		//alert(this.ds_userList.getColumn(nRow,"userNo"));
        		application.gb_searchUser = this.ds_result.getColumn(nRow,"userNo");
        		alert(this.ds_result.getColumn(nRow,"userName"));
        		//this.Static02.set_value(application.gb_searchUser); 왜안먹음?;;
        		//alert(application.gb_searchUser);
        		this.go("Base::form_view.xfdl");
        	}else{
        		//alert(nRow+"번째 줄 "+userName);
        	}
        }

        //검색 엔터입력
        this.search_onchanged = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.btn_search_onclick();
        	}
        }

        this.Div00_Static05_onclick = function(obj,e)
        {
        	
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.Grid01.addEventHandler("oncellclick", this.result_onCellClick, this);
            this.Grid00.addEventHandler("oncellclick", this.onCellClick, this);
            this.btn_search.addEventHandler("onclick", this.btn_search_onclick, this);
            this.Edit02.addEventHandler("onkeydown", this.search_onchanged, this);
            this.Div00.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Div00.Static05.addEventHandler("onclick", this.Div00_Static05_onclick, this);
            this.Div00.Radio03.addEventHandler("onitemchanged", this.Div00_Radio03_onitemclick, this);
            this.btn_detail.addEventHandler("onclick", this.btn_detail_onclick, this);

        };

        this.loadIncludeScript("form_search.xfdl");

       
    };
}
)();
