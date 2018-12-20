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
                this.set_name("form_main");
                this.set_classname("form_main");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,756);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_user", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"hotkey\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">0</Col><Col id=\"value\">메뉴</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"code\">insert</Col><Col id=\"value\">입력</Col><Col id=\"level\">1</Col></Row><Row><Col id=\"code\">search</Col><Col id=\"value\">조회</Col><Col id=\"level\">1</Col><Col id=\"hotkey\">F2</Col></Row><Row><Col id=\"code\">exit</Col><Col id=\"value\">프로그램 종료</Col><Col id=\"level\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_admin", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/><Column id=\"level\" type=\"STRING\" size=\"256\"/><Column id=\"hotkey\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">0</Col><Col id=\"value\">메뉴</Col><Col id=\"level\">0</Col></Row><Row><Col id=\"code\">search</Col><Col id=\"value\">조회</Col><Col id=\"level\">1</Col><Col id=\"hotkey\">F2</Col></Row><Row><Col id=\"code\">exit</Col><Col id=\"value\">프로그램 종료</Col><Col id=\"level\">1</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Menu("adminMenu", "absolute", "0%", "0", "100%", "48", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("2");
            obj.set_innerdataset("@ds_admin");
            obj.set_idcolumn("code");
            obj.set_captioncolumn("value");
            obj.set_levelcolumn("level");

            obj = new Menu("userMenu", "absolute", "0%", "0", "100%", "48", null, null, this);
            this.addChild(obj.name, obj);
            obj.set_taborder("0");
            obj.set_innerdataset("@ds_user");
            obj.set_captioncolumn("value");
            obj.set_idcolumn("code");
            obj.set_levelcolumn("level");
            obj.set_hotkeycolumn("hotkey");

            obj = new Static("Static00", "absolute", "82.23%", "11", null, "29", "1.66%", null, this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Div("Div00", "absolute", "0%", "48", "100%", "700", null, null, this);
            obj.set_taborder("4");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 700, this.Div00,
            	//-- Layout function
            	function(p) {
            		p.set_taborder("4");

            	}
            );
            this.Div00.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 756, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("form_main");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("form_main.xfdl", function() {
        //온로드
        this.form_onload = function(obj,e)
        {
        	var loginpop = new ChildFrame;
        	loginpop.init("login_popup", "absolute", 0, 0, 400, 400, 0, 0, "Main::form_login.xfdl");
        	loginpop.set_openalign("center middle"); //추가
        	loginpop.showModal(this.getOwnerFrame(),"", this, "popup_callback");
        	//this.form_main.setFocus(true);
        	application.gb_accessState = "";
        }

         this.popup_callback = function()
        {
        	trace("main_popup_callback");
        	if(application.gb_userInfo == ""){
        		application.exit();
        	}else{
        		//alert(application.gb_userInfo + " / " + application.gb_userNo);
        		var userAuth = application.gb_userInfo.substr(-1);
        		//alert(userAuth);
        		//alert(application.gb_userInfo.substr(0,application.gb_userInfo.length-1)+"님 반갑습니다");//alert 지우면 에러..?
        		if(userAuth == 0){//일반 유저일경우
        			//alert("일반 유저");
        			this.adminMenu.set_visible(false);
        			this.userMenu.set_visible(true);
        		}else if(userAuth == 1){//관리자 유저일경우
        			//alert("관리자 유저");
        			this.adminMenu.set_visible(true);
        			this.userMenu.set_visible(false);
        		}else{
        			alert("비정상적인 접속");
        			application.exit();
        		}
        		this.Static00.set_text("'"+application.gb_userInfo.substr(0,application.gb_userInfo.length-1)+"'님 반갑습니다.");
        	}
        }

        //유저메뉴 클릭시
        this.userMenu_onmenuclick = function(obj,e)
        {
        	if(e.id == "insert"){
        		application.gb_accessState = e.id;
        		this.Div00.go("Base::form_view.xfdl");
        	}else if(e.id == "search"){
        		application.gb_accessState = e.id;
        		this.Div00.go("Base::form_search.xfdl");
        	}else if(e.id == "exit"){
        		var exitDialog = new ChildFrame;
        		exitDialog.init("exitDialog_popup", "absolute", 0, 0, 400, 400, 0, 0, "Main::form_exit_dialog.xfdl");
        		exitDialog.set_openalign("center middle"); //추가
        		exitDialog.showModal(this.getOwnerFrame(),"", this, "");
        	}else{
        		alert("에러");
        	}
        }

        //관리자메뉴 클릭시
        this.adminMenu_onmenuclick = function(obj,e)
        {
        	if(e.id == "search"){
        		this.Div00.go("Base::form_search.xfdl");
        	}else if(e.id == "exit"){
        		var exitDialog = new ChildFrame;
        		exitDialog.init("exitDialog_popup", "absolute", 0, 0, 400, 400, 0, 0, "Main::form_exit_dialog.xfdl");
        		exitDialog.set_openalign("center middle"); //추가
        		exitDialog.showModal(this.getOwnerFrame(),"", this, "");
        	}else{
        		alert("에러");
        	}
        }

        //키보드
        this.keydown = function(obj,e)
        {
        	if(e.keycode == 113){
        		this.Div00.go("Base::form_search.xfdl");
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.addEventHandler("onkeydown", this.keydown, this);
            this.adminMenu.addEventHandler("onmenuclick", this.adminMenu_onmenuclick, this);
            this.userMenu.addEventHandler("onmenuclick", this.userMenu_onmenuclick, this);

        };

        this.loadIncludeScript("form_main.xfdl");

       
    };
}
)();
