package nexacro.sample.skillInventory.vo;

import com.nexacro.spring.data.DataSetRowTypeAccessor;

public class certificateVO implements DataSetRowTypeAccessor{

	private int certificateNo;
	private String certificateName;
	private String takingDate;//date
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
	public int getCertificateNo() {
		return certificateNo;
	}
	public void setCertificateNo(int certificateNo) {
		this.certificateNo = certificateNo;
	}
	public String getCertificateName() {
		return certificateName;
	}
	public void setCertificateName(String certificateName) {
		this.certificateName = certificateName;
	}
	public String getTakingDate() {
		return takingDate;
	}
	public void setTakingDate(String takingDate) {
		this.takingDate = takingDate;
	}
	@Override
	public String toString() {
		return "certificateVO [certificateNo=" + certificateNo
				+ ", certificateName=" + certificateName + ", takingDate="
				+ takingDate + "]";
	}

	
}
