import { CaretLeft, CaretRight } from 'phosphor-react'

import { getWeekDays } from '~/utils/get-week-days'

import * as S from './styles'

export function Calendar() {
  const shortWeekdays = getWeekDays({ short: true })

  return (
    <S.CalendarContainer>
      <S.CalendarHeader>
        <S.CalendarTitle>
          Dezembro <span>2023</span>
        </S.CalendarTitle>

        <S.CalendarActions>
          <button>
            <CaretLeft />
          </button>

          <button>
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