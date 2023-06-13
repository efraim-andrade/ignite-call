import { CaretLeft, CaretRight } from 'phosphor-react'
import { useState } from 'react'
import dayjs from 'dayjs'

import { getWeekDays } from '~/utils/get-week-days'

import * as S from './styles'

export function Calendar() {
  const [currentDate, setCurrentDate] = useState(() => {
    return dayjs().set('date', 1)
  })

  function handlePreviousMonth() {
    const previousMonth = currentDate.subtract(1, 'month')

    setCurrentDate(previousMonth)
  }

  function handleNextMonth() {
    const previousMonth = currentDate.add(1, 'month')

    setCurrentDate(previousMonth)
  }

  const shortWeekdays = getWeekDays({ short: true })

  const currentMonth = currentDate.format('MMMM')
  const currentYear = currentDate.format('YYYY')

  return (
    <S.CalendarContainer>
      <S.CalendarHeader>
        <S.CalendarTitle>
          {currentMonth} <span>{currentYear}</span>
        </S.CalendarTitle>

        <S.CalendarActions>
          <button onClick={handlePreviousMonth} title="Previous month">
            <CaretLeft />
          </button>

          <button onClick={handleNextMonth} title="Next month">
            <CaretRight />
          </button>
        </S.CalendarActions>
      </S.CalendarHeader>

      <S.CalendarBody>
        <thead>
          <tr>
            {shortWeekdays.map((weekday) => {
              return <th key={weekday}>{weekday}.</th>
            })}
          </tr>
        </thead>

        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <S.CalendarDay>1</S.CalendarDay>
            </td>
            <td>
              <S.CalendarDay>2</S.CalendarDay>
            </td>
            <td>
              <S.CalendarDay disabled>3</S.CalendarDay>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <S.CalendarDay>5</S.CalendarDay>
            </td>
            <td>
              <S.CalendarDay>6</S.CalendarDay>
            </td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <S.CalendarDay disabled>10</S.CalendarDay>
            </td>
          </tr>
        </tbody>
      </S.CalendarBody>
    </S.CalendarContainer>
  )
}
