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
                this.set_name("form_insert");
                this.set_classname("form_insert");
                this.set_titletext("New Form");
                this._setFormPosition(0,0,1024,700);
            }

            
            // Object(Dataset, ExcelExportObject) Initialize
            obj = new Dataset("ds_resume", this);
            obj._setContents("<ColumnInfo><Column id=\"resumeNo\" type=\"STRING\" size=\"256\"/><Column id=\"userNo\" type=\"STRING\" size=\"256\"/><Column id=\"userName\" type=\"STRING\" size=\"256\"/><Column id=\"personNo\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"company\" type=\"STRING\" size=\"256\"/><Column id=\"entryDate\" type=\"STRING\" size=\"256\"/><Column id=\"department\" type=\"STRING\" size=\"256\"/><Column id=\"rank\" type=\"STRING\" size=\"256\"/><Column id=\"military\" type=\"STRING\" size=\"256\"/><Column id=\"maritalState\" type=\"STRING\" size=\"256\"/><Column id=\"startDate\" type=\"STRING\" size=\"256\"/><Column id=\"endDate\" type=\"STRING\" size=\"256\"/><Column id=\"invertebrate\" type=\"STRING\" size=\"256\"/><Column id=\"phone\" type=\"STRING\" size=\"256\"/><Column id=\"cellPhone\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"address\" type=\"STRING\" size=\"256\"/><Column id=\"career\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_education", this);
            obj._setContents("<ColumnInfo><Column id=\"educationNo\" type=\"STRING\" size=\"256\"/><Column id=\"schoolName\" type=\"STRING\" size=\"256\"/><Column id=\"eduMajor\" type=\"STRING\" size=\"256\"/><Column id=\"eduState\" type=\"STRING\" size=\"256\"/><Column id=\"eduDate\" type=\"STRING\" size=\"256\"/><Column id=\"resumeNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_certification", this);
            obj._setContents("<ColumnInfo><Column id=\"certificateNo\" type=\"STRING\" size=\"256\"/><Column id=\"certificateName\" type=\"STRING\" size=\"256\"/><Column id=\"takingDate\" type=\"STRING\" size=\"256\"/><Column id=\"resumeNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_company", this);
            obj._setContents("<ColumnInfo><Column id=\"companyNo\" type=\"STRING\" size=\"256\"/><Column id=\"companyName\" type=\"STRING\" size=\"256\"/><Column id=\"startDate\" type=\"STRING\" size=\"256\"/><Column id=\"endDate\" type=\"STRING\" size=\"256\"/><Column id=\"companyWork\" type=\"STRING\" size=\"256\"/><Column id=\"rank\" type=\"STRING\" size=\"256\"/><Column id=\"resumeNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_training", this);
            obj._setContents("<ColumnInfo><Column id=\"trainingNo\" type=\"STRING\" size=\"256\"/><Column id=\"trainingName\" type=\"STRING\" size=\"256\"/><Column id=\"startDate\" type=\"STRING\" size=\"256\"/><Column id=\"endDate\" type=\"STRING\" size=\"256\"/><Column id=\"academyName\" type=\"STRING\" size=\"256\"/><Column id=\"resumeNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_technology", this);
            obj._setContents("<ColumnInfo><Column id=\"technologyNo\" type=\"STRING\" size=\"256\"/><Column id=\"technologyName\" type=\"STRING\" size=\"256\"/><Column id=\"proficiency\" type=\"STRING\" size=\"256\"/><Column id=\"resumeNo\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_project", this);
            obj._setContents("<ColumnInfo><Column id=\"projectNo\" type=\"STRING\" size=\"256\"/><Column id=\"projectName\" type=\"STRING\" size=\"256\"/><Column id=\"startDate\" type=\"STRING\" size=\"256\"/><Column id=\"endDate\" type=\"STRING\" size=\"256\"/><Column id=\"customer\" type=\"STRING\" size=\"256\"/><Column id=\"company\" type=\"STRING\" size=\"256\"/><Column id=\"industry\" type=\"STRING\" size=\"256\"/><Column id=\"application\" type=\"STRING\" size=\"256\"/><Column id=\"part\" type=\"STRING\" size=\"256\"/><Column id=\"model\" type=\"STRING\" size=\"256\"/><Column id=\"operatingSystem\" type=\"STRING\" size=\"256\"/><Column id=\"language\" type=\"STRING\" size=\"256\"/><Column id=\"dbms\" type=\"STRING\" size=\"256\"/><Column id=\"tool\" type=\"STRING\" size=\"256\"/><Column id=\"communication\" type=\"STRING\" size=\"256\"/><Column id=\"other\" type=\"STRING\" size=\"256\"/></ColumnInfo>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_eduState", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"state\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">0</Col><Col id=\"state\">입학</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"state\">중퇴</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"state\">졸업</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"state\">졸업예정</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_techRank", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">0</Col><Col id=\"value\">A</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"value\">B</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"value\">C</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_searchUser", this);
            obj._setContents("<ColumnInfo><Column id=\"userNo\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Tab("Tab00", "absolute", "0%", "7", "100%", "1105", null, null, this);
            obj.set_taborder("0");
            obj.set_tabindex("0");
            obj.set_scrollbars("autoboth");
            obj.style.set_color("#777777ff");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tabpage1", this.Tab00);
            obj.set_text("개인 이력카드");
            this.Tab00.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "5%", "23", null, "50", "5%", null, this.Tab00.tabpage1);
            obj.set_taborder("45");
            obj.set_text("개 인 이 력 카 드");
            obj.style.set_border("3 solid #000000ff");
            obj.style.set_color("#46463dff");
            obj.style.set_align("center");
            obj.style.set_font("bold 22 Dotum");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "4.99%", "87", null, "25", "85.32%", null, this.Tab00.tabpage1);
            obj.set_taborder("0");
            obj.set_text("성명");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("#46463dff");
            obj.style.set_align("center");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "30.23%", "87", null, "25", "54.21%", null, this.Tab00.tabpage1);
            obj.set_taborder("2");
            obj.set_text("주민등록번호");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("#46463dff");
            obj.style.set_align("center");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("personNo", "absolute", "45.69%", "87", null, "25", "30.72%", null, this.Tab00.tabpage1);
            obj.set_taborder("46");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("#46463dff");
            obj.style.set_align("center");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "69.18%", "87", null, "25", "18%", null, this.Tab00.tabpage1);
            obj.set_taborder("4");
            obj.set_text("성별");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("#46463dff");
            obj.style.set_align("center");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "4.99%", "111", null, "25", "85.32%", null, this.Tab00.tabpage1);
            obj.set_taborder("6");
            obj.set_text("소속회사");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("#46463dff");
            obj.style.set_align("center");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("company", "absolute", "14.58%", "111", null, "25", "49.8%", null, this.Tab00.tabpage1);
            obj.set_taborder("47");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("#46463dff");
            obj.style.set_align("center");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "50.1%", "111", null, "25", "37.57%", null, this.Tab00.tabpage1);
            obj.set_taborder("8");
            obj.set_text("입사일");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("#46463dff");
            obj.style.set_align("center");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("entryDate", "absolute", "62.33%", "111", null, "25", "4.89%", null, this.Tab00.tabpage1);
            obj.set_taborder("48");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("#46463dff");
            obj.style.set_align("center");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "4.99%", "135", null, "25", "85.32%", null, this.Tab00.tabpage1);
            obj.set_taborder("10");
            obj.set_text("부서");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("#46463dff");
            obj.style.set_align("center");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("department", "absolute", "14.58%", "135", null, "25", "74.07%", null, this.Tab00.tabpage1);
            obj.set_taborder("49");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("#46463dff");
            obj.style.set_align("center");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static13", "absolute", "25.83%", "135", null, "25", "64.29%", null, this.Tab00.tabpage1);
            obj.set_taborder("12");
            obj.set_text("직위");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("#46463dff");
            obj.style.set_align("center");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static32", "absolute", "23.68%", "159", null, "25", "41.68%", null, this.Tab00.tabpage1);
            obj.set_taborder("61");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("#46463dff");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("rank", "absolute", "35.62%", "135", null, "25", "53.33%", null, this.Tab00.tabpage1);
            obj.set_taborder("50");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("#46463dff");
            obj.style.set_align("center");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "46.58%", "135", null, "25", "41.68%", null, this.Tab00.tabpage1);
            obj.set_taborder("14");
            obj.set_text("병역");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("#46463dff");
            obj.style.set_align("center");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("military", "absolute", "58.22%", "135", null, "25", "29.94%", null, this.Tab00.tabpage1);
            obj.set_taborder("51");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("#46463dff");
            obj.style.set_align("center");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static17", "absolute", "69.96%", "135", null, "25", "17.12%", null, this.Tab00.tabpage1);
            obj.set_taborder("16");
            obj.set_text("결혼");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("#46463dff");
            obj.style.set_align("center");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("marry", "absolute", "82.78%", "135", null, "25", "4.89%", null, this.Tab00.tabpage1);
            obj.set_taborder("52");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("#46463dff");
            obj.style.set_align("center");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static19", "absolute", "4.99%", "159", null, "25", "76.22%", null, this.Tab00.tabpage1);
            obj.set_taborder("18");
            obj.set_text("병역 입대일 ~ 제대일");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("#46463dff");
            obj.style.set_align("center");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("militaryStart", "absolute", "23.68%", "159", null, "25", "60.08%", null, this.Tab00.tabpage1);
            obj.set_taborder("53");
            obj.style.set_border("0 solid #c0c0c0ff");
            obj.style.set_color("#46463dff");
            obj.style.set_align("center");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static21", "absolute", "58.22%", "159", null, "25", "27.2%", null, this.Tab00.tabpage1);
            obj.set_taborder("21");
            obj.set_text("역종, 병과");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("#46463dff");
            obj.style.set_align("center");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("militaryClass", "absolute", "72.7%", "159", null, "25", "4.89%", null, this.Tab00.tabpage1);
            obj.set_taborder("54");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("#46463dff");
            obj.style.set_align("center");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static23", "absolute", "4.99%", "205", null, "25", "82.49%", null, this.Tab00.tabpage1);
            obj.set_taborder("23");
            obj.set_text("전화");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("#46463dff");
            obj.style.set_align("center");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("phone", "absolute", "17.42%", "205", null, "25", "45.5%", null, this.Tab00.tabpage1);
            obj.set_taborder("55");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("#46463dff");
            obj.style.set_align("center");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("cellPhone", "absolute", "54.4%", "205", null, "25", "4.89%", null, this.Tab00.tabpage1);
            obj.set_taborder("56");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("#46463dff");
            obj.style.set_align("center");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static26", "absolute", "4.99%", "229", null, "25", "82.49%", null, this.Tab00.tabpage1);
            obj.set_taborder("26");
            obj.set_text("E-Mail");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("#46463dff");
            obj.style.set_align("center");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("email", "absolute", "17.42%", "229", null, "25", "4.89%", null, this.Tab00.tabpage1);
            obj.set_taborder("57");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("#46463dff");
            obj.style.set_align("center");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static28", "absolute", "4.99%", "253", null, "25", "82.49%", null, this.Tab00.tabpage1);
            obj.set_taborder("28");
            obj.set_text("주소");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("#46463dff");
            obj.style.set_align("center");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("address", "absolute", "17.42%", "253", null, "25", "4.89%", null, this.Tab00.tabpage1);
            obj.set_taborder("58");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("#46463dff");
            obj.style.set_align("center");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "5.09%", "341", null, "200", "42.95%", null, this.Tab00.tabpage1);
            obj.set_taborder("32");
            obj.set_binddataset("ds_education");
            obj.set_autofittype("col");
            obj.set_cellclickbound("cell");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj.set_selecttype("cell");
            obj.style.set_color("#333333ff");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"128\"/><Column size=\"80\"/><Column size=\"47\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"학교명\"/><Cell col=\"1\" text=\"전공\"/><Cell col=\"2\" text=\"상태\"/><Cell col=\"3\" text=\"날짜\"/></Band><Band id=\"body\"><Cell edittype=\"none\" text=\"bind:schoolName\"/><Cell col=\"1\" edittype=\"none\" text=\"bind:eduMajor\"/><Cell col=\"2\" edittype=\"none\" text=\"bind:eduState\" combodataset=\"ds_eduState\" combocodecol=\"state\" combodatacol=\"state\" combodisplayrowcount=\"-1\"/><Cell col=\"3\" displaytype=\"normal\" edittype=\"none\" text=\"bind:eduDate\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Grid("Grid01", "absolute", "59.59%", "341", null, "200", "4.99%", null, this.Tab00.tabpage1);
            obj.set_taborder("35");
            obj.set_binddataset("ds_certification");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellclickbound("cell");
            obj.set_selecttype("cell");
            obj.style.set_color("#333333ff");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"158\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"자격증명\"/><Cell col=\"1\" text=\"취득일\"/></Band><Band id=\"body\"><Cell edittype=\"none\" text=\"bind:certificateName\"/><Cell col=\"1\" edittype=\"none\" text=\"bind:takingDate\" calendardisplaynulltype=\"none\"/></Band></Format></Formats>");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Grid("Grid02", "absolute", "5.09%", "591", null, "200", "4.99%", null, this.Tab00.tabpage1);
            obj.set_taborder("38");
            obj.set_binddataset("ds_company");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellclickbound("cell");
            obj.set_selecttype("cell");
            obj.style.set_color("#333333ff");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"111\"/><Column size=\"57\"/><Column size=\"55\"/><Column size=\"45\"/><Column size=\"80\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"회사명\"/><Cell col=\"1\" colspan=\"2\" text=\"기간(YYYY-MM - YYYY.MM)\"/><Cell col=\"3\" rowspan=\"2\" text=\"직위\"/><Cell col=\"4\" rowspan=\"2\" text=\"담당업무\"/><Cell row=\"1\" col=\"1\" text=\"시작일\"/><Cell row=\"1\" col=\"2\" text=\"종료일\"/></Band><Band id=\"body\"><Cell edittype=\"none\" text=\"bind:companyName\"/><Cell col=\"1\" edittype=\"none\" text=\"bind:startDate\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" edittype=\"none\" text=\"bind:endDate\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" edittype=\"none\" text=\"bind:rank\"/><Cell col=\"4\" edittype=\"none\" text=\"bind:companyWork\"/></Band></Format></Formats>");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Grid("Grid03", "absolute", "5.09%", "851", null, "200", "42.95%", null, this.Tab00.tabpage1);
            obj.set_taborder("41");
            obj.set_binddataset("ds_training");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellclickbound("cell");
            obj.set_selecttype("cell");
            obj.style.set_color("#333333ff");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"61\"/><Column size=\"61\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"교육명\"/><Cell col=\"1\" text=\"시작일\"/><Cell col=\"2\" text=\"종료일\"/><Cell col=\"3\" text=\"기관명\"/></Band><Band id=\"body\"><Cell edittype=\"none\" text=\"bind:trainingName\"/><Cell col=\"1\" edittype=\"none\" text=\"bind:startDate\" calendardisplaynulltype=\"none\"/><Cell col=\"2\" edittype=\"none\" text=\"bind:endDate\" calendardisplaynulltype=\"none\"/><Cell col=\"3\" edittype=\"none\" text=\"bind:academyName\"/></Band></Format></Formats>");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Grid("Grid04", "absolute", "59.69%", "851", null, "200", "4.99%", null, this.Tab00.tabpage1);
            obj.set_taborder("44");
            obj.set_binddataset("ds_technology");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellclickbound("cell");
            obj.set_selecttype("cell");
            obj.style.set_color("#333333ff");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"보유기술 및 외국어능력\"/><Cell col=\"1\" text=\"숙련도&#13;&#10;(A, B, C)\"/></Band><Band id=\"body\"><Cell edittype=\"none\" text=\"bind:technologyName\"/><Cell col=\"1\" edittype=\"none\" text=\"bind:proficiency\" combodataset=\"ds_techRank\" combocodecol=\"value\" combodatacol=\"value\"/></Band></Format></Formats>");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("militaryEnd", "absolute", "42.17%", "159", null, "25", "41.68%", null, this.Tab00.tabpage1);
            obj.set_taborder("59");
            obj.style.set_border("0 solid #c0c0c0ff");
            obj.style.set_color("#46463dff");
            obj.style.set_align("center");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static31", "absolute", "39.82%", "159", null, "25", "57.73%", null, this.Tab00.tabpage1);
            obj.set_taborder("60");
            obj.set_text("~");
            obj.style.set_border("0 solid #c0c0c0ff");
            obj.style.set_color("#46463dff");
            obj.style.set_align("center");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("gender", "absolute", "81.9%", "87", null, "25", "4.89%", null, this.Tab00.tabpage1);
            obj.set_taborder("64");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("#46463dff");
            obj.style.set_align("center");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("userName", "absolute", "14.58%", "87", null, "25", "69.67%", null, this.Tab00.tabpage1);
            obj.set_taborder("65");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("#46463dff");
            obj.style.set_align("center");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Button("btn_addCompany", "absolute", "86.69%", "561", "40", "25", null, null, this.Tab00.tabpage1);
            obj.set_taborder("36");
            obj.set_text("추가");
            obj.set_visible("false");
            obj.style.set_color("black");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Button("btn_delCompany", "absolute", "91.1%", "561", "40", "25", null, null, this.Tab00.tabpage1);
            obj.set_taborder("37");
            obj.set_text("삭제");
            obj.set_visible("false");
            obj.style.set_color("black");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Button("btn_addEducation", "absolute", "48.73%", "312", "40", "25", null, null, this.Tab00.tabpage1);
            obj.set_taborder("30");
            obj.set_text("추가");
            obj.set_visible("false");
            obj.style.set_color("black");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Button("btn_delEducation", "absolute", "53.13%", "312", "40", "25", null, null, this.Tab00.tabpage1);
            obj.set_taborder("31");
            obj.set_text("삭제");
            obj.set_visible("false");
            obj.style.set_color("black");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Button("btn_addCertification", "absolute", "86.69%", "312", "40", "25", null, null, this.Tab00.tabpage1);
            obj.set_taborder("33");
            obj.set_text("추가");
            obj.set_visible("false");
            obj.style.set_color("black");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Button("btn_delCertification", "absolute", "91.1%", "312", "40", "25", null, null, this.Tab00.tabpage1);
            obj.set_taborder("34");
            obj.set_text("삭제");
            obj.set_visible("false");
            obj.style.set_color("black");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Button("btn_addTraining", "absolute", "48.73%", "822", "40", "25", null, null, this.Tab00.tabpage1);
            obj.set_taborder("39");
            obj.set_text("추가");
            obj.set_visible("false");
            obj.style.set_color("black");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Button("btn_delTraining", "absolute", "53.13%", "822", "40", "25", null, null, this.Tab00.tabpage1);
            obj.set_taborder("40");
            obj.set_text("삭제");
            obj.set_visible("false");
            obj.style.set_color("black");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Button("btn_addTechnology", "absolute", "86.69%", "822", "40", "25", null, null, this.Tab00.tabpage1);
            obj.set_taborder("42");
            obj.set_text("추가");
            obj.set_visible("false");
            obj.style.set_color("black");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Button("btn_delTechnology", "absolute", "91.1%", "822", "40", "25", null, null, this.Tab00.tabpage1);
            obj.set_taborder("43");
            obj.set_text("삭제");
            obj.set_visible("false");
            obj.style.set_color("black");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Edit("Edit00", "absolute", "14.58%", "87", null, "25", "69.67%", null, this.Tab00.tabpage1);
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("black");
            obj.set_taborder("1");
            obj.set_visible("false");
            obj.set_imemode("hangul");
            obj.set_readonly("false");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Radio("Radio00", "absolute", "81.9%", "87", null, "25", "4.89%", null, this.Tab00.tabpage1);
            this.Tab00.tabpage1.addChild(obj.name, obj);
            var Radio00_innerdataset = new Dataset("Radio00_innerdataset", this.Tab00.tabpage1.Radio00);
            Radio00_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">남</Col><Col id=\"datacolumn\">남</Col></Row><Row><Col id=\"codecolumn\">여</Col><Col id=\"datacolumn\">여</Col></Row></Rows>");
            obj.set_innerdataset(Radio00_innerdataset);
            obj.style.set_color("black");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_align("left");
            obj.style.set_padding("0 0 0 5");
            obj.set_taborder("5");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_value("남");
            obj.set_visible("false");
            obj.set_index("0");
            obj = new Edit("Edit02", "absolute", "14.58%", "111", null, "25", "49.8%", null, this.Tab00.tabpage1);
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("black");
            obj.set_taborder("7");
            obj.set_visible("false");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Calendar("Calendar00", "absolute", "62.33%", "111", null, "25", "4.89%", null, this.Tab00.tabpage1);
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("#333333ff");
            obj.set_taborder("9");
            obj.set_visible("false");
            obj = new Edit("Edit03", "absolute", "14.58%", "135", null, "25", "74.07%", null, this.Tab00.tabpage1);
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("black");
            obj.set_taborder("11");
            obj.set_visible("false");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Edit("Edit04", "absolute", "35.62%", "135", null, "25", "53.33%", null, this.Tab00.tabpage1);
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("black");
            obj.set_taborder("13");
            obj.set_visible("false");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Edit("Edit05", "absolute", "58.22%", "135", null, "25", "29.94%", null, this.Tab00.tabpage1);
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("black");
            obj.set_taborder("15");
            obj.set_visible("false");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Radio("Radio01", "absolute", "82.78%", "135", null, "25", "4.89%", null, this.Tab00.tabpage1);
            this.Tab00.tabpage1.addChild(obj.name, obj);
            var Radio01_innerdataset = new Dataset("Radio01_innerdataset", this.Tab00.tabpage1.Radio01);
            Radio01_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">미혼</Col><Col id=\"datacolumn\">미혼</Col></Row><Row><Col id=\"codecolumn\">기혼</Col><Col id=\"datacolumn\">기혼</Col></Row></Rows>");
            obj.set_innerdataset(Radio01_innerdataset);
            obj.style.set_color("black");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_align("left");
            obj.style.set_padding("0 0 0 5");
            obj.set_taborder("17");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_value("미혼");
            obj.set_visible("false");
            obj.set_index("0");
            obj = new Calendar("Calendar01", "absolute", "23.68%", "159", null, "25", "61.94%", null, this.Tab00.tabpage1);
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("#333333ff");
            obj.set_taborder("19");
            obj.set_visible("false");
            obj = new Calendar("Calendar02", "absolute", "44.62%", "159", null, "25", "41.68%", null, this.Tab00.tabpage1);
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("#333333ff");
            obj.set_taborder("20");
            obj.set_visible("false");
            obj.set_type("normal");
            obj = new Edit("Edit06", "absolute", "72.7%", "159", null, "25", "4.89%", null, this.Tab00.tabpage1);
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("black");
            obj.set_taborder("22");
            obj.set_visible("false");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new MaskEdit("MaskEdit00", "absolute", "17.42%", "205", null, "25", "45.5%", null, this.Tab00.tabpage1);
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("black");
            obj.style.set_align("left");
            obj.set_taborder("24");
            obj.set_displaynulltext("(유선)");
            obj.set_visible("false");
            obj.set_type("string");
            obj.set_mask("###-####-####");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new MaskEdit("MaskEdit01", "absolute", "54.4%", "205", null, "25", "4.89%", null, this.Tab00.tabpage1);
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("black");
            obj.style.set_align("left");
            obj.set_taborder("25");
            obj.set_displaynulltext("(무선)");
            obj.set_visible("false");
            obj.set_type("string");
            obj.set_mask("###-####-####");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Edit("Edit07", "absolute", "17.42%", "229", null, "25", "4.89%", null, this.Tab00.tabpage1);
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("black");
            obj.set_taborder("27");
            obj.set_visible("false");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Edit("Edit08", "absolute", "17.42%", "253", null, "25", "4.89%", null, this.Tab00.tabpage1);
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("black");
            obj.set_taborder("29");
            obj.set_visible("false");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new MaskEdit("Edit01", "absolute", "45.69%", "87", null, "25", "30.72%", null, this.Tab00.tabpage1);
            obj.set_taborder("3");
            obj.set_visible("false");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_color("black");
            obj.set_mask("######-#######");
            obj.set_type("string");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Tabpage("tabpage2", this.Tab00);
            obj.set_text("Skill Inventory");
            this.Tab00.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "5%", "23", null, "50", "5%", null, this.Tab00.tabpage2);
            obj.set_taborder("0");
            obj.set_text("SKILL INVENTORY");
            obj.style.set_border("3 solid #000000ff");
            obj.style.set_align("center");
            obj.style.set_font("bold 20 Dotum");
            this.Tab00.tabpage2.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "77.1%", "42", null, "25", "17.12%", null, this.Tab00.tabpage2);
            obj.set_taborder("1");
            obj.set_text("작성자 : ");
            obj.style.set_align("center");
            this.Tab00.tabpage2.addChild(obj.name, obj);
            obj = new Static("Static02", "absolute", "83.66%", "42", null, "25", "5.68%", null, this.Tab00.tabpage2);
            obj.set_taborder("2");
            obj.set_text("Static02");
            this.Tab00.tabpage2.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "0%", "132", "100%", "560", null, null, this.Tab00.tabpage2);
            obj.set_taborder("3");
            obj.set_binddataset("ds_project");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj.set_cellclickbound("cell");
            obj.set_selecttype("cell");
            obj.set_autosizingtype("none");
            obj.set_autosizebandtype("body");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"42\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"프로젝트명&#13;&#10;(업무명)\"/><Cell col=\"1\" colspan=\"2\" text=\"참여기간&#13;&#10;(YYYY.MM-&#13;&#10;YYYY.MM)\"/><Cell col=\"3\" rowspan=\"2\" text=\"고객사\"/><Cell col=\"4\" rowspan=\"2\" text=\"근무회사\"/><Cell col=\"5\" colspan=\"2\" text=\"개발분야\"/><Cell col=\"7\" rowspan=\"2\" text=\"역할\"/><Cell col=\"8\" colspan=\"7\" text=\"개발환경\"/><Cell row=\"1\" col=\"1\" text=\"시작일\"/><Cell row=\"1\" col=\"2\" text=\"종료일\"/><Cell row=\"1\" col=\"5\" text=\"산업\"/><Cell row=\"1\" col=\"6\" text=\"응용\"/><Cell row=\"1\" col=\"8\" text=\"기종\"/><Cell row=\"1\" col=\"9\" text=\"O.S\"/><Cell row=\"1\" col=\"10\" text=\"언어\"/><Cell row=\"1\" col=\"11\" text=\"DBMS\"/><Cell row=\"1\" col=\"12\" text=\"TOOL\"/><Cell row=\"1\" col=\"13\" text=\"통신\"/><Cell row=\"1\" col=\"14\" text=\"기타\"/></Band><Band id=\"body\"><Cell edittype=\"none\" text=\"bind:projectName\"/><Cell col=\"1\" edittype=\"none\" text=\"bind:startDate\"/><Cell col=\"2\" edittype=\"none\" text=\"bind:endDate\"/><Cell col=\"3\" edittype=\"none\" text=\"bind:customer\"/><Cell col=\"4\" edittype=\"none\" text=\"bind:company\"/><Cell col=\"5\" edittype=\"none\" text=\"bind:industry\"/><Cell col=\"6\" edittype=\"none\" text=\"bind:application\"/><Cell col=\"7\" edittype=\"none\" text=\"bind:part\"/><Cell col=\"8\" edittype=\"none\" text=\"bind:model\"/><Cell col=\"9\" edittype=\"none\" text=\"bind:operatingSystem\"/><Cell col=\"10\" edittype=\"none\" text=\"bind:language\"/><Cell col=\"11\" edittype=\"none\" text=\"bind:dbms\"/><Cell col=\"12\" edittype=\"none\" text=\"bind:tool\"/><Cell col=\"13\" edittype=\"none\" text=\"bind:communication\"/><Cell col=\"14\" edittype=\"none\" text=\"bind:other\"/></Band></Format></Formats>");
            this.Tab00.tabpage2.addChild(obj.name, obj);
            obj = new Button("btn_addProject", "absolute", "91.1%", "102", "40", "25", null, null, this.Tab00.tabpage2);
            obj.set_taborder("4");
            obj.set_text("추가");
            obj.set_visible("false");
            this.Tab00.tabpage2.addChild(obj.name, obj);
            obj = new Button("btn_delProject", "absolute", "95.5%", "102", "40", "25", null, null, this.Tab00.tabpage2);
            obj.set_taborder("5");
            obj.set_text("삭제");
            obj.set_visible("false");
            this.Tab00.tabpage2.addChild(obj.name, obj);

            obj = new Button("btn_save", "absolute", "87.7%", "5", null, "40", "1.07%", null, this);
            obj.set_taborder("1");
            obj.set_text("저장");
            obj.set_visible("false");
            obj.style.set_color("#46463dff");
            this.addChild(obj.name, obj);

            obj = new Button("btn_update", "absolute", "87.7%", "5", null, "40", "1.07%", null, this);
            obj.set_taborder("2");
            obj.set_text("수정");
            obj.set_visible("false");
            obj.style.set_color("#46463dff");
            this.addChild(obj.name, obj);


            
            // Layout Functions
            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab00.tabpage1,
            	//-- Layout function
            	function(p) {
            		p.set_text("개인 이력카드");

            	}
            );
            this.Tab00.tabpage1.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 0, 0, this.Tab00.tabpage2,
            	//-- Layout function
            	function(p) {
            		p.set_text("Skill Inventory");

            	}
            );
            this.Tab00.tabpage2.addLayout(obj.name, obj);

            //-- Default Layout
            obj = new Layout("default", "", 1024, 700, this,
            	//-- Layout function
            	function(p) {
            		p.set_classname("form_insert");
            		p.set_titletext("New Form");

            	}
            );
            this.addLayout(obj.name, obj);


            
            // BindItem Information
            obj = new BindItem("item1","Tab00.tabpage1.gender","text","ds_resume","gender");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item0","Tab00.tabpage1.personNo","text","ds_resume","personNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item2","Tab00.tabpage1.company","text","ds_resume","company");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item3","Tab00.tabpage1.entryDate","text","ds_resume","entryDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item4","Tab00.tabpage1.department","text","ds_resume","department");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item5","Tab00.tabpage1.rank","text","ds_resume","rank");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item6","Tab00.tabpage1.military","text","ds_resume","military");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item7","Tab00.tabpage1.marry","text","ds_resume","maritalState");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item8","Tab00.tabpage1.militaryStart","text","ds_resume","startDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item9","Tab00.tabpage1.militaryEnd","text","ds_resume","endDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item10","Tab00.tabpage1.militaryClass","text","ds_resume","invertebrate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item11","Tab00.tabpage1.phone","text","ds_resume","phone");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item12","Tab00.tabpage1.cellPhone","text","ds_resume","cellPhone");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item13","Tab00.tabpage1.email","text","ds_resume","email");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item14","Tab00.tabpage1.address","text","ds_resume","address");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item16","Tab00.tabpage2.Static02","text","ds_resume","userName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item15","Tab00.tabpage1.userName","text","ds_resume","userName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item17","Tab00.tabpage1.Edit00","value","ds_resume","userName");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item21","Tab00.tabpage1.Edit02","value","ds_resume","company");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item22","Tab00.tabpage1.Calendar00","value","ds_resume","entryDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item23","Tab00.tabpage1.Edit03","value","ds_resume","department");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item24","Tab00.tabpage1.Edit04","value","ds_resume","rank");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item25","Tab00.tabpage1.Edit05","value","ds_resume","military");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item26","Tab00.tabpage1.Calendar01","value","ds_resume","startDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item27","Tab00.tabpage1.Calendar02","value","ds_resume","endDate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item28","Tab00.tabpage1.Edit06","value","ds_resume","invertebrate");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item29","Tab00.tabpage1.MaskEdit00","value","ds_resume","phone");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item30","Tab00.tabpage1.MaskEdit01","value","ds_resume","cellPhone");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item31","Tab00.tabpage1.Edit07","value","ds_resume","email");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item32","Tab00.tabpage1.Edit08","value","ds_resume","address");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item33","Tab00.tabpage1.Radio00","value","ds_resume","gender");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item19","Tab00.tabpage1.Radio01","value","ds_resume","maritalState");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item18","Tab00.tabpage1.Edit01","value","ds_resume","personNo");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("form_view.xfdl", function() {
        //온로드
        this.form_onload = function(obj,e)
        {
        	//alert(application.gb_userInfo.substr(-1));
         	if(application.gb_userInfo.substr(-1) == 0 && application.gb_accessState == "insert"){//일반유저이면
         		this.ds_searchUser.setColumn(0,"userNo",application.gb_userNo);//로그인된 유저번호 세팅
         		application.gb_searchUser = application.gb_userNo;
         	}else{
        		this.ds_searchUser.setColumn(0,"userNo",application.gb_searchUser);//클릭한 유저번호 세팅
        	}
        	//특정 데이터를 가져와서 열람할지 입력/수정 할지 결정
        	this.transaction("searchList","http://localhost:8080/nexacro-egov_skill/searchUser.do",
        	"ds_searchUser=ds_searchUser",
        	"ds_resume=ds_resume ds_education=ds_education ds_certification=ds_certification ds_company=ds_company ds_training=ds_training ds_technology=ds_technology ds_project=ds_project",
        	"","fnCallback");
        }
        //콜백
        this.fnCallback = function(){
        	trace("뷰 화면에서 트랜잭션 후 콜백");
        	 	
        	var isYou = application.gb_userNo == application.gb_searchUser;//본인인가?
        	//본인이면 수정버튼 활성화
        	//alert(isYou);
        	if(isYou){//본인이면
        		//alert(this.ds_resume.getColumn(0,"resumeNo") == undefined);
        		if(this.ds_resume.getColumn(0,"resumeNo") == undefined){//본인인데 이력서 없으면
        			if(application.gb_accessState == "search"){//검색창에서 들어왔을 경우
        				alert("이력서가 없습니다.\n이력서를 작성해주세요.");
        			}
        			//데이터셋 addRow
        			this.ds_resume.addRow();
        			this.ds_education.addRow();
        			this.ds_certification.addRow();
        			this.ds_company.addRow();
        			this.ds_training.addRow();
        			this.ds_technology.addRow();
        			this.ds_project.addRow();
        			
        			this.ds_resume.setColumn(0,"userNo",application.gb_userNo);//수정할때 필요한 이력서번호(resumeNo) 데이터셋에 미리 세팅해놓기
        			this.Tab00.tabpage1.Edit00.set_value(application.gb_userInfo.substr(0,application.gb_userInfo.length-1));//gb_userInfo에서 유저이름 가져오기
        			this.Tab00.tabpage1.Edit00.set_enable(false);//이름 변경 불가능
        			this.Tab00.tabpage1.Radio00.set_index(0);//라디오버튼 인덱스 0번(남)으로 설정
        			this.Tab00.tabpage1.Radio01.set_index(0);//라디오버튼 인덱스 0번(미혼)으로 설정
        			application.gb_modify = "insert";
        			this.insertMode();//모든 컴포넌트 수정 가능하도록 변경
        		}else if(this.ds_resume.getColumn(0,"resumeNo") != undefined && application.gb_accessState == "insert"){
        			//alert("이력서가 있고 입력모드");
        			this.btn_update.set_visible(false);//수정버튼 비활성화
        			this.btn_save.set_visible(true);//저장버튼 활성화
        			application.gb_modify = "update";
        			this.insertMode();//모든 컴포넌트 수정 가능하도록 변경
        		}else if(this.ds_resume.getColumn(0,"resumeNo") != undefined && application.gb_accessState != "insert"){//본인이고 이력서가 있으면
        			//alert("이력서가 있고 조회모드");
        			this.btn_update.set_visible(true);//수정버튼 활성화
        			application.gb_modify = "update";
        		}
        	}else{
        		//alert("타인");
        		if(this.ds_resume.getColumn(0,"resumeNo") == undefined){//타인인데 이력서 없으면
        			alert("이력서가 없습니다.");
        			this.go("Base::form_search.xfdl");//이전화면으로 이동
        		}
        	}
        }

        //수정버튼 누르면
        this.btn_update_onclick = function(obj,e)
        {
        	this.insertMode();//모든 컴포넌트 수정 가능하도록 변경
        }

        //저장버튼 누르면
        this.btn_save_onclick = function(obj,e)
        {	
        	//총 경력 구하기
        	var temp = 0;
        	var currDay = 24 * 60 * 60 * 1000 * 30;
        	
        		for(var i=0; i<this.ds_company.getRowCount(); i++){
        			if(this.ds_company.getColumn(i,"companyName") != undefined && this.ds_company.getColumn(i,"companyName") != ""){
        				var from = this.ds_company.getColumn(i,"startDate");
        				var to = this.ds_company.getColumn(i,"endDate");
        				var date1 = new Date(from.substr(0,4),from.substr(4,2),from.substr(6,2));
        				var date2 = new Date(to.substr(0,4),to.substr(4,2),to.substr(6,2));
        				var diff = date2 - date1;
        				temp += nexacro.toNumber(diff/currDay);
        			}
        		}
        		if(this.ds_resume.getColumn(0,"entryDate") != undefined && this.ds_resume.getColumn(0,"entryDate") != ""){//이력서 상단 현재 재직중인 회사 경력
        			var currentCompany = this.ds_resume.getColumn(0,"entryDate");
        			var date3 = new Date();
        			var yy = date3.getFullYear();
        			var mm = date3.getMonth()+1;
        			var dd = date3.getDate();
        			var today = yy+""+mm+""+dd;
        			var date4 = new Date(currentCompany.substr(0,4),currentCompany.substr(5,2),currentCompany.substr(8,2));
        			var date5 = new Date(today.substr(0,4),today.substr(4,2),today.substr(6,2));
        			var diff = date5 - date4;
        			temp += nexacro.toNumber(diff/currDay);
        		}
        		
        		var year = "";
        		if(temp > 12){
        			year = parseInt(temp/12)+"년";
        			year = year+parseInt(temp%12)+"개월";
        		}else{
        			year = parseInt(temp%12)+"개월";
        		}
        		//이력서에 경력사항 추가
        		if(year != "" && year != undefined){
        			this.ds_resume.setColumn(0,"career",year);
        		}
        	if(application.gb_userNo != undefined && application.gb_userNo != ""){
        		if(this.ds_resume.getColumn(0,"resumeNo") == undefined){//이력서가 새로 작성될 경우 insert
        			this.fn_save("save");//서비스id를 save로 설정해서 저장 트랜잭션으로 이동
        		}else{//기존 이력서가 있는 경우 update		
        			this.fn_save("update");//서비스id를 update로 설정해서 저장 트랜잭션으로 이동
        		}
        	}
        }
        //저장하러가기
        this.fn_save = function(svcId){
        	this.transaction(svcId,"http://localhost:8080/nexacro-egov_skill/modify.do",
        	"ds_resume=ds_resume:A ds_education=ds_education:U ds_certification=ds_certification:U ds_company=ds_company:U ds_training=ds_training:U ds_technology=ds_technology:U ds_project=ds_project:U",
        	"","","saveCallback");
        }
        //modify 콜백
        this.saveCallback = function(svcId,errorcode,errormsg){
        	trace(svcId+" / "+errorcode+" / "+errormsg);
        	if(svcId == "save"){
        		if(errorcode == 0){
        			alert("저장되었습니다.");
        		}else{
        			alert("저장 실패");
        		}
        	}else if(svcId == "update"){
        		if(errorcode == 0){
        			alert("수정되었습니다.");
        		}else{
        			alert("수정 실패");
        		}
        	}
        }

        this.insertMode = function(){
        	//수정버튼 감추고 저장버튼 활성화
        	this.btn_save.set_visible(true);
        	this.btn_update.set_visible(false);
        	//학력
        	this.Tab00.tabpage1.Grid00.setCellProperty("body", 0, "edittype", "text");
        	this.Tab00.tabpage1.Grid00.setCellProperty("body", 1, "edittype", "text");
        	this.Tab00.tabpage1.Grid00.setCellProperty("body", 2, "edittype", "combo");
        	this.Tab00.tabpage1.Grid00.setCellProperty("body", 3, "edittype", "date");
        	this.Tab00.tabpage1.Grid00.setCellProperty("body", 3, "displaytype", "date");
        	//자격증
        	this.Tab00.tabpage1.Grid01.setCellProperty("body", 0, "edittype", "text");
        	this.Tab00.tabpage1.Grid01.setCellProperty("body", 1, "edittype", "date");
        	this.Tab00.tabpage1.Grid01.setCellProperty("body", 1, "displaytype", "date");
        	//회사
        	this.Tab00.tabpage1.Grid02.setCellProperty("body", 0, "edittype", "text");
        	this.Tab00.tabpage1.Grid02.setCellProperty("body", 1, "edittype", "date");
        	this.Tab00.tabpage1.Grid02.setCellProperty("body", 1, "displaytype", "date");
        	this.Tab00.tabpage1.Grid02.setCellProperty("body", 2, "edittype", "date");
        	this.Tab00.tabpage1.Grid02.setCellProperty("body", 2, "displaytype", "date");
        	this.Tab00.tabpage1.Grid02.setCellProperty("body", 3, "edittype", "text");
        	this.Tab00.tabpage1.Grid02.setCellProperty("body", 4, "edittype", "text");
        	//교육
        	this.Tab00.tabpage1.Grid03.setCellProperty("body", 0, "edittype", "text");
        	this.Tab00.tabpage1.Grid03.setCellProperty("body", 1, "edittype", "date");
        	this.Tab00.tabpage1.Grid03.setCellProperty("body", 1, "displaytype", "date");
        	this.Tab00.tabpage1.Grid03.setCellProperty("body", 2, "edittype", "date");
        	this.Tab00.tabpage1.Grid03.setCellProperty("body", 2, "displaytype", "date");
        	this.Tab00.tabpage1.Grid03.setCellProperty("body", 3, "edittype", "text");
        	//기술
        	this.Tab00.tabpage1.Grid04.setCellProperty("body", 0, "edittype", "text");
        	this.Tab00.tabpage1.Grid04.setCellProperty("body", 1, "edittype", "combo");	
        	//프로젝트
        	this.Tab00.tabpage2.Grid00.setCellProperty("body", 0, "edittype", "text");
        	this.Tab00.tabpage2.Grid00.setCellProperty("body", 1, "edittype", "date");
        	this.Tab00.tabpage2.Grid00.setCellProperty("body", 1, "displaytype", "date");
        	this.Tab00.tabpage2.Grid00.setCellProperty("body", 2, "edittype", "date");
        	this.Tab00.tabpage2.Grid00.setCellProperty("body", 2, "displaytype", "date");
        	this.Tab00.tabpage2.Grid00.setCellProperty("body", 3, "edittype", "text");
        	this.Tab00.tabpage2.Grid00.setCellProperty("body", 4, "edittype", "text");
        	this.Tab00.tabpage2.Grid00.setCellProperty("body", 5, "edittype", "text");
        	this.Tab00.tabpage2.Grid00.setCellProperty("body", 6, "edittype", "text");
        	this.Tab00.tabpage2.Grid00.setCellProperty("body", 7, "edittype", "text");
        	this.Tab00.tabpage2.Grid00.setCellProperty("body", 8, "edittype", "text");
        	this.Tab00.tabpage2.Grid00.setCellProperty("body", 9, "edittype", "text");
        	this.Tab00.tabpage2.Grid00.setCellProperty("body", 10, "edittype", "text");
        	this.Tab00.tabpage2.Grid00.setCellProperty("body", 11, "edittype", "text");
        	this.Tab00.tabpage2.Grid00.setCellProperty("body", 12, "edittype", "text");
        	this.Tab00.tabpage2.Grid00.setCellProperty("body", 13, "edittype", "text");
        	this.Tab00.tabpage2.Grid00.setCellProperty("body", 14, "edittype", "text");
        	//edit 활성화
        	if(application.gb_modify == "insert"){//입력일 경우
        		this.Tab00.tabpage1.Edit00.set_enable(false);//이름 수정가능-----------------------
        		this.Tab00.tabpage1.Edit01.set_enable(true);//주민번호 수정가능
        	}else if(application.gb_modify == "update"){//수정일 경우
        		this.Tab00.tabpage1.Edit00.set_enable(false);//이름 수정불가
        		this.Tab00.tabpage1.Edit01.set_enable(false);//주민번호 수정불가
        	}
        	this.Tab00.tabpage1.Edit00.set_visible(true);	
        	this.Tab00.tabpage1.Edit01.set_visible(true);
        	this.Tab00.tabpage1.Radio00.set_visible(true);
        	this.Tab00.tabpage1.Edit02.set_visible(true);
        	this.Tab00.tabpage1.Calendar00.set_visible(true);
        	this.Tab00.tabpage1.Edit03.set_visible(true);
        	this.Tab00.tabpage1.Edit04.set_visible(true);
        	this.Tab00.tabpage1.Edit05.set_visible(true);
        	this.Tab00.tabpage1.Radio01.set_visible(true);
        	this.Tab00.tabpage1.Calendar01.set_visible(true);
        	this.Tab00.tabpage1.Calendar02.set_visible(true);
        	this.Tab00.tabpage1.Edit06.set_visible(true);
        	this.Tab00.tabpage1.MaskEdit00.set_visible(true);
        	this.Tab00.tabpage1.MaskEdit01.set_visible(true);
        	this.Tab00.tabpage1.Edit07.set_visible(true);
        	this.Tab00.tabpage1.Edit08.set_visible(true);
        	//static 비활성화
        	this.Tab00.tabpage1.userName.set_visible(false);
        	this.Tab00.tabpage1.personNo.set_visible(false);
        	this.Tab00.tabpage1.gender.set_visible(false);
        	this.Tab00.tabpage1.company.set_visible(false);
        	this.Tab00.tabpage1.entryDate.set_visible(false);
        	this.Tab00.tabpage1.department.set_visible(false);
        	this.Tab00.tabpage1.rank.set_visible(false);
        	this.Tab00.tabpage1.military.set_visible(false);
        	this.Tab00.tabpage1.marry.set_visible(false);
        	this.Tab00.tabpage1.militaryStart.set_visible(false);
        	this.Tab00.tabpage1.militaryEnd.set_visible(false);
        	this.Tab00.tabpage1.militaryClass.set_visible(false);
        	this.Tab00.tabpage1.phone.set_visible(false);
        	this.Tab00.tabpage1.cellPhone.set_visible(false);
        	this.Tab00.tabpage1.email.set_visible(false);
        	this.Tab00.tabpage1.address.set_visible(false);
        	//버튼 활성화
        	this.Tab00.tabpage1.btn_addEducation.set_visible(true);
        	this.Tab00.tabpage1.btn_delEducation.set_visible(true);
        	this.Tab00.tabpage1.btn_addCertification.set_visible(true);
        	this.Tab00.tabpage1.btn_delCertification.set_visible(true);
        	this.Tab00.tabpage1.btn_addCompany.set_visible(true);
        	this.Tab00.tabpage1.btn_delCompany.set_visible(true);
        	this.Tab00.tabpage1.btn_addTraining.set_visible(true);
        	this.Tab00.tabpage1.btn_delTraining.set_visible(true);
        	this.Tab00.tabpage1.btn_addTechnology.set_visible(true);
        	this.Tab00.tabpage1.btn_delTechnology.set_visible(true);
        	this.Tab00.tabpage2.btn_addProject.set_visible(true);
        	this.Tab00.tabpage2.btn_delProject.set_visible(true);
        	application.gb_modify = "";
        }

        //성별 바뀔때
        this.gender_onchange = function(obj,e)
        {
        	var gender = this.Tab00.tabpage1.Radio00.value;
        	if(gender == "남"){
        		//alert("남");
        		this.Tab00.tabpage1.Edit05.set_enable(true);
        		this.Tab00.tabpage1.Edit06.set_enable(true);
        		this.Tab00.tabpage1.Calendar01.set_enable(true);
        		this.Tab00.tabpage1.Calendar02.set_enable(true);
        	}else{
        		//alert("여");
        		this.Tab00.tabpage1.Edit05.set_enable(false);
        		this.Tab00.tabpage1.Edit06.set_enable(false);
        		this.Tab00.tabpage1.Calendar01.set_enable(false);
        		this.Tab00.tabpage1.Calendar02.set_enable(false);
        	}
        }

        //학력 추가버튼
        this.Tab00_tabpage1_btn_addEducation_onclick = function(obj,e)
        {
        	var rows = this.ds_education.getRowCount()-1;
        	if(this.ds_education.getColumn(rows,"schoolName") != undefined && this.ds_education.getColumn(rows,"eduState") != undefined && this.ds_education.getColumn(rows,"eduDate") != undefined){
        		this.ds_education.addRow();
        	}else if(rows < 0){
        		this.ds_education.addRow();
        	}
        }
        //학력 삭제버튼
        this.Tab00_tabpage1_btn_delEducation_onclick = function(obj,e)
        {
        	var deleteDialog = new ChildFrame;
        	deleteDialog.init("deleteDialog_popup", "absolute", 0, 0, 400, 400, 0, 0, "Main::form_delete_dialog.xfdl");
        	deleteDialog.set_openalign("center middle"); 
        	deleteDialog.showModal(this.getOwnerFrame(),"", this, "fnEducation");
        }
        //학력삭제
        this.fnEducation = function(){
        	if(application.gb_delete == "y"){
        		var nRow = this.ds_education.getRowCount()-1;
        		this.ds_education.deleteRow(nRow);
        		application.gb_delete = "";
        	}
        }

        //자격증 추가버튼
        this.Tab00_tabpage1_btn_addCertification_onclick = function(obj,e)
        {
        	var rows = this.ds_certification.getRowCount()-1;
        	if(this.ds_certification.getColumn(rows,"certificateName") != undefined && this.ds_certification.getColumn(rows,"takingDate") != undefined){
        		this.ds_certification.addRow();
        	}else if(rows < 0){
        		this.ds_certification.addRow();
        	}
        }
        //자격증 삭제버튼
        this.Tab00_tabpage1_btn_delCertification_onclick = function(obj,e)
        {
        	var deleteDialog = new ChildFrame;
        	deleteDialog.init("deleteDialog_popup", "absolute", 0, 0, 400, 400, 0, 0, "Main::form_delete_dialog.xfdl");
        	deleteDialog.set_openalign("center middle"); 
        	deleteDialog.showModal(this.getOwnerFrame(),"", this, "fnCertificate");
        }
        //자격증 삭제
        this.fnCertificate = function(){
        	if(application.gb_delete == "y"){
        		var nRow = this.ds_certification.getRowCount()-1;
        		this.ds_certification.deleteRow(nRow);
        		application.gb_delete = "";
        	}
        }

        //회사 추가버튼
        this.Tab00_tabpage1_btn_addCompany_onclick = function(obj,e)
        {
        	var rows = this.ds_company.getRowCount()-1;
        	if(this.ds_company.getColumn(rows,"companyName") != undefined && this.ds_company.getColumn(rows,"startDate") != undefined && this.ds_company.getColumn(rows,"endDate") != undefined && this.ds_company.getColumn(rows,"rank") != undefined && this.ds_company.getColumn(rows,"companyWork") != undefined){
        		this.ds_company.addRow();
        	}else if(rows < 0){
        		this.ds_company.addRow();
        	}
        }
        //회사 삭제버튼
        this.Tab00_tabpage1_btn_delCompany_onclick = function(obj,e)
        {
        	var deleteDialog = new ChildFrame;
        	deleteDialog.init("deleteDialog_popup", "absolute", 0, 0, 400, 400, 0, 0, "Main::form_delete_dialog.xfdl");
        	deleteDialog.set_openalign("center middle"); 
        	deleteDialog.showModal(this.getOwnerFrame(),"", this, "fnCompany");
        }
        //회사 삭제
        this.fnCompany = function(){
        	if(application.gb_delete == "y"){
        		var nRow = this.ds_company.getRowCount()-1;
        		this.ds_company.deleteRow(nRow);
        		application.gb_delete = "";
        	}
        }

        //교육 추가버튼
        this.Tab00_tabpage1_btn_addTraining_onclick = function(obj,e)
        {
        	var rows = this.ds_training.getRowCount()-1;
        	if(this.ds_training.getColumn(rows,"trainingName") != undefined && this.ds_training.getColumn(rows,"startDate") != undefined && this.ds_training.getColumn(rows,"endDate") != undefined && this.ds_training.getColumn(rows,"academyName") != undefined){
        		this.ds_training.addRow();
        	}else if(rows < 0){
        		this.ds_training.addRow();
        	}
        }
        //교육 삭제버튼
        this.Tab00_tabpage1_btn_delTraining_onclick = function(obj,e)
        {
        	var deleteDialog = new ChildFrame;
        	deleteDialog.init("deleteDialog_popup", "absolute", 0, 0, 400, 400, 0, 0, "Main::form_delete_dialog.xfdl");
        	deleteDialog.set_openalign("center middle"); 
        	deleteDialog.showModal(this.getOwnerFrame(),"", this, "fnTraining");
        }
        //교육 삭제
        this.fnTraining = function(){
        	if(application.gb_delete == "y"){
        		var nRow = this.ds_training.getRowCount()-1;
        		this.ds_training.deleteRow(nRow);
        		application.gb_delete = "";
        	}
        }

        //기술 추가버튼
        this.Tab00_tabpage1_btn_addTechnology_onclick = function(obj,e)
        {
        	var rows = this.ds_technology.getRowCount()-1;
        	if(this.ds_technology.getColumn(rows,"technologyName") != undefined && this.ds_technology.getColumn(rows,"proficiency") != undefined){
        		this.ds_technology.addRow();
        	}else if(rows < 0){
        		this.ds_technology.addRow();
        	}
        }
        //기술 삭제버튼
        this.Tab00_tabpage1_btn_delTechnology_onclick = function(obj,e)
        {
        	var deleteDialog = new ChildFrame;
        	deleteDialog.init("deleteDialog_popup", "absolute", 0, 0, 400, 400, 0, 0, "Main::form_delete_dialog.xfdl");
        	deleteDialog.set_openalign("center middle"); 
        	deleteDialog.showModal(this.getOwnerFrame(),"", this, "fnTechnology");
        }
        //기술 삭제
        this.fnTechnology = function(){
        	if(application.gb_delete == "y"){
        		var nRow = this.ds_technology.getRowCount()-1;
        		this.ds_technology.deleteRow(nRow);
        		application.gb_delete = "";
        	}
        }

        //프로젝트 추가버튼
        this.Tab00_tabpage2_btn_addProject_onclick = function(obj,e)
        {
        	var rows = this.ds_project.getRowCount()-1;
        	if(this.ds_project.getColumn(rows,"projectName") != undefined && this.ds_project.getColumn(rows,"startDate") != undefined && this.ds_project.getColumn(rows,"endDate") != undefined &&
        		this.ds_project.getColumn(rows,"customer") != undefined && this.ds_project.getColumn(rows,"company") != undefined && this.ds_project.getColumn(rows,"part") != undefined){
        		this.ds_project.addRow();
        	}else if(rows < 0){
        		this.ds_project.addRow();
        	}
        }
        //프로젝트 삭제버튼
        this.Tab00_tabpage2_btn_delProject_onclick = function(obj,e)
        {
        	var deleteDialog = new ChildFrame;
        	deleteDialog.init("deleteDialog_popup", "absolute", 0, 0, 400, 400, 0, 0, "Main::form_delete_dialog.xfdl");
        	deleteDialog.set_openalign("center middle"); 
        	deleteDialog.showModal(this.getOwnerFrame(),"", this, "fnProject");
        }
        //프로젝트 삭제
        this.fnProject = function(){
        	if(application.gb_delete == "y"){
        		var nRow = this.ds_project.getRowCount()-1;
        		this.ds_project.deleteRow(nRow);
        		application.gb_delete = "";
        	}
        }

        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);
            this.Tab00.addEventHandler("onmove", this.tabOnMove, this);
            this.Tab00.tabpage1.btn_addCompany.addEventHandler("onclick", this.Tab00_tabpage1_btn_addCompany_onclick, this);
            this.Tab00.tabpage1.btn_delCompany.addEventHandler("onclick", this.Tab00_tabpage1_btn_delCompany_onclick, this);
            this.Tab00.tabpage1.btn_addEducation.addEventHandler("onclick", this.Tab00_tabpage1_btn_addEducation_onclick, this);
            this.Tab00.tabpage1.btn_delEducation.addEventHandler("onclick", this.Tab00_tabpage1_btn_delEducation_onclick, this);
            this.Tab00.tabpage1.btn_addCertification.addEventHandler("onclick", this.Tab00_tabpage1_btn_addCertification_onclick, this);
            this.Tab00.tabpage1.btn_delCertification.addEventHandler("onclick", this.Tab00_tabpage1_btn_delCertification_onclick, this);
            this.Tab00.tabpage1.btn_addTraining.addEventHandler("onclick", this.Tab00_tabpage1_btn_addTraining_onclick, this);
            this.Tab00.tabpage1.btn_delTraining.addEventHandler("onclick", this.Tab00_tabpage1_btn_delTraining_onclick, this);
            this.Tab00.tabpage1.btn_addTechnology.addEventHandler("onclick", this.Tab00_tabpage1_btn_addTechnology_onclick, this);
            this.Tab00.tabpage1.btn_delTechnology.addEventHandler("onclick", this.Tab00_tabpage1_btn_delTechnology_onclick, this);
            this.Tab00.tabpage1.Radio00.addEventHandler("onitemchanged", this.gender_onchange, this);
            this.Tab00.tabpage2.btn_addProject.addEventHandler("onclick", this.Tab00_tabpage2_btn_addProject_onclick, this);
            this.Tab00.tabpage2.btn_delProject.addEventHandler("onclick", this.Tab00_tabpage2_btn_delProject_onclick, this);
            this.btn_save.addEventHandler("onclick", this.btn_save_onclick, this);
            this.btn_update.addEventHandler("onclick", this.btn_update_onclick, this);

        };

        this.loadIncludeScript("form_view.xfdl");

       
    };
}
)();
