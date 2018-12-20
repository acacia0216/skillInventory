package nexacro.sample.skillInventory.vo;

import com.nexacro.spring.data.DataSetRowTypeAccessor;

public class technologyVO implements DataSetRowTypeAccessor{

	private int technologyNo;
	private String technologyName;
	private String proficiency;
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
	public int getTechnologyNo() {
		return technologyNo;
	}
	public void setTechnologyNo(int technologyNo) {
		this.technologyNo = technologyNo;
	}
	public String getTechnologyName() {
		return technologyName;
	}
	public void setTechnologyName(String technologyName) {
		this.technologyName = technologyName;
	}
	public String getProficiency() {
		return proficiency;
	}
	public void setProficiency(String proficiency) {
		this.proficiency = proficiency;
	}
	@Override
	public String toString() {
		return "technologyVO [technologyNo=" + technologyNo
				+ ", technologyName=" + technologyName + ", proficiency="
				+ proficiency + "]";
	}
	
	
}
