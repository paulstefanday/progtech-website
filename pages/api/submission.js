import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// POST /api/submission
// Required fields in body: 
export default async function handle(req, res) {
  const result = await prisma.submissions.create({
    data: {
      ...req.body,
    },
  })
  res.json(result)
}
