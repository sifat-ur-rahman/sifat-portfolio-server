/* eslint-disable no-unused-vars */
//import { Schema, model, connect } from 'mongoose';

import { Model } from 'mongoose';

export type TBlog = {
  title: string;
  img: string;
  content: string;
};

export type BlogMethods = {
  isBlogExits(id: string): Promise<TBlog | null>;
};

export type BlogModel = Model<TBlog, Record<string, never>, BlogMethods>;
