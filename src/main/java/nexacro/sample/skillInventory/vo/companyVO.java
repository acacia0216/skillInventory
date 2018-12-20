package nexacro.sample.skillInventory.vo;

import com.nexacro.spring.data.DataSetRowTypeAccessor;

public class companyVO implements DataSetRowTypeAccessor{

	private int companyNo;
	private String companyName;
	private String startDate;
	private String endDate;
	private String companyWork;
	private String rank;
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
	public int getCompanyNo() {
		return companyNo;
	}
	public void setCompanyNo(int companyNo) {
		this.companyNo = companyNo;
	}
	public String getCompanyName() {
		return companyName;
	}
	public void setCompanyName(String companyName) {
		this.companyName = companyName;
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
	public String getCompanyWork() {
		return companyWork;
	}
	public void setCompanyWork(String companyWork) {
		this.companyWork = companyWork;
	}
	public String getRank() {
		return rank;
	}
	public void setRank(String rank) {
		this.rank = rank;
	}
	@Override
	public String toString() {
		return "companyVO [companyNo=" + companyNo + ", companyName="
				+ companyName + ", startDate=" + startDate + ", endDate="
				+ endDate + ", companyWork=" + companyWork + ", rank=" + rank
				+ "]";
	}
	
	
	
	
}
