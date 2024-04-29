import dayjs from 'dayjs';

type Props = {
  date: string | undefined;
};

export default function FormatDate({ date }: Props) {
  const publishedAt = dayjs(date).format('YYYY年MM月DD日');
  return <time dateTime={date}>{publishedAt}</time>;
}
