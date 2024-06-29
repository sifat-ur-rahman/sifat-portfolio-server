import { z } from 'zod';

const projectValidation = z.object({
  body: z.object({
    projectName: z.string().min(1),
    type: z.string().min(1),
    img01: z.string().min(1),
    img02: z.string().min(1),
    img03: z.string().min(1),
    img04: z.string().min(1),
    details: z.string().min(1),
    liveUrl: z.string().min(1),
    clientCode: z.string().min(1),
    serverCode: z.string().min(1),
    technology: z.string().min(1),
  }),
});
const projectUpdateValidationSchema = z.object({
  body: z.object({
    projectName: z.string().min(1).optional(),
    type: z.string().min(1).optional(),
    img01: z.string().min(1).optional(),
    img02: z.string().min(1).optional(),
    img03: z.string().min(1).optional(),
    img04: z.string().min(1).optional(),
    details: z.string().min(1).optional(),
    liveUrl: z.string().min(1).optional(),
    clientCode: z.string().min(1).optional(),
    serverCode: z.string().min(1).optional(),
    technology: z.string().min(1).optional(),
  }),
});

export const projectValidationSchema = {
  projectValidation,
  projectUpdateValidationSchema,
};
