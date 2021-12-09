/*
 * @Title: your project
 * @Author: huangjitao
 * @Date: 2021-11-03 17:00:35
 * @Description: description of this file
 */
import { parseISO, format } from 'date-fns'

export default function Date({ dateString }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}