import { z } from 'zod';

//Create Validation Schema------

const blogValidationSchema = z.object({
  body: z.object({
    title: z.string().min(1),
    img: z.string(),
    content: z.string().min(1),
  }),
});

//Update Validation Schema------

const blogUpdateValidationSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    img: z.string().optional(),
    content: z.string().optional(),
  }),
});
export const blogValidation = {
  blogValidationSchema,
  blogUpdateValidationSchema,
};
