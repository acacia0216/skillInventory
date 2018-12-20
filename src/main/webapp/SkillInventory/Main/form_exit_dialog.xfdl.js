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
                this.set_name("form_login");
                this.set_classname("form_login");
                this.set_titletext("프로그램 종료 알림");
                this._setFormPosition(0,0,300,103);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static01", "absolute", "15%", "9", null, "45", "12.67%", null, this);
            obj.set_taborder("1");
            obj.set_text("프로그램을 종료하시겠습니까?");
            this.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "21%", "60", null, "28", "52.67%", null, this);
            obj.set_taborder("2");
            obj.set_text("예");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "54.33%", "60", null, "28", "19.33%", null, this);
            obj.set_taborder("3");
            obj.set_text("아니오");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 300, 103, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("form_login");
            		p.set_titletext("프로그램 종료 알림");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("form_exit_dialog.xfdl", function() {
        //아니오 클릭
        this.Button01_onclick = function(obj,e)
        {
        	this.close();
        }

        //예 클릭
        this.Button00_onclick = function(obj,e)
        {
        	this.close();
        	application.exit();
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.Button00.addEventHandler("onclick", this.Button00_onclick, this);
            this.Button01.addEventHandler("onclick", this.Button01_onclick, this);

        };

        this.loadIncludeScript("form_exit_dialog.xfdl");

       
    };
}
)();
