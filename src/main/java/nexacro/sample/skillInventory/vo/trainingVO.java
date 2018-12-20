package nexacro.sample.skillInventory.vo;

import com.nexacro.spring.data.DataSetRowTypeAccessor;

public class trainingVO implements DataSetRowTypeAccessor{

	private int trainingNo;
	private String trainingName;
	private String startDate;
	private String endDate;
	private String academyName;
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
	public int getTrainingNo() {
		return trainingNo;
	}
	public void setTrainingNo(int trainingNo) {
		this.trainingNo = trainingNo;
	}
	public String getTrainingName() {
		return trainingName;
	}
	public void setTrainingName(String trainingName) {
		this.trainingName = trainingName;
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
	public String getAcademyName() {
		return academyName;
	}
	public void setAcademyName(String academyName) {
		this.academyName = academyName;
	}
	@Override
	public String toString() {
		return "trainingVO [trainingNo=" + trainingNo + ", trainingName="
				+ trainingName + ", startDate=" + startDate + ", endDate="
				+ endDate + ", academyName=" + academyName + "]";
	}
	
	
}
