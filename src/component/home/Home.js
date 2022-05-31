import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import InfoItem from './item/InfoItem';
import React from 'react';
import styles from './style';
import Menu from '../menu/Menu';
import Icon from 'react-native-vector-icons/FontAwesome'
import color from '../../../asset/color/color';
import { connect } from 'react-redux';
import { useState, useEffect, useContext } from 'react';
import { AuthorContext } from '../../App';
import FormFilter from './item/FormFilter';
import PageButtons from './PageButtons';

import DateTimePicker from '@react-native-community/datetimepicker';


function getFormattedDate(date) {
    var year = date.getFullYear();
    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : "0" + month;
    var day = date.getDate().toString();
    day = day.length > 1 ? day : "0" + day;
    return day + "/" + month + "/" + year;
}

let valueScroll = 0;

function Home(props) {

    //Chuyễn trang
    const [page, setPage] = React.useState('1')
    //Thông tin đăng nhập
    const author = useContext(AuthorContext);
    //Hiển thị ngày
    const [showDate, setShowDate] = React.useState(false);
    //Trạng thái
    const [status, setStatus] = React.useState('start');
    //Show menu
    const [displayMenu, setDisplayMenu] = React.useState(true);

    //Dữ liệu được hiển thị
    const [displayData, setDisplayData] = React.useState({
        data: props.dataAPI
    })
    //filter
    const [filter, setFilter] = React.useState({
        startDate: new Date(1970, 0, 18, 0, 0, 0),
        endDate: new Date(1970, 0, 25, 0, 0, 0),
        status: 3,
        type: 2
    })
    const changeStatusFilter = (input) => {
        setFilter(prev => ({ ...prev, status: input }))
    }
    const changeTypeFilter = (input) => {
        setFilter(prev => ({ ...prev, type: input }))
    }
    //Hiển thị bảng lọc
    const [showFilterTable, setShowFilterTable] = useState(false)

    useEffect(() => {
        if (author.author.access_token !== '') {

            fetch('https://qlsc.maysoft.io/server/api/getAllReports', {
                method: "POST",
                body: JSON.stringify({
                    page: page
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8",
                    'Authorization': 'Bearer ' + author.author.access_token,
                }
            })
                .then(response => response.json())
                .then(json => {
                    //Cập nhật lại Redux
                    props.updateData(json.data.data);
                })
                .catch(err => console.log(err));
        }
    }, [author.author.access_token, page]);

    useEffect(() => {
        let datafilter = {
            data: props.dataAPI
        }
        if (filter.startDate !== undefined) {
            let start = filter.startDate;
            start.setHours(0)
            datafilter.data = datafilter.data.filter(ele => {
                return ele.reportTime >= start.getTime();
            })
        }
        if (filter.endDate !== undefined) {
            let end = filter.endDate;
            end.setHours(23, 59);
            datafilter.data = datafilter.data.filter(ele => {
                return ele.reportTime <= end.getTime();
            })
        }
        if (filter.status !== 3) {
            let status = filter.status;
            datafilter.data = datafilter.data.filter(ele => {
                return Number(ele.status) === status;
            })
        }
        if (filter.type !== 2) {
            let type = filter.type;
            datafilter.data = datafilter.data.filter(ele => {
                return Number(ele.reportType) === type;
            })
        }
        setDisplayData(datafilter);
    }, [filter, props.dataAPI])

    const changeDate = (event, selectedDate) => {
        const currentDate = selectedDate;
        setShowDate(false);
        if (status === 'start')
            setFilter(prev => ({
                ...prev, startDate: new Date(currentDate)
            }))
        else setFilter(prev => ({
            ...prev, endDate: new Date(currentDate)
        }))
    };

    const scrollY = function (event) {
        const offsetY = event.nativeEvent.contentOffset.y;
        if (offsetY < valueScroll) {
            setDisplayMenu(true);
            valueScroll = offsetY;
        }
        else {
            setDisplayMenu(false);
            valueScroll = offsetY;
        }

    }

    return (
        <View style={styles.home}>
            {showDate && status === 'start' && <DateTimePicker
                testID="dateTimePicker"
                value={filter.startDate}
                mode='date'
                is24Hour={true}
                onChange={changeDate}
            />}
            {showDate && status === 'end' && <DateTimePicker
                testID="dateTimePicker"
                value={filter.endDate}
                mode='date'
                is24Hour={true}
                onChange={changeDate}
            />}
            {showFilterTable && <FormFilter
                setShowFilterTable={setShowFilterTable}
                changeStatusFilter={changeStatusFilter}
                unShow={() => setShowFilterTable(false)}
                changeTypeFilter={changeTypeFilter}
                status={filter.status}
                type={filter.type}
            />}
            <View style={styles.top}>
                <View style={styles.topcontent} >
                    <View style={styles.input} >
                        <TouchableOpacity
                            onPress={() => {
                                setShowDate(true);
                                setStatus('start');
                            }}
                        >
                            <Text>
                                {getFormattedDate(filter.startDate)}
                            </Text>
                        </TouchableOpacity>
                        <Text>{' - '}</Text>
                        <TouchableOpacity
                            onPress={() => {
                                setShowDate(true);
                                setStatus('end');
                            }}
                        >
                            <Text>
                                {getFormattedDate(filter.endDate)}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <Icon
                        style={{ position: 'absolute', right: 30, top: 24 }}
                        name='calendar' size={24} color={color.primary}
                    />
                </View>
                <TouchableOpacity
                    style={styles.filter}
                    onPress={() => setShowFilterTable(true)}
                >
                    <Icon name='filter' size={40} color={color.primary} />
                </TouchableOpacity>
            </View>
            <View style={styles.body}>
                <ScrollView style={styles.scrollview}
                    onScroll={e => scrollY(e)}
                >
                    {displayData.data.map((ele, index) => {
                        return <InfoItem
                            key={index}
                            reporterName={ele.reporterName}
                            reportNo={ele.reportNo}
                            detailDescription={ele.detailDescription}
                            reportTime={ele.reportTime}
                            incidentObject={ele.incidentObject}
                            status={ele.status}
                            reportType={ele.reportType}
                        />
                    })}
                </ScrollView>
            </View>
            <View >
                <PageButtons
                    page={page}
                    changePage={(value) => setPage(value)}
                />{displayMenu &&
                    <View style={styles.bottom}><Menu /></View>}
            </View>
        </View>
    )
}
//Lấy state của redux
const mapStateToProps = (state) => {
    return {
        dataAPI: state.data
    }
}
//Tạo action để gọi đến redux
const mapDispatchToProps = (dispatch) => {
    return {
        updateData: (input) => dispatch({ type: 'UPDATE_DATA', payload: input })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);