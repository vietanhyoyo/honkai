//State khởi tạo của redux
const initState = {
    data: [{
        affectedToOrganization: null,
        affectedToPatient: null, affectedToPatientCause: null,
        affectedToPatientCauseDetail: null, analyzePhotoUrls: null,
        appliedTreatment: null, byHospital: null, byHospitalSource: null, "causeGroup": null,
        causeGroupDetail: null, coordinatedStaff: null, coordinatedStaffName: null,
        coordinatedStaffTitle: null, createTime: 1651858604, createUser: "ji59mCSODXVeIaikEM9m",
        departmentName: "Nhân sự", detailDescription: "sadas", detailPlace: null,
        detailRecommendation: null, detectionResult: null,
        detector: "Nguyễn Anh Kiện", detectorTitle: null, firstAffectValuation: "0",
        firstClassification: "0", firstSuggestedSolution: null, firstTreatment: null,
        fitWithRecommendRule: null, hasSuggestedSolution: null,
        id: "16518586043529", implementPlan: null, inchargedStaff: null, inchargedStaffName: null,
        inchargedStaffTitle: null, incidentObject: "3", incidentPlace: "Hdt39VlXlGjNYt3837mX", incidentType: null,
        incidentTypeDetail: null, levelReport: null, objectBirthday: null, objectDepartment: null,
        objectGender: "0", objectMedicalRecordNo: null, objectName: null, organizationId: "3y2ueC1kG99O9DS4ejwy",
        photoUrls: null, recoverAction: null, reportNo: "MAYR-22-00071", reportTime: 1651858600, reportType: "0",
        reportedToDocument: "0", reportedToPatien: "0", reportedToPersonInCharge: "0", reportedToRelative: "0",
        reporter: "ji59mCSODXVeIaikEM9m", reporterEmail: "nakien.it@gmail.com", reporterName: "Nguyễn Anh Kiện",
        reporterPhone: "0942964316", scheduleFinishDate: null, shortDescription: "sadas",
        status: "0", suggestedSolution: null,
        titleNote: null, updateTime: 1653439314, updateUser: "hGb5GCTn2O9hiXNm5WKQ",
        witnessName1: null,
        witnessName2: null
    }]
}

const rootReducer = (state = initState, action) => {
    //Các action của redux được định nghĩa
    switch (action.type) {
        case 'UPDATE_DATA':
            const payload = action.payload;
            return { ...state, data: payload };
        default:
            return state;
    }
}

export default rootReducer;