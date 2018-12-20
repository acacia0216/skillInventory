package nexacro.sample.skillInventory.vo;

public class resultVO {
	private int userNo;
	private String userName;
	private String gender;
	private String company;
	private String career;
	private String address;
	private String education;
	
	public int getUserNo() {
		return userNo;
	}
	public void setUserNo(int userNo) {
		this.userNo = userNo;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
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
	public String getCareer() {
		return career;
	}
	public void setCareer(String career) {
		this.career = career;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getEducation() {
		return education;
	}
	public void setEducation(String education) {
		this.education = education;
	}
	@Override
	public String toString() {
		return "resultVO [userNo=" + userNo + ", userName=" + userName
				+ ", gender=" + gender + ", company=" + company + ", career="
				+ career + ", address=" + address + ", education=" + education
				+ "]";
	}
	
	
}
