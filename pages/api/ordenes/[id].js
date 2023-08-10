import { PrismaClient } from "@prisma/client";
export default async function handle(req, res) {
  const prisma = new PrismaClient();
  if (req.method === "POST") {
    const { id } = req.query;
    console.log(id);
    const ordenActualizada = await prisma.orden.update({
      where: {
        id: parseInt(id),
      },
      data: {
        est: true,
      },
    });

    res.status(200).json(ordenActualizada);
  }
}
