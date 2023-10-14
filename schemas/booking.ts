import { defineField } from 'sanity';

const booking = {
  name: 'booking',
  title: 'Booking',
  type: 'document',
  fields: [
    defineField({
      name: 'user',
      title: 'User',
      type: 'reference',
      to: [{ type: 'user' }],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'hotelRoom',
      title: 'Hotel Room',
      type: 'reference',
      to: [{ type: 'hotelRoom' }],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'checkinDate',
      title: 'Check-in Date',
      type: 'date',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'checkoutDate',
      title: 'Check-out Date',
      type: 'date',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'numberOfDays',
      title: 'Number Of Days',
      type: 'number',
      initialValue: 1,
      validation: Rule => Rule.required().min(1),
    }),
    defineField({
      name: 'discount',
      title: 'Discount',
      type: 'number',
      initialValue: 0,
      validation: Rule => Rule.required().min(0),
    }),
    defineField({
      name: 'adults',
      title: 'Adults',
      type: 'number',
      initialValue: 1,
      validation: Rule => Rule.required().min(1),
    }),
    defineField({
      name: 'children',
      title: 'Children',
      type: 'number',
      initialValue: 0,
      validation: Rule => Rule.required().min(0),
    }),
    defineField({
      name: 'totalPrice',
      title: 'Total Price',
      type: 'number',
      validation: Rule => Rule.required().min(0),
    }),
  ],
};

export default booking;
