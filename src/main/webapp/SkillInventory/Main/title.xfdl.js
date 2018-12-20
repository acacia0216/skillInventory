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
                this.set_name("title");
                this.set_classname("title");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,89);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize

            
            // UI Components Initialize
            obj = new Static("Static00", "absolute", "5.66%", "26", null, "23", "23.54%", null, this);
            obj.set_taborder("0");
            obj.set_text("김준수 바보");
            obj.style.set_font("bold 12 Dotum");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 1024, 89, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("title");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script

        
        // Regist UI Components Event
        this.on_initEvent = function()
        {

        };

        this.loadIncludeScript("title.xfdl");

       
    };
}
)();
