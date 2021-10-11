import type { Dayjs } from 'dayjs';
import dayjsGenerateConfig from 'rc-picker/es/generate/dayjs';
import generatePicker from 'antd/es/date-picker/generatePicker';
import 'antd/es/date-picker/style/index';

import 'moment/locale/zh-cn';
import locale from 'antd/es/date-picker/locale/zh_CN';


const DatePicker = generatePicker<Dayjs>(dayjsGenerateConfig);

export default DatePicker;
