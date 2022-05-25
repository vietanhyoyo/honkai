import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import InfoItem from './item/InfoItem';
import React from 'react';
import styles from './style';
import Menu from '../menu/Menu';
import Icon from 'react-native-vector-icons/FontAwesome'
import color from '../../../asset/color/color';

import { useState, useEffect, useContext } from 'react';
import { AuthorContext } from '../../App'
import FormDate from './item/FormDate';


function getFormattedDate(date) {
    var year = date.getFullYear();
    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : "0" + month;
    var day = date.getDate().toString();
    day = day.length > 1 ? day : "0" + day;
    return day + "/" + month + "/" + year;
}

export default function Home({ navigation }) {

    //Thông tin đăng nhập
    const author = useContext(AuthorContext);
    //Lọc ngày bắt đầu
    const [startDate, setStartDate] = useState(new Date(1970, 0, 18, 0, 0, 0));
    //Ngày kết thúc
    const [endDate, setEndDate] = useState(new Date(1970, 0, 19, 24, 0, 0));
    //Hiển thị ngày
    const [showDate, setShowDate] = useState(false);
    //Lọc giữa liệu
    const [filter, setFilter] = useState(false)
    //Dữ liệu gọi API
    const [datas, setDatas] = useState({
        data1: [{
            createUser: "Tôi là Quản lý sự cố",
            departmentCode: "MAYK-000",
            departmentName: "000",
            id: "16085401907418"
        }],
        data2: [{
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
    });

    useEffect(() => {
        if (author.author.access_token !== '') {

            // fetch('https://qlsc.maysoft.io/server/api/getAllDepartments', {
            //     method: "POST",
            //     body: {
            //         "mode": "formdata",
            //         "formdata": []
            //     },
            //     headers: {
            //         "Content-type": "application/json; charset=UTF-8",
            //         'Authorization': 'Bearer ' + author.author.access_token,
            //     }
            // })
            //     .then(response => response.json())
            //     .then(json => {
            //         setDatas(prev => ({
            //             ...prev, data1: json.data.data
            //         }))
            //     })
            //     .catch(err => console.log(err));


            fetch('https://qlsc.maysoft.io/server/api/getAllReports', {
                method: "POST",
                body: JSON.stringify({
                    page: "1"
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    'Authorization': 'Bearer ' + author.author.access_token,
                }
            })
                .then(response => response.json())
                .then(json => {
                    setDatas(prev => ({
                        ...prev, data2: json.data.data
                    }))
                })
                .catch(err => console.log(err));
        }
    }, [author.author.access_token])


    return (
        <View style={styles.home}>
            {showDate && <FormDate
                startDate={startDate}
                endDate={endDate}
                setShowDate={setShowDate}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
            />}
            <View style={styles.top}>
                <TouchableOpacity
                    style={styles.topcontent}
                    onPress={() => setShowDate(true)}
                >
                    <View
                        style={styles.input}
                    >
                        <Text>
                            {getFormattedDate(startDate)} - {getFormattedDate(endDate)}
                        </Text>
                    </View>
                    <Icon
                        style={{ position: 'absolute', right: 30, top: 24 }}
                        name='calendar' size={24} color={color.primary}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.filter}
                    onPress={() => setFilter(!filter)}
                >
                    <Icon name='filter' size={40} color={color.primary} />
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <ScrollView style={styles.scrollview}>
                    {filter ?
                        datas.data2.filter((ele) => {
                            return (startDate.getTime() < ele.reportTime &&
                                ele.reportTime < endDate.getTime())
                        }).map((ele, index) => {
                            return <InfoItem
                                key={index}
                                reporterName={ele.reporterName}
                                reportNo={ele.reportNo}
                                detailDescription={ele.detailDescription}
                                reportTime={ele.reportTime}
                            />
                        })
                        : datas.data2.map((ele, index) => {
                            return <InfoItem
                                key={index}
                                reporterName={ele.reporterName}
                                reportNo={ele.reportNo}
                                detailDescription={ele.detailDescription}
                                reportTime={ele.reportTime}
                            />
                        })}
                </ScrollView>
            </View>
            <View style={styles.bottom}>
                <Menu />
            </View>
        </View>
    )
}