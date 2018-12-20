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
            obj._setContents("<ColumnInfo><Column id=\"userName\" type=\"STRING\" size=\"256\"/><Column id=\"personNo\" type=\"STRING\" size=\"256\"/><Column id=\"gender\" type=\"STRING\" size=\"256\"/><Column id=\"company\" type=\"STRING\" size=\"256\"/><Column id=\"entryDate\" type=\"STRING\" size=\"256\"/><Column id=\"department\" type=\"STRING\" size=\"256\"/><Column id=\"rank\" type=\"STRING\" size=\"256\"/><Column id=\"military\" type=\"STRING\" size=\"256\"/><Column id=\"maritalState\" type=\"STRING\" size=\"256\"/><Column id=\"startDate\" type=\"STRING\" size=\"256\"/><Column id=\"endDate\" type=\"STRING\" size=\"256\"/><Column id=\"invertebrate\" type=\"STRING\" size=\"256\"/><Column id=\"phone\" type=\"STRING\" size=\"256\"/><Column id=\"cellPhone\" type=\"STRING\" size=\"256\"/><Column id=\"email\" type=\"STRING\" size=\"256\"/><Column id=\"address\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_education", this);
            obj._setContents("<ColumnInfo><Column id=\"schoolName\" type=\"STRING\" size=\"256\"/><Column id=\"eduMajor\" type=\"STRING\" size=\"256\"/><Column id=\"eduState\" type=\"STRING\" size=\"256\"/><Column id=\"eduDate\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_certification", this);
            obj._setContents("<ColumnInfo><Column id=\"certificateName\" type=\"STRING\" size=\"256\"/><Column id=\"takingDate\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_company", this);
            obj._setContents("<ColumnInfo><Column id=\"companyName\" type=\"STRING\" size=\"256\"/><Column id=\"startDate\" type=\"STRING\" size=\"256\"/><Column id=\"endDate\" type=\"STRING\" size=\"256\"/><Column id=\"companyWork\" type=\"STRING\" size=\"256\"/><Column id=\"rank\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_training", this);
            obj._setContents("<ColumnInfo><Column id=\"trainingName\" type=\"STRING\" size=\"256\"/><Column id=\"startDate\" type=\"STRING\" size=\"256\"/><Column id=\"endDate\" type=\"STRING\" size=\"256\"/><Column id=\"academyName\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_technology", this);
            obj._setContents("<ColumnInfo><Column id=\"technologyName\" type=\"STRING\" size=\"256\"/><Column id=\"proficiency\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_project", this);
            obj._setContents("<ColumnInfo><Column id=\"projectName\" type=\"STRING\" size=\"256\"/><Column id=\"startDate\" type=\"STRING\" size=\"256\"/><Column id=\"endDate\" type=\"STRING\" size=\"256\"/><Column id=\"customer\" type=\"STRING\" size=\"256\"/><Column id=\"company\" type=\"STRING\" size=\"256\"/><Column id=\"industry\" type=\"STRING\" size=\"256\"/><Column id=\"application\" type=\"STRING\" size=\"256\"/><Column id=\"part\" type=\"STRING\" size=\"256\"/><Column id=\"model\" type=\"STRING\" size=\"256\"/><Column id=\"operatingSystem\" type=\"STRING\" size=\"256\"/><Column id=\"language\" type=\"STRING\" size=\"256\"/><Column id=\"dbms\" type=\"STRING\" size=\"256\"/><Column id=\"tool\" type=\"STRING\" size=\"256\"/><Column id=\"communication\" type=\"STRING\" size=\"256\"/><Column id=\"other\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row/></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_eduState", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"state\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">0</Col><Col id=\"state\">입학</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"state\">중퇴</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"state\">졸업</Col></Row><Row><Col id=\"code\">3</Col><Col id=\"state\">졸업예정</Col></Row></Rows>");
            this.addChild(obj.name, obj);

            obj = new Dataset("ds_techRank", this);
            obj._setContents("<ColumnInfo><Column id=\"code\" type=\"STRING\" size=\"256\"/><Column id=\"value\" type=\"STRING\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"code\">0</Col><Col id=\"value\">A</Col></Row><Row><Col id=\"code\">1</Col><Col id=\"value\">B</Col></Row><Row><Col id=\"code\">2</Col><Col id=\"value\">C</Col></Row></Rows>");
            this.addChild(obj.name, obj);


            
            // UI Components Initialize
            obj = new Tab("Tab00", "absolute", "0%", "7", "100%", "1105", null, null, this);
            obj.set_taborder("0");
            obj.set_tabindex("1");
            obj.set_scrollbars("autoboth");
            this.addChild(obj.name, obj);
            obj = new Tabpage("tabpage1", this.Tab00);
            obj.set_text("개인 이력카드");
            this.Tab00.addChild(obj.name, obj);
            obj = new Static("Static00", "absolute", "5%", "23", null, "50", "5%", null, this.Tab00.tabpage1);
            obj.set_taborder("0");
            obj.set_text("개 인 이 력 카 드");
            obj.style.set_border("3 solid #000000ff");
            obj.style.set_align("center");
            obj.style.set_font("bold 22 Dotum");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static01", "absolute", "4.99%", "87", null, "25", "85.32%", null, this.Tab00.tabpage1);
            obj.set_taborder("1");
            obj.set_text("성명");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_align("center");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("name", "absolute", "14.58%", "87", null, "25", "69.67%", null, this.Tab00.tabpage1);
            obj.set_taborder("2");
            obj.set_text("Static02");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_align("center");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static03", "absolute", "30.23%", "87", null, "25", "54.21%", null, this.Tab00.tabpage1);
            obj.set_taborder("3");
            obj.set_text("주민등록번호");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_align("center");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("personNo", "absolute", "45.69%", "87", null, "25", "30.72%", null, this.Tab00.tabpage1);
            obj.set_taborder("4");
            obj.set_text("Static04");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_align("center");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static05", "absolute", "69.18%", "87", null, "25", "18%", null, this.Tab00.tabpage1);
            obj.set_taborder("5");
            obj.set_text("성별");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_align("center");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("gender", "absolute", "81.9%", "87", null, "25", "4.89%", null, this.Tab00.tabpage1);
            obj.set_taborder("6");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_align("center");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static07", "absolute", "4.99%", "111", null, "25", "85.32%", null, this.Tab00.tabpage1);
            obj.set_taborder("7");
            obj.set_text("소속회사");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_align("center");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("company", "absolute", "14.58%", "111", null, "25", "49.8%", null, this.Tab00.tabpage1);
            obj.set_taborder("8");
            obj.set_text("Static08");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_align("center");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static09", "absolute", "50.1%", "111", null, "25", "37.57%", null, this.Tab00.tabpage1);
            obj.set_taborder("9");
            obj.set_text("입사일");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_align("center");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("entryDate", "absolute", "62.33%", "111", null, "25", "4.89%", null, this.Tab00.tabpage1);
            obj.set_taborder("10");
            obj.set_text("Static10");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_align("center");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static11", "absolute", "4.99%", "135", null, "25", "85.32%", null, this.Tab00.tabpage1);
            obj.set_taborder("11");
            obj.set_text("부서");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_align("center");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("department", "absolute", "14.58%", "135", null, "25", "74.07%", null, this.Tab00.tabpage1);
            obj.set_taborder("12");
            obj.set_text("Static12");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_align("center");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static13", "absolute", "25.83%", "135", null, "25", "64.29%", null, this.Tab00.tabpage1);
            obj.set_taborder("13");
            obj.set_text("직위");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_align("center");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static32", "absolute", "23.68%", "159", null, "25", "41.68%", null, this.Tab00.tabpage1);
            obj.set_taborder("37");
            obj.style.set_border("1 solid #999999ff");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("rank", "absolute", "35.62%", "135", null, "25", "53.33%", null, this.Tab00.tabpage1);
            obj.set_taborder("14");
            obj.set_text("Static14");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_align("center");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static15", "absolute", "46.58%", "135", null, "25", "41.68%", null, this.Tab00.tabpage1);
            obj.set_taborder("15");
            obj.set_text("병역");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_align("center");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("military", "absolute", "58.22%", "135", null, "25", "29.94%", null, this.Tab00.tabpage1);
            obj.set_taborder("16");
            obj.set_text("Static16");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_align("center");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static17", "absolute", "69.96%", "135", null, "25", "17.12%", null, this.Tab00.tabpage1);
            obj.set_taborder("17");
            obj.set_text("결혼");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_align("center");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("marry", "absolute", "82.78%", "135", null, "25", "4.89%", null, this.Tab00.tabpage1);
            obj.set_taborder("18");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_align("center");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static19", "absolute", "4.99%", "159", null, "25", "76.22%", null, this.Tab00.tabpage1);
            obj.set_taborder("19");
            obj.set_text("병역 입대일 ~ 제대일");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_align("center");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("militaryStart", "absolute", "23.68%", "159", null, "25", "60.08%", null, this.Tab00.tabpage1);
            obj.set_taborder("20");
            obj.set_text("Static20");
            obj.style.set_border("0 solid #c0c0c0ff");
            obj.style.set_align("center");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static21", "absolute", "58.22%", "159", null, "25", "27.2%", null, this.Tab00.tabpage1);
            obj.set_taborder("21");
            obj.set_text("역종, 병과");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_align("center");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("militaryClass", "absolute", "72.7%", "159", null, "25", "4.89%", null, this.Tab00.tabpage1);
            obj.set_taborder("22");
            obj.set_text("Static22");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_align("center");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static23", "absolute", "4.99%", "205", null, "25", "82.49%", null, this.Tab00.tabpage1);
            obj.set_taborder("23");
            obj.set_text("전화");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_align("center");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("phone", "absolute", "17.42%", "205", null, "25", "45.5%", null, this.Tab00.tabpage1);
            obj.set_taborder("24");
            obj.set_text("Static24");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_align("center");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("cellPhone", "absolute", "54.4%", "205", null, "25", "4.89%", null, this.Tab00.tabpage1);
            obj.set_taborder("25");
            obj.set_text("Static25");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_align("center");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static26", "absolute", "4.99%", "229", null, "25", "82.49%", null, this.Tab00.tabpage1);
            obj.set_taborder("26");
            obj.set_text("E-Mail");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_align("center");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("email", "absolute", "17.42%", "229", null, "25", "4.89%", null, this.Tab00.tabpage1);
            obj.set_taborder("27");
            obj.set_text("Static27");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_align("center");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static28", "absolute", "4.99%", "253", null, "25", "82.49%", null, this.Tab00.tabpage1);
            obj.set_taborder("28");
            obj.set_text("주소");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_align("center");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("address", "absolute", "17.42%", "253", null, "25", "4.89%", null, this.Tab00.tabpage1);
            obj.set_taborder("29");
            obj.set_text("Static29");
            obj.style.set_border("1 solid #999999ff");
            obj.style.set_align("center");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Grid("Grid00", "absolute", "5.09%", "341", null, "200", "42.95%", null, this.Tab00.tabpage1);
            obj.set_taborder("30");
            obj.set_binddataset("ds_education");
            obj.set_autofittype("col");
            obj.set_cellclickbound("cell");
            obj.set_autoenter("select");
            obj.set_autoupdatetype("itemselect");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"128\"/><Column size=\"80\"/><Column size=\"47\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"학교명\"/><Cell col=\"1\" text=\"전공\"/><Cell col=\"2\" text=\"상태\"/><Cell col=\"3\" text=\"날짜\"/></Band><Band id=\"body\"><Cell edittype=\"text\" text=\"bind:schoolName\"/><Cell col=\"1\" edittype=\"text\" text=\"bind:eduMajor\"/><Cell col=\"2\" edittype=\"combo\" text=\"bind:eduState\" combodataset=\"ds_eduState\" combocodecol=\"state\" combodatacol=\"state\" combodisplayrowcount=\"-1\"/><Cell col=\"3\" edittype=\"date\" text=\"bind:eduDate\"/></Band></Format></Formats>");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Grid("Grid01", "absolute", "59.59%", "341", null, "200", "4.99%", null, this.Tab00.tabpage1);
            obj.set_taborder("31");
            obj.set_binddataset("ds_certification");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellclickbound("cell");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"158\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"자격증명\"/><Cell col=\"1\" text=\"취득일\"/></Band><Band id=\"body\"><Cell edittype=\"text\" text=\"bind:certificateName\"/><Cell col=\"1\" edittype=\"date\" text=\"bind:takingDate\"/></Band></Format></Formats>");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Grid("Grid02", "absolute", "5.09%", "591", null, "200", "4.99%", null, this.Tab00.tabpage1);
            obj.set_taborder("32");
            obj.set_binddataset("ds_company");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellclickbound("cell");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"111\"/><Column size=\"57\"/><Column size=\"55\"/><Column size=\"45\"/><Column size=\"80\"/></Columns><Rows><Row size=\"26\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"회사명\"/><Cell col=\"1\" colspan=\"2\" text=\"기간(YYYY-MM - YYYY.MM)\"/><Cell col=\"3\" rowspan=\"2\" text=\"직위\"/><Cell col=\"4\" rowspan=\"2\" text=\"담당업무\"/><Cell row=\"1\" col=\"1\" text=\"시작일\"/><Cell row=\"1\" col=\"2\" text=\"종료일\"/></Band><Band id=\"body\"><Cell edittype=\"text\" text=\"bind:companyName\"/><Cell col=\"1\" edittype=\"date\" text=\"bind:startDate\"/><Cell col=\"2\" edittype=\"date\" text=\"bind:endDate\"/><Cell col=\"3\" edittype=\"text\" text=\"bind:rank\"/><Cell col=\"4\" edittype=\"text\" text=\"bind:companyWork\"/></Band></Format></Formats>");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Grid("Grid03", "absolute", "5.09%", "851", null, "200", "42.95%", null, this.Tab00.tabpage1);
            obj.set_taborder("33");
            obj.set_binddataset("ds_training");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellclickbound("cell");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"61\"/><Column size=\"61\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"교육명\"/><Cell col=\"1\" text=\"시작일\"/><Cell col=\"2\" text=\"종료일\"/><Cell col=\"3\" text=\"기관명\"/></Band><Band id=\"body\"><Cell edittype=\"text\" text=\"bind:trainingName\"/><Cell col=\"1\" edittype=\"date\" text=\"bind:startDate\"/><Cell col=\"2\" edittype=\"date\" text=\"bind:endDate\"/><Cell col=\"3\" edittype=\"text\" text=\"bind:academyName\"/></Band></Format></Formats>");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Grid("Grid04", "absolute", "59.69%", "851", null, "200", "4.99%", null, this.Tab00.tabpage1);
            obj.set_taborder("34");
            obj.set_binddataset("ds_technology");
            obj.set_autofittype("col");
            obj.set_autoenter("select");
            obj.set_cellclickbound("cell");
            obj.set_selecttype("cell");
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell text=\"보유기술 및 외국어능력\"/><Cell col=\"1\" text=\"숙련도&#13;&#10;(A, B, C)\"/></Band><Band id=\"body\"><Cell edittype=\"text\" text=\"bind:technologyName\"/><Cell col=\"1\" edittype=\"combo\" text=\"bind:proficiency\" combodataset=\"ds_techRank\" combocodecol=\"value\" combodatacol=\"value\"/></Band></Format></Formats>");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("militaryEnd", "absolute", "42.17%", "159", null, "25", "41.68%", null, this.Tab00.tabpage1);
            obj.set_taborder("35");
            obj.set_text("Static20");
            obj.style.set_border("0 solid #c0c0c0ff");
            obj.style.set_align("center");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Static("Static31", "absolute", "39.82%", "159", null, "25", "57.73%", null, this.Tab00.tabpage1);
            obj.set_taborder("36");
            obj.set_text("~");
            obj.style.set_border("0 solid #c0c0c0ff");
            obj.style.set_align("center");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Button("btn_addEducation", "absolute", "48.73%", "312", "40", "25", null, null, this.Tab00.tabpage1);
            obj.set_taborder("38");
            obj.set_text("추가");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Button("btn_delEducation", "absolute", "53.13%", "312", "40", "25", null, null, this.Tab00.tabpage1);
            obj.set_taborder("39");
            obj.set_text("삭제");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Button("btn_addCertification", "absolute", "86.69%", "312", "40", "25", null, null, this.Tab00.tabpage1);
            obj.set_taborder("40");
            obj.set_text("추가");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Button("btn_delCertification", "absolute", "91.1%", "312", "40", "25", null, null, this.Tab00.tabpage1);
            obj.set_taborder("41");
            obj.set_text("삭제");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Button("btn_addCompany", "absolute", "86.69%", "561", "40", "25", null, null, this.Tab00.tabpage1);
            obj.set_taborder("42");
            obj.set_text("추가");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Button("btn_delCompany", "absolute", "91.1%", "561", "40", "25", null, null, this.Tab00.tabpage1);
            obj.set_taborder("43");
            obj.set_text("삭제");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Button("btn_addTraining", "absolute", "48.73%", "822", "40", "25", null, null, this.Tab00.tabpage1);
            obj.set_taborder("44");
            obj.set_text("추가");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Button("btn_delTraining", "absolute", "53.13%", "822", "40", "25", null, null, this.Tab00.tabpage1);
            obj.set_taborder("45");
            obj.set_text("삭제");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Button("btn_addTechnology", "absolute", "86.69%", "822", "40", "25", null, null, this.Tab00.tabpage1);
            obj.set_taborder("46");
            obj.set_text("추가");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Button("btn_delTechnology", "absolute", "91.1%", "822", "40", "25", null, null, this.Tab00.tabpage1);
            obj.set_taborder("47");
            obj.set_text("삭제");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Edit("edt_name", "absolute", "14.58%", "87", null, "25", "69.67%", null, this.Tab00.tabpage1);
            obj.set_taborder("48");
            obj.style.set_border("1 solid #999999ff");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Edit("edt_personNo", "absolute", "45.69%", "87", null, "25", "30.72%", null, this.Tab00.tabpage1);
            obj.set_taborder("49");
            obj.style.set_border("1 solid #999999ff");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Radio("edt_gender", "absolute", "83.37%", "87", null, "25", "5.09%", null, this.Tab00.tabpage1);
            this.Tab00.tabpage1.addChild(obj.name, obj);
            var edt_gender_innerdataset = new Dataset("edt_gender_innerdataset", this.Tab00.tabpage1.edt_gender);
            edt_gender_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">남</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">여</Col></Row></Rows>");
            obj.set_innerdataset(edt_gender_innerdataset);
            obj.set_taborder("50");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_direction("vertical");
            obj.set_value("0");
            obj.set_index("0");
            obj = new Edit("edt_company", "absolute", "14.58%", "111", null, "25", "49.8%", null, this.Tab00.tabpage1);
            obj.set_taborder("51");
            obj.style.set_border("1 solid #999999ff");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Calendar("edt_entryDate", "absolute", "62.33%", "111", null, "25", "4.89%", null, this.Tab00.tabpage1);
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj.set_taborder("52");
            obj.style.set_border("1 solid #999999ff");
            obj = new Edit("edt_department", "absolute", "14.58%", "135", null, "25", "74.07%", null, this.Tab00.tabpage1);
            obj.set_taborder("53");
            obj.style.set_border("1 solid #999999ff");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Edit("edt_rank", "absolute", "35.62%", "135", null, "25", "53.33%", null, this.Tab00.tabpage1);
            obj.set_taborder("54");
            obj.style.set_border("1 solid #999999ff");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Edit("edt_military", "absolute", "58.22%", "135", null, "25", "29.94%", null, this.Tab00.tabpage1);
            obj.set_taborder("55");
            obj.style.set_border("1 solid #999999ff");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Radio("edt_marry", "absolute", "83.66%", "138", null, "25", "5.28%", null, this.Tab00.tabpage1);
            this.Tab00.tabpage1.addChild(obj.name, obj);
            var edt_marry_innerdataset = new Dataset("edt_marry_innerdataset", this.Tab00.tabpage1.edt_marry);
            edt_marry_innerdataset._setContents("<ColumnInfo><Column id=\"codecolumn\" size=\"256\"/><Column id=\"datacolumn\" size=\"256\"/></ColumnInfo><Rows><Row><Col id=\"codecolumn\">0</Col><Col id=\"datacolumn\">미혼</Col></Row><Row><Col id=\"codecolumn\">1</Col><Col id=\"datacolumn\">기혼</Col></Row></Rows>");
            obj.set_innerdataset(edt_marry_innerdataset);
            obj.set_taborder("56");
            obj.set_direction("vertical");
            obj.set_codecolumn("codecolumn");
            obj.set_datacolumn("datacolumn");
            obj.set_value("0");
            obj.set_index("0");
            obj = new Calendar("edt_militaryStart", "absolute", "23.68%", "159", null, "25", "60.67%", null, this.Tab00.tabpage1);
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj.set_taborder("57");
            obj.style.set_border("1 solid #999999ff");
            obj = new Calendar("edt_militaryEnd", "absolute", "42.76%", "159", null, "25", "41.68%", null, this.Tab00.tabpage1);
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj.set_taborder("58");
            obj.style.set_border("1 solid #999999ff");
            obj = new Edit("edt_militaryClass", "absolute", "72.7%", "159", null, "25", "4.89%", null, this.Tab00.tabpage1);
            obj.set_taborder("59");
            obj.style.set_border("1 solid #999999ff");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Edit("edt_phone", "absolute", "17.42%", "205", null, "25", "45.5%", null, this.Tab00.tabpage1);
            obj.set_taborder("60");
            obj.style.set_border("1 solid #999999ff");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Edit("edt_cellPhone", "absolute", "54.4%", "205", null, "25", "4.89%", null, this.Tab00.tabpage1);
            obj.set_taborder("61");
            obj.style.set_border("1 solid #999999ff");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Edit("edt_email", "absolute", "17.42%", "229", null, "25", "4.89%", null, this.Tab00.tabpage1);
            obj.set_taborder("62");
            obj.style.set_border("1 solid #999999ff");
            this.Tab00.tabpage1.addChild(obj.name, obj);
            obj = new Edit("edt_address", "absolute", "17.42%", "253", null, "25", "4.89%", null, this.Tab00.tabpage1);
            obj.set_taborder("63");
            obj.style.set_border("1 solid #999999ff");
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
            obj._setContents("<Formats><Format id=\"default\"><Columns><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/><Column size=\"80\"/></Columns><Rows><Row size=\"42\" band=\"head\"/><Row size=\"24\" band=\"head\"/><Row size=\"24\"/></Rows><Band id=\"head\"><Cell rowspan=\"2\" text=\"프로젝트명&#13;&#10;(업무명)\"/><Cell col=\"1\" colspan=\"2\" text=\"참여기간&#13;&#10;(YYYY.MM-&#13;&#10;YYYY.MM)\"/><Cell col=\"3\" rowspan=\"2\" text=\"고객사\"/><Cell col=\"4\" rowspan=\"2\" text=\"근무회사\"/><Cell col=\"5\" colspan=\"2\" text=\"개발분야\"/><Cell col=\"7\" rowspan=\"2\" text=\"역할\"/><Cell col=\"8\" colspan=\"7\" text=\"개발환경\"/><Cell row=\"1\" col=\"1\" text=\"시작일\"/><Cell row=\"1\" col=\"2\" text=\"종료일\"/><Cell row=\"1\" col=\"5\" text=\"산업\"/><Cell row=\"1\" col=\"6\" text=\"응용\"/><Cell row=\"1\" col=\"8\" text=\"기종\"/><Cell row=\"1\" col=\"9\" text=\"O.S\"/><Cell row=\"1\" col=\"10\" text=\"언어\"/><Cell row=\"1\" col=\"11\" text=\"DBMS\"/><Cell row=\"1\" col=\"12\" text=\"TOOL\"/><Cell row=\"1\" col=\"13\" text=\"통신\"/><Cell row=\"1\" col=\"14\" text=\"기타\"/></Band><Band id=\"body\"><Cell edittype=\"text\" text=\"bind:projectName\"/><Cell col=\"1\" edittype=\"date\" text=\"bind:startDate\"/><Cell col=\"2\" edittype=\"date\" text=\"bind:endDate\"/><Cell col=\"3\" edittype=\"text\" text=\"bind:customer\"/><Cell col=\"4\" edittype=\"text\" text=\"bind:company\"/><Cell col=\"5\" edittype=\"text\" text=\"bind:industry\"/><Cell col=\"6\" edittype=\"text\" text=\"bind:application\"/><Cell col=\"7\" edittype=\"text\" text=\"bind:part\"/><Cell col=\"8\" edittype=\"text\" text=\"bind:model\"/><Cell col=\"9\" edittype=\"text\" text=\"bind:operatingSystem\"/><Cell col=\"10\" edittype=\"text\" text=\"bind:language\"/><Cell col=\"11\" edittype=\"text\" text=\"bind:dbms\"/><Cell col=\"12\" edittype=\"text\" text=\"bind:tool\"/><Cell col=\"13\" edittype=\"text\" text=\"bind:communication\"/><Cell col=\"14\" edittype=\"textarea\" text=\"bind:other\"/></Band></Format></Formats>");
            this.Tab00.tabpage2.addChild(obj.name, obj);
            obj = new Button("btn_addProject", "absolute", "91.1%", "102", "40", "25", null, null, this.Tab00.tabpage2);
            obj.set_taborder("4");
            obj.set_text("추가");
            this.Tab00.tabpage2.addChild(obj.name, obj);
            obj = new Button("btn_delProject", "absolute", "95.5%", "102", "40", "25", null, null, this.Tab00.tabpage2);
            obj.set_taborder("5");
            obj.set_text("삭제");
            this.Tab00.tabpage2.addChild(obj.name, obj);

            obj = new Button("Button00", "absolute", "76.76%", "5", null, "40", "12.01%", null, this);
            obj.set_taborder("1");
            obj.set_text("저장");
            this.addChild(obj.name, obj);

            obj = new Button("Button01", "absolute", "88.67%", "5", null, "40", "0.88%", null, this);
            obj.set_taborder("2");
            obj.set_text("취소");
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
            obj = new BindItem("item0","Tab00.tabpage1.personNo","text","ds_resume","personNo");
            this.addChild(obj.name, obj);
            obj.bind();
            obj = new BindItem("item1","Tab00.tabpage1.gender","text","ds_resume","gender");
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
            obj = new BindItem("item15","Tab00.tabpage1.name","text","ds_resume","userName");
            this.addChild(obj.name, obj);
            obj.bind();

            
            // Remove Reference
            obj = null;
        };
        

        
        // User Script
        this.registerScript("form_view_copy.xfdl", function() {
        //온로드
        this.form_onload = function(obj,e)
        {
        	//특정 데이터를 가져와서 열람할지 입력/수정 할지 결정
        }
        
        });


        
        // Regist UI Components Event
        this.on_initEvent = function()
        {
            this.addEventHandler("onload", this.form_onload, this);

        };

        this.loadIncludeScript("form_view_copy.xfdl");

       
    };
}
)();
