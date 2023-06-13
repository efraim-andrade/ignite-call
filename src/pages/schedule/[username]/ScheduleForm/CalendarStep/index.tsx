import { useState } from 'react'
import dayjs from 'dayjs'

import { Calendar } from '~/components/Calendar'

import * as S from './styles'

export function CalendarStep() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const isDateSelected = !!selectedDate

  const weekday = selectedDate ? dayjs(selectedDate).format('dddd') : ''
  const describedDate = selectedDate
    ? dayjs(selectedDate).format('DD[ de ]MMMM')
    : ''

  return (
    <S.Container isTimePickerOpen={isDateSelected}>
      <Calendar selectedDate={selectedDate} onDateSelected={setSelectedDate} />

      {isDateSelected && (
        <S.TimePicker>
          <S.TimePickerHeader>
            {weekday} <span>{describedDate}</span>
          </S.TimePickerHeader>

          <S.TimePickerList>
            <S.TimePickerItem>08:00h</S.TimePickerItem>
            <S.TimePickerItem disabled>08:00h</S.TimePickerItem>
            <S.TimePickerItem>08:00h</S.TimePickerItem>
            <S.TimePickerItem>08:00h</S.TimePickerItem>
            <S.TimePickerItem>08:00h</S.TimePickerItem>
            <S.TimePickerItem>08:00h</S.TimePickerItem>
            <S.TimePickerItem>08:00h</S.TimePickerItem>
            <S.TimePickerItem>08:00h</S.TimePickerItem>
            <S.TimePickerItem>08:00h</S.TimePickerItem>
            <S.TimePickerItem>08:00h</S.TimePickerItem>
            <S.TimePickerItem>08:00h</S.TimePickerItem>
            <S.TimePickerItem>08:00h</S.TimePickerItem>
            <S.TimePickerItem>18:00h</S.TimePickerItem>
          </S.TimePickerList>
        </S.TimePicker>
      )}
    </S.Container>
  )
}
