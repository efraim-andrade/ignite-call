import { NextApiRequest, NextApiResponse } from 'next'

import { prisma } from '~/lib/prisma'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const username = String(req.query.username)
  const { year, month } = req.query

  if (!year || !month) {
    return res.status(400).json({ error: 'Year or Month not provided' })
  }

  const user = await prisma.user.findUnique({
    where: { username },
  })

  if (!user) {
    return res.status(404).json({ error: 'User does not exist' })
  }

  const availableWeekdays = await prisma.userTimeInterval.findMany({
    select: {
      week_day: true,
    },
    where: {
      user_id: user.id,
    },
  })

  const blockedWeekdays = Array.from({ length: 7 }, (_, i) => i).filter(
    (weekday) => {
      return !availableWeekdays.some(
        (availableWeekday) => availableWeekday.week_day === weekday,
      )
    },
  )

  const blockedDatesRaw = await prisma.$queryRaw`
    SELECT * 
    FROM schedulings S
    
    WHERE S.user_id = ${user.id}
      AND DATE_FORMAT(S.date, '%Y-%m') = ${`${year}-${month}`}
  `

  return res.json({ blockedWeekdays, blockedDatesRaw })
}
