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
                this.set_name("form_exit_dialog");
                this.set_classname("form_exit_dialog");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,455,245);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_login", this);
            obj._setContents("<ColumnInfo><Column id=\"userId\" type=\"STRING\" size=\"256\"/><Column id=\"userPassword\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_success", this);
            obj._setContents("<ColumnInfo><Column id=\"userNo\" type=\"STRING\" size=\"256\"/><Column id=\"userName\" type=\"STRING\" size=\"256\"/><Column id=\"authority\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "23.96%", "23", null, "58", "22.64%", null, this);
            obj.set_taborder("0");
            obj.set_text("LOG IN");
            obj.style.set_align("center");
            obj.style.set_font("bold 22 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static01", "absolute", "21.98%", "101", null, "25", "56.92%", null, this);
            obj.set_taborder("1");
            obj.set_text("아이디");
            obj.style.set_align("center");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Static("Static02", "absolute", "18.9%", "147", null, "25", "56.92%", null, this);
            obj.set_taborder("2");
            obj.set_text("비밀번호");
            obj.style.set_align("center");
            obj.style.set_font("bold 9 Dotum");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit00", "absolute", "43.08%", "101", null, "25", "23.3%", null, this);
            obj.set_taborder("3");
            this.addChild(obj.name, obj);

            obj = new Edit("Edit01", "absolute", "43.08%", "147", null, "25", "23.3%", null, this);
            obj.set_taborder("4");
            obj.set_password("true");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "50.77%", "188", null, "25", "36.26%", null, this);
            obj.set_taborder("5");
            obj.set_text("로그인");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "64.62%", "188", null, "25", "23.3%", null, this);
            obj.set_taborder("6");
            obj.set_text("취소");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 455, 245, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("form_exit_dialog");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item0","Edit00","value","ds_login","userId");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Edit01","value","ds_login","userPassword");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("form_login.xfdl", function() {
        //온로드
        this.form_onload = function(obj,e)
        {
        	this.Edit00.set_value("admin");
        	this.Edit01.set_value("1234");
        }

        //로그인버튼 클릭시
        this.Button00_onclick = function(obj,e)
        {
        // 	var userId = this.Edit00.text;
        // 	var userPassword = this.Edit01.text;
        	//정보 가지고와서 트랜잭션
        	this.transaction("login","http://localhost:8080/nexacro-egov_skill/main/login.do",
        	"ds_login=ds_login","ds_success=output1","","fnCallback",false,0,false);
        }
        //콜백
        this.fnCallback = function(){
        	trace("로그인 트랜잭션 이후 콜백");
        	var userName = this.ds_success.getColumn(0,"userName");
        	var userNo = this.ds_success.getColumn(0,"userNo");
        	var userAuth = this.ds_success.getColumn(0,"authority");
        	//alert(userName + " / "+userNo+" / "+userAuth);
        	if(userName != undefined){
        		application.gb_userNo = userNo;
        		application.gb_userInfo = userName+userAuth;
        		this.close();
        	}else{
        		alert("아이디와 비밀번호를 확인해주세요");
        	}
        }

        
        //취소버튼 클릭시
        this.Button01_onclick = function(obj,e)
        {
        	//프로그램 종료 대화상자 출력 후 예 누르면 프로그램 종료
        	var exitDialog = new ChildFrame;
        	exitDialog.init("exitDialog_popup", "absolute", 0, 0, 400, 400, 0, 0, "Main::form_exit_dialog.xfdl");
        	exitDialog.set_openalign("center middle"); //추가
        	exitDialog.showModal(this.getOwnerFrame(),"", this, "");
        }

        //아이디에서 엔터
        this.id_enter = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.Edit01.setFocus(true);
        	}
        }

        //비밀번호에서 엔터
        this.password_enter = function(obj,e)
        {
        	if(e.keycode == 13){
        		this.Button00_onclick();
        	}
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.Edit00.addEventHandler("onkeydown", this.id_enter, this);
            this.Edit01.addEventHandler("onkeydown", this.password_enter, this);
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);

        };

        this.loadIncludeScript("form_login.xfdl");

       
    };
}
)();
