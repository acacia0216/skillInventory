package nexacro.sample.skillInventory.vo;

import com.nexacro.spring.data.DataSetRowTypeAccessor;

public class resumeVO implements DataSetRowTypeAccessor{

	private int resumeNo;
	private String userName;
	private int userNo;
	private String personNo;
	private String gender;
	private String company;
	private String entryDate;//데이트형
	private String department;
	private String rank;
	private String military;
	private String maritalState;
	private String startDate;//데이트형
	private String endDate;//데이트형
	private String invertebrate;
	private String phone;
	private String cellPhone;
	private String email;
	private String address;
	private String career;
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
	public int getResumeNo() {
		return resumeNo;
	}
	public void setResumeNo(int resumeNo) {
		this.resumeNo = resumeNo;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public int getUserNo() {
		return userNo;
	}
	public void setUserNo(int userNo) {
		this.userNo = userNo;
	}
	public String getPersonNo() {
		return personNo;
	}
	public void setPersonNo(String personNo) {
		this.personNo = personNo;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getCompany() {
		return company;
	}
	public void setCompany(String company) {
		this.company = company;
	}
	public String getEntryDate() {
		return entryDate;
	}
	public void setEntryDate(String entryDate) {
		this.entryDate = entryDate;
	}
	public String getDepartment() {
		return department;
	}
	public void setDepartment(String department) {
		this.department = department;
	}
	public String getRank() {
		return rank;
	}
	public void setRank(String rank) {
		this.rank = rank;
	}
	public String getMilitary() {
		return military;
	}
	public void setMilitary(String military) {
		this.military = military;
	}
	public String getMaritalState() {
		return maritalState;
	}
	public void setMaritalState(String maritalState) {
		this.maritalState = maritalState;
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
	public String getInvertebrate() {
		return invertebrate;
	}
	public void setInvertebrate(String invertebrate) {
		this.invertebrate = invertebrate;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getCellPhone() {
		return cellPhone;
	}
	public void setCellPhone(String cellPhone) {
		this.cellPhone = cellPhone;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getCareer() {
		return career;
	}
	public void setCareer(String career) {
		this.career = career;
	}
	@Override
	public String toString() {
		return "resumeVO [resumeNo=" + resumeNo + ", userName=" + userName
				+ ", userNo=" + userNo + ", personNo=" + personNo + ", gender="
				+ gender + ", company=" + company + ", entryDate=" + entryDate
				+ ", department=" + department + ", rank=" + rank
				+ ", military=" + military + ", maritalState=" + maritalState
				+ ", startDate=" + startDate + ", endDate=" + endDate
				+ ", invertebrate=" + invertebrate + ", phone=" + phone
				+ ", cellPhone=" + cellPhone + ", email=" + email
				+ ", address=" + address + ", career=" + career + ", rowType="
				+ rowType + "]";
	}
	
	
}

