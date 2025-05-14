import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const contactSchema = new Schema(
  {
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, default: null },
    isFavourite: { type: Boolean, default: false },
    contactType: {
      type: String,
      enum: ['personal', 'home'],
      default: 'personal',
    },
  },
  { timestamps: true }
);

const Contact = model('Contact', contactSchema);

export default Contact;
