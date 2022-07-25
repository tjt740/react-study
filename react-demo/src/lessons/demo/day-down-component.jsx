import React from 'react';

import strftime from 'strftime';
import dayjs from 'dayjs';
//导入持续时间插件
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

class DayDownComponent extends React.Component {
    state = {
        countObj: {
            endTime: dayjs()
                .add(Number(this.props.expirationDate), 's')
                .toISOString(),
            showTime: strftime(
                '%H:%M:%S',
                new Date(0, 0, 0, 0, 0, this.props.expirationDate)
            ),
        },
        payTimer: null,
    };

    componentDidMount() {
        console.log(dayjs()
        .add(Number(this.props.expirationDate), 's')
        .toISOString())
        setTimeout(() => {
            if (this.props.expirationDate) {
             
                this.setState({
                    countObj: {
                        endTime: dayjs()
                            .add(Number(this.props.expirationDate), 's')
                            .toISOString(),
                        showTime: strftime(
                            '%H:%M:%S',
                            new Date(0, 0, 0, 0, 0, this.props.expirationDate)
                        ),
                    },
                    payTimer: setInterval(() => {
                        this.countDown();
                    }, 1000),
                });
            }
        });
    }

    countDown() {
        const duration = dayjs.duration(
            dayjs(this.state.countObj.endTime) - dayjs()
        );

      
        const hours =
            duration.hours() % 60 < 10
                ? '0' + (duration.hours() % 60)
                : duration.hours() % 60;

        const minutes =
            duration.minutes() % 60 < 10
                ? '0' + (duration.minutes() % 60)
                : duration.minutes() % 60;
        let seconds =
            duration.seconds() % 60 < 10
                ? '0' + (duration.seconds() % 60)
                : duration.seconds() % 60;
        if (hours <= 0 && minutes <= 0 && seconds <= 0) {
            this.setState({
                countObj: {
                    endTime: this.state.countObj.endTime,
                    showTime: '倒计时结束!!',
                },
            });
            clearInterval(this.state.payTimer);
        } else {
            this.setState({
                countObj: {
                    endTime: this.state.countObj.endTime,
                    showTime: `${hours}:${minutes}:${seconds}`,
                },
            });
        }
    }

    render() {
        return (
            <div>
                <h1> 使用Day.jsx </h1>
                <h3> {this.state.countObj.showTime}</h3>
            </div>
        );
    }
}

export default DayDownComponent;
