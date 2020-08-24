import { PrismaClient } from "@prisma/client";
import { IncomingWebhook } from "@slack/webhook";

const prisma = new PrismaClient();

// POST /api/submission
// Required fields in body:
export default async function handle(req, res) {
  const result = await prisma.submissions.create({
    data: {
      ...req.body,
    },
  });

  const { form } = req.body;

  // send to asana
  if(form === "PARTNER") {
  }

  // send to slack
  if (form === "NEWSLETTER") {
    const { email } = req.body;
    if (email && email !== "") {
      const url =
        process.env.SLACK;
      const webhook = new IncomingWebhook(url);
      await webhook.send({ text: `*New Newsletter Signup:* ${email}` });
    }
  } else if (form === "CONTACT") {
    const {
      email,
      name,
      data: { message },
    } = req.body;
    if (email && email !== "") {
      const url =
        process.env.SLACK;
      const webhook = new IncomingWebhook(url);
      await webhook.send({
        text: `*New Contact Form:* \n*Email:* ${email}\n*Name:* ${name}\n*Message:* ${message}`,
      });
    }
  } else if (form === "PARTNER") {
    const {
      email,
      name,
      data: {
        role,
        canOffer,
        keyBenefits,
        organisation,
        keyChallenges,
        wishYouCouldDo,
      },
    } = req.body;
    if (email && email !== "") {
      const url =
        process.env.SLACK_PARTNER;
      const webhook = new IncomingWebhook(url);
      await webhook.send({
        text: `*Email:* ${email}
*Name:* ${name}
*Organsation:* ${organisation}
*Role:* ${role}

*What are the key things your organisation has to offer and share with other progressive organisations and the network?* 
${canOffer}

*What are the key ways your organisation could benefit from collaboration with other organisations and the network?* 
${keyBenefits}

*What are the key challenges your organisation faces with tech and data?* 
${keyChallenges}

*What are the things you wish you could do?* 
${wishYouCouldDo}`,
      });
    }
  }

  res.json(result);
}
