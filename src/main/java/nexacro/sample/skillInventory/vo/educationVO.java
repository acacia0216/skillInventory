package nexacro.sample.skillInventory.vo;

import com.nexacro.spring.data.DataSetRowTypeAccessor;

public class educationVO implements DataSetRowTypeAccessor{

	private int educationNo;
	private String schoolName;
	private String eduMajor;
	private String eduState;
	private String eduDate;
	private int resumeNo;
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
	public int getEducationNo() {
		return educationNo;
	}
	public void setEducationNo(int educationNo) {
		this.educationNo = educationNo;
	}
	public String getSchoolName() {
		return schoolName;
	}
	public void setSchoolName(String schoolName) {
		this.schoolName = schoolName;
	}
	public String getEduMajor() {
		return eduMajor;
	}
	public void setEduMajor(String eduMajor) {
		this.eduMajor = eduMajor;
	}
	public String getEduState() {
		return eduState;
	}
	public void setEduState(String eduState) {
		this.eduState = eduState;
	}
	public String getEduDate() {
		return eduDate;
	}
	public void setEduDate(String eduDate) {
		this.eduDate = eduDate;
	}
	@Override
	public String toString() {
		return "educationVO [educationNo=" + educationNo + ", schoolName="
				+ schoolName + ", eduMajor=" + eduMajor + ", eduState="
				+ eduState + ", eduDate=" + eduDate + "]";
	}
	
	
}
