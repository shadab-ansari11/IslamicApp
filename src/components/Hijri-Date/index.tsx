/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { View, Text } from 'native-base';


const HijriDate = () => {
    // const {datetime,month} = props;
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState({});
    const [hijriDate, setHijriDate] = useState('');
    const [hijriMonth, setHijriMonth] = useState('');
    const [hijriYear, setHijriYear] = useState('');

    const date = new Date();
    const year = date.getFullYear();
    let month: any = date.getMonth() + 1;
    let datetime: any = date.getDate();

    if (datetime < 10) { datetime = '0' + datetime; }
    if (month < 10) { month = '0' + month; }

    const formattedToday = datetime + '-' + month + '-' + year;

    const getHijriDate = async () => {
        try {
            const response = await fetch(
                `http://api.aladhan.com/v1/gToH/${formattedToday}`
            );
            const json = await response.json();
            setData(json.data);
            setHijriDate(json.data.hijri.day);
            setHijriMonth(json.data.hijri.month.en);
            setHijriYear(json.data.hijri.year);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getHijriDate();
    }, [data]);

    return (
        <View>
            <View>
                <View mt={2}>
                    <Text fontSize={16}
                        color='#0DB440'
                        alignSelf='stretch'>
                        Today
                    </Text>
                </View>

                {isLoading ? (
                    <ActivityIndicator size="small" color="#0DB440" />
                ) : (
                    <Text color='#0DB440' fontSize={16} fontWeight="bold">
                        {hijriDate + ' ' + hijriMonth + ',' + hijriYear + ' Hijri'}
                    </Text>
                )}
            </View>
            <View>
                {/* <Image source={require('../../assets/pngtree-gold-glitter.png')} alt="Alternate Text"
                    style={{
                        height: 60,
                        width: 39,
                    }} /> */}
            </View>
        </View>
    );
};

export default HijriDate;
