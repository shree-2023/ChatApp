import { Request,Response } from "express";
import { prisma } from "../prisma";

export const createConversation=async(req:Request,res:Response)=>{
    const type = req?.body?.type;
    const members = req?.body?.members;
    try {
        const conversation = await prisma.conversation.create({
          data: {
            type: type,
            members: {
              create: members?.map((user: any) => ({ userId: user?.id })),
            },
            groupTitle: req?.body?.groupTitle,
            isGroup: req?.body?.isGroup,
          },
          include: { members: { include: { user: true } } },
    });
    return res.json(conversation);
}
catch (error) {
    console.log(error);
    return res.json({ error: error?.toString() });
  }
};
export const getConversations = async (req: Request, res: Response) => {
    const userId = req?.user?.id;
    const searchValue = req?.body?.searchValue;
    try {
      const conversations = await prisma.conversation.findMany({
        where: {
          AND: [{ members: { some: { userId } } }],
          OR: searchValue
            ? [
                { groupTitle: { contains: searchValue, mode: "insensitive" } },
                {
                  members: {
                    some: {
                      user: {
                        name: { contains: searchValue, mode: "insensitive" },
                      },
                    },
                  },
                },
                {
                  members: {
                    some: {
                      user: {
                        email: { contains: searchValue, mode: "insensitive" },
                      },
                    },
                  },
                },
              ]
            : undefined,
        },
        include: { members: { include: { user: true } } },
        orderBy: { createdAt: "desc" },
      });
      return res.json(conversations);
    } catch (error) {
      console.log(error);
      return res.json({ error: error?.toString() });
    }
  };