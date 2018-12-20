package nexacro.sample.skillInventory.vo;

import com.nexacro.spring.data.DataSetRowTypeAccessor;

public class projectVO implements DataSetRowTypeAccessor{

	private int projectNo;
	private String projectName;
	private String startDate;//date
	private String endDate;//dtae
	private String customer;
	private String company;
	private String industry;
	private String application;
	private String part;
	private String model;
	private String operatingSystem;
	private String language;
	private String dbms;
	private String tool;
	private String communication;
	private String other;
	private int userNo;
private int rowType;
	
	@Override
	public int getRowType() {
		// TODO Auto-generated method stub
		return this.rowType;
	}
	@Override
	public void setRowType(int rowType) {
		// TODO Auto-generated method stub
		this.rowType = rowType;
	}
	
	
	public String getCompany() {
		return company;
	}
	public void setCompany(String company) {
		this.company = company;
	}
	public int getUserNo() {
		return userNo;
	}
	public void setUserNo(int userNo) {
		this.userNo = userNo;
	}
	public int getProjectNo() {
		return projectNo;
	}
	public void setProjectNo(int projectNo) {
		this.projectNo = projectNo;
	}
	public String getProjectName() {
		return projectName;
	}
	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}
	public String getStartDate() {
		return startDate;
	}
	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}
	public String getEndDate() {
		return endDate;
	}
	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}
	public String getCustomer() {
		return customer;
	}
	public void setCustomer(String customer) {
		this.customer = customer;
	}
	public String getIndustry() {
		return industry;
	}
	public void setIndustry(String industry) {
		this.industry = industry;
	}
	public String getApplication() {
		return application;
	}
	public void setApplication(String application) {
		this.application = application;
	}
	public String getPart() {
		return part;
	}
	public void setPart(String part) {
		this.part = part;
	}
	public String getModel() {
		return model;
	}
	public void setModel(String model) {
		this.model = model;
	}
	public String getOperatingSystem() {
		return operatingSystem;
	}
	public void setOperatingSystem(String operatingSystem) {
		this.operatingSystem = operatingSystem;
	}
	public String getLanguage() {
		return language;
	}
	public void setLanguage(String language) {
		this.language = language;
	}
	public String getDbms() {
		return dbms;
	}
	public void setDbms(String dbms) {
		this.dbms = dbms;
	}
	public String getTool() {
		return tool;
	}
	public void setTool(String tool) {
		this.tool = tool;
	}
	public String getCommunication() {
		return communication;
	}
	public void setCommunication(String communication) {
		this.communication = communication;
	}
	public String getOther() {
		return other;
	}
	public void setOther(String other) {
		this.other = other;
	}
	@Override
	public String toString() {
		return "projectVO [projectNo=" + projectNo + ", projectName="
				+ projectName + ", startDate=" + startDate + ", endDate="
				+ endDate + ", customer=" + customer + ", industry=" + industry
				+ ", application=" + application + ", part=" + part
				+ ", model=" + model + ", operatingSystem=" + operatingSystem
				+ ", language=" + language + ", dbms=" + dbms + ", tool="
				+ tool + ", communication=" + communication + ", other="
				+ other + "]";
	}
	
	
}
