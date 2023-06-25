import { format, Locale } from 'date-fns';

interface Options {
    locale?: Locale | undefined;
    weekStartsOn?: 0 | 2 | 4 | 6 | 1 | 3 | 5 | undefined;
    firstWeekContainsDate?: number | undefined;
    useAdditionalWeekYearTokens?: boolean | undefined;
    useAdditionalDayOfYearTokens?: boolean | undefined;
}

const formatStringDate = (
    date: string,
    desiredFormat: string,
    desiredOptions?: Options | undefined
) => {
    return format(Date.parse(date), desiredFormat, desiredOptions);
};

export default formatStringDate;
