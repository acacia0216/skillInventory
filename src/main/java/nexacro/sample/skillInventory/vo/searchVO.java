package nexacro.sample.skillInventory.vo;

public class searchVO {
	private String condition;
	private String keyword;
	private String gender;
	private String maritalState;
	private String age;
	private String fromAge;
	private String toAge;
	private String certificate;
	private String career;
	private String careerState;
	private String education;
	private String technology;
	
	
	
	public String getAge() {
		return age;
	}
	public void setAge(String age) {
		this.age = age;
	}
	public String getFromAge() {
		return fromAge;
	}
	public void setFromAge(String fromAge) {
		this.fromAge = fromAge;
	}
	public String getToAge() {
		return toAge;
	}
	public void setToAge(String toAge) {
		this.toAge = toAge;
	}
	public String getCareerState() {
		return careerState;
	}
	public void setCareerState(String careerState) {
		this.careerState = careerState;
	}
	public String getCondition() {
		return condition;
	}
	public void setCondition(String condition) {
		this.condition = condition;
	}
	public String getKeyword() {
		return keyword;
	}
	public void setKeyword(String keyword) {
		this.keyword = keyword;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getMaritalState() {
		return maritalState;
	}
	public void setMaritalState(String maritalState) {
		this.maritalState = maritalState;
	}
	
	public String getCertificate() {
		return certificate;
	}
	public void setCertificate(String certificate) {
		this.certificate = certificate;
	}
	public String getCareer() {
		return career;
	}
	public void setCareer(String career) {
		this.career = career;
	}
	public String getEducation() {
		return education;
	}
	public void setEducation(String education) {
		this.education = education;
	}
	public String getTechnology() {
		return technology;
	}
	public void setTechnology(String technology) {
		this.technology = technology;
	}
	@Override
	public String toString() {
		return "searchVO [condition=" + condition + ", keyword=" + keyword
				+ ", gender=" + gender + ", maritalState=" + maritalState
				+ ", fromAge=" + fromAge + ", toAge=" + toAge
				+ ", certificate=" + certificate + ", career=" + career
				+ ", careerState=" + careerState + ", education=" + education
				+ ", technology=" + technology + "]";
	}
	
}
